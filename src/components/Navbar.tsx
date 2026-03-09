import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Projetos", to: "/projetos" },
    { label: "Sobre Mim", to: "/sobre" },
    { label: "Contato", to: "/contato" },
  ];

  const isActive = (to: string) => location.pathname === to || location.pathname.startsWith(to + "/");

  return (
    <>
      <nav className="nav-pad" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "14px 48px" : "28px 48px",
        background: scrolled || menuOpen ? "rgba(250,245,240,0.95)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(235,165,165,0.15)" : "1px solid transparent",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <Link to="/" style={{ textDecoration: "none", position: "relative", zIndex: 1001 }}>
          <span className="font-display text-[1.45rem] font-semibold text-foreground tracking-tight">
            Ana Letícia
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "36px" }}>
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

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden flex-col justify-center items-center gap-[5px] relative z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", padding: 8, cursor: "pointer" }}
          aria-label="Menu"
        >
          <span style={{
            display: "block", width: 22, height: 2, background: "hsl(var(--foreground))",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}/>
          <span style={{
            display: "block", width: 22, height: 2, background: "hsl(var(--foreground))",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
          }}/>
          <span style={{
            display: "block", width: 22, height: 2, background: "hsl(var(--foreground))",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }}/>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden"
        style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: "hsl(var(--background))",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 32,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transition: "opacity 0.35s ease",
        }}
      >
        {links.map(({ label, to }) => (
          <Link
            key={label} to={to}
            onClick={() => setMenuOpen(false)}
            className={`font-display text-[1.8rem] font-semibold tracking-tight no-underline transition-colors ${isActive(to) ? "text-rose" : "text-foreground"}`}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center w-[44px] h-[44px] border border-foreground rounded-md text-foreground mt-4"
          style={{ borderWidth: "1.5px" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default Navbar;
