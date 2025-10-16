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


## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/c6e541af-710c-4e9b-9265-e4efff568c18) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/c6e541af-710c-4e9b-9265-e4efff568c18) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
