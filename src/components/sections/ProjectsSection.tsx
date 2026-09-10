"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Database, Sparkles, Shield, Layers } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS, ProjectItem } from "@/data/portfolioData";

type CategoryFilter = "All" | "Data Science & Engineering" | "Full-Stack & AI" | "Security";

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  const getProjectIcon = (category: string) => {
    switch (category) {
      case "Data Science & Engineering":
        return <Database className="h-5 w-5 text-indigo-400" />;
      case "Full-Stack & AI":
        return <Sparkles className="h-5 w-5 text-purple-400" />;
      case "Security":
        return <Shield className="h-5 w-5 text-emerald-400" />;
      default:
        return <Layers className="h-5 w-5 text-slate-400" />;
    }
  };

  const getProjectGradient = (id: string) => {
    switch (id) {
      case "vector-ai-guidance":
        return "from-purple-950/70 via-slate-900 to-indigo-950/70";
      case "mgnrega-analysis":
        return "from-indigo-950/70 via-slate-900 to-blue-950/70";
      case "securefs-file-management":
        return "from-slate-900 via-emerald-950/40 to-slate-900";
      default:
        return "from-slate-900 to-purple-950/40";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400 block mb-2">
          Projects Portfolio
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Featured Work &amp; Applications
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base">
          Practical projects across large-scale data analysis, automated workflows, and full-stack software.
        </p>
      </motion.div>

      {/* Category Filter Pills */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-slate-900/50 p-1.5 backdrop-blur-sm">
          {(["All", "Data Science & Engineering", "Full-Stack & AI", "Security"] as CategoryFilter[]).map(
            (category) => {
              const isSelected = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`relative rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    isSelected
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-lg bg-slate-800 border border-white/[0.14] shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Projects 3-column Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl overflow-hidden border border-white/[0.08] hover:border-purple-500/30 transition-colors flex flex-col justify-between group"
            >
              {/* Top Visual Card Header */}
              <div>
                <div
                  className={`relative h-44 w-full bg-gradient-to-br ${getProjectGradient(
                    project.id
                  )} border-b border-white/[0.06] p-5 flex flex-col justify-between overflow-hidden`}
                >
                  {/* Ambient Pattern */}
                  <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="h-9 w-9 rounded-lg bg-slate-900/80 border border-white/[0.1] flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="rounded-full bg-slate-900/80 border border-white/[0.08] px-2.5 py-0.5 text-[10px] font-mono text-purple-300 backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-xs font-mono text-slate-400 block mb-1">
                      {project.subtitle}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 bg-slate-900/80 border border-white/[0.06] text-white text-[10px] font-mono rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 bg-slate-900/60 text-slate-400 text-[10px] font-mono rounded-full">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Points */}
                  <ul className="space-y-1.5 mb-5 text-xs text-slate-400">
                    {project.highlights.slice(0, 2).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-1.5">
                        <span className="text-purple-400 font-bold">•</span>
                        <span className="line-clamp-2">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-white/[0.06] flex items-center gap-3">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </motion.a>

                <motion.a
                  href={project.liveUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-purple-300 transition-colors ml-auto"
                >
                  <span>Live Details</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
