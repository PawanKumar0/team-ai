# Module 1: LLM Foundations

**Goal**: Demystify the "Magic" of AI. Understand what an LLM actually is (a probability distribution over sequences of text) and how it processes information (Tokens, Attention).

---

## 📅 Architecture of this Module

1.  **Theory**: Watch & Read content to understand _Transformer_ and _Attention_.
2.  **Hands-On**: Run a local script to see "Tokens" with your own eyes.
3.  **Reflection**: Answer key questions to verify understanding.

---

## 1. Theory: The "Must Watch" & "Must Read" List

### A. The Big Picture (Start Here)

- **Course**: [Deep Learning Specialization (Andrew Ng)](https://link.coursera.org/deep-learning)
  - _Why_: The gold standard for understanding neural networks from the ground up.
- **Course**: [Karpathy's Neural Networks: Zero to Hero](https://karpathy.ai/zero-to-hero.html)
- **Video**: [Intro to Large Language Models (Andrej Karpathy)](https://www.youtube.com/watch?v=zjkBMFhNj_g) (1 hr)
  - _Why_: Explains the "State of the Art" perfectly. Look for: Pre-training vs Fine-tuning (RLHF). This distinction is vital for building agents.
- **Deep Dive Video**: [Karpathy's deep dive into LLMs](https://www.youtube.com/watch?v=kCc8FmEb1nY)

    <details>
    <summary><strong>📝 Key Concepts Summary (Read this!)</strong></summary>

  #### 1. Pre-training (The "Base Model")
  - **Goal**: Learn the statistical structure of language.
  - **Data**: The entire internet (Common Crawl, Wikipedia, GitHub).
  - **Process**: Predict the next token. (e.g., "The cat sat on the [MAT]").
  - **Result**: A model that can dream text but isn't helpful. It might answer a question with another question.

  #### 2. Supervised Fine-Tuning (SFT) (The "Assistant Model")
  - **Goal**: Learn to follow instructions.
  - **Data**: High-quality Q&A written by human contractors.
  - **Process**: Train on datasets like `{User: "Hi", Assistant: "Hello! How can I help?"}`.
  - **Result**: A helpful chatbot (like ChatGPT).

  #### 3. RLHF (Reinforcement Learning from Human Feedback)
  - **Goal**: Alignment (Safety, Tone, Preference).
  - **Process**:
    - Model generates 4 answers.
    - Human ranks them (A > B > C).
    - Model learns a "Reward Function" to maximize human approval.

  #### 4. System 2 Thinking (Agents)
  - LLMs are "System 1" (Fast, Intuitive).
  - Agents/CoT allow "System 2" (Slow, Deliberate reasoning) by giving the model time to "think" or use tools before answering.
  </details>

### B. The Machine Room (How it works)

- **Reading**: ["Attention Is All You Need" (The original Transformer paper)](https://arxiv.org/abs/1706.03762)
- **Reading**: [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/)
  - _Why_: The best visual explanation of the "Attention Is All You Need" paper.
  - _Key Concept_: **Self-Attention**. How the model looks at "bank" in "river bank" vs "bank account" differently.
- **Reading**: [Stanford CS25: Transformers United](https://web.stanford.edu/class/cs25/)
- **Summary Newsletters**: [NeoSage Issues 1 & 2](https://blog.neosage.io) for faster intuition on LLM development.

### C. The Input (Tokens & The Code)

- **Tool**: [Tiktokenizer (OpenAI)](https://tiktokenizer.vercel.app/)
  - _Activity_: Type in "The quick brown fox" and see how it breaks down.
  - _Notice_: "Hello world" is 2 tokens. "Ingeniousness" might be 3-4.
- **Micro-Project (Mental Model)**: [Andrej Karpathy's microGPT](https://github.com/karpathy/microgpt)
  - _Why_: A 200-line, pure Python, zero-dependency implementation of a GPT. This takes "AI" from abstract math to concrete code.
  - _Action_: Read the code. Understand how data loading, tokenization, the autograd engine, and the Adam optimizer fit into a single file. You can also read [this explainer](https://jerrysoer.github.io/microgpt-explainer/) to help break it down.

---

## 2. Practice Task: "Feeling" the Tokens

**Objective**: Write a script to visualize how models "see" text differently than humans.

### Setup

Run the `tokenizer_experiment.py` script included in this folder.
You will need to install `tiktoken`:

```bash
pip install tiktoken
```

### Experiment Challenges

1.  Run the script.
2.  Input: "The quick brown fox jumps over the lazy dog." (Observe token count).
3.  Input: "9.11" vs "9.9". (Are numbers single tokens?).
4.  Input: A complex URL or code snippet.

---

## 3. FAANG & Enterprise Interview Questions

_Self-Check: Can you answer these confidently? These are actual questions asked for AI Engineering roles at leading tech companies._

1.  **Q**: "Explain the mathematical difference between Self-Attention and Cross-Attention in the Transformer architecture. When would you use one over the other?"
    - _Hint_: Think about Q, K, V matrices. Self-attention relates a sequence to itself. Cross-attention relates two different sequences (like in translation tasks).
2.  **Q**: "How does KV-caching optimize autoregressive generation in LLMs, and what are the memory tradeoffs in production?"
    - _Hint_: You shouldn't recompute the Key and Value matrices for prior tokens every time you generate a new token. But storing them takes up GPU VRAM.
3.  **Q**: "Why can't an LLM do math perfectly, and how does the tokenization of numbers affect this?"
    - _Hint_: Think about how "1000" vs "100" vs "1" are tokenized. If "380" is one token, the model doesn't inherently understand it represents 3 hundreds, 8 tens, and 0 ones.
4.  **Q**: "Explain the objective function used in Reinforcement Learning from Human Feedback (RLHF). Why use PPO over standard Supervised Fine-Tuning?"
    - _Hint_: SFT teaches the model _how_ to talk. RLHF aligns it with _what_ humans actually prefer (safety, tone, helpfulness), using a separate Reward Model.
5.  **Q**: "What is the 'Context Window' and how do techniques like RoPE (Rotary Position Embedding) help extend it?"
    - _Hint_: It's the short-term memory limit. RoPE injects relative positional information directly into attention matrices, allowing for better extrapolation to larger contexts than standard absolute embeddings.

---

## 4. Product Integration

How does _Tokenization_ apply to our **AI Tech Team** product?

- **Cost Estimation**: We must count tokens _before_ sending requests to OpenAI/Anthropic to estimate API costs.
- **Memory Management**: Our "Long-term Memory" agent must truncate old conversation history to fit within the module's context window (e.g., 128k tokens).
- **Text Splitting**: When doing RAG, we split documents by _tokens_, not _characters_, to ensure chunks fit into the model.
