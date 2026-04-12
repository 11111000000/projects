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

export const catalog = [
  {
    slug: 'uha-6-0',
    name: 'UHA-6.0',
    status: 'RealityCheck · релизное ядро, но не финальный продукт',
    statusTone: 'warn',
    summary: 'Boundary-first Android-прототип со стабильным релизным ядром: 16 presenters, SOLO tracker, storage/net/maps работают. Но domain bridge и документационная гигиена ещё не закрыты.',
    article: {
      lead: 'UHA-6.0 — boundary-first Android-прототип для полевого сценария. Он уже держит live route, storage, net и maps как отдельные слои, но всё ещё остаётся прототипом, а не финальным продуктом.',
      philosophy: 'Философия проекта - жёсткие границы между UI и I/O. Приложение должно быть понятно не только пользователю, но и самому себе: у каждого слоя есть роль, а маршруты, события и данные не смешиваются в один комок.',
      purpose: 'Идея приложения — собрать мобильный контур, где интерфейс не связан напрямую с I/O, а состояние маршрута и фиксация событий проходят через жёсткие границы.',
      structure: 'Архитектура строится вокруг route shell, live tracker, storage и service-слоёв. Это не декоративная модульность, а способ не допустить расползания логики в presenters и экраны.',
      built: [
        'Архитектура строится по boundary-first принципу: UI, данные и маршрутизация разведены по слоям.',
        'Сделан live route с локальной записью, воротами, подсчётом кругов и статистикой.',
        'Nix + Gradle preflight закрепили воспроизводимость и рано ловят поломки сборки.',
        'Storage / Net / Maps и 16 presenters уже переведены из идеи в рабочие реализации.'
      ],
      tasks: [
        'Сначала закрыть критический пользовательский контур: live route, навигация и фиксация событий.',
        'Потом выровнять доменную модель и протоколы, чтобы boundary не протекал в UI.',
        'После этого довести устройство до уровня, где каждый экран можно менять без каскадных регрессий.'
      ],
      device: 'Устройство проекта напоминает хорошо собранную полевую панель: сверху сценарии, ниже фиксация данных, а под ними сервисы хранения и связи. За счёт этого прототип уже работает как система, а не как набор экранов.',
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
      tradeoffs: 'Главный компромисс здесь - между скоростью добавления функций и дисциплиной границ. Проект уже умеет работать, но ещё обязан удержать архитектурную чистоту, иначе станет трудно расширяемым.',
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
      philosophy: 'Философия Genius - не просто рисовать граф, а давать пользователю управляемую геометрию отношений. Здесь важны не красивые линии сами по себе, а предсказуемость размещения, читаемость связей и честная реакция на сложные семейные случаи.',
      purpose: 'Приложение нужно, чтобы наглядно строить и редактировать иерархии, где важны расположение узлов, маршруты рёбер и корректная работа с семейными / ancestor-сценариями.',
      structure: 'Устройство движка разделено на GraphState, LayoutEngine, runtime-рендер и профиль сцены. Это делает ядро расширяемым: можно менять алгоритм раскладки, не разрушая всю систему целиком.',
      built: [
        'Есть GraphState, LayoutEngine, Three.js runtime и playground host.',
        'Поддерживаются phylogeny и generic-tree профили, а также forest layout с дефолтами.',
        'Реализован adaptive collision-free layout и плавный поворот веток без пересечений.',
        'Покрытие тестами уже даёт устойчивую базу для дальнейшего рефакторинга.'
      ],
      tasks: [
        'Разбить монолитный layout на понятные модули без смены поведения.',
        'Починить generation logic для complex families, где иерархия не равна биологии.',
        'Перенести построение рёбер после позиционирования, чтобы координаты были честными.',
        'Дожать editor flow, чтобы демонстрация была не только движком, но и продуктом.'
      ],
      device: 'Устройство проекта напоминает визуальный компоновщик: состояние графа отдельно, алгоритм отдельно, визуализация отдельно. Благодаря этому движок можно читать как систему решений, а не как один большой рендер-скрипт.',
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
      tradeoffs: 'Сильная сторона Genius - мощь ядра. Слабая - цена этой мощности: чем сложнее layout, тем важнее модульность и дисциплина алгоритмов.',
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
      philosophy: 'Философия MethodA - документ как операционная среда. Не код диктует правила документа, а документ задаёт режим работы кода, агентов и проверки.',
      purpose: 'Задача проекта — сделать управляемую среду для живых документов, где агентные действия, проверка и изменения проходят по понятному процессу.',
      structure: 'Структура проекта построена вокруг living document, action protocol, verification-first playground и планов в виде исполняемого канона. Это система, в которой тексты не описывают работу, а запускают её.',
      built: [
        'Собран living document-слой: цели, ограничения, планы и протоколы.',
        'OpenRouter включён в дефолтную конфигурацию, а ключи читаются через auth-source.',
        'Есть test playground, session runner и verification-first контур.',
        'Method Profile оформлен как исполняемый пакет, а большая часть вех уже закрыта.'
      ],
      tasks: [
        'Интегрировать document-native session agent в methoda-mode.',
        'Сделать smoke conformance и минимальный ERT-контур.',
        'Свести UX профиля, review и autopilot к одной понятной модели.',
        'Перевести аналитические выводы в конкретные задачи разработки.'
      ],
      device: 'Устройство MethodA похоже на правовую систему: есть канон, протокол действий, план, проверки и исполнение. Из-за этого проект сильнее всего там, где важна повторяемость процесса, а не яркая визуальная оболочка.',
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
      tradeoffs: 'Плата за docs-first подход - длинный путь от слова к действию. Но именно этот путь и делает проект устойчивым, если execution-контур замкнут правильно.',
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

export function getProject(slug) {
  return catalog.find((project) => project.slug === slug);
}
