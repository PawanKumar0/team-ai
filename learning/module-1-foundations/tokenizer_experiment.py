import tiktoken

def visualize_tokens(text, model="gpt-4"):
    """
    Visualizes how text is broken down into tokens by an LLM.
    """
    try:
        encoding = tiktoken.encoding_for_model(model)
    except KeyError:
        print(f"Warning: Model {model} not found. Using cl100k_base.")
        encoding = tiktoken.get_encoding("cl100k_base")

    tokens = encoding.encode(text)
    
    print(f"\n--- Token Analysis for: '{text}' ---")
    print(f"Total Character Count: {len(text)}")
    print(f"Total Token Count:     {len(tokens)}")
    
    print("\n[Token ID] -> [String Fragment]")
    print("-" * 30)
    
    for token in tokens:
        # Decode individual token back to bytes/string
        decoded_text = encoding.decode_single_token_bytes(token)
        try:
            # Try to decode bytes to utf-8 string for display
            display_text = decoded_text.decode('utf-8')
        except:
            display_text = str(decoded_text)
            
        print(f"[{token:<6}] -> '{display_text}'")
        
    print("-" * 30)

if __name__ == "__main__":
    print("Welcome to the Tokenizer Lab!")
    print("Type a phrase to see how an LLM sees it. (Type 'exit' to quit)")
    
    while True:
        user_input = input("\nENTER TEXT: ")
        if user_input.lower() in ['exit', 'quit']:
            break
        
        visualize_tokens(user_input)
