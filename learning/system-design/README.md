# System Design Reference

This folder serves as a persistent technical reference for the core engineering principles needed to build enterprise-scale software.

## 1. Core Roadmap

- **Guide**: [System Design Guide by Ankit Pangasa](https://www.linkedin.com/posts/ankit-pangasa_want-to-become-good-at-system-design-activity-7429891390429593600-Vss9?utm_source=share&utm_medium=member_ios&rcm=ACoAABCo6bYBh04t-qQbMdjohMTr26eF3DwAnh8)

## 2. Real-World Case Studies (YouTube Deep Dives)

The following links are invaluable for understanding how major platforms work:

- [ ] **Stock Exchange** (Low latency, matching engines): [Video Link](https://lnkd.in/gCXk-Pti)
- [ ] **Payment Systems** (Idempotency, consistency): [Video Link](https://lnkd.in/gxmrEKS4)
- [ ] **YouTube** (CDN, encoding, scaling): [Video Link](https://lnkd.in/gWFXwe67)
- [ ] **Google Docs / WhatsApp** (WebSockets, CRDTs): [Video Link](https://lnkd.in/g-iF2XVm)
- [ ] **Kafka** (Event streaming, brokers): [Video Link](https://lnkd.in/gBiu9ePG)
- [ ] **URL Shortener** (Hashing, scaling): [Video Link](https://lnkd.in/gHmAvbHY)
- [ ] **Uber** (Geospatial indexing): [Video Link](https://lnkd.in/gGcy4s3V)
- [ ] **Amazon S3 / LLM Systems** (Storage, Inference scaling): [Video Link](https://lnkd.in/gZbQ5Q4M)

## 3. Key Concepts to Master

- [ ] **Networking Basics**: TCP/IP, DNS, HTTP/HTTPS, WebSockets.
- [ ] **API Design**: REST vs GraphQL vs gRPC.
- [ ] **Databases**: Relational (SQL) vs NoSQL vs Vector (Qdrant, Pinecone). Sharding & Replication.
- [ ] **Caching Strategy**: Redis/Memcached. Write-through vs Write-around vs Write-back.
- [ ] **Message Queues & Event Streaming**: Kafka, RabbitMQ (Crucial for async agent communication).
- [ ] **Microservices Architecture**: Load balancing, API Gateways, Rate Limiting, Service Discovery.

### 3. Application to AI (Our Focus)

- **Deployment**: How do we host our LLM models and our Agents? (Docker, Kubernetes).
- **Latency & Streaming**: How do we handle slow LLM inference? (Server-Sent Events / WebSockets for chat UI streaming).
- **Evaluating Load**: How do we route traffic when we have multiple "Worker Agents" handling concurrent users?

---

## 🛠 Practice & Projects

_As you progress through your AI Modules, you will be expected to implement system design principles here._

1. **Draw the Architecture**: Whiteboard the architecture for the Multi-Agent squad (Super Agent, Dev, Ops, Reviewer) we are building in Phase 2.
2. **Setup your environment**: Initialize Docker configurations for your future services.

- **Networking**: TCP/IP, DNS, HTTP/HTTPS, WebSockets.
- **Microservices**: Service discovery, Rate Limiting, API Gateways.
- **Databases**: Relational vs NoSQL, High Availability (HA), Sharding vs Partitioning.
- **Caching**: Redis, Memcached, CDN distribution.
- **Event-Driven**: Message queues (Kafka, RabbitMQ, SQS).
- **Security**: OAuth2, JWT, TLS termination, Rate Limiting.
- **Infrastructure**: Docker, Kubernetes, CI/CD, Infrastructure as Code (Terraform).

# raw links

1. https://www.threads.com/@systemdesignone/post/DVGkMHJiCGG?xmt=AQF0RI3uGA9O5_xXU0-ZzEJ-pz-68U2tNuGnbk_yNsnCpoF1ykpY3_4g-DRM4hhiKM0RjXIB&slof=1
