"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Position motion values for zero-latency direct tracking
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Snappy spring with low latency so the effect stays right at the pointer
  const springConfig = { damping: 30, stiffness: 600, mass: 0.2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse / trackpad)
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .clickable, .glass-card, [tabindex='0']"
      );
      setIsHovering(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* 1. Snappy Ambient Spotlight Glow directly aligned with the cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.25 : 1,
          opacity: isHovering ? 0.35 : 0.2,
        }}
        transition={{ duration: 0.2 }}
        className="h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35)_0%,rgba(99,102,241,0.15)_40%,transparent_70%)] blur-2xl pointer-events-none"
      />

      {/* 2. Soft micro-ring tightly hugging the pointer on interactive elements */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 0.8 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="h-8 w-8 rounded-full border border-purple-400/50 bg-purple-500/10 pointer-events-none shadow-[0_0_12px_rgba(168,85,247,0.3)]"
      />
    </div>
  );
};
