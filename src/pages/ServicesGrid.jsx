import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES_DATA } from '../data/servicesData';
import { 
  ArrowRight, Check, Database, Cpu, ShieldCheck, 
  Clock, FileCheck2, Server, BarChart3, Activity 
} from 'lucide-react';

const DETAILED_SPECS = {
  1: {
    category: "Data & Digital Operations",
    headline: "High-Throughput Operational Data Processing & Auditing",
    features: [
      "High-speed automated optical data extraction and catalog conversion",
      "Multi-channel inventory SKU reconciliation and discrepancy resolution",
      "Regulatory document filing and compliance records standardization",
      "Real-time database cleansing and foreign-key cross-referencing"
    ],
    deliverables: "Validated JSON / CSV structured feeds, daily reconciliation audit sheet, exception queue report.",
    sla: "Standard 4-to-8 hour batch turnaround; express 90-minute rush shifts available.",
    kpi: "99.85% Extraction Accuracy"
  },
  2: {
    category: "Technology Solutions",
    headline: "Scalable Frontend & Integration Architecture",
    features: [
      "Lightweight custom web applications built on React and Vite architectures",
      "RESTful API bridging between disconnected corporate and internal tools",
      "Custom internal operations dashboards with role-based access levels",
      "Automated event listeners and webhook-triggered reporting scripts"
    ],
    deliverables: "Production-ready frontend bundles, modular API endpoints, Git revision logs.",
    sla: "Sprint deliverables deployed every 7 business days with automated test coverage.",
    kpi: "Sub-Second Latency Architecture"
  },
  3: {
    category: "Business Process Support",
    headline: "Multi-Shift Back-Office Operational Management",
    features: [
      "Tier-1 back-office ticketing and query triage shifts",
      "Routine invoice generation, vendor payment follow-up, and status tagging",
      "Customer onboarding verification and document KYC processing",
      "Daily transaction log reconciliation with zero unassigned discrepancies"
    ],
    deliverables: "Daily shift productivity reports, ticket resolution heatmaps, SLA burn-down metrics.",
    sla: "24/7 continuous operational support coverage with dedicated shift coordinators.",
    kpi: "100% Shift Coverage"
  },
  4: {
    category: "Digital Services",
    headline: "Automated Routine Workflow Pipelines",
    features: [
      "End-to-end digital approval pipelines replacing paper-based authorization",
      "Scheduled synchronization bots linking spreadsheets to relational databases",
      "Automated PDF document compilation and branded invoice dispatch",
      "Centralized cloud repository indexing with full-text search capability"
    ],
    deliverables: "Automated trigger configurations, documentation runbooks, failover alerts.",
    sla: "Zero-latency background script execution with 99.9% scheduled task uptime.",
    kpi: "65% Routine Effort Saved"
  },
  5: {
    category: "Custom Solutions",
    headline: "Bespoke Enterprise Software Modules",
    features: [
      "Targeted software modules engineered for non-standard industry constraints",
      "Bespoke database schemas designed for high-concurrency read operations",
      "Offline-first operational tracking tools with automatic cloud synchronization",
      "Legacy software interface emulation for smoother digital transitions"
    ],
    deliverables: "Tailored code repository, schema architectural blueprint, deployment scripts.",
    sla: "Dedicated solution architect oversight with weekly milestone demos.",
    kpi: "100% Tailored Delivery"
  },
  6: {
    category: "Support & Operations",
    headline: "Continuous Uptime & Mission-Critical Monitoring",
    features: [
      "Mission-critical process monitoring and incident escalation protocols",
      "Cloud backup snapshot verification and integrity health audits",
      "Continuous server resource telemetry and latency bottleneck mitigation",
      "Emergency shift allocation for seasonal volume spikes and audit weeks"
    ],
    deliverables: "Monthly uptime audit reports, incident response logs, security review summaries.",
    sla: "Sub-15 minute response protocol for critical operations blockages.",
    kpi: "99.9% Monitored Uptime"
  }
};

export default function ServicesGrid({ setCurrentPage }) {
  const [activeId, setActiveId] = useState(1);
  const selected = SERVICES_DATA.find(s => s.id === activeId) || SERVICES_DATA[0];
  const spec = DETAILED_SPECS[activeId] || DETAILED_SPECS[1];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16 transition-colors duration-300">
      <SectionHeader 
        eyebrow="SERVICE PORTFOLIO" 
        title="Enterprise-Grade Operational & Tech Services"
        desc="Meticulously structured services designed to lower operational overheads and accelerate verified output." 
      />

      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left List of Services */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3 flex flex-col justify-between">
          <div className="space-y-2.5 sm:space-y-3">
            {SERVICES_DATA.map((srv) => {
              const isSelected = srv.id === activeId;
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveId(srv.id)}
                  className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected 
                      ? 'bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-[#091122] border-cyan-500/60 shadow-xl shadow-cyan-500/10' 
                      : 'bg-white dark:bg-[#080d1a] border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:translate-x-1 sm:hover:translate-x-1.5 hover:shadow-md'
                  }`}
                >
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 tracking-widest uppercase block mb-1">
                      {srv.badge}
                    </span>
                    <h4 className={`text-sm sm:text-base font-bold transition-colors ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{srv.desc}</p>
                  </div>
                  <ArrowRight size={18} className={`transition-all duration-200 shrink-0 ml-2 sm:ml-3 ${isSelected ? 'text-cyan-600 dark:text-cyan-400 translate-x-1' : 'text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-1 sm:group-hover:translate-x-1.5'}`} />
                </div>
              );
            })}
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex items-center justify-between shadow-sm hover:border-cyan-500/30 transition-colors cursor-default mt-2">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
              Standardized Operating Protocols
            </span>
            <span className="text-cyan-600 dark:text-cyan-400 font-mono font-bold">100% SOP</span>
          </div>
        </div>

        {/* Right Active Service Feature Showcase */}
        <div key={activeId} className="lg:col-span-7 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-br dark:from-[#091224] dark:to-[#060a14] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between relative overflow-hidden animate-fade-in hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 w-fit">
                ACTIVE SCOPE: {selected.badge}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                <Activity size={14} className="animate-pulse shrink-0" /> VERIFIED CAPACITY
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2.5 sm:mb-3">
              {spec.headline}
            </h3>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
              {selected.desc}
            </p>

            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Key Operational Controls</span>
              {spec.features.map((feat, idx) => (
                <div key={idx} className="group flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:translate-x-1 transition-all duration-200 cursor-default">
                  <Check size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 hover:-translate-y-0.5 transition-all cursor-default">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide block mb-1">Standard Deliverables</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{spec.deliverables}</p>
              </div>
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all cursor-default">
                <span className="text-[10.5px] sm:text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide block mb-1">SLA Benchmark</span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{spec.sla}</p>
              </div>
            </div>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 block hover:scale-105 transition-transform cursor-default">{spec.kpi}</span>
              <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Quality Metric</span>
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Inquire About Service 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

        </div>

      </div>

      <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-center text-xs shadow-md dark:shadow-none">
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
          <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white block mb-1">Double Verification</span>
          <p className="text-slate-500 dark:text-slate-400">Algorithmic checks coupled with manual verification desks.</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
          <span className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400 block mb-1">Strict Turnaround</span>
          <p className="text-slate-500 dark:text-slate-400">Guaranteed delivery timelines with scheduled sprint outputs.</p>
        </div>
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:-translate-y-1 transition-all duration-200 cursor-default">
          <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 block mb-1">NDA Protected</span>
          <p className="text-slate-500 dark:text-slate-400">All data operations strictly governed by non-disclosure agreements.</p>
        </div>
      </div>
    </section>
  );
}
