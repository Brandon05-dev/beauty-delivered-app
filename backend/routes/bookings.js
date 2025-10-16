import express from 'express';
import { body, validationResult } from 'express-validator';
import Booking from '../models/Booking.js';
import { verifyFirebaseToken, verifyAdmin } from '../config/firebase.js';

const router = express.Router();

// Validation rules for booking creation
const bookingValidation = [
  body('clientName').trim().notEmpty().withMessage('Client name is required'),
  body('clientPhone').trim().notEmpty().withMessage('Phone number is required'),
  body('clientEmail').optional().isEmail().withMessage('Invalid email format'),
  body('serviceType').isIn(['Everyday Makeup', 'Nail Services', 'Bridal Glam', 'Special Occasion'])
    .withMessage('Invalid service type'),
  body('appointmentDate').isISO8601().withMessage('Invalid date format'),
  body('appointmentTime').notEmpty().withMessage('Appointment time is required'),
  body('location').trim().notEmpty().withMessage('Location is required'),
];

// @route   POST /api/bookings
// @desc    Create a new booking (PUBLIC - no auth required)
// @access  Public
router.post('/', bookingValidation, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const {
      clientName,
      clientPhone,
      clientEmail,
      serviceType,
      appointmentDate,
      appointmentTime,
      location,
      notes,
      discountCode
    } = req.body;

    // Create new booking
    const booking = new Booking({
      clientName,
      clientPhone,
      clientEmail,
      serviceType,
      appointmentDate,
      appointmentTime,
      location,
      notes,
      discountCode,
      status: 'Pending'
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking
    });
  } catch (error) {
    console.error('Create booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating booking',
      error: error.message
    });
  }
});

// @route   GET /api/bookings
// @desc    Get all bookings (ADMIN ONLY)
// @access  Private (Admin)
router.get('/', verifyFirebaseToken, verifyAdmin, async (req, res) => {
  try {
    const { status, serviceType, startDate, endDate, sortBy = '-appointmentDate' } = req.query;

    // Build query
    let query = {};

    if (status) {
      query.status = status;
    }

    if (serviceType) {
      query.serviceType = serviceType;
    }

    if (startDate || endDate) {
      query.appointmentDate = {};
      if (startDate) {
        query.appointmentDate.$gte = new Date(startDate);
      }
      if (endDate) {
        query.appointmentDate.$lte = new Date(endDate);
      }
    }

    // Execute query with sorting
    const bookings = await Booking.find(query).sort(sortBy);

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching bookings',
      error: error.message
    });
  }
});

// @route   GET /api/bookings/:id
// @desc    Get single booking by ID (ADMIN ONLY)
// @access  Private (Admin)
router.get('/:id', verifyFirebaseToken, verifyAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching booking',
      error: error.message
    });
  }
});

// @route   PUT /api/bookings/:id
// @desc    Update booking (ADMIN ONLY)
// @access  Private (Admin)
router.put('/:id', verifyFirebaseToken, verifyAdmin, async (req, res) => {
  try {
    const { status, notes } = req.body;

    const updateData = { updatedAt: Date.now() };

    if (status) {
      if (!['Pending', 'Confirmed', 'Completed', 'Cancelled'].includes(status)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status value'
        });
      }
      updateData.status = status;
    }

    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      data: booking
    });
  } catch (error) {
    console.error('Update booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating booking',
      error: error.message
    });
  }
});

// @route   DELETE /api/bookings/:id
// @desc    Delete booking (ADMIN ONLY)
// @access  Private (Admin)
router.delete('/:id', verifyFirebaseToken, verifyAdmin, async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully',
      data: booking
    });
  } catch (error) {
    console.error('Delete booking error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting booking',
      error: error.message
    });
  }
});

// @route   GET /api/bookings/stats/overview
// @desc    Get booking statistics (ADMIN ONLY)
// @access  Private (Admin)
router.get('/stats/overview', verifyFirebaseToken, verifyAdmin, async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments();
    const pendingBookings = await Booking.countDocuments({ status: 'Pending' });
    const confirmedBookings = await Booking.countDocuments({ status: 'Confirmed' });
    const completedBookings = await Booking.countDocuments({ status: 'Completed' });
    const cancelledBookings = await Booking.countDocuments({ status: 'Cancelled' });

    res.status(200).json({
      success: true,
      data: {
        total: totalBookings,
        pending: pendingBookings,
        confirmed: confirmedBookings,
        completed: completedBookings,
        cancelled: cancelledBookings
      }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching statistics',
      error: error.message
    });
  }
});

export default router;
