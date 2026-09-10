"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Activity, Database, CheckCircle2, RefreshCw } from "lucide-react";

export const TelemetryBadge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"metrics" | "pipeline">("metrics");
  const [recordCount, setRecordCount] = useState(72575);
  const [latency, setLatency] = useState(38);
  const [isRunningSim, setIsRunningSim] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(34 + Math.random() * 8));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const triggerIngestionPulse = () => {
    setIsRunningSim(true);
    let step = 0;
    const pulseTimer = setInterval(() => {
      step++;
      setRecordCount((prev) => prev + Math.floor(Math.random() * 30 + 15));
      if (step > 5) {
        clearInterval(pulseTimer);
        setIsRunningSim(false);
      }
    }, 150);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass-card w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0e17] p-5"
    >
      {/* Console Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="font-mono text-xs text-slate-400 ml-2">
            dixit_pipeline_monitor
          </span>
        </div>

        {/* Status indicator */}
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-[11px] text-slate-300">
            HEALTHY
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab("metrics")}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
              activeTab === "metrics"
                ? "bg-slate-800 text-white font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Activity className="h-3 w-3" />
            <span>Telemetry</span>
          </button>
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
              activeTab === "pipeline"
                ? "bg-slate-800 text-white font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Terminal className="h-3 w-3" />
            <span>Logs</span>
          </button>
        </div>

        <button
          onClick={triggerIngestionPulse}
          disabled={isRunningSim}
          className="flex items-center space-x-1 rounded-md border border-white/[0.08] bg-slate-800/60 px-2 py-1 text-[11px] font-mono text-slate-300 hover:bg-slate-700/60 transition-all"
        >
          <RefreshCw className={`h-3 w-3 ${isRunningSim ? "animate-spin text-purple-400" : ""}`} />
          <span>{isRunningSim ? "Processing..." : "Run ETL Pulse"}</span>
        </button>
      </div>

      {/* Content */}
      <div className="mt-4 min-h-[120px]">
        <AnimatePresence mode="wait">
          {activeTab === "metrics" ? (
            <motion.div
              key="metrics"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="rounded-xl border border-white/[0.06] bg-[#090b12] p-3">
                <span className="font-mono text-[10px] uppercase text-slate-400">Total Ingestion</span>
                <div className="mt-1 font-mono text-lg font-bold text-white">
                  {recordCount.toLocaleString()} <span className="text-xs text-slate-400 font-normal">records</span>
                </div>
                <div className="mt-1 text-[10px] text-slate-400 flex items-center space-x-1">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  <span>MGNREGA 6-State Pipeline</span>
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#090b12] p-3">
                <span className="font-mono text-[10px] uppercase text-slate-400">AI Integration</span>
                <div className="mt-1 font-mono text-lg font-bold text-white">
                  Gemini 1.5 Pro
                </div>
                <div className="mt-1 text-[10px] text-slate-400">
                  Vector Guidance Engine
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#090b12] p-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                  <span>LATENCY</span>
                  <span className="text-purple-400">{latency} ms</span>
                </div>
                <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: `${latency * 2}%` }} />
                </div>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-[#090b12] p-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                  <span>DATA INTEGRITY</span>
                  <span className="text-emerald-400">99.98%</span>
                </div>
                <div className="mt-2 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: "99.98%" }} />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-white/[0.06] bg-[#090b12] p-3 font-mono text-xs text-slate-300 space-y-1"
            >
              <div className="text-purple-400">$ python etl_orchestrator.py</div>
              <div className="text-slate-400">[INFO] Ingesting states: Punjab, UP, Bihar, WB, TN, RJ</div>
              <div className="text-emerald-400">[SUCCESS] 72,575 rows processed with IQR schema rules</div>
              <div className="text-slate-400">[INFO] Gemini API streaming ready</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
