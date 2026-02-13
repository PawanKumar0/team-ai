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

- **Reading**: [The Illustrated Transformer (Jay Alammar)](https://jalammar.github.io/illustrated-transformer/)
  - _Why_: The best visual explanation of the "Attention Is All You Need" paper.
  - _Key Concept_: **Self-Attention**. How the model looks at "bank" in "river bank" vs "bank account" differently.

### C. The Input (Tokens)

- **Tool**: [Tiktokenizer (OpenAI)](https://tiktokenizer.vercel.app/)
  - _Activity_: Type in "The quick brown fox" and see how it breaks down.
  - _Notice_: "Hello world" is 2 tokens. "Ingeniousness" might be 3-4.

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

## 3. Interview Questions

_Self-Check: Can you answer these confidently?_

1.  **Q**: "Why can't an LLM do math perfectly?"
    - _Hint_: Think about how "1000" vs "100" vs "1" are tokenized. They don't have intrinsic numerical value to the model, just token IDs.
2.  **Q**: "What is the 'Context Window' and why does it matter for an Agent?"
    - _Hint_: It's the short-term memory limit. If your RAG retrieves too many docs, you crash.
3.  **Q**: "Explain Self-Attention to a 5-year-old."
    - _Hint_: It's like reading a sentence and focusing on relevant words to understand the current word.
4.  **Q**: "What is the difference between Pre-training and Fine-tuning?"
    - _Hint_: Learning the language vs Learning to follow instructions.

---

## 4. Product Integration

How does _Tokenization_ apply to our **AI Tech Team** product?

- **Cost Estimation**: We must count tokens _before_ sending requests to OpenAI/Anthropic to estimate API costs.
- **Memory Management**: Our "Long-term Memory" agent must truncate old conversation history to fit within the module's context window (e.g., 128k tokens).
- **Text Splitting**: When doing RAG, we split documents by _tokens_, not _characters_, to ensure chunks fit into the model.
