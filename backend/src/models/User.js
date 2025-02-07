const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    height: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    
    gender: {  // Added gender field
      type: String,
      required: true,
      enum: ['Male', 'Female', 'Other']  // Restrict to predefined values
    },
    nationality: {
      type: String,
      required: true
    },
    diseaseHistory: [{
      condition: String,
      diagnosedDate: Date,
      medications: [String],
      notes: String
    }]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);