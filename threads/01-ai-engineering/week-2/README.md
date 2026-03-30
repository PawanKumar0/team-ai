# AI Engineering Week 2

## Focus

- provider abstraction
- prompt contracts
- output validation
- evals v0

## Learn

- learn why model calls need an internal boundary
- learn how to constrain outputs before adding complexity
- learn to create a tiny eval seed set before optimization

## Resources

- [LiteLLM Routing](https://docs.litellm.ai/docs/routing)
- [OpenAI Evals](https://platform.openai.com/docs/guides/evals)
- [OpenAI Evaluation Best Practices](https://platform.openai.com/docs/guides/evaluation-best-practices)
- [OpenAI Agents SDK](https://developers.openai.com/api/docs/guides/agents-sdk)
- [AI Engineering from Scratch: Phase 11](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/11-llm-engineering)

## Apply In Team AI

- add provider or gateway abstraction in `src/api`
- tighten prompt contracts
- add schema validation around real outputs
- create a 5 to 10 prompt evaluation set

## Proof

Week 2 is successful if you can explain:

- why provider abstraction exists
- how prompt changes are measured
- what failure modes already show up in the eval set
