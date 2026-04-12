# SURFACE.md — temporary demo contract

## Surface Items

- Name: DemoLaunch.v1
  Stability: [FROZEN]
  Spec: `nix run .#tunnel` starts the Astro dev server on `0.0.0.0`, prints the localhost URL, the Wi-Fi LAN URL, and a public HTTPS tunnel URL from Cloudflare TryCloudflare. `nix run .#tunnel-localhostrun` keeps the SSH-based fallback.
  Proof: `nix run .#tunnel` (verifiable: runs `astro dev --host 0.0.0.0`, binds on LAN, opens cloudflared tunnel)

- Name: DevServerBackground.v1
  Stability: [FROZEN]
  Spec: `nix run .#dev-start` starts the dev server on `0.0.0.0:4321` in background and returns immediately. `nix run .#dev-stop` stops it.
  Proof: `nix run .#dev-start` returns PID; `curl http://127.0.0.1:4321` works; `nix run .#dev-stop` stops it

- Name: GitHubPagesDeployment.v1
  Stability: [FROZEN]
  Spec: `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to main.
  Proof: Push to main → Actions run → then enable Settings → Pages → Source = GitHub Actions. Verify with `curl -I https://11111000000.github.io/projects/` returning `200`.

- Name: ContentUpdatePipeline.v1
  Stability: [FROZEN]
  Spec: `docs/content-update-pipeline.md` defines the source-of-truth order, dialectical reconciliation rule, update loop, and verification steps for project facts.
  Proof: Update source repo docs first, then `src/lib/catalog.js`, `src/lib/project-research.js`, and the public pages; verify with `npm run build`.

- Name: ProjectsReviewStatic.v1
  Stability: [FROZEN]
  Spec: `npm run build` emits the Astro site into `dist/` for static serving.
  Proof: `npm run build` + `ls dist/`

- Name: GeniusStatic.v1
  Stability: [FROZEN]
  Spec: `npm run build:site` emits a deployable static app into `dist-site/`.
  Proof: `npm run build:site` + `ls dist-site/`
