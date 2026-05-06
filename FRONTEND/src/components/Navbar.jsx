const Navbar = ({ toggleSidebar }) => {
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, height:"60px", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 2rem", background:"rgba(3,13,13,0.9)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(45,212,191,0.08)" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
        <button onClick={toggleSidebar} style={{ background:"transparent", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", gap:"5px", padding:"4px" }}>
          <span style={{ width:"20px", height:"1.5px", background:"#2dd4bf", display:"block", borderRadius:"2px" }} />
          <span style={{ width:"20px", height:"1.5px", background:"#2dd4bf", display:"block", borderRadius:"2px" }} />
          <span style={{ width:"20px", height:"1.5px", background:"#2dd4bf", display:"block", borderRadius:"2px" }} />
        </button>
        <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"1.1rem", fontWeight:700, letterSpacing:"4px", background:"linear-gradient(90deg,#2dd4bf,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>VELORA</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
        <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#2dd4bf", display:"inline-block", animation:"pulse 2s infinite" }} />
        <span style={{ fontSize:"0.72rem", color:"#2dd4bf", letterSpacing:"1px" }}>Online</span>
      </div>
    </nav>
  )
}

export default Navbar