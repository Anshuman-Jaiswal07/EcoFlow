import mongoose from 'mongoose';

const recommendationSchema = new mongoose.Schema({
  type: { 
    type: String, 
    default: 'Instant Match',
    enum: ['Instant Match', 'Infrastructure Symbiosis']
  },
  primaryText: { 
    type: String, 
    required: [true, 'Actionable optimization summary instructions required'] 
  },
  impact: { 
    type: String, 
    required: [true, 'Calculated environmental ROI metrics string statement required'] 
  },
  status: { 
    type: String, 
    default: 'Active', 
    enum: ['Active', 'Executed / Infrastructure Locked', 'Ignored'] 
  },
  targetUser: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'Target system destination node user target required'],
    index: true
  },
  linkedResource: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Resource' // Binds recommendation back to the original scanning resource source
  }
}, { 
  timestamps: true 
});

export default mongoose.model('Recommendation', recommendationSchema);