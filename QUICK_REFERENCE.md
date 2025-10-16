# Glamongo Theme - Quick Reference

## 🎨 Colors
```
glamongo-blush      #FADADD  (Primary - blush pink)
glamongo-rose       #E6B2A6  (Accent - rose gold)
glamongo-charcoal   #2B2B2B  (Text - charcoal gray)
glamongo-ivory      #FFF9F7  (Background - ivory white)
glamongo-champagne  #F6E2B3  (Highlight - champagne)
```

## 🔘 Buttons
```tsx
<button className="btn-glamongo">Primary Button</button>
<button className="btn-glamongo-secondary">Secondary Button</button>
<button className="btn-glamongo-outline">Outline Button</button>
```

## 📦 Layout Components
```tsx
// Card with hover effect
<div className="card-glamongo">...</div>

// Section with consistent padding
<section className="section-glamongo">...</section>

// Decorative accent line
<div className="accent-line" />
```

## 📝 Typography
```tsx
// Large heading
<h1 className="heading-glamongo">...</h1>

// Sub heading
<h2 className="subheading-glamongo">...</h2>

// Body text
<p className="text-glamongo">...</p>
```

## ✨ Shadows
```
shadow-rose       - Soft blush shadow
shadow-rose-lg    - Large blush shadow
shadow-elegant    - Charcoal shadow
shadow-glow       - Champagne glow
```

## 🎬 Animations
```tsx
// Fade in on load
<div className="animate-fade-in">...</div>

// Glow effect
<button className="animate-glow">...</button>

// Staggered animation
style={{ animationDelay: `${index * 150}ms` }}
```

## 📐 Common Patterns

### Hero Section
```tsx
<section className="relative min-h-[90vh] bg-gradient-to-br from-glamongo-ivory via-glamongo-blush/20 to-glamongo-champagne/30">
  <div className="container mx-auto px-4 py-16">
    <h1 className="heading-glamongo animate-fade-in">
      Title <span className="text-glamongo-rose">Accent</span>
    </h1>
    <div className="flex justify-center">
      <div className="accent-line" />
    </div>
  </div>
</section>
```

### Badge
```tsx
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border-2 border-glamongo-rose/40 shadow-rose">
  <Icon className="w-4 h-4 text-glamongo-rose" />
  <span className="text-sm font-medium text-glamongo-charcoal">Text</span>
</div>
```

### Card Grid
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <div 
      key={item.id}
      className="card-glamongo animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Card content */}
    </div>
  ))}
</div>
```

### Form Section
```tsx
<div className="bg-gradient-to-br from-white to-glamongo-ivory/30 rounded-2xl shadow-elegant border-2 border-glamongo-blush/30 p-8">
  {/* Form content */}
</div>
```

## 🎯 Hover Effects
```tsx
// Scale up with shadow
hover:scale-105 hover:shadow-rose-lg

// Color transition
hover:bg-glamongo-champagne

// Combined effect
transition-all duration-300 hover:scale-105 hover:shadow-rose-lg
```

## 📱 Responsive Classes
```
flex flex-col sm:flex-row       - Stack mobile, row desktop
text-4xl md:text-5xl lg:text-6xl - Responsive text size
hidden md:flex                   - Hide mobile, show desktop
grid grid-cols-2 lg:grid-cols-3  - Responsive grid
```

## 🌈 Gradient Backgrounds
```tsx
// Hero gradient
bg-gradient-to-br from-glamongo-ivory via-glamongo-blush/20 to-glamongo-champagne/30

// Card gradient
bg-gradient-to-br from-white to-glamongo-ivory/30

// Image placeholder
bg-gradient-to-br from-glamongo-blush/60 via-glamongo-rose/30 to-glamongo-champagne/40
```

## 💫 Decorative Elements
```tsx
// Blurred background circles
<div className="absolute top-20 left-10 w-72 h-72 bg-glamongo-rose/20 rounded-full blur-3xl animate-pulse" />

// Gradient overlay
<div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />
```

---

**Quick Tip**: Use opacity variants (like `/20`, `/40`, `/70`) to create subtle variations of the theme colors!
