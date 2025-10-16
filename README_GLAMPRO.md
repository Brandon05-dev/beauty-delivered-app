# GlamPro - MERN Beauty Booking System

## 🌟 Overview

GlamPro is a full-stack MERN (MongoDB, Express, React, Node.js) beauty booking system with Firebase Authentication for admin management. The system features a public booking form and a hidden admin dashboard for managing appointments.

## 🎨 Design

- **Theme**: Blush & Gold Elegance (Glamongo)
- **Colors**: 
  - Primary (Blush Pink): #FADADD
  - Accent (Rose Gold): #E6B2A6
  - Contrast (Charcoal): #2B2B2B
  - Soft Base (Ivory): #FFF9F7
  - Highlight (Champagne): #F6E2B3
- **Fonts**: Playfair Display (headings), Poppins (body)
- **Animations**: Framer Motion

## 📁 Project Structure

```
beauty-delivered-app/
├── backend/                    # Backend (Node.js + Express)
│   ├── config/
│   │   ├── database.js        # MongoDB connection
│   │   └── firebase.js        # Firebase Admin SDK
│   ├── models/
│   │   └── Booking.js         # Booking schema
│   ├── routes/
│   │   └── bookings.js        # Booking API routes
│   ├── services/
│   │   ├── emailService.js    # Email notifications
│   │   └── cronJobs.js        # Reminder cron job
│   ├── .env.example           # Environment variables template
│   ├── package.json
│   └── server.js              # Main server file
├── frontend/                   # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # Shadcn/ui components
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── [other components]
│   │   ├── config/
│   │   │   └── firebase.ts    # Firebase client config
│   │   ├── context/
│   │   │   └── AuthContext.tsx # Auth context provider
│   │   ├── pages/
│   │   │   ├── Booking.tsx    # Public booking form
│   │   │   ├── AdminLogin.tsx # Hidden admin login
│   │   │   └── AdminDashboard.tsx # Hidden admin dashboard
│   │   ├── services/
│   │   │   └── api.ts         # API service layer
│   │   ├── lib/
│   │   │   └── utils.ts       # Utility functions
│   │   └── App.tsx            # Main app with routes
│   ├── public/
│   │   ├── images/            # Image assets
│   │   │   ├── hero/          # Hero section images
│   │   │   ├── services/      # Service images
│   │   │   ├── gallery/       # Portfolio images
│   │   │   └── testimonials/  # Client photos
│   │   └── robots.txt
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── package.json
├── .env.example                # Frontend environment variables
├── GLAMONGO_THEME.md          # Theme documentation
├── SETUP_CHECKLIST.md         # Setup instructions checklist
└── README_GLAMPRO.md          # This file
```

## 🚀 Setup Instructions

### 1. Backend Setup

#### Install Dependencies
```bash
cd server
npm install
```

#### Configure Environment Variables

Create `server/.env` file:
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/glampro
# OR use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/glampro

# Server
PORT=5000

# Firebase Admin SDK (from Firebase Console)
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Key Here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk@your-project.iam.gserviceaccount.com

# Email Service (for reminders)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# CORS
CLIENT_URL=http://localhost:8080
```

#### Start Backend Server
```bash
npm run dev
```

Server runs on: http://localhost:5000

### 2. Frontend Setup

#### Install Dependencies
```bash
# From project root
npm install
```

#### Configure Environment Variables

Create `.env` file in project root:
```env
# Firebase Client Configuration
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id

# Backend API
VITE_API_URL=http://localhost:5000/api
```

#### Start Frontend
```bash
npm run dev
```

Frontend runs on: http://localhost:8080

### 3. Firebase Setup

#### A. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project named "GlamPro"
3. Enable Authentication → Email/Password

#### B. Get Firebase Admin SDK Credentials
1. Go to Project Settings → Service Accounts
2. Click "Generate New Private Key"
3. Save the JSON file securely
4. Extract values for `.env`:
   - `project_id` → `FIREBASE_PROJECT_ID`
   - `private_key` → `FIREBASE_PRIVATE_KEY`
   - `client_email` → `FIREBASE_CLIENT_EMAIL`

#### C. Get Firebase Client Configuration
1. Go to Project Settings → General
2. Under "Your apps", click Web app icon
3. Copy the config values to frontend `.env`

#### D. Create Admin User
1. Go to Authentication → Users
2. Add a new user (email/password)
3. Copy the user's UID
4. Open Cloud Firestore or Realtime Database
5. Set custom claims using Firebase CLI or Cloud Functions:

**Using Firebase CLI:**
```bash
firebase functions:shell
admin.auth().setCustomUserClaims('USER_UID_HERE', {admin: true})
```

**Or use this Node.js script:**
```javascript
const admin = require('firebase-admin');
admin.initializeApp();

admin.auth().setCustomUserClaims('USER_UID_HERE', { admin: true })
  .then(() => console.log('Admin claim set'))
  .catch(console.error);
```

### 4. MongoDB Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB
# Start MongoDB service
mongod

# Database will be created automatically
```

#### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user
4. Whitelist your IP (or use 0.0.0.0/0 for development)
5. Get connection string and add to `MONGODB_URI`

### 5. Email Setup (for Reminders)

#### Using Gmail
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Google Account → Security → 2-Step Verification → App passwords
3. Use the app password in `EMAIL_PASSWORD`

## 🔑 Features

### Public Features
- ✅ Book beauty services without registration
- ✅ Choose from 4 service types
- ✅ Select date and time
- ✅ Provide location and notes
- ✅ Receive email confirmation

### Admin Features (Protected)
- ✅ View all bookings
- ✅ Filter by status, service, date
- ✅ Search by client info
- ✅ Update booking status (Pending → Confirmed → Completed)
- ✅ Cancel bookings
- ✅ Delete bookings
- ✅ View statistics dashboard
- ✅ Automatic email reminders 12 hours before appointment

## 🛣️ Routes

### Public Routes
- `/` - Home page
- `/services` - Services list
- `/booking` - Booking form

### Hidden Admin Routes (NOT in navigation)
- `/admin-login-glampro` - Admin login (manually accessible only)
- `/admin-dashboard-4921` - Admin dashboard (protected, requires authentication)

**Note**: These routes are intentionally hidden and not linked anywhere in the public UI.

## 📧 Email Reminders

The system automatically sends email reminders 12 hours before each appointment using a cron job that runs every hour.

### Email Types
1. **Confirmation Email** - Sent immediately after booking (optional, can be added)
2. **Reminder Email** - Sent 12 hours before appointment

## 🔒 Security

### Backend Security
- ✅ Firebase Admin SDK for token verification
- ✅ Protected admin-only routes
- ✅ CORS configuration
- ✅ Input validation
- ✅ Custom admin claims check

### Frontend Security
- ✅ Firebase Authentication
- ✅ Protected routes with redirect
- ✅ Auth context for state management
- ✅ Token-based API requests
- ✅ Admin routes not visible in UI

## 🧪 Testing

### Test the System

1. **Create a Booking** (Public)
   - Go to http://localhost:8080/booking
   - Fill out the form
   - Submit booking

2. **Login as Admin**
   - Navigate to http://localhost:8080/admin-login-glampro
   - Use admin credentials
   - You'll be redirected to dashboard

3. **Manage Bookings**
   - View all bookings
   - Filter and search
   - Update status
   - Delete bookings

## 📊 API Endpoints

### Public Endpoints
```
POST   /api/bookings              Create new booking
```

### Protected Endpoints (Admin Only)
```
GET    /api/bookings              Get all bookings (with filters)
GET    /api/bookings/:id          Get single booking
PUT    /api/bookings/:id          Update booking status
DELETE /api/bookings/:id          Delete booking
GET    /api/bookings/stats/overview   Get booking statistics
```

## 🎯 Key Technologies

### Backend
- **Express.js** - Web framework
- **MongoDB + Mongoose** - Database
- **Firebase Admin SDK** - Authentication
- **Node-cron** - Scheduled tasks
- **Nodemailer** - Email service
- **Express-validator** - Input validation

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Firebase SDK** - Authentication
- **Axios** - HTTP client
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library

## 🐛 Troubleshooting

### MongoDB Connection Issues
```bash
# Check if MongoDB is running
mongosh

# If using Atlas, check IP whitelist and connection string
```

### Firebase Authentication Issues
```bash
# Verify Firebase config in .env files
# Check if admin claims are set correctly
# Ensure service account JSON is valid
```

### Email Not Sending
```bash
# Verify EMAIL_USER and EMAIL_PASSWORD
# Check if app password is correct (not regular password)
# Ensure less secure app access is enabled (if using Gmail)
```

### CORS Errors
```bash
# Ensure CLIENT_URL in server/.env matches frontend URL
# Check if server is running on correct port
```

## 📝 Additional Notes

### Customization
- Modify service types in `src/pages/Booking.tsx`
- Change email templates in `server/services/emailService.js`
- Adjust cron schedule in `server/services/cronJobs.js`
- Update admin route paths in `src/App.tsx` (keep them secret!)

### Production Deployment
- Use environment-specific `.env` files
- Enable HTTPS
- Set up proper MongoDB indexes
- Use process manager (PM2) for Node.js
- Configure Firebase security rules
- Use a professional email service (SendGrid, AWS SES)

## 🌐 Accessing Admin Dashboard

The admin dashboard is **intentionally hidden** and not accessible through the normal UI:

1. **Direct URL Access**: Navigate to `http://localhost:8080/admin-login-glampro`
2. **Bookmark**: Save the URL for easy access
3. **Share Privately**: Only share the URL with authorized admins

**Security Note**: The dashboard URL should be kept confidential and not shared publicly.

## 📞 Support

For issues or questions:
1. Check server logs (`server/` directory)
2. Check browser console for frontend errors
3. Verify all environment variables are set
4. Ensure MongoDB and backend server are running

---

**Built with ✨ for elegant beauty management**
