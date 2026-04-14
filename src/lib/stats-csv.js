import fs from 'node:fs/promises';
import path from 'node:path';

export async function loadStatsCsv(filename = 'stats-2026-04-12.csv') {
  const csvPath = path.resolve(process.cwd(), filename);
  let statsCsv;

  try {
    statsCsv = await fs.readFile(csvPath, 'utf8');
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return { modelUsageRows: [], last14Rows: [] };
    }

    throw error;
  }

  const statsLines = statsCsv.trim().split(/\r?\n/);
  const statsHeader = statsLines[0].split(',');
  const statsRows = statsLines.slice(1).map((line) => {
    const cols = line.split(',');
    return {
      timestamp: cols[statsHeader.indexOf('Timestamp')],
      model: cols[statsHeader.indexOf('Model')],
      cost: Number(cols[statsHeader.indexOf('Cost')] || '0')
    };
  });

  const modelUsageMap = new Map();
  const activityMap = new Map();
  for (const row of statsRows) {
    modelUsageMap.set(row.model, (modelUsageMap.get(row.model) || 0) + 1);
    const day = row.timestamp.slice(0, 10);
    activityMap.set(day, (activityMap.get(day) || 0) + 1);
  }

  const modelUsageRows = [...modelUsageMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([model, count]) => ({ model, count }));

  const last14Days = [...activityMap.entries()].sort((a, b) => a[0].localeCompare(b[0])).slice(-14);
  const last14Max = Math.max(1, ...last14Days.map(([, count]) => count));
  const last14Rows = last14Days.map(([date, count]) => ({
    date,
    label: new Intl.DateTimeFormat('ru-RU', { day: '2-digit', month: 'short' }).format(new Date(`${date}T00:00:00Z`)),
    count,
    percent: Math.round((count / last14Max) * 100)
  }));

  return { modelUsageRows, last14Rows };
}
