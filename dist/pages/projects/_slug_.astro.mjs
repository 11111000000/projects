import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_BKnmkwkZ.mjs';
import 'kleur/colors';
import { l as loadProjectResearch, $ as $$BaseLayout, c as catalog, a as $$DashboardSidebar } from '../../chunks/project-research_CITGjwYF.mjs';
import { $ as $$ProjectDiagramCard } from '../../chunks/ProjectDiagramCard_CmxisCNX.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
function getStaticPaths() {
  return catalog.map((project) => ({ params: { slug: project.slug }, props: { project } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  const research = await loadProjectResearch();
  const resolvedProject = research.projects.find((item) => item.slug === project.slug) || project;
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
      count: counts.get(monthKey) || 0,
      percent: 0
    }));
  }
  const projectMonths = buildTwoMonthActivity(resolvedProject.commitDetails || []);
  const projectMax = Math.max(...projectMonths.map((month) => month.count), 1);
  const projectActivityMonths = projectMonths.map((month) => ({
    ...month,
    percent: Math.round(month.count / projectMax * 100)
  }));
  [
    resolvedProject.name === "UHA-6.0" ? "Boundary-first Android-\u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u0441 \u0441\u0438\u043B\u044C\u043D\u044B\u043C \u043A\u0430\u0440\u043A\u0430\u0441\u043E\u043C, \u043D\u043E \u0435\u0449\u0451 \u0431\u0435\u0437 \u043F\u043E\u043B\u043D\u043E\u0433\u043E domain bridge \u0438 p2p." : resolvedProject.name === "Genius" ? "\u0417\u0440\u0435\u043B\u044B\u0439 \u0433\u0440\u0430\u0444\u043E\u0432\u044B\u0439 \u0434\u0432\u0438\u0436\u043E\u043A, \u0433\u0434\u0435 runtime \u0438 layout \u0441\u0438\u043B\u044C\u043D\u044B, \u043D\u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0443\u0440 \u0435\u0449\u0451 \u043D\u0435 \u0434\u043E\u0432\u0435\u0434\u0451\u043D." : "Docs-first \u0441\u0438\u0441\u0442\u0435\u043C\u0430, \u0433\u0434\u0435 \u043A\u0430\u043D\u043E\u043D, \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B \u0438 verification \u0443\u0436\u0435 \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043B\u0438 \u0440\u0430\u0431\u043E\u0447\u0438\u0439 \u043A\u043E\u043D\u0442\u0443\u0440.",
    resolvedProject.name === "UHA-6.0" ? "\u0421\u0438\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B: \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F, storage/net/maps \u0438 LIVE-SOLO. \u0421\u043B\u0430\u0431\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u043E\u0441\u0442\u044C." : resolvedProject.name === "Genius" ? "\u0421\u0438\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B: engine, tests, layout. \u0421\u043B\u0430\u0431\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: complex families, LOD, gestures." : "\u0421\u0438\u043B\u044C\u043D\u044B\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B: living document, emacs-mode, verification. \u0421\u043B\u0430\u0431\u043E\u0435 \u043C\u0435\u0441\u0442\u043E: \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F \u0438 UX."
  ];
  const article = resolvedProject.article || {
    lead: resolvedProject.summary,
    purpose: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043E.",
    built: resolvedProject.doneItems || [],
    done: resolvedProject.doneItems || [],
    next: resolvedProject.nextItems || [],
    assessment: resolvedProject.scoreNote || ""
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${resolvedProject.name} \xB7 ProjectsReview`, "description": `\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u0430 ${resolvedProject.name}`, "data-astro-cid-ovxcmftc": true }, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="metrics" data-astro-cid-ovxcmftc> <div class="tile" data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>${resolvedProject.progress}%</strong><span data-astro-cid-ovxcmftc>Выполнение</span></div> <div class="tile" data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>${resolvedProject.hologramProgress}%</strong><span data-astro-cid-ovxcmftc>Голограмма</span></div> <div class="tile" data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>${resolvedProject.specProgress}%</strong><span data-astro-cid-ovxcmftc>Спека</span></div> <div class="tile" data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>${resolvedProject.risk}%</strong><span data-astro-cid-ovxcmftc>Риск</span></div> <div class="tile" data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>${resolvedProject.totalDone}/${resolvedProject.totalVolume}</strong><span data-astro-cid-ovxcmftc>Объём факт/план</span></div> </section> <section class="diagram-section" data-astro-cid-ovxcmftc> ${renderComponent($$result2, "ProjectDiagramCard", $$ProjectDiagramCard, { "name": resolvedProject.name, "progress": resolvedProject.progress, "hologram": resolvedProject.hologramProgress, "spec": resolvedProject.specProgress, "done": resolvedProject.totalDone, "total": resolvedProject.totalVolume, "activityMonths": projectActivityMonths, "compact": true, "data-astro-cid-ovxcmftc": true })} </section> <section class="panel project-article-panel" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Сводная статья</h2> <p data-astro-cid-ovxcmftc>${article.lead}</p> <p data-astro-cid-ovxcmftc>${article.purpose}</p> <div class="article-grid" data-astro-cid-ovxcmftc> <article data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Как сделано</strong> <ul data-astro-cid-ovxcmftc>${article.built.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </article> <article data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Что уже сделано</strong> <ul data-astro-cid-ovxcmftc>${article.done.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </article> <article data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Что запланировано</strong> <ul data-astro-cid-ovxcmftc>${article.next.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </article> </div> <p class="article-assessment" data-astro-cid-ovxcmftc>${article.assessment}</p> </section> <section class="status-legend" data-astro-cid-ovxcmftc> <span${addAttribute(`status-pill ${resolvedProject.statusTone}`, "class")} data-astro-cid-ovxcmftc>${resolvedProject.status}</span> <span class="status-pill good" data-astro-cid-ovxcmftc>ЗАВЕРШЕНО</span> <span class="status-pill warn" data-astro-cid-ovxcmftc>В ПРОЦЕССЕ</span> <span class="status-pill info" data-astro-cid-ovxcmftc>ДОКУМЕНТАЦИЯ</span> <span class="status-pill danger" data-astro-cid-ovxcmftc>РИСК</span> </section> <section class="panel hologram-panel" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Состояние Голограммы</h2> <p class="holo-state" data-astro-cid-ovxcmftc>${resolvedProject.hologramState}</p> <p class="holo-summary" data-astro-cid-ovxcmftc>${resolvedProject.hologramSummary}</p> <div class="holo-grid" data-astro-cid-ovxcmftc> <div data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Голограмма</strong> <p data-astro-cid-ovxcmftc>${resolvedProject.hologramState}</p> </div> <div data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Спека</strong> <p data-astro-cid-ovxcmftc>${resolvedProject.specState}</p> </div> </div> <div class="holo-grid lower" data-astro-cid-ovxcmftc> <div data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Starter</strong> <p data-astro-cid-ovxcmftc>${resolvedProject.starterState}</p> </div> <div data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>Формула</strong> <p data-astro-cid-ovxcmftc>${resolvedProject.progressModel ? `\u0413 ${resolvedProject.progressModel.hologramDone}/${resolvedProject.progressModel.hologramTotal}, \u0421 ${resolvedProject.progressModel.specDone}/${resolvedProject.progressModel.specTotal}` : "\u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"}</p> </div> </div> </section> <section class="layout-block" data-astro-cid-ovxcmftc> <div class="panel info" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Код</h2> <ul data-astro-cid-ovxcmftc>${resolvedProject.codeDigest.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </div> <div class="panel good" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Голограмма (документы)</h2> <ul data-astro-cid-ovxcmftc>${resolvedProject.holoDigest.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </div> </section> <section class="layout-block" data-astro-cid-ovxcmftc> <div class="panel good" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Сделано</h2> <ul data-astro-cid-ovxcmftc>${resolvedProject.doneItems.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </div> <div class="panel warn" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Дальше</h2> <ul data-astro-cid-ovxcmftc>${resolvedProject.nextItems.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </div> </section> <section class="layout-block" data-astro-cid-ovxcmftc> <div class="panel danger" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Риски</h2> <ul data-astro-cid-ovxcmftc>${resolvedProject.riskItems.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </div> <div class="panel info" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Контекст</h2> <ul data-astro-cid-ovxcmftc>${resolvedProject.detailItems.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc>${item}</li>`)}</ul> </div> </section> <section class="panel timeline-panel" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Линейка этапов</h2> <div class="timeline-grid" data-astro-cid-ovxcmftc> ${resolvedProject.timeline.map((label, index) => {
    let statusText = "\u041E\u0416\u0418\u0414\u0410\u041D\u0418\u0415";
    let statusClass = "warn";
    if (index < 2) {
      statusText = "\u0417\u0410\u0412\u0415\u0420\u0428\u0415\u041D\u041E";
      statusClass = "good";
    } else if (index === 2) {
      statusText = "\u0412 \u041F\u0420\u041E\u0426\u0415\u0421\u0421\u0415";
      statusClass = "warn";
    }
    return renderTemplate`<div class="timeline-row"${addAttribute(`${label}: ${statusText}`, "title")} data-astro-cid-ovxcmftc> <span class="timeline-label" data-astro-cid-ovxcmftc>${label}</span> <div class="track" data-astro-cid-ovxcmftc> ${Array.from({ length: 10 }, (_, i) => {
      const stepStatus = i < index * 2 + 1 ? "done" : i === index * 2 + 1 ? "active" : "next";
      return renderTemplate`<span${addAttribute(`slot ${stepStatus}`, "class")} data-astro-cid-ovxcmftc></span>`;
    })} </div> <span${addAttribute(`status-tag ${statusClass}`, "class")} data-astro-cid-ovxcmftc>${statusText}</span> </div>`;
  })} </div> </section> <section class="panel commit-panel" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Коммиты</h2> <ul class="commit-list" data-astro-cid-ovxcmftc> ${resolvedProject.commits.map((commit) => renderTemplate`<li data-astro-cid-ovxcmftc> <strong data-astro-cid-ovxcmftc>${commit.hash}</strong> <span data-astro-cid-ovxcmftc>${commit.date}</span> <em data-astro-cid-ovxcmftc>${commit.title}</em> <p data-astro-cid-ovxcmftc>${commit.description}</p> </li>`)} </ul> </section> <section class="panel source-panel" data-astro-cid-ovxcmftc> <h2 data-astro-cid-ovxcmftc>Источники и пруфы</h2> <ul class="commit-list" data-astro-cid-ovxcmftc> ${resolvedProject.sourceFiles.map((file) => renderTemplate`<li data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>FILE</strong><span data-astro-cid-ovxcmftc>${file}</span></li>`)} ${resolvedProject.holoDigest.map((item) => renderTemplate`<li data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>HOLO</strong><span data-astro-cid-ovxcmftc>${item}</span></li>`)} ${resolvedProject.doneItems.slice(0, 3).map((item) => renderTemplate`<li data-astro-cid-ovxcmftc><strong data-astro-cid-ovxcmftc>FACT</strong><span data-astro-cid-ovxcmftc>${item}</span></li>`)} </ul> </section> `, "sidebar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "sidebar" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DashboardSidebar", $$DashboardSidebar, { "projects": research.projects, "active": resolvedProject.slug, "data-astro-cid-ovxcmftc": true })} ` })}`, "topbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "topbar" }, { "default": async ($$result3) => renderTemplate` <div data-astro-cid-ovxcmftc> <div class="eyebrow" data-astro-cid-ovxcmftc>Проект</div> <h1 data-astro-cid-ovxcmftc>${resolvedProject.name}</h1> <p class="lead" data-astro-cid-ovxcmftc>${resolvedProject.summary}</p> </div> ` })}` })} `;
}, "/home/zoya/Code/ProjectsReview/src/pages/projects/[slug].astro", void 0);

const $$file = "/home/zoya/Code/ProjectsReview/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
