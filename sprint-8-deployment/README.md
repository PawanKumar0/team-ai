# Sprint 8: Production Deployment & Observability

## 🎯 Objective

Take our AI-Team out of `localhost` and deploy it to a production environment. We need to handle high concurrency, secure our API keys, and most importantly: monitor exactly **how much we are spending on LLM tokens per agent** using dedicated observability platforms.

## 🧠 JIT (Just-In-Time) Learning

Master DevOps, CI/CD, and System Scaling for LLM workloads.

- **LLM Observability**:
  - [Langfuse Docs](https://langfuse.com/docs) - _Open-source platform for tracing, evals, and token metrics._
  - [Helicone Docs](https://docs.helicone.ai/) - _LLM proxy for fast caching and automated cost tracking._
- **Scaling Architecture**:
  - Watch: [YouTube (CDN, encoding, scaling)](https://lnkd.in/gWFXwe67) - _CDN strategies._
  - Watch: [Amazon S3 / LLM Systems Inference scaling](https://lnkd.in/gZbQ5Q4M) - _Load balancing LLM calls._
- **Books & Best Practices**:
  - [AI Engineering by Chip Huyen](https://lnkd.in/g-MRviYk) - _Deployment & monitoring focus._
  - [LLM Engineering Handbook](https://lnkd.in/gyA4vFXz).
  - [Designing Machine Learning Systems by Chip Huyen](https://lnkd.in/guN-UhXA)
- **Deployment Hubs**:
  - [Anthropic Academy](https://lnkd.in/gZANmHVk)
  - [Google x Kaggle GenAI Intensive](https://lnkd.in/ga5X7tVJ)
  - [NVIDIA GenAI/LLM Learning Paths](https://lnkd.in/gCtDnhni)

## 🚀 Initial Kickoff Prompt

_This final prompt transitions the project from local development to a globally available enterprise SaaS._

---

**Prompt:**

> Target: `/` (Root and API/Web directories)
> Context: Our AI Tech Team is functional locally. We now need to deploy it to a production Kubernetes cluster and set up hard observability metrics.
>
> Task:
>
> 1. Create a `src/infra/` folder with Terraform/Pulumi scripts or Kubernetes YAML manifests for deploying to AWS EKS or GCP GKE.
> 2. Set up GitHub Actions for CI/CD that runs tests and builds Docker images.
> 3. **Observability Strategy**: Integrate [Langfuse](https://langfuse.com/) or [Helicone](https://www.helicone.ai/) natively into our Python agents or LiteLLM router. We must log every trace to calculate exact Token Costs, Latency, and which specific Agent made the call.
> 4. **System Monitoring**: Set up Prometheus/Grafana or Datadog dashboards to track API gateway latency and Database connections.
> 5. Create a `DEPLOYMENT.md` guide for any new developer to replicate the production environment in 2 minutes.
