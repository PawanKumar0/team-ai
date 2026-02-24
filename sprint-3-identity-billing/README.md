# Sprint 3: Identity, Auth, & Billing

## 🎯 Objective

We are building a SaaS product, not just a toy. We need to restrict access to our APIGateway and Super Agent, implement user authentication, and create subscription tiers using Stripe.

## 🧠 JIT (Just-In-Time) Learning

Understand transaction guarantees and idempotency securely before implementing billing.

- **System Design Deep Dive**: Watch the [Payment Systems Architecture](https://lnkd.in/gxmrEKS4) video to understand Idempotency, consistency, and fraud handling.

## 🚀 Initial Kickoff Prompt

_When you are ready to start coding this sprint, copy the prompt below and paste it into a new chat with the AI Agent._

---

**Prompt:**

> Let's secure our SaaS and add monetization.
>
> 1. In `src/web/`, integrate Clerk (or Auth0) for frontend user login and session management.
> 2. In `src/api/`, add middleware to verify the authentication tokens sent from the frontend.
> 3. Create a Postgres database schema (using Prisma or Drizzle) to store `users` and their `subscription_tier`.
> 4. Integrate Stripe billing. Set up an endpoint in the API to handle the Stripe checkout session creation and a webhook endpoint to listen for successful payments to update the user's `subscription_tier`. Ensure the webhook handles idempotency correctly!
