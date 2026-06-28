import React from 'react';
import { AlertCircle, CheckCircle, X } from 'lucide-react';

export const Toast = ({ message, type, onClose }) => {
  const styles = type === 'error' ? 'bg-rose-900 text-rose-50 border-rose-800' : 'bg-slate-900 text-slate-50 border-slate-800';
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border ${styles} animate-slide-in`}>
      {type === 'error' ? <AlertCircle className="w-5 h-5 text-rose-400" /> : <CheckCircle className="w-5 h-5 text-emerald-400" />}
      <p className="text-sm font-medium">{message}</p>
      <button onClick={onClose} className="p-0.5 hover:bg-slate-800 rounded transition-colors ml-2">
        <X className="w-4 h-4 text-slate-400" />
      </button>
    </div>
  );
};