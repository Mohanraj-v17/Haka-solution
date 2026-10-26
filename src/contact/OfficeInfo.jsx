import React from 'react';
import { MapPin, Mail, Phone, Clock, ShieldCheck, Building2 } from 'lucide-react';

export default function OfficeInfo() {
  return (
    <div className="space-y-4 sm:space-y-6">
      
      {/* Official Address Card */}
      <div className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#091122] border border-slate-200 dark:border-slate-800 flex items-start gap-3 sm:gap-4 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-default">
        <div className="p-2.5 sm:p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
          <MapPin size={20} className="sm:w-[22px] sm:h-[22px]" />
        </div>
        <div>
          <span className="text-[9.5px] sm:text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1">
            Official Registered Office
          </span>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-1">HAKA SOLUTIONS Headquarters</h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Union Bank Back Side, Kattupudi Street, Pallikonda 635809, Tamil Nadu, India.
          </p>
        </div>
      </div>

      {/* Direct Contact Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <a 
          href="mailto:info@hakasolutions.com"
          className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#091122] border border-slate-200 dark:border-slate-800 flex items-center gap-3 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
            <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div className="truncate">
            <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">Official Desk</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate block">info@hakasolutions.com</span>
          </div>
        </a>

        <a 
          href="tel:+919876543210"
          className="group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-[#091122] border border-slate-200 dark:border-slate-800 flex items-center gap-3 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer"
        >
          <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all">
            <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
          </div>
          <div>
            <span className="text-[9.5px] sm:text-[10px] text-slate-500 dark:text-slate-400 uppercase font-semibold block">Inquiry Hotline</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">+91 98765 43210</span>
          </div>
        </a>
      </div>

      {/* Operating Shift Hours */}
      <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors gap-2">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
          <span>Operational Hours: <strong>24/7 Continuous Shift Support</strong></span>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 font-mono text-[10px] font-bold w-fit">ONLINE</span>
      </div>

      <div className="p-3.5 sm:p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-500/20 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
        <ShieldCheck size={16} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
        <span>All client discussions are strictly protected by standard corporate confidentiality agreements.</span>
      </div>

    </div>
  );
}
