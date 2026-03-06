import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  const links = [
    { label: "Projetos", to: "/projetos" },
    { label: "Sobre Mim", to: "/sobre" },
    { label: "Contato", to: "/contato" },
  ];

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <nav className="nav-pad" style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "14px 48px" : "28px 48px",
      background: scrolled ? "rgba(250,245,240,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(235,165,165,0.15)" : "1px solid transparent",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
    }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="font-display text-[1.45rem] font-semibold text-foreground tracking-tight">
          Ana Letícia
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
        {links.map(({ label, to }) => (
          <Link key={label} to={to} className={`nav-link ${isActive(to) ? "active" : ""}`}>
            {label}
          </Link>
        ))}
        <a
          href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center w-[34px] h-[34px] border border-foreground rounded-md text-foreground transition-all"
          style={{ borderWidth: "1.5px" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
