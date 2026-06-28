import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Asset title descriptor is required'],
    trim: true
  },
  category: { 
    type: String, 
    required: [true, 'Resource loop system classification is required'], 
    enum: ['Solids', 'Liquids', 'Energy', 'Organics'],
    index: true // Indexed for rapid marketplace marketplace sorting
  },
  quantity: { 
    type: String, 
    required: [true, 'Calculated payload mass volume or weight is required'] 
  },
  location: { 
    type: String, 
    required: [true, 'Physical location or spatial address description is required'] 
  },
  price: { 
    type: String, 
    default: 'Free Asset / Resource Claim Match' 
  },
  status: { 
    type: String, 
    default: 'Available', 
    enum: ['Available', 'Claimed', 'Archived'],
    index: true
  },
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'Every resource must be linked back to an originating corporate node'],
    index: true
  },
  ownerName: { 
    type: String, 
    required: [true, 'Cached owner string representation required for high performance lists'] 
  },
  image: { 
    type: String, 
    required: [true, 'Cloudinary hosted asset visual frame record link required'] 
  },
  coordinates: {
    lat: { type: Number, required: true, default: 29.9695 },
    lng: { type: Number, required: true, default: 76.8783 }
  }
}, { 
  timestamps: true 
});

// Compound Index: Optimizes local area search indexing coordinates inside map frames
resourceSchema.index({ 'coordinates.lat': 1, 'coordinates.lng': 1 });

export default mongoose.model('Resource', resourceSchema);