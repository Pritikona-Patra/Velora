import { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

const WORDS = ["anything.", "everything.", "your questions.", "the unknown."]

export default function LandingPage() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeFeature, setActiveFeature] = useState(0)
  const heroRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const word = WORDS[wordIndex]
    let timeout
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45)
    } else {
      setDeleting(false)
      setWordIndex((wordIndex + 1) % WORDS.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  const features = [
    { icon: "⚡", title: "Instant Responses", desc: "Sub-second replies powered by Groq's inference infrastructure. No waiting, no loading bars — just instant conversation." },
    { icon: "🧠", title: "Truly Intelligent", desc: "Llama 3.3-70B understands context, nuance, and complexity. Ask follow-ups, change topics, dig deep — Velora keeps up." },
    { icon: "💬", title: "Remembers Everything", desc: "Full conversation memory throughout your session. No repeating yourself, no lost context — just natural dialogue." },
    { icon: "🔒", title: "Private by Design", desc: "No conversation logs, no data storage. What you say stays between you and Velora." },
  ]

  const dots = Array.from({ length: 40 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }))

  return (
    <div style={{ background: "#050b0b", color: "#e0f0ee", fontFamily: "'Space Grotesk', sans-serif", overflowX: "hidden" }}>
      <style>{`
        @keyframes twinkle { 0%,100%{opacity:0.1} 50%{opacity:0.6} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes counterRotate { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes pulseRing { 0%{transform:scale(1);opacity:0.4} 100%{transform:scale(1.8);opacity:0} }

        .nav-link { color:#4a9e98; text-decoration:none; font-size:0.8rem; letter-spacing:1px; transition:color 0.2s; }
        .nav-link:hover { color:#2dd4bf; }
        .feature-tab:hover { border-color:rgba(45,212,191,0.3) !important; background:rgba(45,212,191,0.05) !important; }
        .feature-tab.active { border-color:rgba(45,212,191,0.4) !important; background:rgba(45,212,191,0.08) !important; }
        .footer-link { color:#3a7a74; text-decoration:none; font-size:0.75rem; transition:color 0.2s; }
        .footer-link:hover { color:#2dd4bf; }
        .github-btn:hover { background:rgba(45,212,191,0.15) !important; color:#2dd4bf !important; }
      `}</style>

      {/* CURSOR GLOW */}
      <div style={{ position:"fixed", width:"300px", height:"300px", borderRadius:"50%", background:`radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)`, left: mousePos.x - 150, top: mousePos.y - 150, pointerEvents:"none", zIndex:9999, transition:"left 0.1s, top 0.1s" }} />

      {/* NAVBAR */}
      <nav style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1.2rem 3rem", position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(5,11,11,0.8)", backdropFilter:"blur(24px)", borderBottom:"1px solid rgba(45,212,191,0.06)" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
          <div style={{ width:"28px", height:"28px", borderRadius:"6px", background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.75rem", fontWeight:800, color:"#030d0d" }}>V</div>
          <span style={{ fontSize:"1rem", fontWeight:700, letterSpacing:"3px", color:"#e0f0ee" }}>VELORA</span>
        </div>
        <a href="https://github.com/Pritikona-Patra/Velora" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
        <button onClick={() => navigate("/chat")}
          style={{ background:"transparent", color:"#2dd4bf", border:"1px solid rgba(45,212,191,0.35)", padding:"0.55rem 1.4rem", fontSize:"0.78rem", fontWeight:600, letterSpacing:"1.5px", cursor:"pointer", borderRadius:"6px", transition:"all 0.2s", fontFamily:"'Space Grotesk',sans-serif" }}
          onMouseEnter={e => { e.currentTarget.style.background="rgba(45,212,191,0.1)"; e.currentTarget.style.boxShadow="0 0 20px rgba(45,212,191,0.15)"; }}
          onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.boxShadow="none"; }}>
          Open Chat →
        </button>
      </nav>

      {/* HERO */}
      <section ref={heroRef} style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", padding:"8rem 2rem 4rem", textAlign:"center" }}>

        {/* Animated dot field */}
        {dots.map((dot, i) => (
          <div key={i} style={{ position:"absolute", left:`${dot.x}%`, top:`${dot.y}%`, width:`${dot.size}px`, height:`${dot.size}px`, borderRadius:"50%", background:"#2dd4bf", animation:`twinkle ${dot.duration}s ease-in-out infinite`, animationDelay:`${dot.delay}s`, opacity:0.1 }} />
        ))}

        {/* Central rotating rings */}
        <div style={{ position:"absolute", width:"500px", height:"500px", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
          <div style={{ position:"absolute", inset:0, borderRadius:"50%", border:"1px solid rgba(45,212,191,0.06)", animation:"rotateSlow 20s linear infinite" }}>
            <div style={{ position:"absolute", top:"-4px", left:"50%", width:"8px", height:"8px", borderRadius:"50%", background:"#2dd4bf", transform:"translateX(-50%)", boxShadow:"0 0 10px rgba(45,212,191,0.8)" }} />
          </div>
          <div style={{ position:"absolute", inset:"60px", borderRadius:"50%", border:"1px solid rgba(45,212,191,0.04)", animation:"counterRotate 15s linear infinite" }}>
            <div style={{ position:"absolute", bottom:"-4px", left:"50%", width:"6px", height:"6px", borderRadius:"50%", background:"#06b6d4", transform:"translateX(-50%)", boxShadow:"0 0 8px rgba(6,182,212,0.8)" }} />
          </div>
          <div style={{ position:"absolute", inset:"120px", borderRadius:"50%", border:"1px solid rgba(45,212,191,0.03)", animation:"rotateSlow 10s linear infinite reverse" }} />
        </div>

        {/* Pulse rings */}
        <div style={{ position:"absolute", width:"200px", height:"200px", top:"50%", left:"50%", transform:"translate(-50%,-50%)", borderRadius:"50%", border:"1px solid rgba(45,212,191,0.15)", animation:"pulseRing 3s ease-out infinite" }} />
        <div style={{ position:"absolute", width:"200px", height:"200px", top:"50%", left:"50%", transform:"translate(-50%,-50%)", borderRadius:"50%", border:"1px solid rgba(45,212,191,0.1)", animation:"pulseRing 3s ease-out infinite", animationDelay:"1s" }} />

        {/* Content */}
        <div style={{ position:"relative", zIndex:2, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(30px)", transition:"all 0.9s ease", maxWidth:"720px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", marginBottom:"2rem", padding:"0.35rem 1rem", border:"1px solid rgba(45,212,191,0.2)", borderRadius:"999px", background:"rgba(45,212,191,0.04)", fontSize:"0.72rem", color:"#2dd4bf", letterSpacing:"2px" }}>
            <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#2dd4bf", display:"inline-block", animation:"blink 2s infinite" }} />
            POWERED BY LLAMA 3.3 · 70B
          </div>

          <h1 style={{ fontSize:"clamp(2.5rem,6vw,5rem)", fontWeight:700, lineHeight:1.1, marginBottom:"1.5rem", letterSpacing:"-2px" }}>
            <span style={{ display:"block", color:"#e0f0ee" }}>Your AI that knows</span>
            <span style={{ display:"block", background:"linear-gradient(135deg,#2dd4bf,#06b6d4,#818cf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", minHeight:"1.2em" }}>
              {displayed}<span style={{ animation:"blink 0.8s infinite", WebkitTextFillColor:"#2dd4bf" }}>|</span>
            </span>
          </h1>

          <p style={{ fontSize:"1rem", color:"#4a9e98", lineHeight:1.8, maxWidth:"500px", margin:"0 auto 2.5rem", fontWeight:400 }}>
            Not just a chatbot. Velora is a thinking partner — fast, contextual, and genuinely helpful. Powered by state-of-the-art AI.
          </p>

          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => navigate("/chat")}
              style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", color:"#030d0d", border:"none", padding:"0.9rem 2.5rem", fontSize:"0.88rem", fontWeight:700, letterSpacing:"1px", cursor:"pointer", borderRadius:"8px", transition:"all 0.2s", fontFamily:"'Space Grotesk',sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 30px rgba(45,212,191,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
              Start chatting free
            </button>
            <button className="github-btn"
              style={{ background:"transparent", color:"#4a9e98", border:"1px solid rgba(45,212,191,0.12)", padding:"0.9rem 2rem", fontSize:"0.88rem", cursor:"pointer", borderRadius:"8px", transition:"all 0.2s", fontFamily:"'Space Grotesk',sans-serif" }}>
              View on GitHub
            </button>
          </div>

          {/* Social proof strip */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"2rem", marginTop:"3rem", paddingTop:"2rem", borderTop:"1px solid rgba(45,212,191,0.06)" }}>
            {[{ val:"70B", label:"Parameters" }, { val:"< 1s", label:"Response time" }, { val:"Free", label:"Always" }].map((s, i) => (
              <div key={i} style={{ textAlign:"center" }}>
                <div style={{ fontSize:"1.2rem", fontWeight:700, background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{s.val}</div>
                <div style={{ fontSize:"0.65rem", color:"#3a7a74", letterSpacing:"1px", marginTop:"2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES — Interactive tabs */}
      <section style={{ padding:"6rem 3rem", maxWidth:"1000px", margin:"0 auto" }}>
        <div style={{ marginBottom:"3rem" }}>
          <p style={{ fontSize:"0.7rem", letterSpacing:"3px", color:"#4a9e98", textTransform:"uppercase", marginBottom:"0.8rem" }}>What makes Velora different</p>
          <h2 style={{ fontSize:"2.5rem", fontWeight:700, letterSpacing:"-1px", color:"#e0f0ee", lineHeight:1.2 }}>Built for real<br /><span style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>conversations.</span></h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"start" }}>
          {/* Tab list */}
          <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
            {features.map((f, i) => (
              <div key={i} className={`feature-tab ${activeFeature === i ? "active" : ""}`}
                onClick={() => setActiveFeature(i)}
                style={{ padding:"1rem 1.2rem", borderRadius:"10px", border:"1px solid rgba(45,212,191,0.08)", cursor:"pointer", transition:"all 0.2s", display:"flex", alignItems:"center", gap:"1rem" }}>
                <span style={{ fontSize:"1.2rem" }}>{f.icon}</span>
                <span style={{ fontSize:"0.88rem", fontWeight:600, color: activeFeature === i ? "#2dd4bf" : "#3a7a74" }}>{f.title}</span>
                {activeFeature === i && <span style={{ marginLeft:"auto", color:"#2dd4bf", fontSize:"0.8rem" }}>→</span>}
              </div>
            ))}
          </div>

          {/* Feature detail */}
          <div style={{ padding:"2rem", background:"rgba(45,212,191,0.04)", border:"1px solid rgba(45,212,191,0.1)", borderRadius:"14px", minHeight:"180px" }}>
            <div style={{ fontSize:"2.5rem", marginBottom:"1rem" }}>{features[activeFeature].icon}</div>
            <h3 style={{ fontSize:"1.2rem", fontWeight:700, color:"#e0f0ee", marginBottom:"0.8rem" }}>{features[activeFeature].title}</h3>
            <p style={{ fontSize:"0.88rem", color:"#4a9e98", lineHeight:1.8 }}>{features[activeFeature].desc}</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding:"6rem 3rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", width:"600px", height:"600px", borderRadius:"50%", background:"radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }} />
        <div style={{ position:"relative", zIndex:1 }}>
          <h2 style={{ fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:700, letterSpacing:"-1.5px", marginBottom:"1rem", lineHeight:1.1 }}>
            <span style={{ color:"#e0f0ee" }}>Ready to talk to</span><br />
            <span style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4,#818cf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>something smarter?</span>
          </h2>
          <p style={{ color:"#4a9e98", fontSize:"0.95rem", marginBottom:"2.5rem", lineHeight:1.7 }}>No signup. No credit card. Just open Velora and start talking.</p>
          <button onClick={() => navigate("/chat")}
            style={{ background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", color:"#030d0d", border:"none", padding:"1rem 3rem", fontSize:"0.95rem", fontWeight:700, cursor:"pointer", borderRadius:"8px", transition:"all 0.2s", fontFamily:"'Space Grotesk',sans-serif" }}
            onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(45,212,191,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
            Start for free →
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding:"1.5rem 3rem", borderTop:"1px solid rgba(45,212,191,0.06)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
          <div style={{ width:"22px", height:"22px", borderRadius:"4px", background:"linear-gradient(135deg,#2dd4bf,#06b6d4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.6rem", fontWeight:800, color:"#030d0d" }}>V</div>
          <span style={{ fontSize:"0.85rem", fontWeight:700, letterSpacing:"2px", color:"#3a7a74" }}>VELORA</span>
        </div>
        <p style={{ fontSize:"0.72rem", color:"#2a6e68", margin:0 }}>© 2026 Velora Inc. All rights reserved.</p>
        <a href="https://github.com/Pritikona-Patra/Velora" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
      </footer>
    </div>
  )
}