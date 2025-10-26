# Lambda Faucet - Design System

## 🎨 Color Palette

### Primary Colors
- **Primary**: `#3B82F6` (Blue-500) - Main action, highlights
- **Primary Dark**: `#1E40AF` (Blue-900) - Hover state
- **Primary Light**: `#DBEAFE` (Blue-100) - Background

### Status Colors
- **Success**: `#10B981` (Green-500) - Success, available
- **Warning**: `#F59E0B` (Amber-500) - Warning, caution
- **Error**: `#EF4444` (Red-500) - Error, failed
- **Info**: `#06B6D4` (Cyan-500) - Information

### Neutral Colors
- **Background**: `#FFFFFF` / `#0F172A` (Light/Dark mode)
- **Surface**: `#F8FAFC` / `#1E293B` (Light/Dark mode)
- **Border**: `#E2E8F0` / `#334155` (Light/Dark mode)
- **Text**: `#1E293B` / `#F1F5F9` (Light/Dark mode)
- **Text Muted**: `#64748B` / `#94A3B8` (Light/Dark mode)

---

## 📝 Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Type Scale
| Name | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| **H1** | 36px | 700 | 1.2 | Page title, hero |
| **H2** | 28px | 700 | 1.3 | Section heading |
| **H3** | 24px | 600 | 1.4 | Card title |
| **Body Large** | 16px | 400 | 1.5 | Main content |
| **Body** | 14px | 400 | 1.5 | Regular text |
| **Body Small** | 12px | 400 | 1.4 | Helper text |
| **Label** | 12px | 600 | 1.4 | Form labels |
| **Caption** | 11px | 400 | 1.3 | Captions, hints |

---

## 📏 Spacing Scale

```
4px (0.25rem) - xs
8px (0.5rem) - sm
12px (0.75rem) - md
16px (1rem) - lg
20px (1.25rem) - xl
24px (1.5rem) - 2xl
32px (2rem) - 3xl
40px (2.5rem) - 4xl
48px (3rem) - 5xl
64px (4rem) - 6xl
```

### Usage
- **Padding**: xs-lg for components
- **Margin**: sm-3xl for sections
- **Gap**: xs-lg for flex/grid

---

## 🔲 Sizing Scale

```
Width/Height:
24px (1.5rem) - xs
32px (2rem) - sm
40px (2.5rem) - md
48px (3rem) - lg
56px (3.5rem) - xl
64px (4rem) - 2xl
72px (4.5rem) - 3xl
80px (5rem) - 4xl
```

---

## 🎯 Components Style Guide

### Button Variants

#### Primary Button
```
Background: #3B82F6
Text: White
Padding: 10px 16px (sm) | 12px 20px (md) | 14px 24px (lg)
Border Radius: 6px
Font Weight: 600
Hover: #1E40AF
Active: #1E3A8A
Disabled: #CBD5E1 + 50% opacity
```

#### Secondary Button
```
Background: #F1F5F9
Text: #1E293B
Border: 1px #E2E8F0
Padding: Same as primary
Hover: #E2E8F0
```

#### Outline Button
```
Background: Transparent
Border: 2px #3B82F6
Text: #3B82F6
Hover: #DBEAFE (light bg)
```

#### Disabled State (All)
```
Opacity: 50%
Cursor: not-allowed
```

---

### Card Styles

#### Base Card
```
Background: #FFFFFF / #1E293B
Border: 1px #E2E8F0 / #334155
Border Radius: 8px
Padding: 16px (sm) | 24px (md) | 32px (lg)
Box Shadow: 0 1px 2px rgba(0,0,0,0.05)
Hover Shadow: 0 4px 6px rgba(0,0,0,0.1)
```

#### Elevated Card
```
Box Shadow: 0 10px 15px rgba(0,0,0,0.1)
Transition: all 200ms ease
```

---

### Input Styles

#### Text Input / Textarea
```
Background: #FFFFFF / #1E293B
Border: 1px #E2E8F0 / #334155
Border Radius: 6px
Padding: 10px 12px (sm) | 12px 14px (md) | 14px 16px (lg)
Font Size: 14px
Focus: Border #3B82F6 + Ring 2px #DBEAFE
Error: Border #EF4444 + Ring 2px #FEE2E2
```

#### Label
```
Font Weight: 600
Font Size: 12px
Color: #1E293B / #F1F5F9
Margin Bottom: 6px
```

---

### Badge Styles

#### Variants
```
Primary: Bg #DBEAFE, Text #1E40AF
Success: Bg #D1FAE5, Text #065F46
Warning: Bg #FEF3C7, Text #92400E
Error: Bg #FEE2E2, Text #991B1B
Info: Bg #CFFAFE, Text #0C4A6E
```

#### Sizes
```
Small: 8px 12px, 11px font
Medium: 10px 14px, 12px font
Large: 12px 16px, 14px font
```

---

### Badge/Label Styles

#### Default
```
Background: #F1F5F9 / #334155
Text: #64748B / #94A3B8
Padding: 4px 8px
Border Radius: 4px
Font Size: 12px
Font Weight: 500
```

---

## 🎬 Animations & Transitions

### Standard Durations
```
Fast: 150ms (micro-interactions)
Normal: 200ms (standard)
Slow: 300ms (important transitions)
```

### Easing
```
Default: cubic-bezier(0.4, 0, 0.2, 1)
Enter: cubic-bezier(0.4, 0, 1, 1)
Exit: cubic-bezier(0, 0, 0.2, 1)
```

### Common Transitions
```css
/* Fade */
transition: opacity 200ms ease;

/* Slide */
transition: transform 200ms ease;

/* Color change */
transition: background-color 200ms ease, border-color 200ms ease;

/* All */
transition: all 200ms ease;
```

---

## 📱 Responsive Breakpoints

```
Mobile: 320px - 639px (sm)
Tablet: 640px - 1023px (md)
Desktop: 1024px - 1279px (lg)
Wide: 1280px+ (xl)
```

---

## 🌗 Dark Mode

- Toggle via system preference or manual switch
- All colors have light/dark variants
- Tailwind's `dark:` prefix used throughout
- Contrast ratio maintained at WCAG AA minimum

---

## 🎯 Design Tokens (Tailwind Config)

### Custom Colors (if needed)
```js
extend: {
  colors: {
    primary: '#3B82F6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
  }
}
```

---

## 📐 Layout Grid

- Base: 8px grid system
- Container: max-w-6xl (1152px)
- Padding: 16px mobile, 32px desktop
- Gap (grid/flex): 16px-24px

---

## ✨ Shadow System

```css
/* Small */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Medium */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Large */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

/* Extra Large */
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
```

---

## 🔍 Visual Hierarchy

1. **Primary Actions** - Filled primary button
2. **Secondary Actions** - Outline/secondary button
3. **Content** - Body text, cards
4. **Supporting Info** - Small text, badges, captions

---

## 💡 Component Do's and Don'ts

### DO ✅
- Use consistent spacing (multiples of 4px)
- Maintain color contrast (WCAG AA)
- Include focus states for accessibility
- Use semantic HTML
- Add clear feedback (hover, active, disabled states)

### DON'T ❌
- Mix different spacing systems
- Use colors without purpose
- Forget disabled/loading states
- Rely on color alone for information
- Add unnecessary shadows/borders

---

## 🚀 Implementation Notes

- Tailwind CSS already configured with Shadcn/ui
- Use `cn()` utility for class merging
- Component props for size/variant control
- CSS variables for theming (in globals.css)
