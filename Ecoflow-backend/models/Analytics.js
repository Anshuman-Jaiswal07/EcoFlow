import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  metricPeriod: { 
    type: String, 
    required: true, 
    default: 'Current Cycle Cumulative Logs' 
  },
  totalDivertedVolume: { 
    type: String, 
    required: true, 
    default: '0.0 Tons' 
  },
  netInfrastructureROI: { 
    type: String, 
    required: true, 
    default: '₹0' 
  },
  activeLoopsLogged: { 
    type: Number, 
    default: 0 
  },
  loopProportions: [{
    label: { type: String, required: true }, // e.g., 'Solids', 'Liquids'
    pct: { type: String, required: true }    // e.g., '45%'
  }],
  targetNode: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    unique: true, // Guarantees a single structured telemetry summary dashboard state per organization profile
    index: true
  }
}, { 
  timestamps: true 
});

export default mongoose.model('Analytics', analyticsSchema);