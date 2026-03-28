# Sprint 7: Secure Sandboxing & Execution

## 🎯 Objective

Our "Dev Agent" actually writes and modifies code. It is wildly dangerous to let an AI blindly execute code directly on our host server. We need to create an isolated Docker container (a Sandbox) where the agent's code can be compiled, tested, and evaluated safely without risking our SaaS infrastructure.

## 🧠 JIT (Just-In-Time) Learning

Understand containerization and OS-level virtualization.

- **System Design Deep Dive**: Understand what happens when you run untrusted code. Review [Docker security best practices](https://docs.docker.com/security/) and read up on tools like [gVisor](https://gvisor.dev/) or [Firecracker](https://firecracker-microvm.github.io/) for microVM-level isolation.
- **Architectural Reference**: Revisit the [Uber Geospatial indexing Architecture](https://lnkd.in/gGcy4s3V) to understand how large ephemeral workloads are managed across nodes.

## 🚀 Initial Kickoff Prompt

_When you are ready to start coding this sprint, copy the prompt below and paste it into a new chat with the AI Agent._

---

**Prompt:**

> Let's harden our Dev Agent so it can execute code safely.
>
> 1. Set up a Docker-in-Docker (DinD) environment or a secure Python execution service.
> 2. Create an `ExecutionSandboxTool` in `src/agents/shared/tools/`.
> 3. Provide this tool to the Dev Agent (or a new Execution Agent). When the Dev Agent writes a Python script or Node script, it should hit this tool.
> 4. The tool must spin up an ephemeral, deeply restricted Docker container, inject the agent's script, run the script, capture the `stdout` and `stderr` logs, destroy the container immediately, and return the logs to the agent.
