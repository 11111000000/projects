# HOLO.md — temporary static demo

## Stage: RealityCheck
Purpose: ProjectsReview shows the project dashboard with local LAN access and a public tunnel.

### Invariants
- `ProjectsReview` remains static and self-contained.
- `Genius` can be built into a deployable static site without changing its core engine contract.
- One command starts the local server, exposes it on LAN, and prints the tunnel URL.
- The tunnel provider is disposable and account-free.
- Dev server can run in background and be stopped cleanly.

### Decisions
- [Frozen] Tunnel transport: Cloudflare TryCloudflare for the default path; `localhost.run` remains available as `nix run .#tunnel-localhostrun`. Exit: switch only if the transport becomes unreliable. Proof: `nix run .#tunnel`.
- [Frozen] Dev server: `nix run .#dev-start` / `nix run .#dev-stop` for background operation. Exit: switch if better solution emerges. Proof: `nix run .#dev-start` returns immediately, server responds on port 4321.
- [Frozen] Deployment: GitHub Pages via Actions. Exit: switch if provider becomes unavailable. Proof: push to main triggers deploy.
