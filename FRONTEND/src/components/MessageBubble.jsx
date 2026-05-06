const MessageBubble = ({ message, sender }) => {
  const isUser = sender === "user"

  const formatMessage = (text) => {
    return text.split("\n").map((line, i) => {
      // Numbered list line e.g. "1. Something"
      const numberedMatch = line.match(/^(\d+)\.\s(.+)/)
      if (numberedMatch) {
        return (
          <div key={i} style={{ display:"flex", gap:"0.5rem", marginBottom:"0.4rem" }}>
            <span style={{ color:"#2dd4bf", fontWeight:700, minWidth:"18px" }}>{numberedMatch[1]}.</span>
            <span>{numberedMatch[2]}</span>
          </div>
        )
      }
      // Bold **text**
      if (line.includes("**")) {
        const parts = line.split(/\*\*(.*?)\*\*/)
        return (
          <p key={i} style={{ margin:"0 0 0.3rem" }}>
            {parts.map((part, j) => j % 2 === 1 ? <strong key={j} style={{ color:"#2dd4bf" }}>{part}</strong> : part)}
          </p>
        )
      }
      // Empty line = spacer
      if (line.trim() === "") return <div key={i} style={{ height:"0.4rem" }} />
      // Normal line
      return <p key={i} style={{ margin:"0 0 0.3rem" }}>{line}</p>
    })
  }

  return (
    <div style={{ display:"flex", width:"100%", marginBottom:"1rem", justifyContent:isUser?"flex-end":"flex-start", alignItems:"flex-end", gap:"0.5rem" }}>
      {!isUser && (
        <div style={{ width:"28px", height:"28px", borderRadius:"50%", background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", fontWeight:700, color:"#030d0d", flexShrink:0 }}>V</div>
      )}
      <div style={{ maxWidth:"70%", padding:"0.75rem 1rem", borderRadius:isUser?"12px 12px 2px 12px":"12px 12px 12px 2px", fontSize:"0.85rem", lineHeight:1.7, background:isUser?"rgba(45,212,191,0.15)":"rgba(255,255,255,0.03)", border:isUser?"1px solid rgba(45,212,191,0.3)":"1px solid rgba(255,255,255,0.06)", color:isUser?"#ccfbf1":"#9abfbb" }}>
        {isUser ? message : formatMessage(message)}
      </div>
      {isUser && (
        <div style={{ width:"28px", height:"28px", borderRadius:"50%", background:"rgba(45,212,191,0.15)", border:"1px solid rgba(45,212,191,0.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", fontWeight:700, color:"#2dd4bf", flexShrink:0 }}>U</div>
      )}
    </div>
  )
}

export default MessageBubble