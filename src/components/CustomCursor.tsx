import { useRef, useEffect, useState } from "react";

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const [state, setState] = useState<"default" | "link" | "btn">("default");

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.11);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.11);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest(".btn-fill")) setState("btn");
      else if (target.closest("a")) setState("link");
      else setState("default");
    };
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const cfg = {
    default: { ring: 34, dot: 6, ringBg: "transparent", ringBorder: "rgba(235,165,165,0.8)" },
    link: { ring: 50, dot: 4, ringBg: "rgba(245,206,199,0.18)", ringBorder: "#EBA5A5" },
    btn: { ring: 56, dot: 0, ringBg: "rgba(250,187,146,0.18)", ringBorder: "#FABB92" },
  }[state];

  return (
    <>
      <div ref={ringRef} className="hidden md:block" style={{
        position: "fixed", pointerEvents: "none", zIndex: 10000, borderRadius: "50%",
        width: cfg.ring, height: cfg.ring,
        marginLeft: -cfg.ring / 2, marginTop: -cfg.ring / 2,
        border: `1.5px solid ${cfg.ringBorder}`,
        background: cfg.ringBg,
        transition: "width .3s,height .3s,margin .3s,background .3s,border-color .3s",
        mixBlendMode: "multiply",
      }} />
      <div ref={dotRef} className="hidden md:block" style={{
        position: "fixed", pointerEvents: "none", zIndex: 10000, borderRadius: "50%",
        width: cfg.dot, height: cfg.dot,
        marginLeft: -cfg.dot / 2, marginTop: -cfg.dot / 2,
        background: "#EBA5A5",
        transition: "width .3s,height .3s,margin .3s",
      }} />
    </>
  );
};

export default CustomCursor;
