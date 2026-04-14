import fs from 'node:fs/promises';
import path from 'node:path';

async function main() {
  const file = process.argv[2] || 'stats.csv';
  const text = await fs.readFile(path.resolve(process.cwd(), file), 'utf8');
  const lines = text.trim().split(/\r?\n/);
  const [header, ...rows] = lines;
  const columns = header.split(',');
  const idx = (name) => columns.indexOf(name);
  const byModel = new Map();
  const byDay = new Map();

  for (const line of rows) {
    const cells = line.split(',');
    const model = cells[idx('Model')];
    const day = cells[idx('Timestamp')].slice(0, 10);
    const cost = Number(cells[idx('Cost')] || '0');
    byModel.set(model, (byModel.get(model) || 0) + 1);
    byDay.set(day, (byDay.get(day) || 0) + 1);
  }

  const topModels = [...byModel.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
  const last14 = [...byDay.entries()].sort((a, b) => a[0].localeCompare(b[0])).slice(-14);

  console.log(JSON.stringify({ rows: rows.length, topModels, last14 }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
