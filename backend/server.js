import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { initializeFirebase } from './config/firebase.js';
import { initBookingReminderCron } from './services/cronJobs.js';
import bookingRoutes from './routes/bookings.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Initialize Firebase Admin
initializeFirebase();

// Connect to MongoDB
connectDB();

// Initialize cron jobs
initBookingReminderCron();

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'GlamPro API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/bookings', bookingRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║   ✨ GlamPro API Server Running ✨   ║
║                                       ║
║   Port: ${PORT}                       ║
║   Environment: ${process.env.NODE_ENV || 'development'}              ║
║   MongoDB: Connected                  ║
║   Firebase: Initialized               ║
║   Cron Jobs: Active                   ║
║                                       ║
╚═══════════════════════════════════════╝
  `);
});

export default app;
