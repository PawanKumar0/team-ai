# Sprint 2: Core LLM Engine & Dynamic Routing

## 🎯 Objective

Build the "Super Agent" – the central orchestrator that takes user requests, processes them through an LLM, and can utilize basic Model Context Protocol (MCP) tools. We will also implement **Dynamic LLM Routing** (e.g., using LiteLLM) to route complex queries to GPT-4o/Claude-3.5 and simple queries to cheaper models (GPT-4o-mini/Haiku) to optimize costs.

## 🧠 JIT (Just-In-Time) Learning

Master how to effectively instruct and structure the logic for your first agent, and how to manage prompt costs:

- **Foundational Math/DL**:
  - [Course: Deep Learning Specialization (Andrew Ng)](https://lnkd.in/gwqSPS4J) - _Focus on NN basics._
  - [Course: Karpathy's Neural Networks: Zero to Hero](https://lnkd.in/gZumxBZw) - _Essential mental models._
- **Prompt Engineering & Tool Calling**:
  - [OpenAI Prompt Engineering Guide](https://lnkd.in/gqjcPxcQ)
  - [Anthropic Prompt Engineering Guide](https://lnkd.in/gsnasAV6)
  - [The Prompt Lifecycle Every AI Engineer Should Know (NeoSage)](https://lnkd.in/g5UJaSed)
- **Architecture & Cost Routing**:
  - [Karpathy's Intro to LLMs (Video)](https://lnkd.in/gcaiyVJz)
  - [LiteLLM Docs (Model Routing)](https://docs.litellm.ai/docs/routing) - _Learn how to unify API calls and track costs per model._
  - [microGPT Implementation](https://www.linkedin.com/posts/shubshrivastava_most-beautiful-code-i-have-seen-shared-in-activity-7429424991537913856-sIAt?utm_source=share&utm_medium=member_ios&rcm=ACoAABCo6bYBh04t-qQbMdjohMTr26eF3DwAnh8)

## 🚀 Initial Kickoff Prompt

_This prompt provides the necessary context for the AI to build out the orchestrator and routing logic._

---

**Prompt:**

> Target: `/src/agents/super-agent/`
> Context: We are building an enterprise-ready AI Tech Team. The first component is the "Super Agent". We must support **dynamic LLM routing** to control costs, and explicit **Tool Calling** capabilities.
>
> Task:
>
> 1. Initialize a Python/TS environment in `src/agents/super-agent/`.
> 2. Set up **LiteLLM** (or a custom router) to seamlessly switch between OpenAI and Anthropic models based on user preference or query complexity.
> 3. Implement a ReAct (Reasoning + Acting) loop that takes a query and maintains message history.
> 4. Integrate a basic `Calculator` and `CurrentTime` tool natively. Ensure the agent provides a detailed "thought" before executing tools.
> 5. Create a `main.py` entry point to test this loop via terminal, passing a flag like `--model gpt-4o` or `--model claude-3-haiku` to test the routing.
