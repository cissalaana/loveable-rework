interface PageHeaderProps {
  label: string;
  title: string;
  accent?: string;
  subtitle?: string;
}

const PageHeader = ({ label, title, accent, subtitle }: PageHeaderProps) => (
  <section className="bg-background relative overflow-hidden" style={{
    padding: "160px 48px 80px",
    borderBottom: "1px solid rgba(44,24,16,0.06)",
  }}>
    <div style={{
      position: "absolute", top: "-60px", right: "5%",
      width: 340, height: 340, borderRadius: "50%", pointerEvents: "none",
      background: "radial-gradient(circle, rgba(235,165,165,0.15) 0%, transparent 70%)",
    }}/>
    <span className="float-a" style={{ position: "absolute", top: "35%", right: "12%", color: "#FFCA8C", fontSize: 18, opacity: 0.7, pointerEvents: "none" }}>✦</span>
    <span className="float-b" style={{ position: "absolute", bottom: "20%", left: "8%", color: "#EBA5A5", fontSize: 11, opacity: 0.5, pointerEvents: "none" }}>★</span>

    <div style={{ maxWidth: 880, margin: "0 auto", position: "relative", zIndex: 1 }}>
      <p className="font-body text-[0.72rem] font-medium tracking-[0.2em] uppercase text-rose mb-[18px]">
        ✦ &nbsp;{label}
      </p>
      <h1 className="font-display font-semibold tracking-tight text-foreground leading-[1.1]" style={{
        fontSize: "clamp(2.4rem,5vw,4rem)",
        marginBottom: subtitle ? 20 : 0,
      }}>
        {title}{" "}
        {accent && <em className="italic text-rose">{accent}</em>}
      </h1>
      {subtitle && (
        <p className="font-body text-[1.05rem] text-muted-foreground leading-[1.7] font-light" style={{ maxWidth: 600 }}>
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;
