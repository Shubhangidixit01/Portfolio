"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award, GraduationCap, Briefcase, Code, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { RESUME_DATA } from "@/data/resumeData";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate a printable/downloadable text / markdown resume file dynamically
    const content = `
============================================================
${RESUME_DATA.name.toUpperCase()}
${RESUME_DATA.title}
Email: ${RESUME_DATA.email} | Phone: ${RESUME_DATA.phone}
Location: ${RESUME_DATA.location}
GitHub: ${RESUME_DATA.github} | LinkedIn: ${RESUME_DATA.linkedin}
============================================================

SUMMARY
-------
${RESUME_DATA.summary}

EDUCATION
---------
${RESUME_DATA.education
  .map(
    (e) => `* ${e.institution} - ${e.degree} (${e.duration})
  ${e.grade} | ${e.location}
  ${e.details.map((d) => `  - ${d}`).join("\n")}`
  )
  .join("\n\n")}

TECHNICAL COMPETENCIES
----------------------
* Data Engineering: ${RESUME_DATA.technicalSkills.dataEngineering.join(", ")}
* Data Science & Analytics: ${RESUME_DATA.technicalSkills.dataScienceAnalytics.join(", ")}
* Web & AI Engineering: ${RESUME_DATA.technicalSkills.webAndAI.join(", ")}
* Programming Languages: ${RESUME_DATA.technicalSkills.languages.join(", ")}

KEY PROJECTS
------------
${RESUME_DATA.projects
  .map(
    (p) => `* ${p.title} (${p.date})
  Tech Stack: ${p.tech}
  ${p.points.map((pt) => `  - ${pt}`).join("\n")}`
  )
  .join("\n\n")}

CERTIFICATIONS & ACCREDITATIONS
-------------------------------
${RESUME_DATA.certifications.map((c) => `* ${c}`).join("\n")}
============================================================
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Shubhangi_Dixit_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 flex flex-col h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-purple-500/30 bg-[#0c0a1a] shadow-[0_0_50px_rgba(139,92,246,0.3)]"
          >
            {/* Modal Top Action Toolbar */}
            <div className="flex flex-wrap items-center justify-between border-b border-purple-500/20 bg-[#120e2e]/90 px-4 py-3 sm:px-6">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-violet-400 animate-pulse" />
                <span className="font-mono text-sm font-medium text-purple-200">
                  Curriculum Vitae Preview • Shubhangi Dixit
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrint}
                  title="Print Resume"
                  className="flex items-center space-x-1.5 rounded-lg border border-purple-500/30 bg-purple-950/40 px-3 py-1.5 text-xs text-purple-200 hover:border-purple-400 hover:bg-purple-900/50 transition-all"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Print</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:brightness-110 active:scale-95 transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download CV</span>
                </button>

                <button
                  onClick={onClose}
                  aria-label="Close CV Modal"
                  className="rounded-lg border border-purple-500/20 p-1.5 text-slate-400 hover:bg-purple-900/40 hover:text-white transition-all ml-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Embedded Resume Content Viewer */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 text-slate-300 font-sans leading-relaxed">
              {/* CV Header */}
              <div className="border-b border-purple-500/20 pb-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {RESUME_DATA.name}
                    </h1>
                    <p className="mt-1 text-sm sm:text-base font-medium text-violet-400">
                      {RESUME_DATA.title}
                    </p>
                  </div>

                  <div className="flex flex-col space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-3.5 w-3.5 text-purple-400" />
                      <span className="text-slate-200">{RESUME_DATA.email}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="text-[10px] text-purple-400 hover:underline flex items-center space-x-0.5"
                      >
                        {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <span>copy</span>}
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3.5 w-3.5 text-purple-400" />
                      <span>{RESUME_DATA.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-3.5 w-3.5 text-purple-400" />
                      <span>{RESUME_DATA.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 pt-2 text-xs">
                  <a
                    href={RESUME_DATA.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-purple-200 hover:text-white hover:border-purple-400 transition-all"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>github.com/Shubhangidixit01</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={RESUME_DATA.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 px-3 py-1 text-purple-200 hover:text-white hover:border-purple-400 transition-all"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5" />
                    <span>linkedin.com/in/shubhangidixit01</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-purple-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span>Executive Summary</span>
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {RESUME_DATA.summary}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-purple-300">
                  <GraduationCap className="h-4 w-4 text-violet-400" />
                  <span>Education</span>
                </h2>
                <div className="mt-3 space-y-4">
                  {RESUME_DATA.education.map((edu, idx) => (
                    <div key={idx} className="rounded-xl border border-purple-500/15 bg-purple-950/20 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-semibold text-white text-sm">{edu.institution}</span>
                        <span className="text-xs text-purple-400 font-mono">{edu.duration}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1">
                        <span className="text-xs text-violet-300">{edu.degree}</span>
                        <span className="text-xs font-semibold text-emerald-400">{edu.grade}</span>
                      </div>
                      <ul className="mt-2.5 list-disc list-inside space-y-1 text-xs text-slate-400">
                        {edu.details.map((d, dIdx) => (
                          <li key={dIdx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-purple-300">
                  <Code className="h-4 w-4 text-violet-400" />
                  <span>Technical Competencies</span>
                </h2>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg border border-purple-500/15 bg-purple-950/20 p-3">
                    <span className="font-semibold text-purple-200">Data Engineering:</span>
                    <p className="mt-1 text-slate-300">
                      {RESUME_DATA.technicalSkills.dataEngineering.join(", ")}
                    </p>
                  </div>
                  <div className="rounded-lg border border-purple-500/15 bg-purple-950/20 p-3">
                    <span className="font-semibold text-purple-200">Data Science &amp; Analytics:</span>
                    <p className="mt-1 text-slate-300">
                      {RESUME_DATA.technicalSkills.dataScienceAnalytics.join(", ")}
                    </p>
                  </div>
                  <div className="rounded-lg border border-purple-500/15 bg-purple-950/20 p-3">
                    <span className="font-semibold text-purple-200">Web &amp; AI Engineering:</span>
                    <p className="mt-1 text-slate-300">
                      {RESUME_DATA.technicalSkills.webAndAI.join(", ")}
                    </p>
                  </div>
                  <div className="rounded-lg border border-purple-500/15 bg-purple-950/20 p-3">
                    <span className="font-semibold text-purple-200">Programming Languages:</span>
                    <p className="mt-1 text-slate-300">
                      {RESUME_DATA.technicalSkills.languages.join(", ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Featured Projects */}
              <div>
                <h2 className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-purple-300">
                  <Briefcase className="h-4 w-4 text-violet-400" />
                  <span>Key Engineering Projects</span>
                </h2>
                <div className="mt-3 space-y-4">
                  {RESUME_DATA.projects.map((proj, idx) => (
                    <div key={idx} className="rounded-xl border border-purple-500/15 bg-purple-950/20 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-semibold text-white text-sm">{proj.title}</span>
                        <span className="text-xs text-purple-400 font-mono">{proj.date}</span>
                      </div>
                      <span className="text-xs font-mono text-violet-400 mt-1 block">
                        Tech Stack: {proj.tech}
                      </span>
                      <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-300">
                        {proj.points.map((p, pIdx) => (
                          <li key={pIdx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-purple-300">
                  <Award className="h-4 w-4 text-violet-400" />
                  <span>Certifications &amp; Accreditations</span>
                </h2>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {RESUME_DATA.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 rounded-lg border border-purple-500/15 bg-purple-950/20 p-2.5"
                    >
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span className="text-slate-200">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Footer */}
            <div className="flex items-center justify-between border-t border-purple-500/20 bg-[#120e2e]/90 px-4 py-3 sm:px-6 text-xs text-slate-400">
              <span>Ready for Immediate Roles in Data Science &amp; Full-Stack Engineering</span>
              <button
                onClick={handleDownload}
                className="text-violet-400 hover:text-white font-medium underline flex items-center space-x-1"
              >
                <Download className="h-3 w-3" />
                <span>Save Plaintext Copy</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
