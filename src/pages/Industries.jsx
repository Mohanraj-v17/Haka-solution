import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  Building2, ShoppingCart, Cpu, ShieldCheck, HeartPulse, 
  BookOpen, Truck, Rocket, ArrowRight, CheckCircle2, Activity 
} from 'lucide-react';

const INDUSTRIES_DATA = [
  {
    id: 'technology',
    name: 'Technology & SaaS',
    icon: Cpu,
    headline: 'High-Velocity Operational Scaling for Tech Platforms',
    desc: 'Supporting product startups and established software vendors with operational QA data verification, API documentation audits, and Tier-1 customer query triage.',
    points: [
      'QA dataset verification and test-case transcription',
      'Tier-1 operational triage & incident ticketing',
      'User onboarding log audits and credential provisioning'
    ],
    metric: '99.9% Uptime Support'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    icon: ShoppingCart,
    headline: 'Real-Time Catalog, SKU & Multi-Channel Inventory Control',
    desc: 'Eliminating cross-channel stock-out errors, price mismatch disputes, and digital catalog discrepancies across multiple online marketplaces.',
    points: [
      'Automated multi-channel SKU reconciliation',
      'Product catalog digital ingestion & image specification audit',
      'Vendor return slip verification & invoice validation'
    ],
    metric: '45k+ SKUs Synced'
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    headline: 'High-Volume Dispatch Reconciliation & Transport Auditing',
    desc: 'Digitizing paper manifests, tracking courier delivery statuses, and validating freight invoices with zero duplicated entries.',
    points: [
      'Digital bill of lading (BOL) optical transcription',
      'Driver delivery milestone confirmation & POD verification',
      'Freight billing discrepancy audits against master contracts'
    ],
    metric: '< 15 Min Ingestion'
  },
  {
    id: 'finance',
    name: 'Finance & Banking Services',
    icon: ShieldCheck,
    headline: 'Strict Data Governance & Transaction Reconciliation',
    desc: 'Ensuring audit-ready financial statement parsing, merchant transaction audits, and strict KYC verification workflows.',
    points: [
      'Daily merchant ledger variance reconciliation',
      'Customer identity verification (KYC) document review',
      'Quarterly compliance archives indexing & security tagging'
    ],
    metric: 'Zero Audit Deficiencies'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Diagnostics',
    icon: HeartPulse,
    headline: 'Confidential Records Processing & Patient Intake Indexing',
    desc: 'Transforming clinical archives into structured, searchable digital records under strict confidentiality and access isolation.',
    points: [
      'Intake history document digitization and OCR verification',
      'Diagnostic report metadata tagging and archive retrieval',
      'Medical insurance pre-authorization documentation support'
    ],
    metric: '100% HIPAA-Aligned'
  },
  {
    id: 'smes',
    name: 'Startups & Growing SMEs',
    icon: Rocket,
    headline: 'Flexible Operational Staffing Without Infrastructure Overhead',
    desc: 'Empowering lean founding teams with reliable back-office support, routine reporting daemons, and dedicated operations coordinators.',
    points: [
      'Elastic team headcount scaling based on seasonal demand',
      'Daily operational health reporting and KPI dashboards',
      'Immediate onboarding with zero capital hardware expenditure'
    ],
    metric: '50% Overhead Savings'
  }
];

export default function Industries({ setCurrentPage }) {
  const [activeDomain, setActiveDomain] = useState(INDUSTRIES_DATA[0].id);
  const current = INDUSTRIES_DATA.find(i => i.id === activeDomain) || INDUSTRIES_DATA[0];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16 transition-colors duration-300">
      <SectionHeader 
        eyebrow="INDUSTRY COVERAGE" 
        title="Industries We Support" 
        desc="Delivering dependable operations across verified enterprise industry domains." 
      />

      <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Column: Domain Selectors */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = ind.id === activeDomain;
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                onClick={() => setActiveDomain(ind.id)}
                className={`group p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected 
                    ? 'bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-[#091122] border-cyan-500/60 shadow-xl shadow-cyan-500/10' 
                    : 'bg-white dark:bg-[#080d1a] border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:translate-x-1 sm:hover:translate-x-1.5 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className={`p-2.5 rounded-xl transition-all duration-200 group-hover:scale-110 shrink-0 ${isSelected ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500'}`}>
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className={`text-xs sm:text-sm font-bold transition-colors ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                      {ind.name}
                    </h4>
                    <span className="text-[9.5px] sm:text-[10px] text-slate-400 font-mono block mt-0.5">{ind.metric}</span>
                  </div>
                </div>
                <ArrowRight size={16} className={`transition-all duration-200 shrink-0 ml-2 ${isSelected ? 'text-cyan-600 dark:text-cyan-400 translate-x-1' : 'text-slate-400 dark:text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-1 sm:group-hover:translate-x-1.5'}`} />
              </div>
            );
          })}
        </div>

        {/* Right Column: Details Console */}
        <div key={activeDomain} className="lg:col-span-7 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-br dark:from-[#091224] dark:to-[#060a14] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between relative overflow-hidden animate-fade-in hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 sm:mb-6">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 w-fit">
                DOMAIN: {current.name}
              </span>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono flex items-center gap-1.5">
                <Activity size={14} className="animate-pulse shrink-0" /> VERIFIED CAPACITY
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4">
              {current.headline}
            </h3>

            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
              {current.desc}
            </p>

            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Specialized Workflows Managed</span>
              {current.points.map((pt, idx) => (
                <div key={idx} className="group flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:translate-x-1 transition-all duration-200 cursor-default">
                  <CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 block hover:scale-105 transition-transform cursor-default">{current.metric}</span>
              <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">Standard Performance SLA</span>
            </div>
            <button
              type="button"
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="group w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Consult For {current.name} 
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

        </div>

      </div>

      <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 shadow-sm hover:border-cyan-500/30 transition-colors cursor-default">
        HAKA SOLUTIONS only engages in domains where we have verified operational delivery experience and established SOPs.
      </div>
    </section>
  );
}
