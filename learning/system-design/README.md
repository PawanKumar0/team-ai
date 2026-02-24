# System Design Track

As an Enterprise AI Engineer, understanding how to build scalable, distributed, and fault-tolerant software systems is just as important as understanding Neural Networks. This track runs parallel to your AI modules.

## Goal

To build the core software engineering and architectural skills required to deploy and maintain production-grade AI applications and multi-agent systems at scale.

---

## 📚 Core Resources

### 1. The Blueprint

- **Guide**: [System Design Guide by Ankit Pangasa](https://www.linkedin.com/posts/ankit-pangasa_want-to-become-good-at-system-design-activity-7429891390429593600-Vss9?utm_source=share&utm_medium=member_ios&rcm=ACoAABCo6bYBh04t-qQbMdjohMTr26eF3DwAnh8)
  _(Start here to understand the roadmap from networking basics to complex microservices and databases)._

### 1.5 Deep Dive Real-World System Videos

_(All curated from the guide above)_

- [ ] **Stock Exchange** (Low latency, matching engines): [Video Link](https://lnkd.in/gCXk-Pti)
- [ ] **Payment Systems** (Idempotency, consistency): [Video Link](https://lnkd.in/gxmrEKS4)
- [ ] **YouTube** (CDN, encoding, scaling): [Video Link](https://lnkd.in/gWFXwe67)
- [ ] **Google Docs / WhatsApp** (WebSockets, CRDTs): [Video Link](https://lnkd.in/g-iF2XVm)
- [ ] **Kafka** (Event streaming, brokers): [Video Link](https://lnkd.in/gBiu9ePG)
- [ ] **URL Shortener** (Hashing, scaling): [Video Link](https://lnkd.in/gHmAvbHY)
- [ ] **Uber** (Geospatial indexing): [Video Link](https://lnkd.in/gGcy4s3V)
- [ ] **Amazon S3 / LLM Systems** (Storage, Inference scaling): [Video Link](https://lnkd.in/gZbQ5Q4M)

### 2. High-Level Concepts to Master

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


# raw links
1. https://www.threads.com/@systemdesignone/post/DVGkMHJiCGG?xmt=AQF0RI3uGA9O5_xXU0-ZzEJ-pz-68U2tNuGnbk_yNsnCpoF1ykpY3_4g-DRM4hhiKM0RjXIB&slof=1