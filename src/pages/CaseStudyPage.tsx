import { useState, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import { PROJECTS } from "@/data/projects";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Returns true if a hex color is dark
const isDarkColor = (hex: string) => {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
};

const CaseStudyPage = () => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
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
      {(() => {
        const dark = isDarkColor(project.color);
        const textPrimary = dark ? "#FAF5F0" : "rgba(44,24,16,1)";
        const textSecondary = dark ? "rgba(250,245,240,0.6)" : "rgba(44,24,16,0.6)";
        const textTertiary = dark ? "rgba(250,245,240,0.8)" : "rgba(44,24,16,0.8)";
        const textSub = dark ? "rgba(250,245,240,0.7)" : "rgba(44,24,16,0.7)";
        const pillBg = dark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.35)";
        const pillLabel = dark ? "rgba(250,245,240,0.5)" : "rgba(44,24,16,0.5)";

        return (
          <section style={{ padding: "160px 48px 80px", background: project.color, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 10% 90%, rgba(255,255,255,0.22) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(255,255,255,0.14) 0%, transparent 50%)`, pointerEvents: "none" }}/>
            <span className="float-a" style={{ position: "absolute", top: "25%", right: "10%", color: "rgba(255,255,255,0.5)", fontSize: 28, pointerEvents: "none" }}>✦</span>
            <span className="float-b" style={{ position: "absolute", bottom: "25%", left: "8%", color: "rgba(255,255,255,0.35)", fontSize: 16, pointerEvents: "none" }}>★</span>

            <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
                <button onClick={() => navigate("/projetos")} className="font-body text-[0.78rem] font-medium tracking-wider" style={{ background: "none", border: "none", padding: 0, color: textSecondary, cursor: "pointer" }}>
                  Projetos
                </button>
                <span style={{ color: textSecondary }}>→</span>
                <span className="font-body text-[0.78rem] font-medium" style={{ color: textTertiary }}>
                  {project.title}
                </span>
              </div>

              <span style={{ fontSize: "3rem", display: "block", marginBottom: 24 }}>{project.emoji}</span>
              <h1 className="font-display font-semibold tracking-tight leading-[1.05]" style={{ fontSize: "clamp(2.4rem,5.5vw,4.5rem)", marginBottom: 20, color: textPrimary }}>
                {project.title}
              </h1>
              <p className="font-body text-[1.1rem] font-light leading-[1.7]" style={{ color: textSub, maxWidth: 580 }}>
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
                    background: pillBg, backdropFilter: "blur(8px)",
                    borderRadius: 50, display: "flex", flexDirection: "column", gap: 2,
                  }}>
                    <span className="font-body text-[0.62rem] font-semibold tracking-[0.12em] uppercase" style={{ color: pillLabel }}>{l}</span>
                    <span className="font-body text-[0.85rem] font-medium" style={{ color: textPrimary }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

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

          {/* Featured Image */}
          {project.featuredImage ? (
            <div className="reveal reveal-d2" style={{ marginTop: 48, borderRadius: 16, overflow: "hidden", position: "relative" }}>
              <div style={{
                position: "relative",
                background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)`,
                borderRadius: 16,
                overflow: "hidden",
              }}>
                <img
                  src={project.featuredImage}
                  alt={`Destaque do projeto ${project.title}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: 520,
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: "40%",
                  background: `linear-gradient(to top, ${project.color}cc, transparent)`,
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", bottom: 24, left: 28,
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <span style={{
                    padding: "8px 18px", borderRadius: 50,
                    background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)",
                    fontSize: "0.75rem", fontWeight: 600, color: "#2C1810",
                    letterSpacing: "0.04em",
                  }}>
                    ✦ Visão geral do projeto
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="reveal reveal-d2" style={{
              marginTop: 48, borderRadius: 16, overflow: "hidden",
              height: 360, background: `linear-gradient(135deg, ${project.color}33, ${project.color}66)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `2px dashed ${project.color}55`,
            }}>
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: 12, opacity: 0.5 }}>📷</span>
                <p className="font-body text-[0.82rem] font-medium" style={{ color: "#9A8A82" }}>
                  Adicione uma imagem destaque
                </p>
                <p className="font-body text-[0.68rem] font-light mt-1" style={{ color: "#B8A8A0" }}>
                  featuredImage no projects.ts
                </p>
              </div>
            </div>
          )}
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

{/* Sprints */}
{project.sprints && project.sprints.length > 0 && project.sprints.map((sprint, sprintIdx) => (
        <Fragment key={sprintIdx}>
        <section
          className="section-pad"
          style={{
            padding: "96px 48px",
            background: sprintIdx % 2 === 0 ? "#F7F0EA" : "hsl(var(--background))",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="reveal font-body text-[0.72rem] font-semibold text-rose tracking-[0.2em] uppercase mb-4">
              {sprint.label}
            </p>
            <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-3" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              {sprint.title}
            </h2>
            {sprint.subtitle && (
              <p className="reveal reveal-d1 font-body text-[1.05rem] leading-[1.85] font-light mb-12" style={{ color: "#5A4A44" }}>
                {sprint.subtitle}
              </p>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
              {sprint.sections.map((section, secIdx) => {
                if (section.type === "text") {
                  return (
                    <div key={secIdx} className="reveal">
                      {section.title && (
                        <h3 className="font-display text-[1.2rem] font-semibold text-foreground mb-3">{section.title}</h3>
                      )}
                      {section.text?.split("\n\n").map((paragraph, pIdx) => (
                        <p key={pIdx} className="font-body text-[0.95rem] leading-[1.85] font-light mb-4 last:mb-0" style={{ color: "#5A4A44" }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  );
                }

                if (section.type === "bullets") {
                  return (
                    <div key={secIdx} className="reveal">
                      {section.title && (
                        <h3 className="font-display text-[1.2rem] font-semibold text-foreground mb-4">{section.title}</h3>
                      )}
                      <ul style={{ display: "flex", flexDirection: "column", gap: 12, paddingLeft: 0, listStyle: "none" }}>
                        {section.items?.map((item, itemIdx) => {
                          const colonIdx = item.indexOf(":");
                          const hasBoldPrefix = colonIdx > 0 && colonIdx < 50;
                          return (
                            <li key={itemIdx} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                              <span style={{
                                width: 8, height: 8, borderRadius: "50%", marginTop: 8, flexShrink: 0,
                                background: "hsl(var(--rose))",
                              }} />
                              <span className="font-body text-[0.92rem] leading-[1.75] font-light" style={{ color: "#5A4A44" }}>
                                {hasBoldPrefix ? (
                                  <><strong className="font-semibold text-foreground">{item.substring(0, colonIdx)}</strong>{item.substring(colonIdx)}</>
                                ) : item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }

                if (section.type === "image") {
                  return (
                    <div key={secIdx} className="reveal" style={{ borderRadius: 16, overflow: "hidden", cursor: "zoom-in" }} onClick={() => section.image && setZoomedImage(section.image)}>
                      <img
                        src={section.image}
                        alt={section.imageCaption || `Sprint ${sprintIdx + 1} imagem`}
                        style={{
                          width: "100%", height: "auto", maxHeight: 520,
                          objectFit: "contain", display: "block", borderRadius: 16,
                        }}
                        loading="lazy"
                      />
                      {section.imageCaption && (
                        <p className="font-body text-[0.78rem] font-light mt-3 text-center" style={{ color: "#9A8A82" }}>
                          {section.imageCaption}
                        </p>
                      )}
                    </div>
                  );
                }
 
                if (section.type === "images") {
                  return (
                    <div key={secIdx} className="reveal">
                      {section.title && (
                        <h3 className="font-display text-[1.2rem] font-semibold text-foreground mb-5">{section.title}</h3>
                      )}
                      <div style={{ display: "grid", gridTemplateColumns: section.images && section.images.length > 1 ? "1fr 1fr" : "1fr", gap: 16 }}>
                        {section.images?.map((img, imgIdx) => (
                          <div key={imgIdx} style={{ borderRadius: 16, overflow: "hidden", cursor: "zoom-in" }} onClick={() => setZoomedImage(img.src)}>
                            <img
                              src={img.src}
                              alt={img.caption || `Imagem ${imgIdx + 1}`}
                              style={{
                                width: "100%", height: 320,
                                objectFit: "cover", display: "block", borderRadius: 16,
                              }}
                              loading="lazy"
                            />
                            {img.caption && (
                              <p className="font-body text-[0.78rem] font-light mt-2 text-center" style={{ color: "#9A8A82" }}>
                                {img.caption}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (section.type === "cards") {
                  return (
                    <div key={secIdx} className="reveal">
                      {section.title && (
                        <h3 className="font-display text-[1.2rem] font-semibold text-foreground mb-5">{section.title}</h3>
                      )}
                      <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                        {section.cards?.map((card, cardIdx) => (
                          <div key={cardIdx} className={`reveal reveal-d${(cardIdx % 2) + 1}`} style={{
                            padding: "28px 24px", borderRadius: 12,
                            background: sprintIdx % 2 === 0 ? "#fff" : "rgba(247,240,234,0.5)",
                            border: "1px solid rgba(44,24,16,0.07)",
                          }}>
                            {card.icon && (
                              <span style={{ fontSize: "1.5rem", display: "block", marginBottom: 12 }}>{card.icon}</span>
                            )}
                            <h4 className="font-display text-[1rem] font-semibold text-foreground mb-2">{card.title}</h4>
                            <p className="font-body text-[0.85rem] leading-[1.7] font-light" style={{ color: "#5A4A44" }}>{card.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (section.type === "quote") {
                  return (
                    <div key={secIdx} className="reveal" style={{
                      borderLeft: "3px solid hsl(var(--rose))",
                      paddingLeft: 28, paddingTop: 8, paddingBottom: 8,
                    }}>
                      {section.text?.split("\n\n").map((paragraph, pIdx) => (
                        <p key={pIdx} className="font-display text-[1.15rem] font-light leading-[1.8] italic mb-4 last:mb-0" style={{ color: "#5A4A44" }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  );
                }

                if (section.type === "metrics") {
                  return (
                    <div key={secIdx} className="reveal">
                      {section.title && (
                        <h3 className="font-display text-[1.2rem] font-semibold text-foreground mb-5">{section.title}</h3>
                      )}
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16 }}>
                        {section.metrics?.map((m, mIdx) => (
                          <div key={mIdx} style={{
                            padding: "28px 20px", textAlign: "center", borderRadius: 12,
                            background: sprintIdx % 2 === 0 ? "#fff" : "rgba(247,240,234,0.5)",
                            border: "1px solid rgba(44,24,16,0.07)",
                          }}>
                            <p className="font-display text-[2.2rem] font-semibold text-rose leading-none mb-2">{m.value}</p>
                            <p className="font-body text-[0.82rem] font-semibold text-foreground mb-1">{m.label}</p>
                            <p className="font-body text-[0.7rem] font-light" style={{ color: "#9A8A82" }}>{m.sub}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (section.type === "personas") {
                  return (
                    <div key={secIdx} className="reveal">
                      {section.title && (
                        <h3 className="font-display text-[1.2rem] font-semibold text-foreground mb-5">{section.title}</h3>
                      )}
                      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {section.personas?.map((persona, pIdx) => (
                          <div key={pIdx} style={{
                            padding: "28px 24px", borderRadius: 12,
                            background: pIdx === 0 ? "rgba(235,165,165,0.06)" : (sprintIdx % 2 === 0 ? "#fff" : "rgba(247,240,234,0.5)"),
                            border: pIdx === 0 ? "1.5px solid rgba(235,165,165,0.25)" : "1px solid rgba(44,24,16,0.07)",
                          }}>
                            <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                              {persona.photo ? (
                                <img src={persona.photo} alt={persona.name} style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", flexShrink: 0, cursor: "zoom-in" }} onClick={() => setZoomedImage(persona.photo!)} />
                              ) : (
                                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(235,165,165,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.5rem" }}>
                                  👤
                                </div>
                              )}
                              <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                                  <h4 className="font-display text-[1.1rem] font-semibold text-foreground">{persona.name}</h4>
                                  <span className="font-body text-[0.75rem] font-medium" style={{ color: "#9A8A82" }}>{persona.age}</span>
                                  <span style={{
                                    padding: "4px 14px", borderRadius: 50, fontSize: "0.72rem", fontWeight: 600,
                                    background: pIdx === 0 ? "rgba(235,165,165,0.18)" : "rgba(164,189,168,0.15)",
                                    color: pIdx === 0 ? "#C47878" : "#6A9470",
                                  }}>{persona.role}</span>
                                </div>
                                <p className="font-body text-[0.9rem] leading-[1.75] font-light" style={{ color: "#5A4A44" }}>{persona.desc}</p>
                              </div>
                            </div>
                            {persona.journeyImage && (
                              <div style={{ marginTop: 16, borderRadius: 12, overflow: "hidden", cursor: "zoom-in" }} onClick={() => setZoomedImage(persona.journeyImage!)}>
                                <img src={persona.journeyImage} alt={`Jornada de ${persona.name}`} style={{ width: "100%", height: "auto", maxHeight: 300, objectFit: "contain", borderRadius: 12 }} loading="lazy" />
                                <p className="font-body text-[0.75rem] font-light mt-2 text-center" style={{ color: "#9A8A82" }}>Jornada do Usuário — {persona.name}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </section>

        {/* Stakeholders entre sprint ODS e Pesquisa */}
        {sprintIdx === 0 && project.stakeholders && project.stakeholders.length > 0 && (
          <section className="section-pad bg-background" style={{ padding: "96px 48px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
          </section>
        )}

        </Fragment>
      ))}

      {/* Metodologias */}
      <section className="section-pad bg-background" style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
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
      </section>

      {/* Galeria */}
      <section className="section-pad" style={{ padding: "96px 48px", background: "#F7F0EA" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">Galeria</p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-12" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Telas & Mockups
          </h2>
          <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridTemplateRows: "auto auto", gap: 16 }}>
            {project.gallery.map((item, i) => {
              const isImage = /\.(png|jpe?g|webp|svg|gif)$/i.test(item) || item.startsWith("http") || item.startsWith("/");
              return (
                <div key={i} className="gallery-item reveal" style={{
                  height: i === 0 ? 320 : i === 3 ? 320 : 200,
                  gridColumn: i === 0 ? "span 2" : i === 3 ? "span 2" : "span 1",
                  background: isImage ? "#E8DDD5" : item,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden", borderRadius: 12,
                  cursor: isImage ? "zoom-in" : "default",
                }} onClick={() => isImage && setZoomedImage(item)}>
                  {isImage ? (
                    <img
                      src={item}
                      alt={`Mockup ${i + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <div style={{ width: "100%", height: "100%", position: "absolute", backgroundImage: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 50%)` }}/>
                      <div className="font-body text-[0.72rem] font-medium tracking-[0.08em] uppercase" style={{
                        border: "1.5px dashed rgba(255,255,255,0.4)", borderRadius: 8,
                        padding: "16px 24px", color: "rgba(255,255,255,0.7)",
                        zIndex: 1, position: "relative",
                      }}>
                        Mockup {i + 1}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Zoom Dialog */}
      <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-2 bg-transparent border-none shadow-none" style={{ background: "transparent" }}>
          {zoomedImage && (
            <img
              src={zoomedImage}
              alt="Imagem ampliada"
              style={{ width: "100%", height: "auto", maxHeight: "85vh", objectFit: "contain", borderRadius: 12 }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Princípios de Design */}
      {project.designPrinciples && project.designPrinciples.length > 0 && (
        <section className="section-pad bg-background" style={{ padding: "96px 48px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">Princípios</p>
            <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Diretrizes de design aplicadas
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
              {project.designPrinciples.map((p, i) => (
                <div key={i} className={`reveal reveal-d${(i % 3) + 1}`} style={{
                  padding: "28px 28px", borderRadius: 12,
                  background: "#fff", border: "1px solid rgba(44,24,16,0.07)",
                  display: "flex", gap: 20, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(235,165,165,0.12)", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <span className="font-display text-[0.82rem] font-bold text-rose">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-[1.05rem] font-semibold text-foreground mb-1">{p.title}</h4>
                    <p className="font-body text-[0.88rem] leading-[1.7] font-light" style={{ color: "#5A4A44" }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Aprendizados */}
      {project.learnings && project.learnings.length > 0 && (
        <section className="section-pad" style={{ padding: "96px 48px", background: "#F7F0EA" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <p className="reveal font-body text-[0.72rem] font-medium text-meadow tracking-[0.2em] uppercase mb-[18px]">Reflexões</p>
            <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-10" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
              Aprendizados do projeto
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {project.learnings.map((l, i) => (
                <div key={i} className={`reveal reveal-d${(i % 3) + 1}`} style={{
                  display: "flex", gap: 18, alignItems: "flex-start",
                }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: "50%", marginTop: 8, flexShrink: 0,
                    background: i % 2 === 0 ? "#EBA5A5" : "#A4BDA8",
                  }} />
                  <p className="font-body text-[1rem] leading-[1.8] font-light" style={{ color: "#5A4A44" }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
