import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`💾 MongoDB Cluster Linked: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ DB Connection Exception: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;