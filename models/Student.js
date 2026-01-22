const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  studentId: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    trim: true
  },
  year: {
    type: Number,
    required: [true, 'Year/Level is required'],
    min: 1,
    max: 4
  },
  enrollmentStatus: {
    type: String,
    required: [true, 'Enrollment status is required'],
    enum: ['Active', 'Inactive', 'Graduated', 'Suspended'],
    default: 'Active'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);