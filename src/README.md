# AI Agent Team - Product Source Code

This directory (`src/`) contains the production-grade code for the **AI Tech Team** system.

## 🏆 Engineering Standards

Unlike the `learning/` directory (which contains experiments and messy scripts), code in `src/` must be **Enterprise Ready**:

1.  **TypeScript**: All code must be strictly typed.
2.  **Testing**: Unit tests (Vitest) are required for all core logic.
3.  **Documentation**: JSDoc for all functions; comprehensive READMEs for modules.
4.  **Architecture**: Follows the **Clean Architecture** or **Hexagonal** patterns.
    - _Domain_: Core business logic (Agents, Tasks).
    - _Infrastructure_: DB adapters, LLM API clients.
    - _Interface_: API/CLI adapters.

## 📂 Structure

```
src/
├── core/           # Domain entities (Agent, Task, Memory)
├── infra/          # LLM Providers (OpenAI, Anthropic), VectorDBs
├── interfaces/     # CLI, API, Webhook handlers
└── utils/          # Shared utilities (Logger, Telemetry)
```
