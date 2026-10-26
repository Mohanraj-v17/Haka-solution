import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  ShieldCheck, TrendingUp, Cpu, Lock, Sliders, Handshake, 
  CheckCircle2, ArrowRight, DollarSign, Users, Activity, Terminal 
} from 'lucide-react';

const ADVANTAGES = [
  { icon: ShieldCheck, title: "Reliability", desc: "Predictable, verified outcomes with uncompromising SLA precision across all continuous shifts." },
  { icon: TrendingUp, title: "Scalability", desc: "Modular architecture and specialized support teams crafted to seamlessly scale with business expansion." },
  { icon: Cpu, title: "Technology Driven", desc: "Modern automation, intelligent script tooling, and cloud-native workflows that cut repetitive clerical hours." },
  { icon: Lock, title: "Security", desc: "Zero-compromise protocols, encrypted storage pipelines, and least-privilege role compliance." },
  { icon: Sliders, title: "Flexibility", desc: "Adaptable operations fine-tuned directly to your internal tools, schedules, and evolving workload demands." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "Dedicated ongoing support, transparent sprint reviews, and collaborative continuous workflow improvement." }
];

const SHOWCASE_PILLARS = [
  {
    id: 'security',
    title: "Zero Data Compromise",
    subtitle: "Enterprise Data Governance",
    icon: Lock,
    accent: "from-blue-600 to-cyan-500",
    badge: "Maximum Security",
    desc: "Client workflows are managed with strict confidentiality, encrypted transport, and segmented access policies to protect sensitive business assets.",
    features: [
      "End-to-end TLS 1.3 encryption across all active data transport pipelines",
      "Granular role-based access controls (RBAC) ensuring least-privilege separation",
      "Immutable historical audit trails logging all access and administrative tasks"
    ],
    metric: "100%",
    metricLabel: "Data Isolation Rate"
  },
  {
    id: 'cost',
    title: "Cost-Efficient Operations",
    subtitle: "High ROI Delivery Model",
    icon: DollarSign,
    accent: "from-emerald-600 to-cyan-500",
    badge: "Optimized ROI",
    desc: "Reduce internal overheads by outsourcing routine operations to an agile, structured delivery team without hiring and training friction.",
    features: [
      "Up to 50% reduction in routine clerical and operational expenditure",
      "Zero upfront capital investment required for software infrastructure",
      "Elastic scaling: expand or trim support shift capacity on demand"
    ],
    metric: "50%",
    metricLabel: "Average Overhead Saved"
  },
  {
    id: 'partnership',
    title: "Collaborative Long-Term Alignment",
    subtitle: "Dedicated Leadership Oversight",
    icon: Users,
    accent: "from-indigo-600 to-blue-500",
    badge: "Strategic Partner",
    desc: "We align our operational success metrics directly with your business growth objectives through scheduled reviews and ongoing improvements.",
    features: [
      "Single dedicated point of contact and designated shift operations leads",
      "Weekly operational accuracy scoring and retrospective reviews",
      "Continuous optimization audits to automate discovered routine edge cases"
    ],
    metric: "24/7",
    metricLabel: "Escalation Desk Support"
  }
];

export default function WhyHaka({ setCurrentPage }) {
  const [activePillar, setActivePillar] = useState(SHOWCASE_PILLARS[0].id);
  const current = SHOWCASE_PILLARS.find(p => p.id === activePillar) || SHOWCASE_PILLARS[0];

  return (
    <div className="space-y-0 transition-colors duration-300">
      {/* 1. HEADER */}
      <section className="py-14 sm:py-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <SectionHeader 
          eyebrow="THE ADVANTAGE" 
          title="Why HAKA SOLUTIONS" 
          desc="Engineered around accountability, proven technology, and predictable execution." 
        />
      </section>

      {/* 2. THE 6 BLUEPRINT PILLARS */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div 
              key={idx} 
              className="group p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white dark:bg-[#091122] border border-slate-200 dark:border-slate-800/90 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
            >
              <adv.icon className="text-cyan-600 dark:text-cyan-400 mb-3.5 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" size={24} />
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{adv.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SLA STATS BANNER */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-linear-to-r from-blue-50 via-slate-100 to-blue-50 dark:from-blue-950/30 dark:via-slate-900 dark:to-blue-950/30 border border-slate-200 dark:border-slate-800 grid md:grid-cols-2 gap-6 sm:gap-8 items-center shadow-md dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">Standardized Governance</span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2.5 sm:mb-3">Strict SLA Governance & Transparency</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5 sm:mb-6">
              Our operations operate on clearly documented turnaround benchmarks, verified checklists, and continuous managerial supervision.
            </p>
            <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" /> Milestone-based progress tracking</div>
              <div className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" /> Transparent real-time status dashboards</div>
              <div className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default"><CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" /> Dedicated daily shift escalation matrix</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-105 hover:border-cyan-500/40 hover:shadow-lg transition-all duration-200 cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-600 dark:text-cyan-400 block mb-1">99.8%</span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white block">On-Time SLA Delivery</span>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1">Shift coverage benchmark</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-800 shadow-sm hover:scale-105 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-200 cursor-default">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400 block mb-1">100%</span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white block">Audit Pass Rate</span>
              <p className="text-[10px] sm:text-[11px] text-slate-500 mt-1">Zero unverified entries</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SPLIT SECTION */}
      <section className="py-14 sm:py-20 bg-slate-100/60 dark:bg-[#060a14] border-t border-slate-200 dark:border-slate-800/80 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-2">Core Commitments</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">Built for Enterprise Reliability</h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">Explore the operational standards applied across all HAKA client deliveries.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Left Column: 3 Pillar Selectors */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              {SHOWCASE_PILLARS.map((p) => {
                const isActive = p.id === activePillar;
                const IconComponent = p.icon;
                return (
                  <div
                    key={p.id}
                    onClick={() => setActivePillar(p.id)}
                    className={`group p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-3 sm:gap-4 ${
                      isActive 
                        ? 'bg-linear-to-r from-blue-50 to-cyan-50 dark:from-blue-950/60 dark:to-[#091122] border-cyan-500/60 shadow-xl shadow-cyan-500/10' 
                        : 'bg-white dark:bg-[#080d1a] border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-50 dark:hover:bg-slate-900/70 hover:translate-x-1 sm:hover:translate-x-1.5 hover:shadow-md'
                    }`}
                  >
                    <div className={`p-2.5 sm:p-3 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                      isActive ? 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500'
                    }`}>
                      <IconComponent size={20} className="sm:w-5.5 sm:h-5.5" />
                    </div>
                    <div>
                      <span className="text-[9.5px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">
                        {p.subtitle}
                      </span>
                      <h4 className={`text-sm sm:text-base font-bold transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Display Card */}
            <div key={activePillar} className="lg:col-span-7 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-br dark:from-[#091224] dark:to-[#060a14] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl flex flex-col justify-between relative overflow-hidden animate-fade-in hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 sm:mb-6">
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 w-fit">
                    {current.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono">
                    <Activity size={14} className="animate-pulse shrink-0" /> ACTIVE PROTOCOL
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 sm:mb-4">
                  {current.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
                  {current.desc}
                </p>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Key Operational Controls</span>
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="group flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:translate-x-1 transition-all duration-200 cursor-default">
                      <CheckCircle2 size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 block hover:scale-105 transition-transform cursor-default">{current.metric}</span>
                  <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold">{current.metricLabel}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentPage && setCurrentPage('contact')}
                  className="group w-full sm:w-auto px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 inline-flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  Discuss Integration 
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. FINAL CTA BANNER */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-linear-to-r from-blue-100 via-cyan-50 to-blue-100 dark:from-blue-900/40 dark:via-cyan-950/30 dark:to-blue-900/40 border border-slate-200 dark:border-slate-800 text-center shadow-lg dark:shadow-2xl hover:border-cyan-500/40 transition-colors">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-2.5 sm:mb-3">
            Experience the HAKA Advantage on Your Next Project
          </h3>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Let’s discuss your current operational setup and design a high-accuracy, cost-effective digital delivery model.
          </p>
          <button
            type="button"
            onClick={() => setCurrentPage && setCurrentPage('contact')}
            className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Start a Conversation 
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  );
}
