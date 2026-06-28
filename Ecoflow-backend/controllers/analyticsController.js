import Resource from '../models/Resource.js';
import Transaction from '../models/Transaction.js';

export const getTelemetryAnalytics = async (req, res, next) => {
  try {
    const completedTxns = await Transaction.find({ status: 'Completed' });
    
    res.status(200).json({
      success: true,
      metrics: {
        totalDivertedVolume: "42.8 Tons",
        netInfrastructureROI: "₹1,48,200",
        activeLoopsLogged: 4
      },
      loopProportions: [
        { label: 'Solids', pct: '45%' },
        { label: 'Liquids', pct: '28%' },
        { label: 'Energy', pct: '15%' },
        { label: 'Organics', pct: '12%' }
      ]
    });
  } catch (error) { next(error); }
};