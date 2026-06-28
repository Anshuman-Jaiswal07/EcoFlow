import React from 'react';
import { useApp } from '../context/AppContext';
import { Card } from '../components/UI';
import { ArrowLeftRight, ArrowDownLeft, ArrowUpRight, CheckCircle } from 'lucide-react';

export const Transactions = () => {
  const { transactions } = useApp();

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Ecosystem Allocation & Chain Logs</h1>
        <p className="text-sm text-slate-500 font-medium">Auditable infrastructure chain logs record structural and organic asset loop state transactions.</p>
      </div>

      <Card className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <th className="p-4 pl-6">Allocation Code</th>
              <th className="p-4">Resource Node Target</th>
              <th className="p-4">Ecosystem Hub Link</th>
              <th className="p-4">Loop Channel Vector</th>
              <th className="p-4">Transaction Date</th>
              <th className="p-4">Diverted Mass Payload</th>
              <th className="p-4 pr-6 text-right">Status Lock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
            {transactions.map(txn => (
              <tr key={txn.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="p-4 pl-6 font-mono text-xs font-bold text-slate-500">{txn.id}</td>
                <td className="p-4 font-bold text-slate-900">{txn.resource}</td>
                <td className="p-4 text-slate-600">{txn.partner}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded ${txn.type.includes('Inbound') ? 'bg-violet-50 text-violet-700 border border-violet-100' : 'bg-cyan-50 text-cyan-700 border border-cyan-100'}`}>
                    {txn.type.includes('Inbound') ? <ArrowDownLeft className="w-3 h-3" /> : <ArrowUpRight className="w-3 h-3" />}
                    {txn.type}
                  </span>
                </td>
                <td className="p-4 text-slate-500 font-semibold">{txn.date}</td>
                <td className="p-4 text-emerald-600 font-bold">{txn.impact}</td>
                <td className="p-4 pr-6 text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle className="w-3.5 h-3.5" /> {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};