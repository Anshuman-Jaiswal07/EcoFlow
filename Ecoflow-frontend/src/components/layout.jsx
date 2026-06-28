import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Toast } from './Toast';
import { 
  Layers, LayoutDashboard, UploadCloud, ShoppingBag, Cpu, 
  Map, ArrowLeftRight, BarChart3, ShieldCheck, User, Bell, Menu, X, LogOut
} from 'lucide-react';

export const Layout = ({ children }) => {
  const { toast, showToast, notifications } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isAuthOrLanding = ['/', '/login', '/register'].includes(location.pathname);
  const unreadCount = notifications.filter(n => !n.read).length;

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Upload Resource', icon: UploadCloud, path: '/upload' },
    { name: 'Marketplace', icon: ShoppingBag, path: '/marketplace' },
    { name: 'AI Recommendations', icon: Cpu, path: '/ai-center' },
    { name: 'Interactive Map', icon: Map, path: '/map' },
    { name: 'Transactions', icon: ArrowLeftRight, path: '/transactions' },
    { name: 'Analytics Terminal', icon: BarChart3, path: '/analytics' },
    { name: 'Gov Regulatory Panel', icon: ShieldCheck, path: '/government' },
    { name: 'Company Profile', icon: User, path: '/profile' },
  ];

  if (isAuthOrLanding) {
    return (
      <div className="min-h-screen bg-slate-50">
        {children}
        {toast && <Toast message={toast.message} type={toast.type} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-800">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-slate-900 text-slate-300 border-r border-slate-800 fixed h-full z-30">
        <div className="p-6 border-b border-slate-800 flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="p-2 bg-indigo-600 rounded-lg text-white">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-tight">EcoFlow AI</h1>
            <p className="text-xs text-slate-400 font-medium">EcoNexus Platform</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 ${active ? 'bg-indigo-600 text-white shadow-md' : 'hover:bg-slate-800 hover:text-white'}`}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={() => navigate('/login')} className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-rose-400 transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out Session
          </button>
        </div>
      </aside>

      {/* Main Framework View Wrapper */}
      <div className="flex-1 lg:pl-64 flex flex-col min-h-screen">
        {/* Header bar */}
        <header className="h-16 bg-white border-b border-slate-200 sticky top-0 flex items-center justify-between px-6 z-20">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider hidden sm:block">
              {menuItems.find(item => item.path === location.pathname)?.name || 'Platform Panel'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/notifications')} className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative transition-colors">
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"></span>
              )}
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/profile')}>
              <div className="w-9 h-9 bg-indigo-100 text-indigo-700 font-bold rounded-lg flex items-center justify-center border border-indigo-200 text-sm">
                AJ
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold text-slate-800">Anshuman Jaiswal</p>
                <p className="text-xs text-slate-500 font-medium">Nexus Infra Corp</p>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar Modal overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 lg:hidden">
            <div className="w-64 bg-slate-900 h-full p-4 flex flex-col text-slate-300">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <span className="text-white font-bold text-md">EcoFlow Navigation</span>
                <button onClick={() => setMobileOpen(false)} className="p-1 rounded bg-slate-800 text-slate-400">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = location.pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      onClick={() => { navigate(item.path); setMobileOpen(false); }}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium ${active ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        )}

        <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => {}} />}
    </div>
  );
};