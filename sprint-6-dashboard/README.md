# Sprint 6: Dynamic UI & Real-Time Dashboard

## 🎯 Objective

We need a frontend so users can visualize the agents thinking and working. We will build a Next.js dashboard featuring real-time websocket streams, so you can see the Dev Agent typing code live and the QA Agent approving it.

## 🧠 JIT (Just-In-Time) Learning

To stream AI responses and agent states across the web, you need to understand WebSockets and conflict-free data types.

- **System Design Deep Dive**: Watch the [Google Docs / WhatsApp (WebSockets, CRDTs) Architecture Video](https://lnkd.in/g-iF2XVm).

## 🚀 Initial Kickoff Prompt

_When you are ready to start coding this sprint, copy the prompt below and paste it into a new chat with the AI Agent._

---

**Prompt:**

> Let's build a beautiful SaaS dashboard tracking our AI Agents!
>
> 1. In `src/web/`, build a complex Dashboard page (using Shadcn UI components like Sidebar, Cards, and DataTables).
> 2. Create a "Chat Arena" component where users can talk to the Super Agent.
> 3. Set up a WebSocket connection (using Socket.io or native WebSockets) between the Next.js frontend and the Node.js APIGateway.
> 4. Modify the LangGraph setup so that every time a node changes state (e.g. from ORCHESTRATOR -> DEV_AGENT), it emits an event over the WebSocket. The Next.js frontend should catch this and display a live "Agent Status" activity feed on the right side of the screen.
