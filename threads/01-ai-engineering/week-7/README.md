# AI Engineering Week 7

## Focus

- authn and authz
- tenant-aware retrieval
- secure tool use
- sandboxing
- deployment boundaries

## Learn

- learn what changes when the system becomes multitenant
- learn why AI execution needs stronger isolation than normal CRUD
- learn how deployment and safety affect architecture

## Resources

- [Azure Secure Multitenant RAG](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/secure-multitenant-rag)
- [Docker Security](https://docs.docker.com/engine/security/)
- [OpenAI Agent Safety](https://developers.openai.com/api/docs/guides/agent-builder-safety)
- [AI Engineering from Scratch: Phase 17](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/17-infrastructure-and-production)
- [AI Engineering from Scratch: Phase 18](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/18-ethics-safety-alignment)
- lesson split:
  - Phase 14 Lesson 09 `Permissions, Sandboxing & Safety`
  - Phase 17 Lesson 01 `Model Serving`
  - Phase 17 Lesson 02 `Docker for AI Workloads`
  - Phase 17 Lesson 06 `Cost Optimization`
  - Phase 17 Lesson 07 `CI/CD for ML`
  - Phase 17 Lesson 10 `Security`
  - Phase 17 Lesson 11 `Build a Production AI Platform`
  - Phase 18 Lesson 01 `AI Ethics`
  - Phase 18 Lesson 02 `Alignment`
  - Phase 18 Lesson 04 `Responsible AI Frameworks`
- mapped in:
  - [AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md)

## Apply In Team AI

- add authentication
- enforce tenant boundaries
- gate risky actions
- define deployment and environment strategy

## Proof

Week 7 is successful if you can explain:

- how identity and tenancy are enforced
- what is sandboxed
- what risks still block launch
