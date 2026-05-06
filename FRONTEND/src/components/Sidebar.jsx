const Sidebar = ({ isOpen, onNewChat, chatHistory }) => {
  return (
    <div style={{ position:"fixed", left:0, top:"60px", height:"calc(100vh - 60px)", width:"240px", zIndex:40, transform:isOpen?"translateX(0)":"translateX(-100%)", transition:"transform 0.3s ease", background:"rgba(3,13,13,0.95)", backdropFilter:"blur(20px)", borderRight:"1px solid rgba(45,212,191,0.08)" }}>
      <div style={{ padding:"1rem" }}>
        <button onClick={onNewChat} style={{ width:"100%", padding:"0.6rem 1rem", background:"rgba(45,212,191,0.08)", border:"1px solid rgba(45,212,191,0.2)", borderRadius:"6px", color:"#2dd4bf", fontSize:"0.78rem", fontWeight:600, letterSpacing:"2px", textTransform:"uppercase", cursor:"pointer", transition:"all 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.background="rgba(45,212,191,0.15)"}
          onMouseLeave={e => e.currentTarget.style.background="rgba(45,212,191,0.08)"}>
          + New Chat
        </button>
      </div>
      <div style={{ height:"1px", background:"rgba(45,212,191,0.06)", margin:"0 1rem" }} />
      <div style={{ padding:"1rem", overflowY:"auto", height:"calc(100% - 80px)" }}>
        {chatHistory.length === 0 ? (
          <p style={{ color:"#1a4a45", fontSize:"0.75rem", textAlign:"center", marginTop:"1rem" }}>No chats yet</p>
        ) : (
          chatHistory.map((chat, i) => (
            <div key={i} style={{ padding:"0.6rem 0.8rem", borderRadius:"6px", color:"#2a6e68", fontSize:"0.78rem", cursor:"pointer", transition:"all 0.2s", marginBottom:"0.3rem", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}
              onMouseEnter={e => { e.currentTarget.style.background="rgba(45,212,191,0.06)"; e.currentTarget.style.color="#2dd4bf"; }}
              onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.color="#2a6e68"; }}>
              {chat}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Sidebar