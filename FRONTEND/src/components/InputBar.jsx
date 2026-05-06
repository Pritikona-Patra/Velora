const InputBar = ({ onSend, disabled }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      const msg = e.target.value.trim()
      if (msg) { onSend(msg); e.target.value = ""; e.target.style.height = "40px" }
    }
  }

  const handleInput = (e) => {
    e.target.style.height = "40px"
    e.target.style.height = Math.min(e.target.scrollHeight, 160) + "px"
  }

  const handleClick = () => {
    const input = document.getElementById("chat-input")
    const msg = input.value.trim()
    if (msg) { onSend(msg); input.value = ""; input.style.height = "40px" }
  }

  return (
    <div style={{ padding:"1rem 1.5rem", borderTop:"1px solid rgba(45,212,191,0.06)" }}>
      <div style={{ display:"flex", alignItems:"flex-end", gap:"0.8rem", padding:"0.75rem 1rem", background:"rgba(255,255,255,0.02)", border:"1px solid rgba(45,212,191,0.12)", borderRadius:"10px" }}>
        <textarea
          id="chat-input"
          disabled={disabled}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          placeholder="Message Velora... (Shift+Enter for new line)"
          rows={1}
          style={{ flex:1, background:"transparent", border:"none", outline:"none", fontSize:"0.85rem", color:"#e0f0ee", fontFamily:"'Space Grotesk',sans-serif", resize:"none", height:"40px", lineHeight:"1.6", overflowY:"hidden", padding:"8px 0" }}
        />
        <button onClick={handleClick} disabled={disabled}
          style={{ width:"32px", height:"32px", borderRadius:"50%", background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", color:"#030d0d", flexShrink:0, transition:"all 0.2s", opacity:disabled?0.4:1 }}>
          ➤
        </button>
      </div>
      <p style={{ fontSize:"0.65rem", color:"#0d2a26", marginTop:"0.4rem", textAlign:"center" }}>Shift+Enter for new line · Enter to send</p>
    </div>
  )
}

export default InputBar