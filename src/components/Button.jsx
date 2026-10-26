import React from 'react';

export default function Button({ children, variant = 'primary', onClick, className = '', type = 'button' }) {
  const base = "px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer select-none group";
  const styles = {
    primary: "bg-linear-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:via-cyan-500 hover:to-blue-400 text-white shadow-md shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    secondary: "bg-white/90 hover:bg-slate-100 dark:bg-slate-800/90 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
    outline: "border border-cyan-500/40 text-cyan-600 dark:text-cyan-400 hover:bg-linear-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
