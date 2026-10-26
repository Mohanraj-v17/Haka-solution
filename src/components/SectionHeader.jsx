import React from 'react';

export default function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-[11px] font-bold uppercase tracking-widest mb-3 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
        {title}
      </h2>
      {desc && <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">{desc}</p>}
    </div>
  );
}
