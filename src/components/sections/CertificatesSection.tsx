"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Calendar, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { CERTIFICATES, CertificateItem } from "@/data/portfolioData";

type CertFilter = "All" | "Certificates" | "Certifications";

export const CertificatesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CertFilter>("All");
  // Track failed image loads to seamlessly display the elegant fallback preview
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (certId: string) => {
    setFailedImages((prev) => ({ ...prev, [certId]: true }));
  };

  const filteredCerts = CERTIFICATES.filter((cert) => {
    if (activeFilter === "All") return true;
    return cert.type === activeFilter;
  });

  const getCount = (filter: CertFilter) => {
    if (filter === "All") return CERTIFICATES.length;
    return CERTIFICATES.filter((c) => c.type === filter).length;
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400 block mb-2">
          Credentials &amp; Recognitions
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Certificates &amp; Certifications
        </h2>
        <p className="mt-3 text-slate-400 text-sm md:text-base">
          Verified course completions, technical honors, and professional credentials with individual issuance timelines.
        </p>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-[#0c0e17]/80 p-1.5 backdrop-blur-md">
          {(["All", "Certificates", "Certifications"] as CertFilter[]).map((filter) => {
            const isSelected = activeFilter === filter;
            const count = getCount(filter);
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCertTabPill"
                    className="absolute inset-0 rounded-xl bg-slate-800/90 border border-white/[0.15] shadow-lg"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {filter}
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

      {/* Responsive 3-column Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert: CertificateItem, idx: number) => {
            const hasImageError = failedImages[cert.id];
            const imageSrc = cert.imageUrl || `/certificates/${cert.id}.jpg`;

            return (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, delay: (idx % 6) * 0.05 }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(168, 85, 247, 0.4)",
                  boxShadow: "0 16px 36px -12px rgba(139, 92, 246, 0.22)",
                  transition: { duration: 0.2 },
                }}
                className="group relative rounded-2xl overflow-hidden bg-[#0d101d]/90 border border-white/[0.08] flex flex-col justify-between transition-all duration-300"
              >
                {/* Top Certificate Image Area with Corner Timeline */}
                <div className="relative w-full aspect-[16/10] bg-slate-950/80 border-b border-white/[0.06] overflow-hidden">
                  {/* Timeline Badge in Top Corner (Prominent) */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 px-3 py-1 text-xs font-mono font-semibold text-purple-300 backdrop-blur-md shadow-lg group-hover:border-purple-400 transition-colors">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{cert.date}</span>
                  </div>

                  {/* Issuer Tag in Top Left */}
                  <div className="absolute top-3 left-3 z-30">
                    <span className="rounded-full bg-slate-900/85 border border-white/[0.1] px-2.5 py-0.5 text-[10px] font-mono text-slate-300 backdrop-blur-md shadow-md">
                      {cert.issuer}
                    </span>
                  </div>

                  {!hasImageError ? (
                    <div className="relative w-full h-full p-2 pt-11 bg-[#090b14]">
                      <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/[0.06]">
                        <Image
                          src={imageSrc}
                          alt={cert.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={() => handleImageError(cert.id)}
                        />
                        {/* Subtle dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                      </div>
                    </div>
                  ) : (
                    /* Elegant Fallback Banner when image is not yet uploaded */
                    <div className="relative w-full h-full p-5 pt-12 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-[#101426] to-slate-950">
                      {/* Watermark Pattern */}
                      <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />

                      <div className="relative z-10 my-auto">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-7 w-7 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center">
                            <Award className="w-4 h-4 text-purple-400" />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 font-semibold">
                            Verified Credential
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-base leading-snug line-clamp-2">
                          {cert.title}
                        </h4>
                      </div>

                      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/[0.05]">
                        <div className="flex items-center gap-1 text-emerald-400">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Verified</span>
                        </div>
                        <span>ID: {cert.credentialId || cert.id}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Issuer Subtitle */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-400">
                        {cert.issuer}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {cert.type || "Certificate"}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-lg leading-snug group-hover:text-purple-300 transition-colors line-clamp-2 mb-3">
                      {cert.title}
                    </h3>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.skills.slice(0, 4).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-white/[0.08] text-slate-300 text-[11px] font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-900/80 border border-white/[0.08] text-slate-400 text-[10px] font-mono">
                          +{cert.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Info & Verification Link */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center text-slate-400 text-xs font-mono">
                      <Calendar className="h-3.5 w-3.5 mr-1.5 text-purple-400" />
                      <span>{cert.date}</span>
                    </div>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-purple-400 hover:text-white transition-colors group/link"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
