import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/useReveal";
import PageHeader from "@/components/PageHeader";

import anaPhoto from "@/assets/ana-photo.png";

const AboutPage = () => {
  useReveal();

  const timeline = [
    { year: "2026", title: "Product Designer — CITi (Empresa Júnior)", desc: "Pesquisas qualitativas e quantitativas, sprints semanais, wireframes, protótipos de alta fidelidade e Design System." },
    { year: "2025", title: "Estagiária de Pesquisa — UFPE", desc: "Pesquisa sobre usabilidade, análise de normas ABNT, ergonomia e organização de documentação de projeto." },
    { year: "2025", title: "Designer — Alimentacast (Extensão)", desc: "Soluções visuais alinhadas com o público, desenvolvimento de peças no Figma e identidade visual consistente." },
    { year: "2024", title: "Monitoria Design de Jogos — UFPE", desc: "Orientação em testes de usabilidade, avaliação de relatórios e organização de oportunidades de ensino." },
    { year: "2023", title: "Graduação — Design (UFPE)", desc: "Bacharelado em Design pela Universidade Federal de Pernambuco (2023–2027)." },
  ];

  const values = [
    { icon: "🌱", title: "Impacto Social", desc: "Design tem o poder de mudar vidas. Priorizo projetos com propósito claro e alcance real." },
    { icon: "🔍", title: "Curiosidade", desc: "Antes de qualquer solução, mergulho nos problemas. A pesquisa é onde os melhores insights nascem." },
    { icon: "♿", title: "Acessibilidade", desc: "Bom design funciona para todos. Acessibilidade não é feature, é fundação." },
    { icon: "📊", title: "Dados + Empatia", desc: "Combino dados quantitativos com escuta qualitativa para tomar decisões bem fundamentadas." },
    { icon: "🤝", title: "Colaboração", desc: "Design não existe no vácuo. Os melhores produtos nascem de times multidisciplinares." },
    { icon: "🔄", title: "Iteração", desc: "Nenhum design está pronto na primeira versão. O ciclo de feedback é onde o produto evolui." },
  ];

  const skills = [
    { cat: "Design Tools", items: ["Figma", "Adobe XD", "Protopie", "Illustrator"] },
    { cat: "UX Methods", items: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture", "Design Thinking"] },
    { cat: "Soft Skills", items: ["Facilitação", "Storytelling", "Design Critique", "Comunicação com Stakeholders", "Documentação", "Colaboração Multidisciplinar"] },
    { cat: "Dev Awareness", items: ["HTML/CSS básico", "Figma Handoff", "Design Tokens", "Design System", "Ergonomia Digital", "Heurísticas de Nielsen"] },
  ];

  return (
    <div className="page-enter">
      <PageHeader
        label="Sobre Mim"
        title="Oi, eu sou a"
        accent="Ana Letícia!"
        subtitle="Product Designer buscando criar experiências humanas, acessíveis e orientadas por dados — com foco em UX/UI, pesquisa com usuários e prototipação."
      />

      {/* Bio + Photo */}
      <section style={{ padding: "96px 48px" }} className="section-pad">
        <div className="about-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="reveal" style={{ position: "relative" }}>
            <div style={{
              width: "100%", aspectRatio: "4/5", borderRadius: 16,
              overflow: "hidden", position: "relative",
            }}>
              <img src={anaPhoto} alt="Ana Letícia Cavalcanti Figueiredo" style={{
                width: "100%", height: "100%", objectFit: "cover",
              }} />
            </div>
            <div style={{ position: "absolute", bottom: -20, right: -20, width: 80, height: 80, borderRadius: 10, background: "#FFCA8C", zIndex: -1 }}/>
            <div style={{ position: "absolute", top: -16, left: -16, width: 48, height: 48, borderRadius: "50%", background: "rgba(164,189,168,0.4)", zIndex: -1 }}/>
          </div>

          <div>
            <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-5">Quem sou eu</p>
            <h2 className="reveal reveal-d1 font-display font-semibold text-foreground leading-[1.2] mb-6" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>
              Design com alma,{" "}
              <em className="text-rose">resultado com dados</em>
            </h2>
            {[
              "Sou Product Designer com mais de 4 anos de experiência criando experiências digitais que equilibram estética, usabilidade e impacto real.",
              "Acredito que o melhor design nasce da interseção entre empatia profunda com o usuário e tomada de decisão baseada em dados. Por isso, faço questão de estar presente desde as primeiras entrevistas até o handoff final.",
              "Atualmente focada em projetos de saúde, educação e impacto social — acredito que tecnologia tem o poder de democratizar acesso e mudar vidas.",
            ].map((text, i) => (
              <p key={i} className={`reveal reveal-d${i + 2} font-body text-[0.95rem] text-muted-foreground leading-[1.85] font-light mb-4`}>
                {text}
              </p>
            ))}

            <div className="reveal reveal-d4" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 32 }}>
              <a href="/curriculo.pdf" className="font-body text-[0.82rem] font-semibold text-foreground no-underline inline-flex items-center gap-2" style={{
                padding: "13px 28px", borderRadius: 50, border: "1.5px solid currentColor", background: "transparent",
              }}>
                📄 &nbsp;Baixar Currículo
              </a>
              <Link to="/contato" className="font-body text-[0.82rem] font-semibold text-rose no-underline inline-flex items-center gap-2" style={{
                padding: "13px 28px", borderRadius: 50, border: "1.5px solid #EBA5A5", background: "transparent",
              }}>
                💬 &nbsp;Fale comigo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-pad" style={{ padding: "96px 48px", background: "#F7F0EA" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">O que guia meu trabalho</p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-14" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Meus valores de design
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(280px,100%),1fr))", gap: 20 }}>
            {values.map((v, i) => (
              <div key={v.title} className={`reveal reveal-d${(i % 3) + 1} process-step`} style={{
                padding: "32px 28px", borderRadius: 12, background: "#fff", border: "1px solid rgba(44,24,16,0.07)",
              }}>
                <span style={{ fontSize: "1.6rem", display: "block", marginBottom: 16 }}>{v.icon}</span>
                <h3 className="font-display text-[1.3rem] font-semibold text-foreground mb-[10px]">{v.title}</h3>
                <p className="font-body text-[0.85rem] text-muted-foreground leading-[1.7] font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-background" style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">Trajetória</p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-foreground mb-14" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Minha jornada
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {timeline.map((item, i) => (
              <div key={item.year} className={`reveal reveal-d${(i % 4) + 1} timeline-item`}>
                <div className="timeline-dot"/>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
                  <div style={{ flex: 1 }}>
                    <h3 className="font-display text-[1.35rem] font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-[0.88rem] text-muted-foreground leading-[1.7] font-light">{item.desc}</p>
                  </div>
                  <span className="font-display text-[1.1rem] font-semibold text-rose flex-shrink-0 pt-[2px]">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-pad bg-foreground" style={{ padding: "96px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-[18px]">Ferramentas & Habilidades</p>
          <h2 className="reveal reveal-d1 font-display font-semibold text-background mb-14" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            O que eu domino
          </h2>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 40 }}>
            {skills.map(({ cat, items }, i) => (
              <div key={cat} className={`reveal reveal-d${i + 1}`}>
                <p className="font-body text-[0.68rem] font-semibold tracking-[0.18em] uppercase mb-[18px]" style={{ color: "#C47878" }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {items.map((s) => (
                    <span key={s} className="skill-tag font-body text-[0.76rem] font-normal" style={{
                      padding: "7px 14px", border: "1px solid rgba(250,245,240,0.15)",
                      borderRadius: 50, color: "rgba(250,245,240,0.75)",
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
