"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Toast } from "@/components/ui/Toast";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setToastType("error");
      setToastMessage("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setToastType("success");
        setToastMessage("Message received. Shubhangi will respond shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });

        try {
          confetti({
            particleCount: 40,
            spread: 60,
            origin: { y: 0.8 },
            colors: ["#8b5cf6", "#a855f7", "#ffffff"],
          });
        } catch (cErr) {
          // ignore if canvas not supported
        }
      } else {
        setToastType("error");
        setToastMessage(data.error || "Failed to deliver message. Please try again.");
      }
    } catch (err) {
      setToastType("error");
      setToastMessage("Network error. Please email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage(null)}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start space-y-2 border-b border-white/[0.08] pb-6"
      >
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-purple-400">
          Get in Touch
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Contact &amp; Inquiries
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md">
            Open to discussions regarding Data Engineering, Data Science internships, or Full-Stack AI engineering positions.
          </p>
        </div>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-5">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
              Direct Contact
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <motion.a
                whileHover={{ x: 3 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-3 rounded-xl border border-white/[0.06] bg-slate-900/60 p-3.5 text-slate-300 hover:border-purple-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-purple-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </motion.a>

              <motion.a
                whileHover={{ x: 3 }}
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-3 rounded-xl border border-white/[0.06] bg-slate-900/60 p-3.5 text-slate-300 hover:border-purple-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-purple-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </motion.a>

              <div className="flex items-center space-x-3 rounded-xl border border-white/[0.06] bg-slate-900/60 p-3.5 text-slate-300">
                <MapPin className="h-4 w-4 text-purple-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-slate-400 block mb-2.5">
                Profiles
              </span>
              <div className="flex space-x-2">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 rounded-lg border border-white/[0.08] bg-slate-900/60 py-2 text-xs text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 rounded-lg border border-white/[0.08] bg-slate-900/60 py-2 text-xs text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-white/[0.08] bg-slate-900/60 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@domain.com"
                  className="w-full rounded-lg border border-white/[0.08] bg-slate-900/60 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Data Engineering / Opportunity Inquiry"
                className="w-full rounded-lg border border-white/[0.08] bg-slate-900/60 px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Message <span className="text-rose-400">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Details about the role, project, or collaboration..."
                className="w-full rounded-lg border border-white/[0.08] bg-slate-900/60 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center justify-center space-x-2 rounded-lg bg-white py-2.5 text-xs sm:text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-all disabled:opacity-60 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
