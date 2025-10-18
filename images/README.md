# Image Assets for GlamPro Website

This directory contains all image assets used throughout the GlamPro Beauty Booking website.

## 📁 Folder Structure

```
images/
├── hero/              # Hero section background images
├── services/          # Service type images (makeup, hair, nails, spa)
├── gallery/           # Portfolio/gallery images
└── testimonials/      # Client testimonial photos
```

## 🎨 Image Guidelines

### General Requirements
- **Format**: JPG for photos, PNG for graphics with transparency
- **Optimization**: Compress images for web (use tools like TinyPNG or ImageOptim)
- **Max File Size**: 500KB per image recommended
- **Quality**: Balance between quality and file size (80-90% quality)

### Specific Folders

#### `/hero/`
**Purpose**: Large background images for the hero section
- **Dimensions**: 1920x1080px (16:9 ratio) minimum
- **Style**: High-quality beauty/spa themed images
- **Naming**: `hero-1.jpg`, `hero-2.jpg`, etc.
- **Example Content**: Elegant beauty salon interiors, close-up beauty shots

#### `/services/`
**Purpose**: Icons or images representing each service type
- **Dimensions**: 600x600px (square, 1:1 ratio)
- **Style**: Professional, elegant service photography
- **Naming**: `makeup.jpg`, `hair.jpg`, `nails.jpg`, `spa.jpg`
- **Example Content**:
  - `makeup.jpg` - Professional makeup application or brush set
  - `hair.jpg` - Beautiful hairstyling or hair treatment
  - `nails.jpg` - Manicured nails or nail art
  - `spa.jpg` - Spa treatment or relaxation scene

#### `/gallery/`
**Purpose**: Portfolio showcasing beauty work and services
- **Dimensions**: Variable, but maintain consistency (e.g., 800x600px landscape)
- **Style**: Before/after shots, completed work, happy clients
- **Naming**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
- **Recommended**: 6-12 high-quality images
- **Example Content**: 
  - Makeup transformations
  - Hair styling results
  - Nail art designs
  - Spa ambiance

#### `/testimonials/`
**Purpose**: Client photos (optional) for testimonial section
- **Dimensions**: 200x200px (square, profile photo style)
- **Style**: Professional headshots or avatars
- **Naming**: `client-1.jpg`, `client-2.jpg`, etc.
- **Alternative**: Use placeholder avatars or initials if no photos available

## 🖼️ How to Use Images

### In React Components

```jsx
// Example: Using a hero image
<img src="/images/hero/hero-1.jpg" alt="Beauty salon hero" />

// Example: Using service images
<img src="/images/services/makeup.jpg" alt="Makeup services" />

// Example: Using gallery images
<img src="/images/gallery/gallery-1.jpg" alt="Our work" />
```

### In CSS/Tailwind

```css
/* Background image */
.hero {
  background-image: url('/images/hero/hero-1.jpg');
}
```

## 🎯 Recommended Sources for Stock Images

If you need placeholder images, consider these free resources:

1. **Unsplash** (https://unsplash.com)
   - Search: "beauty salon", "makeup", "spa", "hair styling"
   
2. **Pexels** (https://pexels.com)
   - High-quality free photos
   
3. **Pixabay** (https://pixabay.com)
   - Free images and vectors

## 🎨 Image Style Guide (Glamongo Theme)

To maintain the **Blush & Gold Elegance** theme:

- **Color Palette**: Look for images with:
  - Soft pinks, rose gold tones
  - Warm, elegant lighting
  - Ivory/cream backgrounds
  - Gold/champagne accents

- **Mood**: Elegant, luxurious, calming, professional

- **Avoid**: 
  - Overly bright or neon colors
  - Harsh lighting
  - Cluttered backgrounds
  - Low-quality or blurry images

## 📝 Current Status

- ✅ Folder structure created
- ⏳ Awaiting image assets
- ⏳ Need 1-2 hero images
- ⏳ Need 4 service images
- ⏳ Need 6-12 gallery images
- ⏳ Need 3-6 testimonial photos (optional)

## 🚀 Next Steps

1. Gather or create image assets following the guidelines above
2. Optimize all images for web (compress, resize)
3. Name files according to conventions
4. Place in appropriate folders
5. Update components to reference new images
6. Test loading performance

---

**Note**: This is a placeholder README. Replace with actual images before deployment!
