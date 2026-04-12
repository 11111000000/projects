# UHA-6.0 · Промежуточный анализ (глубокий)

## HOLO · Что прямо сказано

**Stage**: `RealityCheck` (HDS)

**Current Focus** (актуальный срез):
```
- ✅ Phase 1-8: Spec, NavShell, Solo MVP, Frozen Surface, CI, UI smoke, Engine replacement, Storage, Net, Maps, Wiring — ВСЁ DONE
- ✅ Project is ready for first release build
- ✅ BUILD FIX: run-in-dev.sh now unsets LD_LIBRARY_PATH
- TODO: Iteration 3 / Domain bridge — спроектировать минимальный boundary/domain slice
- TODO: Iteration 3b / Spec hygiene — убрать дубли/шум в HOLO/SURFACE
- TODO: Iteration 3c / Solo precision policy — зафиксировать recording quality first
```

**Invariants** (жёсткие правила, 15 штук):
- INV-NoKotlin-NoGMS: нет .kt, нет GMS/Firebase
- INV-ClickablePrototype: все 17 RouteId доступны в прототипе
- INV-Domain-Surface-Separation: domain контракты групповой координации фиксируются отдельным surface-пакетом
- INV-Surface-First: сначала SURFACE.md/Proof, затем код

**Decisions** (статусы):
- `[Frozen]` — UI stack, DI strategy, Boundary codec, LLM-friendly style
- `[Draft]` — Engine replacement cadence, Solo local recorder, Lap counting, Prototype navigation shell, Domain coordination surface pack, Command channel, Archive defaults, Silence policy

## SURFACE · Что зафиксировано

**FROZEN** (8 пунктов):
- `Boundary.RouteSet.v1` — 17 RouteId, Proof: RouteIdSetTest
- `Boundary.UiStateIntent.v1` — UiState/Intent по маршрутам
- `Boundary.Codec.AppendOnlyArrays.v1` — CBOR arrays
- `Layering.UIOnlyBoundary.v1` — UI не зависит от engine/storage/net/maps
- `Prototype.EngineStub.v1` — NORMAL/EMPTY/ERROR сценарии для каждого RouteId
- `DependencyPolicy.AndroidMvp.v1` — NO_GMS_FIREBASE + NO_KOTLIN_SOURCE
- `Architecture.ExplicitAppGraph.v1` — ручной AppGraph
- `Boundary.Codec.Library.PeterO.v1` — com.upokecenter.cbor

**FLUID** (много пунктов):
- `Storage.AppendOnly.v1` [FLUID]
- `Net.SyncStub.v1` [FLUID]
- `Maps.WireframeRender.v1` [FLUID]
- `UI.*` — MapCanvas, FiveZones, Rail, MapHUD, ElevationMiniPanel, GroupOverlay, DensityControl, LoudnessLevels — все [FLUID]

## Starter · Что уже есть

- 16 из 17 presenters заменены на EngineNow (все кроме LIVE)
- LIVE работает через SoloTrackSession (SOLO MVP)
- StorageV1: append-only, FileAppendStorage
- NetV1: sync stub
- MapsV1: WireframeMapView (сетка, трек, маркеры, ворота)
- AppGraph wiring: storage + net подключены
- 5 UI smoke-тестов (Robolectric)
- Nix dev environment: nixos-25.05 + flake.lock

## Реальный план · Что осталось

### Iteration 3 / Domain bridge ← ЭТО ГЛАВНОЕ
```
TODO из HOLO Current Focus:
1. Спроектировать минимальный boundary/domain slice для групповой координации:
   - structured command
   - ack status (отсутствие ≠ исполнение)
   - silence/unresolved distinction
   - activity close/archive marker
2. Сначала surface + proof + stub
3. Потом real engine wiring
```

### Iteration 3b / Spec Hygiene
```
- Убрать дубли/шум в HOLO/SURFACE
- Привязать PROOF_DOMAIN_GROUPS_DRAFT.md к verification hooks
- Чистый реестр перед domain bridge
```

### Iteration 3c / SOLO Precision Policy
```
- recording quality first: сырые точки пишутся с максимальной точностью
- lap/event semantics считаются по raw segments
- UI/perfMode не должен ухудшать факт записи
- persisted metrics → integer/fixed-point representation
```

### Iteration 3d / UI Polish + Device Smoke
```
- Wireframe-unified проход
- Device smoke на реальном телефоне
- NAV Shell финальный: NOW screen с horizontal icon quick actions
```

## Метрики · Переоценка

| Метрика | Было | Стало | Обоснование |
|---|---|---|---|
| maturity | 88 | 68 | Осталось Iteration 3 + spec hygiene + UI polish + smoke |
| execution | 92 | 72 | Domain bridge + spec hygiene + UI polish — это не мелочи |
| risk | 28 | 44 | Domain bridge = главный нерешённый контракт |

## Итог

Это **не релиз-кандидат**. Это **релизное ядро с незакрытым ключевым контрактом**. После domain bridge потребуется spec hygiene и финальный UI-проход. Все FROZEN уже закрыты, но FLUID-слой (map/wireframe/UI invariants) жив и требует формального закрытия перед релизом.
