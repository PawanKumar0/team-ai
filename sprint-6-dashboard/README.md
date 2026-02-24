# Sprint 6: Dynamic UI & Real-Time Dashboard

## 🎯 Objective

We need a frontend so users can visualize the agents thinking and working. We will build a Next.js dashboard featuring real-time websocket streams, so you can see the Dev Agent typing code live. Crucially, we will add **Enterprise Metrics Dashboards** and **Model Selection** settings.

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
> 1. In `src/web/`, build a complex Dashboard page (using Shadcn UI).
> 2. **Settings Panel:** Add a UI to allow the user to select their preferred LLM from a pool (e.g., GPT-4o, Claude-3.5) for specific agent roles.
> 3. **Metrics Dashboard:** Build a view that displays "Agent Performance" (tasks completed vs failed) and "Token Cost Metrics" (using mock data for now) to show daily spend per model.
> 4. Set up a WebSocket connection between the Next.js frontend and the Node.js APIGateway.
> 5. Modify the LangGraph setup so that every state change emits an event over the WebSocket. The Next.js frontend should display a live "Agent Status" log.
