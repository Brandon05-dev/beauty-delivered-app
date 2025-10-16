# Glamongo - Blush & Gold Elegance Theme

## 🎨 Color Palette

The Glamongo theme uses a sophisticated "Blush & Gold Elegance" palette inspired by high-end beauty brands like Dior Beauty and Fenty Skin.

### Core Colors

```css
Primary (Blush Pink):     #FADADD
Accent (Rose Gold):       #E6B2A6
Contrast (Charcoal Gray): #2B2B2B
Soft Base (Ivory White):  #FFF9F7
Highlight (Champagne):    #F6E2B3
```

### Tailwind Classes

You can use these colors directly in your components:
- `bg-glamongo-blush` / `text-glamongo-blush`
- `bg-glamongo-rose` / `text-glamongo-rose`
- `bg-glamongo-charcoal` / `text-glamongo-charcoal`
- `bg-glamongo-ivory` / `text-glamongo-ivory`
- `bg-glamongo-champagne` / `text-glamongo-champagne`

## 🖋️ Typography

### Font Families
- **Headings**: Playfair Display (serif) - Elegant and sophisticated
- **Body Text**: Poppins (sans-serif) - Clean and modern

### Usage
```tsx
// Headings automatically use Playfair Display
<h1 className="heading-glamongo">Main Heading</h1>
<h2 className="subheading-glamongo">Sub Heading</h2>

// Body text uses Poppins by default
<p className="text-glamongo">Body text with proper styling</p>
```

## 🎭 Custom Components

### Buttons

Three main button styles are available:

```tsx
// Primary Button - Blush with champagne hover
<button className="btn-glamongo">Book Now</button>

// Secondary Button - Rose gold variant
<button className="btn-glamongo-secondary">Learn More</button>

// Outline Button - Transparent with blush border
<button className="btn-glamongo-outline">View Services</button>
```

### Cards

Elegant cards with hover effects:

```tsx
<div className="card-glamongo">
  {/* Your content */}
</div>
```

### Sections

Consistent section spacing:

```tsx
<section className="section-glamongo">
  {/* Your content */}
</section>
```

### Accent Lines

Decorative gradient lines for visual separation:

```tsx
<div className="accent-line" />
```

## ✨ Shadows & Effects

### Box Shadows
- `shadow-rose` - Soft blush shadow
- `shadow-rose-lg` - Larger blush shadow
- `shadow-elegant` - Charcoal shadow for depth
- `shadow-glow` - Champagne glow effect

### Example Usage
```tsx
<div className="bg-white rounded-xl shadow-rose hover:shadow-rose-lg transition-all">
  {/* Content */}
</div>
```

## 🎬 Animations

### Fade In
Smooth entrance animation for elements:
```tsx
<div className="animate-fade-in">
  {/* Content fades in on load */}
</div>
```

### Glow Animation
Pulsing glow effect (used for floating action buttons):
```tsx
<button className="animate-glow">
  {/* Button glows subtly */}
</button>
```

### Staggered Animations
Create staggered animations using inline styles:
```tsx
{items.map((item, index) => (
  <div 
    key={item.id}
    className="animate-fade-in"
    style={{ animationDelay: `${index * 150}ms` }}
  >
    {/* Content */}
  </div>
))}
```

## 🎯 Design Principles

### 1. Minimalism
- Clean layouts with ample white space
- No harsh contrasts or bright tones
- Focus on content, not decorations

### 2. Elegance
- Soft, rounded corners (`rounded-lg`, `rounded-xl`, `rounded-2xl`)
- Gentle transitions (300ms duration)
- Subtle hover effects with scale transforms

### 3. Femininity
- Blush pink as the primary color
- Rose gold accents for warmth
- Champagne highlights for luxury

### 4. Professionalism
- Charcoal text for readability
- Consistent spacing and alignment
- High-quality typography hierarchy

## 📱 Responsive Design

All components are fully responsive:

### Mobile-First Approach
```tsx
// Stack on mobile, row on desktop
<div className="flex flex-col sm:flex-row gap-4">

// Hide on mobile, show on desktop
<div className="hidden md:flex">

// Adjust text size responsively
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

### Breakpoints
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

## 🌟 Component Examples

### Hero Section
```tsx
<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-glamongo-ivory via-glamongo-blush/20 to-glamongo-champagne/30">
  {/* Decorative background blurs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-glamongo-rose/20 rounded-full blur-3xl animate-pulse" />
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-4 py-16 relative z-10">
    <h1 className="heading-glamongo animate-fade-in">
      Experience <span className="text-glamongo-rose">Glamongo</span>
    </h1>
    <div className="flex justify-center">
      <div className="accent-line" />
    </div>
  </div>
</section>
```

### Service Card
```tsx
<div className="card-glamongo">
  <div className="aspect-[4/3] bg-gradient-to-br from-glamongo-blush/40 via-glamongo-rose/20 to-glamongo-champagne/30 rounded-xl mb-4" />
  <h3 className="text-2xl font-playfair font-bold text-glamongo-charcoal mb-2">
    Service Name
  </h3>
  <p className="text-glamongo-charcoal/70 font-poppins">
    Service description
  </p>
  <button className="btn-glamongo mt-4">Book Now</button>
</div>
```

### Badge/Tag
```tsx
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border-2 border-glamongo-rose/40 backdrop-blur-sm shadow-rose">
  <Sparkles className="w-4 h-4 text-glamongo-rose" />
  <span className="text-sm font-medium text-glamongo-charcoal">
    Luxury Beauty Booking
  </span>
</div>
```

## 🎨 Color Psychology

Each color in the Glamongo palette has been carefully chosen:

- **Blush Pink (#FADADD)**: Femininity, softness, approachability
- **Rose Gold (#E6B2A6)**: Luxury, warmth, sophistication
- **Charcoal (#2B2B2B)**: Professionalism, readability, depth
- **Ivory White (#FFF9F7)**: Cleanliness, purity, spaciousness
- **Champagne (#F6E2B3)**: Celebration, elegance, premium quality

## 🚀 Getting Started

1. The theme is already configured in:
   - `tailwind.config.ts` - Custom colors, shadows, and animations
   - `src/index.css` - CSS variables, component classes, and utilities

2. All components have been updated to use the Glamongo theme:
   - Hero.tsx
   - Navbar.tsx
   - Footer.tsx
   - ServicesPreview.tsx
   - Testimonials.tsx
   - Gallery.tsx
   - WhatsAppButton.tsx
   - Pages: Services.tsx, Booking.tsx

3. Start using the theme in your new components by:
   - Using the predefined classes (`btn-glamongo`, `card-glamongo`, etc.)
   - Applying Glamongo colors (`bg-glamongo-blush`, etc.)
   - Following the design principles outlined above

## 💡 Best Practices

1. **Always use soft shadows** - `shadow-rose` or `shadow-elegant`
2. **Add hover effects** - Scale transforms and shadow increases
3. **Use animations sparingly** - Only for important elements
4. **Maintain hierarchy** - Playfair for headings, Poppins for body
5. **Keep it clean** - Ample spacing, minimal decorations
6. **Test on mobile** - Ensure responsive design works perfectly

---

**Built with love for elegant beauty experiences** ✨
