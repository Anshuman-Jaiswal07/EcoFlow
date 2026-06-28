import React from 'react';
import { useApp } from '../context/AppContext';
import { Card, Input, Button } from '../components/UI';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export const CompanyProfile = () => {
  const { user } = useApp();

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Infrastructure Node Configurations</h1>
        <p className="text-sm text-slate-500 font-medium">Manage corporate identities, cryptographic secure grid keys, and industrial loop sector bindings.</p>
      </div>

      <Card className="p-6 bg-white flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50 border border-slate-200 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-600 text-white font-black text-lg rounded-xl flex items-center justify-center shadow-md">AJ</div>
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">{user.company}</h3>
              <p className="text-xs text-slate-500 font-semibold">{user.type} Nodes Linked Matrix</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Identity Node Authenticated
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Operational Administrative Authority Name" value={user.name} disabled readOnly />
          <Input label="Spatial Node Hub Vector Coordinate Base" value={user.location} disabled readOnly />
          <Input label="Corporate Entity Core Structure Classification" value={user.type} disabled readOnly />
          <Input label="Platform Clearance State Level" value={user.role} disabled readOnly />
        </div>

        <div className="border-t border-slate-200 pt-4 flex justify-between items-center mt-2">
          <p className="text-xs text-slate-400 font-medium flex items-center gap-1"><ShieldAlert className="w-4 h-4 text-slate-400" /> System configurations require structural secondary signature authentication keys to manipulate layout variables.</p>
          <Button variant="secondary" className="text-xs font-bold whitespace-nowrap">Edit Hub Details</Button>
        </div>
      </Card>
    </div>
  );
};