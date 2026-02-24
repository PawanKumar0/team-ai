# AI Agent Tech Team

This repository contains the learning resources, experiments, and source code for building an autonomous, enterprise-ready AI Tech Team.

## 🎯 Current Focus: Enterprise AI-Team Blueprint

**Active Sprint**: [Sprint 1: Architecture & Repo Setup](./sprint-1-setup/README.md)

- _Objective_: Initialize the frontend (Next.js), auth, and database architecture.
- _Status_: 🚧 In Progress

## 🚀 How to Use This Repository

Please refer to [PLAN.md](./PLAN.md) for the detailed 8-Sprint enterprise roadmap.

**The Workflow:**
All production code lives in `src/`. Each `sprint-X` folder acts as your workbench, containing the specific JIT reading materials and the exact prompt to use to start coding that specific sprint. Additionally, the `learning/` folder contains standalone reference material (like the System Design Masterclass) for deep dives.

1. Open the current `sprint-X/README.md` file.
2. Read the "JIT (Just-In-Time) Learning" links required for that module.
3. Copy the **"Initial Kickoff Prompt"** provided at the bottom of the sprint README.
4. Paste the prompt into your AI agent or terminal to instruct it to generate the code for that sprint.
5. All actual, working code will be generated inside the `src/` directory.

## 📂 Repository Structure

```text
.
├── PLAN.md                 # Master 8-Sprint Architecture Plan
├── src/                    # The "AI Tech Team" Production Code (Target Directory)
│   ├── web/                # Next.js Dashboard & Frontend
│   ├── api/                # API Gateway, Auth, & Billing
│   └── agents/             # The LangGraph Multi-Agent Core
├── sprint-1-setup/         # Start Here!
├── sprint-2-orchestrator/
├── sprint-3-identity-billing/
├── learning/               # Standalone Technical Reference (System Design)
│   └── system-design/
├── ... (sprints 4-8)
└── docs/                   # Documentation & Research Papers
```
