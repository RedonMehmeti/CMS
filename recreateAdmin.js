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

const recreateAdmin = async () => {
  try {
    // Delete existing admin
    await Admin.deleteMany({ email: 'admin@academic.edu' });
    console.log('Deleted existing admin');

    // Create new admin
    const admin = await Admin.create({
      email: 'admin@academic.edu',
      password: 'Admin123!',
    });

    console.log('New admin created successfully');
    console.log('Email: admin@academic.edu');
    console.log('Password: Admin123!');
  } catch (error) {
    console.error('Error:', error);
  }
};

const runRecreate = async () => {
  await connectDB();
  await recreateAdmin();
  process.exit();
};

runRecreate();