# Genius · Промежуточный анализ (глубокий)

## HOLO · Что прямо сказано

**Stage**: `FeatureComplete`

**Implementeed vs Docs Gap** (из HOLO):

✅ **FROZEN** (44 пункта): GraphState, LayoutEngine (4 layout modes), 4-segment orthogonal edges, scene graph hierarchy, branch rotation, Web Component API, hit testing, camera controls, editor minimum, serialize/restore, reference graphs, 60 tests passing, adaptive collision-free layout, smooth animated rotation, selection highlighting, person card, context menu, responsive UI, labels always visible, phylogeny rendering, generic-tree rendering, 2D primitives, setTheme, compact layout, edge metadata, mutation hooks, export PNG/SVG, GEDCOM import, auto-fit, responsive resize, toolbar, categorized toolbar, radial camera, pointer interaction, selection highlight fix, applyTheme.

⚠️ **Partially Implemented** (1 пункт): Labels on rotation — updateLabelPositions works via scene graph.

❌ **Not Implemented** (3 пункта):
- LOD for large trees (1000+ nodes)
- Virtualization
- Two-finger pan, pinch-zoom (mobile gestures)

**Invariants** зафиксированы для: Core/Data, Scene Graph (vertical), Scene Graph (radial), Edges, Animations, Labels.

## SURFACE · Что зафиксировано

**FROZEN** (28 surface items):
- GraphState.v1, LayoutParameters.v1, StyleParameters.v1
- EngineCore.v1, LayoutScene.v1, BranchRotation.v1
- AdaptiveCollisionFreeLayout.v1, SmoothAnimatedRotation.v1
- WebComponent.v1, PlaygroundHost.v1, EditorMinimum.v1
- RuntimeScenarios.v1, DesktopMobileParity.v1
- GenealogyProfile.v1, PhylogenyProfile.v1, GenericTreeProfile.v1
- SerializeRestore.v1, NoStaleLabels.v1, OrthogonalRouting.v1
- HitTesting.v1, SelectionHighlighting.v1
- PersonCard.v1, ContextMenu.v1, ResponsiveUI.v1, LabelsAlwaysVisible.v1
- ThemeSelector.v1, MutationHooks.v1, ExportPNG.v1, ExportSVG.v1

## docs/refactoring-plan.md · Что прямо описано

**Текущее состояние LayoutEngine**:
- 929 строк, единый файл
- `compute()` — dispatch по modelProfile/layout
- `computeVertical()` — ~620 строк (основной метод)
- `computePhylogeny()` — ~100 строк
- `computeGenericTree()` — ~80 строк
- `computeRadial()` — ~120 строк

**Выявленные проблемы**:
1. `placeFamily` вызывает `childY = hubY + genGap` — дети **всегда** ниже родителей (hierarchical placement)
2. Одно семейство-корень, обрабатывается через `rootFamilies`
3. **Complex families не работают**: цепочки `f3(ancestor)→f2→f1` дают неправильные Y-позиции
4. Связи висят в воздухе: когда ancestor families не связаны иерархически, дети не размещаются

**Новая архитектура после рефакторинга** (4 этапа):

### Phase 1: Модульное разбиение
```
src/core/
├── LayoutEngine.js      # только compute() + dispatch
├── layout/
│   ├── index.js         # фабрика
│   ├── computeVertical.js   # ~400 строк
│   ├── computeRadial.js    # ~150 строк
│   ├── algorithms/
│   │   ├── familyGraph.js    # построение графа семей
│   │   ├── familyLayout.js   # X/Y positioning
│   │   └── edges.js         # создание edges
```

### Phase 2: Generation computation
Два режима:
- **Hierarchical mode** (current): leaf families → gen 0, parents → gen + 1
- **Complex mode** (новый): youngest birthYear → gen 0, каждые 10 лет → gen -1

### Phase 3: Position computation
```
computePositions():
  - группировка по generation
  - gen 0: spread horizontally
  - ancestors (negative gen): center over children
```

### Phase 4: Тестирование
- 64/64 тестов проходят
- Complex families: f3(1860) → f2(1870) → f1(1940) → Y = -250, -125, 0
- Acceptance criteria: простые семьи работают как раньше

## README.md · Что прямо сказано

**Что есть сейчас** (2 слоя):
1. **Движок**: GraphState, LayoutEngine, Three.js runtime, TreeGraph web component
2. **Host-полигон**: 2D/3D, 4 layout modes, 3 profiles, branch rotation, serialize/restore, basic editing, smoke tests, debug overlays

**Статус** (verbatim):
```
- [x] Data Contract
- [x] Layout Engine MVP
- [x] Three.js Renderer
- [x] Web Component
- [x] Official Playground Host
- [x] Branch Rotation (genealogy 3D)
- [x] Runtime tests complete
- [ ] Editor-minimum flow complete ← НЕ ЗАКРЫТО
```

## Реальный план · Что осталось

### Главный долг: LayoutEngine refactoring (929 строк → модули)
1. Phase 1: Разделить файл на модули без изменения логики
2. Phase 2: Исправить `computeGenerations()` — добавить complex mode (birthYear generation)
3. Phase 3: Исправить `computePositions()` — привязать X к generation
4. Phase 4: 64/64 тестов проходят + complex families корректны

### Editor-minimum flow ← README явно отмечает как незакрытый
- Полный поток: add/delete/undo/redo интегрирован в playground host
- GEDCOM import уже есть, но conformance ещё не proof-nut

### Not Implemented (3 пункта из HOLO)
- LOD для 1000+ nodes
- Virtualization
- Mobile gestures (two-finger pan, pinch-zoom)

## Метрики · Переоценка

| Метрика | Было | Стало | Обоснование |
|---|---|---|---|
| maturity | 72 | 55 | LayoutEngine refactoring + editor flow + LOD/gestures не закрыты |
| execution | 78 | 62 | Главный долг структурный, а не функциональный |
| risk | 54 | 68 | 929-строчный LayoutEngine без модулей — высокий риск при любом change |

## Итог

Это **зрелый движок с глубоким архитектурным долгом**. Runtime контракты закрыты (44 frozen items, 60 тестов). Но LayoutEngine — это 929 строк монолита, где любое изменение может сломать смежную логику. Complex families, orthogonal routing и hierarchical placement — это не отдельные issues, а симптомы единой структурной проблемы. Рефакторинг LayoutEngine — это prerequisite для любого дальнейшего развития движка.
