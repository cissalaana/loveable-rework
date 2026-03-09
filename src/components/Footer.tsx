import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground section-pad" style={{ padding: "40px 48px" }}>
    <div className="footer-inner" style={{
      display: "flex", alignItems: "center",
      justifyContent: "space-between", gap: 16, flexWrap: "wrap",
    }}>
      <Link to="/" className="font-display text-[1.2rem] text-background font-normal tracking-tight no-underline">
        Ana Letícia ✦
      </Link>
      <p className="font-body text-[0.78rem] font-light" style={{ color: "rgba(250,245,240,0.3)" }}>
        © 2025 — Feito com ♡ e muito café
      </p>
      <div style={{ display: "flex", gap: 24 }}>
        {["LinkedIn", "Behance", "Email"].map((l) => (
          <a key={l} href="#" className="font-body text-[0.78rem] tracking-wider no-underline transition-colors" style={{ color: "rgba(250,245,240,0.45)" }}>
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
