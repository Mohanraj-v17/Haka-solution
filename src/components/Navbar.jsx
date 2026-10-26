import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'technology', label: 'Technology' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, setCurrentPage, theme = 'dark', toggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (pageId) => {
    if (typeof setCurrentPage === 'function') {
      setCurrentPage(pageId);
    }
    setMobileOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header className="sticky top-3 sm:top-4 z-50 px-3 sm:px-4 md:px-8 max-w-7xl mx-auto transition-all duration-300">
      {/* Outer Floating Pill Container */}
      <div className={`backdrop-blur-xl border rounded-full px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 shadow-2xl flex items-center justify-between transition-all duration-300 ${
        isDark 
          ? 'bg-[#060a14]/90 border-slate-800/90 shadow-cyan-950/20 hover:border-slate-700/80' 
          : 'bg-white/95 border-slate-200 shadow-slate-200/80 hover:border-slate-300'
      }`}>
        
        {/* 1. Brand Logo (Left Side) */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-linear-to-tr from-blue-600 via-cyan-500 to-indigo-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className={`w-full h-full rounded-[9px] sm:rounded-[10px] flex items-center justify-center font-black text-transparent bg-clip-text bg-linear-to-tr from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 text-xs sm:text-sm ${
              isDark ? 'bg-[#080e1e]' : 'bg-white'
            }`}>
              H
            </div>
          </div>
          <div>
            <span className={`font-extrabold tracking-wider text-sm sm:text-base block leading-none transition-colors group-hover:text-cyan-600 dark:group-hover:text-cyan-400 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              HAKA
            </span>
            <span className="text-[8.5px] sm:text-[9.5px] text-cyan-600 dark:text-cyan-400 block tracking-[0.2em] font-bold uppercase mt-0.5 group-hover:tracking-[0.24em] transition-all">
              Solutions
            </span>
          </div>
        </div>

        {/* 2. Navigation Links (Center Aligned with Hover Pill + Active Indicator) */}
        <nav className="hidden lg:flex items-center gap-1.5 mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer group ${
                  isActive 
                    ? 'text-cyan-500 font-bold bg-cyan-500/10 dark:bg-cyan-500/15 shadow-xs' 
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />}
                </span>
              </button>
            );
          })}
        </nav>

        {/* 3. Right Side: Theme Switch + Action Button */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          
          {/* Light / Dark Mode Toggle with Rotation Animation */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer hover:scale-110 active:scale-95 ${
              isDark 
                ? 'bg-slate-800/90 hover:bg-slate-700 text-amber-400 border-slate-700 hover:shadow-lg hover:shadow-amber-500/20 hover:rotate-12' 
                : 'bg-slate-100 hover:bg-slate-200 text-indigo-600 border-slate-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-rotate-12'
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Contact Action with Hover Lift & Arrow slide */}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="group px-5 py-2 rounded-full bg-linear-to-r from-blue-600 via-cyan-600 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-md shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer"
          >
            Let's Talk 
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>

        {/* Mobile View: Toggle & Menu Button */}
        <div className="lg:hidden flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all cursor-pointer hover:scale-105 active:scale-95 ${
              isDark 
                ? 'bg-slate-800 text-amber-400 border-slate-700' 
                : 'bg-slate-100 text-indigo-600 border-slate-300'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          
          <button 
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)} 
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isDark 
                ? 'text-slate-300 hover:text-white hover:bg-slate-800' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer with Fade-in Animation and Max-Height Scroll */}
      {mobileOpen && (
        <div className={`lg:hidden mt-2.5 p-4 sm:p-5 rounded-3xl border shadow-2xl space-y-1 backdrop-blur-xl transition-all animate-fade-in-up max-h-[calc(100vh-5rem)] overflow-y-auto ${
          isDark 
            ? 'bg-[#091020]/98 border-slate-800' 
            : 'bg-white/98 border-slate-200 shadow-slate-200'
        }`}>
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer active:scale-98 ${
                  isActive 
                    ? 'text-cyan-500 font-bold bg-cyan-500/10' 
                    : isDark 
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <ArrowRight size={14} className="text-cyan-500" />}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="w-full text-center mt-3 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 active:scale-98 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
          >
            Let's Talk <ArrowRight size={13} />
          </button>
        </div>
      )}
    </header>
  );
}
