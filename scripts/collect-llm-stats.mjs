import fs from 'node:fs/promises';
import path from 'node:path';

const input = process.argv[2] || 'stats.csv';
const output = process.argv[3] || path.resolve('dist', 'stats', 'llm-stats.json');

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/);
  const header = lines.shift().split(',');
  const idx = (name) => header.indexOf(name);
  return lines.map((line) => {
    const cols = line.split(',');
    return {
      timestamp: cols[idx('Timestamp')],
      method: cols[idx('Method')],
      model: cols[idx('Model')],
      cost: Number(cols[idx('Cost')] || '0')
    };
  });
}

function monthKey(timestamp) {
  return timestamp.slice(0, 7);
}

function dayKey(timestamp) {
  return timestamp.slice(0, 10);
}

const raw = await fs.readFile(path.resolve(process.cwd(), input), 'utf8');
const rows = parseCsv(raw);
const totalCost = rows.reduce((sum, row) => sum + row.cost, 0);
const byModel = new Map();
const byMonth = new Map();
const byDay = new Map();

for (const row of rows) {
  byModel.set(row.model, (byModel.get(row.model) || 0) + row.cost);
  byMonth.set(monthKey(row.timestamp), (byMonth.get(monthKey(row.timestamp)) || 0) + row.cost);
  byDay.set(dayKey(row.timestamp), (byDay.get(dayKey(row.timestamp)) || 0) + 1);
}

const payload = {
  source: input,
  totalRequests: rows.length,
  totalCost: Number(totalCost.toFixed(2)),
  costPerRequest: rows.length ? Number((totalCost / rows.length).toFixed(2)) : 0,
  topModelsByCost: [...byModel.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([model, cost]) => ({ model, cost: Number(cost.toFixed(2)) })),
  monthlyCost: [...byMonth.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([month, cost]) => ({ month, cost: Number(cost.toFixed(2)) })),
  dailyRequests: [...byDay.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .slice(-30)
    .map(([day, count]) => ({ day, count }))
};

await fs.mkdir(path.dirname(path.resolve(process.cwd(), output)), { recursive: true });
await fs.writeFile(path.resolve(process.cwd(), output), `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Wrote ${output}`);
