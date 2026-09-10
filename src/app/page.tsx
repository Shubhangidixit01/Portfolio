"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CVModal } from "@/components/ui/CVModal";

export default function Home() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <>
      {/* Fixed Glassmorphic Navigation Bar */}
      <Header onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Single-Page Content */}
      <main className="flex-1 space-y-12 sm:space-y-16">
        <HeroSection onOpenCV={() => setIsCVOpen(true)} />
        <AboutSection />
        <EducationSection />
        <SkillsMatrix />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>

      {/* Footer with back-to-top and copyright */}
      <Footer />

      {/* Embedded CV Preview Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </>
  );
}
