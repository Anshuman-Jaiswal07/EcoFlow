import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Badge } from '../components/UI';
import { useApp } from '../context/AppContext';
import { BarChart3, TrendingUp, Layers, Cpu, ArrowRight, Activity } from 'lucide-react';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { resources, recommendations } = useApp();

  return (
    <div className="flex flex-col gap-8">
      {/* Quick Overview Summary Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-lg">
        <div>
          <h1 className="text-xl font-bold tracking-tight">SymbioCity Matrix Operational Console</h1>
          <p className="text-sm text-slate-400 font-medium mt-1">Entity Profile node: <span className="text-indigo-400">Nexus Infra Corp</span> (Active Ecosystem Link)</p>
        </div>
        <Button variant="primary" onClick={() => navigate('/upload')} className="flex items-center gap-2 whitespace-nowrap bg-indigo-500 hover:bg-indigo-600 border-none shadow-md">
          Stream New Waste Asset <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Metrics Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Current Environmental Multiplier', value: '42.8 Tons', change: '+12.4% vs last cycle', desc: 'Net raw solids/liquids kept from local fills.', icon: TrendingUp, color: 'text-emerald-500' },
          { title: 'Direct Net Infrastructure ROI', value: '₹1,48,200', change: 'Cost overhead saved', desc: 'Direct savings mapped from AI automated claiming.', icon: BarChart3, color: 'text-indigo-500' },
          { title: 'Automated Recommendations Logged', value: '2 Matches', change: 'Awaiting node execution', desc: 'Live spatial configurations ready to verify.', icon: Cpu, color: 'text-amber-500' }
        ].map((m, i) => {
          const Icon = m.icon;
          return (
            <Card key={i} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{m.title}</span>
                  <Icon className={`w-5 h-5 ${m.color}`} />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900 mt-2">{m.value}</h3>
                <p className="text-xs text-indigo-600 font-semibold mt-1">{m.change}</p>
              </div>
              <p className="text-xs text-slate-500 font-medium border-t border-slate-100 pt-3 mt-4">{m.desc}</p>
            </Card>
          );
        })}
      </div>

      {/* Split section: AI Actionable Match Alerts vs Active Matrix Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recommendation Engine Snapshot */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-500" /> High-Confidence AI Symbiosis Loops
            </h3>
            <Button variant="ghost" className="text-xs font-bold p-0 text-indigo-600" onClick={() => navigate('/ai-center')}>View Engine Terminal</Button>
          </div>
          <div className="flex flex-col gap-4">
            {recommendations.map(rec => (
              <Card key={rec.id} className="p-5 border-l-4 border-l-amber-500 flex flex-col gap-2 bg-gradient-to-r from-amber-50/20 to-white">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 tracking-wider">{rec.type}</span>
                  <span className="text-xs text-slate-400 font-semibold">{rec.id}</span>
                </div>
                <p className="text-sm font-bold text-slate-800 leading-snug">{rec.primaryText}</p>
                <p className="text-xs text-slate-500 font-medium">{rec.impact}</p>
                <div className="flex justify-end mt-2">
                  <Button variant="secondary" className="py-1 px-3 text-xs font-bold" onClick={() => navigate('/ai-center')}>Accept Allocation</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Global Live Resource List Pipeline state */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-indigo-500" /> Active Platform Asset Registers
            </h3>
            <Button variant="ghost" className="text-xs font-bold p-0 text-indigo-600" onClick={() => navigate('/marketplace')}>Browse Complete Grid</Button>
          </div>
          <Card className="divide-y divide-slate-100">
            {resources.slice(0, 3).map(res => (
              <div key={res.id} className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <img src={res.image} alt="" className="w-10 h-10 object-cover rounded-lg border border-slate-200" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{res.title}</h4>
                    <p className="text-xs text-slate-500 font-medium">{res.location} • <span className="font-semibold text-slate-700">{res.quantity}</span></p>
                  </div>
                </div>
                <Badge type={res.category} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};