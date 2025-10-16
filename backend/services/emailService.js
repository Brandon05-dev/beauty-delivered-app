import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Send booking confirmation email
export const sendConfirmationEmail = async (booking) => {
  try {
    if (!booking.clientEmail) {
      console.log('No email provided for booking:', booking._id);
      return;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `GlamPro Beauty <${process.env.EMAIL_USER}>`,
      to: booking.clientEmail,
      subject: '✨ Your GlamPro Booking Confirmation',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; background-color: #FFF9F7; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(43, 43, 43, 0.08); }
            .header { background: linear-gradient(135deg, #FADADD 0%, #E6B2A6 100%); padding: 40px 20px; text-align: center; }
            .header h1 { color: #2B2B2B; font-family: 'Playfair Display', serif; margin: 0; font-size: 32px; }
            .content { padding: 40px 30px; }
            .booking-details { background: #FFF9F7; border-left: 4px solid #E6B2A6; padding: 20px; margin: 20px 0; border-radius: 8px; }
            .detail-row { margin: 10px 0; color: #2B2B2B; }
            .label { font-weight: 600; color: #E6B2A6; }
            .footer { background: #2B2B2B; color: white; text-align: center; padding: 20px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Booking Confirmed!</h1>
            </div>
            <div class="content">
              <p>Dear <strong>${booking.clientName}</strong>,</p>
              <p>Your GlamPro beauty appointment has been confirmed! We're excited to help you look and feel your best.</p>
              
              <div class="booking-details">
                <h3 style="color: #2B2B2B; margin-top: 0;">Appointment Details</h3>
                <div class="detail-row">
                  <span class="label">Service:</span> ${booking.serviceType}
                </div>
                <div class="detail-row">
                  <span class="label">Date:</span> ${new Date(booking.appointmentDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div class="detail-row">
                  <span class="label">Time:</span> ${booking.appointmentTime}
                </div>
                <div class="detail-row">
                  <span class="label">Location:</span> ${booking.location}
                </div>
                <div class="detail-row">
                  <span class="label">Status:</span> <span style="color: #E6B2A6; font-weight: 600;">${booking.status}</span>
                </div>
              </div>
              
              <p style="color: #2B2B2B; opacity: 0.7;">You'll receive a reminder 12 hours before your appointment.</p>
              <p style="color: #2B2B2B; opacity: 0.7;">If you need to reschedule or have any questions, please contact us.</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} GlamPro Beauty. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Confirmation email sent to ${booking.clientEmail}`);
  } catch (error) {
    console.error('Error sending confirmation email:', error.message);
  }
};

// Send booking reminder email (12 hours before)
export const sendReminderEmail = async (booking) => {
  try {
    if (!booking.clientEmail) {
      console.log('No email provided for booking:', booking._id);
      return;
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: `GlamPro Beauty <${process.env.EMAIL_USER}>`,
      to: booking.clientEmail,
      subject: '⏰ Reminder: Your GlamPro Appointment Tomorrow',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Poppins', Arial, sans-serif; background-color: #FFF9F7; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(43, 43, 43, 0.08); }
            .header { background: linear-gradient(135deg, #F6E2B3 0%, #FADADD 100%); padding: 40px 20px; text-align: center; }
            .header h1 { color: #2B2B2B; font-family: 'Playfair Display', serif; margin: 0; font-size: 32px; }
            .content { padding: 40px 30px; }
            .reminder-box { background: linear-gradient(135deg, #FADADD20, #F6E2B320); border: 2px solid #E6B2A6; padding: 20px; margin: 20px 0; border-radius: 12px; text-align: center; }
            .reminder-box h2 { color: #E6B2A6; margin: 0 0 10px 0; font-size: 24px; }
            .detail-row { margin: 10px 0; color: #2B2B2B; font-size: 16px; }
            .footer { background: #2B2B2B; color: white; text-align: center; padding: 20px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>⏰ Appointment Reminder</h1>
            </div>
            <div class="content">
              <p>Hi <strong>${booking.clientName}</strong>,</p>
              <p>This is a friendly reminder about your upcoming GlamPro appointment!</p>
              
              <div class="reminder-box">
                <h2>Your Appointment is Tomorrow!</h2>
                <div class="detail-row">
                  <strong>${booking.serviceType}</strong>
                </div>
                <div class="detail-row">
                  📅 ${new Date(booking.appointmentDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
                <div class="detail-row">
                  🕐 ${booking.appointmentTime}
                </div>
                <div class="detail-row">
                  📍 ${booking.location}
                </div>
              </div>
              
              <p style="color: #2B2B2B; opacity: 0.7;">We're looking forward to seeing you!</p>
              <p style="color: #2B2B2B; opacity: 0.7;">Please arrive on time to ensure you get the full experience.</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} GlamPro Beauty. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Reminder email sent to ${booking.clientEmail}`);
  } catch (error) {
    console.error('Error sending reminder email:', error.message);
  }
};

export default { sendConfirmationEmail, sendReminderEmail };
