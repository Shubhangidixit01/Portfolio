"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Award, Database, Cloud, Code, BarChart, Sparkles } from "lucide-react";
import { CERTIFICATES } from "@/data/portfolioData";

export const CertificatesSection: React.FC = () => {
  const getCertIcon = (iconType: string) => {
    switch (iconType) {
      case "database":
        return <Database className="h-5 w-5 text-indigo-400" />;
      case "cloud":
        return <Cloud className="h-5 w-5 text-cyan-400" />;
      case "code":
        return <Code className="h-5 w-5 text-amber-400" />;
      case "analytics":
        return <BarChart className="h-5 w-5 text-purple-400" />;
      case "ai":
        return <Sparkles className="h-5 w-5 text-violet-400" />;
      default:
        return <Award className="h-5 w-5 text-emerald-400" />;
    }
  };

  const getIssuerBadgeColor = (issuer: string) => {
    if (issuer.includes("Deloitte")) return "text-emerald-300 border-emerald-500/30 bg-emerald-950/40";
    if (issuer.includes("Infosys")) return "text-blue-300 border-blue-500/30 bg-blue-950/40";
    if (issuer.includes("Lovely")) return "text-purple-300 border-purple-500/30 bg-purple-950/40";
    if (issuer.includes("Microsoft")) return "text-cyan-300 border-cyan-500/30 bg-cyan-950/40";
    return "text-slate-300 border-white/[0.08] bg-slate-900/60";
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400 block mb-2">
          Certifications &amp; Training
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Certifications &amp; Courses
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base">
          Verified industry credentials and coursework across data analytics, database management, and programming.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CERTIFICATES.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="glass-card rounded-xl overflow-hidden border border-white/[0.08] hover:border-purple-500/30 transition-colors flex flex-col justify-between group"
          >
            {/* Top Visual Banner Frame */}
            <div className="relative h-32 w-full bg-gradient-to-br from-slate-900 via-[#0f121d] to-slate-900 border-b border-white/[0.06] p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="h-9 w-9 rounded-lg bg-slate-900 border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getCertIcon(cert.iconType)}
                </div>
                {cert.grade && (
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400">
                    {cert.grade}
                  </span>
                )}
              </div>

              <span
                className={`self-start inline-block rounded-md border px-2 py-0.5 text-[10px] font-mono ${getIssuerBadgeColor(
                  cert.issuer
                )}`}
              >
                {cert.issuer}
              </span>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-white text-sm leading-snug mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-xs mb-3">{cert.issuer}</p>

                <div className="flex items-center text-slate-400 text-xs font-mono mb-4">
                  <Calendar className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-white/[0.06]">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-medium text-purple-400 hover:text-white hover:underline transition-colors"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
