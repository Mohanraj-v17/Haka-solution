import React, { useState } from 'react';
import Button from '../components/Button';
import { 
  ArrowRight, Sparkles, Activity, ShieldCheck, Zap, 
  Cpu, Database, Terminal, CheckCircle2, ChevronRight, BarChart3 
} from 'lucide-react';

const LIVE_FEEDS = [
  { label: 'Data Parsing Pipeline', status: 'Optimal', latency: '4ms', load: '99.4%' },
  { label: 'SOP Verification Gate', status: 'Active', latency: '12ms', load: '100%' },
  { label: 'Cloud Shift Encryption', status: 'Secured', latency: '1ms', load: '100%' }
];

export default function HeroSection({ setCurrentPage }) {
  const [activeMetricTab, setActiveMetricTab] = useState('ops');

  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 md:pt-28 md:pb-36 px-4 sm:px-6 bg-linear-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-[#060b18] dark:via-[#070c1a] dark:to-[#060a14] transition-colors duration-300">
      {/* Background ambient animated glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-175 h-72 sm:h-100 bg-linear-to-tr from-blue-600/15 via-cyan-500/15 to-indigo-500/15 dark:from-blue-600/20 dark:via-cyan-500/15 dark:to-indigo-500/15 blur-[90px] sm:blur-[140px] pointer-events-none rounded-full animate-float" />
      <div className="absolute top-10 right-2 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/10 blur-[80px] sm:blur-[130px] pointer-events-none rounded-full animate-float-reverse" />
      <div className="absolute bottom-10 left-2 sm:left-10 w-48 sm:w-80 h-48 sm:h-80 bg-blue-500/10 blur-[70px] sm:blur-[120px] pointer-events-none rounded-full animate-pulse-glow" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-16">
        
        {/* Top Text Content Area */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/70 border border-blue-300/80 dark:border-blue-500/30 text-cyan-700 dark:text-cyan-400 text-[11px] sm:text-xs font-semibold mb-6 sm:mb-8 shadow-inner hover:scale-105 transition-transform duration-200 cursor-default max-w-full">
            <Sparkles size={13} className="text-cyan-500 animate-pulse shrink-0" />
            <span className="truncate">Next-Gen Enterprise Digital Operations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] sm:leading-[1.1] mb-5 sm:mb-6 break-words">
            Powering Businesses Through <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-300 hover:brightness-110 transition-all">
              Smarter Digital Solutions
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            HAKA SOLUTIONS delivers reliable technology, digital operations and business support solutions designed to help organizations work smarter, scale faster and achieve sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <Button 
              variant="primary" 
              onClick={() => setCurrentPage && setCurrentPage('solutions')}
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm"
            >
              Explore Our Solutions 
              <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200" />
            </Button>
            <Button 
              variant="secondary" 
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm"
            >
              Talk to Us
              <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform duration-200 text-cyan-500" />
            </Button>
          </div>
        </div>

        {/* Interactive Live Operations Telemetry Panel */}
        <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#091122]/90 border border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-cyan-950/20 backdrop-blur-xl max-w-5xl mx-auto hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300">
          
          {/* Console Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 mb-5 sm:mb-6 border-b border-slate-200 dark:border-slate-800/80 gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-900 dark:text-white block tracking-wide">
                  HAKA_OPERATIONAL_GATEWAY
                </span>
                <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 block">
                  Status: High-Availability Shifts Online
                </span>
              </div>
            </div>

            {/* Pill Switcher */}
            <div className="grid grid-cols-2 sm:flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 rounded-xl w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setActiveMetricTab('ops')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer text-center ${
                  activeMetricTab === 'ops' 
                    ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-500/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                Operational SLA
              </button>
              <button
                type="button"
                onClick={() => setActiveMetricTab('telemetry')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer text-center ${
                  activeMetricTab === 'telemetry' 
                    ? 'bg-linear-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-500/20' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                System Telemetry
              </button>
            </div>
          </div>

          {/* Metric View 1: Operational SLA Overview */}
          {activeMetricTab === 'ops' ? (
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 animate-fade-in">
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group cursor-default">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Accuracy SLA
                  </span>
                  <Activity size={16} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white block group-hover:text-cyan-500 transition-colors">
                  99.8%
                </span>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1">Multi-stage human & algorithmic double audits.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group cursor-default">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Shift Availability
                  </span>
                  <Zap size={16} className="text-emerald-600 dark:text-emerald-400 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 block">24/7/365</span>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1">Unbroken operational support & shift coverage.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group cursor-default">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Turnaround Bench
                  </span>
                  <BarChart3 size={16} className="text-blue-600 dark:text-blue-400 group-hover:scale-125 transition-transform duration-300" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-cyan-600 dark:text-cyan-400 block group-hover:text-blue-500 transition-colors">&lt; 15 Mins</span>
                <p className="text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1">Real-time incident response and resolution triage.</p>
              </div>
            </div>
          ) : (
            /* Metric View 2: System Live Telemetry */
            <div className="space-y-2.5 font-mono text-xs animate-fade-in">
              {LIVE_FEEDS.map((feed, idx) => (
                <div 
                  key={idx} 
                  className="p-3 sm:p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/70 hover:translate-x-1 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-default group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 group-hover:scale-125 transition-transform shrink-0" />
                    <span className="text-slate-800 dark:text-slate-200 font-semibold text-[11px] sm:text-xs truncate">{feed.label}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-6 text-[10.5px] sm:text-[11px] text-slate-500 dark:text-slate-400 pl-4 sm:pl-0">
                    <span>Latency: <strong className="text-cyan-600 dark:text-cyan-400">{feed.latency}</strong></span>
                    <span>Load: <strong className="text-emerald-600 dark:text-emerald-400">{feed.load}</strong></span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-cyan-700 dark:text-cyan-300 font-bold group-hover:scale-105 transition-transform">
                      {feed.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom Security Assurance Note */}
          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-1.5">
            <span className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default">
              <ShieldCheck size={14} className="text-cyan-600 dark:text-cyan-400 shrink-0" /> 
              Zero Data Leakage Security Architecture
            </span>
            <span className="font-mono text-[9.5px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              TLS 1.3 ENCRYPTED
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
