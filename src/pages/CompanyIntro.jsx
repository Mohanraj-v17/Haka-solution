import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Building2, ShieldCheck, Target, Compass, Award, 
  Terminal, Activity, ArrowRight, Layers, Lock, Cpu, CheckCircle2 
} from 'lucide-react';

const PILLARS = [
  {
    id: 'operations',
    name: 'Operational Precision',
    badge: 'Core Engine',
    headline: 'Zero-Disruption Enterprise Process Execution',
    desc: 'HAKA SOLUTIONS manages repetitive, high-stakes operational workflows with standardized documentation and multi-shift supervisory coverage.',
    stats: [
      { label: 'Audit Accuracy', val: '99.85%' },
      { label: 'Turnaround Bench', val: '< 4 Hours' },
      { label: 'SOP Compliance', val: '100%' }
    ],
    logs: [
      'Ingesting batch manifests into standardized operational schemas...',
      'Dual-stage verification check: complete with 0 discrepancy flags.',
      'SOP audit logs archived to encrypted client storage bucket.'
    ]
  },
  {
    id: 'mission',
    name: 'Mission & Strategic Vision',
    badge: 'Enterprise Purpose',
    headline: 'Bridging Modern Technology with Daily Business Discipline',
    desc: 'To deliver reliable, tech-driven solutions that help organizations eliminate operational friction, reduce routine overhead, and scale sustainably.',
    stats: [
      { label: 'Global Standard', val: 'ISO Aligned' },
      { label: 'Continuous Shifts', val: '24/7 Desk' },
      { label: 'Human Error Rate', val: '0.01%' }
    ],
    logs: [
      'Operational purpose aligned with client long-term scalability targets.',
      'Automated triage protocols active across all business accounts.',
      'Discipline-first workforce assigned with dual-monitor verification.'
    ]
  },
  {
    id: 'governance',
    name: 'Governance & Security',
    badge: 'Data Protection',
    headline: 'Strict Segmented Data Handling & Access Controls',
    desc: 'Every file, dataset, and code pipeline operates with encrypted transmission, isolated role permissions, and full non-disclosure compliance.',
    stats: [
      { label: 'Encryption', val: 'TLS 1.3' },
      { label: 'Data Leakage', val: 'Zero' },
      { label: 'Access Protocol', val: 'RBAC' }
    ],
    logs: [
      'Establishing isolated database connection with least-privilege token.',
      'Audit event logged: administrative session authenticated securely.',
      'End-to-end payload encrypted; third-party tracking disabled.'
    ]
  }
];

export default function CompanyIntro() {
  const [selectedPillar, setSelectedPillar] = useState('operations');
  const current = PILLARS.find(p => p.id === selectedPillar) || PILLARS[0];

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 sm:space-y-24 transition-colors duration-300">
      
      {/* 1. Header with Live Status Tag */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300 dark:border-blue-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold mb-3 hover:scale-105 transition-transform duration-200 cursor-default">
            <Building2 size={14} className="text-cyan-500 shrink-0" /> 
            <span>Operations HQ • Pallikonda, Tamil Nadu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Who We Are & What We Stand For
          </h2>
        </div>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
          Operating at the intersection of business discipline, scalable system architecture, and verifiable digital execution.
        </p>
      </div>

      {/* 2. Interactive Enterprise Console (Split View) */}
      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Side: Navigation Selector Tabs */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
          <div className="space-y-2.5 sm:space-y-3">
            {PILLARS.map((p) => {
              const isActive = p.id === selectedPillar;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPillar(p.id)}
                  className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isActive
                      ? 'bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:via-cyan-950/20 dark:to-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-500/10'
                      : 'bg-white dark:bg-[#080d19] border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:translate-x-1 sm:hover:translate-x-1.5 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">
                      {p.badge}
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-cyan-500 shadow-lg shadow-cyan-400 scale-110' : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-cyan-400/50'}`} />
                  </div>
                  <h3 className={`text-sm sm:text-base font-bold transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between shadow-sm hover:border-cyan-500/30 transition-colors cursor-default mt-2">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
              Verified Operations Standards
            </span>
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold font-mono">100% SLA</span>
          </div>
        </div>

        {/* Right Side: Live System Architecture Display */}
        <div key={selectedPillar} className="lg:col-span-7 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-br dark:from-[#0a1224] dark:to-[#060a14] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between relative overflow-hidden animate-fade-in hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 w-fit">
                ACTIVE SHOWCASE: {current.badge}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                <Activity size={14} className="animate-pulse shrink-0" /> SYSTEM READY
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4 leading-snug">
              {current.headline}
            </h3>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
              {current.desc}
            </p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {current.stats.map((s, idx) => (
                <div key={idx} className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
                  <span className="text-lg sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white block mb-0.5 hover:text-cyan-500 transition-colors truncate">{s.val}</span>
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold block truncate">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mock Terminal Feed */}
          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900 dark:bg-black/60 border border-slate-700 dark:border-slate-800 font-mono text-[10.5px] sm:text-[11px] text-slate-300 space-y-2 hover:border-slate-600 transition-colors overflow-hidden">
            <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2 text-[10px]">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <Terminal size={12} className="text-cyan-400 animate-pulse shrink-0" />
                HAKA_OPERATIONAL_LOGS
              </span>
              <span className="text-emerald-400 flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE
              </span>
            </div>
            {current.logs.map((log, lIdx) => (
              <div key={lIdx} className="flex items-start gap-2 hover:text-white hover:translate-x-0.5 transition-all">
                <span className="text-cyan-400 select-none shrink-0">&gt;</span>
                <span className="text-slate-300 leading-snug">{log}</span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 3. Deep 3-Tier Enterprise Quality Assurance */}
      <div className="p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">
            Process Rigor
          </span>
          <h4 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2 sm:mb-3">Our 3-Tier Quality Architecture</h4>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Every dataset, file, and code deployment passes through automated schema validators, human quality controllers, and scheduled managerial audits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
          
          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between cursor-default">
            <div>
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-xs font-bold block mb-1.5 sm:mb-2 group-hover:translate-x-1 transition-transform">LEVEL 01</span>
              <h5 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Algorithmic Pre-Validation</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Automated syntax, format standard checks, and deduplication scripts parse all incoming raw operational datasets.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-cyan-600 dark:text-cyan-300 font-medium">
              ✓ Automated schema validation
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between cursor-default">
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-mono text-xs font-bold block mb-1.5 sm:mb-2 group-hover:translate-x-1 transition-transform">LEVEL 02</span>
              <h5 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Human QA Inspection</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Certified operations specialists review edge cases, discrepancies, and document context against client SOPs.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-blue-600 dark:text-blue-300 font-medium">
              ✓ Context & exception audit
            </div>
          </div>

          <div className="group p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between cursor-default">
            <div>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold block mb-1.5 sm:mb-2 group-hover:translate-x-1 transition-transform">LEVEL 03</span>
              <h5 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Weekly Shift Auditing</h5>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Operations leads review random batches to verify strict adherence to accuracy standards and client turnaround metrics.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] text-emerald-600 dark:text-emerald-300 font-medium">
              ✓ Management sign-off & KPI audit
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
