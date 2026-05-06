# Velora 🤖
### AI-Powered Chatbot Assistant

Velora is an intelligent chatbot assistant built from scratch using deep learning. It features a custom-trained LSTM Seq2Seq model for natural language conversation, a Flask REST API backend, and a modern React frontend — all connected seamlessly in a full-stack architecture.

---

## 🧠 About the Project

Velora was developed as a learning-focused generative AI project to explore the fundamentals of deep learning, natural language processing, and full-stack web development. The chatbot is trained on real conversational data and can engage in basic human-like dialogue.

The project demonstrates an end-to-end AI application pipeline — from data preparation and model training to API deployment and frontend integration.

---

## ✨ Features

- 🧠 **Custom Deep Learning Model** — LSTM-based Seq2Seq architecture built from scratch using PyTorch
- 💬 **Natural Conversation** — Trained on the DailyDialog dataset with 45,000+ conversation pairs
- 🔗 **REST API** — Flask backend exposing clean API endpoints for chat interaction
- 🌐 **Modern Frontend** — Responsive React-based user interface
- ⚡ **Fast Inference** — Lightweight model optimized for CPU inference
- 🔄 **CORS Enabled** — Seamless communication between frontend and backend

---

## 🛠️ Tech Stack

### Artificial Intelligence & Backend
| Technology | Purpose |
|---|---|
| Python 3.11 | Core programming language |
| PyTorch 2.2.0 | Deep learning framework |
| LSTM Seq2Seq | Chatbot model architecture |
| Flask | REST API framework |
| Flask-CORS | Cross-origin resource sharing |
| NumPy | Numerical computations |

### Frontend
| Technology | Purpose |
|---|---|
| React.js | UI framework |
| JavaScript (ES6+) | Frontend logic |
| HTML5 / CSS3 | Structure and styling |
| Axios | API communication |

### Tools & Platforms
| Tool | Purpose |
|---|---|
| Google Colab | Model training (GPU) |
| VS Code | Development environment |
| GitHub | Version control |
| Kaggle | Dataset source |

---

## 🧬 Model Architecture

Velora uses a **Sequence-to-Sequence (Seq2Seq)** architecture with LSTM (Long Short-Term Memory) networks:

```
User Input (text)
      ↓
  Tokenizer  →  converts words to token indices
      ↓
  Encoder (LSTM)  →  understands and encodes the input
      ↓
  Context Vector  →  compressed representation of input
      ↓
  Decoder (LSTM)  →  generates reply word by word
      ↓
  Detokenizer  →  converts indices back to words
      ↓
Bot Reply (text)
```

### Model Details
| Parameter | Value |
|---|---|
| Architecture | LSTM Seq2Seq |
| Embedding Size | 256 |
| Hidden Size | 512 |
| Vocabulary Size | ~13,000 words |
| Max Sequence Length | 20 tokens |
| Total Parameters | 16,488,145 |
| Training Epochs | 40 |
| Final Loss | ~0.74 |

---

## 📦 Dataset

- **Dataset:** DailyDialog (Multi-turn Dialog)
- **Source:** Kaggle
- **Training Pairs:** 45,015 conversation pairs
- **Type:** Real-world everyday conversations
- **Topics:** Greetings, daily life, travel, food, and more

---

## 📁 Project Structure

```
Velora/
│
├── BACKEND/                        # Python Flask API
│   ├── venv/                       # Virtual environment
│   ├── app.py                      # Flask application & API routes
│   ├── chatbot_model.pth           # Trained PyTorch model
│   └── requirements.txt            # Python dependencies
│
├── frontend/                       # React frontend
│   ├── public/                     # Static assets
│   ├── src/                        # React source code
│   │   ├── components/             # React components
│   │   ├── App.js                  # Main app component
│   │   └── index.js                # Entry point
│   └── package.json                # Node dependencies
│
├── .gitignore                      # Git ignore rules
└── README.md                       # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Python 3.11](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

---

### 🔧 Backend Setup

**Step 1 — Clone the repository**
```bash
git clone https://github.com/yourusername/Velora.git
cd Velora
```

**Step 2 — Go to backend folder**
```bash
cd BACKEND
```

**Step 3 — Create and activate virtual environment**
```bash
# Windows
"C:\Program Files\Python311\python.exe" -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

**Step 4 — Install dependencies**
```bash
pip install flask flask-cors numpy==1.26.4
pip install torch==2.2.0 --index-url https://download.pytorch.org/whl/cpu
```

**Step 5 — Add the model file**
> Download `chatbot_model.pth` and place it in the `BACKEND/` folder.

**Step 6 — Run the Flask server**
```bash
python app.py
```

> ✅ Server will start at `http://127.0.0.1:5000`

---

### 🌐 Frontend Setup

**Step 1 — Go to frontend folder**
```bash
cd frontend
```

**Step 2 — Install dependencies**
```bash
npm install
```

**Step 3 — Start the React app**
```bash
npm start
```

> ✅ App will open at `http://localhost:3000`

---

## 📡 API Endpoints

### Health Check
```
GET /health
```
**Response:**
```json
{
    "status": "Chatbot API is running! ✅"
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
    "message": "hello"
}
```
**Response:**
```json
{
    "status": "success",
    "user_message": "hello",
    "bot_response": "hi how are you doing today"
}
```

---

## 🏋️ Model Training

The model was trained on **Google Colab** using a T4 GPU:

| Phase | Epochs | Final Loss | Time |
|---|---|---|---|
| Phase 1 | 1 - 20 | 2.2198 | ~45 mins |
| Phase 2 | 21 - 40 | 0.7416 | ~45 mins |
| **Total** | **40** | **0.7416** | **~90 mins** |

---

## 🔮 Future Improvements

- [ ] Upgrade to Transformer-based architecture for better responses
- [ ] Add user authentication
- [ ] Implement conversation history
- [ ] Deploy to cloud (AWS / Heroku)
- [ ] Add support for multiple languages
- [ ] Improve response relevance with attention mechanism

---

## 👨‍💻 Author

**Velora Project**
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you found this project helpful, please give it a star on GitHub!
