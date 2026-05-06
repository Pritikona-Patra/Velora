from flask import Flask, request, jsonify
from flask_cors import CORS
from model import get_response, reset_conversation

app = Flask(__name__)
CORS(app)

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_msg = data.get("message", "")

    if not user_msg:
        return jsonify({"error": "No message provided"}), 400

    bot_reply = get_response(user_msg)
    return jsonify({"reply": bot_reply})

@app.route("/reset", methods=["POST"])
def reset():
    reset_conversation()
    return jsonify({"status": "Conversation reset"})

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)