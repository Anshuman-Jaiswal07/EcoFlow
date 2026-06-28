import React from 'react';
import { Card } from '../components/UI';
import { BarChart3, PieChart, Activity, RefreshCw } from 'lucide-react';

export const Analytics = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Ecosystem Analytics Terminal</h1>
        <p className="text-sm text-slate-500 font-medium">Real-time telemetry tracking resource optimization matrix indexes and carbon offset balances.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5"><Activity className="w-4 h-4 text-indigo-500" /> Mass Volume Diverted Array (Monthly Cycle)</h3>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1"><RefreshCw className="w-3 h-3 animate-spin" /> Live Telemetry Feed</span>
          </div>
          {/* Custom Styled Visual Telemetry Graph Placeholder bars to avoid library compilation blocks */}
          <div className="h-64 flex items-end gap-3 pt-6 px-2 border-b border-l border-slate-200">
            {[35, 48, 62, 41, 75, 92, 110].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-indigo-300 transition-all rounded-t-md relative" style={{ height: `${val * 1.8}px` }}>
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-mono font-bold text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md z-10">{val} T</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">M{idx+1}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5"><PieChart className="w-4 h-4 text-indigo-500" /> Resource Loop Proportions</h3>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-4">
            {[
              { label: 'Solids (Industrial structural elements)', pct: '45%', color: 'bg-violet-600' },
              { label: 'Liquids (AC Condensate water/Greywater Arrays)', pct: '28%', color: 'bg-cyan-500' },
              { label: 'Energy (Industrial Thermal vent captures)', pct: '15%', color: 'bg-amber-500' },
              { label: 'Organics (Nutrient circular loops/Biomass)', pct: '12%', color: 'bg-emerald-600' }
            ].map((p, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span className="line-clamp-1">{p.label}</span>
                  <span>{p.pct}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`${p.color} h-full`} style={{ width: p.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};