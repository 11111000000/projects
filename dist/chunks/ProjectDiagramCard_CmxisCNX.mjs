import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_BKnmkwkZ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("http://localhost:4321");
const $$ProjectDiagramCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectDiagramCard;
  const {
    name,
    progress = 0,
    hologram = progress,
    spec = progress,
    done = 0,
    total = 0,
    activityMonths = [],
    compact = false
  } = Astro2.props;
  const parts = [
    { key: "progress", label: "\u0418\u0442\u043E\u0433", value: progress, color: "#2563eb" },
    { key: "hologram", label: "\u0413\u043E\u043B\u043E\u0433\u0440\u0430\u043C\u043C\u0430", value: hologram, color: "#8b5cf6" },
    { key: "spec", label: "\u0421\u043F\u0435\u043A\u0430", value: spec, color: "#14b8a6" }
  ];
  const planPercent = total > 0 ? Math.round(done / total * 100) : 0;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`diagram-card ${compact ? "compact" : ""}`, "class")} data-diagram-card${addAttribute(planPercent, "data-plan-value")} data-astro-cid-a6mikki5> <div class="diagram-head" data-astro-cid-a6mikki5> <div data-astro-cid-a6mikki5> <h3 data-astro-cid-a6mikki5>${name}</h3> <p data-astro-cid-a6mikki5>Итог ${progress}% · Г ${hologram}% · С ${spec}%</p> </div> <div class="diagram-badge" data-astro-cid-a6mikki5>интерактивно</div> </div> <div class="diagram-visual" data-astro-cid-a6mikki5> <svg viewBox="0 0 200 200" aria-hidden="true" data-astro-cid-a6mikki5> <circle class="diagram-track outer" cx="100" cy="100" r="76" data-astro-cid-a6mikki5></circle> <circle class="diagram-ring outer" cx="100" cy="100" r="76" data-diagram-plan-ring${addAttribute(`stroke:#0f172a; stroke-dasharray:${2 * Math.PI * 76}; stroke-dashoffset:${2 * Math.PI * 76 * (1 - planPercent / 100)};`, "style")} data-astro-cid-a6mikki5></circle> <circle class="diagram-track inner" cx="100" cy="100" r="52" data-astro-cid-a6mikki5></circle> <circle class="diagram-ring inner" cx="100" cy="100" r="52" data-diagram-ring${addAttribute(`stroke:${parts[0].color}; stroke-dasharray:${2 * Math.PI * 52}; stroke-dashoffset:${2 * Math.PI * 52 * (1 - progress / 100)};`, "style")} data-astro-cid-a6mikki5></circle> <circle class="diagram-glow" cx="100" cy="100" r="52" data-astro-cid-a6mikki5></circle> </svg> <div class="diagram-center" data-astro-cid-a6mikki5> <strong data-diagram-value data-astro-cid-a6mikki5>${progress}%</strong> <span data-diagram-label data-astro-cid-a6mikki5>Итог</span> <em data-astro-cid-a6mikki5>${done}/${total} объём · план ${planPercent}%</em> </div> </div> <div class="diagram-legend" data-astro-cid-a6mikki5> ${parts.map((part) => renderTemplate`<button type="button" class="diagram-button" data-diagram-button${addAttribute(part.key, "data-target")}${addAttribute(part.value, "data-value")} data-astro-cid-a6mikki5> <span data-astro-cid-a6mikki5>${part.label}</span> <strong data-astro-cid-a6mikki5>${part.value}%</strong> </button>`)} </div> ${activityMonths.length > 0 && renderTemplate`<div class="diagram-activity" data-astro-cid-a6mikki5> <div class="activity-title" data-astro-cid-a6mikki5>Активность за 2 месяца</div> ${activityMonths.map((month) => renderTemplate`<div class="activity-row"${addAttribute(`${name}: ${month.label} \u2014 ${month.count} \u043A\u043E\u043C\u043C\u0438\u0442\u043E\u0432`, "title")} data-astro-cid-a6mikki5> <span data-astro-cid-a6mikki5>${month.label}</span> <div class="activity-track" data-astro-cid-a6mikki5> <i${addAttribute(`width:${month.percent}%`, "style")} data-astro-cid-a6mikki5></i> </div> <strong data-astro-cid-a6mikki5>${month.count}</strong> </div>`)} </div>`} </article>  `;
}, "/home/zoya/Code/ProjectsReview/src/components/ProjectDiagramCard.astro", void 0);

export { $$ProjectDiagramCard as $ };
