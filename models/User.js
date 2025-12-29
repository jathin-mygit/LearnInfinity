const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  },
  credits: {
    type: Number,
    default: 24,
    min: [0, 'Credits cannot be negative']
  },
  skillsOffered: [{
    skill: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true
    },
    description: String
  }],
  skillsLearning: [{
    skill: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    }
  }],
  sessionsCompleted: {
    type: Number,
    default: 0
  },
  totalHoursTaught: {
    type: Number,
    default: 0
  },
  totalHoursLearned: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 5.0,
    min: 1,
    max: 5
  },
  isActive: {
    type: Boolean,
    default: true
  },
  joinedDate: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function() {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return;
  
  try {
    // Hash password with cost of 12
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
  } catch (error) {
    throw error;
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Update last login
userSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save();
};

// Add credits (when teaching)
userSchema.methods.addCredits = function(amount) {
  this.credits += amount;
  return this.save();
};

// Deduct credits (when learning)
userSchema.methods.deductCredits = function(amount) {
  if (this.credits >= amount) {
    this.credits -= amount;
    return this.save();
  } else {
    throw new Error('Insufficient credits');
  }
};

// Get user stats
userSchema.methods.getStats = function() {
  return {
    credits: this.credits,
    sessionsCompleted: this.sessionsCompleted,
    totalHoursTaught: this.totalHoursTaught,
    totalHoursLearned: this.totalHoursLearned,
    rating: this.rating,
    skillsOffered: this.skillsOffered.length,
    skillsLearning: this.skillsLearning.length
  };
};

module.exports = mongoose.model('User', userSchema);