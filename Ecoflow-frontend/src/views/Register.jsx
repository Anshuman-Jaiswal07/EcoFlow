import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Card, Input, Select, Button } from '../components/UI';
import { Layers } from 'lucide-react';

export const Register = () => {
  const navigate = useNavigate();
  const { showToast, setLoading, loading } = useApp();
  const [formData, setFormData] = useState({ company: '', email: '', type: 'Industrial/Builder' });

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast('Enterprise account provisions initialized.');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Seamless Dark Ambient Theme Underlays */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/15 to-purple-600/0 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-emerald-500/10 to-indigo-600/0 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      {/* High-Contrast White Panel Box */}
      <Card className="w-full max-w-lg p-8 bg-white border border-slate-200 rounded-2xl shadow-2xl relative z-10 text-slate-900">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl text-white shadow-lg shadow-indigo-500/20 mb-3">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Deploy Node Profile</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Integrate into the SymbioCity Asset Circular Network</p>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-4 text-left">
          <Input 
            label="Registered Entity Name" 
            type="text" 
            placeholder="e.g., Nexus Infra Corp" 
            labelClassName="text-slate-700 font-semibold text-xs"
            className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white transition-all"
            value={formData.company} 
            onChange={e => setFormData({...formData, company: e.target.value})} 
            required 
          />
          <Input 
            label="Corporate Contact Email" 
            type="email" 
            placeholder="anshuman@company.com" 
            labelClassName="text-slate-700 font-semibold text-xs"
            className="bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:bg-white transition-all"
            value={formData.email} 
            onChange={e => setFormData({...formData, email: e.target.value})} 
            required 
          />
          <Select 
            label="Primary Sector Classification" 
            labelClassName="text-slate-700 font-semibold text-xs"
            className="bg-slate-50 border-slate-200 text-slate-900 focus:border-indigo-600 focus:bg-white transition-all"
            value={formData.type} 
            onChange={e => setFormData({...formData, type: e.target.value})}
            options={[
              { value: 'Industrial/Builder', label: 'Industrial Construction / Engineering Firm' },
              { value: 'Municipality', label: 'Government & Municipal Asset Manager' },
              { value: 'CommercialEntity', label: 'Commercial Real Estate / Hospitality Operations' },
              { value: 'CompostingBio', label: 'Biofuels & Decentralized Composting Matrix' }
            ]} 
          />
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold border border-indigo-400/20 shadow-lg shadow-indigo-600/20 transition-all duration-200 transform hover:-translate-y-0.5 rounded-xl" 
            disabled={loading}
          >
            {loading ? 'Provisioning Secure Hub Architecture...' : 'Initialize SymbioCity Hub'}
          </Button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-slate-500">
            Node already established? {' '}
            <span 
              className="text-indigo-600 hover:text-indigo-700 underline font-semibold cursor-pointer transition-colors" 
              onClick={() => navigate('/login')}
            >
              Sign In Here
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
};