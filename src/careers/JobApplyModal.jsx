import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

export default function JobApplyModal({ job, onClose }) {
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => {
      setDone(false);
      onClose();
    }, 2500);
  };

  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-[#0d1424] border border-slate-200 dark:border-slate-800 rounded-3xl p-7 w-full max-w-md relative shadow-2xl animate-fade-in-up">
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:rotate-90 cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          Career Opportunity
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-3 mb-1">Apply for Position</h3>
        <p className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-5">{job.title}</p>

        {done ? (
          <div className="py-8 text-center space-y-2 animate-fade-in">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center animate-bounce">
              <CheckCircle2 size={24} />
            </div>
            <p className="text-slate-900 dark:text-white text-sm font-bold">Application Sent Successfully!</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Our HR desk will review your submission shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="text-slate-700 dark:text-slate-300 text-xs font-semibold block mb-1">Full Name</label>
              <input 
                required 
                placeholder="e.g. Priya Sharma" 
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all" 
              />
            </div>
            <div>
              <label className="text-slate-700 dark:text-slate-300 text-xs font-semibold block mb-1">Email Address</label>
              <input 
                required 
                type="email" 
                placeholder="priya@example.com" 
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all" 
              />
            </div>
            <div>
              <label className="text-slate-700 dark:text-slate-300 text-xs font-semibold block mb-1">Resume / Portfolio Link</label>
              <input 
                required 
                placeholder="Google Drive, LinkedIn or Portfolio URL" 
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all" 
              />
            </div>
            <Button type="submit" variant="primary" className="w-full mt-2">
              Submit Application
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
