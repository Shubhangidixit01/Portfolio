"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Mail, Brain, BarChart2, Database, Code2, TrendingUp, Cpu, Network } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroSectionProps {
  onOpenCV: () => void;
}

const ROLES = [
  "Data Scientist",
  "Python • Java • SQL • Analytics",
  "Full Stack & AI Engineer",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// ── Floating particle ──────────────────────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function useParticles(count: number) {
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    particlesRef.current = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.015,
      speedY: (Math.random() - 0.5) * 0.015,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, [count]);

  return particlesRef;
}

// ── Animated canvas background ─────────────────────────────────────────────
function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // init particles
    particlesRef.current = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // draw grid lines
      ctx.strokeStyle = "rgba(139,92,246,0.04)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // update & draw particles
      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.opacity})`;
        ctx.fill();
      });

      // draw connections
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139,92,246,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}

// ── Orbital Data Science Widget ───────────────────────────────────────────
// 6 icons placed at 60° increments on two concentric orbit rings
const ORBIT_ICONS = [
  { icon: Brain, color: "#a78bfa", label: "ML / AI", ring: 1, angle: 0 },
  { icon: Database, color: "#60a5fa", label: "Data Eng", ring: 1, angle: 120 },
  { icon: TrendingUp, color: "#f472b6", label: "Insights", ring: 1, angle: 240 },
  { icon: BarChart2, color: "#34d399", label: "Analytics", ring: 2, angle: 60 },
  { icon: Code2, color: "#fbbf24", label: "Python", ring: 2, angle: 180 },
  { icon: Cpu, color: "#818cf8", label: "Deep Learn", ring: 2, angle: 300 },
];

// ring sizes (radius in px)
const RING_R = { 1: 90, 2: 140 } as const;

function OrbitalWidget() {
  // The canvas is square; side = 2 * outerRadius + icon padding
  const SIZE = 320;
  const CENTER = SIZE / 2;

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      className="relative flex-shrink-0 hidden lg:flex items-center justify-center"
      style={{ width: SIZE, height: SIZE }}
    >
      {/* ── Ambient glow behind whole widget ── */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* ── Ring 1 (inner) – slow clockwise ── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          width: RING_R[1] * 2,
          height: RING_R[1] * 2,
          border: "1px dashed rgba(139,92,246,0.22)",
        }}
      />

      {/* ── Ring 2 (outer) – slower counter-clockwise ── */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          width: RING_R[2] * 2,
          height: RING_R[2] * 2,
          border: "1px dashed rgba(99,102,241,0.18)",
        }}
      />

      {/* ── Icons on orbits ── */}
      {ORBIT_ICONS.map(({ icon: Icon, color, label, ring, angle }, i) => {
        const r = RING_R[ring as 1 | 2];
        // Convert polar → Cartesian (angle 0 = top)
        const rad = ((angle - 90) * Math.PI) / 180;
        const x = CENTER + r * Math.cos(rad);
        const y = CENTER + r * Math.sin(rad);

        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.12, duration: 0.45, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.25 }}
            className="absolute flex items-center justify-center rounded-2xl cursor-default"
            style={{
              width: 44,
              height: 44,
              left: x - 22,
              top: y - 22,
              background: "rgba(15,17,28,0.85)",
              border: `1px solid ${color}33`,
              boxShadow: `0 0 14px ${color}22, inset 0 0 6px ${color}11`,
              backdropFilter: "blur(8px)",
            }}
          >
            <Icon style={{ color }} className="w-5 h-5" />
          </motion.div>
        );
      })}

      {/* ── Central glowing orb with neural network icon ── */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full flex items-center justify-center"
        style={{
          width: 64,
          height: 64,
          left: CENTER - 32,
          top: CENTER - 32,
          background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(109,40,217,0.35) 60%, transparent 100%)",
          border: "1px solid rgba(167,139,250,0.55)",
          boxShadow: "0 0 32px rgba(139,92,246,0.5), 0 0 60px rgba(139,92,246,0.2), inset 0 0 16px rgba(167,139,250,0.25)",
        }}
      >
        <Network className="w-5 h-5 text-white/90" style={{ filter: "drop-shadow(0 0 6px rgba(167,139,250,0.8))" }} />
      </motion.div>

      {/* ── Slow-pulse outer halo ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 80,
          height: 80,
          left: CENTER - 40,
          top: CENTER - 40,
          background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </motion.div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCV }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ── Animated canvas background ── */}
      <AnimatedBackground />

      {/* ── Glowing orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-left glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Top-right glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Bottom-center glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* ── Content row ── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex items-center gap-12 lg:gap-20">
        {/* Left: text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-start space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 rounded-full border border-white/[0.08] bg-slate-900/60 px-3.5 py-1.5 text-xs text-slate-300 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px]">Open to Data &amp; AI Roles</span>
          </motion.div>

          {/* Name Headline — gradient */}
          <motion.div variants={itemVariants} className="space-y-1.5">
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
              style={{
                background: "linear-gradient(135deg, #e0aaff 0%, #c77dff 20%, #a855f7 45%, #7c3aed 65%, #6366f1 85%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "gradientShift 5s ease infinite",
              }}
            >
              Shubhangi Dixit
            </h1>
            <div className="h-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-mono text-lg sm:text-xl font-medium text-purple-400"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Tagline / Bio from portfolioData */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 rounded-xl bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-all shadow-sm cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download="Shubhangi_Dixit_Resume.pdf"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 rounded-xl border border-white/[0.1] bg-slate-900/80 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5 text-purple-400" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4 pt-3 text-slate-400 text-xs font-mono"
          >
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "#ffffff" }}
              className="flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </motion.a>
            <span>•</span>
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "#ffffff" }}
              className="flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </motion.a>
            <span>•</span>
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ y: -2, color: "#ffffff" }}
              className="flex items-center space-x-1.5 transition-colors cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Orbital Data Science widget */}
        <OrbitalWidget />
      </div>

      {/* ── Inline keyframe for name gradient ── */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};
