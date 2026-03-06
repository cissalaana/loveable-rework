import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS } from "@/data/projects";
import PageHeader from "@/components/PageHeader";

const ProjectsPage = () => {
  useReveal();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("Todos");
  const categories = ["Todos", "Mobile", "Web", "Sistema"];

  const filtered = filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="page-enter">
      <PageHeader
        label="Portfólio"
        title="Projetos"
        accent="selecionados"
        subtitle="Uma coleção de trabalhos que combinam pesquisa aprofundada, design estratégico e resultados mensuráveis."
      />

      <section style={{ padding: "72px 48px 120px" }} className="section-pad">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="reveal filter-bar" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`skill-tag ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "9px 22px",
                  border: `1.5px solid ${filter === cat ? "#EBA5A5" : "rgba(44,24,16,0.15)"}`,
                  borderRadius: 50, fontSize: "0.8rem",
                  fontWeight: 500,
                  color: filter === cat ? "#2C1810" : "#9A8A84",
                  background: filter === cat ? "#F5CEC7" : "transparent",
                  transition: "all 0.3s",
                }}
              >
                {cat}
              </button>
            ))}
            <span className="font-body text-[0.78rem] text-muted-foreground font-light" style={{ marginLeft: "auto", alignSelf: "center" }}>
              {filtered.length} projeto{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="projects-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(min(460px,100%),1fr))",
            gap: 28,
          }}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className={`reveal reveal-d${(i % 4) + 1} project-card`}
                onClick={() => navigate(`/projetos/${p.id}`)}
                style={{
                  background: "#fff", borderRadius: 12, overflow: "hidden",
                  border: "1px solid rgba(44,24,16,0.07)", cursor: "pointer",
                }}
              >
                <div style={{
                  height: 280, background: p.color,
                  position: "relative", overflow: "hidden",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div className="card-img" style={{
                    position: "absolute", inset: 0,
                    backgroundImage: `radial-gradient(circle at 25% 75%, rgba(255,255,255,0.18) 0%, transparent 55%),
                                     radial-gradient(circle at 75% 25%, rgba(255,255,255,0.12) 0%, transparent 55%)`,
                  }}/>
                  <div style={{
                    width: 80, height: 80, borderRadius: 10,
                    border: "2px solid rgba(255,255,255,0.38)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "2.1rem", position: "relative", zIndex: 1,
                  }}>
                    {p.emoji}
                  </div>
                  <div className="card-overlay" style={{
                    position: "absolute", inset: 0, background: "rgba(44,24,16,0.45)",
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 8,
                  }}>
                    <span className="font-body text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-background">
                      Ver Case Study →
                    </span>
                  </div>
                </div>

                <div style={{ padding: "28px 30px 26px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span className="font-body text-[0.68rem] font-medium tracking-[0.1em] uppercase" style={{ color: "#C47878" }}>
                      {p.category} · {p.year}
                    </span>
                    <span className="font-body text-[0.72rem]" style={{ color: "#BCADA8" }}>
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.55rem] font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body text-[0.875rem] text-muted-foreground leading-[1.65] font-light mb-5">
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span key={t} className="font-body font-medium" style={{
                        padding: "5px 14px", border: "1px solid rgba(235,165,165,0.4)",
                        borderRadius: 50, fontSize: "0.7rem", color: "#C47878",
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
