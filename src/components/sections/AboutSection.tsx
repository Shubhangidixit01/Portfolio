"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, ShieldCheck } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Database,
      title: "Data Analysis",
      description:
        "Working with real-world datasets involving data cleaning, transformation, analysis, and visualization. Focus on finding useful patterns rather than just producing charts.",
    },
    {
      icon: Cpu,
      title: "Projects & Application",
      description:
        "Projects across data analysis, automation, web applications, and AI-assisted tools, with an emphasis on solving a specific problem from start to finish.",
    },
    {
      icon: ShieldCheck,
      title: "Learning & Development",
      description:
        "Continuously building practical skills through projects, coursework, certifications, and experimentation with new tools and technologies.",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start space-y-2 border-b border-white/[0.08] pb-6"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400">
          ABOUT
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Data, Projects &amp; Learning
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Hands-on work across data analysis, development, programming and AI tools, with a focus on learning through practical projects.
          </p>
        </div>
      </motion.div>

      {/* Metrics Row */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {PERSONAL_INFO.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="glass-card rounded-xl p-5 border border-white/[0.08] flex flex-col justify-between hover:border-purple-500/30 transition-colors"
          >
            <span className="text-xs font-mono text-slate-400">
              {stat.label}
            </span>
            <div className="mt-3 font-mono text-2xl sm:text-3xl font-bold text-white">
              {stat.value}
              <span className="text-xs font-normal text-purple-400">{stat.suffix}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3 Pillars Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 border border-white/[0.08] flex flex-col justify-between hover:border-purple-500/30 transition-colors group"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-slate-900/60 text-purple-400 group-hover:border-purple-500/40 group-hover:scale-105 transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
