import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ім'я користувача є обов'язковим"],
    trim: true,
    maxlength: [50, "Ім'я не може бути довшим за 50 символів"],
  },
  email: {
    type: String,
    required: [true, 'Email адреса є обов\'язковою'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Будь ласка, вкажіть валідний формат email'],
  },
  password: {
    type: String,
    required: [true, 'Пароль є обов\'язковим'],
    minlength: [6, 'Пароль має містити щонайменше 6 символів'],
    select: false, 
  },
  role: {
    type: String,
    enum: {
      values: ['user', 'admin'],
      message: 'Роль має бути: user або admin',
    },
    default: 'user',
  },
}, {
  timestamps: true, 
})

export default mongoose.models.User || mongoose.model('User', userSchema)