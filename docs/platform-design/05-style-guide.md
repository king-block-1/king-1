# Style Guide

## 1. Design Tokens

### 1.1 Colors
```typescript
// Primary Colors
--primary: #6366f1;      // Main brand color, used for CTAs and key elements
--secondary: #ec4899;    // Secondary brand color, used for accents and gradients

// Neutral Colors
--background: #ffffff;    // Light mode background
--foreground: #171717;   // Light mode text
--border: #e5e5e5;       // Light mode borders
--muted: #f5f5f5;        // Light mode muted backgrounds

// Dark Mode Colors
.dark {
  --background: #0a0a0a;
  --foreground: #ededed;
  --border: #262626;
  --muted: #171717;
}
```

### 1.2 Typography
```typescript
// Font Families
--font-sans: "Outfit";       // Primary font for UI (Google Fonts)
--font-mono: "JetBrains Mono";  // Monospace for code and technical content (Google Fonts)

// Font Sizes with Line Heights
text-xs: ["0.75rem", { lineHeight: "1rem" }];       // 12px - Auxiliary text
text-sm: ["0.875rem", { lineHeight: "1.25rem" }];   // 14px - Secondary text
text-base: ["1rem", { lineHeight: "1.5rem" }];      // 16px - Body text
text-lg: ["1.125rem", { lineHeight: "1.75rem" }];   // 18px - Large body text
text-xl: ["1.25rem", { lineHeight: "1.75rem" }];    // 20px - Small headings
text-2xl: ["1.5rem", { lineHeight: "2rem" }];       // 24px - Section headings
text-3xl: ["1.875rem", { lineHeight: "2.25rem" }];  // 30px - Major headings
text-4xl: ["2.25rem", { lineHeight: "2.5rem" }];    // 36px - Display headings
text-5xl: ["3rem", { lineHeight: "1" }];            // 48px - Hero headings
text-6xl: ["3.75rem", { lineHeight: "1" }];         // 60px - Large hero headings

// Font Weights
font-normal: 400;    // Regular text - Body content
font-medium: 500;    // Emphasized text - Important content
font-semibold: 600;  // Sub-headings - Section titles
font-bold: 700;      // Headings - Main titles

// Line Heights
--line-height-tight: 1;      // Headings
--line-height-snug: 1.25;    // Compact text
--line-height-normal: 1.5;   // Body text
--line-height-relaxed: 1.75; // Large text

// Letter Spacing
--tracking-tight: -0.025em;  // Headings
--tracking-normal: 0em;      // Body text
--tracking-wide: 0.025em;    // All caps text

// Semantic HTML Base Styles
h1 {
  @apply text-4xl font-bold md:text-5xl lg:text-6xl tracking-tight;
}

h2 {
  @apply text-3xl font-bold md:text-4xl tracking-tight;
}

h3 {
  @apply text-2xl font-semibold md:text-3xl tracking-tight;
}

h4 {
  @apply text-xl font-semibold md:text-2xl;
}

p {
  @apply text-base leading-relaxed;
}

small {
  @apply text-sm leading-normal;
}
```

### 1.3 Spacing
```typescript
// Base Spacing Units
gap-2: 0.5rem;    // 8px  - Minimal spacing
gap-4: 1rem;      // 16px - Default component spacing
gap-6: 1.5rem;    // 24px - Section padding
gap-8: 2rem;      // 32px - Large component spacing
gap-16: 4rem;     // 64px - Section spacing
gap-24: 6rem;     // 96px - Major section spacing

// Container
max-w-7xl: 80rem;  // 1280px - Maximum content width
px-6: 1.5rem;      // 24px - Container padding
```

### 1.4 Border Radius
```typescript
--radius: 0.5rem;                     // 8px - Base radius
rounded-sm: calc(var(--radius) - 4px);
rounded-md: calc(var(--radius) - 2px);
rounded-lg: var(--radius);
rounded-xl: 0.75rem;                  // 12px
rounded-2xl: 1rem;                    // 16px
rounded-3xl: 1.5rem;                  // 24px
rounded-full: 9999px;                 // Circular elements
```

## 2. Component Patterns

### 2.1 Buttons
```typescript
// Base Button
.button {
  rounded-full
  font-medium
  transition-colors
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-primary
  focus-visible:ring-offset-2
  disabled:pointer-events-none
  disabled:opacity-50
}

// Variants
primary: "bg-primary text-white hover:bg-primary/90"
secondary: "bg-secondary text-white hover:bg-secondary/90"
outline: "border border-black/[.08] dark:border-white/[.145] hover:bg-black/[.05]"
ghost: "hover:bg-black/[.05] dark:hover:bg-white/[.06]"

// Sizes
sm: "h-9 px-4 text-sm"
md: "h-11 px-6 text-sm"
lg: "h-12 px-8 text-base"
```

### 2.2 Section Layouts
```typescript
// Standard Section
.section {
  py-24
  relative
}

// Container
.container {
  max-w-7xl
  mx-auto
  px-6
}

// Section Header
.section-header {
  flex
  flex-col
  items-center
  text-center
  gap-8
  mb-16
}
```

### 2.3 Card Patterns
```typescript
// Base Card
.card {
  flex
  flex-col
  gap-4
  p-6
  rounded-2xl
  border
  border-black/[.08]
  dark:border-white/[.08]
  hover:border-primary/50
  transition-colors
}
```

## 3. Layout Guidelines

### 3.1 Mobile-First Approach
```typescript
// Container Padding
px-4 sm:px-6        // Mobile: 16px, Tablet+: 24px

// Vertical Spacing
py-16 md:py-24      // Mobile: 64px, Desktop: 96px
gap-6 md:gap-8      // Mobile: 24px, Desktop: 32px
mb-12 md:mb-16      // Mobile: 48px, Desktop: 64px

// Typography Scaling
text-3xl md:text-4xl // Mobile: 30px, Desktop: 36px
text-lg md:text-xl   // Mobile: 18px, Desktop: 20px

// Button Layouts
w-full sm:w-auto    // Full width on mobile, auto on tablet+
flex-col sm:flex-row // Stack on mobile, row on tablet+
```