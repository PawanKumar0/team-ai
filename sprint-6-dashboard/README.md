# Sprint 6: Dynamic UI & Real-Time Dashboard

## 🎯 Objective

We need a frontend so users can visualize and manage their AI workforce. We will build a Next.js dashboard featuring real-time websocket streams, so you can see agents typing live. Crucially, we will add **Comprehensive Metrics Dashboards** (individual vs. aggregated) and **API Key Management** for different LLMs.

## 🧠 JIT (Just-In-Time) Learning

To stream AI responses and agent states across the web, you need to understand WebSockets and conflict-free data types.

- **System Design Deep Dive**: Watch the [Google Docs / WhatsApp (WebSockets, CRDTs) Architecture Video](https://lnkd.in/g-iF2XVm).
- **Observability Dashboards**: Understand how platforms like [Langfuse](https://langfuse.com/) or [Helicone](https://www.helicone.ai/) visualize cost per agent and token usage over time.

## 🚀 Initial Kickoff Prompt

_When you are ready to start coding this sprint, copy the prompt below and paste it into a new chat with the AI Agent._

---

**Prompt:**

> Let's build a beautiful SaaS dashboard tracking our AI Agents!
>
> 1. In `src/web/`, build a complex Dashboard layout (using Shadcn UI).
> 2. **Provider Settings & Routing:** Add a UI to input API Keys (OpenAI, Anthropic, Gemini, OpenRouter) and assign a default LLM from the pool to specific agent roles (e.g. QA uses Claude, Dev uses Gemini).
> 3. **Metrics Views:** Build two distinct metric screens pulling from our Langfuse/Helicone logs:
>    - **"Global Workforce Metrics":** Total tokens spent across all agents, aggregate fail/success rate, and the best performing LLM model overall.
>    - **"Individual Employee View":** Drill down into a specific agent (e.g. "Dev Agent 1"). Show their specific cost metrics, latency timeline, and a log of their individual tasks.
> 4. Set up a WebSocket connection between the Next.js frontend and the Node.js APIGateway.
> 5. Modify the LangGraph setup so that every state change emits an event over the WebSocket, displaying a live "Activity Feed."
