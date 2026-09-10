"use client";

import React from "react";
import { ArrowUp, Mail, Phone, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-purple-500/15 bg-[#07060e]/90 backdrop-blur-md pt-12 pb-8">
      {/* Ambient gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 max-w-4xl bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/10">
          {/* Brand & Persona */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-base font-bold tracking-tight text-white font-mono">
              SHUBHANGI DIXIT
            </span>
            <p className="mt-1 text-xs text-slate-400 max-w-sm">
              Data Science &amp; Engineering Specialist | Full-Stack AI Engineer. Architecting automated ETL systems and scalable intelligent web apps.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-950/20 text-slate-300 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-950/20 text-slate-300 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-950/20 text-slate-300 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="Send Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-950/20 text-slate-300 hover:border-purple-400 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
              aria-label="Call Phone"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-900/30 text-purple-300 hover:border-purple-400 hover:bg-purple-800/40 hover:text-white transition-all active:scale-95"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Shubhangi Dixit. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 text-purple-400 fill-purple-400 inline" />
            <span>using Next.js, Tailwind CSS &amp; Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
