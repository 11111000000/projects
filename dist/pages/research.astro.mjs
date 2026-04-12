import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BKnmkwkZ.mjs';
import 'kleur/colors';
import { l as loadProjectResearch, $ as $$BaseLayout, a as $$DashboardSidebar } from '../chunks/project-research_CITGjwYF.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Research = createComponent(async ($$result, $$props, $$slots) => {
  const research = await loadProjectResearch();
  const projects = research.projects;
  function formatMonthKey(monthKey) {
    const [year, month] = monthKey.split("-").map(Number);
    return new Intl.DateTimeFormat("ru-RU", { month: "short", year: "numeric" }).format(
      new Date(Date.UTC(year, month - 1, 1))
    );
  }
  function buildTwoMonthActivity(commitDetails = []) {
    const counts = /* @__PURE__ */ new Map();
    commitDetails.forEach((commit) => {
      const monthKey = commit.date.slice(0, 7);
      counts.set(monthKey, (counts.get(monthKey) || 0) + 1);
    });
    const sortedMonths = [...counts.keys()].sort();
    const latestMonth = sortedMonths[sortedMonths.length - 1] || "2026-04";
    const previousMonth = sortedMonths[sortedMonths.length - 2] || "2026-03";
    const monthKeys = [previousMonth, latestMonth];
    const maxCount = Math.max(...monthKeys.map((monthKey) => counts.get(monthKey) || 0), 1);
    return monthKeys.map((monthKey) => ({
      key: monthKey,
      label: formatMonthKey(monthKey),
      count: counts.get(monthKey) || 0,
      percent: Math.round((counts.get(monthKey) || 0) / maxCount * 100)
    }));
  }
  const sourceRows = projects.map((project) => ({
    name: project.name,
    sources: project.sourceFiles,
    freshness: project.freshness,
    conflicts: project.conflicts.length ? project.conflicts : ["\u043D\u0435\u0442 \u044F\u0432\u043D\u044B\u0445 \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u043E\u0432"],
    activity: buildTwoMonthActivity(project.commitDetails || [])
  }));
  const matrixRows = projects.map((project) => ({
    name: project.name,
    plan: project.totalVolume,
    fact: project.totalDone,
    remaining: Math.max(project.totalVolume - project.totalDone, 0),
    confidence: project.score,
    holo: project.hologramProgress,
    spec: project.specProgress,
    risk: project.risk
  }));
  const evidenceRows = projects.map((project) => ({
    name: project.name,
    plan: project.totalVolume,
    fact: project.totalDone,
    progress: project.progress,
    freshness: project.freshness,
    sources: project.sourceFiles,
    conflicts: project.conflicts,
    topProofs: [
      ...(project.holoDigest || []).slice(0, 2),
      ...(project.doneItems || []).slice(0, 2),
      ...(project.nextItems || []).slice(0, 2)
    ]
  }));
  const confidenceGraphRows = projects.map((project) => ({
    name: project.name,
    confidence: project.score,
    sources: project.sourceFiles.length,
    conflicts: project.conflicts.length,
    risk: project.risk
  }));
  const methodRows = [
    { title: "\u0428\u0430\u0433 1", text: "\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u0430 \u043D\u0435 \u0434\u043E\u0433\u0430\u0434\u043A\u0438." },
    { title: "\u0428\u0430\u0433 2", text: "\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u0435\u043C \u043F\u043B\u0430\u043D, \u0444\u0430\u043A\u0442 \u0438 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430." },
    { title: "\u0428\u0430\u0433 3", text: "\u0424\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u043C \u043F\u0440\u043E\u0442\u0438\u0432\u043E\u0440\u0435\u0447\u0438\u044F \u043A\u0430\u043A \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u043B\u043E\u0439." },
    { title: "\u0428\u0430\u0433 4", text: "\u0421\u0447\u0438\u0442\u0430\u0435\u043C \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0441\u0431\u043E\u0440\u043A\u0438 \u0432\u0441\u0435\u0445 \u0441\u043B\u043E\u0451\u0432." }
  ];
  const sections = [
    {
      title: "\u041C\u0435\u0442\u043E\u0434",
      items: [
        "\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u0433\u043E\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0443 \u0438 \u0441\u043F\u0435\u043A\u0430.",
        "\u041F\u043B\u0430\u043D \u0438 \u0444\u0430\u043A\u0442 \u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u0440\u0430\u0437\u0434\u0435\u043B\u044C\u043D\u043E.",
        "100% \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438 \u043F\u043E\u043B\u043D\u043E\u043C \u043D\u0430\u0431\u043E\u0440\u0435 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u0432."
      ]
    },
    {
      title: "\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438",
      items: [
        "HOLO.md",
        "SURFACE.md",
        "README/PLAN",
        "\u043A\u043E\u0434",
        "\u0442\u0435\u0441\u0442\u044B",
        "commits"
      ]
    },
    {
      title: "\u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u044F",
      items: [
        "\u0415\u0441\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0435\u0442, \u0441\u0442\u0430\u0432\u0438\u043C unknown.",
        "\u041F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u0440\u0430\u0437\u043C\u0435\u0440\u0430 TODO-\u0441\u043F\u0438\u0441\u043A\u0430.",
        "\u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u043D\u0435 \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E."
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \xB7 ProjectsReview", "description": "\u041C\u0435\u0442\u043E\u0434\u0438\u043A\u0430, \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0438 \u043F\u0440\u0443\u0444\u044B", "active": "research", "data-astro-cid-odi5jzfj": true }, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="section-grid" data-astro-cid-odi5jzfj> ${sections.map((section) => renderTemplate`<article class="research-card" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>${section.title}</h2> <ul data-astro-cid-odi5jzfj>${section.items.map((item) => renderTemplate`<li data-astro-cid-odi5jzfj>${item}</li>`)}</ul> </article>`)} </section> <section class="research-card wide" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Диалектический метод</h2> <div class="method-grid" data-astro-cid-odi5jzfj> ${methodRows.map((row) => renderTemplate`<article class="method-card" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>${row.title}</strong> <p data-astro-cid-odi5jzfj>${row.text}</p> </article>`)} </div> </section> <section class="research-card wide" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Сводные статьи проектов</h2> <div class="summary-article-grid" data-astro-cid-odi5jzfj> ${projects.map((project) => renderTemplate`<article class="summary-article" data-astro-cid-odi5jzfj> <h3 data-astro-cid-odi5jzfj>${project.name}</h3> <p class="project-summary-note" data-astro-cid-odi5jzfj>${project.summary}</p> <p data-astro-cid-odi5jzfj>${project.article?.lead}</p> <ul data-astro-cid-odi5jzfj> ${(project.article?.built || []).slice(0, 3).map((item) => renderTemplate`<li data-astro-cid-odi5jzfj>${item}</li>`)} </ul> <p class="article-caption" data-astro-cid-odi5jzfj>${project.article?.assessment}</p> <a${addAttribute(`/projects/${project.slug}`, "href")} data-astro-cid-odi5jzfj>Открыть подробную статью</a> </article>`)} </div> </section> <section class="research-card" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Формула</h2> <p data-astro-cid-odi5jzfj>hologramProgress = hologramDone / hologramTotal</p> <p data-astro-cid-odi5jzfj>specProgress = specDone / specTotal</p> <p data-astro-cid-odi5jzfj>progress = 0.55 * hologramProgress + 0.45 * specProgress</p> </section> <section class="research-card wide" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Проблема читаемости</h2> <div class="issue-grid" data-astro-cid-odi5jzfj> <article class="issue-card" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>Один активный круг</strong> <p data-astro-cid-odi5jzfj>Толстый кольцевой индикатор лучше читается, чем три тонких наложенных круга.</p> </article> <article class="issue-card" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>Явный переключатель</strong> <p data-astro-cid-odi5jzfj>Легенда должна менять центральный слой и кольцо, а не просто показывать числа.</p> </article> <article class="issue-card" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>Контраст трека</strong> <p data-astro-cid-odi5jzfj>Фон кольца должен быть заметно темнее, а активный слой толще и ярче.</p> </article> </div> </section> <section class="research-card wide" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Матрица план / факт</h2> <div class="matrix-table" data-astro-cid-odi5jzfj> <div class="matrix-head" data-astro-cid-odi5jzfj><span data-astro-cid-odi5jzfj>Проект</span><span data-astro-cid-odi5jzfj>План</span><span data-astro-cid-odi5jzfj>Факт</span><span data-astro-cid-odi5jzfj>Остаток</span><span data-astro-cid-odi5jzfj>Доверие</span><span data-astro-cid-odi5jzfj>Г</span><span data-astro-cid-odi5jzfj>С</span><span data-astro-cid-odi5jzfj>Риск</span></div> ${matrixRows.map((row) => renderTemplate`<div class="matrix-row" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>${row.name}</strong> <span data-astro-cid-odi5jzfj>${row.plan}</span> <span data-astro-cid-odi5jzfj>${row.fact}</span> <span data-astro-cid-odi5jzfj>${row.remaining}</span> <span data-astro-cid-odi5jzfj>${row.confidence}%</span> <span data-astro-cid-odi5jzfj>${row.holo}%</span> <span data-astro-cid-odi5jzfj>${row.spec}%</span> <span data-astro-cid-odi5jzfj>${row.risk}%</span> </div>`)} </div> </section> <section class="research-card wide" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Пруф-матрица</h2> <div class="evidence-grid" data-astro-cid-odi5jzfj> ${evidenceRows.map((row) => renderTemplate`<article class="evidence-card" data-astro-cid-odi5jzfj> <h3 data-astro-cid-odi5jzfj>${row.name}</h3> <div class="fact-grid" data-astro-cid-odi5jzfj> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>План</strong><span data-astro-cid-odi5jzfj>${row.plan}</span></div> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>Факт</strong><span data-astro-cid-odi5jzfj>${row.fact}</span></div> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>Progress</strong><span data-astro-cid-odi5jzfj>${row.progress}%</span></div> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>Freshness</strong><span data-astro-cid-odi5jzfj>${row.freshness}</span></div> </div> <div class="proof-group" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>Источники</strong> <ul data-astro-cid-odi5jzfj>${row.sources.map((item) => renderTemplate`<li data-astro-cid-odi5jzfj>${item}</li>`)}</ul> </div> <div class="proof-group" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>Конфликты</strong> <ul data-astro-cid-odi5jzfj>${(row.conflicts.length ? row.conflicts : ["\u043D\u0435\u0442"]).map((item) => renderTemplate`<li data-astro-cid-odi5jzfj>${item}</li>`)}</ul> </div> <div class="proof-group" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>Пруфы</strong> <ul data-astro-cid-odi5jzfj>${row.topProofs.map((item) => renderTemplate`<li data-astro-cid-odi5jzfj>${item}</li>`)}</ul> </div> </article>`)} </div> </section> <section class="research-card wide" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Уверенность по проектам</h2> <div class="confidence-bars" data-astro-cid-odi5jzfj> ${confidenceGraphRows.map((row) => renderTemplate`<article class="confidence-line" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>${row.name}</strong> <div class="confidence-line-bars" data-astro-cid-odi5jzfj> <div class="confidence-line-row" data-astro-cid-odi5jzfj> <span data-astro-cid-odi5jzfj>Confidence</span> <div class="confidence-track" data-astro-cid-odi5jzfj><i${addAttribute(`width:${row.confidence}%`, "style")} data-astro-cid-odi5jzfj></i></div> <em data-astro-cid-odi5jzfj>${row.confidence}%</em> </div> <div class="confidence-line-row" data-astro-cid-odi5jzfj> <span data-astro-cid-odi5jzfj>Sources</span> <div class="confidence-track" data-astro-cid-odi5jzfj><i${addAttribute(`width:${Math.min(row.sources * 20, 100)}%`, "style")} data-astro-cid-odi5jzfj></i></div> <em data-astro-cid-odi5jzfj>${row.sources}</em> </div> <div class="confidence-line-row" data-astro-cid-odi5jzfj> <span data-astro-cid-odi5jzfj>Conflicts</span> <div class="confidence-track" data-astro-cid-odi5jzfj><i${addAttribute(`width:${Math.max(100 - row.conflicts * 30, 10)}%`, "style")} data-astro-cid-odi5jzfj></i></div> <em data-astro-cid-odi5jzfj>${row.conflicts}</em> </div> <div class="confidence-line-row" data-astro-cid-odi5jzfj> <span data-astro-cid-odi5jzfj>Risk</span> <div class="confidence-track" data-astro-cid-odi5jzfj><i${addAttribute(`width:${Math.max(100 - row.risk, 10)}%`, "style")} data-astro-cid-odi5jzfj></i></div> <em data-astro-cid-odi5jzfj>${row.risk}%</em> </div> </div> </article>`)} </div> </section> <section class="section-grid" data-astro-cid-odi5jzfj> ${sourceRows.map((project) => renderTemplate`<article class="research-card" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>${project.name}</h2> <p data-astro-cid-odi5jzfj>${project.freshness}</p> <div class="fact-grid" data-astro-cid-odi5jzfj> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>Источник</strong><span data-astro-cid-odi5jzfj>${project.sources.length}</span></div> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>Конфликты</strong><span data-astro-cid-odi5jzfj>${project.conflicts.length}</span></div> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>Месяц 1</strong><span data-astro-cid-odi5jzfj>${project.activity[0]?.count ?? 0}</span></div> <div data-astro-cid-odi5jzfj><strong data-astro-cid-odi5jzfj>Месяц 2</strong><span data-astro-cid-odi5jzfj>${project.activity[1]?.count ?? 0}</span></div> </div> <div class="proof-group" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>Источники</strong> <ul data-astro-cid-odi5jzfj> ${project.sources.map((item) => renderTemplate`<li data-astro-cid-odi5jzfj>${item}</li>`)} ${project.conflicts.map((item) => renderTemplate`<li data-astro-cid-odi5jzfj>${item}</li>`)} </ul> </div> </article>`)} </section> <section class="research-card wide" data-astro-cid-odi5jzfj> <h2 data-astro-cid-odi5jzfj>Активность по кодовым изменениям</h2> <div class="activity-table" data-astro-cid-odi5jzfj> ${sourceRows.map((row) => renderTemplate`<article class="activity-line" data-astro-cid-odi5jzfj> <strong data-astro-cid-odi5jzfj>${row.name}</strong> <div class="activity-bars" data-astro-cid-odi5jzfj> ${row.activity.map((month) => renderTemplate`<div class="activity-entry"${addAttribute(`${row.name}: ${month.label} \u2014 ${month.count}`, "title")} data-astro-cid-odi5jzfj> <span data-astro-cid-odi5jzfj>${month.label}</span> <div class="activity-track" data-astro-cid-odi5jzfj><i${addAttribute(`width:${month.percent}%`, "style")} data-astro-cid-odi5jzfj></i></div> <strong data-astro-cid-odi5jzfj>${month.count}</strong> </div>`)} </div> </article>`)} </div> </section> `, "sidebar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "sidebar" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DashboardSidebar", $$DashboardSidebar, { "projects": projects, "active": "research", "data-astro-cid-odi5jzfj": true })} ` })}`, "topbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "topbar" }, { "default": async ($$result3) => renderTemplate` <div data-astro-cid-odi5jzfj> <div class="eyebrow" data-astro-cid-odi5jzfj>Исследование</div> <h1 data-astro-cid-odi5jzfj>Как считаются цифры</h1> <p class="lead" data-astro-cid-odi5jzfj>Публичная страница метода: данные, формулы, пруфы и ограничения.</p> </div> ` })}` })} `;
}, "/home/zoya/Code/ProjectsReview/src/pages/research.astro", void 0);

const $$file = "/home/zoya/Code/ProjectsReview/src/pages/research.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Research,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
