"use client";
import { useEffect, useRef } from "react";

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf = 0;
    type Star = { x: number; y: number; r: number; p: number; s: number; hue: number };
    let stars: Star[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + "px"; canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor((w * h) / 5200);
      const hues = [220, 45, 0, 140, 50];
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.25 + 0.2, p: Math.random() * Math.PI * 2,
        s: 0.4 + Math.random() * 1.4, hue: hues[Math.floor(Math.random() * hues.length)],
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const time = t / 1000;
      for (const st of stars) {
        const a = reduce ? 0.6 : 0.25 + 0.75 * Math.abs(Math.sin(st.p + time * st.s * 0.6));
        ctx.beginPath();
        ctx.fillStyle = st.r > 1.1 ? `hsla(${st.hue},80%,85%,${a})` : `rgba(255,255,255,${a * 0.85})`;
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="starfield" aria-hidden="true" />;
}
