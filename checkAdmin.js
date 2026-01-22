const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

const checkAdmin = async () => {
  try {
    const admin = await Admin.findOne({ email: 'admin@academic.edu' });
    if (admin) {
      console.log('Admin found:', admin.email);
      console.log('Password hash exists:', !!admin.password);
    } else {
      console.log('Admin not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const runCheck = async () => {
  await connectDB();
  await checkAdmin();
  process.exit();
};

runCheck();