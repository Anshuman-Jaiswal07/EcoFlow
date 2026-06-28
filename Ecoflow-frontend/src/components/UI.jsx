import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-indigo-500 shadow-sm",
    secondary: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 focus:ring-slate-500 shadow-sm",
    danger: "bg-rose-600 hover:bg-rose-700 text-white focus:ring-rose-500 shadow-sm",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 focus:ring-slate-400"
  };
  return <button className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</button>;
};

export const Card = ({ children, className = '', ...props }) => (
  <div className={`bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden ${className}`} {...props}>{children}</div>
);

export const Input = ({ label, error, className = '', ...props }) => (
  <div className="w-full flex flex-col gap-1.5">
    {label && <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{label}</label>}
    <input className={`w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors ${error ? 'border-rose-500 focus:ring-rose-500' : ''} ${className}`} {...props} />
    {error && <span className="text-xs text-rose-600 font-medium">{error}</span>}
  </div>
);

export const Select = ({ label, options = [], error, className = '', ...props }) => (
  <div className="w-full flex flex-col gap-1.5">
    {label && <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">{label}</label>}
    <select className={`w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors ${className}`} {...props}>
      {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
    </select>
  </div>
);

export const Badge = ({ type }) => {
  const mapping = {
    Solids: "bg-violet-50 text-violet-700 border border-violet-200",
    Liquids: "bg-cyan-50 text-cyan-700 border border-cyan-200",
    Energy: "bg-amber-50 text-amber-700 border border-amber-200",
    Organics: "bg-emerald-50 text-emerald-700 border border-emerald-200"
  };
  return <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${mapping[type] || 'bg-slate-100 text-slate-700'}`}>{type}</span>;
};