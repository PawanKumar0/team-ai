# Sprint 2: The Core LLM Engine & Orchestrator

## 🎯 Objective

Build the "Super Agent" – the central orchestrator that takes user requests, processes them through an LLM (Anthropic or OpenAI), and can utilize basic Model Context Protocol (MCP) tools.

## 🧠 JIT (Just-In-Time) Learning

Master how to effectively instruct and structure the logic for your first agent:

- **Foundational Math/DL**:
  - [Course: Deep Learning Specialization (Andrew Ng)](https://lnkd.in/gwqSPS4J) - _Focus on NN basics._
  - [Course: Karpathy's Neural Networks: Zero to Hero](https://lnkd.in/gZumxBZw) - _Essential mental models._
- **Prompt Engineering**:
  - [OpenAI Prompt Engineering Guide](https://lnkd.in/gqjcPxcQ)
  - [Anthropic Prompt Engineering Guide](https://lnkd.in/gsnasAV6)
  - [The Prompt Lifecycle Every AI Engineer Should Know (NeoSage)](https://lnkd.in/g5UJaSed)
- **Architecture**:
  - [Karpathy's Intro to LLMs (Video)](https://lnkd.in/gcaiyVJz)
  - [microGPT Implementation](https://www.linkedin.com/posts/shubshrivastava_most-beautiful-code-i-have-seen-shared-in-activity-7429424991537913856-sIAt?utm_source=share&utm_medium=member_ios&rcm=ACoAABCo6bYBh04t-qQbMdjohMTr26eF3DwAnh8)

## 🚀 Initial Kickoff Prompt

_This prompt provides the necessary context for the AI to build out the orchestrator while adhering to the enterprise structure we've planned._

---

**Prompt:**

> Target: `/src/agents/super-agent/`
> Context: We are building an enterprise-ready AI Tech Team. The first component is the "Super Agent" – a CLI-based orchestrator that uses the ReAct (Reasoning + Acting) loop.
>
> Task:
>
> 1. Initialize a Python/TS environment in `src/agents/super-agent/`.
> 2. Set up a robust connection to Anthropic/OpenAI using LangChain or similar.
> 3. Implement a core agent loop that takes a user query and maintains a message history.
> 4. Integrate a basic `Calculator` and `CurrentTime` tool using the Model Context Protocol (MCP) structure.
> 5. Ensure the agent provides a detailed "thought" before executing tools, demonstrating its internal reasoning process.
> 6. Create a `main.py` (or `.ts`) entry point to test this loop via terminal.
