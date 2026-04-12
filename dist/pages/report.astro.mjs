import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, d as addAttribute, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_BKnmkwkZ.mjs';
import 'kleur/colors';
import { l as loadProjectResearch, $ as $$BaseLayout, a as $$DashboardSidebar } from '../chunks/project-research_CITGjwYF.mjs';
import { $ as $$ProjectDiagramCard } from '../chunks/ProjectDiagramCard_CmxisCNX.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Report = createComponent(async ($$result, $$props, $$slots) => {
  const research = await loadProjectResearch();
  const projects = research.projects;
  research.totals;
  const llmChartData = {
    dates: ["2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04"],
    labels: ["\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C", "\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C"],
    total: [10614, 32482, 57575, 48431, 132162, 36310],
    premium: [10312, 31161, 52497, 45815, 125568, 17456],
    mid: [5, 140, 583, 134, 2600, 8705],
    budget: [19, 259, 4456, 2482, 1618, 10150]
  };
  const llmTopModels = [
    { name: "gpt-5.2", cost: 102360, color: "#6366f1" },
    { name: "gpt-5.4", cost: 58492, color: "#3b82f6" },
    { name: "gpt-5", cost: 32100, color: "#06b6d4" },
    { name: "gpt-5.4-mini", cost: 25312, color: "#f97316" },
    { name: "qwen3.5-397b-a17b", cost: 18500, color: "#10b981" },
    { name: "gpt-4.1", cost: 8420, color: "#ef4444" },
    { name: "gpt-5.1", cost: 5200, color: "#a855f7" },
    { name: "gemini-3-pro-preview", cost: 4800, color: "#ec4899" },
    { name: "deepseek-v3.2-exp", cost: 3200, color: "#14b8a6" },
    { name: "gpt-4o", cost: 2100, color: "#84cc16" },
    { name: "qwen3.5-27b", cost: 1400, color: "#f59e0b" },
    { name: "gpt-5-mini", cost: 850, color: "#06b6d4" }
  ];
  const llmData = {
    aprCpr: 5.7,
    months: [
      { key: "2025-11", label: "\u041D\u043E\u044F\u0431\u0440\u044C", total: 10614, premium: 10312, budget: 19, mid: 5 },
      { key: "2025-12", label: "\u0414\u0435\u043A\u0430\u0431\u0440\u044C", total: 32482, premium: 31161, budget: 259, mid: 140 },
      { key: "2026-01", label: "\u042F\u043D\u0432\u0430\u0440\u044C", total: 57575, premium: 52497, budget: 4456, mid: 583 },
      { key: "2026-02", label: "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", total: 48431, premium: 45815, budget: 2482, mid: 134 },
      { key: "2026-03", label: "\u041C\u0430\u0440\u0442", total: 132162, premium: 125568, budget: 1618, mid: 2600 },
      { key: "2026-04", label: "\u0410\u043F\u0440\u0435\u043B\u044C", total: 36310, premium: 17456, budget: 10150, mid: 8705 }
    ],
    tierApr: { mid: 24, budget: 28 }};
  Math.max(...llmData.months.map((month) => month.total));
  Math.max(...llmTopModels.map((model) => model.cost));
  const progressSummary = projects.map((project) => ({
    name: project.name,
    progress: project.progress,
    tone: project.statusTone
  }));
  const planRows = projects.map((project) => ({
    name: project.name,
    progress: project.progress,
    hologram: project.hologramProgress,
    spec: project.specProgress,
    execution: project.execution,
    risk: project.risk,
    volumeDone: project.totalDone,
    volumeTotal: project.totalVolume,
    next: project.nextItems.slice(0, 3)
  }));
  const dataRows = projects.map((project) => ({
    name: project.name,
    sourceCount: project.sourceFiles.length,
    freshness: project.freshness,
    score: project.score,
    open: project.open,
    frozen: project.surface.frozen,
    proofs: project.surface.proofs
  }));
  function statusClass(score) {
    if (score >= 85) return "good";
    if (score >= 70) return "warn";
    return "danger";
  }
  const analysisRows = projects.map((project) => {
    const projectData = project;
    const thesis = projectData.score >= 80 ? "\u0421\u0438\u043B\u044C\u043D\u0430\u044F \u0431\u0430\u0437\u0430" : projectData.score >= 70 ? "\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u0431\u0430\u0437\u0430" : "\u0421\u043B\u0430\u0431\u0430\u044F \u0431\u0430\u0437\u0430";
    const antithesis = projectData.open > 0 ? "\u0415\u0441\u0442\u044C \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0445\u0432\u043E\u0441\u0442\u044B" : "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435 \u0445\u0432\u043E\u0441\u0442\u044B \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B";
    const synthesis = projectData.risk > 40 ? "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F \u0441\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F" : "\u041C\u043E\u0436\u043D\u043E \u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u043A \u043F\u043E\u0447\u0442\u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u0439";
    return {
      name: project.name,
      thesis,
      antithesis,
      synthesis,
      focus: projectData.focus.slice(0, 3),
      evidence: projectData.evidence.slice(0, 3),
      next: projectData.nextItems.slice(0, 3)
    };
  });
  const publicationRows = projects.map((project) => ({
    name: project.name,
    verdict: project.score >= 80 ? "\u041F\u043E\u0447\u0442\u0438 \u0433\u043E\u0442\u043E\u0432 \u043A \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438" : project.score >= 70 ? "\u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043E\u0432\u043E\u0434\u043A\u0438" : "\u041D\u0443\u0436\u043D\u0430 \u0434\u043E\u0440\u0430\u0431\u043E\u0442\u043A\u0430",
    recommendation: project.score >= 80 ? "\u041F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u0432 \u043F\u0430\u043D\u0435\u043B\u0438 \u0441 \u043F\u043E\u043C\u0435\u0442\u043A\u043E\u0439 \u043E \u0440\u0438\u0441\u043A\u0430\u0445" : "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u0442\u0430\u0442\u0443\u0441\u0435 \u043D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u044F",
    score: project.score
  }));
  const proofRows = projects.map((project) => ({
    name: project.name,
    sources: [
      ...project.sourceFiles.map((file) => `${project.slug}/${file}`),
      ...(project.commitDetails || []).slice(0, 3).map((commit) => `${commit.hash} ${commit.date}`)
    ]
  }));
  function formatMonthKey(monthKey) {
    const [year, month] = monthKey.split("-").map(Number);
    return new Intl.DateTimeFormat("ru-RU", { month: "short", year: "numeric" }).format(
      new Date(Date.UTC(year, month - 1, 1))
    );
  }
  function shiftMonthKey(monthKey, delta) {
    const [year, month] = monthKey.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1 + delta, 1));
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}`;
  }
  function buildTwoMonthActivity(commitDetails = []) {
    const counts = /* @__PURE__ */ new Map();
    commitDetails.forEach((commit) => {
      const monthKey = commit.date.slice(0, 7);
      counts.set(monthKey, (counts.get(monthKey) || 0) + 1);
    });
    const sortedMonths = [...counts.keys()].sort();
    const latestMonth = sortedMonths[sortedMonths.length - 1] || "2026-04";
    const previousMonth = sortedMonths[sortedMonths.length - 2] || shiftMonthKey(latestMonth, -1);
    const monthKeys = [previousMonth, latestMonth];
    return monthKeys.map((monthKey) => ({
      key: monthKey,
      label: formatMonthKey(monthKey),
      count: counts.get(monthKey) || 0
    }));
  }
  function formatCommitDay(dateKey) {
    return new Intl.DateTimeFormat("ru-RU", { day: "2-digit", month: "short" }).format(
      /* @__PURE__ */ new Date(`${dateKey}T00:00:00Z`)
    );
  }
  function buildDailyCommitSeries(commitDetails = []) {
    const counts = /* @__PURE__ */ new Map();
    commitDetails.forEach((commit) => {
      counts.set(commit.date, (counts.get(commit.date) || 0) + 1);
    });
    const dates = [...counts.keys()].sort();
    if (!dates.length) return [];
    const start = /* @__PURE__ */ new Date(`${dates[0]}T00:00:00Z`);
    const end = /* @__PURE__ */ new Date(`${dates[dates.length - 1]}T00:00:00Z`);
    const series = [];
    for (let cursor = new Date(start); cursor <= end; cursor.setUTCDate(cursor.getUTCDate() + 1)) {
      const key = cursor.toISOString().slice(0, 10);
      series.push({
        key,
        label: formatCommitDay(key),
        count: counts.get(key) || 0
      });
    }
    return series;
  }
  const donutRows = projects.map((project) => ({
    name: project.name,
    progress: project.progress,
    hologram: project.hologramProgress,
    spec: project.specProgress,
    done: project.totalDone,
    total: project.totalVolume
  }));
  projects.map((project) => {
    const months = buildTwoMonthActivity(project.commitDetails || []);
    return {
      name: project.name,
      total: months.reduce((sum, month) => sum + month.count, 0),
      months: months.map((month) => ({
        ...month,
        percent: month.count > 0 ? month.count / Math.max(...months.map((item) => item.count), 1) * 100 : 0
      }))
    };
  });
  const commitWaveRows = projects.map((project) => {
    const series = buildDailyCommitSeries(project.commitDetails || []);
    const total = series.reduce((sum, point) => sum + point.count, 0);
    const peak = series.reduce((best, point) => point.count > best.count ? point : best, {
      key: "",
      label: "\u043D/\u0434",
      count: 0
    });
    return {
      name: project.name,
      total,
      peak: peak.count,
      peakLabel: peak.label,
      start: series[0]?.label || "\u043D/\u0434",
      end: series[series.length - 1]?.label || "\u043D/\u0434",
      series
    };
  });
  const commitWaveDates = [...new Set(commitWaveRows.flatMap((row) => row.series.map((point) => point.key)))].sort();
  const commitWaveChart = {
    dates: commitWaveDates,
    labels: commitWaveDates.map((date) => formatCommitDay(date)),
    series: commitWaveRows.map((row) => ({
      name: row.name,
      total: row.total,
      peak: row.peak,
      peakLabel: row.peakLabel,
      values: commitWaveDates.map((date) => row.series.find((point) => point.key === date)?.count || 0)
    }))
  };
  const confidenceRows = projects.map((project) => ({
    name: project.name,
    score: project.score,
    freshness: project.freshness,
    conflicts: project.conflicts.length,
    sourceCount: project.sourceFiles.length,
    tone: statusClass(project.score)
  }));
  const projectSummaries = projects.map((project) => ({
    name: project.name,
    slug: project.slug,
    summary: project.summary,
    status: project.status,
    unique: project.name === "UHA-6.0" ? "Boundary-first Android \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F, \u0433\u0434\u0435 \u0432\u0430\u0436\u043D\u044B \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F, storage/net/maps \u0438 domain bridge." : project.name === "Genius" ? "\u0417\u0440\u0435\u043B\u044B\u0439 graph/layout \u0434\u0432\u0438\u0436\u043E\u043A \u0441 \u0441\u0438\u043B\u044C\u043D\u043E\u0439 runtime-\u0431\u0430\u0437\u043E\u0439 \u0438 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C structural debt." : "Docs-first \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441 \u0436\u0438\u0432\u044B\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C, \u0430\u0433\u0435\u043D\u0442\u043D\u044B\u043C \u043A\u043E\u043D\u0442\u0443\u0440\u043E\u043C \u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0435\u0439."
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u041E\u0442\u0447\u0451\u0442 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C", "description": "\u0414\u0438\u0430\u043B\u0435\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0442\u0447\u0451\u0442 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C", "active": "report", "data-astro-cid-5mrwl5tb": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["   ", '<section class="stage llm-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>01</span> <h2 data-astro-cid-5mrwl5tb>\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 LLM</h2> </header> <div class="llm-charts-grid" data-astro-cid-5mrwl5tb> <script id="llmChartData" type="application/json">', '<\/script> <script id="llmTopModels" type="application/json">', '<\/script> <div class="llm-chart-card llm-chart-card-wide" data-astro-cid-5mrwl5tb> <h4 data-astro-cid-5mrwl5tb>\u0414\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0437\u0430\u0442\u0440\u0430\u0442 \u043F\u043E \u043C\u0435\u0441\u044F\u0446\u0430\u043C, \u20BD</h4> <canvas id="llmChartMonthly" data-astro-cid-5mrwl5tb></canvas> <div class="llm-chart-legend llm-chart-legend-inline" data-astro-cid-5mrwl5tb> <span data-astro-cid-5mrwl5tb><i class="legend-swatch premium" data-astro-cid-5mrwl5tb></i>Premium</span> <span data-astro-cid-5mrwl5tb><i class="legend-swatch mid" data-astro-cid-5mrwl5tb></i>Mid</span> <span data-astro-cid-5mrwl5tb><i class="legend-swatch budget" data-astro-cid-5mrwl5tb></i>Budget</span> <span data-astro-cid-5mrwl5tb><i class="legend-swatch total" data-astro-cid-5mrwl5tb></i>Total</span> </div> </div> <div class="llm-chart-card" data-astro-cid-5mrwl5tb> <h4 data-astro-cid-5mrwl5tb>\u0414\u043E\u043B\u0438 \u0437\u0430 30 \u0434\u043D\u0435\u0439 (\u0418\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432)</h4> <canvas id="llmChartTier" data-astro-cid-5mrwl5tb></canvas> </div> <div class="llm-chart-card" data-astro-cid-5mrwl5tb> <h4 data-astro-cid-5mrwl5tb>\u0422\u043E\u043F \u043C\u043E\u0434\u0435\u043B\u0435\u0439 (\u0434\u043E\u043B\u044F \u043E\u0442 \u0431\u044E\u0434\u0436\u0435\u0442\u0430)</h4> <canvas id="llmChartModels" data-astro-cid-5mrwl5tb></canvas> </div> </div> <div class="llm-optimization-note" data-astro-cid-5mrwl5tb> <div class="opt-badge success" data-astro-cid-5mrwl5tb>\u0410\u043F\u0440\u0435\u043B\u044C: Budget+Mid = ', "%</div> <span data-astro-cid-5mrwl5tb>\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C: \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0443\u043F\u0430\u043B\u0430 \u0434\u043E ", ' \u20BD (\u0431\u044B\u043B\u043E 17.28 \u20BD).</span> </div> </section>  <section class="stage summary-strip" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>01</span> <h2 data-astro-cid-5mrwl5tb>\u0415\u0434\u0438\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0438</h2> </header> <div class="summary-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage confidence-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>02</span> <h2 data-astro-cid-5mrwl5tb>\u041F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0443\u0432\u0435\u0440\u0435\u043D\u043D\u043E\u0441\u0442\u044C</h2> </header> <div class="confidence-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage chart-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>02</span> <h2 data-astro-cid-5mrwl5tb>\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043F\u043E \u0441\u043B\u043E\u044F\u043C</h2> </header> <div class="donut-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage activity-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>03</span> <h2 data-astro-cid-5mrwl5tb>\u0420\u0438\u0442\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 (\u043A\u043E\u043C\u043C\u0438\u0442-\u0432\u043E\u043B\u043D\u044B)</h2> </header> <div class="commit-wave-shell" data-astro-cid-5mrwl5tb> <div class="commit-wave-chart"', ' data-astro-cid-5mrwl5tb> <canvas id="commitWaveChart" data-astro-cid-5mrwl5tb></canvas> </div> <div class="commit-wave-side" data-astro-cid-5mrwl5tb> ', ' </div> </div> </section> <section class="stage kanban-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>04</span> <h2 data-astro-cid-5mrwl5tb>\u0422\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043B\u0430\u043D (\u041A\u0430\u043D\u0431\u0430\u043D)</h2> </header> <div class="kanban-board" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage gantt-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>05</span> <h2 data-astro-cid-5mrwl5tb>\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0430\u0439\u043C\u043B\u0430\u0439\u043D (\u0413\u0430\u043D\u0442)</h2> </header> <div class="gantt-container" data-astro-cid-5mrwl5tb> ', ' </div> <div class="gantt-legend-fixed" data-astro-cid-5mrwl5tb> <span class="legend-item" data-astro-cid-5mrwl5tb><i class="done" data-astro-cid-5mrwl5tb></i> \u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E (\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430)</span> <span class="legend-item" data-astro-cid-5mrwl5tb><i class="active" data-astro-cid-5mrwl5tb></i> \u0410\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u0444\u0430\u0437\u0430 (\u043A\u043E\u0434)</span> <span class="legend-item" data-astro-cid-5mrwl5tb><i class="next" data-astro-cid-5mrwl5tb></i> \u0421\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F</span> </div> </section> <section class="stage gantt-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>05</span> <h2 data-astro-cid-5mrwl5tb>\u0413\u0430\u043D\u0442 \u0432\u0441\u0435\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432</h2> </header> <div class="gantt-chart" data-astro-cid-5mrwl5tb> <div class="gantt-header" data-astro-cid-5mrwl5tb> <span class="gantt-label-col" data-astro-cid-5mrwl5tb>\u041F\u0440\u043E\u0435\u043A\u0442</span> <div class="gantt-months" data-astro-cid-5mrwl5tb> <span data-astro-cid-5mrwl5tb>\u041D\u043E\u044F\u0431\u0440\u044C</span><span data-astro-cid-5mrwl5tb>\u0414\u0435\u043A\u0430\u0431\u0440\u044C</span><span data-astro-cid-5mrwl5tb>\u042F\u043D\u0432\u0430\u0440\u044C</span><span data-astro-cid-5mrwl5tb>\u0424\u0435\u0432\u0440\u0430\u043B\u044C</span><span data-astro-cid-5mrwl5tb>\u041C\u0430\u0440\u0442</span><span data-astro-cid-5mrwl5tb>\u0410\u043F\u0440\u0435\u043B\u044C</span> </div> </div> ', ' </div> <div class="gantt-legend" data-astro-cid-5mrwl5tb> <span class="legend-item" data-astro-cid-5mrwl5tb><i class="done" data-astro-cid-5mrwl5tb></i> \u0413\u043E\u0442\u043E\u0432 (80%+)</span> <span class="legend-item" data-astro-cid-5mrwl5tb><i class="active" data-astro-cid-5mrwl5tb></i> \u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435 (50-79%)</span> <span class="legend-item" data-astro-cid-5mrwl5tb><i class="next" data-astro-cid-5mrwl5tb></i> \u041D\u0430\u0447\u0430\u043B\u043E (&lt;50%)</span> </div> </section> <section class="stage kanban-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>06</span> <h2 data-astro-cid-5mrwl5tb>\u0417\u0430\u0434\u0430\u0447\u0438 \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C</h2> </header> <div class="kanban-board" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage diagram-link-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>07</span> <h2 data-astro-cid-5mrwl5tb>\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u044B \u043A \u0434\u0435\u0442\u0430\u043B\u044F\u043C</h2> </header> <div class="diagram-link-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage plan-table-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>07</span> <h2 data-astro-cid-5mrwl5tb>\u041F\u043B\u0430\u043D \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432</h2> </header> <div class="plan-cards" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage plan-strip" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>06</span> <h2 data-astro-cid-5mrwl5tb>\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u043B\u0430\u043D \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C</h2> </header> <div class="commit-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage proof-stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>03</span> <h2 data-astro-cid-5mrwl5tb>\u041F\u0440\u0443\u0444\u044B \u0438 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438</h2> </header> <div class="commit-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <div class="wireframe-container" data-astro-cid-5mrwl5tb> <section class="stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>04</span> <h2 data-astro-cid-5mrwl5tb>\u0421\u0431\u043E\u0440 \u0434\u0430\u043D\u043D\u044B\u0445 (Raw Data)</h2> </header> <div class="raw-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>05</span> <h2 data-astro-cid-5mrwl5tb>\u0410\u043D\u0430\u043B\u0438\u0437 (Conflict Detection)</h2> </header> <div class="wf-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>06</span> <h2 data-astro-cid-5mrwl5tb>\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u044F (Action)</h2> </header> <div class="wf-grid wf-grid-wide" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>07</span> <h2 data-astro-cid-5mrwl5tb>\u041A\u043E\u043C\u043C\u0438\u0442\u044B \u0438 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u044B</h2> </header> <div class="commit-grid" data-astro-cid-5mrwl5tb> ', ' </div> </section> <section class="stage note" data-astro-cid-5mrwl5tb> <h2 data-astro-cid-5mrwl5tb>\u0418\u0442\u043E\u0433 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F</h2> <p data-astro-cid-5mrwl5tb>\nUHA-6.0 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u043E\u043C, Genius \u2014 \u0437\u0440\u0435\u043B\u044B\u043C \u0434\u0432\u0438\u0436\u043A\u043E\u043C, MethodA \u2014 docs-first \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439.\n      \u0412\u0441\u0435 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u0432\u044F\u0437\u0430\u043D\u044B \u0441 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0430\u043C\u0438 \u0438 \u0440\u0430\u0437\u043B\u043E\u0436\u0435\u043D\u044B \u043F\u043E \u043F\u043B\u0430\u043D\u0443/\u0444\u0430\u043A\u0442\u0443.\n</p> </section> <section class="stage" data-astro-cid-5mrwl5tb> <header data-astro-cid-5mrwl5tb> <span class="step-num" data-astro-cid-5mrwl5tb>08</span> <h2 data-astro-cid-5mrwl5tb>\u0421\u0432\u043E\u0434\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438</h2> </header> <div class="summary-article-grid" data-astro-cid-5mrwl5tb> ', " </div> </section> </div> "])), maybeRenderHead(), unescapeHTML(JSON.stringify(llmChartData)), unescapeHTML(JSON.stringify(llmTopModels)), llmData.tierApr.budget + llmData.tierApr.mid, llmData.aprCpr, progressSummary.map((item) => renderTemplate`<article${addAttribute(`summary-card ${item.tone}`, "class")} data-astro-cid-5mrwl5tb> <strong data-astro-cid-5mrwl5tb>${item.name}</strong> <span data-astro-cid-5mrwl5tb>Итог ${item.progress}%</span> <div class="summary-bar" data-astro-cid-5mrwl5tb><i${addAttribute(`width:${item.progress}%`, "style")} data-astro-cid-5mrwl5tb></i></div> </article>`), confidenceRows.map((row) => renderTemplate`<article${addAttribute(`confidence-card ${row.tone}`, "class")} data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${row.name}</h3> <div class="confidence-meter" data-astro-cid-5mrwl5tb> <i${addAttribute(`width:${row.score}%`, "style")} data-astro-cid-5mrwl5tb></i> </div> <div class="confidence-meta" data-astro-cid-5mrwl5tb> <span data-astro-cid-5mrwl5tb>${row.score}% confidence</span> <span data-astro-cid-5mrwl5tb>${row.sourceCount} источников</span> <span data-astro-cid-5mrwl5tb>${row.conflicts} конфликтов</span> <span data-astro-cid-5mrwl5tb>${row.freshness}</span> </div> </article>`), donutRows.map((row) => renderTemplate`${renderComponent($$result2, "ProjectDiagramCard", $$ProjectDiagramCard, { "name": row.name, "progress": row.progress, "hologram": row.hologram, "spec": row.spec, "done": row.done, "total": row.total, "compact": false, "data-astro-cid-5mrwl5tb": true })}`), addAttribute(JSON.stringify(commitWaveChart), "data-commit-wave"), commitWaveRows.map((row) => renderTemplate`<article class="commit-wave-card" data-astro-cid-5mrwl5tb> <strong data-astro-cid-5mrwl5tb>${row.name}</strong> <span data-astro-cid-5mrwl5tb>${row.total} коммитов</span> <small data-astro-cid-5mrwl5tb>Пик: ${row.peak} · ${row.peakLabel}</small> <div class="commit-wave-mini" data-astro-cid-5mrwl5tb> <i${addAttribute(`width:${Math.max(8, Math.min(100, row.peak * 10))}%`, "style")} data-astro-cid-5mrwl5tb></i> </div> <p data-astro-cid-5mrwl5tb>${row.start} → ${row.end}</p> </article>`), projects.map((project) => renderTemplate`<article class="kanban-column" data-astro-cid-5mrwl5tb> <h3 class="col-header" data-astro-cid-5mrwl5tb> <span class="col-name" data-astro-cid-5mrwl5tb>${project.name}</span> <span class="col-progress" data-astro-cid-5mrwl5tb>${project.progress}%</span> </h3> <div class="kanban-cards" data-astro-cid-5mrwl5tb> ${project.doneItems?.slice(0, 3).map((item) => renderTemplate`<div class="kanban-card done" data-astro-cid-5mrwl5tb> <span class="card-check" data-astro-cid-5mrwl5tb>✓</span> <span class="card-text" data-astro-cid-5mrwl5tb>${item}</span> </div>`)} ${project.nextItems?.slice(0, 4).map((item) => renderTemplate`<div class="kanban-card next" data-astro-cid-5mrwl5tb> <span class="card-text" data-astro-cid-5mrwl5tb>${item}</span> </div>`)} ${project.riskItems?.slice(0, 2).map((item) => renderTemplate`<div class="kanban-card risk" data-astro-cid-5mrwl5tb> <span class="card-risk" data-astro-cid-5mrwl5tb>⚠</span> <span class="card-text" data-astro-cid-5mrwl5tb>${item}</span> </div>`)} </div> </article>`), projects.map((project) => renderTemplate`<article class="gantt-project-block" data-astro-cid-5mrwl5tb> <div class="gantt-project-header" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${project.name}</h3> <span class="gantt-project-status" data-astro-cid-5mrwl5tb>${project.status} · ${project.progress}%</span> </div> <div class="gantt-grid-wrapper" data-astro-cid-5mrwl5tb> <div class="gantt-timeline-header" data-astro-cid-5mrwl5tb> <div class="gantt-label-space" data-astro-cid-5mrwl5tb>Этап</div> <div class="gantt-months-row" data-astro-cid-5mrwl5tb> ${["\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C", "\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C"].map((m) => renderTemplate`<span data-astro-cid-5mrwl5tb>${m}</span>`)} </div> </div> <div class="gantt-row-item" data-astro-cid-5mrwl5tb> <div class="gantt-task-name" data-astro-cid-5mrwl5tb>Голограмма</div> <div class="gantt-track-lane" data-astro-cid-5mrwl5tb> <div class="gantt-bar-fill done"${addAttribute(`left: 0%; width: ${project.hologramProgress}%`, "style")} data-astro-cid-5mrwl5tb> ${project.hologramProgress}%
</div> </div> </div> <div class="gantt-row-item" data-astro-cid-5mrwl5tb> <div class="gantt-task-name" data-astro-cid-5mrwl5tb>Спецификация</div> <div class="gantt-track-lane" data-astro-cid-5mrwl5tb> <div class="gantt-bar-fill active"${addAttribute(`left: 15%; width: ${project.specProgress}%`, "style")} data-astro-cid-5mrwl5tb> ${project.specProgress}%
</div> </div> </div> <div class="gantt-row-item" data-astro-cid-5mrwl5tb> <div class="gantt-task-name" data-astro-cid-5mrwl5tb>Реализация</div> <div class="gantt-track-lane" data-astro-cid-5mrwl5tb> <div class="gantt-bar-fill next"${addAttribute(`left: 30%; width: ${project.execution}%`, "style")} data-astro-cid-5mrwl5tb> ${project.execution}%
</div> </div> </div> </div> </article>`), projects.map((project) => renderTemplate`<div class="gantt-row" data-astro-cid-5mrwl5tb> <span class="gantt-project-name" data-astro-cid-5mrwl5tb>${project.name}</span> <div class="gantt-track" data-astro-cid-5mrwl5tb> <div${addAttribute(`gantt-bar ${project.progress >= 80 ? "done" : project.progress >= 50 ? "active" : "next"}`, "class")}${addAttribute(`left:${Math.max(0, project.progress - 20)}%; width:${Math.min(100, Math.max(20, project.progress))}%`, "style")} data-astro-cid-5mrwl5tb> <span class="bar-label" data-astro-cid-5mrwl5tb>${project.progress}%</span> </div> ${[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95].map((pct) => renderTemplate`<div class="gantt-marker"${addAttribute(`left:${pct}%`, "style")} data-astro-cid-5mrwl5tb></div>`)} </div> </div>`), projects.map((project) => renderTemplate`<article class="kanban-column" data-astro-cid-5mrwl5tb> <h3 class="col-header" data-astro-cid-5mrwl5tb> <span class="col-name" data-astro-cid-5mrwl5tb>${project.name}</span> <span class="col-progress" data-astro-cid-5mrwl5tb>${project.progress}%</span> </h3> <div class="kanban-cards" data-astro-cid-5mrwl5tb> ${project.doneItems?.slice(0, 3).map((item) => renderTemplate`<div class="kanban-card done" data-astro-cid-5mrwl5tb> <span class="card-check" data-astro-cid-5mrwl5tb>✓</span> <span class="card-text" data-astro-cid-5mrwl5tb>${item}</span> </div>`)} ${project.nextItems?.slice(0, 4).map((item) => renderTemplate`<div class="kanban-card next" data-astro-cid-5mrwl5tb> <span class="card-text" data-astro-cid-5mrwl5tb>${item}</span> </div>`)} ${project.riskItems?.slice(0, 2).map((item) => renderTemplate`<div class="kanban-card risk" data-astro-cid-5mrwl5tb> <span class="card-risk" data-astro-cid-5mrwl5tb>⚠</span> <span class="card-text" data-astro-cid-5mrwl5tb>${item}</span> </div>`)} </div> </article>`), projects.map((project) => renderTemplate`<article class="summary-card" data-astro-cid-5mrwl5tb> <strong data-astro-cid-5mrwl5tb>${project.name}</strong> <span data-astro-cid-5mrwl5tb>${project.progress}% · ${project.totalDone}/${project.totalVolume}</span> <a${addAttribute(`/projects/${project.slug}`, "href")} data-astro-cid-5mrwl5tb>Открыть диаграмму проекта</a> </article>`), planRows.map((row) => renderTemplate`<article class="plan-card" data-astro-cid-5mrwl5tb> <div class="plan-card-head" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${row.name}</h3> <div class="plan-card-badges" data-astro-cid-5mrwl5tb> <span${addAttribute(`score-pill ${statusClass(row.progress)}`, "class")} data-astro-cid-5mrwl5tb>${row.progress}%</span> <span${addAttribute(`score-pill ${statusClass(row.risk <= 30 ? 85 : row.risk <= 60 ? 70 : 40)}`, "class")} data-astro-cid-5mrwl5tb>Риск ${row.risk}%</span> </div> </div> <div class="plan-card-metrics" data-astro-cid-5mrwl5tb> <div class="plan-metric" data-astro-cid-5mrwl5tb> <span data-astro-cid-5mrwl5tb>Голограмма</span> <strong data-astro-cid-5mrwl5tb>${row.hologram}%</strong> </div> <div class="plan-metric" data-astro-cid-5mrwl5tb> <span data-astro-cid-5mrwl5tb>Спека</span> <strong data-astro-cid-5mrwl5tb>${row.spec}%</strong> </div> <div class="plan-metric" data-astro-cid-5mrwl5tb> <span data-astro-cid-5mrwl5tb>Исполнение</span> <strong data-astro-cid-5mrwl5tb>${row.execution}%</strong> </div> </div> <div class="plan-card-progress" data-astro-cid-5mrwl5tb> <div class="plan-progress-bar" data-astro-cid-5mrwl5tb> <i${addAttribute(`width:${row.progress}%`, "style")} data-astro-cid-5mrwl5tb></i> </div> <span data-astro-cid-5mrwl5tb>${row.volumeDone}/${row.volumeTotal}</span> </div> <div class="plan-card-tasks" data-astro-cid-5mrwl5tb> <strong data-astro-cid-5mrwl5tb>Ближайшие шаги:</strong> <ul data-astro-cid-5mrwl5tb> ${row.next.slice(0, 3).map((item) => renderTemplate`<li data-astro-cid-5mrwl5tb>${item}</li>`)} </ul> </div> </article>`), projects.map((project) => renderTemplate`<article class="commit-card" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${project.name}</h3> <p class="commit-note" data-astro-cid-5mrwl5tb>${project.scoreNote}</p> <ul data-astro-cid-5mrwl5tb> ${project.nextItems.slice(0, 4).map((item) => renderTemplate`<li data-astro-cid-5mrwl5tb>${item}</li>`)} </ul> </article>`), proofRows.map((row) => renderTemplate`<article class="commit-card" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${row.name}</h3> <ul data-astro-cid-5mrwl5tb> ${row.sources.map((source) => renderTemplate`<li data-astro-cid-5mrwl5tb>${source}</li>`)} </ul> </article>`), dataRows.map((row) => renderTemplate`<article class="raw-card" data-astro-cid-5mrwl5tb> <div class="raw-card-head" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${row.name}</h3> <span${addAttribute(`score-pill ${statusClass(row.score)}`, "class")} data-astro-cid-5mrwl5tb>${row.score}%</span> </div> <dl class="raw-metrics" data-astro-cid-5mrwl5tb> <div data-astro-cid-5mrwl5tb><dt data-astro-cid-5mrwl5tb>Файлов</dt><dd data-astro-cid-5mrwl5tb>${row.sourceCount}</dd></div> <div data-astro-cid-5mrwl5tb><dt data-astro-cid-5mrwl5tb>Обновление</dt><dd data-astro-cid-5mrwl5tb>${row.freshness}</dd></div> <div data-astro-cid-5mrwl5tb><dt data-astro-cid-5mrwl5tb>Open</dt><dd data-astro-cid-5mrwl5tb>${row.open}</dd></div> <div data-astro-cid-5mrwl5tb><dt data-astro-cid-5mrwl5tb>Frozen</dt><dd data-astro-cid-5mrwl5tb>${row.frozen}</dd></div> <div data-astro-cid-5mrwl5tb><dt data-astro-cid-5mrwl5tb>Proofs</dt><dd data-astro-cid-5mrwl5tb>${row.proofs}</dd></div> </dl> </article>`), analysisRows.map((row) => renderTemplate`<article class="wf-card" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${row.name}</h3> <div class="analysis-line" data-astro-cid-5mrwl5tb><strong data-astro-cid-5mrwl5tb>Тезис</strong><span class="tone info" data-astro-cid-5mrwl5tb>${row.thesis}</span></div> <div class="analysis-line" data-astro-cid-5mrwl5tb><strong data-astro-cid-5mrwl5tb>Антитезис</strong><span class="tone warn" data-astro-cid-5mrwl5tb>${row.antithesis}</span></div> <div class="analysis-line" data-astro-cid-5mrwl5tb><strong data-astro-cid-5mrwl5tb>Синтез</strong><span class="tone good" data-astro-cid-5mrwl5tb>${row.synthesis}</span></div> <div class="mini-section" data-astro-cid-5mrwl5tb> <strong data-astro-cid-5mrwl5tb>Фокус</strong> <ul data-astro-cid-5mrwl5tb>${row.focus.map((item) => renderTemplate`<li data-astro-cid-5mrwl5tb>${item}</li>`)}</ul> </div> <div class="mini-section" data-astro-cid-5mrwl5tb> <strong data-astro-cid-5mrwl5tb>Сигналы</strong> <ul data-astro-cid-5mrwl5tb>${row.evidence.map((item) => renderTemplate`<li data-astro-cid-5mrwl5tb>${item}</li>`)}</ul> </div> </article>`), publicationRows.map((row) => renderTemplate`<article class="wf-action-card" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${row.name}</h3> <div${addAttribute(`verdict-line ${statusClass(row.score)}`, "class")} data-astro-cid-5mrwl5tb>${row.verdict}</div> <p data-astro-cid-5mrwl5tb>${row.recommendation}</p> </article>`), projects.map((project) => {
    const commitDetails = project.commitDetails || [];
    return renderTemplate`<article class="commit-card" data-astro-cid-5mrwl5tb> <h3 data-astro-cid-5mrwl5tb>${project.name}</h3> <p class="commit-note" data-astro-cid-5mrwl5tb>Полный листинг ключевых коммитов с короткими описаниями.</p> <ul data-astro-cid-5mrwl5tb> ${commitDetails.map((commit) => renderTemplate`<li data-astro-cid-5mrwl5tb> <strong data-astro-cid-5mrwl5tb>${commit.hash}</strong> <span data-astro-cid-5mrwl5tb>${commit.date}</span> <em data-astro-cid-5mrwl5tb>${commit.title}</em> <div data-astro-cid-5mrwl5tb>${commit.description}</div> </li>`)} </ul> </article>`;
  }), projectSummaries.map((project) => renderTemplate`<article class="summary-article" data-astro-cid-5mrwl5tb> <div${addAttribute(`badge ${project.name === "UHA-6.0" ? "warn" : project.name === "Genius" ? "info" : "good"}`, "class")} data-astro-cid-5mrwl5tb>${project.status}</div> <h3 data-astro-cid-5mrwl5tb>${project.name}</h3> <p data-astro-cid-5mrwl5tb>${project.summary}</p> <p class="summary-unique" data-astro-cid-5mrwl5tb>${project.unique}</p> <a${addAttribute(`/projects/${project.slug}`, "href")} data-astro-cid-5mrwl5tb>Открыть проект</a> </article>`)), "sidebar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "sidebar" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DashboardSidebar", $$DashboardSidebar, { "projects": projects, "active": "report", "data-astro-cid-5mrwl5tb": true })} ` })}`, "topbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "topbar" }, { "default": async ($$result3) => renderTemplate` <div data-astro-cid-5mrwl5tb> <div class="eyebrow" data-astro-cid-5mrwl5tb>Отчёт</div> <h1 data-astro-cid-5mrwl5tb>Сбор данных, анализ, публикация</h1> <p class="lead" data-astro-cid-5mrwl5tb>
Сначала фиксируются данные по каждому проекту, затем строится анализ, и только после этого
        формируется панель.
</p> </div> ` })}` })}  `;
}, "/home/zoya/Code/ProjectsReview/src/pages/report.astro", void 0);

const $$file = "/home/zoya/Code/ProjectsReview/src/pages/report.astro";
const $$url = "/report";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Report,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
