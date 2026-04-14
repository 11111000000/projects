const uhaCommits = [
  {
    hash: '255b9d2',
    date: '2026-04-07',
    title: 'прогресс UHA',
    description: 'Зафиксирован актуальный прогресс прототипа: навигация, LIVE SOLO и сборка уже стабильны.'
  },
  {
    hash: 'd4119ff',
    date: '2026-03-23',
    title: 'обновлены документы дизайна интерфейса и опыта',
    description: 'Обновлены дизайн-документы: добавлены детальные экраны андроид-MVP и управление ролями.'
  },
  {
    hash: '4857ba3',
    date: '2026-03-07',
    title: 'кликабельный прототип с приоритетом границ',
    description: 'Собран кликабельный прототип с устойчивыми контрактами границ и без прямой зависимости интерфейса от ввода-вывода.'
  },
  {
    hash: '93f699f',
    date: '2026-03-06',
    title: 'предварительные проверки обёртки Gradle',
    description: 'Добавлены предварительные проверки обёртки Gradle, чтобы рано ловить сбои в верификации.'
  },
  {
    hash: '135c697',
    date: '2026-03-06',
    title: 'среда разработки переведена на Nix',
    description: 'Среда разработки переведена на NixOS-25.05 и зафиксирован flake.lock для воспроизводимости.'
  },
  {
    hash: 'dd09a63',
    date: '2026-03-06',
    title: 'запущен стартовый прототип',
    description: 'Запущен первый прототип с приоритетом границ: каркас, маршруты и стартовая структура.'
  },
  {
    hash: '0b06172',
    date: '2026-03-06',
    title: 'уточнение требований безопасности и прав',
    description: 'Уточнены требования по безопасности, идентичности и правам в проектной документации.'
  },
  {
    hash: '8c24b31',
    date: '2026-03-06',
    title: 'документы спецификации стандартов',
    description: 'Добавлены спецификационные документы по протоколу и платформенным стандартам UHA-6.0.'
  }
];

const geniusCommits = [
  {
    hash: 'd9f7448',
    date: '2026-04-14',
    title: 'docs: update rotation and label specs',
    description: 'Обновлены спецификации поворота и подписей после правок раскладки и селекции.'
  },
  {
    hash: '085c534',
    date: '2026-04-14',
    title: 'feat: refine person card selection layout',
    description: 'Уточнён макет карточки выбора человека, чтобы selection flow читался стабильнее.'
  },
  {
    hash: '5285782',
    date: '2026-04-14',
    title: 'fix: stabilize person label collisions',
    description: 'Стабилизированы коллизии подписей, чтобы подписи не пересекались в плотных сценах.'
  },
  {
    hash: 'ded18f3',
    date: '2026-04-09',
    title: 'ортогональная маршрутизация сложных веток',
    description: 'Исправлена ортогональная маршрутизация для сложных семейных веток.'
  },
  {
    hash: '30e5971',
    date: '2026-04-09',
    title: 'рендер сложных семейных сцен',
    description: 'Починен рендер генеалогических сцен для сложных семейных веток.'
  },
  {
    hash: '83e0e36',
    date: '2026-04-09',
    title: 'дефолты лесной раскладки',
    description: 'Добавлены дефолты лесной раскладки: узлы-центры, компактный лес и сетчатый фон.'
  },
  {
    hash: '3e8af67',
    date: '2026-04-07',
    title: 'расширены инварианты и решения',
    description: 'Расширены инварианты и решения по радиальной, плоской сцене и неродословным рендерам.'
  },
  {
    hash: '9810cec',
    date: '2026-04-06',
    title: 'профили филогении и общего дерева',
    description: 'Добавлены профили филогении и общего дерева с радиальной раскладкой и улучшенным интерфейсом.'
  },
  {
    hash: 'bd56919',
    date: '2026-04-05',
    title: 'адаптивная раскладка без пересечений',
    description: 'Реализована адаптивная раскладка без пересечений и плавный поворот веток.'
  },
  {
    hash: '01122e9',
    date: '2026-04-05',
    title: 'продвинутый движок генеалогии',
    description: 'Собран продвинутый движок генеалогии с трёхмерной раскладкой, редактированием и отменой/повтором.'
  },
  {
    hash: 'cba7fe6',
    date: '2026-04-05',
    title: 'усиление спецификаций',
    description: 'Спецификации усилены сериализацией, метаданными и реестровыми данными для профилей.'
  },
  {
    hash: '5637ca0',
    date: '2026-04-03',
    title: 'инициализация проекта движка графов',
    description: 'Создан стартовый каркас движка графов с базовыми инструментами и документацией.'
  }
];

const methodaCommits = [
  {
    hash: '1dbd86a',
    date: '2026-04-09',
    title: 'Enable OpenRouter in default config',
    description: 'OpenRouter включён в конфигурацию по умолчанию как основной провайдер.'
  },
  {
    hash: '05ebc54',
    date: '2026-04-09',
    title: 'MethodA: Read API keys from ~/.authinfo via auth-source',
    description: 'Ключи API читаются через auth-source из ~/.authinfo для безопасной конфигурации.'
  },
  {
    hash: 'e0d9875',
    date: '2026-04-09',
    title: 'MethodA: Use ~/.methoda/methoda.conf in test playground',
    description: 'Тестовая песочница теперь использует ~/.methoda/methoda.conf как локальный конфиг.'
  },
  {
    hash: 'e58c23b',
    date: '2026-04-09',
    title: 'MethodA: Test Playground — E2E runner with sessions and free models',
    description: 'Добавлен E2E runner с сессиями и free models для тестовой песочницы.'
  },
  {
    hash: 'f07952f',
    date: '2026-04-09',
    title: 'MethodA: M8 complete — Method Profile as Package',
    description: 'Этап M8 закрыт: Method Profile оформлен как исполняемый пакет.'
  },
  {
    hash: '6480b51',
    date: '2026-04-09',
    title: 'MethodA: M1-M5, M7 complete — Living Document, Review, Policy, Tests, Agent',
    description: 'Закрыта основа MethodA: living document, review, policy, tests и agent слой.'
  },
  {
    hash: '3ad0083',
    date: '2026-04-08',
    title: 'Update HOLO.md and SURFACE.md: Living Document, Action Protocol stage',
    description: 'HOLO.md и SURFACE.md обновлены для стадии living document и action protocol.'
  },
  {
    hash: '0b5eaa7',
    date: '2026-04-08',
    title: 'MethodA: единый план, living document, action protocol',
    description: 'Собран единый план и синхронизированы living document и action protocol.'
  },
  {
    hash: '8f9df7a',
    date: '2026-04-08',
    title: 'Перевод планов на русский язык',
    description: 'Планы переведены на русский язык для единообразия канона.'
  },
  {
    hash: 'ed2c66f',
    date: '2026-04-08',
    title: 'Remove 1-plan.md and consolidate into plan-3',
    description: 'Старый plan-1 удалён, контур консолидирован в plan-3.'
  },
  {
    hash: 'e211cc5',
    date: '2026-04-08',
    title: 'Plan-3: Consolidated Living Document Plan; merge Plan 1/Plan 2 into Plan-3; add living-document core; deprecate old plans; include machine-readable manifest',
    description: 'Консолидирован living document plan с манифестом и deprecation старых планов.'
  },
  {
    hash: '84d8bf7',
    date: '2026-04-08',
    title: 'Plan-3: Consolidated Living Document Plan; introduce unified Plan-3; add living-document core; mark Plan-1 as deprecated; add machine-readable manifest',
    description: 'Уточнён unified Plan-3 и добавлен machine-readable manifest.'
  },
  {
    hash: 'f9b5ed9',
    date: '2026-04-06',
    title: 'feat: consolidate MethodA implementation as first document-native session agent in Emacs mode',
    description: 'Собрана первая реализация document-native session agent в Emacs mode.'
  },
  {
    hash: '4a203f1',
    date: '2026-04-06',
    title: 'Add nix dev environment for Emacs',
    description: 'Добавлена Nix-среда разработки для Emacs, чтобы контур был воспроизводимым.'
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
      lead: 'UHA-6.0 — boundary-first Android-прототип, который уже работает как полевой маршрутный контур, а не как черновой макет. В нём зафиксированы 17 RouteId, live route, append-only storage, net/maps-слои и один главный принцип: UI не должен лезть в I/O напрямую.',
      philosophy: 'Философия проекта - разделение ответственности и проверяемость границ. Экран не знает, как именно записывается событие, storage не знает, как выглядит экран, а изменения проходят через Surface → Proof → Code → Verify. Благодаря этому UHA-6.0 строится как система контрактов, а не как набор экранов.',
      purpose: 'Цель приложения - удерживать полевой сценарий целиком: маршрут, локальную запись, ворота, статистику и последующую проверку. Поэтому проект ценен не только тем, что он показывает, но и тем, что умеет честно фиксировать между состояниями и слоями.',
      structure: 'Архитектура собрана вокруг route shell, presenter boundary, engine/storage/net/maps и живого wireframe-shell. Отдельные слои можно менять без каскадной поломки всего приложения, а прототип постепенно превращается в воспроизводимый продуктовый контур.',
      built: [
        'Архитектура строится по boundary-first принципу: UI, данные и маршрутизация разведены по слоям.',
        'Сделан live route с локальной записью, воротами, подсчётом кругов и статистикой.',
        'Nix + Gradle preflight закрепили воспроизводимость и рано ловят поломки сборки.',
        'Storage / Net / Maps и 16 presenters уже переведены из идеи в рабочие реализации.'
      ],
      tasks: [
        'Сначала закрыть критический пользовательский контур: маршрут, навигацию и запись событий без сюрпризов.',
        'Потом выровнять доменную модель и протоколы, чтобы boundary не протекал в UI и не ломал тестируемость.',
        'Затем довести каждую точку входа до состояния, где экран можно менять без каскадных регрессий и ручных обходов.'
      ],
      device: 'Устройство проекта похоже на полевую станцию: сверху навигационная оболочка и сценарии, ниже live tracker и маршрутизация, ещё глубже storage/net/maps. Это не декоративная модульность, а способ удержать систему координат целой, когда растёт число экранов и состояний.',
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
      tradeoffs: 'Главный компромисс здесь - между скоростью прототипирования и стоимостью архитектурной ошибки. Чем раньше появится доменный мост, тем легче станет развивать проект, но тем выше риск занести в ядро лишние зависимости и потерять жёсткость границ.',
      assessment: 'Это сильный рабочий каркас с хорошей дисциплиной границ. Проект уже пригоден для использования и демонстрации, но его ценность дальше зависит от того, удержит ли он чистоту boundary и не расползётся ли в набор взаимосвязанных экранов.',
      sources: [
        { path: 'HOLO.md', note: 'stage RealityCheck, invariants, current focus и decision log' },
        { path: 'SURFACE.md', note: 'замороженные контракты маршрутов, codec, storage и maps' },
        { path: 'README-dev.md', note: 'базовая архитектура и правила запуска/сборки' },
        { path: 'docs/spec-base/UHA-6.0.0-CORE.txt', note: 'ядро boundary-first модели и роли слоёв' },
        { path: 'docs/spec-base/UHA-6.0.0-BOUNDARY_API.txt', note: 'контракты UiState/Intent и presenter boundary' },
        { path: 'docs/spec-addons/UHA-6.0.0-SOLO_MODE_V1.txt', note: 'SOLO slice: карта, запись трека, ворота и lap semantics' },
        { path: 'docs/spec-addons/UHA-6.0.0-PROTOTYPE_NAVIGATION_SHELL_V1.txt', note: 'продуктовая навигационная оболочка прототипа' },
        { path: 'docs/plans/plan.md', note: 'актуальный план развития и приоритеты этапов' }
      ]
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
      lead: 'Genius — это графовый и layout-движок для деревьев, генеалогий и похожих структур. Он уже умеет рендер, 3D, runtime-тесты и профильные сцены, но его зрелость сейчас выражается не в внешнем блеске, а в объёме архитектурного долга, который ещё нужно распутать.',
      philosophy: 'Философия Genius - делать отношения видимыми через геометрию. Граф здесь не иллюстрация и не декоративная сеть, а способ показать структуру так, чтобы пользователь доверял и картинке, и логике её построения. Поэтому ключевой критерий качества - предсказуемость раскладки и честная реакция на сложные семейные случаи.',
      purpose: 'Приложение нужно для наглядного построения и редактирования иерархий, где важны расположение узлов, маршруты рёбер, выбор профиля сцены и корректная работа с ancestor/complex-family сценариями. Это инструмент не для «красивых деревьев», а для точной модели связей.',
      structure: 'Устройство движка разделено на GraphState, LayoutEngine, runtime-рендер и профиль сцены. Такое разделение удерживает одно большое ядро в рабочем состоянии и позволяет постепенно менять алгоритмы, не ломая визуальную оболочку и тестовый контур.',
      built: [
        'Есть GraphState, LayoutEngine, Three.js runtime и playground host.',
        'Поддерживаются phylogeny и generic-tree профили, а также forest layout с дефолтами.',
        'Реализован adaptive collision-free layout и плавный поворот веток без пересечений.',
        'Уточнены rotation/label specs и selection card flow для более стабильного UX.'
      ],
      tasks: [
        'Разбить монолитный layout на модули без потери поведения и тестового покрытия.',
        'Починить generation logic для complex families, где биологическое родство не совпадает с привычной иерархией.',
        'Перенести построение рёбер после позиционирования, чтобы координаты и связи были честными, а не предполагаемыми.',
        'Дожать editor flow, чтобы движок был не только демонстрацией алгоритма, но и полноценным инструментом.'
      ],
      device: 'Устройство проекта похоже на визуальный компоновщик со строгим разделением ролей: состояние графа, алгоритм, профиль сцены и рендер живут отдельно. Поэтому движок читается как система решений, а не как один тяжёлый рендер-скрипт, а изменения в layout можно локализовать.',
      done: [
        'Движок и визуальный runtime готовы и работают.',
        'Есть 60+ тестов и поддержка профилей для разных типов графов.',
        'Playground и базовый editor flow уже позволяют демонстрировать продукт.',
        'Подписи и selection layout стабилизированы в последних правках.'
      ],
      next: [
        'Разбить LayoutEngine на модули без потери логики.',
        'Починить computeGenerations() для complex families.',
        'Перестроить computePositions() и маршрутизацию рёбер после позиционирования.',
        'Дожать editor minimum flow и довести тесты до 64/64.'
      ],
      tradeoffs: 'Сильная сторона Genius - мощь ядра и способность работать с разными графами. Слабая - цена этой мощности: чем богаче раскладка, тем выше риск, что монолит начнёт мешать самому себе и усложнит эволюцию редактора.',
      assessment: 'Это зрелый engine, а не сырой прототип. Его слабое место сейчас не в идее, а в упаковке идеи: крупный LayoutEngine и незакрытый product flow требуют распаковки, иначе зрелость останется внутри ядра и не станет продуктовым качеством.',
      sources: [
        { path: 'HOLO.md', note: 'current focus, invariants и архитектурный долг' },
        { path: 'SURFACE.md', note: 'фиксированные продуктовые и runtime-контракты' },
        { path: 'README.md', note: 'описание движка, сценариев и статуса проекта' },
        { path: 'PLAN.md', note: 'план рефакторинга и следующего этапа' },
        { path: 'docs/06-engine-core-spec.md', note: 'ядро движка и взаимодействие подсистем' },
        { path: 'docs/03-layout-kinematics-spec.md', note: 'алгоритмы раскладки и collision-free поведение' },
        { path: 'docs/04-runtime-api-spec.md', note: 'runtime API и контракт рендера' },
        { path: 'docs/refactoring-plan.md', note: 'пошаговый план распаковки LayoutEngine' }
      ]
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
    risk: 66,
    timeline: ['Layout Engine', 'Runtime tests', 'Playground', 'Module split', 'Complex Families fix', 'Positions fix', 'Tests 64/64', 'Editor finish'],
    details: [
      'HOLO Current Focus прямо указывает Not Implemented: LOD, virtualization, mobile gestures.',
      'README заявляет [ ] Editor-minimum flow complete — значит итерация ещё не закрыта.',
      'docs/refactoring-plan.md описывает 4-этапный план рефакторинга LayoutEngine: модульное разбиение → generation fix → positions fix → тестирование.',
      'runtime и спецификации сильные; главный долг — структурный, не функциональный.',
      'Последние коммиты усилили стабильность подписей и selection layout.'
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
      lead: 'MethodA — docs-first система для работы с LLM и агентами. Она не просто хранит инструкции, а превращает документы, планы и протоколы в исполняемый контур, где сама форма текста задаёт режим работы системы.',
      philosophy: 'Философия MethodA - документ как операционная среда и источник правил. Здесь канон не обслуживает код, а код обслуживает канон; агент не подменяет процесс, а действует внутри него. Это проект про дисциплину смысла, а не про количество подсказок.',
      purpose: 'Задача проекта - сделать управляемую среду для живых документов, где действия агентов, проверка и изменения проходят по явному маршруту. Иными словами, проект превращает хаотичное «поправим потом» в воспроизводимый процесс с источниками, верификацией и планом.',
      structure: 'Структура проекта построена вокруг living document, action protocol, verification-first playground и планов в виде исполняемого канона. Это не набор заметок, а небольшая операционная система для документной работы, где текст задаёт процедуру, а не просто описывает её.',
      built: [
        'Собран living document-слой: цели, ограничения, планы и протоколы.',
        'OpenRouter включён в дефолтную конфигурацию, а ключи читаются через auth-source.',
        'Есть test playground, session runner и verification-first контур.',
        'Method Profile оформлен как исполняемый пакет, а большая часть вех уже закрыта.'
      ],
      tasks: [
        'Интегрировать document-native session agent в methoda-mode так, чтобы он реально работал в этом каноне, а не был внешним приложением.',
        'Сделать smoke conformance и минимальный ERT-контур, который будет защищать процесс от регрессий.',
        'Свести UX профиля, review и autopilot к одной понятной модели, чтобы интерфейс не спорил с философией проекта.',
        'Перевести аналитические выводы в конкретные задачи разработки и убрать разрыв между текстом и исполнением.'
      ],
      device: 'Устройство MethodA похоже на правовую систему: есть канон, протокол действий, план, проверки и исполнение. Это делает проект особенно сильным там, где нужна повторяемость процесса, а не яркая оболочка или быстрый хаос; именно поэтому здесь так важна связка docs ↔ execution.',
    done: [
      'Закрыты M1–M5, M7 и M8.',
      'Построен единый план и канон переведён на русский.',
      'Добавлен E2E runner с сессиями и free models.',
      'OpenRouter включён в дефолтную конфигурацию.'
    ],
      next: [
        'Интегрировать document-native session agent в methoda-mode.',
        'Сделать smoke conformance и ERT-минимум.',
        'Довести UX профиля, review и autopilot-часть.',
        'Перевести анализы в конкретные задачи разработки.'
      ],
      tradeoffs: 'Плата за подход docs-first - длинный путь от слова к действию и высокая цена любой неаккуратной формулировки. Но именно эта строгость делает проект устойчивым, если контур исполнения замкнут правильно и не начнёт спорить с каноном.',
      assessment: 'Это уже не просто набор документов, а рабочая операционная среда. И именно поэтому главная задача теперь - не добавить ещё страниц, а превратить канон в надёжный, проверяемый и повторяемый execution.',
      sources: [
        { path: 'HOLO.md', note: 'stage, current focus и development contract' },
        { path: 'SURFACE.md', note: 'living document, action protocol и surface contract' },
        { path: 'METHOD.md', note: 'методологическое ядро проекта' },
        { path: 'PLAN.md', note: 'единый план работ и milestones' },
        { path: 'docs/specs/methoda-living-document.md', note: 'живой документ как операционная среда' },
        { path: 'docs/specs/methoda-action-protocol.md', note: 'protocol действий и верификации' },
        { path: 'docs/specs/methoda-canon-v3s1.md', note: 'канон и стабильная семантика' },
        { path: 'docs/implementation/emacs-mode-plan-final.md', note: 'реализация Emacs-mode и execution contour' }
      ]
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
    risk: 36,
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
