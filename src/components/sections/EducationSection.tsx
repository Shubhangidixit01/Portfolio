"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EDUCATION_LIST } from "@/data/portfolioData";

export const EducationSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeEdu = EDUCATION_LIST[selectedIdx];

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start space-y-2 border-b border-white/[0.08] pb-6"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400">
          Academic Journey
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Education Record
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Undergraduate computer science honours curriculum combined with foundational mathematics and science schooling.
          </p>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        {EDUCATION_LIST.map((item, idx) => {
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`relative flex items-center space-x-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-colors border ${isSelected
                ? "border-purple-500/40 text-white font-semibold"
                : "border-white/[0.06] text-slate-400 hover:text-slate-200"
                }`}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeEducationTab"
                  className="absolute inset-0 rounded-lg bg-purple-950/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <GraduationCap className="relative z-10 h-4 w-4 text-purple-400" />
              <span className="relative z-10">
                {idx === 0 ? "B.Tech CSE Hons. (LPU)" : "Secondary & Higher Secondary (CMS)"}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Card */}
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-white/[0.06] pb-5">
              <div>
                <span className="inline-block rounded border border-white/[0.08] bg-slate-900/80 px-2.5 py-0.5 font-mono text-xs text-purple-300 mb-2">
                  {activeEdu.field}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeEdu.institution}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
                  {activeEdu.degree}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>{activeEdu.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>{activeEdu.location}</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-[10px] font-mono uppercase text-slate-400">Score</span>
                <span className="font-mono text-2xl font-bold text-white mt-0.5">
                  {activeEdu.score}
                </span>
                <span className="text-xs text-emerald-400 mt-1 font-mono">Merit Cohort</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-6">
              <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                Achievements &amp; Focus
              </h4>
              <ul className="mt-3 space-y-2">
                {activeEdu.highlights.map((h, hIdx) => (
                  <motion.li
                    key={hIdx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: hIdx * 0.05 }}
                    className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{h}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Coursework */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                Key Coursework
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeEdu.courses.map((course, cIdx) => (
                  <span
                    key={cIdx}
                    className="rounded-md border border-white/[0.06] bg-slate-900/60 px-2.5 py-1 text-xs text-slate-300 font-mono hover:text-white hover:border-purple-500/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
