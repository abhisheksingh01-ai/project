import { useEffect, useRef } from "react";

export default function useTilt() {
  const ref = useRef(null);
  const state = useRef({ raf: null, mx: 0, my: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      state.current.mx = px;
      state.current.my = py;
      if (!state.current.raf) state.current.raf = requestAnimationFrame(update);
    };

    const update = () => {
      const { mx, my } = state.current;
      const rx = (my - 0.5) * -12;
      const ry = (mx - 0.5) * 12;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      state.current.raf = null;
    };

    const reset = () => {
      if (state.current.raf) cancelAnimationFrame(state.current.raf);
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
      state.current.raf = null;
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    el.addEventListener("mouseenter", () => (el.style.transition = "transform 250ms ease"));

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
      el.removeEventListener("mouseenter", () => {});
      if (state.current.raf) cancelAnimationFrame(state.current.raf);
    };
  }, []);

  return ref;
}
