# Veda Shankar Portfolio — Design System

## Overview
A premium, cinematic design system for an actress portfolio. The aesthetic is dark, minimal, and sophisticated with careful attention to typography hierarchy, generous whitespace, and subtle golden accents.

**Reference**: https://veda-films.preview.emergentagent.com/

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-[#050505]` | `#050505` | Primary background |
| `bg-[#0a0a0a]` | `#0a0a0a` | Cards, elevated surfaces |
| `text-[#c69c6d]` | `#c69c6d` | Golden accent, highlights, labels |
| `text-[#f7f5f0]` | `#f7f5f0` | Headings, primary text |
| `text-[#a3a3a3]` | `#a3a3a3` | Body paragraphs |
| `text-[#737373]` | `#737373` | Muted text, stat labels |
| `bg-white/10` | `rgba(255,255,255,0.1)` | Dividers, borders |

---

## Typography

### Font Families
```css
font-serif: 'Cormorant Garamond', Georgia, serif;
font-sans: System default (-apple-system, etc.)
```

### Type Scale (from Reference)

#### Display / Hero
```
font-serif text-[15vw] lg:text-[12vw] leading-[0.85] tracking-tight
```
- **Size**: 15vw → 12vw (responsive)
- **Weight**: normal
- **Line Height**: 0.85
- **Letter Spacing**: tight

#### Heading 1 (Section Headlines)
```
font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-[#f7f5f0]
```
- **Size**: 36px → 48px → 60px
- **Weight**: light (300)
- **Line Height**: 1.05
- **Letter Spacing**: tight (-0.025em)
- **Color**: #f7f5f0

#### Heading Accent (Italics)
```
<em className="italic text-[#c69c6d]">stillness</em>
```
- **Style**: italic
- **Color**: #c69c6d

#### Body Text
```
text-[#a3a3a3] font-light leading-relaxed max-w-xl text-base lg:text-[15px]
```
- **Size**: 16px → 15px (lg)
- **Weight**: light (300)
- **Line Height**: relaxed (1.625)
- **Color**: #a3a3a3
- **Max Width**: 576px (max-w-xl)

#### Section Labels
```
text-[10px] uppercase tracking-[0.4em] text-[#c69c6d]
```
- **Size**: 10px
- **Transform**: uppercase
- **Letter Spacing**: 0.4em
- **Color**: #c69c6d

#### Stats Numbers
```
font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light
```
- **Size**: 36px → 48px
- **Weight**: light (300)
- **Color**: #c69c6d

#### Stats Labels
```
text-[10px] uppercase tracking-[0.3em] text-[#737373]
```
- **Size**: 10px
- **Transform**: uppercase
- **Letter Spacing**: 0.3em
- **Color**: #737373

---

## Spacing Scale (from Reference)

### Section Spacing
```
py-28 lg:py-40          // 112px → 160px vertical
px-6 lg:px-12           // 24px → 48px horizontal
max-w-[1500px] mx-auto  // Container width
```

### Grid Spacing
```
gap-10 lg:gap-16        // 40px → 64px
mb-12                   // 48px (section label margin)
mt-10                   // 40px (heading to body)
mt-6                    // 24px (paragraph gap)
mt-2                    // 8px (stat label gap)
```

### Component Spacing
| Element | Class | Value |
|---------|-------|-------|
| Section Vertical | `py-28 lg:py-40` | 112px → 160px |
| Section Horizontal | `px-6 lg:px-12` | 24px → 48px |
| Grid Gap | `gap-10 lg:gap-16` | 40px → 64px |
| Label to Content | `mb-12` | 48px |
| Heading to Body | `mt-10` | 40px |
| Paragraph Gap | `mt-6` | 24px |
| Stats Cell Padding | `px-5 py-7 lg:px-6 lg:py-9` | Variable |

---

## Components

### Section Header
```jsx
<div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-12">
  <span>02 — About</span>
  <span className="flex-1 h-px bg-white/10" />
  <span>The Performer</span>
</div>
```

### Stats Block (Reference Style)
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
  {stats.map((s) => (
    <div className="bg-[#050505] px-5 py-7 lg:px-6 lg:py-9">
      <div className="font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light">
        {s.value}
      </div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#737373]">
        {s.label}
      </div>
    </div>
  ))}
</div>
```
- Uses `gap-px bg-white/10` for 1px borders between cells
- Each cell has `bg-[#050505]` to show the gap as border

### Navigation
- Links: `text-xs uppercase tracking-[0.25em] text-[#a3a3a3]`
- Active/Hover: `text-[#f7f5f0]`
- CTA: `bg-[#c69c6d]/20 border border-[#c69c6d]/40 text-[#c69c6d]`

### Button Styles
```jsx
// Primary CTA
<button className="px-6 py-3 bg-[#c69c6d]/20 border border-[#c69c6d]/40 text-[#c69c6d] text-xs uppercase tracking-[0.2em] hover:bg-[#c69c6d]/30 transition-colors">
  Enquire
</button>

// Ghost Button
<button className="px-6 py-3 bg-transparent border border-white/10 text-[#a3a3a3] text-xs uppercase tracking-[0.2em] hover:border-white/20 transition-colors">
  Learn More
</button>
```

---

## Layout Patterns

### Two-Column Split
```
[IMAGE 40%]     [CONTENT 60%]
```
- Gap: 96px (gap-24)
- Image: grayscale, aspect-ratio 3:4 or 4:5
- Content: vertically centered

### Grid Specifications
```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 64px; /* lg:px-16 */
}

@media (max-width: 1024px) {
  .container {
    padding: 0 32px; /* px-8 */
  }
}
```

---

## Animation Guidelines (from Reference)

### Image Hover
```jsx
className="transition-transform duration-[1200ms] hover:scale-[1.04]"
```

### Simple Transitions
- Color: `transition-colors`
- Transform: `transition-transform duration-[1200ms]`
- No Framer Motion for basic reveals

---

## Image Treatment

### Portrait with Grain
```jsx
<div className="relative aspect-[3/4] overflow-hidden grain-overlay">
  <img
    src={image}
    alt="..."
    className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
  />
</div>
```

### Aspect Ratios
- Portrait: `aspect-[3/4]`
- Video: `aspect-[16/9]`

---

## Quick Reference (Copy-Paste from Reference)

### Section Template
```jsx
<section className="relative bg-[#050505] py-28 lg:py-40 grain-overlay">
  <div className="max-w-[1500px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
    {/* Section label */}
    <div className="lg:col-span-12">
      <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69c6d] mb-12">
        <span>02 — About</span>
        <span className="flex-1 h-px bg-white/10" />
        <span>The Performer</span>
      </div>
    </div>
    
    {/* Content */}
  </div>
</section>
```

### Headline
```jsx
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-[#f7f5f0]">
  A performer of <em className="italic text-[#c69c6d]">stillness</em>{" "}
  and <em className="italic text-[#c69c6d]">storm</em> — drawn to
  characters who don't ask to be liked.
</h2>
```

### Body Text
```jsx
<p className="text-[#a3a3a3] font-light leading-relaxed max-w-xl text-base lg:text-[15px]">
  Body content here...
</p>
```

### Stats Grid
```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
  {stats.map((s) => (
    <div key={s.label} className="bg-[#050505] px-5 py-7 lg:px-6 lg:py-9">
      <div className="font-serif text-4xl lg:text-5xl text-[#c69c6d] font-light">{s.value}</div>
      <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-[#737373]">{s.label}</div>
    </div>
  ))}
</div>
```

---

## Do's and Don'ts

### Do
- Use `font-light` for body and headings
- Use `grain-overlay` on images and sections
- Use `gap-px bg-white/10` for bordered grids
- Use `max-w-xl` to constrain body text
- Use `tracking-[0.4em]` for section labels
- Use `tracking-[0.3em]` for stat labels
- Use `py-28 lg:py-40` for section padding

### Don't
- Use Framer Motion for simple reveals
- Add decorative corner frames
- Use solid borders (prefer `bg-white/10`)
- Exceed `max-w-[1500px]` container
- Use font-medium or font-bold (stick to `font-light`)
- Use colors other than `#c69c6d` for accents
