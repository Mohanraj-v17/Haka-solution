import React, { useState, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { 
  TrendingUp, ArrowRight, X, Sparkles, Filter, 
  ShieldCheck, CheckCircle2, Layers, Cpu, Database, 
  Search, Clock, Calendar, Check, ArrowUpRight, Zap, 
  BarChart3, RefreshCw, FileText, Lock, Building2, Quote
} from 'lucide-react';

const CATEGORIES = ['All', 'Supply Chain', 'E-Commerce', 'FinTech', 'Operations & Healthcare'];

const PROJECTS = [
  {
    id: 1,
    title: "Apex Logistics Automated Dispatch Hub",
    category: "Supply Chain",
    client: "Apex Global Freight",
    duration: "10-Day Deployment",
    metric: "72% Faster Turnaround",
    metricType: "Turnaround",
    summary: "Re-engineered legacy physical paperwork into a high-throughput digital manifest parsing and verification workflow.",
    tags: ["Process Automation", "OCR Processing", "Cloud Database", "SOP Governance"],
    pipeline: ["PDF Manifest Ingest", "Optical Data Extraction", "Anomaly Flagging", "Live ERP Sync"],
    challenge: "Over 8,000 multi-vendor transport manifests were handled on physical paperwork monthly, causing recurring 48-hour delivery backlogs and manual clerical bottlenecks.",
    solution: "Designed a secure digital manifest processing pipeline that extracts delivery data via OCR, validates consignee signatures against transport master records, and auto-dispatches error logs.",
    methodology: "Conducted 3-day workflow profiling, followed by parallel shadow processing to ensure 100% warehouse uptime before full cutover.",
    deliverables: [
      "Automated optical document ingestion parser",
      "Real-time discrepancy exception review dashboard",
      "Relational CSV/JSON export direct to warehouse ERP",
      "Standardized 12-step operator runbook"
    ],
    beforeAfter: {
      before: "48-Hour Processing Delay",
      after: "< 15-Minute Automated Ingestion",
      accuracy: "99.85% Data Verification"
    },
    outcome: "Reduced manifest processing from 2 days to under 15 minutes with zero record duplication and 100% shipment visibility."
  },
  {
    id: 2,
    title: "OmniCart Multi-Marketplace Catalog & Stock Sync",
    category: "E-Commerce",
    client: "OmniCart Retailers",
    duration: "Continuous Multi-Shift Sync",
    metric: "99.9% Inventory Precision",
    metricType: "Precision",
    summary: "Automated multi-channel SKU reconciliation and real-time inventory level syncing across 4 major marketplace channels.",
    tags: ["REST API Bridging", "Redis Cache", "Node.js Daemons", "Catalog Auditing"],
    pipeline: ["ERP Stock Polling", "Variance Detection", "Multi-Channel Broadcast", "Stockout Prevention"],
    challenge: "Mismatched stock counts across multi-channel stores caused costly overselling cancellations, seller rating downgrades, and delayed manual catalog updates.",
    solution: "Built a scheduled verification daemon that cross-audits inventory levels between warehouse ERP and live seller storefronts, auto-adjusting safety buffers during high-traffic sales.",
    methodology: "Implemented an event-driven webhook architecture with in-memory caching to eliminate rate-limit throttling from external marketplace APIs.",
    deliverables: [
      "Bidirectional REST API synchronization daemon",
      "Automated stock-out prevention and safety buffer rules",
      "Multi-channel SKU discrepancy alerts",
      "Daily marketplace sync health reports"
    ],
    beforeAfter: {
      before: "3.5% Oversell Cancellation Rate",
      after: "0.01% Negligible Discrepancy",
      accuracy: "45k+ SKUs Synced in Real Time"
    },
    outcome: "Over 45,000 active SKUs kept strictly in sync with sub-2-second latency and zero overselling during festive sale peaks."
  },
  {
    id: 3,
    title: "FinTrust Quarterly Merchant Statement & Ledger Engine",
    category: "FinTech",
    client: "FinTrust Capital Group",
    duration: "Scheduled Nightly Daemons",
    metric: "Zero Audit Deficiencies",
    metricType: "Compliance",
    summary: "Role-isolated operational engine for quarterly merchant transaction reconciliation, variance detection, and document archiving.",
    tags: ["Role Security (RBAC)", "Data Governance", "Variance Alert Bot", "SQL Audit Trail"],
    pipeline: ["Encrypted Statement Upload", "Algorithmic Ingestion", "Variance Cross-Check", "Manager Audit Sign-Off"],
    challenge: "Quarterly reconciliation required weeks of manual cross-checks between bank settlement files and internal merchant registries, delaying regulatory filings.",
    solution: "Structured an encrypted ingestion engine that auto-flags variance discrepancies above a 0.01 threshold and routes unassigned transactions to a high-priority supervisor queue.",
    methodology: "Applied zero-trust role-based access control (RBAC), end-to-end TLS 1.3 encrypted file transfers, and immutable append-only ledger audit logs.",
    deliverables: [
      "Algorithmic transaction variance detection script",
      "Tier-1 reconciliation supervisor dashboard",
      "Encrypted historical statement cloud archive",
      "ISO-compliant transaction audit logs"
    ],
    beforeAfter: {
      before: "3 Weeks Manual Review Cycle",
      after: "Under 4 Hours Automated Run",
      accuracy: "100% Audit Compliance"
    },
    outcome: "Quarterly merchant reconciliations completed 3x faster with 100% compliance audit pass rate and zero unresolved variances."
  },
  {
    id: 4,
    title: "HealthCorp Clinical Intake Records Standardization",
    category: "Operations & Healthcare",
    client: "HealthCorp Diagnostics",
    duration: "Dedicated Shift Operations Desk",
    metric: "65% Backlog Cleared",
    metricType: "Productivity",
    summary: "Digitized and standardized 120,000+ historical physical intake archives into structured, searchable diagnostic operational records.",
    tags: ["Digital Workforce", "Document Archiving", "SOP Control", "HIPAA Aligned"],
    pipeline: ["High-Res Optical Scan", "Dual-Blind Data Entry", "Supervisor SOP Audit", "Encrypted Cloud Vault"],
    challenge: "Decades of physical paper patient intake archives made historical lookups slow and prone to misplaced documents, stalling specialist consultations.",
    solution: "Deployed a dedicated HAKA operational team equipped with double-blind transcription tools and standardized medical metadata taxonomy to ingest and verify every file.",
    methodology: "Segregated confidential patient identifiers using role-based redaction, ensuring strict HIPAA-aligned confidentiality standards.",
    deliverables: [
      "Standardized clinical metadata indexing schema",
      "Full-text searchable cloud document repository",
      "Dual-stage human verification audit trail",
      "Weekly backlog burn-down analytics"
    ],
    beforeAfter: {
      before: "120k Unindexed Paper Archives",
      after: "Sub-Second Patient Record Retrieval",
      accuracy: "99.92% Transcription Quality"
    },
    outcome: "Successfully indexed 120,000+ records into a searchable cloud database, cutting average record retrieval time from 40 minutes to under 5 seconds."
  },
  {
    id: 5,
    title: "GlobalTrade Cross-Border Bill of Lading (BOL) Audit",
    category: "Supply Chain",
    client: "GlobalTrade Logistics",
    duration: "2-Week Phased Rollout",
    metric: "100% Bill Verification",
    metricType: "Accuracy",
    summary: "Automated multilingual bill of lading document optical transcription and cross-referencing against contracted shipping tariffs.",
    tags: ["Optical Transcription", "Freight Tariff Logic", "Discrepancy Resolution", "Cloud Ingest"],
    pipeline: ["Multilingual BOL Ingest", "Tariff Contract Matching", "Overcharge Flagging", "Payment Clearance"],
    challenge: "Complex cross-border freight bills in multiple languages resulted in recurring carrier overbilling disputes and extensive payment clearance delays.",
    solution: "Configured an intelligent document parser that extracts container numbers, gross weight, and freight line items, validating them against negotiated rate contracts.",
    methodology: "Integrated automated exception flags for any line-item rate exceeding contractual bounds by more than 0.5%, escalating to freight auditors.",
    deliverables: [
      "Multilingual optical extraction pipeline",
      "Contractual freight tariff verification engine",
      "Automated overcharge recovery reports",
      "Custom carrier dispute export feeds"
    ],
    beforeAfter: {
      before: "8.2% Disputed Overcharge Rate",
      after: "0% Unidentified Tariff Variance",
      accuracy: "Saved 150+ Clerical Hours/Month"
    },
    outcome: "Achieved 100% pre-payment freight audit verification, recovering over $42,000 in improper carrier surcharges within the first quarter."
  },
  {
    id: 6,
    title: "PaySecure Merchant KYC Onboarding Verification",
    category: "FinTech",
    client: "PaySecure Merchant Solutions",
    duration: "24/7 Continuous Shift Support",
    metric: "85% Manual Review Saved",
    metricType: "Efficiency",
    summary: "High-speed Tier-1 operational review desk combining automated ID parsing with human discrepancy triage for commercial merchant onboarding.",
    tags: ["KYC Pipeline", "Tier-1 Operations Desk", "Fraud Prevention", "SLA Compliance"],
    pipeline: ["Merchant ID Document Upload", "Automated Registry Check", "Tier-1 Contextual Triage", "Instant Onboarding Pass"],
    challenge: "Manual document verification for new online merchants created 3-day signup backlogs, increasing applicant drop-off rates during peak growth campaigns.",
    solution: "Designed a hybrid onboarding workflow: algorithmic optical validation of tax IDs and business registrations paired with continuous 24/7 human review shifts for edge cases.",
    methodology: "Multi-shift operational teams operating on strict 30-minute SLA response benches, handling KYC queues around the clock.",
    deliverables: [
      "Tier-1 merchant document verification desk",
      "Automated tax registry validation scripts",
      "Fraud anomaly detection checklist",
      "Live SLA compliance monitor"
    ],
    beforeAfter: {
      before: "72-Hour Average Onboarding Wait",
      after: "< 45-Minute Verified Approval",
      accuracy: "Zero Fraudulent Registrations"
    },
    outcome: "Accelerated merchant onboarding by 85%, cutting turnaround from 3 days to under 45 minutes while maintaining a 100% regulatory compliance record."
  }
];

const TESTIMONIALS = [
  {
    quote: "HAKA SOLUTIONS stepped in when our multi-store billing reconciliation was 3 weeks behind. They deployed a dedicated shift within 7 days and got our accuracy to 99.8%.",
    author: "Head of Digital Operations",
    company: "National Superstore Chain",
    metric: "72% Faster Processing"
  },
  {
    quote: "Their team understands real business discipline. The SOP runbooks they created eliminated our dependency on tribal knowledge and solved weekend backlog spikes.",
    author: "VP of Supply Chain",
    company: "Express Logistics Network",
    metric: "Zero Lost Dispatches"
  }
];

export default function PortfolioPage({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null);

  // Filtered projects by category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((item) => {
      const matchesCategory = activeTab === 'All' || item.category === activeTab;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        item.title.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-14 sm:space-y-20 min-h-[85vh] transition-colors duration-300">
      
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/70 border border-blue-300/80 dark:border-blue-500/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold mb-4 hover:scale-105 transition-transform cursor-default shadow-xs">
          <Sparkles size={14} className="text-cyan-600 dark:text-cyan-400 animate-pulse shrink-0" /> 
          <span>Enterprise Case Study Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 sm:mb-4">
          Client <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-cyan-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-300">Portfolio</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base leading-relaxed px-2">
          Explore real operational architectures engineered by HAKA SOLUTIONS to eliminate clerical bottlenecks, automate pipelines, and guarantee verified precision.
        </p>
      </div>

      {/* 2. Interactive Search & Category Filter Bar */}
      <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
        
        {/* Search Bar */}
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search by project, client, tech tag, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 sm:py-3.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All' 
              ? PROJECTS.length 
              : PROJECTS.filter(p => p.category === cat).length;
            const isActive = activeTab === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 hover:scale-105 active:scale-95 ${
                  isActive
                    ? 'bg-linear-to-r from-blue-600 via-cyan-600 to-blue-500 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/40 shadow-xs'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[9.5px] sm:text-[10px] font-mono ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Filter Counter Status */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 px-2">
          <span>
            Showing <strong className="text-slate-800 dark:text-slate-200">{filteredProjects.length}</strong> of {PROJECTS.length} verified engagements
          </span>
          {(activeTab !== 'All' || searchQuery) && (
            <button
              onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
              className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer font-medium"
            >
              <RefreshCw size={12} /> Reset filters
            </button>
          )}
        </div>
      </div>

      {/* 3. Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-12 sm:py-16 text-center space-y-4 bg-white dark:bg-slate-900/50 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
          <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
            <Search size={22} />
          </div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">No Matching Case Studies</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No projects matched your criteria "{searchQuery}". Try selecting another category or resetting the search.
          </p>
          <button
            onClick={() => { setActiveTab('All'); setSearchQuery(''); }}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition cursor-pointer"
          >
            Show All Projects
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((item) => (
            <div 
              key={item.id} 
              className="group p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white dark:bg-linear-to-b dark:from-[#0b1222] dark:to-[#070c18] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between relative overflow-hidden cursor-default shadow-sm dark:shadow-none"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/12 transition-colors pointer-events-none" />

              <div>
                {/* Card Top Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4 sm:mb-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 border border-blue-300 dark:border-blue-500/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                      <Clock size={12} className="text-slate-400" /> {item.duration}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-500/20">
                    <TrendingUp size={13} className="group-hover:scale-110 transition-transform" /> 
                    {item.metric}
                  </span>
                </div>

                {/* Title & Summary */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium">
                  Client Organization: <strong className="text-slate-800 dark:text-slate-200">{item.client}</strong>
                </p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-5 sm:mb-6 leading-relaxed">
                  {item.summary}
                </p>

                {/* Pipeline Flow Strip */}
                <div className="mb-5 sm:mb-6 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800">
                  <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1.5 sm:mb-2">
                    Operational Pipeline Flow:
                  </span>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[10.5px] text-slate-700 dark:text-slate-300">
                    {item.pipeline.map((step, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium">
                          {step}
                        </span>
                        {sIdx < item.pipeline.length - 1 && (
                          <ArrowRight size={10} className="text-cyan-500 shrink-0" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-medium hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-600 dark:hover:text-cyan-300 hover:scale-105 transition-all duration-150 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 sm:pt-5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[55%]">
                  Impact: <strong className="text-cyan-600 dark:text-cyan-400">{item.beforeAfter.accuracy}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModal(item)}
                  className="group/btn text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  Full Architecture 
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Large Metrics Counter Banner (2x2 on Mobile, 4 Cols on Desktop) */}
      <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-linear-to-r from-blue-50 via-slate-100 to-blue-50 dark:from-blue-950/40 dark:via-slate-900 dark:to-blue-950/40 border border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center shadow-md dark:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
        <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-200 cursor-default">
          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white block mb-1">120k+</span>
          <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Records Audited</p>
        </div>
        <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-200 cursor-default">
          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-cyan-600 dark:text-cyan-400 block mb-1">99.85%</span>
          <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">SLA Accuracy</p>
        </div>
        <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-200 cursor-default">
          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-400 block mb-1">70%</span>
          <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Time Saved</p>
        </div>
        <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl hover:scale-105 transition-transform duration-200 cursor-default">
          <span className="text-2xl sm:text-4xl md:text-5xl font-black text-emerald-600 dark:text-emerald-400 block mb-1">&lt; 15m</span>
          <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 uppercase tracking-wider font-semibold">Incident Triage</p>
        </div>
      </div>

      {/* 5. Client Impact Proof Quotes Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <div 
            key={idx}
            className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-slate-800 shadow-sm sm:shadow-md flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-200 cursor-default"
          >
            <div className="space-y-3 sm:space-y-4">
              <Quote className="text-cyan-600 dark:text-cyan-400 opacity-60" size={24} />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>
            <div className="pt-4 sm:pt-6 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">{t.author}</span>
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">{t.company}</span>
              </div>
              <span className="px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950 text-cyan-700 dark:text-cyan-300 font-bold font-mono text-[10.5px]">
                {t.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 6. Comprehensive Case Study Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 dark:bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-fade-in overflow-y-auto">
          <div className="bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-700 w-full max-w-3xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 relative shadow-2xl animate-fade-in-up my-4 sm:my-8 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-slate-900 dark:hover:text-white p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:rotate-90 cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3 pr-8">
              <span className="text-[10px] sm:text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest px-2.5 sm:px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-300 dark:border-blue-500/30">
                {activeModal.category}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30">
                {activeModal.metric}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-1 leading-snug">
              {activeModal.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
              Client: <strong className="text-slate-800 dark:text-slate-200">{activeModal.client}</strong> • Engagement: {activeModal.duration}
            </p>

            {/* Before vs After Impact Box */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-5 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-linear-to-r from-blue-50/80 to-cyan-50/80 dark:from-blue-950/40 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-500/30 text-xs">
              <div>
                <span className="text-[9.5px] sm:text-[10px] uppercase font-bold text-rose-500 dark:text-rose-400 block mb-0.5">Previous Bottleneck:</span>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{activeModal.beforeAfter.before}</p>
              </div>
              <div>
                <span className="text-[9.5px] sm:text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 block mb-0.5">HAKA Delivered Result:</span>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{activeModal.beforeAfter.after}</p>
              </div>
              <div>
                <span className="text-[9.5px] sm:text-[10px] uppercase font-bold text-cyan-600 dark:text-cyan-400 block mb-0.5">Verified Standard:</span>
                <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs">{activeModal.beforeAfter.accuracy}</p>
              </div>
            </div>

            {/* Deep Sections */}
            <div className="space-y-3 sm:space-y-4 text-xs">
              
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-rose-500 dark:text-rose-400 block mb-1 text-xs">1. Operational Problem & Business Risk</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{activeModal.challenge}</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-cyan-600 dark:text-cyan-400 block mb-1 text-xs">2. HAKA Solution Architecture</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{activeModal.solution}</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-blue-600 dark:text-blue-400 block mb-1 text-xs">3. Transition & Execution Methodology</span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{activeModal.methodology}</p>
              </div>

              {/* Standard Deliverables */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-2 text-xs">4. Production Deliverables Handed Over:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModal.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Used */}
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">Production Toolset:</span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeModal.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 sm:px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-[10.5px] sm:text-[11px] border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Need similar operational automation for your organization?
              </span>
              <button
                type="button"
                onClick={() => {
                  setActiveModal(null);
                  setCurrentPage('contact');
                }}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Request Similar Architecture 
                <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
