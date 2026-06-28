import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Card, Input, Select, Button } from '../components/UI';
import { resourceService } from '../services/api';
import { Camera, Layers, CheckCircle2, RefreshCw } from 'lucide-react';

export const UploadResource = () => {
  const navigate = useNavigate();
  const { setResources, resources, showToast } = useApp();
  const [preview, setPreview] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [form, setForm] = useState({
    title: '', category: 'Solids', quantity: '', location: 'Sector 3 Core Hub', price: 'Free Assets / Resource Claim Match'
  });

  const triggerMockVision = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setForm({
        title: 'Processed Structural Plasterboard Waste',
        category: 'Solids',
        quantity: '2.8 Tons Estimated',
        location: 'Sector 3 Core Hub',
        price: 'Free Assets / Resource Claim Match'
      });
      setPreview('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=60');
      setAnalyzing(false);
      showToast('EcoFlow Computer Vision completed asset categorization analysis.');
    }, 1800);
  };

  const handlePublish = (e) => {
    e.preventDefault();
    if (!form.title) return;
    const newAsset = {
      id: `R-${Math.floor(100 + Math.random() * 900)}`,
      ...form,
      status: 'Available',
      owner: 'Nexus Infra Corp',
      image: preview || 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&auto=format&fit=crop&q=60'
    };
    setResources([newAsset, ...resources]);
    showToast('Asset published onto hyper-local matrix maps.');
    navigate('/marketplace');
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Publish Circular Waste Node Asset</h1>
        <p className="text-sm text-slate-500 font-medium">Use computer vision to parse solids, fluids, thermal footprints, or bioprocess parameters.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Computer Vision Processing Drag Box Dropzone */}
        <Card className="md:col-span-2 p-6 flex flex-col items-center justify-center text-center border-2 border-dashed border-slate-300 relative bg-slate-50 min-h-[260px]">
          {analyzing ? (
            <div className="flex flex-col items-center gap-3">
              <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
              <p className="text-sm font-semibold text-slate-700">AI Volume & Mass Matrix Mapping...</p>
            </div>
          ) : preview ? (
            <div className="w-full h-full flex flex-col items-center gap-4">
              <img src={preview} alt="AI Preview" className="w-full h-36 object-cover rounded-lg border border-slate-200" />
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> AI Scan Locked
              </div>
              <Button variant="secondary" className="py-1 px-3 text-xs" onClick={triggerMockVision}>Re-Scan Frame</Button>
            </div>
          ) : (
            <div className="flex flex-col items-center cursor-pointer" onClick={triggerMockVision}>
              <div className="p-4 bg-white rounded-full text-slate-400 border border-slate-200 shadow-xs mb-3 group hover:text-indigo-600 transition-colors">
                <Camera className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Upload Real Asset Frame</p>
              <p className="text-[11px] text-slate-400 font-medium px-2">Snap a photo to auto-detect categorization and compute weight payloads.</p>
            </div>
          )}
        </Card>

        {/* Technical Specification Matrix Data Entry */}
        <Card className="md:col-span-3 p-6 bg-white">
          <form onSubmit={handlePublish} className="flex flex-col gap-4">
            <Input label="Detected Waste Asset Title Descriptor" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required placeholder="Waiting for Computer Vision scan input..." />
            <div className="grid grid-cols-2 gap-4">
              <Select 
                label="Resource Loop System" 
                value={form.category} 
                onChange={e => setForm({...form, category: e.target.value})}
                options={[
                  { value: 'Solids', label: 'Solids (Industrial/Drywall/Pallets)' },
                  { value: 'Liquids', label: 'Liquids (AC Condensate/Greywater)' },
                  { value: 'Energy', label: 'Energy (Industrial Thermal Overflow)' },
                  { value: 'Organics', label: 'Organics (Biomass/Nitrogen Waste)' }
                ]} 
              />
              <Input label="Calculated Payload Volume / Weight" value={form.quantity} onChange={e => setForm({...form, quantity: e.target.value})} required placeholder="e.g., 4.5 Tons" />
            </div>
            <Input label="Spatial Node Location Map Coordinates" value={form.location} onChange={e => setForm({...form, location: e.target.value})} required />
            <Input label="Financial Allocation Strategy" value={form.price} onChange={e => setForm({...form, price: e.target.value})} required />
            <Button type="submit" variant="primary" className="w-full mt-2 py-2.5">Inject Asset Register To Hyper-Local Grid</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};