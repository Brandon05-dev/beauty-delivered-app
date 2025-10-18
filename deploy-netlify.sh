#!/bin/bash

# 🧼 Step 1: Clean up and confirm folder
echo "🚀 Starting Netlify deployment fix for Vite React app..."
cd "$(dirname "$0")"

# Navigate to frontend directory
if [ -d "frontend" ]; then
  echo "📁 Found frontend directory, navigating..."
  cd frontend
elif [ -f "package.json" ] && grep -q "vite" package.json; then
  echo "📁 Already in frontend directory"
else
  echo "❌ ERROR: No frontend directory or Vite project found. This script should be run from the project root."
  exit 1
fi

if [ ! -f "package.json" ]; then
  echo "❌ ERROR: No package.json found. Make sure you're in the correct directory."
  exit 1
fi

# 🗂 Step 2: Ensure redirects file exists (Vite uses public folder)
echo "📦 Creating Netlify _redirects file..."
mkdir -p public
echo "/* /index.html 200" > public/_redirects

# 🧱 Step 3: Install dependencies
echo "📥 Installing dependencies..."
npm install

# ⚒️ Step 4: Build the app (Vite builds to 'dist' folder, not 'build')
echo "🏗 Building the Vite project..."
npm run build

if [ ! -f "dist/index.html" ]; then
  echo "❌ ERROR: Build failed. The 'dist' folder was not created or doesn't contain index.html."
  echo "💡 Check your build logs above for errors."
  exit 1
fi

# 🌐 Step 5: Deploy to Netlify (Vite builds to 'dist' folder)
echo "🌍 Deploying to Netlify (production)..."
npx netlify deploy --prod --dir=dist

# ✅ Done
echo "✅ Deployment complete!"
echo "🎉 Your Vite React site should now load properly without 404 errors!"
echo "📝 Note: Vite builds to 'dist' folder (not 'build' like Create React App)"