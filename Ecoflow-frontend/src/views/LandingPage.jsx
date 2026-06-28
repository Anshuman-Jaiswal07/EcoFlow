import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, ArrowRight, ShieldCheck, Recycle, Droplet, Flame } from 'lucide-react';

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* --- BACKGROUND INFRASTRUCTURE LAYER --- */}
      {/* Ambient Cyber Light Emission Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/0 blur-[140px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-emerald-500/10 to-indigo-600/0 blur-[120px] pointer-events-none" />
      
      {/* Precision Micro-Grid Vector Map Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_40%,#000_60%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* --- INTEGRATED TRANSPARENT NAVBAR --- */}
      <header className="relative w-full z-20">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl text-white shadow-lg shadow-indigo-500/20 group-hover:scale-[1.03] transition-all duration-300">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              EcoFlow AI
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200"
              onClick={() => navigate('/login')}
            >
              Sign In
            </button>
            <button 
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-200 transform hover:-translate-y-0.5 px-5 py-2.5 rounded-xl border border-indigo-400/20" 
              onClick={() => navigate('/register')}
            >
              Deploy Node
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px w-full bg-gradient-to-r from-slate-800/0 via-slate-800/80 to-slate-800/0" />
        </div>
      </header>
      
      {/* --- MAIN DISPLAY ENVIRONMENT --- */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto py-16 z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur-md rounded-full text-[11px] font-bold text-indigo-400 tracking-wider uppercase mb-8 border border-indigo-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Industrial Symbiosis Engine Active
        </div>

        {/* Title Block */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6 max-w-4xl">
          The Hyper-Local Marketplace <br />
          <span className="text-slate-400 font-medium">for</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-400">
            Industrial & Resource Symbiosis
          </span>
        </h1>

        {/* Sub-copy */}
        <p className="text-base sm:text-lg text-slate-300 font-normal max-w-3xl mb-12 leading-relaxed">
          Circularize structural solids, non-potable liquids, secondary thermal overflows, and dynamic biomass. 
          Driven by computer vision models and automated micro-infrastructure routing frameworks.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24 w-full justify-center max-w-md sm:max-w-none">
          {/* Primary CTA */}
          <button 
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center gap-2.5 group shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all duration-200 transform hover:-translate-y-0.5 rounded-xl" 
            onClick={() => navigate('/register')}
          >
            Launch Live Dashboard 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200 text-indigo-200" />
          </button>
          
          {/* Secondary CTA */}
          <button 
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-transparent hover:bg-white/5 border-2 border-slate-200 text-white transition-all duration-200 transform hover:-translate-y-0.5 rounded-xl" 
            onClick={() => navigate('/marketplace')}
          >
            Explore Asset Marketplace
          </button>
        </div>

        {/* --- TELEMETRY MATRIX CARDS (High Contrast Highlights) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 text-left border-t border-slate-800 pt-16 w-full">
          {[
            { label: 'Solids Diverted', count: '14,820 Tons', icon: ShieldCheck, bg: 'bg-violet-500/20', color: 'text-violet-400', border: 'border-slate-800 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]' },
            { label: 'Liquid Recovery', count: '4.2M Liters', icon: Droplet, bg: 'bg-cyan-500/20', color: 'text-cyan-400', border: 'border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]' },
            { label: 'Thermal Offset', count: '184k MWh', icon: Flame, bg: 'bg-amber-500/20', color: 'text-amber-400', border: 'border-slate-800 hover:border-amber-500/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]' },
            { label: 'Organic Circularity', count: '91.4%', icon: Recycle, bg: 'bg-emerald-500/20', color: 'text-emerald-400', border: 'border-slate-800 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]' }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`p-6 bg-slate-900/80 backdrop-blur-md border rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-1 ${stat.border}`}
              >
                <div className={`p-2.5 ${stat.bg} ${stat.color} rounded-xl w-fit mb-4 border border-white/10`}>
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-2xl font-black text-white tracking-tight">{stat.count}</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mt-1.5">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};