import React from 'react';
import { Card, Button } from '../components/UI';
import { ShieldCheck, FileCheck, Landmark, Award } from 'lucide-react';

export const GovernmentDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 shadow-md">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-600/20 text-emerald-400 rounded-xl border border-emerald-500/20"><Landmark className="w-8 h-8" /></div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Municipal Environmental Regulatory Matrix Hub</h1>
            <p className="text-sm text-slate-400 font-medium">Verify structural landfill diversion mandates, issue regulatory tax exclusions, and sign official digital certificates.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tax Offsets Accordion Panel */}
        <Card className="p-6 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <Award className="w-4 h-4 text-emerald-600" /> Dynamic ESG Carbon Offset Accruals
          </h3>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Current Cycle Corporate Credit multiplier</p>
                <p className="text-2xl font-black text-slate-900 tracking-tight mt-1">₹45,000 Saved</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Applied directly to local commercial infrastructure dump fee credits.</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full uppercase border border-emerald-200 tracking-wider">Active State</span>
            </div>
          </div>
        </Card>

        {/* Regulatory Audit Checklist Status Layer */}
        <Card className="p-6 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
            <FileCheck className="w-4 h-4 text-indigo-500" /> Compliance Matrices Verification Check
          </h3>
          <div className="flex flex-col gap-3.5 text-xs font-semibold text-slate-700">
            {[
              { text: 'Solid Scrap Payloads Match Local Geometric Ordinance 402-B', state: true },
              { text: 'Non-potable AC Fluid Conduit Water Safety Cleared for Industrial Blends', state: true },
              { text: 'Thermal Overflows Energy-Share Infrastructure Loop Inspected', state: false }
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg p-3">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${c.state ? 'bg-emerald-500' : 'bg-amber-400'}`}></span>
                <p className="flex-1 text-slate-800 leading-snug">{c.text}</p>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${c.state ? 'text-emerald-700' : 'text-amber-700'}`}>{c.state ? 'Verified' : 'Review Intercept Pending'}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};