import React, { useState } from 'react';
import Button from '../components/Button';
import { Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Data & Digital Operations',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', service: 'Data & Digital Operations', message: '' });
    }, 4500);
  };

  return (
    <div className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-b dark:from-[#0b1222] dark:to-[#070c18] border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl relative transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700">
      
      <div className="mb-5 sm:mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
          <Sparkles size={12} className="text-cyan-500 shrink-0" /> PROJECT SCOPE INQUIRY
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Let’s Build Something Better Together</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Submit your requirement to receive a detailed operational proposal.</p>
      </div>

      {submitted ? (
        <div className="py-10 sm:py-12 text-center space-y-3 animate-fade-in">
          <div className="w-14 sm:w-16 h-14 sm:h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 dark:text-emerald-400 flex items-center justify-center animate-bounce">
            <CheckCircle2 size={30} />
          </div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white">Inquiry Received Successfully</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
            Thank you! A senior HAKA solutions coordinator will review your scope and respond within 24 business hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">Full Name *</label>
              <input 
                required 
                type="text" 
                placeholder="e.g. Anand Kumar" 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200" 
              />
            </div>
            <div>
              <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">Company Name *</label>
              <input 
                required 
                type="text" 
                placeholder="e.g. Acme Enterprises" 
                value={formData.company}
                onChange={e => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">Business Email *</label>
              <input 
                required 
                type="email" 
                placeholder="anand@company.com" 
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200" 
              />
            </div>
            <div>
              <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">Phone Number *</label>
              <input 
                required 
                type="tel" 
                placeholder="+91 98765 43210" 
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200" 
              />
            </div>
          </div>

          <div>
            <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">Required Service Scope *</label>
            <select 
              value={formData.service}
              onChange={e => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 cursor-pointer"
            >
              <option>Data & Digital Operations</option>
              <option>Technology Solutions</option>
              <option>Business Process Support</option>
              <option>Digital Workflows & Automation</option>
              <option>Custom Enterprise Solutions</option>
            </select>
          </div>

          <div>
            <label className="text-slate-700 dark:text-slate-300 font-semibold block mb-1.5">Project Scope / Challenge Description *</label>
            <textarea 
              rows="4" 
              required 
              placeholder="Tell us about your operational volume, timeline, and current bottlenecks..." 
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 leading-relaxed"
            ></textarea>
          </div>

          <button
            type="submit"
            className="group w-full py-3.5 sm:py-4 rounded-xl bg-linear-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            Submit Formal Inquiry 
            <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </form>
      )}

    </div>
  );
}
