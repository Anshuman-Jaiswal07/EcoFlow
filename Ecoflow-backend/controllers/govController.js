import User from '../models/User.js';

export const getGovPanelMetrics = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      esgCreditsAccrued: "₹45,000 Saved",
      complianceMatrixCheck: [
        { text: 'Solid Scrap Payloads Match Local Geometric Ordinance 402-B', state: true },
        { text: 'Non-potable AC Fluid Conduit Water Safety Cleared for Industrial Blends', state: true },
        { text: 'Thermal Overflows Energy-Share Infrastructure Loop Inspected', state: false }
      ]
    });
  } catch (error) { next(error); }
};