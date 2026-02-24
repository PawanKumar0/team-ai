# Sprint 5: LangGraph Multi-Agent Communication

## 🎯 Objective

A single Super Agent isn't a team. We need a "Dev Agent" specialized in coding, and a "QA Agent" specialized in reviewing. We will use LangGraph to allow the Super Agent to asynchronously route tasks to these workers and compile their results.

## 🧠 JIT (Just-In-Time) Learning

Understand event-driven systems, state machines, and multi-agent coordination.

- **Mental Models**: [LazyCPU's simple agent framework (Substack)](https://open.substack.com/pub/lazycpu/p/a-simple-agent-part-1?utm_campaign=post&utm_medium=web) - _Focus on the concept of 'Heartbeats' and 'Subagents'._
- **Agent Orchestration**: [Repo: GenAI Agents (Nir Diamant)](https://lnkd.in/g5HHZrJK)
- **Architecture**: Master event-driven logic by watching the [Kafka (Event streaming, brokers) Architecture Video](https://lnkd.in/gBiu9ePG).
- **Protocols**: Read the [Model Context Protocol (MCP)](https://lnkd.in/gfdJqGU4) docs on Agent-to-Agent communication.

## 🚀 Initial Kickoff Prompt

_This prompt establishes the multi-agent graph and the primary communication protocol between the Dev and QA agents._

---

**Prompt:**

> Target: `/src/agents/`
> Context: We are scaling from a single Super Agent to a multi-agent team. We will implement a Directed Acyclic Graph (DAG) for task execution.
>
> Task:
>
> 1. Set up LangGraph or a custom StateMachine in `src/agents/core_graph.py`.
> 2. Create a `DevAgent` node: Highly skilled in code generation. Give it a `FileWriteTool`.
> 3. Create a `QAAgent` node: Highly critical reviewer. Give it a `TestRunnerTool`.
> 4. Implement a state schema that tracks `current_task`, `code_draft`, and `review_status`.
> 5. Define the edges: `SUPER_AGENT` -> `DEV_AGENT` -> `QA_AGENT`. If the QA fails, loop back to `DEV_AGENT` with feedback. If QA passes, return to `SUPER_AGENT` to finalize.
> 6. Stream these state transitions to the console so I can see the "passing of the baton" between agents.
