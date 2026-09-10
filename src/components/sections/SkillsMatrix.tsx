"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Coffee,
  FileCode,
  Cpu,
  Terminal,
  BarChart2,
  BookOpen,
  BarChart3,
  PieChart,
  Table,
  Database,
  GitBranch,
  Box,
  Layers,
  Table2,
  LineChart,
  TrendingUp,
  Brain,
  Atom,
  Server,
  Workflow,
  Flame,
  Lightbulb,
  Target,
  MessageSquare,
  Users,
  Compass,
  Zap,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SKILL_ITEMS, SkillCategoryType } from "@/data/portfolioData";

type FilterTab = "All" | SkillCategoryType;

const TABS: { key: FilterTab; label: string }[] = [
  { key: "All", label: "All Skills" },
  { key: "Languages", label: "Languages" },
  { key: "Tools/Platforms", label: "Tools/Platforms" },
  { key: "Frameworks", label: "Frameworks" },
  { key: "Soft Skills", label: "Soft Skills" },
];

function getSkillIcon(iconName: string) {
  switch (iconName) {
    case "Code2":
      return <Code2 className="w-7 h-7 text-purple-400" />;
    case "Coffee":
      return <Coffee className="w-7 h-7 text-amber-400" />;
    case "FileCode":
      return <FileCode className="w-7 h-7 text-yellow-400" />;
    case "Cpu":
      return <Cpu className="w-7 h-7 text-blue-400" />;
    case "Terminal":
      return <Terminal className="w-7 h-7 text-cyan-400" />;
    case "BarChart2":
      return <BarChart2 className="w-7 h-7 text-indigo-400" />;
    case "BookOpen":
      return <BookOpen className="w-7 h-7 text-orange-400" />;
    case "BarChart3":
      return <BarChart3 className="w-7 h-7 text-blue-400" />;
    case "PieChart":
      return <PieChart className="w-7 h-7 text-amber-400" />;
    case "Table":
      return <Table className="w-7 h-7 text-emerald-400" />;
    case "Database":
      return <Database className="w-7 h-7 text-indigo-400" />;
    case "GitBranch":
      return <GitBranch className="w-7 h-7 text-red-400" />;
    case "Github":
      return <GithubIcon className="w-7 h-7 text-slate-300" />;
    case "Box":
      return <Box className="w-7 h-7 text-sky-400" />;
    case "Layers":
      return <Layers className="w-7 h-7 text-teal-400" />;
    case "Binary":
      return <Cpu className="w-7 h-7 text-blue-400" />;
    case "Table2":
      return <Table2 className="w-7 h-7 text-purple-400" />;
    case "LineChart":
      return <LineChart className="w-7 h-7 text-rose-400" />;
    case "TrendingUp":
      return <TrendingUp className="w-7 h-7 text-emerald-400" />;
    case "Brain":
      return <Brain className="w-7 h-7 text-pink-400" />;
    case "Atom":
      return <Atom className="w-7 h-7 text-cyan-400" />;
    case "Server":
      return <Server className="w-7 h-7 text-emerald-400" />;
    case "Workflow":
      return <Workflow className="w-7 h-7 text-violet-400" />;
    case "Flame":
      return <Flame className="w-7 h-7 text-orange-400" />;
    case "Lightbulb":
      return <Lightbulb className="w-7 h-7 text-amber-300" />;
    case "Target":
      return <Target className="w-7 h-7 text-rose-400" />;
    case "MessageSquare":
      return <MessageSquare className="w-7 h-7 text-sky-400" />;
    case "Users":
      return <Users className="w-7 h-7 text-indigo-400" />;
    case "Compass":
      return <Compass className="w-7 h-7 text-teal-400" />;
    case "Zap":
      return <Zap className="w-7 h-7 text-yellow-400" />;
    default:
      return <Sparkles className="w-7 h-7 text-purple-400" />;
  }
}

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredSkills = SKILL_ITEMS.filter((skill) => {
    if (activeTab === "All") return true;
    return skill.category === activeTab;
  });

  const getCount = (tabKey: FilterTab) => {
    if (tabKey === "All") return SKILL_ITEMS.length;
    return SKILL_ITEMS.filter((s) => s.category === tabKey).length;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400 block mb-2">
          Technical &amp; Professional Stack
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Skillset
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base">
          Core competencies, engineering toolsets, data frameworks, and collaborative abilities.
        </p>
      </motion.div>

      {/* Category Filter Pills (matching reference) */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-2 backdrop-blur-md">
          {TABS.map((tab) => {
            const isSelected = activeTab === tab.key;
            const count = getCount(tab.key);
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTabPill"
                    className="absolute inset-0 rounded-xl bg-slate-800/90 border border-white/[0.15] shadow-lg"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.label}
                  <span
                    className={`text-[11px] font-mono px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Individual Skill Cards Grid (matching reference) */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.3, delay: (idx % 10) * 0.03 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(168, 85, 247, 0.45)",
                boxShadow: "0 12px 30px -10px rgba(147, 51, 234, 0.25)",
                transition: { duration: 0.2 },
              }}
              className="group relative rounded-2xl bg-[#0d101d]/90 border border-white/[0.08] p-5 sm:p-6 flex flex-col items-center justify-between text-center transition-all duration-300 min-h-[160px]"
            >
              {/* Top ambient glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Icon */}
              <div className="relative z-10 my-auto flex items-center justify-center h-12 w-12 rounded-xl bg-slate-900/80 border border-white/[0.06] group-hover:scale-110 group-hover:border-purple-500/30 transition-transform duration-300 shadow-inner">
                {getSkillIcon(skill.iconName)}
              </div>

              {/* Skill Name */}
              <div className="relative z-10 mt-3 mb-2">
                <h3 className="font-bold text-white text-sm sm:text-base tracking-tight group-hover:text-purple-200 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Category Pill */}
              <div className="relative z-10">
                <span className="inline-block rounded-full bg-slate-900/90 border border-white/[0.08] px-2.5 py-0.5 text-[10px] font-mono text-slate-400 group-hover:text-purple-300 group-hover:border-purple-500/20 transition-colors">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
