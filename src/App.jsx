import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import HeroSection from './pages/HeroSection';
import CompanyIntro from './pages/CompanyIntro';
import ServicesGrid from './pages/ServicesGrid';
import FeaturedSolutions from './pages/FeaturedSolutions';
import WhyHaka from './pages/WhyHaka';
import TechStack from './pages/TechStack';
import HowWeWork from './pages/HowWeWork';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import PortfolioPage from './pages/PortfolioPage';

import SectionHeader from './components/SectionHeader';
import OfficeInfo from './contact/OfficeInfo';
import ContactForm from './contact/ContactForm';
import Button from './components/Button';
import { ArrowRight, Clock } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Theme state: LocalStorage check or default to dark
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('haka-theme') || 'dark';
  });

  // Direct DOM manipulation to guarantee <html> class gets added/removed
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('haka-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const pageTitles = {
      home: 'HAKA SOLUTIONS | Enterprise Digital Operations',
      about: 'About Us | HAKA SOLUTIONS',
      services: 'Core Services | HAKA SOLUTIONS',
      solutions: 'Featured Solutions | HAKA SOLUTIONS',
      technology: 'Technology & Security Stack | HAKA SOLUTIONS',
      portfolio: 'Portfolio & Case Studies | HAKA SOLUTIONS',
      contact: 'Contact Team | HAKA SOLUTIONS'
    };
    document.title = pageTitles[currentPage] || 'HAKA SOLUTIONS | Enterprise Digital Operations';
  }, [currentPage]);

  return (
    <div className="min-h-screen font-sans flex flex-col justify-between selection:bg-cyan-500 selection:text-white bg-slate-50 dark:bg-[#060a14] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div>
        {/* Pass theme and toggleTheme to Navbar */}
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main key={currentPage} className="transition-colors duration-300 animate-fade-in">
          {/* 1. HOME */}
          {currentPage === 'home' && (
            <div>
              <HeroSection setCurrentPage={setCurrentPage} />
              <section className="py-12 sm:py-16 border-y px-4 sm:px-6 text-center transition-colors duration-300 bg-slate-100/90 dark:bg-[#080e1c] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80">
                <div className="max-w-4xl mx-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3 hover:scale-105 transition-transform cursor-default">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    HAKA Overview
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3 sm:mb-4 text-slate-900 dark:text-white tracking-tight">
                    Enterprise Digital Operations & Technology Solutions
                  </h2>
                  <p className="text-xs sm:text-sm max-w-2xl mx-auto mb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                    We deliver reliable, structured technology workflows and operational management for scaling organizations.
                  </p>
                  <Button variant="outline" onClick={() => setCurrentPage('about')} className="w-full sm:w-auto">
                    Discover Our Story 
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-200" />
                  </Button>
                </div>
              </section>
              <HowWeWork setCurrentPage={setCurrentPage} />
            </div>
          )}

          {/* 2. ABOUT US */}
          {currentPage === 'about' && (
            <div className="min-h-[75vh]">
              <CompanyIntro />
              <WhyHaka setCurrentPage={setCurrentPage} />
            </div>
          )}

          {/* 3. SERVICES */}
          {currentPage === 'services' && (
            <div className="min-h-[75vh]">
              <ServicesGrid setCurrentPage={setCurrentPage} />
              <Industries setCurrentPage={setCurrentPage} />
            </div>
          )}

          {/* 4. SOLUTIONS */}
          {currentPage === 'solutions' && (
            <div className="min-h-[75vh]">
              <FeaturedSolutions setCurrentPage={setCurrentPage} />
              <CaseStudies setCurrentPage={setCurrentPage} />
            </div>
          )}

          {/* 5. TECHNOLOGY */}
          {currentPage === 'technology' && (
            <div className="min-h-[75vh]">
              <TechStack setCurrentPage={setCurrentPage} />
            </div>
          )}

          {/* 6. PORTFOLIO */}
          {currentPage === 'portfolio' && (
            <PortfolioPage setCurrentPage={setCurrentPage} />
          )}

          {/* 7. CONTACT */}
          {currentPage === 'contact' && (
            <div className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto min-h-[75vh]">
              <SectionHeader 
                eyebrow="Contact" 
                title="Let's Build Something Better Together" 
                desc="Have an operational project or technical challenge? Connect directly with our team." 
              />
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-start mt-8 sm:mt-12">
                <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 bg-white dark:bg-[#0b1220] border-slate-200 dark:border-slate-800 shadow-xl space-y-6 hover:border-slate-300 dark:hover:border-slate-700">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">Registered Office</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Official operations hub and registered desk.
                    </p>
                  </div>
                  <OfficeInfo />
                  <div className="p-3.5 sm:p-4 rounded-xl border text-xs flex items-center gap-3 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                    <Clock size={18} className="text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span>Response Benchmark: Verified inquiries are answered within 24 business hours.</span>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer setCurrentPage={setCurrentPage} />
      <FloatingWhatsApp />
    </div>
  );
}

