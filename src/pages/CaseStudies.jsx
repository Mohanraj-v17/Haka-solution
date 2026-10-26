import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CASE_STUDIES } from '../data/caseStudiesData';
import { CheckCircle, TrendingUp, ShieldCheck, ArrowRight, Layers, FileText } from 'lucide-react';

const EXPANDED_CASE_STUDIES = [
  {
    id: 1,
    client: "Retail Enterprise & Superstore Network",
    category: "Retail & Supply Chain",
    challenge: "Over 8,000 monthly multi-store billing invoices and cross-warehouse delivery slips suffered manual entry delays, resulting in recurring 72-hour inventory sync halts.",
    solution: "Engineered an automated ingestion pipeline that parsed incoming vendor PDF manifests, checked discrepancies against purchase orders, and flagged anomalies to an express review queue.",
    implementation: "Deployed in 10 business days with parallel shadow processing to ensure 100% store uptime.",
    result: "Reduced operational delay by 70%, eliminated invoice transcription duplication, and cut audit reconciliation time from 3 days to under 20 minutes."
  },
  {
    id: 2,
    client: "Regional Logistics & Express Freight Hub",
    category: "Logistics",
    challenge: "Unorganized manual delivery manifests tracked on physical logs caused frequent driver mismatch errors, customer update delays, and billing disputes.",
    solution: "Implemented an end-to-end digital manifest tracking desk with optical character scanning, barcode cross-referencing, and automatic delivery status updates.",
    implementation: "Specialized 24/7 operations shift assigned with double-verification oversight.",
    result: "100% real-time manifest updates achieved with zero unassigned packages and immediate customer tracking delivery."
  }
];

export default function CaseStudies({ setCurrentPage }) {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-[#060a14] border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        
        <SectionHeader 
          eyebrow="PROVEN OUTCOMES" 
          title="Verified Case Studies" 
          desc="Real operational challenges solved through disciplined process design and verified execution." 
        />

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {EXPANDED_CASE_STUDIES.map((cs) => (
            <div 
              key={cs.id} 
              className="group p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-b dark:from-[#091122] dark:to-[#070c18] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-default"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/20 w-fit">
                    {cs.category}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <TrendingUp size={14} className="group-hover:scale-110 transition-transform" /> VERIFIED OUTCOME
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {cs.client}
                </h3>

                <div className="space-y-3 sm:space-y-4 text-xs">
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-rose-500/30 transition-colors">
                    <span className="font-bold text-rose-500 dark:text-rose-400 block mb-1">Operational Challenge:</span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{cs.challenge}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/30 transition-colors">
                    <span className="font-bold text-cyan-600 dark:text-cyan-400 block mb-1">HAKA Engineered Solution:</span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{cs.solution}</p>
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-colors">
                    <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1">Implementation Methodology:</span>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{cs.implementation}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  <CheckCircle size={18} className="shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{cs.result}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentPage && setCurrentPage('contact')}
                  className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 inline-flex items-center gap-1.5 cursor-pointer shrink-0 group/btn self-start sm:self-auto"
                >
                  Request Similar Architecture 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d19] border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center text-xs shadow-md dark:shadow-none">
          <div className="group p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
            <ShieldCheck className="text-cyan-600 dark:text-cyan-400 mx-auto mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform" size={22} />
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Verified Outcomes Only</span>
            <p className="text-slate-500 dark:text-slate-400">Never publishing invented metrics or fictional qualifications.</p>
          </div>
          <div className="group p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
            <Layers className="text-blue-600 dark:text-blue-400 mx-auto mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform" size={22} />
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Standard Delivery Formula</span>
            <p className="text-slate-500 dark:text-slate-400">Diagnosis → Design → Implementation → Verified Outcome.</p>
          </div>
          <div className="group p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
            <FileText className="text-emerald-600 dark:text-emerald-400 mx-auto mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform" size={22} />
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Confidential Protection</span>
            <p className="text-slate-500 dark:text-slate-400">All data managed under standard non-disclosure compliance.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
