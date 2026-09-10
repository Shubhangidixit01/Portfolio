"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  // Position motion values for zero-latency direct tracking
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  // Spring physics for trailing precision ring
  const ringSpringConfig = { damping: 28, stiffness: 420, mass: 0.4 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  // Softer spring for ambient trailing glow aura
  const glowSpringConfig = { damping: 40, stiffness: 180, mass: 0.8 };
  const glowX = useSpring(cursorX, glowSpringConfig);
  const glowY = useSpring(glowSpringConfig ? cursorY : cursorY, glowSpringConfig);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse / trackpad) and hover capability
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], .clickable, .glass-card, [tabindex='0']"
      );
      setIsHovering(!!interactive);

      const textElement = target.closest("h1, h2, h3, p, span.font-mono");
      setIsText(!!textElement && !interactive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleElementHover);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isEnabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* 1. Ambient Trailing Glow Flare */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          opacity: isHovering ? 0.35 : 0.18,
        }}
        transition={{ duration: 0.3 }}
        className="h-44 w-44 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 blur-3xl"
      />

      {/* 2. Elastic Precision Interactive Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 50 : isText ? 28 : isClicking ? 20 : 32,
          height: isHovering ? 50 : isText ? 28 : isClicking ? 20 : 32,
          borderColor: isHovering
            ? "rgba(168, 85, 247, 0.85)"
            : isClicking
            ? "rgba(236, 72, 153, 0.9)"
            : "rgba(192, 132, 252, 0.35)",
          backgroundColor: isHovering
            ? "rgba(168, 85, 247, 0.12)"
            : isClicking
            ? "rgba(236, 72, 153, 0.18)"
            : "rgba(255, 255, 255, 0.02)",
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="rounded-full border backdrop-blur-[0.5px] shadow-[0_0_15px_rgba(168,85,247,0.2)]"
      />

      {/* 3. Central Micro Pointer Dot (Zero Latency) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.65 : isHovering ? 1.4 : 1,
          backgroundColor: isHovering
            ? "#c084fc"
            : isClicking
            ? "#f472b6"
            : "#ffffff",
        }}
        transition={{ duration: 0.1 }}
        className="h-2 w-2 rounded-full shadow-[0_0_10px_rgba(192,132,252,0.9)]"
      />
    </div>
  );
};
