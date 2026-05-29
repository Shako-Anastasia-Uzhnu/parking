import mongoose from 'mongoose'

const spotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Номер місця обов’язковий'],
    unique: true,
    trim: true,
    maxlength: [10, 'Номер місця не може бути довшим за 10 символів'],
  },
  description: {
    type: String,
    default: '',
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Ціна за годину обов’язкова'],
    min: [1, 'Ціна не може бути від’ємною'],
  },
  category: {
    type: String,
    required: [true, 'Зона обов’язкова'],
    enum: {
      values: ['A', 'B', 'C', 'VIP'],
      message: 'Зона має бути: A, B, C або VIP',
    },
  },
  type: {
    type: String,
    enum: {
      values: ['standard', 'disabled', 'electric', 'motorcycle'],
      message: 'Тип має бути: standard, disabled, electric або motorcycle',
    },
    default: 'standard',
  },
  available: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true, 
})

export default mongoose.models.Spot || mongoose.model('Spot', spotSchema)