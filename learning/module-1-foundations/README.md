# Module 1: LLM Foundations

**Goal**: Demystify the "Magic" of AI. Understand what an LLM actually is (a probability distribution over sequences of text) and how it processes information (Tokens, Attention).

---

## 📅 Architecture of this Module

1.  **Theory**: Watch & Read content to understand _Transformer_ and _Attention_.
2.  **Hands-On**: Run a local script to see "Tokens" with your own eyes.
3.  **Reflection**: Answer key questions to verify understanding.

---

## 1. Theory: The "Must Watch" List

### A. The Big Picture (Start Here)

- **Video**: [Intro to Large Language Models (Andrej Karpathy)](https://www.youtube.com/watch?v=zjkBMFhNj_g) (1 hr)
  - _Why_: Karpathy is the best teacher in the field. He explains the "State of the Art" perfectly.
  - _Look for_: Pre-training vs Fine-tuning (RLHF). This distinction is vital for building agents.

### B. The Machine Room (How it works)

- **Reading**: [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/)
  - _Why_: The best visual explanation of the "Attention Is All You Need" paper.
  - _Key Concept_: **Self-Attention**. How the model looks at "bank" in "river bank" vs "bank account" differently.

### C. The Input (Tokens)

- **Tool**: [Tiktokenizer (OpenAI)](https://tiktokenizer.vercel.app/)
  - _Activity_: Type in "The quick brown fox" and see how it breaks down.
  - _Notice_: "Hello world" is 2 tokens. "Ingeniousness" might be 3-4.

---

## 2. Hands-On: "Feeling" the Tokens

We will write a simple script to interact with a tokenizer. This is the first step because **Models don't see text, they see integers.**

### Setup

Run the `tokenizer_experiment.py` script included in this folder.
You will need to install `tiktoken`:

```bash
pip install tiktoken
```

### Experiment

1.  Run the script.
2.  Input different sentences.
3.  **Challenge**: Try to find a word that is split into 3+ tokens.

---

## 3. Reflection Questions

After finishing this module, you should be able to answer:

1.  Why can't an LLM do math perfectly? (Hint: Tokenization of numbers).
2.  What is the "Context Window"? Why does it matter for an Agent?
3.  What is the difference between the "Base Model" (GPT-4-base) and the "Chat Model" (GPT-4-turbo)?
