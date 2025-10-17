# 💅 GlamPro - Beauty Booking System

> **Blush & Gold Elegance** - A full-stack MERN beauty booking application with Firebase Authentication

![Version](https://img.shields.io/badge/version-1.0.0-blush)
![License](https://img.shields.io/badge/license-MIT-gold)

## 🌟 Overview

**GlamPro** is a modern, elegant beauty booking system built with the MERN stack (MongoDB, Express, React, Node.js) and Firebase Authentication. The application features a public booking interface and a secure, hidden admin dashboard for managing appointments.

### ✨ Key Features

- 🎨 **Glamongo Theme** - Blush & Gold Elegance design palette
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔒 **Secure Admin Panel** - Hidden routes with Firebase Authentication
- 📧 **Automated Reminders** - Email notifications 12 hours before appointments
- ⚡ **Real-time Updates** - Dynamic booking management
- 🎭 **Smooth Animations** - Framer Motion powered transitions

## 📁 Project Structure

```
beauty-delivered-app/
├── backend/                 # Node.js + Express API
│   ├── config/             # Database & Firebase config
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── services/           # Email & cron services
│   └── server.js           # Main server file
│
├── frontend/               # React + TypeScript UI
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── config/        # Firebase client config
│   │   ├── context/       # React contexts
│   │   └── services/      # API services
│   ├── public/
│   │   └── images/        # Image assets
│   └── [config files]     # Vite, Tailwind, etc.
│
└── [documentation]/        # Setup guides & docs
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- MongoDB (local or Atlas)
- Firebase account
- Gmail account (for email service)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Brandon05-dev/beauty-delivered-app.git
   cd beauty-delivered-app
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your credentials
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd frontend
   npm install
   cp ../.env.example .env
   # Edit .env with Firebase config
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:5000
   - Admin Login: http://localhost:8080/admin-login-glampro

## 📚 Documentation

- **[README_GLAMPRO.md](./README_GLAMPRO.md)** - Complete setup guide
- **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** - Step-by-step checklist
- **[GLAMONGO_THEME.md](./GLAMONGO_THEME.md)** - Theme documentation
- **[Images README](./frontend/public/images/README.md)** - Image assets guide

## 🎨 Theme

**Glamongo - Blush & Gold Elegance**

| Color | Hex | Usage |
|-------|-----|-------|
| Blush Pink | `#FADADD` | Primary accent |
| Rose Gold | `#E6B2A6` | Secondary accent |
| Charcoal | `#2B2B2B` | Text & contrast |
| Ivory | `#FFF9F7` | Background |
| Champagne | `#F6E2B3` | Highlights |

**Fonts:**
- Headings: Playfair Display
- Body: Poppins

## 🔐 Admin Access

The admin dashboard is intentionally hidden and not linked in the navigation:

- **Login URL**: `/admin-login-glampro`
- **Dashboard URL**: `/admin-dashboard-4921` (protected)

> 💡 **Tip**: Bookmark these URLs for easy access

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Firebase SDK
- Axios
- Shadcn/ui

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- Firebase Admin SDK
- Nodemailer
- Node-cron

## 📦 Features

### Public Features
- ✅ Book appointments without registration
- ✅ Choose from multiple service types
- ✅ Select date and time
- ✅ Email confirmations

### Admin Features
- ✅ View all bookings
- ✅ Filter & search bookings
- ✅ Update booking status
- ✅ Delete bookings
- ✅ View statistics
- ✅ Automatic reminders

## 🧪 Testing

Run the development servers:

```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Brandon**
- GitHub: [@Brandon05-dev](https://github.com/Brandon05-dev)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ✨ for elegant beauty management**
