const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const testConnection = async () => {
  try {
    console.log('Testing MongoDB connection...');
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log('✅ Connection test successful!');
    process.exit(0);
  } catch (error) {
    console.error('❌ MongoDB connection failed:');
    console.error(error.message);
    console.log('\nPlease check:');
    console.log('1. Your MongoDB Atlas connection string is correct');
    console.log('2. Your IP address is whitelisted in Atlas');
    console.log('3. Your database user credentials are correct');
    process.exit(1);
  }
};

testConnection();