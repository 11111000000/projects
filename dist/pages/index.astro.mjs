import { a as createComponent, r as renderComponent, b as renderTemplate, F as Fragment, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BKnmkwkZ.mjs';
import 'kleur/colors';
import { l as loadProjectResearch, $ as $$BaseLayout, a as $$DashboardSidebar } from '../chunks/project-research_CITGjwYF.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const research = await loadProjectResearch();
  const projects = research.projects;
  projects.map((project) => ({
    name: project.name,
    slug: project.slug,
    status: project.status,
    summary: project.summary,
    unique: project.name === "UHA-6.0" ? "\u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u043D\u0430\u044F Android-\u043E\u0441\u043D\u043E\u0432\u0430 \u0441 \u0436\u0438\u0432\u044B\u043C\u0438 \u0433\u0440\u0430\u043D\u0438\u0446\u0430\u043C\u0438 \u0438 \u0435\u0449\u0451 \u043D\u0435\u0437\u0430\u043A\u0440\u044B\u0442\u044B\u043C domain bridge." : project.name === "Genius" ? "\u0413\u0440\u0430\u0444\u043E\u0432\u044B\u0439 \u0434\u0432\u0438\u0436\u043E\u043A \u0441 \u0441\u0438\u043B\u044C\u043D\u043E\u0439 runtime-\u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043E\u0439 \u0438 \u043D\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u043C product polish." : "Docs-first \u043A\u043E\u043D\u0442\u0443\u0440, \u0433\u0434\u0435 \u043A\u0430\u043D\u043E\u043D \u0438 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B \u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u0435\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438."
  }));
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "ProjectsReview", "description": "\u041F\u0430\u043D\u0435\u043B\u044C \u043F\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="hero-copy" data-astro-cid-j7pv25f6> <p class="lead" data-astro-cid-j7pv25f6>
Это компактный обзор статуса, сделанного, планов и рисков по UHA-6.0, Genius и MethodA.
</p> <div class="legend" data-astro-cid-j7pv25f6> <span class="legend-item good" data-astro-cid-j7pv25f6>Завершено</span> <span class="legend-item warn" data-astro-cid-j7pv25f6>В работе</span> <span class="legend-item info" data-astro-cid-j7pv25f6>Документация</span> <span class="legend-item danger" data-astro-cid-j7pv25f6>Риск</span> </div> <div class="hero-actions" data-astro-cid-j7pv25f6> <a class="cta" href="/report" data-astro-cid-j7pv25f6>Открыть отчёт</a> <a class="cta secondary" href="/research" data-astro-cid-j7pv25f6>Открыть исследование</a> </div> </section> <section class="metrics" data-astro-cid-j7pv25f6> ${projects.map((project) => renderTemplate`<article class="metric" data-astro-cid-j7pv25f6> <strong data-astro-cid-j7pv25f6>${project.name}</strong> <span data-astro-cid-j7pv25f6>Итог ${project.progress}% · Голограмма ${project.hologramProgress}% · Спека ${project.specProgress}%</span> </article>`)} </section> <section class="cards" data-astro-cid-j7pv25f6> ${projects.map((project) => renderTemplate`<article class="card" data-astro-cid-j7pv25f6> <div${addAttribute(`badge ${project.statusTone}`, "class")} data-astro-cid-j7pv25f6>${project.status}</div> <h2 data-astro-cid-j7pv25f6>${project.name}</h2> <p data-astro-cid-j7pv25f6>${project.summary}</p> <ul class="micro-list" data-astro-cid-j7pv25f6> ${project.doneItems.slice(0, 2).map((item) => renderTemplate`<li data-astro-cid-j7pv25f6>${item}</li>`)} </ul> <a${addAttribute(`/projects/${project.slug}`, "href")} data-astro-cid-j7pv25f6>Открыть проект</a> </article>`)} </section> `, "sidebar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "sidebar" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "DashboardSidebar", $$DashboardSidebar, { "projects": projects, "active": "home", "data-astro-cid-j7pv25f6": true })} ` })}`, "topbar": async ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "topbar" }, { "default": async ($$result3) => renderTemplate` <div data-astro-cid-j7pv25f6> <div class="eyebrow" data-astro-cid-j7pv25f6>Проекты</div> <h1 data-astro-cid-j7pv25f6>Сводка по трём проектам</h1> <p class="lead" data-astro-cid-j7pv25f6>Краткий обзор статуса и текущих рисков.</p> </div> ` })}` })} `;
}, "/home/zoya/Code/ProjectsReview/src/pages/index.astro", void 0);

const $$file = "/home/zoya/Code/ProjectsReview/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
