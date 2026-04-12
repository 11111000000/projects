# Сводная таблица данных по проектам

## UHA-6.0

| Поле | Значение | Источник |
|------|----------|----------|
| **План** | | |
| planTotal | 33 | 12 голограмма + 21 спека |
| hologramTotal | 12 | wireframes + proto + UI + навигация + domain bridge + spec hygiene + solo precision + UI polish + device smoke |
| specTotal | 21 | storage + net + maps + engine replacement + wiring + 16 presenters + p2p + интеграции + тесты |
| **Факт** | | |
| factDone | 11 | 6 голограмма + 5 спека |
| hologramDone | 6 | wireframes, proto, nav shell, SOLO tracker, storage, net, maps, 16 presenters |
| specDone | 5 | boundary, codec, stub, AppGraph, тесты |
| **Метрики** | | |
| hologramProgress | 50% | 6/12 |
| specProgress | 24% | 5/21 |
| progress | 38% | 0.55*50 + 0.45*24 |
| **Риски** | Domain bridge не спроектирован, spec hygiene не закрыт, solo precision не зафиксирован | HOLO Current Focus |
| **Статус** | Прототипный контур, не финальный продукт | |

## Genius

| Поле | Значение | Источник |
|------|----------|----------|
| **План** | | |
| planTotal | 40 | 20 голограмма + 20 спека |
| hologramTotal | 20 | engine + runtime + playground + editor + refactoring + complex families + mobile gestures + LOD + virtualization |
| specTotal | 20 | layout modes + profiles + tests + serialization + export + GEDCOM + mobile parity |
| **Факт** | | |
| factDone | 25 | 14 голограмма + 11 спека |
| hologramDone | 14 | engine, runtime, playground, 60 tests, layouts, profiles, editing |
| specDone | 11 | vertical/radial, genealogy/phylogeny/generic-tree, serialization, export |
| **Метрики** | | |
| hologramProgress | 70% | 14/20 |
| specProgress | 55% | 11/20 |
| progress | 63% | 0.55*70 + 0.45*55 |
| **Риски** | LayoutEngine 929 строк монолит, complex families не работают, mobile gestures не реализованы, LOD/virtualization не реализованы | HOLO Not Implemented |
| **Статус** | Зрелый движок, но не завершённый продукт | |

## MethodA

| Поле | Значение | Источник |
|------|----------|----------|
| **План** | | |
| planTotal | 40 | 20 голограмма + 20 спека |
| hologramTotal | 20 | canon + purpose + constraints + first spec + document map + plan + protocols + verification + Emacs mode |
| specTotal | 20 | living document + LLM protocol + action protocol + profile + conformance + E2E + smoke |
| **Факт** | | |
| factDone | 22 | 13 голограмма + 9 спека |
| hologramDone | 13 | canon, purpose, constraints, first spec, document map, plan, action protocol |
| specDone | 9 | living document, LLM protocol, Emacs mode, conformance outline |
| **Метрики** | | |
| hologramProgress | 65% | 13/20 |
| specProgress | 45% | 9/20 |
| progress | 56% | 0.55*65 + 0.45*45 |
| **Риски** | Emacs mode не интегрирован в verification, smoke conformance не полный, E2E runner новый | HOLO Current Focus |
| **Статус** | Docs-first система, реализация догоняет спеки | |

---

## Итоговая таблица

| Проект | Голограмма | Спека | Итог | Объём факт/план | Статус |
|--------|-------------|-------|------|-----------------|--------|
| UHA-6.0 | 50% | 24% | 38% | 11/33 | Прототип, не продукт |
| Genius | 70% | 55% | 63% | 25/40 | Движок, не продукт |
| MethodA | 65% | 45% | 56% | 22/40 | Docs-first, реализация догоняет |

## Принципы расчёта

1. `hologramProgress` = (hologramDone / hologramTotal) * 100
2. `specProgress` = (specDone / specTotal) * 100
3. `progress` = (hologramProgress * 0.55) + (specProgress * 0.45)
4. Веса: 55% голограмма, 45% спека — отражает приоритет оперативного плана над водопадным.
5. `100%` возможен только при закрытии всех критериев приёмки из HOLO/SURFACE.