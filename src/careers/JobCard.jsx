import React from 'react';
import Button from '../components/Button';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';

export default function JobCard({ job, onApply }) {
  return (
    <div className="group p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between cursor-default">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[11px] font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            {job.dept}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{job.type}</span>
        </div>
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
          {job.title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-2">
          <span>{job.location}</span>
          <span>•</span>
          <span>Experience: {job.exp}</span>
        </p>
      </div>
      <Button variant="outline" onClick={() => onApply(job)} className="w-full">
        Apply Now 
        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
      </Button>
    </div>
  );
}
