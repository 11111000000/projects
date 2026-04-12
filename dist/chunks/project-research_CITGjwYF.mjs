import { c as createAstro, a as createComponent, d as addAttribute, e as renderHead, f as renderSlot, b as renderTemplate, m as maybeRenderHead } from './astro/server_BKnmkwkZ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import fs from 'node:fs/promises';
import path from 'node:path';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="ru" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><rect width='16' height='16' rx='3' fill='%234f46e5'/><path d='M4 8h8M8 4v8' stroke='white' stroke-width='1.5' stroke-linecap='round'/></svg>">${renderHead()}</head> <body data-astro-cid-37fxchfa> <div class="shell" data-astro-cid-37fxchfa> <div class="topbar" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["topbar"])} <button class="theme-toggle" type="button" data-theme-toggle aria-label="Переключить тему" data-astro-cid-37fxchfa>Тема: <strong data-theme-label data-astro-cid-37fxchfa>Тёмная</strong></button> </div> <div class="layout" data-astro-cid-37fxchfa> <aside class="sidebar" data-astro-cid-37fxchfa> <div class="brand" data-astro-cid-37fxchfa> <strong data-astro-cid-37fxchfa>ProjectsReview</strong> <span data-astro-cid-37fxchfa>Панель аналитики</span> </div> ${renderSlot($$result, $$slots["sidebar"])} </aside> <main class="content" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> </div> </div> <aside class="dev-error-panel" data-dev-error-panel data-astro-cid-37fxchfa></aside>  </body> </html>`;
}, "/home/zoya/Code/ProjectsReview/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$DashboardSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DashboardSidebar;
  const { projects, active } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-jigro4u6> <nav class="nav" data-astro-cid-jigro4u6> <a${addAttribute(active === "home" ? "active" : "", "class")} href="/" data-astro-cid-jigro4u6>Обзор</a> <a${addAttribute(active === "report" ? "active" : "", "class")} href="/report" data-astro-cid-jigro4u6>Отчёт</a> <a${addAttribute(active === "research" ? "active" : "", "class")} href="/research" data-astro-cid-jigro4u6>Исследование</a> <a${addAttribute(active === "uha-6-0" ? "active" : "", "class")} href="/projects/uha-6-0" data-astro-cid-jigro4u6>UHA-6.0</a> <a${addAttribute(active === "genius" ? "active" : "", "class")} href="/projects/genius" data-astro-cid-jigro4u6>Genius</a> <a${addAttribute(active === "methoda" ? "active" : "", "class")} href="/projects/methoda" data-astro-cid-jigro4u6>MethodA</a> </nav> <div class="metrics" data-astro-cid-jigro4u6> ${projects.map((project) => renderTemplate`<div${addAttribute(`metric ${project.statusTone}`, "class")} data-astro-cid-jigro4u6> <strong data-astro-cid-jigro4u6>${project.name}</strong> <span data-astro-cid-jigro4u6>Итог ${project.progress}% · Г ${project.hologramProgress}% · С ${project.specProgress}%</span> <div class="bar" data-astro-cid-jigro4u6><span${addAttribute(`width:${project.progress}%`, "style")} data-astro-cid-jigro4u6></span></div> </div>`)} </div> <p data-astro-cid-jigro4u6>Панель сигналов и навигации.</p> </div> `;
}, "/home/zoya/Code/ProjectsReview/src/components/DashboardSidebar.astro", void 0);

const uhaCommits = [
  {
    hash: '255b9d2',
    date: '2026-04-07',
    title: 'UHA progress',
    description: 'Зафиксирован актуальный прогресс прототипа: навигация, LIVE SOLO и сборка уже стабильны.'
  },
  {
    hash: 'd4119ff',
    date: '2026-03-23',
    title: 'update UI/UX design documents',
    description: 'Обновлены дизайн-документы: добавлены детальные Android MVP-экраны и управление ролями.'
  },
  {
    hash: '4857ba3',
    date: '2026-03-07',
    title: 'boundary-first clickable prototype',
    description: 'Собран кликабельный прототип с устойчивыми boundary-контрактами и без прямой зависимости UI от I/O.'
  },
  {
    hash: '93f699f',
    date: '2026-03-06',
    title: 'Gradle wrapper preflight checks',
    description: 'Добавлены preflight-проверки Gradle wrapper, чтобы рано ловить сбои в верификации.'
  },
  {
    hash: '135c697',
    date: '2026-03-06',
    title: 'Nix dev env migrated',
    description: 'Dev-среда переведена на nixos-25.05 и зафиксирован flake.lock для воспроизводимости.'
  },
  {
    hash: 'dd09a63',
    date: '2026-03-06',
    title: 'bootstrapped prototype',
    description: 'Запущен первый boundary-first Android bootstrap: каркас, маршруты и стартовая структура.'
  },
  {
    hash: '0b06172',
    date: '2026-03-06',
    title: 'security and rights refinements',
    description: 'Уточнены требования по безопасности, идентичности и правам в проектной документации.'
  },
  {
    hash: '8c24b31',
    date: '2026-03-06',
    title: 'spec documents for standards',
    description: 'Добавлены спецификационные документы по протоколу и платформенным стандартам UHA-6.0.'
  }
];

const geniusCommits = [
  {
    hash: '2311218',
    date: '2026-04-11',
    title: 'update',
    description: 'Текущая точка синхронизации после серии layout- и scene-фиксов.'
  },
  {
    hash: 'ded18f3',
    date: '2026-04-09',
    title: 'orthogonal complex family routing',
    description: 'Исправлена ортогональная маршрутизация для complex-family веток.'
  },
  {
    hash: '30e5971',
    date: '2026-04-09',
    title: 'genealogy complex-family rendering',
    description: 'Починен genealogy-рендер для complex-family сцен.'
  },
  {
    hash: '83e0e36',
    date: '2026-04-09',
    title: 'forest layout defaults',
    description: 'Добавлены дефолты forest layout: hub-ы, компактный лес и grid backdrop.'
  },
  {
    hash: '3e8af67',
    date: '2026-04-07',
    title: 'expand invariants and decisions',
    description: 'Расширены инварианты и решения по radial, flat scene и non-genealogy рендерам.'
  },
  {
    hash: '9810cec',
    date: '2026-04-06',
    title: 'phylogeny and generic-tree profiles',
    description: 'Добавлены профили phylogeny и generic-tree с radial layout и улучшенным UI.'
  },
  {
    hash: 'bd56919',
    date: '2026-04-05',
    title: 'adaptive collision-free layout',
    description: 'Реализован adaptive collision-free layout и плавный поворот веток без пересечений.'
  },
  {
    hash: '01122e9',
    date: '2026-04-05',
    title: 'advanced genealogy engine',
    description: 'Собран продвинутый genealogy engine с 3D layout, редактированием и undo/redo.'
  },
  {
    hash: 'cba7fe6',
    date: '2026-04-05',
    title: 'enhance specifications',
    description: 'Спецификации усилены serialization, metadata и registry-данными для профилей.'
  },
  {
    hash: '5637ca0',
    date: '2026-04-03',
    title: 'initialize Graph Engine project',
    description: 'Создан стартовый каркас Graph Engine с базовым tooling и документацией.'
  }
];

const methodaCommits = [
  {
    hash: '1dbd86a',
    date: '2026-04-09',
    title: 'Enable OpenRouter in default config',
    description: 'В дефолтную конфигурацию добавлен OpenRouter как основной провайдер.'
  },
  {
    hash: '05ebc54',
    date: '2026-04-09',
    title: 'Read API keys from ~/.authinfo',
    description: 'Ключи API теперь читаются через auth-source из ~/.authinfo.'
  },
  {
    hash: 'e0d9875',
    date: '2026-04-09',
    title: 'Use ~/.methoda/methoda.conf',
    description: 'Test playground переключён на ~/.methoda/methoda.conf.'
  },
  {
    hash: 'e58c23b',
    date: '2026-04-09',
    title: 'Test Playground E2E runner',
    description: 'Добавлен E2E runner с сессиями и free models для playground.'
  },
  {
    hash: 'f07952f',
    date: '2026-04-09',
    title: 'M8 complete',
    description: 'Закрыт milestone M8: Method Profile оформлен как исполняемый пакет.'
  },
  {
    hash: '6480b51',
    date: '2026-04-09',
    title: 'M1-M5, M7 complete',
    description: 'Закрыта большая часть вех: Living Document, Review, Policy, Tests и Agent.'
  },
  {
    hash: '3ad0083',
    date: '2026-04-08',
    title: 'Update HOLO.md and SURFACE.md',
    description: 'Обновлены HOLO.md и SURFACE.md, зафиксирован этап Living Document и Action Protocol.'
  },
  {
    hash: '0b5eaa7',
    date: '2026-04-08',
    title: 'single plan, living document, action protocol',
    description: 'Собран единый план и синхронизированы living document и action protocol.'
  },
  {
    hash: '8f9df7a',
    date: '2026-04-08',
    title: 'translate plans to Russian',
    description: 'Планы переведены на русский язык для единообразия канона.'
  },
  {
    hash: 'ed2c66f',
    date: '2026-04-08',
    title: 'Remove 1-plan.md',
    description: 'Старый план 1 удалён и заменён консолидированным набором планов.'
  },
  {
    hash: 'e211cc5',
    date: '2026-04-08',
    title: 'Consolidated Living Document Plan',
    description: 'Plan-3 собрал предыдущие планы в единый living-document контур.'
  },
  {
    hash: '84d8bf7',
    date: '2026-04-08',
    title: 'Consolidated Living Document Plan',
    description: 'Уточнён единый plan-слой с депрекацией старых артефактов.'
  },
  {
    hash: 'f9b5ed9',
    date: '2026-04-06',
    title: 'document-native session agent',
    description: 'Собрана первая document-native реализация session agent в Emacs mode.'
  },
  {
    hash: '4a203f1',
    date: '2026-04-06',
    title: 'Add nix dev environment for Emacs',
    description: 'Добавлена nix dev-среда для Emacs, чтобы контур был воспроизводимым.'
  },
  {
    hash: '107ebc3',
    date: '2026-04-05',
    title: 'initial',
    description: 'Старт проекта и первый рабочий след MethodA.'
  }
];

function buildProgressModel({ hologramDone, hologramTotal, specDone, specTotal }) {
  const clamp = (value) => Math.max(0, Math.min(100, Math.round(value)));
  const hologramProgress = clamp((hologramDone / hologramTotal) * 100);
  const specProgress = clamp((specDone / specTotal) * 100);
  const progress = clamp((hologramProgress * 0.55) + (specProgress * 0.45));

  return {
    hologramDone,
    hologramTotal,
    specDone,
    specTotal,
    hologramProgress,
    specProgress,
    progress,
    execution: hologramProgress,
    totalDone: hologramDone + specDone,
    totalVolume: hologramTotal + specTotal
  };
}

const analysisByProject = {
  'UHA-6.0': {
    hologramState: 'макеты и прототип, но не готовое приложение',
    hologramSummary:
      'HOLO/SURFACE показывают прототип экранов и каркас навигации, но p2p, бизнес-логика и полный Android-контур ещё не реализованы.',
    specState: 'спека закрыта только частично: экранный контур есть, функциональный контур и p2p ещё впереди',
    starterState: 'route set, wireframes и прототип уже есть, но без полноценной логики приложения',
    scoreNote: 'Это прототипный контур, а не завершённый продукт.'
  },
  Genius: {
    hologramState: 'движок готов, продуктовый контур ещё не собран',
    hologramSummary:
      'HOLO/SURFACE фиксируют сильный engine/runtime, но до полного приложения генеалогии, Android-версии и завершённого product flow ещё есть дистанция.',
    specState: 'спека сильная на уровне ядра, но продуктовая завершённость и Android-контур ещё не закрыты',
    starterState: 'GraphState, LayoutEngine, runtime и playground host уже есть как рабочая база',
    scoreNote: 'Это зрелый движок, но ещё не финальный продукт.'
  },
  MethodA: {
    hologramState: 'сильная спецификация, реализация догоняет',
    hologramSummary:
      'HOLO/SURFACE и планы создают плотный docs-first контур, где канон и протоколы уже сильнее кода.',
    specState: 'постановка зрелая и хорошо сформулирована, но часть контуров ещё в работе',
    starterState: 'living document, action protocol, plan stack и verification-first workflow уже задают основу',
    scoreNote: 'Метрика готовности здесь определяется воспроизводимостью канона, а не объёмом UI.'
  }
};

const progressByProject = {
  'UHA-6.0': buildProgressModel({ hologramDone: 6, hologramTotal: 12, specDone: 5, specTotal: 21 }),
  Genius: buildProgressModel({ hologramDone: 14, hologramTotal: 20, specDone: 11, specTotal: 20 }),
  MethodA: buildProgressModel({ hologramDone: 13, hologramTotal: 20, specDone: 9, specTotal: 20 })
};

const catalog = [
  {
    slug: 'uha-6-0',
    name: 'UHA-6.0',
    status: 'RealityCheck · релизное ядро, но не финальный продукт',
    statusTone: 'warn',
    summary: 'Boundary-first Android-прототип со стабильным релизным ядром: 16 presenters, SOLO tracker, storage/net/maps работают. Но domain bridge и документационная гигиена ещё не закрыты.',
    article: {
      lead: 'UHA-6.0 — boundary-first Android-прототип для полевого сценария. Он уже держит live route, storage, net и maps как отдельные слои, но всё ещё остаётся прототипом, а не финальным продуктом.',
      purpose: 'Идея приложения — собрать мобильный контур, где интерфейс не связан напрямую с I/O, а состояние маршрута и фиксация событий проходят через жёсткие границы.',
      built: [
        'Архитектура строится по boundary-first принципу: UI, данные и маршрутизация разведены по слоям.',
        'Сделан live route с локальной записью, воротами, подсчётом кругов и статистикой.',
        'Nix + Gradle preflight закрепили воспроизводимость и рано ловят поломки сборки.',
        'Storage / Net / Maps и 16 presenters уже переведены из идеи в рабочие реализации.'
      ],
      done: [
        '17 RouteId доступны и используются в маршрутах.',
        'LIVE-сценарий работает: запись, ворота, круги, статистика.',
        'Сборка и тесты подтверждены, прототип можно показывать как живой контур.'
      ],
      next: [
        'Сделать domain bridge для командного / ack / silence / archive контура.',
        'Почистить HOLO/SURFACE и убрать дубли в документации.',
        'Зафиксировать policy для recording quality first и точности данных.',
        'Довести roster и UI-полировку до финального device smoke.'
      ],
      assessment: 'Это сильный рабочий каркас с хорошей дисциплиной границ. Главный риск сейчас не в коде, а в незакрытом доменном мосте и гигиене спеки.'
    },
    progressModel: progressByProject['UHA-6.0'],
    codeDigest: [
      '16 из 17 presenters уже переведены на рабочие реализации.',
      'LIVE route держит локальную запись, ворота, lap counting и stats.',
      'Storage/Net/Maps собраны как отдельные рабочие слои, а не заглушки.'
    ],
    hologramState: analysisByProject['UHA-6.0'].hologramState,
    hologramSummary: analysisByProject['UHA-6.0'].hologramSummary,
    specState: analysisByProject['UHA-6.0'].specState,
    starterState: analysisByProject['UHA-6.0'].starterState,
    scoreNote: analysisByProject['UHA-6.0'].scoreNote,
    holoDigest: [
      'HOLO фиксирует stage RealityCheck и жёсткие boundary-first инварианты.',
      'SURFACE описывает RouteSet, stub-determinism и wireframe-контур.',
      'Публичный контракт уже заморожен, осталась полировка и domain bridge.'
    ],
    done: ['Доступно 17 RouteId', 'LIVE: запись, ворота, круги, статистика', 'Storage/Net/Maps и 16 presenters переведены на рабочие реализации', 'Сборка и тесты подтверждены'],
    next: [
      'Iteration 3 / Domain bridge: спроектировать и реализовать минимальный boundary/domain slice для групповой координации (command/ack/silence/archive)',
      'Spec hygiene: убрать дубли в HOLO/SURFACE, привязать PROOF_DOMAIN_GROUPS_DRAFT.md к verification hooks',
      'SOLO precision policy: зафиксировать recording quality first и integer/fixed-point representation для persisted metrics',
      'ROSTER: довести до полноценного списка истории с интеграцией в StorageV1',
      'UI polish pass: финальный wireframe-unified проход с device smoke на реальном телефоне'
    ],
    risks: [
      'Domain bridge: командный/ack/silence контракт ещё не спроектирован и не proof-нут',
      'Spec hygiene: накопленный шум в HOLO/SURFACE может привести к несогласованности контрактов',
      'SOLO precision: политика recording quality first ещё не зафиксирована формально'
    ],
    maturity: progressByProject['UHA-6.0'].progress,
    execution: progressByProject['UHA-6.0'].execution,
    risk: 44,
    timeline: ['Spec+NavShell+Solo MVP', 'Frozen Surface+CI', 'Storage+Net+Maps', 'Engine Replacement', 'Domain Bridge', 'Spec Hygiene', 'UI Polish', 'Device Smoke'],
    details: [
      'Это не релиз-кандидат. Основной нерешённый контракт — domain bridge для групповой координации.',
      'Iteration 3 явно отмечен как TODO в HOLO Current Focus.',
      'После domain bridge нужно пройти spec hygiene и финальный UI-проход перед релизом.',
      'Все FROZEN-контракты уже закрыты, но FLUID-слой (map/wireframe/UI invariants) ещё жив.'
    ],
    commits: uhaCommits
  },
  {
    slug: 'genius',
    name: 'Genius',
    status: 'FeatureComplete, движок зрелый, но с архитектурным долгом',
    statusTone: 'warn',
    summary: 'Web-движок умеет layout, 3D, playground, runtime tests и профили. Однако LayoutEngine требует рефакторинга, complex families не работают, LOD и gestures не реализованы.',
    article: {
      lead: 'Genius — это графовый и layout-движок для визуализации деревьев, генеалогий и похожих структур. Он уже умеет рендер, 3D и runtime-тесты, но всё ещё несёт заметный архитектурный долг.',
      purpose: 'Приложение нужно, чтобы наглядно строить и редактировать иерархии, где важны расположение узлов, маршруты рёбер и корректная работа с семейными / ancestor-сценариями.',
      built: [
        'Есть GraphState, LayoutEngine, Three.js runtime и playground host.',
        'Поддерживаются phylogeny и generic-tree профили, а также forest layout с дефолтами.',
        'Реализован adaptive collision-free layout и плавный поворот веток без пересечений.',
        'Покрытие тестами уже даёт устойчивую базу для дальнейшего рефакторинга.'
      ],
      done: [
        'Движок и визуальный runtime готовы и работают.',
        'Есть 60+ тестов и поддержка профилей для разных типов графов.',
        'Playground и базовый editor flow уже позволяют демонстрировать продукт.'
      ],
      next: [
        'Разбить LayoutEngine на модули без потери логики.',
        'Починить computeGenerations() для complex families.',
        'Перестроить computePositions() и маршрутизацию рёбер после позиционирования.',
        'Дожать editor minimum flow и довести тесты до 64/64.'
      ],
      assessment: 'Это зрелый engine, а не сырой прототип. Слабое место не в визуальной идее, а в крупном LayoutEngine и неполном product flow.'
    },
    progressModel: progressByProject.Genius,
    codeDigest: [
      'GraphState, LayoutEngine, Three.js runtime и веб-компонент готовы.',
      'Поддержаны phylogeny и generic-tree профили.',
      'Есть editor minimum, export/import и runtime smoke.'
    ],
    hologramState: analysisByProject.Genius.hologramState,
    hologramSummary: analysisByProject.Genius.hologramSummary,
    specState: analysisByProject.Genius.specState,
    starterState: analysisByProject.Genius.starterState,
    scoreNote: analysisByProject.Genius.scoreNote,
    holoDigest: [
      'HOLO зафиксировал forest layout, invariants и scene graph contract.',
      'SURFACE описывает GraphState, LayoutScene, camera controls и selection rules.',
      'Сильнее всего развиты визуальные и runtime-контракты, слабее - product polish.'
    ],
    done: ['GraphState, LayoutEngine, Three.js runtime и веб-компонент готовы', 'Проходит 60 тестов', 'Phylogeny и generic-tree поддержаны', 'Есть официальный playground хост', 'Surface в основном frozen, runtime контракты закрыты'],
    next: [
      'LayoutEngine refactoring: Phase 1 — разделить файл на модули (layout/, algorithms/, utils/) без изменения логики',
      'LayoutEngine refactoring: Phase 2 — исправить computeGenerations() с поддержкой complex families (birthYear generation, а не hierarchical)',
      'LayoutEngine refactoring: Phase 3 — исправить computePositions(): привязать X к generation, перенести edge creation после позиционирования',
      'LayoutEngine refactoring: Phase 4 — тестирование: 64/64 тестов проходят, complex families f3(1860)→f2(1870)→f1(1940) размещаются корректно',
      'Editor-minimum flow: доделать полный поток (add/delete/undo/redo) и интегрировать в playground host'
    ],
    risks: [
      'LayoutEngine 929 строк с единым compute() — без разбиения любой change gate рискует сломать смежную логику',
      'Complex families: текущий hierarchical placement не работает для ancestor families с birthYear generation',
      'Orthogonal routing для complex families: parent-child links должны маршрутизироваться к child family hub, а не к позиции child person'
    ],
    maturity: progressByProject.Genius.progress,
    execution: progressByProject.Genius.execution,
    risk: 68,
    timeline: ['Layout Engine', 'Runtime tests', 'Playground', 'Module split', 'Complex Families fix', 'Positions fix', 'Tests 64/64', 'Editor finish'],
    details: [
      'HOLO Current Focus прямо указывает Not Implemented: LOD, virtualization, mobile gestures.',
      'README заявляет [ ] Editor-minimum flow complete — значит итерация ещё не закрыта.',
      'docs/refactoring-plan.md описывает 4-этапный план рефакторинга LayoutEngine: модульное разбиение → generation fix → positions fix → тестирование.',
      'runtime и спецификации сильные; главный долг — структурный, не функциональный.'
    ],
    commits: geniusCommits
  },
  {
    slug: 'methoda',
    name: 'MethodA',
    status: 'Документационная система, ядро стабильно',
    statusTone: 'info',
    summary: 'MethodA фиксирует document-native интерфейс к LLM и агентам; ядро, канон и ограничения оформлены, реализация Emacs-mode ещё в работе.',
    article: {
      lead: 'MethodA — docs-first система для работы с LLM и агентами. Она превращает документы, планы и протоколы в исполняемый контур, где канон и верификация важнее спонтанных правок.',
      purpose: 'Задача проекта — сделать управляемую среду для живых документов, где агентные действия, проверка и изменения проходят по понятному процессу.',
      built: [
        'Собран living document-слой: цели, ограничения, планы и протоколы.',
        'OpenRouter включён в дефолтную конфигурацию, а ключи читаются через auth-source.',
        'Есть test playground, session runner и verification-first контур.',
        'Method Profile оформлен как исполняемый пакет, а большая часть вех уже закрыта.'
      ],
      done: [
        'Закрыты M1–M5, M7 и M8.',
        'Построен единый план и канон переведён на русский.',
        'Добавлен E2E runner с сессиями и free models.'
      ],
      next: [
        'Интегрировать document-native session agent в methoda-mode.',
        'Сделать smoke conformance и ERT-минимум.',
        'Довести UX профиля, review и autopilot-часть.',
        'Перевести анализы в конкретные задачи разработки.'
      ],
      assessment: 'Это уже не просто набор документов, а рабочая операционная среда. Но именно потому, что проект документ-центричный, ему критично замкнуть execution-контур.'
    },
    progressModel: progressByProject.MethodA,
    codeDigest: [
      'Есть methoda-mode с doc/core/agent слоями и workflow для living document.',
      'Method Profile оформлен как исполняемый пакет.',
      'Есть verification-first playground, smoke conformance и restore/journal контур.'
    ],
    hologramState: analysisByProject.MethodA.hologramState,
    hologramSummary: analysisByProject.MethodA.hologramSummary,
    specState: analysisByProject.MethodA.specState,
    starterState: analysisByProject.MethodA.starterState,
    scoreNote: analysisByProject.MethodA.scoreNote,
    holoDigest: [
      'HOLO задаёт stage Living Document, Agent Protocol и цели проекта.',
      'SURFACE разделяет canon, purpose, constraints, plan, protocols и implementation layers.',
      'Сейчас лучше всего оформлены канон, протоколы и план; реализация догоняет спеки.'
    ],
    done: ['Канон, цели, ограничения, первая спецификация и карта документов зафиксированы', 'Описаны Living document, протокол LLM, протокол действий и политика автопатчей', 'Определены единый PLAN.md и контур verification-first', 'Method Profile оформлен как исполняемый пакет (M8 done)', 'E2E runner с сессиями и free models добавлен в test playground'],
    next: [
      'Emacs-mode integration: document-native session agent должен быть подключён к methoda-mode и верифицирован в контуре editor + verification-first',
      'Smoke conformance: ERT-минимум для methoda-mode (живой документ, агент, верификация)',
      'UX профиля и ревью: проработать вопросы по UX, ревью и автопилоту, которые отмечены как открытые',
      'Conformance: перевести выводы из docs/analyse/2-live-document-emacs-plan.md в конкретные задачи разработки'
    ],
    risks: [
      'Emacs-mode ещё не интегрирован в верификационный контур (methoda-mode ↔ test playground)',
      'UX профиля и автопилот — открытые вопросы без чёткого решения в документации',
      'E2E runner добавлен, но ERT-минимум для conformance ещё не описан'
    ],
    maturity: progressByProject.MethodA.progress,
    execution: progressByProject.MethodA.execution,
    risk: 38,
    timeline: ['Канон', 'Living doc', 'План/Протоколы', 'Emacs-mode integration', 'Smoke conformance', 'UX профиля', 'ERT-минимум'],
    details: [
      'M1–M5, M7, M8 отмечены как closed, но M6 (Emacs-mode integration) не закрыт.',
      'Слой спецификаций богаче слоя реализации — это нормально для docs-first системы, но создаёт разрыв в execution.',
      'E2E runner уже есть; ключевой следующий шаг — замкнуть контур methoda-mode ↔ playground.',
      'Для MethodA метрика зрелости определяется воспроизводимостью канона, а не объёмом UI.'
    ],
    commits: methodaCommits
  }
];

const REPOS = [
  {
    name: 'UHA-6.0',
    root: '/home/zoya/Code/UHA-6.0',
    files: ['HOLO.md', 'SURFACE.md', 'README-dev.md', 'docs/plans/plan.md', 'docs/plans/plan-5days.md']
  },
  {
    name: 'Genius',
    root: '/home/zoya/Code/Genius',
    files: ['HOLO.md', 'SURFACE.md', 'README.md', 'docs/refactoring-plan.md']
  },
  {
    name: 'MethodA',
    root: '/home/zoya/Code/MethodA',
    files: ['HOLO.md', 'SURFACE.md', 'docs/README.md', 'docs/analyse/2-live-document-emacs-plan.md', 'docs/implementation/emacs-mode-plan-final.md']
  }
];

const COMMIT_LOGS = {
  'UHA-6.0': [
    { hash: '255b9d2', date: '2026-04-07', title: 'UHA progress', description: 'Зафиксирован актуальный прогресс прототипа: навигация, LIVE SOLO и сборка уже стабильны.' },
    { hash: 'd4119ff', date: '2026-03-23', title: 'update UI/UX design documents', description: 'Обновлены дизайн-документы: добавлены детальные Android MVP-экраны и управление ролями.' },
    { hash: '4857ba3', date: '2026-03-07', title: 'boundary-first clickable prototype', description: 'Собран кликабельный прототип с устойчивыми boundary-контрактами и без прямой зависимости UI от I/O.' },
    { hash: '93f699f', date: '2026-03-06', title: 'Gradle wrapper preflight checks', description: 'Добавлены preflight-проверки Gradle wrapper, чтобы рано ловить сбои в верификации.' },
    { hash: '135c697', date: '2026-03-06', title: 'Nix dev env migrated', description: 'Dev-среда переведена на nixos-25.05 и зафиксирован flake.lock для воспроизводимости.' },
    { hash: 'dd09a63', date: '2026-03-06', title: 'bootstrapped prototype', description: 'Запущен первый boundary-first Android bootstrap: каркас, маршруты и стартовая структура.' },
    { hash: '0b06172', date: '2026-03-06', title: 'security and rights refinements', description: 'Уточнены требования по безопасности, идентичности и правам в проектной документации.' },
    { hash: '8c24b31', date: '2026-03-06', title: 'spec documents for standards', description: 'Добавлены спецификационные документы по протоколу и платформенным стандартам UHA-6.0.' }
  ],
  Genius: [
    { hash: '2311218', date: '2026-04-11', title: 'update', description: 'Текущая точка синхронизации после серии layout- и scene-фиксов.' },
    { hash: 'ded18f3', date: '2026-04-09', title: 'orthogonal complex family routing', description: 'Исправлена ортогональная маршрутизация для complex-family веток.' },
    { hash: '30e5971', date: '2026-04-09', title: 'genealogy complex-family rendering', description: 'Починен genealogy-рендер для complex-family сцен.' },
    { hash: '83e0e36', date: '2026-04-09', title: 'forest layout defaults', description: 'Добавлены дефолты forest layout: hub-ы, компактный лес и grid backdrop.' },
    { hash: '3e8af67', date: '2026-04-07', title: 'expand invariants and decisions', description: 'Расширены инварианты и решения по radial, flat scene и non-genealogy рендерам.' },
    { hash: '9810cec', date: '2026-04-06', title: 'phylogeny and generic-tree profiles', description: 'Добавлены профили phylogeny и generic-tree с radial layout и улучшенным UI.' },
    { hash: 'bd56919', date: '2026-04-05', title: 'adaptive collision-free layout', description: 'Реализован adaptive collision-free layout и плавный поворот веток без пересечений.' },
    { hash: '01122e9', date: '2026-04-05', title: 'advanced genealogy engine', description: 'Собран продвинутый genealogy engine с 3D layout, редактированием и undo/redo.' },
    { hash: 'cba7fe6', date: '2026-04-05', title: 'enhance specifications', description: 'Спецификации усилены serialization, metadata и registry-данными для профилей.' },
    { hash: '5637ca0', date: '2026-04-03', title: 'initialize Graph Engine project', description: 'Создан стартовый каркас Graph Engine с базовым tooling и документацией.' }
  ],
  MethodA: [
    { hash: '1dbd86a', date: '2026-04-09', title: 'Enable OpenRouter in default config', description: 'В дефолтную конфигурацию добавлен OpenRouter как основной провайдер.' },
    { hash: '05ebc54', date: '2026-04-09', title: 'Read API keys from ~/.authinfo', description: 'Ключи API теперь читаются через auth-source из ~/.authinfo.' },
    { hash: 'e0d9875', date: '2026-04-09', title: 'Use ~/.methoda/methoda.conf', description: 'Test playground переключён на ~/.methoda/methoda.conf.' },
    { hash: 'e58c23b', date: '2026-04-09', title: 'Test Playground E2E runner', description: 'Добавлен E2E runner с сессиями и free models для playground.' },
    { hash: 'f07952f', date: '2026-04-09', title: 'M8 complete', description: 'Закрыт milestone M8: Method Profile оформлен как исполняемый пакет.' },
    { hash: '6480b51', date: '2026-04-09', title: 'M1-M5, M7 complete', description: 'Закрыта большая часть вех: Living Document, Review, Policy, Tests и Agent.' },
    { hash: '3ad0083', date: '2026-04-08', title: 'Update HOLO.md and SURFACE.md', description: 'Обновлены HOLO.md и SURFACE.md, зафиксирован этап Living Document и Action Protocol.' },
    { hash: '0b5eaa7', date: '2026-04-08', title: 'single plan, living document, action protocol', description: 'Собран единый план и синхронизированы living document и action protocol.' },
    { hash: '8f9df7a', date: '2026-04-08', title: 'translate plans to Russian', description: 'Планы переведены на русский язык для единообразия канона.' },
    { hash: 'ed2c66f', date: '2026-04-08', title: 'Remove 1-plan.md', description: 'Старый план 1 удалён и заменён консолидированным набором планов.' },
    { hash: 'e211cc5', date: '2026-04-08', title: 'Consolidated Living Document Plan', description: 'Plan-3 собрал предыдущие планы в единый living-document контур.' },
    { hash: '84d8bf7', date: '2026-04-08', title: 'Consolidated Living Document Plan', description: 'Уточнён единый plan-слой с депрекацией старых артефактов.' },
    { hash: 'f9b5ed9', date: '2026-04-06', title: 'document-native session agent', description: 'Собрана первая document-native реализация session agent в Emacs mode.' },
    { hash: '4a203f1', date: '2026-04-06', title: 'Add nix dev environment for Emacs', description: 'Добавлена nix dev-среда для Emacs, чтобы контур был воспроизводимым.' },
    { hash: '107ebc3', date: '2026-04-05', title: 'initial', description: 'Старт проекта и первый рабочий след MethodA.' }
  ]
};

const TWO_DIGIT = new Intl.DateTimeFormat('ru-RU', {
  day: '2-digit',
  month: 'short',
  year: 'numeric'
});

async function readIfExists(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }
}

async function statIfExists(filePath) {
  try {
    return await fs.stat(filePath);
  } catch {
    return null;
  }
}

function countMatches(text, regex) {
  return (text.match(regex) || []).length;
}

function extractFirstMatch(text, regex) {
  const match = text.match(regex);
  return match ? match[1].trim() : null;
}

function extractSections(text, markers, limit = 5) {
  const lines = text.split(/\r?\n/);
  const results = [];

  for (let i = 0; i < lines.length && results.length < limit; i += 1) {
    const line = lines[i].trim();
    if (!markers.some((marker) => marker.test(line))) continue;

    let cursor = i + 1;
    while (cursor < lines.length) {
      const current = lines[cursor].trim();
      if (!current) break;
      if (/^#{1,3}\s/.test(current) || /^[-*]\s+\w/.test(current) === false && current.endsWith(':')) break;
      if (/^[-*]\s+/.test(current) || /^\d+\.\s+/.test(current)) {
        results.push(current.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, ''));
        if (results.length >= limit) break;
      }
      cursor += 1;
    }
  }

  return [...new Set(results)].slice(0, limit);
}

function extractEvidence(text) {
  const lines = text.split(/\r?\n/);
  const selected = lines.filter((line) => /✅|TODO|Current Focus|Current focus|Current status|Current Focus:|\[x\]|\[ \]/.test(line));
  return selected.slice(0, 8).map((line) => line.trim()).filter(Boolean);
}

function parseSurface(text) {
  return {
    frozen: countMatches(text, /Stability:\s*\[FROZEN\]/g),
    fluid: countMatches(text, /Stability:\s*\[FLUID\]/g),
    draft: countMatches(text, /Stability:\s*\[DRAFT\]/g),
    proofs: countMatches(text, /^\s*Proof:/gm)
  };
}

function score(done, open, surface) {
  const execution = done + open === 0 ? 0 : Math.round((done / (done + open)) * 100);
  const surfaceWeight = surface.frozen * 3 + surface.fluid * 2 + surface.draft;
  return Math.min(100, Math.round(execution * 0.7 + surfaceWeight));
}

function buildGantt(project) {
  const base = project.name === 'UHA-6.0'
    ? ['Поиск', 'Solo MVP', 'Хранилище', 'Движок', 'Полировка', 'Мост']
    : project.name === 'Genius'
      ? ['Ядро', 'Рендер', 'Тесты', 'Редактор', 'Рефактор', 'Стабилизация']
      : ['Канон', 'Протоколы', 'План', 'Emacs', 'Верификация', 'Полировка'];

  return base.map((label, index) => ({
    label,
    start: Math.max(1, Math.min(8, index + 1)),
    span: index < 3 ? 2 : 1,
    state: index < 2 ? 'done' : index === 2 ? 'active' : 'next',
    dependsOn: index === 0 ? [] : [base[index - 1]]
  }));
}

function buildCommitSummary(projectName) {
  const commits = COMMIT_LOGS[projectName] || [];
  return commits.map((commit) => `${commit.hash} ${commit.date} ${commit.title}`);
}

function buildProject(repo, files) {
  const loaded = Object.fromEntries(files.map((file) => [file, null]));
  return Promise.all(
    files.map(async (file) => {
      const filePath = path.join(repo.root, file);
      const [content, stat] = await Promise.all([readIfExists(filePath), statIfExists(filePath)]);
      loaded[file] = { content, stat, filePath };
    })
  ).then(() => {
    const texts = Object.values(loaded).flatMap((entry) => (entry.content ? [entry.content] : []));
    const combined = texts.join('\n\n');
    const surface = loaded['SURFACE.md']?.content ? parseSurface(loaded['SURFACE.md'].content) : { frozen: 0, fluid: 0, draft: 0, proofs: 0 };
    const doneCount = countMatches(combined, /✅|\[x\]/g);
    const openCount = countMatches(combined, /TODO|\[ \]/g);
    
    // Диалектический анализ: выявление противоречий
    const conflicts = [];
    if (openCount > 20 && surface.frozen > 5) conflicts.push('Высокая фиксация при большом количестве TODO');
    if (surface.draft > surface.frozen) conflicts.push('Проект в стадии эскиза, ядро не стабилизировано');
    if (countMatches(combined, /!!|IMPORTANT|FIXME/g) > 5) conflicts.push('Обнаружены критические маркеры FIXME/!!');

    const focus = extractSections(combined, [/^Current Focus:/i, /^Current focus:/i, /^## Current Focus/i, /^## Текущий статус/i], 6);
    const evidence = extractEvidence(combined);
    const latest = Object.values(loaded)
      .filter((entry) => entry?.stat)
      .reduce((max, entry) => Math.max(max, entry.stat.mtimeMs), 0);
    const stage = extractFirstMatch(combined, /^(?:#\s*)?Stage:\s*(.+)$/m) || extractFirstMatch(combined, /^##\s*Stage:\s*(.+)$/m) || repo.name;

    return {
      name: repo.name,
      root: repo.root,
      stage,
      surface,
      done: doneCount,
      open: openCount,
      doneCount,
      openCount,
      risk: Math.max(0, 100 - score(doneCount, openCount, surface)),
      conflicts,
      score: score(doneCount, openCount, surface),
      focus: focus.length ? focus : ['Фокус не определен'],
      evidence: evidence.length ? evidence : ['Прогресс не зафиксирован'],
      freshness: latest ? TWO_DIGIT.format(new Date(latest)) : 'н/д',
      freshnessMs: latest,
      sourceFiles: files.filter((file) => loaded[file]?.content),
      gantt: buildGantt({ name: repo.name }),
      commitLog: buildCommitSummary(repo.name),
      commitDetails: COMMIT_LOGS[repo.name] || []
    };
  });
}

async function loadProjectResearch() {
  const projects = await Promise.all(REPOS.map((repo) => buildProject(repo, repo.files)));
  const projectMeta = new Map(catalog.map((item) => [item.name, item]));
  const mergedProjects = projects.map((project) => {
    const meta = projectMeta.get(project.name) || {};
    const progress = typeof meta.progressModel?.progress === 'number'
      ? meta.progressModel.progress
      : typeof meta.maturity === 'number'
        ? meta.maturity
        : typeof project.score === 'number'
          ? project.score
          : 0;
    const statusTone = progress >= 80 ? 'good' : progress >= 65 ? 'warn' : progress >= 45 ? 'info' : 'danger';

    return {
      ...meta,
      ...project,
      progress,
      maturity: typeof meta.maturity === 'number' ? meta.maturity : progress,
      statusTone,
      codeDigest: meta.codeDigest || [],
      holoDigest: meta.holoDigest || [],
      doneItems: meta.done || [],
      nextItems: meta.next || [],
      riskItems: meta.risks || [],
      detailItems: meta.details || [],
      hologramState: meta.hologramState || 'не определено',
      hologramSummary: meta.hologramSummary || '',
      specState: meta.specState || '',
      starterState: meta.starterState || '',
      scoreNote: meta.scoreNote || '',
      progressModel: meta.progressModel || null,
      hologramProgress: meta.progressModel?.hologramProgress ?? progress,
      specProgress: meta.progressModel?.specProgress ?? progress,
      totalDone: meta.progressModel?.totalDone ?? project.doneCount,
      totalVolume: meta.progressModel?.totalVolume ?? (project.doneCount + project.openCount)
    };
  });

  const totals = mergedProjects.reduce(
    (acc, project) => {
      acc.done += project.doneCount;
      acc.open += project.openCount;
      acc.frozen += project.surface.frozen;
      acc.fluid += project.surface.fluid;
      acc.draft += project.surface.draft;
      acc.proofs += project.surface.proofs;
      acc.score += project.score;
      acc.risk += project.risk;
      return acc;
    },
    { done: 0, open: 0, frozen: 0, fluid: 0, draft: 0, proofs: 0, score: 0, risk: 0 }
  );

  totals.score = Math.round(totals.score / mergedProjects.length);

  return { projects: mergedProjects, totals };
}

export { $$BaseLayout as $, $$DashboardSidebar as a, catalog as c, loadProjectResearch as l };
