"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface ToastProps {
  message: string | null;
  type?: "success" | "error";
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = "success", onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 rounded-2xl border border-purple-500/30 bg-[#0c0a1a]/95 px-4 py-3 shadow-[0_0_30px_rgba(139,92,246,0.35)] backdrop-blur-xl"
        >
          {type === "success" ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 text-rose-400 shrink-0" />
          )}

          <span className="text-xs sm:text-sm font-medium text-slate-200">{message}</span>

          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
