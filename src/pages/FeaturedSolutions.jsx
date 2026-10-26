import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { SOLUTIONS_DATA } from '../data/solutionData';
import { 
  Cpu, ShieldCheck, Zap, Workflow, ArrowRight, 
  CheckCircle2, Lock, Layers, Database, Activity 
} from 'lucide-react';

const ARCHITECTURE_DETAILS = [
  {
    id: 1,
    title: "Technology-Enabled Digital Workforce",
    subtitle: "Workforce Scalability",
    problem: "Manual fatigue, high employee turnover, and frequent data transcription errors in daily routine back-office operations.",
    techSolution: "Deploying trained operational teams equipped with proprietary validation scripts, dual-monitor review desks, and real-time error auditing.",
    deliverables: [
      "Dedicated multi-shift operations staffing with designated leads",
      "Standardized step-by-step SOP documentation runbooks",
      "Real-time task burn-down and throughput reporting dashboards"
    ],
    metric: "0% Delivery Downtime"
  },
  {
    id: 2,
    title: "High-Volume Data Operations & ETL",
    subtitle: "Data Pipeline Governance",
    problem: "Scattered data across PDF invoices, legacy ERP databases, and unverified vendor spreadsheets causing long processing backlogs.",
    techSolution: "Automated ingestion scripts that extract, clean, cross-verify against master catalogs, and load into query-ready SQL structures.",
    deliverables: [
      "Deduplicated database records with relational foreign-key validation",
      "Daily discrepancy exception queue and anomaly reports",
      "Validated JSON/CSV feeds delivered directly into internal ERPs"
    ],
    metric: "99.85% Extraction Accuracy"
  },
  {
    id: 3,
    title: "Enterprise Business Automation Pipelines",
    subtitle: "Automated Task Execution",
    problem: "Slow approval cycles, manual email notification drafting, and delayed billing reconciliations slowing down operations.",
    techSolution: "Rule-based webhooks and automated background daemons that dispatch status updates, generate branded invoices, and alert stakeholders.",
    deliverables: [
      "Instant event-triggered webhook dispatches across internal channels",
      "Automated PDF document compilation and branded invoice dispatch",
      "Scheduled nightly ledger reconciliation jobs with zero discrepancy"
    ],
    metric: "70% Faster Turnaround"
  },
  {
    id: 4,
    title: "Workflow Management & SOP Standardization",
    subtitle: "Process Optimization",
    problem: "Unstructured knowledge silos, lack of documented operational runbooks, and high dependency on individual tribal knowledge.",
    techSolution: "Creating standardized digital workflows, centralized document indexing, and auditable approval hierarchies for every business function.",
    deliverables: [
      "Standardized operating procedures with stage-by-stage checklists",
      "Centralized cloud repository with role-isolated document access",
      "Managerial sign-off logs and productivity audit reports"
    ],
    metric: "100% SOP Compliance"
  },
  {
    id: 5,
    title: "Custom Technology Development",
    subtitle: "Bespoke Engineering",
    problem: "Commercial off-the-shelf software tools failing to accommodate unique operational rules and business constraints.",
    techSolution: "Designing targeted web modules, operations portals, and secure API bridges built around your exact operational workflows.",
    deliverables: [
      "Lightweight custom web portals built on React and Vite architectures",
      "Secure RESTful APIs linking legacy tools to modern cloud storage",
      "Clean, maintainable source code repositories with comprehensive runbooks"
    ],
    metric: "Tailored Architecture"
  }
];

export default function FeaturedSolutions({ setCurrentPage }) {
  const [activeSolution, setActiveSolution] = useState(1);
  const current = ARCHITECTURE_DETAILS.find(s => s.id === activeSolution) || ARCHITECTURE_DETAILS[0];

  return (
    <section id="solutions" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16 transition-colors duration-300">
      <SectionHeader 
        eyebrow="SOLUTIONS ARCHITECTURE" 
        title="Featured Business Solutions"
        desc="Turnkey systems designed around workforce optimization, automation, and data precision." 
      />

      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Column: Solution Selector List */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
          {ARCHITECTURE_DETAILS.map((sol) => {
            const isSelected = sol.id === activeSolution;
            return (
              <div
                key={sol.id}
                onClick={() => setActiveSolution(sol.id)}
                className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected 
                    ? 'bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-[#091122] border-cyan-500/60 shadow-xl shadow-cyan-500/10' 
                    : 'bg-white dark:bg-[#080d1a] border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:translate-x-1 sm:hover:translate-x-1.5 hover:shadow-md'
                }`}
              >
                <div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                    {sol.subtitle}
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold transition-colors ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                    {sol.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{sol.problem}</p>
                </div>
                <ArrowRight size={18} className={`transition-all duration-200 shrink-0 ml-2 sm:ml-3 ${isSelected ? 'text-cyan-600 dark:text-cyan-400 translate-x-1' : 'text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-1 sm:group-hover:translate-x-1.5'}`} />
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Architectural Breakdown */}
        <div key={activeSolution} className="lg:col-span-7 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-br dark:from-[#091224] dark:to-[#060a14] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between relative overflow-hidden animate-fade-in hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 w-fit">
                FRAMEWORK: {current.subtitle}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                <Activity size={14} className="animate-pulse shrink-0" /> PRODUCTION READY
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6">
              {current.title}
            </h3>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-rose-500/30 transition-colors cursor-default">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-rose-500 dark:text-rose-400 uppercase tracking-wide block mb-1">The Operational Bottleneck</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{current.problem}</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-colors cursor-default">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide block mb-1">HAKA Engineered Solution</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{current.techSolution}</p>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Standard Deliverables</span>
              {current.deliverables.map((item, idx) => (
                <div key={idx} className="group flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:translate-x-1 transition-all duration-200 cursor-default">
                  <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 block hover:scale-105 transition-transform cursor-default">{current.metric}</span>
              <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Performance Guarantee</span>
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Request Solution Scope 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

        </div>

      </div>

      <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d1c] border border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center shadow-md dark:shadow-none">
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white block mb-1">ISO-Aligned</span>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Strict confidential information separation.</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
          <span className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400 block mb-1">Zero Lock-In</span>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Exportable, clean relational datasets.</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white block mb-1">Sub-Second Sync</span>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Optimized background pipeline caching.</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
          <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 block mb-1">Dedicated Shifts</span>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">Trained personnel for continuous delivery.</p>
        </div>
      </div>
    </section>
  );
}
