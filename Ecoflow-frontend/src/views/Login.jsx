import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Card, Input, Button } from '../components/UI';
import { Layers } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const { showToast, setLoading, loading } = useApp();
  const [form, setForm] = useState({ email: 'judgeGuest@gmail.com', password: 'qwerty123' });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('Authenticated successfully as Nexus Infra Corp.');
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Seamless Dark Ambient Theme Underlays */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/15 to-purple-600/0 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-emerald-500/10 to-indigo-600/0 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      {/* High-Contrast White Panel Box */}
      <Card className="w-full max-w-md p-8 bg-white border border-slate-200 rounded-2xl shadow-2xl relative z-10 text-slate-900">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl text-white shadow-lg shadow-indigo-500/20 mb-3">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Access EcoFlow AI</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Enterprise Resource Management Node</p>
        </div>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left">
          <Input 
            label="Enterprise Email Node Address" 
            type="email" 
            labelClassName="text-slate-700 font-semibold text-xs"
            className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white transition-all"
            value={form.email} 
            onChange={e => setForm({...form, email: e.target.value})} 
            required 
          />
          <Input 
            label="Security Authentication Key" 
            type="password" 
            labelClassName="text-slate-700 font-semibold text-xs"
            className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white transition-all"
            value={form.password} 
            onChange={e => setForm({...form, password: e.target.value})} 
            required 
          />
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold border border-indigo-400/20 shadow-lg shadow-indigo-600/20 transition-all duration-200 transform hover:-translate-y-0.5 rounded-xl" 
            disabled={loading}
          >
            {loading ? 'Validating Encryption Credentials...' : 'Sign In To Control Matrix'}
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            New infrastructure hub?{' '}
            <span 
              className="text-indigo-600 hover:text-indigo-700 underline font-semibold cursor-pointer transition-colors" 
              onClick={() => navigate('/register')}
            >
              Register Node
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};