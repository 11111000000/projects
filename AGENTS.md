# AGENTS

Scripts for development, testing, and monitoring.

## Quick Start

```bash
# Start dev server in background (returns immediately)
nix run .#dev-start

# Stop dev server
nix run .#dev-stop

# Open tunnel (localhost + Wi-Fi + public URL)
nix run .#tunnel
```

## Nix Commands

| Command | Description |
|---------|-------------|
| `nix run .#dev-start` | Start dev server on `0.0.0.0:4321` (background, returns immediately) |
| `nix run .#dev-stop` | Stop dev server |
| `nix run .#tunnel` | Start dev server + public tunnel (Cloudflare TryCloudflare) |
| `nix run .#demo` | Build both sites + open tunnels (legacy) |
| `nix run .#e2e` | Run Playwright E2E tests |

## Tunnel Options

| Command | Provider |
|---------|----------|
| `nix run .#tunnel` | Cloudflare TryCloudflare (default) |
| `nix run .#tunnel-localhostrun` | localhost.run (SSH) |
| `nix run .#tunnel-localtunnel` | localtunnel (npm) |

## Local Access

When tunnel is running:
- `http://127.0.0.1:4321` — localhost
- `http://192.168.x.x:4321` — Wi-Fi/LAN

## GitHub Pages Deployment

1. Create GitHub repo
2. Push code: `git push origin main`
3. Enable: Settings → Pages → Source → GitHub Actions

## Content Update Pipeline

Use `docs/content-update-pipeline.md` as the operating spec for updating project information on the site.

Minimum loop:
1. Identify changed facts in the source repos.
2. Update source docs first, then update this site’s catalog and extracted summaries.
3. Run `npm run build` and verify the public pages render the new facts.
4. If the change is user-visible, update the relevant project article and the report/research pages together.
5. If sources disagree, preserve the contradiction in the research layer instead of forcing a false certainty.

## How To Verify The Site

1. Open the Pages URL from the repository settings after the workflow succeeds.
2. Check the `Actions` tab for a green `Deploy to GitHub Pages` run.
3. Confirm the deployed URL returns `200` in the browser or with:
```bash
curl -I https://11111000000.github.io/projects/
```
4. If you only see `404`, GitHub Pages is not enabled yet or the wrong source is selected.

## Scripts

### e2e-check.cjs

E2E browser testing with Playwright. Captures:
- `pageerror` — JavaScript errors
- `console.error` — logged errors  
- `unhandledrejection` — promise errors

Usage:
```bash
node scripts/e2e-check.cjs <URL> [--loop]
```

Examples:
```bash
# Single check
node scripts/e2e-check.cjs http://localhost:4321/report

# Continuous monitoring (5s interval)
node scripts/e2e-check.cjs http://localhost:4321/report --loop

# Custom URL
node scripts/e2e-check.cjs http://192.168.1.100:4321 --loop
```

### check-page.cjs

Simple HTTP status checker (no browser). Faster but doesn't catch JS errors.

Usage:
```bash
node scripts/check-page.cjs <URL> [--loop]
```

## Dev Server

```bash
npm run dev     # Start dev server on http://localhost:4321
npm run build  # Production build to dist/
```

## Troubleshooting

### Page hangs or crashes

1. Check for JS errors:
```bash
node scripts/e2e-check.cjs http://localhost:4321/report --loop
```

2. Check HTTP status:
```bash
node scripts/check-page.cjs http://localhost:4321
```

3. Check browser console:
```bash
# Verbose output
curl -s http://localhost:4321/report | grep -oE 'error|Error' | head -5
```

### Build fails

Check for TypeScript/Astro errors:
```bash
npm run build 2>&1 | head -50
```
