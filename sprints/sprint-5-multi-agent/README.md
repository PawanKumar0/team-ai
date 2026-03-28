# Sprint 5: Multi-Agent "Agent as an Employee" Architecture

## 🎯 Objective

A single Super Agent isn't a team. We are shifting to the **"Agent as an Employee"** mental model. We need a "Dev Agent" specialized in coding, and a "QA Agent" specialized in reviewing. We will use LangGraph to treat these agents as distinct workers with their own instructions, toolsets, and performance constraints.

## 🧠 JIT (Just-In-Time) Learning

Understand event-driven systems, state machines, and multi-agent coordination where each agent is treated as an independent actor.

- **Mental Models**: [LazyCPU's simple agent framework (Substack)](https://open.substack.com/pub/lazycpu/p/a-simple-agent-part-1?utm_campaign=post&utm_medium=web) - _Focus on treating subagents as distinct entities._
- **Agent Orchestration**: [Repo: GenAI Agents (Nir Diamant)](https://lnkd.in/g5HHZrJK)
- **Architecture**: Master event-driven logic by watching the [Kafka (Event streaming, brokers) Architecture Video](https://lnkd.in/gBiu9ePG).
- **Protocols**: Read the [Model Context Protocol (MCP)](https://lnkd.in/gfdJqGU4) docs on Agent-to-Agent communication.

## 🚀 Initial Kickoff Prompt

_This prompt establishes the multi-agent graph where agents are treated as specialized employees._

---

**Prompt:**

> Target: `/src/agents/`
> Context: We are scaling to a multi-agent team using the "Agent as an Employee" pattern. Each agent should have distinct constraints, LLM profiles, and tool access.
>
> Task:
>
> 1. Set up LangGraph in `src/agents/core_graph.py`.
> 2. Create an **Employee Setup Profile**: Define an interface where an agent gets a Name, Role, allowable LLM Models (e.g. Dev Agent gets Claude 3.5, QA gets GPT-4o), and a specific Tool array.
> 3. Create a `DevAgent` node: Highly skilled in code generation. Give it a `FileWriteTool`.
> 4. Create a `QAAgent` node: Highly critical reviewer. Give it a `TestRunnerTool`.
> 5. Implement a state schema that tracks `current_task`, `code_draft`, and `review_status`.
> 6. Define the sequence: `SUPER_AGENT` -> `DEV_AGENT` -> `QA_AGENT`. If QA fails, loop back to DEV with feedback.
> 7. Stream these state transitions to the console.
