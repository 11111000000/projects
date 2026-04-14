import fs from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_STATS_FILES = ['stats.csv', 'stats-2026-04-12.csv'];

export async function loadStatsCsv(filename = 'stats.csv') {
  const candidates = [filename, ...DEFAULT_STATS_FILES].filter((value, index, list) => value && list.indexOf(value) === index);
  let csvPath = null;
  let statsCsv = null;

  for (const candidate of candidates) {
    const resolved = path.resolve(process.cwd(), candidate);
    try {
      statsCsv = await fs.readFile(resolved, 'utf8');
      csvPath = resolved;
      break;
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }

  if (!statsCsv) {
    return { sourceFile: null, totalRequests: 0, totalCost: 0, costPerRequest: 0, modelUsageRows: [], last14Rows: [], monthlyRows: [], topModelsByCost: [] };
  }

  const statsLines = statsCsv.trim().split(/\r?\n/);
  const statsHeader = statsLines[0].split(',');
  const idx = (name) => statsHeader.indexOf(name);
  const statsRows = statsLines.slice(1).map((line) => {
    const cols = line.split(',');
    return {
      timestamp: cols[idx('Timestamp')],
      model: cols[idx('Model')],
      cost: Number(cols[idx('Cost')] || '0')
    };
  });

  const modelUsageMap = new Map();
  const activityMap = new Map();
  const monthMap = new Map();
  const modelCostMap = new Map();
  let totalCost = 0;

  for (const row of statsRows) {
    modelUsageMap.set(row.model, (modelUsageMap.get(row.model) || 0) + 1);
    modelCostMap.set(row.model, (modelCostMap.get(row.model) || 0) + row.cost);
    const day = row.timestamp.slice(0, 10);
    activityMap.set(day, (activityMap.get(day) || 0) + 1);
    const month = row.timestamp.slice(0, 7);
    monthMap.set(month, (monthMap.get(month) || 0) + 1);
    totalCost += row.cost;
  }

  const modelUsageRows = [...modelUsageMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([model, count]) => ({ model, count }));

  const topModelsByCost = [...modelCostMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([model, cost]) => ({ model, cost: Number(cost.toFixed(2)) }));

  const last14Days = [...activityMap.entries()].sort((a, b) => a[0].localeCompare(b[0])).slice(-14);
  const last14Max = Math.max(1, ...last14Days.map(([, count]) => count));
  const last14Rows = last14Days.map(([date, count]) => ({
    date,
    label: new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'short' }).format(new Date(`${date}T00:00:00Z`)),
    count,
    percent: Math.round((count / last14Max) * 100)
  }));

  const monthlyRows = [...monthMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([month, count]) => ({ month, count }));

  return {
    sourceFile: csvPath,
    totalRequests: statsRows.length,
    totalCost: Number(totalCost.toFixed(2)),
    costPerRequest: statsRows.length ? Number((totalCost / statsRows.length).toFixed(2)) : 0,
    modelUsageRows,
    topModelsByCost,
    last14Rows,
    monthlyRows
  };
}
