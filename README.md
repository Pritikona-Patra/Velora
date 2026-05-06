# Velora 🤖
### AI-Powered Chatbot Assistant

Velora is an intelligent chatbot assistant powered by **Llama 3.3 via Groq API**, featuring a Flask REST API backend and a modern React + Vite frontend — all connected seamlessly in a full-stack architecture.

---

## 🧠 About the Project

Velora was developed as a learning-focused generative AI project to explore large language model integration, REST API design, and full-stack web development. The chatbot leverages Llama 3.3-70B via the Groq API for fast, high-quality conversational AI responses.

The project demonstrates an end-to-end AI application pipeline — from LLM integration and API deployment to a polished frontend experience.

---

## ✨ Features

- 🧠 **LLM-Powered** — Uses Llama 3.3-70B via Groq API for ChatGPT-level responses
- ⚡ **Ultra Fast** — Sub-second response times powered by Groq's inference infrastructure
- 💬 **Context Aware** — Maintains full conversation history across the session
- 🔗 **REST API** — Flask backend exposing clean API endpoints for chat interaction
- 🌐 **Modern Frontend** — React + Vite with a dark neon teal theme
- 🔄 **CORS Enabled** — Seamless communication between frontend and backend
- 🔒 **Secure** — API keys stored in environment variables, never exposed in code

---

## 🛠️ Tech Stack

### AI & Backend
| Technology | Purpose |
|---|---|
| Python 3.11 | Core programming language |
| Groq API | LLM inference infrastructure |
| Llama 3.3-70B | Large language model |
| Flask | REST API framework |
| Flask-CORS | Cross-origin resource sharing |
| python-dotenv | Environment variable management |

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Utility-first styling |
| React Router | Client-side routing |
| Space Grotesk | Typography |

### Tools & Platforms
| Tool | Purpose |
|---|---|
| VS Code | Development environment |
| GitHub | Version control |
| Postman | API testing |
| Groq Console | API key management |

---

## 📁 Project Structure

```
Velora/
│
├── BACKEND/                        # Python Flask API
│   ├── venv/                       # Virtual environment (not pushed)
│   ├── app.py                      # Flask application & API routes
│   ├── model.py                    # Groq LLM integration
│   ├── .env                        # API keys (not pushed)
│   └── requirements.txt            # Python dependencies
│
├── FRONTEND/                       # React + Vite frontend
│   ├── public/                     # Static assets
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── InputBar.jsx
│   │   │   └── TypingIndicator.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   └── ChatPage.jsx
│   │   ├── App.jsx                 # Route definitions
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles + Tailwind
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Python 3.11](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- A free [Groq API key](https://console.groq.com)

---

### 🔧 Backend Setup

**Step 1 — Clone the repository**
```bash
git clone https://github.com/ArnaB-Royy/Velora.git
cd Velora
```

**Step 2 — Go to backend folder and create virtual environment**
```bash
cd BACKEND

# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

**Step 3 — Install dependencies**
```bash
pip install -r requirements.txt
```

**Step 4 — Set up environment variables**

Create a `.env` file in the `BACKEND/` folder:
```
GROQ_API_KEY=your_groq_api_key_here
```
Get your free API key at [console.groq.com](https://console.groq.com)

**Step 5 — Run the Flask server**
```bash
python app.py
```

> ✅ Server will start at `http://127.0.0.1:5000`

---

### 🌐 Frontend Setup

**Step 1 — Go to frontend folder**
```bash
cd FRONTEND
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Start the dev server**
```bash
npm run dev
```

> ✅ App will open at `http://localhost:5173`

---

## 📡 API Endpoints

### Health Check
```
GET /health
```
**Response:**
```json
{
    "status": "ok"
}
```

---

### Chat
```
POST /chat
```
**Request Body:**
```json
{
    "message": "Hello, who are you?"
}
```
**Response:**
```json
{
    "reply": "I'm Velora, a friendly AI assistant here to help you!"
}
```

---

### Reset Conversation
```
POST /reset
```
**Response:**
```json
{
    "status": "Conversation reset"
}
```

---

## 🔮 Future Improvements

- [ ] User authentication & accounts
- [ ] Persistent chat history with a database
- [ ] Cloud deployment (AWS / Railway / Render)
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Custom personality/system prompt configuration

---

## 👨‍💻 Authors

| Name | GitHub |
|---|---|
| Arnab Roy | [@ArnaB-Royy](https://github.com/ArnaB-Royy) |
| Pritikona Patra | [@Pritikona-Patra](https://github.com/Pritikona-Patra) |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
