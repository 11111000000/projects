import fs from 'node:fs/promises';
import path from 'node:path';
import { catalog as projectCatalog } from './catalog.js';

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

export async function loadProjectResearch() {
  const projects = await Promise.all(REPOS.map((repo) => buildProject(repo, repo.files)));
  const projectMeta = new Map(projectCatalog.map((item) => [item.name, item]));
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
