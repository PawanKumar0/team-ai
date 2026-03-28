# Sprint 4: RAG & Long-Term Memory

## 🎯 Objective

We need our agents to read massive amounts of API documentation, your personal code snippets, and past conversations. We will implement Retrieval-Augmented Generation (RAG) using a Vector Database.

## 🧠 JIT (Just-In-Time) Learning

Before you write Vector Embeddings, you must understand the math of how a Transformer turns words into numbers.

- **Theory & Foundations**:
  - [Course: Karpathy's Neural Networks (Zero to Hero)](https://lnkd.in/gZumxBZw) - _Deep dive into backprop and architecture._
  - [Paper: "Attention Is All You Need"](https://lnkd.in/gXUccydp)
  - [Course: Stanford CS25 (Transformers)](https://lnkd.in/gUzsiN_e)
  - [NeoSage issues 1 & 2](https://blog.neosage.io) ([Link 1](https://lnkd.in/g2pXsyHn), [Link 2](https://lnkd.in/gPimp6mv))
- **Practical RAG Implementation**:
  - [Project: Build a RAG Pipeline from scratch](https://lnkd.in/gbdiAkPD)
  - [Repo: RAG Techniques (Nir Diamant)](https://lnkd.in/gA7maM5Y)
  - [Repo: "Hands-On Large Language Models" Repo (Srishti)](https://x.com/srishticodes/status/2024524620381221094?s=46)

## 🚀 Initial Kickoff Prompt

_Use this prompt to build the first functional version of the Researcher's memory._

---

**Prompt:**

> Target: `/src/agents/shared/memory/`
> Context: Our AI Team needs a "Researcher Agent" that can read external documentation and remember it. We will implement Retrieval-Augmented Generation (RAG).
>
> Task:
>
> 1. Set up a local or cloud Vector DB (Qdrant, Chroma, or Pinecone).
> 2. Create a `doc_processor.py` that reads Markdown files, chunks them using RecursiveCharacterTextSplitter, and generates embeddings (OpenAI/HuggingFace).
> 3. Store these chunks in the Vector DB with metadata (source filename, chunk ID).
> 4. Create a `SearchMemoryTool` that takes a query, embeds it, finds the top 5 most similar chunks, and returns the text.
> 5. Integrate this tool into the Super Agent from Sprint 2 so it can "read" our project documentation to answer questions.
