import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  resource: { 
    type: String, 
    required: [true, 'Snapshot copy of the resource name used for logging histories'] 
  },
  resourceId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Resource', 
    required: [true, 'Persistent foreign object identifier to the primary resource element'] 
  },
  partner: { 
    type: String, 
    required: [true, 'Snapshot string tracking identity of counterparty node target'] 
  },
  buyerNode: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'Entity initiating resource rescue lock sequence'],
    index: true
  },
  sellerNode: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'Entity discharging waste array pipeline into system grid'],
    index: true
  },
  type: { 
    type: String, 
    required: true, 
    enum: ['Inbound Claim', 'Outbound Supply'] 
  },
  status: { 
    type: String, 
    default: 'Dispatched', 
    enum: ['Dispatched', 'Completed', 'Cancelled'],
    index: true
  },
  date: { 
    type: String, 
    required: [true, 'Formatted historical date coordinate string (YYYY-MM-DD)'] 
  },
  impact: { 
    type: String, 
    required: [true, 'Final confirmed weight volume diverted data value tracking ledger'] 
  }
}, { 
  timestamps: true 
});

export default mongoose.model('Transaction', transactionSchema);