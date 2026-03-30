# AI Engineering Week 6

## Focus

- eval design
- trace grading
- observability
- guardrails
- red teaming

## Learn

- learn offline vs online evaluation
- learn how traces turn anecdotes into debuggable evidence
- learn how tool safety and prompt-injection defenses fit into architecture

## Resources

- [Langfuse Docs](https://langfuse.com/docs)
- [OpenAI Evals](https://platform.openai.com/docs/guides/evals)
- [OpenAI Trace Grading](https://platform.openai.com/docs/guides/trace-grading)
- [OpenAI Evaluation Best Practices](https://platform.openai.com/docs/guides/evaluation-best-practices)
- [LangSmith Evaluation](https://docs.langchain.com/langsmith/evaluation)
- [AI Engineering from Scratch: Phase 17](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/17-infrastructure-and-production)
- [AI Engineering from Scratch: Phase 18](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/18-ethics-safety-alignment)
- lesson split:
  - Phase 11 Lesson 10 `Evaluation & Testing LLM Applications`
  - Phase 11 Lesson 12 `Guardrails, Safety & Content Filtering`
  - Phase 14 Lesson 12 `Error Recovery & Self-Healing`
  - Phase 14 Lesson 14 `Eval-Driven Agent Development`
  - Phase 17 Lesson 05 `Observability`
  - Phase 18 Lesson 03 `Red Teaming & Adversarial Testing`
- mapped in:
  - [AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md)

## Apply In Team AI

- add tracing for the main workflow
- create an eval loop
- add prompt-injection and risky-action guardrails

## Proof

Week 6 is successful if you can explain:

- what is measured
- what the top failure modes are
- how the system prevents obvious unsafe behavior
