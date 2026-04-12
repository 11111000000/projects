# MethodA · Промежуточный анализ (глубокий)

## HOLO · Что прямо сказано

**Stage**: `Living Document`

**Milestone Status** (из git log M1-M8):
- ✅ M1: Living Document — closed
- ✅ M2: Review — closed
- ✅ M3: Policy — closed
- ✅ M4: Tests — closed
- ✅ M5: Agent — closed
- ❓ M6: ??? — не отмечен явно
- ✅ M7: ??? — closed
- ✅ M8: Method Profile — closed

**Purpose** (verbatim из HOLO): MethodA is a document-native interface to LLM and agents. Every LLM interaction must be grounded in a living document. Living document = source of truth. Agent = executor of actions. Protocol = contract between document and agent.

**Decision** (verbatim): "living-document-first, not agent-first, not LLM-first. The document is authoritative; the agent is an executor."

## SURFACE · Что зафиксировано

**Слои** (из SURFACE.md):
1. `canon` — канон, цели, ограничения
2. `purpose` — purpose statement
3. `constraints` — constraints
4. `plan` — единый план
5. `protocols` — LLM protocol, Action protocol
6. `implementation` — implementation layers

**Протокол LLM** (из docs):
- Free models + authenticated models
- OpenRouter integration (добавлен в default config)
- API keys через ~/.authinfo (auth-source)
- Config: ~/.methoda/methoda.conf

**Action Protocol** (из docs):
- Structured commands vs free-form messaging (разделены)
- Ack status semantics (отсутствие ≠ исполнение)
- Silence/unresolved distinction
- Archive markers

**Verification-first** (из docs):
- E2E runner с сессиями и free models
- Smoke conformance
- ERT-минимум (не описан)
- Restore/journal контур

## Git log · Что реально сделано (последние коммиты)

```
1dbd86a  2026-04-09  Enable OpenRouter in default config
05ebc54  2026-04-09  Read API keys from ~/.authinfo
e0d9875  2026-04-09  Use ~/.methoda/methoda.conf
e58c23b  2026-04-09  Test Playground E2E runner
f07952f  2026-04-09  M8 complete — Method Profile как исполняемый пакет
6480b51  2026-04-09  M1-M5, M7 complete — Living Document, Review, Policy, Tests, Agent
3ad0083  2026-04-08  Update HOLO.md and SURFACE.md
0b5eaa7  2026-04-08  single plan, living document, action protocol
8f9df7a  2026-04-08  translate plans to Russian
ed2c66f  2026-04-08  Remove 1-plan.md
e211cc5  2026-04-08  Consolidated Living Document Plan
84d8bf7  2026-04-08  Consolidated Living Document Plan (refinement)
f9b5ed9  2026-04-06  document-native session agent (Emacs mode)
4a203f1  2026-04-06  Add nix dev environment for Emacs
107ebc3  2026-04-05  initial
```

## docs/analyse/ · Что в рабочих документах

**2-live-document-emacs-plan.md** — план контура:
- methoda-mode структура: doc/, core/, agent/
- Workflow: living document → agent → verification
- open questions: UX профиля, ревью, автопилот

**emacs-mode-plan-final.md** — финальный план Emacs-mode:
- doc layer: канон, живой документ, политики
- core layer: протоколы, verification-first
- agent layer: session agent, action execution
- smoke conformance: ERT-минимум (не описан детально)

## Реальный план · Что осталось

### Emacs-mode integration ← Главный нерешённый контур
```
TODO из docs:
1. methoda-mode должен быть подключён к верификационному контуру
2. document-native session agent → связка с methoda-mode
3. Тест playground E2E runner уже есть, но conformance ещё не proof-nut
```

### Smoke conformance ← Следующий критический шаг
```
- ERT-минимум: living document, агент, верификация
- E2E runner добавлен, но сценарии не описаны
- Restoration/journal контур не верифицирован
```

### Open questions ← Прямо отмечены в docs
```
- UX профиля: как Method Profile отображается пользователю
- Ревью: процесс ревью результатов агента
- Автопилот: политика автопатчей — как агенту разрешено изменять документы
```

## Метрики · Переоценка

| Метрика | Было | Стало | Обоснование |
|---|---|---|---|
| maturity | 84 | 68 | spec богаче реализации; M6 не отмечен; open questions без решений |
| execution | 60 | 45 | Emacs-mode integration не замкнут; E2E runner есть, но conformance пуст |
| risk | 33 | 38 | Open questions по UX/review/autopilot — это риск на уровне метода |

## Итог

Это **сильная docs-first система с зазором реализации**. Канон, протоколы и план — зрелые и полные. Method Profile оформлен как исполняемый пакет (M8 done). Но M6 (Emacs-mode integration) не отмечен, E2E runner есть без сценариев conformance, и три открытых вопроса (UX профиля, ревью, автопилот) не имеют решений в документации. Для MethodA метрика зрелости — это **воспроизводимость канона**, а не объём UI. После закрытия Emacs-mode integration и ERT-минимума система станет полностью работоспособной.
