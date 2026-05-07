# TechNerd Consulting — Frontend Architecture Plan v1

## Recommended Stack

Because TechNerd Consulting will live under GitHub Pages and Jekyll, the recommended stack is:

```text
Jekyll + SCSS + Vanilla JS
```

This should stay static-first and lightweight at launch.

Avoid initially:

- React
- Next.js
- heavy frameworks
- Tailwind as a dependency
- large JavaScript libraries

The priorities are:

- accessibility
- maintainability
- performance
- lightweight delivery
- sustainability

Static-first architecture aligns with the TechNerd brand: secure, accessible, human-centered, and systems-focused.

---

## Recommended Repository Structure

```text
/
├── _layouts/
│   ├── technerd-default.html
│   ├── technerd-page.html
│   └── technerd-legal.html
│
├── _includes/
│   ├── technerd-head.html
│   ├── technerd-nav.html
│   ├── technerd-footer.html
│   ├── technerd-cta.html
│   └── technerd-service-card.html
│
├── assets/
│   ├── css/
│   │   └── technerd.scss
│   ├── js/
│   │   └── technerd.js
│   └── images/
│       ├── logos/
│       ├── icons/
│       └── hero/
│
├── legal/
├── index.md
├── services.md
├── accessibility.md
├── process.md
├── faq.md
├── about.md
├── contact.md
└── request-consultation.md
```

---

## CSS Architecture

Use SCSS variables and design tokens from the beginning.

```scss
:root {
  --bg-primary: #111827;
  --bg-surface: #1F2937;
  --border-color: #374151;

  --text-primary: #F3F4F6;
  --text-secondary: #D1D5DB;

  --accent-primary: #67E8F9;
  --accent-secondary: #7DD3FC;

  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;

  --radius-md: 12px;
  --radius-lg: 18px;

  --shadow-soft: 0 4px 24px rgba(0, 0, 0, 0.2);

  --transition-fast: 180ms ease;
}
```

---

## Typography Scale

```scss
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-md: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.5rem;
--text-2xl: 2rem;
--text-3xl: 3rem;
--text-hero: 4rem;
```

Recommended font direction:

- Headings: Inter, IBM Plex Sans, or Manrope
- Body: Inter, Source Sans, Atkinson Hyperlegible, or IBM Plex Sans
- Monospace: IBM Plex Mono, used sparingly for workflows and technical snippets

---

## Layout System

Recommended max width:

```scss
max-width: 1280px;
```

Container:

```scss
.container {
  width: min(92%, 1280px);
  margin-inline: auto;
}
```

---

## Responsive Breakpoints

Use mobile-first CSS.

```text
768px   → tablet
1024px  → desktop
1440px  → large desktop
```

---

## Accessibility Framework

### Skip Link

```html
<a class="skip-link" href="#main-content">
  Skip to content
</a>
```

### Focus States

```scss
:focus-visible {
  outline: 3px solid var(--accent-primary);
  outline-offset: 3px;
}
```

### Reduced Motion

```scss
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

Accessibility should not be treated as a legal afterthought. It is part of the TechNerd product identity.

---

## Navbar Architecture

The navbar should include:

### Left

- Logo
- Wordmark

### Right

- Services
- Accessibility
- Process
- About
- FAQ
- Contact
- Request Consultation button

---

## Hero Architecture

### Left Side

- Headline
- Supporting text
- CTA buttons
- Trust indicators

### Right Side

- Abstract systems graphic
- Node visualization
- Optional subtle animation later, with reduced-motion fallback

---

## Service Card System

Each card includes:

- icon
- title
- short description
- learn more CTA

Cards should:

- stack vertically on mobile
- use two columns on tablet
- use four columns on desktop

---

## Button System

### Primary Button

```scss
background: var(--accent-primary);
color: #111827;
```

### Secondary Button

```scss
border: 1px solid var(--accent-primary);
background: transparent;
color: var(--accent-primary);
```

---

## Footer Architecture

Footer sections:

### Column 1

Brand summary

### Column 2

Quick links

### Column 3

Services

### Column 4

Legal and resources

### Column 5

Contact

---

## Performance Philosophy

Target goals:

- Lighthouse 90+
- minimal JavaScript
- no heavy frameworks
- optimized images
- semantic HTML first

This supports accessibility, sustainability, and maintainability.

---

## Homepage Build Order

### Phase 1

- layout
- nav
- footer
- typography
- color variables

### Phase 2

- hero
- CTA buttons
- service cards

### Phase 3

- accessibility section
- workflow section
- final CTA

### Phase 4

- responsiveness
- accessibility QA
- polish

---

## Asset Philosophy

Use:

- SVG logos
- SVG icons
- CSS gradients
- CSS shadows

Avoid:

- raster-heavy assets
- autoplay video
- giant background images
- unnecessary JavaScript

---

## Brand Consistency Rule

Every page should reinforce:

```text
Secure.
Accessible.
Human-centered.
Systems-focused.
```

This is the core identity for TechNerd Consulting.
