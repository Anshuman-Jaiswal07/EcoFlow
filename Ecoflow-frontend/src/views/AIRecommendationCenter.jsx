import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, Button } from '../components/UI';
import { Cpu, Zap, Leaf, CheckCircle2 } from 'lucide-react';

export const AIRecommendationCenter = () => {
  const { recommendations, setRecommendations, showToast } = useApp();

  const handleExecute = (id) => {
    setRecommendations(recommendations.map(r => r.id === id ? { ...r, status: 'Executed / Infrastructure Locked' } : r));
    showToast(`Symbiosis optimization path validated and executed for ${id}.`);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex items-start gap-4 bg-indigo-900 text-white p-6 rounded-2xl border border-indigo-950 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-10"><Cpu className="w-64 h-64" /></div>
        <div className="p-3 bg-indigo-500/20 backdrop-blur-md rounded-xl text-indigo-300 border border-indigo-400/20"><Cpu className="w-8 h-8" /></div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">EcoFlow AI Symbiosis Optimization Engine</h1>
          <p className="text-sm text-indigo-200 mt-1">Real-time analytical layer processing urban geometric boundaries to optimize physical resource sharing matrices automatically.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {recommendations.map(rec => {
          const isExecuted = rec.status.includes('Executed');
          return (
            <Card key={rec.id} className={`p-6 border-l-4 transition-all ${isExecuted ? 'border-l-slate-400 bg-slate-50' : 'border-l-indigo-500 bg-white hover:shadow-md'}`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${isExecuted ? 'bg-slate-200 text-slate-700' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'}`}>
                    {rec.type}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">{rec.id}</span>
                </div>
                {isExecuted && (
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Core Infrastructure Validated
                  </span>
                )}
              </div>
              <p className={`text-base font-bold tracking-tight mb-2 ${isExecuted ? 'text-slate-500 line-through' : 'text-slate-900'}`}>{rec.primaryText}</p>
              
              <div className="flex items-start gap-2 bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs font-medium text-slate-600 my-4">
                <Leaf className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block mb-0.5">Calculated Impact Multiplier Metrics:</span>
                  {rec.impact}
                </div>
              </div>

              {!isExecuted && (
                <div className="flex justify-end gap-3 mt-2">
                  <Button variant="secondary" className="text-xs py-1.5 px-3.5">Ignore Branch</Button>
                  <Button variant="primary" className="text-xs py-1.5 px-3.5 flex items-center gap-1.5 shadow-xs bg-indigo-600" onClick={() => handleExecute(rec.id)}>
                    <Zap className="w-3.5 h-3.5" /> Execute Ecosystem Optimization Loop
                  </Button>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};