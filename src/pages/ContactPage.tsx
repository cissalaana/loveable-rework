import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => {
  useReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", type: "projeto" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const upd = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nome obrigatório";
    if (!form.email.trim()) e.email = "Email obrigatório";
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido";
    if (!form.message.trim()) e.message = "Mensagem obrigatória";
    return e;
  };

  const send = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSent(true);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    padding: "16px 20px", width: "100%",
    border: `1.5px solid ${errors[field] ? "#EBA5A5" : "rgba(44,24,16,0.12)"}`,
    borderRadius: 8,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.9rem", fontWeight: 300,
    background: "rgba(255,255,255,0.7)",
    color: "#2C1810",
    transition: "border-color 0.3s, background 0.3s",
  });

  const contactLinks = [
    { icon: "✉️", label: "Email", value: "anacavalcanti.figueiredo@gmail.com", href: "mailto:anacavalcanti.figueiredo@gmail.com" },
    { icon: "💼", label: "LinkedIn", value: "https://www.linkedin.com/in/ana-leticia-cavalcanti/", href: "https://www.linkedin.com/in/ana-leticia-cavalcanti/" },
    { icon: "🎨", label: "Behance", value: "behance.net/analeticia", href: "https://behance.net" },
    { icon: "🐦", label: "Twitter", value: "@analeticia_ux", href: "https://twitter.com" },
  ];

  return (
    <div className="page-enter">
      <PageHeader
        label="Contato"
        title="Vamos criar algo"
        accent="incrível juntos?"
        subtitle="Estou aberta a novas oportunidades, colaborações e bate-papos sobre design. Me conta sobre o seu projeto!"
      />

      <section style={{ padding: "96px 48px 120px" }} className="section-pad">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            {/* Left — info */}
            <div>
              <p className="reveal font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-5">
                Links & Redes
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 56 }}>
                {contactLinks.map((c, i) => (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
                    className={`reveal reveal-d${i + 1}`}
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "18px 20px", background: "#fff",
                      border: "1px solid rgba(44,24,16,0.07)", borderRadius: 10,
                      textDecoration: "none",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>{c.icon}</span>
                    <div>
                      <p className="font-body text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-[2px]" style={{ color: "#C47878" }}>{c.label}</p>
                      <p className="font-body text-[0.85rem] text-muted-foreground font-light">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="reveal" style={{
                padding: "24px 24px",
                background: "rgba(164,189,168,0.1)",
                border: "1.5px solid rgba(164,189,168,0.3)",
                borderRadius: 10,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#A4BDA8", boxShadow: "0 0 0 3px rgba(164,189,168,0.3)" }}/>
                  <p className="font-body text-[0.72rem] font-semibold tracking-[0.1em] uppercase" style={{ color: "#6A9470" }}>
                    Disponível para projetos
                  </p>
                </div>
                <p className="font-body text-[0.85rem] text-muted-foreground font-light leading-[1.6]">
                  Atualmente aceito novos projetos freelance e estou aberta a oportunidades CLT a partir de março/2025.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="reveal reveal-d1">
              {!sent ? (
                <div>
                  <p className="font-body text-[0.72rem] font-medium text-rose tracking-[0.2em] uppercase mb-6">
                    Enviar mensagem
                  </p>

                  <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
                    {["projeto", "colaboração", "oportunidade", "outro"].map((t) => (
                      <button key={t} onClick={() => setForm((f) => ({ ...f, type: t }))} style={{
                        padding: "8px 18px", borderRadius: 50,
                        border: `1.5px solid ${form.type === t ? "#EBA5A5" : "rgba(44,24,16,0.12)"}`,
                        background: form.type === t ? "#F5CEC7" : "transparent",
                        fontSize: "0.78rem", fontWeight: 500,
                        color: form.type === t ? "#2C1810" : "#9A8A84",
                        transition: "all 0.25s", textTransform: "capitalize",
                      }}>
                        {t}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div className="contact-name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <input className="contact-input" placeholder="Seu nome" value={form.name} onChange={upd("name")} style={inputStyle("name")}/>
                        {errors.name && <p className="font-body text-[0.72rem] text-rose mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <input className="contact-input" placeholder="Seu email" value={form.email} onChange={upd("email")} style={inputStyle("email")}/>
                        {errors.email && <p className="font-body text-[0.72rem] text-rose mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <input className="contact-input" placeholder="Assunto (opcional)" value={form.subject} onChange={upd("subject")} style={inputStyle("subject")}/>
                    <div>
                      <textarea className="contact-input" placeholder="Conta sobre seu projeto, ideia ou oportunidade..." value={form.message} onChange={upd("message")} rows={6} style={{ ...inputStyle("message"), resize: "vertical" }}/>
                      {errors.message && <p className="font-body text-[0.72rem] text-rose mt-1">{errors.message}</p>}
                    </div>
                    <div style={{ marginTop: 8 }}>
                      <button className="btn-fill font-body text-[0.85rem] font-semibold tracking-[0.07em] text-foreground" onClick={send} style={{
                        border: "1.5px solid currentColor", background: "transparent",
                        padding: "16px 44px", borderRadius: 50, width: "100%",
                      }}>
                        <span>Enviar mensagem ✦</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div style={{
                  padding: "64px 48px", textAlign: "center",
                  border: "1.5px solid rgba(235,165,165,0.3)",
                  borderRadius: 16, background: "rgba(245,206,199,0.1)",
                }}>
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: 24 }}>🌸</span>
                  <h3 className="font-display text-[2rem] font-semibold text-rose mb-4">
                    Mensagem enviada!
                  </h3>
                  <p className="font-body text-[0.95rem] text-muted-foreground leading-[1.7] font-light mb-8">
                    Obrigada pelo contato{form.name ? `, ${form.name.split(" ")[0]}` : ""}! Vou retornar em até 48h. 💌
                  </p>
                  <button className="btn-fill font-body text-[0.8rem] font-semibold text-foreground" onClick={() => setSent(false)} style={{
                    border: "1.5px solid currentColor", background: "transparent",
                    padding: "12px 28px", borderRadius: 50,
                  }}>
                    <span>Enviar outra mensagem</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
