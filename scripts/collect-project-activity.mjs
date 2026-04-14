import fs from 'node:fs/promises';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const repoRoots = {
  'UHA-6.0': '/home/zoya/Code/UHA-6.0',
  Genius: '/home/zoya/Code/Genius',
  MethodA: '/home/zoya/Code/MethodA'
};

const output = process.argv[2] || path.resolve('dist', 'stats', 'project-activity.json');
const execFileAsync = promisify(execFile);

async function readIfExists(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }
}

function countMatches(text, regex) {
  return (text.match(regex) || []).length;
}

async function collectProject(name, root) {
  const files = ['HOLO.md', 'SURFACE.md', 'README.md', 'README-dev.md', 'PLAN.md', 'docs/README.md', 'docs/plans/plan.md', 'docs/plans/plan-5days.md', 'docs/refactoring-plan.md', 'docs/analyse/2-live-document-emacs-plan.md', 'docs/implementation/emacs-mode-plan-final.md'];
  const loaded = await Promise.all(files.map(async (file) => [file, await readIfExists(path.join(root, file))]));
  const available = Object.fromEntries(loaded.filter(([, content]) => content));
  const combined = Object.values(available).join('\n\n');

  let commitLines = [];
  try {
    const { stdout } = await execFileAsync('git', ['-C', root, 'log', '--oneline', '-n', '20']);
    commitLines = stdout.trim().split(/\r?\n/).filter(Boolean);
  } catch {
    commitLines = [];
  }

  return {
    name,
    root,
    files: Object.keys(available),
    proofCount: countMatches(combined, /^Proof:/gm),
    frozenCount: countMatches(combined, /Stability:\s*\[FROZEN\]/g),
    fluidCount: countMatches(combined, /Stability:\s*\[FLUID\]/g),
    todoCount: countMatches(combined, /TODO|\[ \]/g),
    commitLogLines: commitLines.length,
    recentCommits: commitLines,
    recentProofs: combined.split(/\r?\n/).filter((line) => /Current Focus|Current focus|✅|TODO|Proof:|Stage:/i.test(line)).slice(0, 20)
  };
}

const projects = [];
for (const [name, root] of Object.entries(repoRoots)) {
  projects.push(await collectProject(name, root));
}

const payload = { projects };
await fs.mkdir(path.dirname(path.resolve(process.cwd(), output)), { recursive: true });
await fs.writeFile(path.resolve(process.cwd(), output), `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Wrote ${output}`);
