"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on pointer devices (not touch)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let ringX = 0, ringY = 0;
    let targetX = 0, targetY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    const animate = () => {
      ringX += (targetX - ringX) * 0.13;
      ringY += (targetY - ringY) * 0.13;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX - 4}px, ${targetY - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--gold)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
          mixBlendMode: "multiply",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid var(--gold-border)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          opacity: visible ? 0.7 : 0,
          transition: "opacity 0.2s",
        }}
      />
    </>
  );
}
