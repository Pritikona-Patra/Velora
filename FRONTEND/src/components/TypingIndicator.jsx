const TypingIndicator = () => {
  return (
    <div style={{ display:"flex", alignItems:"flex-end", gap:"0.5rem", marginBottom:"1rem" }}>
      <div style={{ width:"28px", height:"28px", borderRadius:"50%", background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.7rem", fontWeight:700, color:"#030d0d", flexShrink:0 }}>V</div>
      <div style={{ padding:"0.75rem 1rem", borderRadius:"12px 12px 12px 2px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", display:"flex", alignItems:"center", gap:"5px" }}>
        {[0, 150, 300].map((delay, i) => (
          <span key={i} style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#2dd4bf", display:"inline-block", animation:`bounce 1s infinite`, animationDelay:`${delay}ms` }} />
        ))}
      </div>
    </div>
  )
}

export default TypingIndicator