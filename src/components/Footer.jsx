import React from 'react';
import { 
  Building2, MapPin, Mail, Phone, ArrowUpRight, 
  ShieldCheck, Activity, Globe, Send, Sparkles, ArrowRight 
} from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const handleNav = (pageId) => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(pageId);
    }
  };

  return (
    <footer className="bg-slate-100/90 dark:bg-[#03060d] border-t border-slate-200 dark:border-slate-800/80 pt-12 sm:pt-16 pb-10 sm:pb-12 text-slate-600 dark:text-slate-400 text-xs relative overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 sm:w-200 h-40 sm:h-62.5 bg-linear-to-b from-blue-500/10 via-cyan-400/5 to-transparent dark:from-blue-600/10 dark:via-cyan-500/5 dark:to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-12 sm:space-y-16">
        
        {/* 1. Top Callout: Global Inquiry Banner */}
        <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-linear-to-r from-blue-50 via-white to-blue-50 dark:from-blue-950/50 dark:via-[#070e1c] dark:to-blue-950/50 border border-slate-200 dark:border-slate-800/90 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl dark:shadow-2xl hover:border-cyan-500/40 transition-all duration-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30 text-cyan-700 dark:text-cyan-400 text-[11px] font-semibold mb-2.5 hover:scale-105 transition-transform cursor-default">
              <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400 animate-pulse shrink-0" /> 
              <span>Ready to modernize your operations?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Let's Build Something Better Together.
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 max-w-xl leading-relaxed">
              Connect with our solutions team to plan an automated, disciplined delivery scope.
            </p>
          </div>

          <button
            type="button"
            onClick={() => handleNav('contact')}
            className="group w-full sm:w-auto px-7 py-3.5 rounded-xl bg-linear-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            Start Project Discussion 
            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* 2. Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Brand Info & Mission (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => handleNav('home')} 
              className="flex items-center gap-3 cursor-pointer select-none group w-fit"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-linear-to-tr from-blue-600 via-cyan-500 to-indigo-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <div className="w-full h-full bg-white dark:bg-[#080e1e] rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-linear-to-tr from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-base sm:text-lg">
                  H
                </div>
              </div>
              <div>
                <span className="font-extrabold text-slate-900 dark:text-white tracking-wider text-base sm:text-lg block group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  HAKA
                </span>
                <span className="text-[9px] sm:text-[9.5px] text-cyan-600 dark:text-cyan-400 block tracking-[0.25em] font-semibold uppercase -mt-0.5 group-hover:tracking-[0.28em] transition-all">
                  Solutions
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              HAKA SOLUTIONS delivers reliable technology, digital workflows, and business process support engineered for verified efficiency and sustainable growth.
            </p>

            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300 flex items-center justify-between max-w-xs shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-default">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Shift Operations Desk
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">24/7 ONLINE</span>
            </div>
          </div>

          {/* Navigation Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Core Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Solutions
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('technology')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Technology Stack
                </button>
              </li>
            </ul>
          </div>

          {/* Enterprise Capabilities & Work (Cols 7-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Capabilities</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Data & Digital Operations
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Business Process Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Client Case Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Custom Technology Scope
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1.5 transition-all duration-200 cursor-pointer inline-flex items-center gap-1">
                  Quality Assurance Standards
                </button>
              </li>
            </ul>
          </div>

          {/* Registered Office & Direct Reach (Cols 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Registered Desk</h4>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2.5 group cursor-default">
                <MapPin size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors">
                  Union Bank Back Side, Kattupudi Street, Pallikonda 635809, Tamil Nadu, India.
                </span>
              </div>
              <a href="mailto:info@hakasolutions.com" className="flex items-center gap-2.5 hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1 transition-all duration-200">
                <Mail size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>info@hakasolutions.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:text-cyan-600 dark:hover:text-cyan-400 hover:translate-x-1 transition-all duration-200">
                <Phone size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>

        </div>

        {/* 3. Bottom Bar: Copyright, System Telemetry & Legal */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <p>© {new Date().getFullYear()} HAKA SOLUTIONS. All rights reserved.</p>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-mono hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default">
              <ShieldCheck size={14} className="text-cyan-600 dark:text-cyan-400" /> ISO Aligned Governance
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">Security Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
