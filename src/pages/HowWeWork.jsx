import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Search, PenTool, Rocket, LineChart, CheckCircle2, 
  ArrowRight, ShieldCheck, Clock, Layers, Activity 
} from 'lucide-react';

const WORKFLOW_STAGES = [
  {
    num: "01",
    phase: "UNDERSTAND",
    icon: Search,
    title: "Discovery & Operational Audit",
    timeframe: "Phase 01",
    headline: "Deconstructing Current Operational Bottlenecks",
    desc: "We perform a thorough audit of your current spreadsheets, workflow documents, task volumes, and team turnaround benchmarks to establish an operational baseline.",
    deliverables: [
      "In-depth stakeholder workflow interviews",
      "Data volume & pipeline profiling report",
      "Target SLA and accuracy baseline definition"
    ],
    kpi: "100% Problem Scope Mapped"
  },
  {
    num: "02",
    phase: "DESIGN",
    icon: PenTool,
    title: "Process & Tool Architecture",
    timeframe: "Phase 02",
    headline: "Drafting Zero-Friction Standard Operating Procedures",
    desc: "Our solution architects design the optimized operational flow, drafting standardized step-by-step SOPs and configuring custom validation scripts.",
    deliverables: [
      "Comprehensive SOP runbooks with validation checklists",
      "Relational database schema & foreign-key mapping",
      "Discrepancy alert trigger formulation"
    ],
    kpi: "Standardized Execution Matrix"
  },
  {
    num: "03",
    phase: "IMPLEMENT",
    icon: Rocket,
    title: "Phased Deployment & Shadowing",
    timeframe: "Phase 03",
    headline: "Parallel Execution with Zero Daily Disruption",
    desc: "We launch the dedicated operations shift alongside your internal staff, running parallel shadow runs to verify accuracy before live handover.",
    deliverables: [
      "Specialized shift team allocation and training",
      "Parallel data shadowing to eliminate transition gaps",
      "Live manager oversight dashboard integration"
    ],
    kpi: "Zero Operational Halts"
  },
  {
    num: "04",
    phase: "IMPROVE",
    icon: LineChart,
    title: "Continuous Auditing & Scaling",
    timeframe: "Phase 04",
    headline: "Ongoing Performance Optimization & Scaling",
    desc: "Dedicated operations leads inspect weekly batches, optimize script triggers, and scale support headcount for seasonal enterprise surges.",
    deliverables: [
      "Weekly accuracy audit scorecards & retrospective reviews",
      "Automated script trigger tuning for high-frequency tasks",
      "Quarterly operational cost-saving analysis"
    ],
    kpi: "Continuous SLA Enhancement"
  }
];

export default function HowWeWork({ setCurrentPage }) {
  const [selectedPhase, setSelectedPhase] = useState("01");
  const current = WORKFLOW_STAGES.find(s => s.num === selectedPhase) || WORKFLOW_STAGES[0];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#060b16] border-t border-slate-200 dark:border-slate-800/80 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        <SectionHeader 
          eyebrow="METHODOLOGY" 
          title="How We Work" 
          desc="A structured four-phase delivery framework ensuring zero service interruptions and verified operational execution." 
        />

        {/* 1. Horizontal Phase Progress Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {WORKFLOW_STAGES.map((stage) => {
            const isCurrent = stage.num === selectedPhase;
            const Icon = stage.icon;
            return (
              <div
                key={stage.num}
                onClick={() => setSelectedPhase(stage.num)}
                className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg ${
                  isCurrent 
                    ? 'bg-linear-to-b from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-[#091122] border-cyan-500/60 shadow-xl shadow-cyan-500/10' 
                    : 'bg-white dark:bg-[#080d1a] border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 dark:hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className={`text-xl sm:text-2xl font-black transition-colors ${isCurrent ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400 dark:text-slate-600 group-hover:text-cyan-500'}`}>
                      {stage.num}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                      {stage.timeframe}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                    <Icon size={16} className={`transition-all duration-300 group-hover:scale-110 shrink-0 ${isCurrent ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-500 dark:text-slate-400 group-hover:text-cyan-500'}`} />
                    <h4 className={`text-xs sm:text-sm font-bold transition-colors line-clamp-1 ${isCurrent ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                      {stage.title}
                    </h4>
                  </div>
                </div>
                <div className={`mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t text-[10px] sm:text-[11px] font-semibold transition-colors ${
                  isCurrent ? 'border-cyan-500/30 text-cyan-700 dark:text-cyan-300' : 'border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'
                }`}>
                  {stage.phase}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Interactive Deep Phase Display with Smooth Fade-in on switch */}
        <div key={selectedPhase} className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-br dark:from-[#091224] dark:via-[#070c18] dark:to-[#091224] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl relative overflow-hidden animate-fade-in hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 w-fit">
                  ACTIVE PHASE: {current.num} / {current.phase}
                </span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                  <Activity size={14} className="animate-pulse shrink-0" /> VERIFIED STANDARD
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                {current.headline}
              </h3>

              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {current.desc}
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-2">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Phase Deliverables</span>
                {current.deliverables.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group flex items-center gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:translate-x-1.5 transition-all duration-200 cursor-default"
                  >
                    <CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800/90 text-center flex flex-col justify-between h-full space-y-6 sm:space-y-8 hover:border-cyan-500/30 transition-colors mt-4 lg:mt-0">
              <div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2">Phase Success KPI</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-cyan-600 dark:text-cyan-400 block mb-2 hover:scale-105 transition-transform cursor-default">
                  {current.kpi}
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Verified through multi-stage stakeholder approval before moving to the subsequent operational milestone.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-left text-xs text-slate-500 dark:text-slate-400 space-y-1 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="flex justify-between text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  <span>Governance Compliance</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-mono">PASSED</span>
                </div>
                <p>Audited against non-disclosure and role-based data protection policies.</p>
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage && setCurrentPage('contact')}
                className="group w-full py-3.5 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                Inquire About Phase Delivery 
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>

          </div>

        </div>

        {/* 3. Phased Rollout Transition Guarantee Bar */}
        <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center text-xs shadow-md dark:shadow-none">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
            <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white block mb-1">Parallel Shadowing</span>
            <p className="text-slate-500 dark:text-slate-400">Zero downtime during process onboarding.</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
            <span className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400 block mb-1">Clear SOP Runbooks</span>
            <p className="text-slate-500 dark:text-slate-400">Step-by-step documentation for every task.</p>
          </div>
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
            <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 block mb-1">Weekly Retrospectives</span>
            <p className="text-slate-500 dark:text-slate-400">KPI review scorecards delivered on time.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
