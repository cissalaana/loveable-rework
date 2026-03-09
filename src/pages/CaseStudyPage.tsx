import { useParams, useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS } from "@/data/projects";

const CaseStudyPage = () => {
  useReveal();
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div style={{ padding: "200px 48px", textAlign: "center" }}>
        <h1 className="font-display text-[3rem] text-foreground">Projeto não encontrado</h1>
        <button className="btn-fill" onClick={() => navigate("/projetos")} style={{ marginTop: 32, border: "1.5px solid currentColor", background: "transparent", padding: "14px 32px", borderRadius: 50 }}>
          <span className="font-body text-[0.82rem] font-semibold text-foreground">← Voltar para Projetos</span>
        </button>
      </div>
    );
  }

  const currentIdx = PROJECTS.findIndex((p) => p.id === id);
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  return (
    <div className="page-enter">
      {/* Hero */}
      <section style={{ padding: "160px 48px 80px", background: project.color, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 10% 90%, rgba(255,255,255,0.22) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(255,255,255,0.14) 0%, transparent 50%)`, pointerEvents: "none" }}/>
        <span className="float-a" style={{ position: "absolute", top: "25%", right: "10%", color: "rgba(255,255,255,0.5)", fontSize: 28, pointerEvents: "none" }}>✦</span>
        <span className="float-b" style={{ position: "absolute", bottom: "25%", left: "8%", color: "rgba(255,255,255,0.35)", fontSize: 16, pointerEvents: "none" }}>★</span>

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
            <button onClick={() => navigate("/projetos")} className="font-body text-[0.78rem] font-medium tracking-wider" style={{ background: "none", border: "none", padding: 0, color: "rgba(44,24,16,0.6)" }}>
              Projetos
            </button>
            <span style={{ color: "rgba(44,24,16,0.4)" }}>→</span>
            <span className="font-body text-[0.78rem] font-medium" style={{ color: "rgba(44,24,16,0.8)" }}>
              {project.title}
            </span>
          </div>

          <span style={{ fontSize: "3rem", display: "block", marginBottom: 24 }}>{project.emoji}</span>
          <h1 className="font-display font-semibold tracking-tight text-foreground leading-[1.05]" style={{ fontSize: "clamp(2.4rem,5.5vw,4.5rem)", marginBottom: 20 }}>
            {project.title}
          </h1>
          <p className="font-body text-[1.1rem] font-light leading-[1.7]" style={{ color: "rgba(44,24,16,0.7)", maxWidth: 580 }}>
            {project.subtitle}
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
            {[
              { l: "Categoria", v: project.category },
              { l: "Ano", v: project.year },
              { l: "Papel", v: project.role },
              { l: "Duração", v: project.duration },
              { l: "Equipe", v: project.team },
            ].map(({ l, v }) => (
              <div key={l} style={{
                padding: "12px 22px",
                background: "rgba(255,255,255,0.35)", backdropFilter: "blur(8px)",
                borderRadius: 50, display: "flex", flexDirection: "column", gap: 2,
              }}>
                <span className="font-body text-[0.62rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "rgba(44,24,16,0.5)" }}>{l}</span>
                <span className="font-body text-[0.85rem] font-medium text-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-pad bg-background" style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">Overview</p>
          <p className="reveal reveal-d1 font-body text-[1.15rem] leading-[1.85] font-light mb-16" style={{ color: "#5A4A44" }}>
            {project.overview}
          </p>

          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <div className="reveal reveal-d1" style={{ padding: "40px 36px", borderRadius: 12, background: "rgba(235,165,165,0.08)", border: "1px solid rgba(235,165,165,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#EBA5A5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🎯</div>
                <p className="font-body text-[0.7rem] font-semibold tracking-[0.18em] uppercase" style={{ color: "#C47878" }}>Problema</p>
              </div>
              <p className="font-body text-[0.95rem] leading-[1.8] font-light" style={{ color: "#5A4A44" }}>
                {project.problem}
              </p>
            </div>

            <div className="reveal reveal-d2" style={{ padding: "40px 36px", borderRadius: 12, background: "rgba(164,189,168,0.1)", border: "1px solid rgba(164,189,168,0.25)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#A4BDA8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>💡</div>
                <p className="font-body text-[0.7rem] font-semibold tracking-[0.18em] uppercase" style={{ color: "#6A9470" }}>Solução</p>
              </div>
              <p className="font-body text-[0.95rem] leading-[1.8] font-light" style={{ color: "#5A4A44" }}>
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="section-pad bg-foreground relative overflow-hidden" style={{ padding: "96px 48px" }}>
        <div style={{ position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", pointerEvents: "none", background: "radial-gradient(circle, rgba(235,165,165,0.08) 0%, transparent 70%)" }}/>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px] text-center">
            Resultados & Métricas
          </p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-background text-center mb-16" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Impacto mensurável
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 20 }}>
            {project.metrics.map((m, i) => (
              <div key={m.label} className={`reveal reveal-d${i + 1}`} style={{
                padding: "36px 28px", textAlign: "center",
                background: "rgba(250,245,240,0.05)",
                border: "1px solid rgba(250,245,240,0.1)", borderRadius: 12,
              }}>
                <p className="font-display text-[3rem] font-semibold text-rose leading-none mb-[10px]">{m.value}</p>
                <p className="font-body text-[0.82rem] font-semibold text-background mb-[6px]">{m.label}</p>
                <p className="font-body text-[0.72rem] font-light" style={{ color: "rgba(250,245,240,0.4)" }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section-pad bg-background" style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">
            Processo de Design
          </p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-14" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Como chegamos lá
          </h2>
          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {project.process.map((step, i) => (
              <div key={step.step} className={`reveal reveal-d${(i % 3) + 1} process-step`} style={{
                padding: "32px 28px", borderRadius: 12,
                background: "#fff", border: "1px solid rgba(44,24,16,0.07)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <span className="font-display text-[1.1rem] font-semibold text-rose opacity-60">{step.step}</span>
                  <span style={{ fontSize: "1.4rem" }}>{step.icon}</span>
                </div>
                <h3 className="font-display text-[1.3rem] font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-[0.85rem] text-muted-foreground leading-[1.7] font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section-pad" style={{ padding: "96px 48px", background: "#F7F0EA" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">Galeria</p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-12" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Telas & Mockups
          </h2>
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "auto auto", gap: 16 }}>
            {project.gallery.map((color, i) => (
              <div key={i} className="gallery-item reveal" style={{
                height: i === 0 ? 320 : i === 3 ? 320 : 200,
                gridColumn: i === 0 ? "span 2" : i === 3 ? "span 2" : "span 1",
                background: color,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative",
              }}>
                <div style={{ width: "100%", height: "100%", position: "absolute", backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)` }}/>
                <div className="font-body text-[0.72rem] font-medium tracking-[0.08em] uppercase" style={{
                  border: "1.5px dashed rgba(255,255,255,0.4)", borderRadius: 8,
                  padding: "16px 24px", color: "rgba(255,255,255,0.7)",
                  zIndex: 1, position: "relative",
                }}>
                  Mockup {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders & Metodologias */}
      <section className="section-pad bg-background" style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-6">
                Stakeholders Envolvidos
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {project.stakeholders.map((s, i) => (
                  <div key={s} className={`reveal reveal-d${i + 1}`} style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "16px 20px", background: "#fff",
                    border: "1px solid rgba(44,24,16,0.07)", borderRadius: 8,
                  }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EBA5A5", flexShrink: 0 }}/>
                    <span className="font-body text-[0.88rem] font-normal" style={{ color: "#5A4A44" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="reveal font-body text-[0.72rem] font-medium text-meadow tracking-[0.2em] uppercase mb-6">
                Metodologias Aplicadas
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {project.methodologies.map((m, i) => (
                  <span key={m} className={`reveal reveal-d${(i % 4) + 1}`} style={{
                    padding: "10px 20px",
                    border: "1.5px solid rgba(164,189,168,0.4)",
                    borderRadius: 50, fontSize: "0.82rem",
                    fontWeight: 500, color: "#6A9470",
                    background: "rgba(164,189,168,0.08)",
                  }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximo projeto */}
      <section className="bg-foreground relative overflow-hidden" style={{ padding: "80px 48px" }}>
        <div style={{ position: "absolute", inset: 0, background: nextProject.color, opacity: 0.08, pointerEvents: "none" }}/>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 28, position: "relative", zIndex: 1 }}>
          <div>
            <p className="font-body text-[0.7rem] font-medium tracking-[0.18em] uppercase mb-[14px]" style={{ color: "rgba(250,245,240,0.4)" }}>
              Próximo Projeto
            </p>
            <h3 className="font-display font-semibold text-background" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
              {nextProject.title}
            </h3>
            <p className="font-body text-[0.88rem] font-light mt-2" style={{ color: "rgba(250,245,240,0.5)" }}>
              {nextProject.subtitle}
            </p>
          </div>
          <button className="btn-fill font-body text-[0.82rem] font-semibold tracking-[0.07em]" onClick={() => navigate(`/projetos/${nextProject.id}`)} style={{
            border: "1.5px solid #FAF5F0", background: "transparent",
            padding: "16px 36px", borderRadius: 50, color: "#FAF5F0",
          }}>
            <span>Ver projeto →</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
