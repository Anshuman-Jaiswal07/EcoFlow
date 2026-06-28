import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Notification system event header required'],
    trim: true
  },
  message: { 
    type: String, 
    required: [true, 'Alert structural breakdown descriptive summary text required'] 
  },
  time: { 
    type: String, 
    default: 'Just now' 
  },
  read: { 
    type: Boolean, 
    default: false,
    index: true // High-performance index filter to retrieve unread alert counts
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: [true, 'Alert matrix streams must assign back to a destination account owner node'],
    index: true
  }
}, { 
  timestamps: true 
});

export default mongoose.model('Notification', notificationSchema);