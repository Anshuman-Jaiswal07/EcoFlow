import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Administrative authority authority contact name is required'],
    trim: true
  },
  company: { 
    type: String, 
    required: [true, 'Registered entity or corporate name is required'], 
    unique: true,
    trim: true,
    index: true // High-performance lookup for company validation checks
  },
  email: { 
    type: String, 
    required: [true, 'Corporate email node address is required'], 
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid enterprise email layout']
  },
  password: { 
    type: String, 
    required: [true, 'Security authentication matrix key is required'], 
    minlength: [8, 'Security key must be at least 8 characters long'],
    select: false // Excludes password fields by default from standard query returns
  },
  type: { 
    type: String, 
    required: [true, 'Primary loop system classification sector is required'], 
    enum: {
      values: ['Industrial/Builder', 'Municipality', 'CommercialEntity', 'CompostingBio'],
      message: '{VALUE} is not a valid ecosystem sector classification'
    }
  },
  role: { 
    type: String, 
    default: 'Enterprise Partner', 
    enum: ['Enterprise Partner', 'Gov Administrator'] 
  },
  location: { 
    type: String, 
    required: [true, 'Spatial city/base registration vector location is required'],
    default: 'Kurukshetra, HR' 
  },
  verified: { 
    type: Boolean, 
    default: true 
  }
}, { 
  timestamps: true // Automatically maintains createdAt and updatedAt timestamps
});

// Middleware hook: Encrypt security keys before committing document array to MongoDB
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Helper Method: Match raw request keys against encrypted database hashes
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export default mongoose.model('User', userSchema);