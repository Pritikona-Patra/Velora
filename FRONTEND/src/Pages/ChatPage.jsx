import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import ChatWindow from "../components/ChatWindow"
import InputBar from "../components/InputBar"

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const navigate = useNavigate()

  const toggleSidebar = () => setSidebarOpen(prev => !prev)

  const handleNewChat = async () => {
    if (messages.length > 0) {
      const firstMsg = messages[0].text.slice(0, 30) + "..."
      setChatHistory(prev => [firstMsg, ...prev])
    }
    setMessages([])
    try {
      await fetch("http://127.0.0.1:5000/reset", { method: "POST" })
    } catch (err) {
      console.error("Reset failed:", err)
    }
  }

  const handleSend = async (text) => {
    const userMsg = { sender: "user", text }
    setMessages(prev => [...prev, userMsg])
    setIsTyping(true)
    try {
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { sender: "bot", text: data.reply }])
    } catch (err) {
      setMessages(prev => [...prev, { sender: "bot", text: "Sorry, I couldn't connect to the server." }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div style={{ background:"#030d0d", minHeight:"100vh", fontFamily:"'Space Grotesk',sans-serif" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        #chat-input::placeholder { color: #1a4a45; }
      `}</style>

      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar
        isOpen={sidebarOpen}
        onNewChat={handleNewChat}
        chatHistory={chatHistory}
      />

      {/* Main area shifts when sidebar opens */}
      <main style={{ display:"flex", flexDirection:"column", height:"100vh", paddingTop:"60px", marginLeft:sidebarOpen?"240px":"0", transition:"margin-left 0.3s ease" }}>

        {/* Empty state */}
        {messages.length === 0 && (
          <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1.5rem", padding:"2rem" }}>
            <div style={{ width:"60px", height:"60px", borderRadius:"50%", background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", fontWeight:700, color:"#030d0d" }}>V</div>
            <div style={{ textAlign:"center" }}>
              <h2 style={{ fontSize:"1.5rem", fontWeight:700, background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", marginBottom:"0.5rem" }}>How can I help you?</h2>
              <p style={{ fontSize:"0.82rem", color:"#1a4a45", letterSpacing:"0.5px" }}>Ask me anything — I'm here to help.</p>
            </div>

            {/* Suggestion chips */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem", justifyContent:"center", maxWidth:"500px" }}>
              {["Explain quantum computing", "Write a Python function", "What is machine learning?", "Help me brainstorm ideas"].map((chip, i) => (
                <button key={i} onClick={() => handleSend(chip)}
                  style={{ padding:"0.5rem 1rem", background:"rgba(45,212,191,0.06)", border:"1px solid rgba(45,212,191,0.15)", borderRadius:"999px", color:"#2a8a80", fontSize:"0.78rem", cursor:"pointer", transition:"all 0.2s", fontFamily:"'Space Grotesk',sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.background="rgba(45,212,191,0.12)"; e.currentTarget.style.color="#2dd4bf"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="rgba(45,212,191,0.06)"; e.currentTarget.style.color="#2a8a80"; }}>
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat window */}
        {messages.length > 0 && (
          <div style={{ flex:1, overflowY:"auto", padding:"1.5rem 2rem" }}>
            <ChatWindow messages={messages} isTyping={isTyping} />
          </div>
        )}

        <InputBar onSend={handleSend} disabled={isTyping} />
      </main>
    </div>
  )
}