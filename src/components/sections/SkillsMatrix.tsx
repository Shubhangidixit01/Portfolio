"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Database, PieChart, Layers, Cpu, Code2 } from "lucide-react";

interface SkillCardItem {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  description: string;
  skills: string[];
}

const SKILL_CARDS: SkillCardItem[] = [
  {
    title: "Python & Data Analytics",
    icon: BarChart3,
    iconColor: "text-purple-400",
    description:
      "Hands-on experience in exploratory data analysis, missing-value imputation, outlier detection, and statistical evaluations to find patterns, trends, and useful insights.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "EDA"],
  },
  {
    title: "Database Management & SQL",
    icon: Database,
    iconColor: "text-indigo-400",
    description:
      "Writing queries, working with relational data, and using joins, aggregations, and subqueries to answer data questions.",
    skills: ["SQL", "MySQL", "SQLite", "Relational Modeling"],
  },
  {
    title: "Data Visualization",
    icon: PieChart,
    iconColor: "text-violet-400",
    description:
      "Creating interactive dashboards, KPI and visual reports that turn analysis into clear insights.",
    skills: ["Power BI Desktop", "Tableau Public", "MS Excel", "DAX", "Seaborn", "Matplotlib"],
  },
  {
    title: "ETL & Data Workflow",
    icon: Layers,
    iconColor: "text-cyan-400",
    description:
      "Moving, Cleaning, Transforming, and loading multi-source data while preserving data consistency.",
    skills: ["ETL Automation", "Data Transformation", "Data Wrangling", "Schema Normalization"],
  },
  {
    title: "Web & AI Development",
    icon: Cpu,
    iconColor: "text-emerald-400",
    description:
      "Building web applications with backend APIs, authentication, and integrating modern AI services such as the Google Gemini API.",
    skills: ["React.js", "Node.js", "Express.js", "Flask", "Gemini API", "REST APIs"],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    iconColor: "text-amber-400",
    description:
      "Solid foundation in algorithms, Object-Oriented Programming (OOP), and problem-solving across multiple languages.",
    skills: ["Python", "Java", "JavaScript", "C++", "C", "R"],
  },
];

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400 block mb-2">
          Technical Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Languages, Tools &amp; Platforms
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base">
          Practical skills developed through academic coursework, personal projects, and real-world data problem solving.
        </p>
      </motion.div>

      {/* Skills 3-column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CARDS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-card rounded-xl p-6 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Circular Icon Container */}
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-slate-900 border border-white/[0.08] flex items-center justify-center group-hover:bg-slate-800 group-hover:scale-110 transition-all duration-300">
                    <Icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white text-center mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm text-center leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Skill Pill Badges */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap justify-center gap-1.5">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-white/[0.06] bg-slate-900/60 px-2 py-0.5 text-[11px] font-mono text-slate-300 hover:text-white hover:border-purple-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
