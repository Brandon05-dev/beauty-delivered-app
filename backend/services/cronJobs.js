import cron from 'node-cron';
import Booking from '../models/Booking.js';
import { sendReminderEmail } from '../services/emailService.js';

// Run every hour to check for bookings that need reminders
export const initBookingReminderCron = () => {
  // Run every hour: '0 * * * *'
  // For testing, you can use '*/5 * * * *' (every 5 minutes)
  cron.schedule('0 * * * *', async () => {
    try {
      console.log('🔔 Running booking reminder check...');

      // Get current time and 12 hours from now
      const now = new Date();
      const twelveHoursFromNow = new Date(now.getTime() + 12 * 60 * 60 * 1000);
      const thirteenHoursFromNow = new Date(now.getTime() + 13 * 60 * 60 * 1000);

      // Find bookings that are:
      // 1. Between 12-13 hours from now
      // 2. Status is Confirmed or Pending
      // 3. Reminder not yet sent
      const bookingsNeedingReminder = await Booking.find({
        appointmentDate: {
          $gte: twelveHoursFromNow,
          $lt: thirteenHoursFromNow,
        },
        status: { $in: ['Confirmed', 'Pending'] },
        reminderSent: false,
        clientEmail: { $exists: true, $ne: null, $ne: '' },
      });

      console.log(`Found ${bookingsNeedingReminder.length} bookings needing reminders`);

      // Send reminders
      for (const booking of bookingsNeedingReminder) {
        try {
          await sendReminderEmail(booking);
          
          // Mark reminder as sent
          booking.reminderSent = true;
          await booking.save();
          
          console.log(`✅ Reminder sent for booking ${booking._id}`);
        } catch (error) {
          console.error(`❌ Failed to send reminder for booking ${booking._id}:`, error.message);
        }
      }

      if (bookingsNeedingReminder.length === 0) {
        console.log('No reminders to send at this time.');
      }
    } catch (error) {
      console.error('❌ Error in reminder cron job:', error.message);
    }
  });

  console.log('✅ Booking reminder cron job initialized (runs every hour)');
};

export default initBookingReminderCron;
