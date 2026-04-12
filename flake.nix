{
  description = "ProjectsReview local LAN + tunnel demo";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        e2e = pkgs.writeShellApplication {
          name = "e2e";
          runtimeInputs = with pkgs; [ bash coreutils curl nodejs_20 chromium libxml2 libxslt ];
          text = ''
            set -euo pipefail

            export PLAYWRIGHT_CHROMIUM_PATH="${pkgs.chromium}/bin/chromium"
            NODE="${pkgs.nodejs_20}/bin/node"
            NPM="${pkgs.nodejs_20}/bin/npm"

            cleanenv() {
              env -i \
                HOME="$HOME" \
                USER="''${USER:-projectsreview}" \
                PATH="$PATH" \
                PLAYWRIGHT_CHROMIUM_PATH="$PLAYWRIGHT_CHROMIUM_PATH" \
                "$@"
            }

            if [ ! -d node_modules ]; then
              cleanenv "$NPM" install
            fi

            cleanenv "$NPM" run dev >/tmp/projectsreview-e2e-dev.log 2>&1 &
            dev_pid=$!

            trap 'kill "$dev_pid" >/dev/null 2>&1 || true' EXIT INT TERM

            for _ in $(seq 1 120); do
              if curl -fsS http://127.0.0.1:4321 >/dev/null 2>&1; then
                break
              fi
              sleep 0.5
            done

            cleanenv "$NODE" scripts/e2e-check.cjs http://127.0.0.1:4321/report
          '';
        };
        demo = pkgs.writeShellApplication {
          name = "demo";
          runtimeInputs = with pkgs; [ bash coreutils curl openssh libxml2 libxslt ];
          text = ''
            export PATH="/run/current-system/sw/bin:$PATH"
            set -euo pipefail

            PYTHON="$(command -v python3 || command -v python || echo python3)"

            root="''${PROJECTS_REVIEW_DIR:-''${PWD}}"
            genius="''${GENIUS_DIR:-''${root}/../Genius}"

            need() {
              [ -e "''$1" ] || {
                printf 'Missing file: %s\n' "''$1" >&2
                exit 1
              }
            }

            build() {
              local d="''$1"
              local cmd="''$2"

              if [ ! -x "''$d/node_modules/.bin/npm" ] && [ ! -d "''$d/node_modules" ]; then
                (cd "''$d" && PATH="$(dirname "$(which node)"):$PATH" npm install)
              fi
              (cd "''$d" && PATH="$(dirname "$(which node)"):$PATH" npm run "''$cmd")
            }

            wait_port() {
              local port="''$1"
              local url="http://127.0.0.1:''$port"

              for _ in $(seq 1 120); do
                if curl -fsS "''$url" >/dev/null 2>&1; then
                  return 0
                fi
                sleep 0.5
              done

              printf 'Server did not become ready: %s\n' "''$url" >&2
              exit 1
            }

            wait_url() {
              local log="''$1"

              for _ in $(seq 1 120); do
                if [ -s "''$log" ]; then
                  local url
                  url=$(grep -Eo '[^[:space:]]*\.(localhost\.run|lhr\.life)' "''$log" | grep -v 'admin.localhost.run' | head -n1 | sed 's|^https\?://||' || true)
                  if [ -n "''$url" ]; then
                    printf 'https://%s' "''$url"
                    return 0
                  fi
                fi
                sleep 0.5
              done

              printf 'Tunnel URL did not appear in %s\n' "''$log" >&2
              exit 1
            }

            spawn() {
              local port="''$1"
              local log="''$2"

              ssh \
                -N \
                -o ExitOnForwardFailure=yes \
                -o ServerAliveInterval=30 \
                -o ServerAliveCountMax=2 \
                -o StrictHostKeyChecking=no \
                -o UserKnownHostsFile=/dev/null \
                -R 80:127.0.0.1:"''$port" \
                nokey@localhost.run \
                >"''$log" 2>&1 &
            }

            trap 'jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            need "''$root/package.json"
            need "''$genius/package.json"

            printf 'Building ProjectsReview...\n'
            build "''$root" build

            printf 'Building Genius static site...\n'
            build "''$genius" build:site

            printf 'Serving local static sites...\n'
            $PYTHON -m http.server 4173 --bind 127.0.0.1 --directory "''$root/dist" >/tmp/projects-review.http.log 2>&1 &
            proj_srv=$!
            $PYTHON -m http.server 4174 --bind 127.0.0.1 --directory "''$genius/dist-site" >/tmp/genius.http.log 2>&1 &
            gen_srv=$!

            wait_port 4173
            wait_port 4174

            work="$(mktemp -d)"
            proj_log="''$work/projects.log"
            gen_log="''$work/genius.log"

            printf 'Opening tunnels...\n'
            spawn 4173 "''$proj_log"
            spawn 4174 "''$gen_log"

            proj_url="$(wait_url "''$proj_log")"
            gen_url="$(wait_url "''$gen_log")"

            printf '\nProjectsReview: %s\n' "''$proj_url"
            printf 'Genius: %s\n\n' "''$gen_url"

            wait $proj_srv $gen_srv || true
          '';
        };
        tunnelLocalhostRun = pkgs.writeShellApplication {
          name = "tunnel-localhostrun";
          runtimeInputs = with pkgs; [ bash coreutils curl openssh python3 iproute2 ];
          text = ''
            set -euo pipefail

            NPM="${pkgs.nodejs_20}/bin/npm"
            unset NIX_LD NIX_LD_LIBRARY_PATH

            lan_ip="$(${pkgs.iproute2}/bin/ip -o -4 addr show scope global | cut -d' ' -f7 | cut -d/ -f1 | { read -r ip; printf '%s' "''${ip:-127.0.0.1}"; })"

            if [ -z "''${lan_ip:-}" ]; then
              lan_ip="127.0.0.1"
            fi

            if [ ! -d node_modules ]; then
              "$NPM" install
            fi

            "$NPM" run dev:host >/tmp/projectsreview-dev.log 2>&1 &
            dev_pid=$!

            trap 'kill "$dev_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            for _ in $(seq 1 120); do
              if curl -fsS http://127.0.0.1:4321 >/dev/null 2>&1; then
                break
              fi
              sleep 0.5
            done

            tunnel_log="$(mktemp)"

            ssh \
              -N \
              -o ExitOnForwardFailure=yes \
              -o ServerAliveInterval=30 \
              -o ServerAliveCountMax=2 \
              -o StrictHostKeyChecking=no \
              -o UserKnownHostsFile=/dev/null \
              -R 80:127.0.0.1:4321 \
              nokey@localhost.run \
              >"$tunnel_log" 2>&1 &
            ssh_pid=$!

            trap 'kill "$dev_pid" "$ssh_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            tunnel_url=""
            for _ in $(seq 1 120); do
              if [ -s "$tunnel_log" ]; then
                tunnel_url="$(${pkgs.python3}/bin/python - "$tunnel_log" <<'EOF'
import pathlib
import re
import sys

log = pathlib.Path(sys.argv[1]).read_text(errors='ignore')
matches = re.findall(r'https?://[^\s]+\.(?:localhost\.run|lhr\.life)\S*', log)
matches = [m.replace('http://', 'https://') for m in matches if 'admin.localhost.run' not in m]
if matches:
    print(matches[-1].rstrip('/'))
EOF
)"
                if [ -n "$tunnel_url" ]; then
                  break
                fi
              fi
              sleep 0.5
            done

            printf 'Local:   http://127.0.0.1:4321\n'
            printf 'Wi-Fi:   http://%s:4321\n' "$lan_ip"
            if [ -n "$tunnel_url" ]; then
              printf 'Tunnel:  %s\n' "$tunnel_url"
            else
              printf 'Tunnel:  unavailable\n'
            fi

            wait $dev_pid $ssh_pid || true
          '';
        };
        tunnelNport = pkgs.writeShellApplication {
          name = "tunnel-nport";
          runtimeInputs = with pkgs; [ bash coreutils curl python3 iproute2 nodejs_20 ];
          text = ''
            set -euo pipefail

            NPM="${pkgs.nodejs_20}/bin/npm"
            unset NIX_LD NIX_LD_LIBRARY_PATH

            lan_ip="$(${pkgs.iproute2}/bin/ip -o -4 addr show scope global | cut -d' ' -f7 | cut -d/ -f1 | { read -r ip; printf '%s' "''${ip:-127.0.0.1}"; })"

            if [ -z "''${lan_ip:-}" ]; then
              lan_ip="127.0.0.1"
            fi

            if [ ! -d node_modules ]; then
              "$NPM" install
            fi

            # Install localtunnel globally
            "$NPM" install -g localtunnel 2>/dev/null || true

            "$NPM" run dev:host >/tmp/projectsreview-dev.log 2>&1 &
            dev_pid=$!

            trap 'kill "$dev_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            for _ in $(seq 1 120); do
              if curl -fsS http://127.0.0.1:4321 >/dev/null 2>&1; then
                break
              fi
              sleep 0.5
            done

            tunnel_log="$(mktemp)"
            lt --port 4321 --subdomain projectsreview >"$tunnel_log" 2>&1 &
            tunnel_pid=$!

            trap 'kill "$dev_pid" "$tunnel_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            tunnel_url=""
            for _ in $(seq 1 120); do
              if [ -s "$tunnel_log" ]; then
                tunnel_url="$(${pkgs.python3}/bin/python - "$tunnel_log" <<'EOF'
import pathlib
import re
import sys

log = pathlib.Path(sys.argv[1]).read_text(errors='ignore')
matches = re.findall(r'https://[a-zA-Z0-9-]+\.loca\.lt', log)
if matches:
    print(matches[0].rstrip('/'))
EOF
)"
                if [ -n "$tunnel_url" ]; then
                  break
                fi
              fi
              sleep 0.5
            done

            printf 'Local:   http://127.0.0.1:4321\n'
            printf 'Wi-Fi:   http://%s:4321\n' "$lan_ip"
            if [ -n "$tunnel_url" ]; then
              printf 'Tunnel:  %s\n' "$tunnel_url"
            else
              printf 'Tunnel:  unavailable\n'
            fi

            wait $dev_pid $tunnel_pid || true
          '';
        };
        tunnelLocaltunnel = pkgs.writeShellApplication {
          name = "tunnel-localtunnel";
          runtimeInputs = with pkgs; [ bash coreutils curl python3 iproute2 nodejs_20 ];
          text = ''
            set -euo pipefail

            NPM="${pkgs.nodejs_20}/bin/npm"
            unset NIX_LD NIX_LD_LIBRARY_PATH

            lan_ip="$(${pkgs.iproute2}/bin/ip -o -4 addr show scope global | cut -d' ' -f7 | cut -d/ -f1 | { read -r ip; printf '%s' "''${ip:-127.0.0.1}"; })"

            if [ -z "''${lan_ip:-}" ]; then
              lan_ip="127.0.0.1"
            fi

            if [ ! -d node_modules ]; then
              "$NPM" install
            fi

            "$NPM" run dev:host >/tmp/projectsreview-dev.log 2>&1 &
            dev_pid=$!

            trap 'kill "$dev_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            for _ in $(seq 1 120); do
              if curl -fsS http://127.0.0.1:4321 >/dev/null 2>&1; then
                break
              fi
              sleep 0.5
            done

            # Install localtunnel if needed
            "$NPM" install -g localtunnel 2>/dev/null || true

            tunnel_log="$(mktemp)"
            lt --port 4321 >"$tunnel_log" 2>&1 &
            tunnel_pid=$!

            trap 'kill "$dev_pid" "$tunnel_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            tunnel_url=""
            for _ in $(seq 1 120); do
              if [ -s "$tunnel_log" ]; then
                tunnel_url="$(${pkgs.python3}/bin/python - "$tunnel_log" <<'EOF'
import pathlib
import re
import sys

log = pathlib.Path(sys.argv[1]).read_text(errors='ignore')
matches = re.findall(r'https://[a-zA-Z0-9-]+\.loca\.lt', log)
if matches:
    print(matches[0].rstrip('/'))
EOF
)"
                if [ -n "$tunnel_url" ]; then
                  break
                fi
              fi
              sleep 0.5
            done

            printf 'Local:   http://127.0.0.1:4321\n'
            printf 'Wi-Fi:   http://%s:4321\n' "$lan_ip"
            if [ -n "$tunnel_url" ]; then
              printf 'Tunnel:  %s\n' "$tunnel_url"
            else
              printf 'Tunnel:  unavailable\n'
            fi

            wait $dev_pid $tunnel_pid || true
          '';
        };
        tunnel = pkgs.writeShellApplication {
          name = "tunnel";
          runtimeInputs = with pkgs; [ bash coreutils curl cloudflared python3 iproute2 ];
          text = ''
            set -euo pipefail

            lan_ip="$(${pkgs.iproute2}/bin/ip -o -4 addr show scope global | cut -d' ' -f7 | cut -d/ -f1 | { read -r ip; printf '%s' "''${ip:-127.0.0.1}"; })"

            if [ -z "''${lan_ip:-}" ]; then
              lan_ip="127.0.0.1"
            fi

            if [ ! -d node_modules ]; then
              npm install
            fi

            npm run dev:host >/tmp/projectsreview-dev.log 2>&1 &
            dev_pid=$!
            trap 'kill "$dev_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            for _ in $(seq 1 120); do
              if curl -fsS http://127.0.0.1:4321 >/dev/null 2>&1; then
                break
              fi
              sleep 0.5
            done

            tunnel_log="$(mktemp)"
            # Use HTTP/2 and fallback addresses to be more resilient
            cloudflared tunnel --url http://127.0.0.1:4321 --no-autoupdate --loglevel info --protocol http2 --edge-ip-version 4 2>&1 | tee "$tunnel_log" &
            tunnel_pid=$!

            trap 'kill "$dev_pid" "$tunnel_pid" >/dev/null 2>&1 || true; jobs -pr | xargs -r kill >/dev/null 2>&1 || true' EXIT INT TERM

            tunnel_url=""
            for _ in $(seq 1 180); do
              if [ -s "$tunnel_log" ]; then
                if [ -z "$tunnel_url" ]; then
                  tunnel_url="$(${pkgs.python3}/bin/python - "$tunnel_log" <<'EOF'
import pathlib
import re
import sys

log = pathlib.Path(sys.argv[1]).read_text(errors='ignore')

matches = re.findall(r'https://[a-zA-Z0-9-]+\.trycloudflare\.com', log)
matches = [m for m in matches if 'api.trycloudflare.com' not in m]
if matches:
    print(matches[0].rstrip('/'))
EOF
)"
                fi

                # Wait until we see "Registered tunnel connection" in the log
                if [ -n "$tunnel_url" ]; then
                  if grep -q "Registered tunnel connection" "$tunnel_log" 2>/dev/null; then
                    break
                  fi
                fi
              fi
              sleep 0.5
            done

            printf 'Local:   http://127.0.0.1:4321\n'
            printf 'Wi-Fi:   http://%s:4321\n' "$lan_ip"
            if [ -n "$tunnel_url" ]; then
              printf 'Tunnel:  %s\n' "$tunnel_url"
            else
              printf 'Tunnel:  unavailable\n'
            fi

            wait $dev_pid $tunnel_pid || true
          '';
        };
        devStart = pkgs.writeShellApplication {
          name = "dev-start";
          runtimeInputs = with pkgs; [ bash coreutils curl nodejs_20 ];
          text = ''
            set -euo pipefail

            NPM="${pkgs.nodejs_20}/bin/npm"
            unset NIX_LD NIX_LD_LIBRARY_PATH

            if [ ! -d node_modules ]; then
              "$NPM" install
            fi

            "$NPM" run dev:host >/tmp/projectsreview-dev.log 2>&1 &
            dev_pid=$!

            for _ in $(seq 1 120); do
              if curl -fsS http://127.0.0.1:4321 >/dev/null 2>&1; then
                break
              fi
              sleep 0.5
            done

            printf 'Dev server started on http://127.0.0.1:4321 (PID: %s)\n' "$dev_pid"
            printf 'Logs: /tmp/projectsreview-dev.log\n'

            # Write PID to file for dev-stop
            printf '%s' "$dev_pid" > /tmp/projectsreview-dev.pid
          '';
        };
        devStop = pkgs.writeShellApplication {
          name = "dev-stop";
          runtimeInputs = with pkgs; [ bash coreutils ];
          text = ''
            set -euo pipefail

            if [ -f /tmp/projectsreview-dev.pid ]; then
              pid="$(cat /tmp/projectsreview-dev.pid)"
              if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
                kill "$pid" 2>/dev/null || true
                printf 'Dev server stopped (PID: %s)\n' "$pid"
              fi
              rm -f /tmp/projectsreview-dev.pid
            fi

            # Also kill by process name just in case
            pkill -f "astro dev.*host" 2>/dev/null || true
            printf 'Cleanup done.\n'
          '';
        };
      in {
        packages.demo = demo;
        packages.e2e = e2e;
        packages.tunnel = tunnel;
        packages.tunnel-localhostrun = tunnelLocalhostRun;
        packages.tunnel-localtunnel = tunnelLocaltunnel;
        packages.dev-start = devStart;
        packages.dev-stop = devStop;
        apps.demo = {
          type = "app";
          program = "${demo}/bin/demo";
        };
        apps.e2e = {
          type = "app";
          program = "${e2e}/bin/e2e";
        };
        apps.tunnel = {
          type = "app";
          program = "${tunnel}/bin/tunnel";
        };
        apps.tunnel-localhostrun = {
          type = "app";
          program = "${tunnelLocalhostRun}/bin/tunnel-localhostrun";
        };
        apps.tunnel-localtunnel = {
          type = "app";
          program = "${tunnelLocaltunnel}/bin/tunnel-localtunnel";
        };
        apps.dev-start = {
          type = "app";
          program = "${devStart}/bin/dev-start";
        };
        apps.dev-stop = {
          type = "app";
          program = "${devStop}/bin/dev-stop";
        };
        apps.default = self.apps.${system}.dev-start;
        packages.default = devStart;
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [ nodejs_20 openssh python3 curl chromium ];
          shellHook = ''
            export PATH="${pkgs.lib.makeBinPath [ pkgs.nodejs_20 pkgs.chromium pkgs.openssh pkgs.python3 pkgs.curl ]}"
            export PLAYWRIGHT_CHROMIUM_PATH="${pkgs.chromium}/bin/chromium"
          '';
        };
      });
}
