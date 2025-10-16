# GlamPro Setup Checklist

Use this checklist to ensure you've completed all setup steps correctly.

## ✅ Backend Setup

### 1. Install Dependencies
- [ ] Navigate to `server/` directory
- [ ] Run `npm install`
- [ ] Verify no errors in installation

### 2. Environment Configuration
- [ ] Copy `server/.env.example` to `server/.env`
- [ ] Set `MONGODB_URI` (local or Atlas)
- [ ] Set `PORT` (default: 5000)
- [ ] Set `FIREBASE_PROJECT_ID`
- [ ] Set `FIREBASE_PRIVATE_KEY`
- [ ] Set `FIREBASE_CLIENT_EMAIL`
- [ ] Set `EMAIL_SERVICE` (gmail recommended)
- [ ] Set `EMAIL_USER`
- [ ] Set `EMAIL_PASSWORD` (app-specific password)
- [ ] Set `CLIENT_URL` (default: http://localhost:8080)

### 3. MongoDB Setup
- [ ] Install MongoDB OR create MongoDB Atlas account
- [ ] Start MongoDB service (if local)
- [ ] Test connection string
- [ ] Verify database can be accessed

### 4. Start Backend Server
- [ ] Run `npm run dev` from `server/` directory
- [ ] Verify server starts on port 5000
- [ ] Check console for "Connected to MongoDB" message
- [ ] Check console for "Cron job started" message
- [ ] Test health endpoint: http://localhost:5000/api/health

## ✅ Frontend Setup

### 1. Install Dependencies
- [ ] Navigate to project root
- [ ] Run `npm install`
- [ ] Verify firebase, axios, and framer-motion are installed

### 2. Environment Configuration
- [ ] Copy `.env.example` to `.env`
- [ ] Set `VITE_FIREBASE_API_KEY`
- [ ] Set `VITE_FIREBASE_AUTH_DOMAIN`
- [ ] Set `VITE_FIREBASE_PROJECT_ID`
- [ ] Set `VITE_FIREBASE_STORAGE_BUCKET`
- [ ] Set `VITE_FIREBASE_MESSAGING_SENDER_ID`
- [ ] Set `VITE_FIREBASE_APP_ID`
- [ ] Set `VITE_API_URL` (default: http://localhost:5000/api)

### 3. Start Frontend
- [ ] Run `npm run dev` from project root
- [ ] Verify app starts on port 8080
- [ ] Open http://localhost:8080 in browser
- [ ] Verify homepage loads with Glamongo theme

## ✅ Firebase Setup

### 1. Create Firebase Project
- [ ] Go to https://console.firebase.google.com/
- [ ] Click "Add project"
- [ ] Name project "GlamPro" (or your choice)
- [ ] Complete project creation

### 2. Enable Authentication
- [ ] Go to Authentication in Firebase Console
- [ ] Click "Get Started"
- [ ] Enable "Email/Password" provider
- [ ] Save changes

### 3. Get Admin SDK Credentials
- [ ] Go to Project Settings → Service Accounts
- [ ] Click "Generate new private key"
- [ ] Download JSON file
- [ ] Extract `project_id` → add to `FIREBASE_PROJECT_ID`
- [ ] Extract `private_key` → add to `FIREBASE_PRIVATE_KEY`
- [ ] Extract `client_email` → add to `FIREBASE_CLIENT_EMAIL`

### 4. Get Client Configuration
- [ ] Go to Project Settings → General
- [ ] Scroll to "Your apps"
- [ ] Click web icon (</>)
- [ ] Register app (nickname: "GlamPro Web")
- [ ] Copy config values to frontend `.env`

### 5. Create Admin User
- [ ] Go to Authentication → Users
- [ ] Click "Add user"
- [ ] Enter email and password
- [ ] Copy the UID of the created user
- [ ] Open terminal and run admin claims script (see below)

#### Set Admin Claims Script
Create a file `server/set-admin-claims.js`:
```javascript
import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

const uid = 'PASTE_USER_UID_HERE'; // Replace with actual UID

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('✅ Admin claims set successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Error setting admin claims:', error);
    process.exit(1);
  });
```

- [ ] Replace `PASTE_USER_UID_HERE` with actual UID
- [ ] Run: `node server/set-admin-claims.js`
- [ ] Verify "Admin claims set successfully" message

## ✅ Email Setup (Gmail)

### 1. Enable 2-Factor Authentication
- [ ] Go to Google Account settings
- [ ] Navigate to Security
- [ ] Enable 2-Step Verification

### 2. Generate App Password
- [ ] Go to Google Account → Security
- [ ] Click "2-Step Verification"
- [ ] Scroll to "App passwords"
- [ ] Select "Mail" and "Other (Custom name)"
- [ ] Name it "GlamPro"
- [ ] Copy the 16-character password
- [ ] Add to `EMAIL_PASSWORD` in `server/.env`

## ✅ Testing

### 1. Test Booking (Public)
- [ ] Go to http://localhost:8080/booking
- [ ] Fill out booking form:
  - [ ] Client name
  - [ ] Phone number
  - [ ] Email address
  - [ ] Service type
  - [ ] Date (future date)
  - [ ] Time
  - [ ] Location
- [ ] Submit form
- [ ] Verify success message
- [ ] Check MongoDB for new booking document
- [ ] (Optional) Check email for confirmation

### 2. Test Admin Login
- [ ] Navigate to http://localhost:8080/admin-login-glampro
- [ ] Enter admin email and password
- [ ] Click "Sign In"
- [ ] Verify redirect to /admin-dashboard-4921
- [ ] Check for no errors in console

### 3. Test Admin Dashboard
- [ ] Verify booking from step 1 appears
- [ ] Test filters:
  - [ ] Filter by status
  - [ ] Filter by service
  - [ ] Search by client name
- [ ] Test status updates:
  - [ ] Click "Confirm" on pending booking
  - [ ] Verify status changes to "Confirmed"
  - [ ] Click "Complete" on confirmed booking
  - [ ] Verify status changes to "Completed"
- [ ] Test delete:
  - [ ] Click delete on a booking
  - [ ] Confirm deletion
  - [ ] Verify booking removed

### 4. Test Email Reminders
- [ ] Create a booking with date/time 12.5 hours in future
- [ ] Mark as "Confirmed" in admin dashboard
- [ ] Wait for cron job (runs every hour)
- [ ] Check email for reminder
- [ ] Verify `reminderSent` flag set to `true` in database

## ✅ Final Verification

### Backend
- [ ] Server running without errors
- [ ] MongoDB connected
- [ ] Cron job running
- [ ] API endpoints responding
- [ ] Firebase Admin SDK initialized

### Frontend
- [ ] App running without errors
- [ ] Routes working (/, /services, /booking)
- [ ] API calls successful
- [ ] Firebase Auth working
- [ ] Admin routes protected

### Security
- [ ] Admin routes not visible in navigation
- [ ] Admin dashboard redirects non-admin users
- [ ] API endpoints protected with Firebase tokens
- [ ] CORS configured correctly

## 🎉 Success!

If all items are checked, your GlamPro MERN Beauty Booking System is fully operational!

## 📝 Next Steps

- [ ] Bookmark admin login URL for easy access
- [ ] Share admin URL with authorized users only
- [ ] Test with real bookings
- [ ] Monitor email delivery
- [ ] Adjust cron timing if needed
- [ ] Customize email templates
- [ ] Add more service types if needed
- [ ] Plan for production deployment

## 🐛 Common Issues

### "Cannot connect to MongoDB"
- Check if MongoDB service is running
- Verify MONGODB_URI is correct
- Check network/firewall settings

### "Firebase token verification failed"
- Ensure admin user has custom claims set
- Verify Firebase credentials in .env
- Check if user is logged in

### "Emails not sending"
- Verify EMAIL_USER and EMAIL_PASSWORD
- Ensure app password is used (not regular password)
- Check Gmail "Less secure app" settings

### "CORS error in browser"
- Verify CLIENT_URL in server/.env matches frontend URL
- Restart backend server after .env changes
- Clear browser cache

---

**Need help? Check README_GLAMPRO.md for detailed documentation.**
