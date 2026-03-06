import { useEffect } from "react";

export const useReveal = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
        { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 150);
    return () => clearTimeout(timer);
  }, []);
};
