import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, Button } from '../components/UI';
import { Bell, MailOpen, Cpu, ShieldAlert, ShoppingBag } from 'lucide-react';

export const NotificationCenter = () => {
  const { notifications, setNotifications } = useApp();

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">Ecosystem Notification Feed</h1>
          <p className="text-sm text-slate-500 font-medium">System exceptions, vision analytics completions, and claim receipts logs pipeline.</p>
        </div>
        <Button variant="secondary" className="text-xs font-bold flex items-center gap-1 py-1.5 px-3" onClick={markAllRead}>
          <MailOpen className="w-3.5 h-3.5" /> Clear Array Read Flags
        </Button>
      </div>

      <Card className="divide-y divide-slate-100">
        {notifications.map(notif => {
          let Icon = Bell;
          let iconColor = 'text-slate-400 bg-slate-50 border-slate-200';
          if (notif.title.includes('AI')) { Icon = Cpu; iconColor = 'text-indigo-600 bg-indigo-50 border-indigo-100'; }
          if (notif.title.includes('Claimed')) { Icon = ShoppingBag; iconColor = 'text-emerald-600 bg-emerald-50 border-emerald-100'; }
          if (notif.title.includes('Compliance')) { Icon = ShieldAlert; iconColor = 'text-rose-600 bg-rose-50 border-rose-100'; }

          return (
            <div key={notif.id} className={`p-4 flex items-start gap-4 transition-colors ${notif.read ? 'bg-white/60' : 'bg-gradient-to-r from-slate-50 to-white'}`}>
              <div className={`p-2 rounded-lg border shadow-3xs shrink-0 ${iconColor}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <div className="flex justify-between items-start gap-4">
                  <h4 className={`text-sm tracking-tight leading-snug ${notif.read ? 'font-semibold text-slate-700' : 'font-bold text-slate-900'}`}>{notif.title}</h4>
                  <span className="text-[10px] font-semibold text-slate-400 whitespace-nowrap mt-0.5">{notif.time}</span>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{notif.message}</p>
              </div>
              {!notif.read && (
                <span className="w-2 h-2 bg-indigo-600 rounded-full shrink-0 mt-2"></span>
              )}
            </div>
          );
        })}
      </Card>
    </div>
  );
};