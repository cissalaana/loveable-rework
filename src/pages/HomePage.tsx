import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS } from "@/data/projects";

const HomeProjectCard = ({ project, delay }: { project: typeof PROJECTS[0]; delay: number }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`reveal reveal-d${delay} project-card`}
      onClick={() => navigate(`/projetos/${project.id}`)}
      style={{
        background: "#fff", borderRadius: 12, overflow: "hidden",
        border: "1px solid rgba(44,24,16,0.07)", cursor: "pointer",
      }}
    >
      <div style={{
        height: 240, background: project.color,
        position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div className="card-img" style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}/>
        <div style={{
          width: 72, height: 72, borderRadius: 8,
          border: "2px solid rgba(255,255,255,0.35)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.9rem", position: "relative", zIndex: 1,
        }}>
          {project.emoji}
        </div>
        <div className="card-overlay" style={{
          position: "absolute", inset: 0,
          background: "rgba(44,24,16,0.45)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span className="font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-background">
            Ver Case Study &nbsp;→
          </span>
        </div>
      </div>
      <div style={{ padding: "26px 28px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="font-body text-[0.68rem] font-medium tracking-[0.12em] uppercase" style={{ color: "#C47878" }}>
            {project.category} · {project.year}
          </span>
        </div>
        <h3 className="font-display text-[1.45rem] font-semibold tracking-tight text-foreground mb-2">
          {project.title}
        </h3>
        <p className="font-body text-[0.85rem] text-muted-foreground leading-[1.65] font-light mb-[18px]">
          {project.subtitle}
        </p>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          {project.tags.map((t) => (
            <span key={t} style={{
              padding: "4px 13px",
              border: "1px solid rgba(235,165,165,0.4)",
              borderRadius: 50, fontSize: "0.7rem",
            }} className="font-body font-medium" >
              <span style={{ color: "#C47878" }}>{t}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  useReveal();
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay = 0) => ({
    opacity: ready ? 1 : 0,
    transform: ready ? "none" : "translateY(28px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="hero-pad" style={{
        minHeight: "100vh", padding: "0 48px",
        display: "flex", flexDirection: "column", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "18%", right: "6%", width: 360, height: 360, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(235,165,165,0.2) 0%, transparent 70%)" }}/>
        <div style={{ position: "absolute", bottom: "22%", left: "3%", width: 240, height: 240, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(164,189,168,0.16) 0%, transparent 70%)" }}/>
        <span className="float-a" style={{ position: "absolute", top: "22%", right: "18%", color: "#FFCA8C", fontSize: 22, opacity: 0.8, pointerEvents: "none" }}>✦</span>
        <span className="float-b" style={{ position: "absolute", top: "65%", right: "28%", color: "#EBA5A5", fontSize: 14, opacity: 0.6, pointerEvents: "none" }}>★</span>
        <span className="float-a" style={{ position: "absolute", top: "45%", left: "6%", color: "#A4BDA8", fontSize: 9, opacity: 0.5, pointerEvents: "none" }}>●</span>
        <span className="float-b" style={{ position: "absolute", top: "30%", left: "42%", color: "#FABB92", fontSize: 11, opacity: 0.4, pointerEvents: "none" }}>✦</span>

        <div style={{ maxWidth: 920, paddingTop: 88, position: "relative", zIndex: 1 }}>
          <div style={fade(0)}>
            <p className="font-body text-[0.78rem] font-medium tracking-[0.18em] uppercase text-rose mb-7">
              ✦ &nbsp;Oii, tudo bem? Me chamo...
            </p>
          </div>

          <div style={fade(0.14)}>
            <div style={{
              border: "1.5px solid rgba(44,24,16,0.1)", borderRadius: 12,
              padding: "44px 52px", position: "relative",
              background: "rgba(255,255,255,0.45)", backdropFilter: "blur(6px)",
            }}>
              {[
                { top: 14, left: 14, borderTop: "2px solid #EBA5A5", borderLeft: "2px solid #EBA5A5", borderTopLeftRadius: 4 },
                { top: 14, right: 14, borderTop: "2px solid #FFCA8C", borderRight: "2px solid #FFCA8C", borderTopRightRadius: 4 },
                { bottom: 14, left: 14, borderBottom: "2px solid #FFCA8C", borderLeft: "2px solid #FFCA8C", borderBottomLeftRadius: 4 },
                { bottom: 14, right: 14, borderBottom: "2px solid #EBA5A5", borderRight: "2px solid #EBA5A5", borderBottomRightRadius: 4 },
              ].map((s, i) => <div key={i} style={{ position: "absolute", width: 22, height: 22, ...s } as React.CSSProperties}/>)}

              <h1 className="hero-headline font-display font-semibold leading-[1.16] tracking-tight text-foreground" style={{
                fontSize: "clamp(2.2rem,4.2vw,4rem)", margin: 0,
              }}>
                <em className="italic text-rose">Ana Letícia</em>
                {" "}e sou Product Designer e crio experiências mais humanas com{" "}
                <span style={{
                  background: "linear-gradient(118deg, #EBA5A5 0%, #FABB92 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  alto impacto social
                </span>
                {" "}orientado por dados
              </h1>
            </div>
          </div>

          <div style={{ ...fade(0.3), marginTop: 52, display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
            <button
              className="btn-fill font-body text-[0.82rem] font-semibold tracking-[0.07em] text-foreground"
              onClick={() => navigate("/projetos")}
              style={{
                border: "1.5px solid currentColor", background: "transparent",
                padding: "14px 36px", borderRadius: 50,
              }}
            >
              <span>Ver Projetos</span>
            </button>
            <Link to="/contato" className="font-body text-[0.85rem] text-rose no-underline font-medium flex items-center gap-[6px]">
              Fale comigo &nbsp;→
            </Link>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 44, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: ready ? 0.45 : 0, transition: "opacity 1s ease 1s",
        }}>
          <span className="text-[0.65rem] tracking-[0.18em] uppercase text-rose">scroll</span>
          <div className="pulse-soft" style={{ width: 1, height: 44, background: "linear-gradient(to bottom, #EBA5A5, transparent)" }}/>
        </div>
      </section>

      {/* Projetos selecionados */}
      <section style={{ padding: "120px 48px" }} className="section-pad">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal" style={{ marginBottom: 64, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <div>
              <p className="font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[14px]">
                Portfólio selecionado
              </p>
              <h2 className="font-display font-semibold tracking-tight text-foreground" style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                Alguns dos meus projetos!!
              </h2>
            </div>
            <button className="btn-fill font-body text-[0.78rem] font-semibold tracking-[0.07em] text-foreground" onClick={() => navigate("/projetos")} style={{
              border: "1.5px solid currentColor", background: "transparent",
              padding: "12px 28px", borderRadius: 50,
            }}>
              <span>Ver todos →</span>
            </button>
          </div>

          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(440px,100%),1fr))", gap: 24 }}>
            {PROJECTS.slice(0, 4).map((p, i) => <HomeProjectCard key={p.id} project={p} delay={i + 1}/>)}
          </div>
        </div>
      </section>

      {/* About mini */}
      <section className="section-pad bg-foreground relative overflow-hidden" style={{ padding: "100px 48px" }}>
        <div style={{ position: "absolute", top: "-80px", right: "-60px", width: 420, height: 420, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(235,165,165,0.1) 0%, transparent 70%)" }}/>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
          <div style={{ maxWidth: 560 }}>
            <p className="reveal font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-rose mb-5">
              Sobre Mim
            </p>
            <h2 className="reveal reveal-d1 font-display font-semibold text-background leading-[1.2] mb-6" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
              Design com propósito,{" "}
              <em className="text-rose">impacto real</em>
            </h2>
            <p className="reveal reveal-d2 font-body text-[0.95rem] leading-[1.85] font-light mb-9" style={{ color: "rgba(250,245,240,0.6)" }}>
              Sou Product Designer com paixão por criar experiências que conectam pessoas a soluções significativas. Trabalho com dados como guia, empatia como bússola e criatividade como motor.
            </p>
            <div className="reveal reveal-d3">
              <button className="btn-fill-peach btn-fill font-body text-[0.82rem] font-semibold tracking-[0.07em]" onClick={() => navigate("/sobre")} style={{
                border: "1.5px solid #FABB92", background: "transparent",
                padding: "14px 32px", borderRadius: 50, color: "#FABB92",
              }}>
                <span>Saiba mais sobre mim</span>
              </button>
            </div>
          </div>
          <div className="reveal reveal-d2" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { n: "4+", l: "Anos de experiência" },
              { n: "30+", l: "Projetos entregues" },
              { n: "12", l: "Prêmios de design" },
              { n: "98%", l: "Clientes satisfeitos" },
            ].map(({ n, l }) => (
              <div key={l} style={{
                padding: "28px 32px", background: "rgba(250,245,240,0.05)",
                border: "1px solid rgba(250,245,240,0.1)", borderRadius: 10, textAlign: "center",
                minWidth: 130,
              }}>
                <p className="font-display text-[2.4rem] font-semibold text-background mb-[6px]">{n}</p>
                <p className="font-body text-[0.72rem] font-normal tracking-wider" style={{ color: "rgba(250,245,240,0.45)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: "120px 48px", textAlign: "center" }} className="section-pad">
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">
            Vamos colaborar
          </p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-foreground leading-[1.15] mb-9" style={{ fontSize: "clamp(2rem,5vw,3.4rem)" }}>
            Tem um projeto em mente?{" "}
            <em className="text-rose">Me conta!</em>
          </h2>
          <div className="reveal reveal-d2">
            <button className="btn-fill font-body text-[0.85rem] font-semibold tracking-[0.08em] text-foreground" onClick={() => navigate("/contato")} style={{
              border: "1.5px solid currentColor", background: "transparent",
              padding: "16px 44px", borderRadius: 50,
            }}>
              <span>Entrar em contato</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
