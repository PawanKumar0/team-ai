# AI Engineering Week 1

## Focus

- workflows vs agents
- structured outputs
- shared contracts
- thin execution path

## Learn

- understand why Week 1 is a workflow, not a full agent system
- learn contract-first design with shared schemas
- learn how tool and response boundaries shape everything later

## Resources

- [OpenAI Practical Guide to Building Agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
  - read `What is an agent?`, `When should you build an agent?`, `Agent design foundations`
- [Anthropic: Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
  - read `What are agents?`, `When (and when not) to use agents`, `Building block: The augmented LLM`, `Single-agent systems`
- [AI Engineering from Scratch: Phase 11](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/11-llm-engineering)
- [AI Engineering from Scratch: Phase 13](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/13-tools-and-protocols)
- [AI Engineering from Scratch: The Agent Loop](https://github.com/rohitg00/ai-engineering-from-scratch/tree/main/phases/14-agent-engineering/01-the-agent-loop)
- lesson split:
  - Phase 11 Lesson 01 `Prompt Engineering`
  - Phase 11 Lesson 03 `Structured Outputs`
  - Phase 13 Lesson 07 `Structured Output Schemas`
  - Phase 13 Lesson 08 `API Design for AI`
  - Phase 14 Lesson 01 `The Agent Loop`
- mapped in:
  - [AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md](/Users/pawan/Vizmo/team-ai/threads/04-resource-map/AI-ENGINEERING-FROM-SCRATCH-WEEKLY-MAP.md)

## Apply In Team AI

- add shared assistant request and response schemas in `src/packages/types`
- keep one thin execution path in `src/api`
- render the structured response in `src/web`

## Proof

Week 1 is successful if you can explain:

- why a workflow is enough
- why schemas live in shared types
- why runtime behavior is still intentionally simple
