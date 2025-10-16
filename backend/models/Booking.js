import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  clientPhone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  clientEmail: {
    type: String,
    trim: true,
    lowercase: true
  },
  serviceType: {
    type: String,
    required: [true, 'Service type is required'],
    enum: ['Everyday Makeup', 'Nail Services', 'Bridal Glam', 'Special Occasion']
  },
  appointmentDate: {
    type: Date,
    required: [true, 'Appointment date is required']
  },
  appointmentTime: {
    type: String,
    required: [true, 'Appointment time is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  notes: {
    type: String,
    trim: true
  },
  discountCode: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  reminderSent: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for efficient queries
bookingSchema.index({ appointmentDate: 1, status: 1 });
bookingSchema.index({ clientPhone: 1 });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
