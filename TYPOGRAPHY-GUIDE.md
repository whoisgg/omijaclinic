# Typography Style Guide - Omiya Clinic

## Font Family
- **Primary:** Geist Sans (font-sans)
- **Monospace:** Geist Mono (font-mono) - used sparingly for accent text

## Typography Scale

### Display Headings
**Class:** `.text-display`
- **Mobile:** 48px (text-5xl)
- **Tablet:** 60px (text-6xl)  
- **Desktop:** 72px (text-7xl)
- **Weight:** Light (300)
- **Line Height:** Tight (1.25)
- **Tracking:** Tight (-0.025em)
- **Usage:** Hero headlines, major section titles

**Example:**
```tsx
<h1 className="text-display">Tu mejor versión, naturalmente</h1>
```

---

### Section Headings (Large)
**Class:** `.text-heading-lg`
- **Mobile:** 36px (text-4xl)
- **Tablet:** 48px (text-5xl)
- **Desktop:** 60px (text-6xl)
- **Weight:** Light (300)
- **Line Height:** Tight (1.25)
- **Usage:** Main section headings

**Example:**
```tsx
<h2 className="text-heading-lg">NUESTROS TRATAMIENTOS</h2>
```

---

### Card Headings (Medium)
**Class:** `.text-heading-md`
- **Mobile:** 24px (text-2xl)
- **Desktop:** 30px (text-3xl)
- **Weight:** Light (300)
- **Tracking:** Wide (0.025em)
- **Usage:** Card titles, sub-section headings

**Example:**
```tsx
<h3 className="text-heading-md">ODONTOLOGÍA</h3>
```

---

### Subheadings (Small)
**Class:** `.text-heading-sm`
- **Size:** 14px (text-sm)
- **Weight:** Normal (400)
- **Transform:** Uppercase
- **Tracking:** Wider (0.05em)
- **Usage:** Eyebrows, labels, small headings

**Example:**
```tsx
<h4 className="text-heading-sm">Doctora Antonieta Ortega</h4>
```

---

### Body Text (Large)
**Class:** `.text-body-lg`
- **Mobile:** 20px (text-xl)
- **Tablet:** 24px (text-2xl)
- **Desktop:** 30px (text-3xl)
- **Line Height:** Relaxed (1.625)
- **Usage:** Featured paragraphs, hero descriptions, promo text

**Example:**
```tsx
<p className="text-body-lg">Cuidado dental integral con enfoque preventivo...</p>
```

---

### Body Text (Medium)
**Class:** `.text-body-md`
- **Mobile:** 16px (text-base)
- **Desktop:** 18px (text-lg)
- **Line Height:** Relaxed (1.625)
- **Usage:** Standard body copy, descriptions

**Example:**
```tsx
<p className="text-body-md">Nuestros servicios de odontología...</p>
```

---

### Body Text (Small)
**Class:** `.text-body-sm`
- **Mobile:** 14px (text-sm)
- **Desktop:** 16px (text-base)
- **Line Height:** Relaxed (1.625)
- **Usage:** Secondary information, captions, helper text

**Example:**
```tsx
<p className="text-body-sm">Tratamientos estéticos que realzan tu belleza...</p>
```

---

### Button Text
**Class:** `.text-button`
- **Size:** 14px (text-sm)
- **Weight:** Medium (500)
- **Transform:** Uppercase
- **Tracking:** Wide (0.025em)
- **Usage:** All buttons and CTAs

**Example:**
```tsx
<button className="text-button">Agenda tu Cita</button>
```

---

## Typography Utilities

### Text Wrapping
- **`.text-balance`** - Balanced text wrapping for headings
- **`.text-pretty`** - Pretty text wrapping for paragraphs

### Font Weights
- **Light (300):** Use for display headings and large text
- **Normal (400):** Use for body text and small headings
- **Medium (500):** Use for buttons and emphasis
- **Bold (700):** Use sparingly for strong emphasis only

### Line Heights
- **Tight (1.25):** Display headings, section headings
- **Relaxed (1.625):** All body text and descriptions

### Tracking/Letter Spacing
- **Tight (-0.025em):** Display headings
- **Normal:** Default for most text
- **Wide (0.025em):** Card headings, buttons
- **Wider (0.05em):** Small uppercase headings

---

## Color Usage

### Text Colors
- **Primary:** `text-foreground` - Main body text (black on light, white on dark)
- **Muted:** `text-muted-foreground` - Secondary text
- **White:** `text-white` - Text on dark backgrounds
- **Black:** `text-black` - Text on light backgrounds
- **Gray:** `text-gray-800`, `text-gray-600` - Subtle text variations

### Opacity Modifiers
- **70% opacity:** `text-white/70` - Subtle text on hero
- **80% opacity:** `text-white/80` - Secondary text on dark backgrounds
- **90% opacity:** `opacity-90` - De-emphasized text

---

## Best Practices

1. **Consistency:** Always use the defined classes for typography
2. **Hierarchy:** Maintain clear visual hierarchy with appropriate sizes
3. **Readability:** Never go below 14px for body text
4. **Contrast:** Ensure sufficient contrast ratios (4.5:1 minimum)
5. **Line Length:** Keep body text between 45-75 characters per line
6. **Responsive:** Always define mobile and desktop sizes
7. **Spacing:** Use consistent margins (mb-4, mb-6, mb-8) between elements

---

## Migration Checklist

- [ ] Hero Section - Use `.text-display` for main heading
- [ ] Intro Section - Use `.text-heading-lg` for section heading
- [ ] Services Section - Use `.text-heading-lg` for section title, `.text-heading-md` for cards
- [ ] Featured Section - Use `.text-heading-sm` for eyebrow, `.text-body-lg` for paragraphs
- [ ] Promo Section - Use `.text-body-lg` for featured text
- [ ] All Buttons - Use `.text-button` for consistent button styling
