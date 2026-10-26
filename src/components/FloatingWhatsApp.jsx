import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Haka%20Solutions,%20I%20have%20an%20enquiry"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2"
      title="Contact via WhatsApp"
    >
      {/* Tooltip Pill */}
      <span className="hidden md:inline-block px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-[11px] font-semibold shadow-lg border border-slate-700/80 backdrop-blur-md opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        Chat with Operations
      </span>

      {/* Button with animated radar ring */}
      <div className="relative">
        <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping-slow pointer-events-none" />
        <div className="relative bg-linear-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white p-3 sm:p-3.5 rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center">
          <MessageSquare size={20} className="sm:w-[22px] sm:h-[22px] group-hover:rotate-12 transition-transform duration-300" />
        </div>
      </div>
    </a>
  );
}
