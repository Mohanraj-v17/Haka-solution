import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Database, Cloud, Cpu, ShieldCheck, Terminal, 
  Layers, Server, Code2, Lock, Activity, CheckCircle2, ArrowRight 
} from 'lucide-react';

const DETAILED_STACK = [
  {
    id: 'data',
    category: "Data & Storage Pipeline",
    headline: "High-Volume Structured Data Ingestion",
    tools: ["PostgreSQL", "Cloud Object Storage", "Redis In-Memory Cache", "Automated ETL Parsers"],
    description: "Multi-region redundant relational databases configured with automated nightly replication and point-in-time snapshot recovery.",
    specs: [
      "Relational schema indexing designed for high-concurrency read queries",
      "Automated deduplication and normalization algorithms for incoming raw feeds",
      "Nightly cold-storage backups with encrypted file transport",
      "Real-time pipeline health telemetry with failure alert triggers"
    ],
    metric: "99.99% Retention"
  },
  {
    id: 'frontend',
    category: "Frontend UI & Speed",
    headline: "Sub-Second Latency User Interfaces",
    tools: ["React 19", "Vite Bundler", "Tailwind CSS v4", "Zero-Bloat Vanilla JS"],
    description: "Component architectures built strictly for sub-second first-contentful paint, zero layout shifts, and responsive touch viewports.",
    specs: [
      "Lightweight bundle sizes free of heavy third-party tracking libraries",
      "Mobile-first responsive grids supporting 375px to 4K ultra-wide resolutions",
      "Local state caching for seamless tab transitions and form responsiveness",
      "Strict semantic HTML structure adhering to WCAG accessibility guidelines"
    ],
    metric: "90+ Lighthouse"
  },
  {
    id: 'automation',
    category: "Automation & Daemons",
    headline: "Headless Background Daemons & Webhooks",
    tools: ["Cron Workers", "Webhook Listeners", "RESTful Bridging", "Node.js Daemons"],
    description: "Task daemons running asynchronous data validation routines without interrupting primary user access or operational systems.",
    specs: [
      "Automated batch schedulers triggering nightly spreadsheet reconciliation",
      "Webhook listeners capturing order updates and customer statuses in real time",
      "Self-healing task queues with automatic retry on transient network failures",
      "Detailed event payload logging for complete execution auditability"
    ],
    metric: "< 50ms Latency"
  },
  {
    id: 'security',
    category: "Zero-Trust Security",
    headline: "Enterprise Data Isolation & Governance",
    tools: ["Role-Based Access (RBAC)", "AES-256 Encryption", "TLS 1.3 Transport", "Audit Event Logging"],
    description: "Client files are isolated with least-privilege policies, preventing unauthorized read access across separate client environments.",
    specs: [
      "Client environment isolation ensuring zero cross-tenant data exposure",
      "Encrypted credential vaults with automatic rotation schedules",
      "Immutable historical audit trails tracking every administrative query",
      "Regular penetration audits and dependency vulnerability scanning"
    ],
    metric: "Zero Leak Security"
  }
];

export default function TechStack({ setCurrentPage }) {
  const [activeStack, setActiveStack] = useState('data');
  const current = DETAILED_STACK.find(s => s.id === activeStack) || DETAILED_STACK[0];

  return (
    <section id="technology" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16 transition-colors duration-300">
      <SectionHeader 
        eyebrow="SYSTEM ARCHITECTURE" 
        title="Modern, Resilient Technical Infrastructure"
        desc="Production-tested toolchains powering our operational software, automated bots, and digital pipelines." 
      />

      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Column: Stack Selectors */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
          {DETAILED_STACK.map((item, idx) => {
            const isSelected = item.id === activeStack;
            return (
              <div
                key={item.id}
                onClick={() => setActiveStack(item.id)}
                className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected 
                    ? 'bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-[#091122] border-cyan-500/60 shadow-xl shadow-cyan-500/10' 
                    : 'bg-white dark:bg-[#080d1a] border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:translate-x-1 sm:hover:translate-x-1.5 hover:shadow-md'
                }`}
              >
                <div>
                  <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                    LAYER 0{idx + 1}
                  </span>
                  <h4 className={`text-sm sm:text-base font-bold transition-colors ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                    {item.category}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{item.description}</p>
                </div>
                <ArrowRight size={18} className={`transition-all duration-200 shrink-0 ml-2 sm:ml-3 ${isSelected ? 'text-cyan-600 dark:text-cyan-400 translate-x-1' : 'text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-1 sm:group-hover:translate-x-1.5'}`} />
              </div>
            );
          })}
        </div>

        {/* Right Column: Layer Deep-Dive Display */}
        <div key={activeStack} className="lg:col-span-7 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-br dark:from-[#091224] dark:to-[#060a14] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between relative overflow-hidden animate-fade-in hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 w-fit">
                ACTIVE LAYER: {current.category}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                <Activity size={14} className="animate-pulse shrink-0" /> VERIFIED DEPLOYMENT
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2.5 sm:mb-3">
              {current.headline}
            </h3>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 sm:mb-6">
              {current.description}
            </p>

            <div className="mb-6 sm:mb-8">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Production Toolset</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {current.tools.map((t, idx) => (
                  <span 
                    key={idx} 
                    className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-105 transition-all duration-150 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Operational Specifications</span>
              {current.specs.map((spec, idx) => (
                <div key={idx} className="group flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:translate-x-1 transition-all duration-200 cursor-default">
                  <CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 block hover:scale-105 transition-transform cursor-default">{current.metric}</span>
              <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Reliability Standard</span>
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Consult With Engineers 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

        </div>

      </div>

      <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-xs text-slate-700 dark:text-slate-300 shadow-md dark:shadow-none">
        <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
          <Lock className="text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform" size={20} />
          <span>Encrypted Transmission via TLS 1.3</span>
        </div>
        <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
          <Terminal className="text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform" size={20} />
          <span>Full Historical Audit Trail Logging</span>
        </div>
        <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
          <ShieldCheck className="text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform" size={20} />
          <span>Strict Role-Based Personnel Separation</span>
        </div>
      </div>
    </section>
  );
}
