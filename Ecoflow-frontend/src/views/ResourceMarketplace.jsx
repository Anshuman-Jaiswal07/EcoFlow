import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Card, Button, Badge } from '../components/UI';
import { Layers, MapPin, SlidersHorizontal } from 'lucide-react';

export const ResourceMarketplace = () => {
  const { resources, setTransactions, transactions, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('All');

  const loops = ['All', 'Solids', 'Liquids', 'Energy', 'Organics'];

  const filtered = activeTab === 'All' ? resources : resources.filter(r => r.category === activeTab);

  // Bulletproof image picker: Forces fallback if the link is broken or local
  const getFallbackImage = (category, existingImg) => {
    // If it's a real web link, use it. If it's a broken local path, ignore it.
    if (existingImg && existingImg.startsWith('http')) {
      return existingImg;
    }
    
    // Normalize category string to lowercase to prevent matching typos
    const normalizedCategory = category ? category.toLowerCase() : '';
    
    const fallbackMap = {
      solids: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
      liquids: 'https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&w=600&q=80',
      energy: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80',
      organics: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80'
    };

    return fallbackMap[normalizedCategory] || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80';
  };

  const claimAsset = (asset) => {
    if (asset.status === 'Claimed') return;
    const trackingId = `TXN-${Math.floor(1000 + Math.random() * 9000)}`;
    setTransactions([{
      id: trackingId, resource: asset.title, partner: asset.owner, type: 'Inbound Claim', status: 'Dispatched', date: new Date().toISOString().split('T')[0], impact: asset.quantity
    }, ...transactions]);
    asset.status = 'Claimed';
    showToast(`Allocation lock initiated for: ${asset.title}. Route payload generated.`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">Ecosystem Resource Exchange Grid</h1>
          <p className="text-sm text-slate-500 font-medium">Claim local secondary assets before routing arrays designate standard transport to landfills.</p>
        </div>
        <div className="flex items-center gap-2 border border-slate-200 rounded-lg p-1.5 bg-white shadow-xs">
          <SlidersHorizontal className="w-4 h-4 text-slate-500 ml-1" />
          <span className="text-xs font-semibold text-slate-600 mr-2 uppercase tracking-wider">Loops:</span>
          <div className="flex gap-1">
            {loops.map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${activeTab === tab ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(asset => (
          <Card key={asset.id} className="flex flex-col justify-between group hover:border-slate-300 transition-all duration-200 bg-white">
            <div>
              <div className="relative overflow-hidden rounded-t-xl bg-slate-100">
                <img 
                  src={getFallbackImage(asset.category, asset.image)} 
                  alt={asset.title} 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Force the fallback layout image instantly if any network link completely crashes
                    e.target.src = getFallbackImage(asset.category, null);
                  }}
                />
                <div className="absolute top-3 right-3">
                  <Badge type={asset.category} />
                </div>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 h-10">{asset.title}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="line-clamp-1">{asset.location}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold border-t border-slate-100 pt-3 mt-2">
                  <span className="text-slate-500 uppercase tracking-wider">Payload Mass:</span>
                  <span className="text-slate-900 font-bold">{asset.quantity}</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-slate-500 uppercase tracking-wider">Pricing Logic:</span>
                  <span className="text-indigo-600 font-bold">{asset.price}</span>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <Button 
                variant={asset.status === 'Claimed' ? 'secondary' : 'primary'} 
                className="w-full text-xs font-bold uppercase tracking-wider py-2 shadow-xs"
                disabled={asset.status === 'Claimed'}
                onClick={() => claimAsset(asset)}
              >
                {asset.status === 'Claimed' ? 'Asset Secured / Claimed' : 'Secure Allocation'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};