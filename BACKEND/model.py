from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
SYSTEM_PROMPT = (
    "You are Velora, a helpful, friendly, and intelligent AI assistant. "
    "You give clear, concise, and accurate responses. "
    "You never roleplay as the user or continue the conversation yourself. "
    "Keep responses conversational and under 3 sentences unless the topic requires more detail."
)

conversation_history = []

def get_response(user_input):
    global conversation_history

    user_input = user_input.strip()
    if not user_input:
        return "Please say something so I can help you!"

    conversation_history.append({
        "role": "user",
        "content": user_input
    })

    # Keep last 20 messages to avoid token limits
    if len(conversation_history) > 20:
        conversation_history = conversation_history[-20:]

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            *conversation_history
        ],
        max_tokens=300,
        temperature=0.7,
    )

    reply = response.choices[0].message.content.strip()

    conversation_history.append({
        "role": "assistant",
        "content": reply
    })

    return reply

def reset_conversation():
    global conversation_history
    conversation_history = []