# Content Update Pipeline

This site mirrors three source projects: `UHA-6.0`, `Genius`, and `MethodA`.
Treat each project repo as the source of truth, and this site as the derived public catalog.

## Goal

Keep the site accurate when a project changes, without inventing status, progress, or claims.

## Dialectical Rule

Every update must separate three layers:
1. Thesis: what the source repo currently claims.
2. Antithesis: what conflicts with that claim in other sources or in this site.
3. Synthesis: the reconciled public statement, or an explicit unresolved conflict.

If synthesis is not possible, publish uncertainty rather than smoothing it over.

## Sources of Truth

For each project, prefer this order:
1. `HOLO.md`
2. `SURFACE.md`
3. project README / plan docs
4. code/tests/build output
5. commit history

If sources disagree, use the most specific and most verifiable source first:
1. build/test output
2. code
3. source project docs
4. commit messages
5. this site’s derived summaries

## Update Trigger

Run the pipeline when any of these change:
1. a feature is completed or removed
2. a status or milestone changes
3. a verification artifact changes
4. a new proof or limitation appears
5. the project gains a new public-facing article or summary

Do not run the pipeline for cosmetic edits only unless they alter a public claim or a verification path.

## Required Workflow

1. Read the source repo first.
2. Extract only facts that are visible in docs, code, tests, or commits.
3. Update the source docs in the project repo if the facts changed there.
4. Update this site’s derived data in `src/lib/catalog.js` and `src/lib/project-research.js`.
5. Update the project article and the summary pages if the change affects public wording.
6. Run `npm run build`.
7. Check that `index`, `report`, and `research` still render and show the new facts.
8. If the site is published, confirm the deployed Pages URL after the GitHub Actions run.

9. If sources still disagree, stop and record the contradiction instead of forcing a clean narrative.

## Agent Checklist

The agent must answer these questions before editing:
1. What changed in the source repo?
2. Which file proves it?
3. Is the change already reflected in the source docs?
4. Which public page uses the old fact?
5. What exact derived field must be updated?
6. Does any source contradict the new claim?
7. Is the claim proof-backed or only inferred?

The agent must then perform these steps:
1. Update source docs.
2. Update catalog data.
3. Update research summaries.
4. Update article copy if the public wording changed.
5. Rebuild and verify.
6. If necessary, add a contradiction note instead of a false certainty.

## Contradiction Handling

When the repo is internally inconsistent:
1. Prefer the narrowest factual claim that all sources support.
2. Preserve the conflict in the research layer.
3. Do not hide the conflict in `index.astro`.
4. Do not upgrade a weak claim into a strong one without proof.
5. If the conflict affects user-facing text, add a short note describing the uncertainty.

## Data Model Rules

1. `catalog.js` holds the authoritative UI-facing summary for the site.
2. `project-research.js` derives counts, proofs, conflicts, freshness, and confidence from the source repos.
3. `index.astro` should only show top-level status and a short summary.
4. `report.astro` should show evidence, progress, and analysis.
5. `research.astro` should show methodology, sources, and proof matrices.
6. Derived fields must never be stronger than the evidence behind them.
7. Progress numbers are estimates unless they are explicitly stated in the source repo.

## What Not To Do

1. Do not update only the rendered copy without fixing the source docs.
2. Do not invent progress percentages.
3. Do not mark a project complete unless the source repo proves it.
4. Do not change the site before the source facts are reconciled.
5. Do not leave `HOLO.md` and `SURFACE.md` inconsistent with the site.
6. Do not delete a conflict just because it is inconvenient.

## Verification

After updates, verify:
1. `npm run build`
2. `nix run .#dev-start`
3. `curl -I http://127.0.0.1:4321/`
4. `curl -I http://127.0.0.1:4321/report`
5. `curl -I http://127.0.0.1:4321/research`
6. The public GitHub Pages URL after deployment
7. The updated pages show the new fact and do not regress the old ones.

## Agent Output Format

When finishing an update, the agent should return:
1. changed facts
2. source proof files
3. updated site files
4. unresolved contradictions, if any
5. verification commands and results
6. public impact summary

## Short Agent Prompt

Use this when delegating content work:

`Read the source repo first, extract changed facts, update source docs, then update catalog/research/pages in this site, rebuild, and verify that the public pages show the new facts.`

## Short Dialectical Prompt

Use this when facts conflict:

`Read the source repo, list the thesis and antithesis, reconcile them into the weakest true synthesis, update the derived site data, and keep any unresolved contradiction visible in the research layer.`
