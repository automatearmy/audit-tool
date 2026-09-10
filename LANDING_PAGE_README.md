# Calibre Audits Landing Page

## Overview
A sleek, modern, interactive one-page landing page for Calibre Audits - Hotel Audit Management Platform.

## Color Scheme
Based on your logo design:
- **Primary Dark:** `#1a1a2e` - Main background
- **Gold/Accent:** `#C9A84C` - Primary brand color, CTAs, highlights
- **White:** `#FFFFFF` - Text and contrast
- **Purple-Gray:** `#8888aa` - Secondary text, subtle accents

## Page Sections

### 1. Hero (`/app/components/Hero.tsx`)
- Full-screen hero with animated logo recreation
- Main heading with brand colors
- Two CTAs: "Get Started Today" and "Learn More"
- Scroll indicator that fades out on scroll (implemented!)
- Smooth fade-in animations on load

### 2. Problem (`/app/components/Problem.tsx`)
- "Hotel Audits Are Broken" messaging
- 4 problem cards with icons:
  - Manual Audit Chaos
  - Time-Consuming Processes
  - Lack of Visibility
  - Compliance Risks
- Hover effects with gold borders

### 3. Solution (`/app/components/Solution.tsx`)
- "Meet Calibre Audits" section
- Split layout with benefits and stats
- Key value propositions with checkmarks
- Live stats display (97% completion, 65% time saved, 4.9/5 rating)

### 4. Features (`/app/components/Features.tsx`)
- 6 feature cards in responsive grid:
  - Mobile-First Auditing
  - Smart Analytics
  - Compliance Tracking
  - Team Collaboration
  - Enterprise Security
  - Seamless Integrations
- Each card lists sub-benefits
- Hover effects with scale and glow

### 5. Product Demo (`/app/components/ProductDemo.tsx`)
- Placeholder for demo video/screenshots
- 3-step process overview
- Ready for you to add media content later

### 6. Testimonials (`/app/components/Testimonials.tsx`)
- 3 testimonial cards
- 5-star ratings
- Client names, roles, and companies
- Hover effects with gold borders

### 7. FAQ (`/app/components/FAQ.tsx`)
- 6 common questions with accordion functionality
- Click to expand/collapse answers
- Topics: implementation, offline mode, customization, integrations, security, support

### 8. CTA (`/app/components/CTA.tsx`)
- Final call-to-action section
- "Reach Out to Sales" primary button (mailto link)
- "Request a Demo" secondary button
- Trust indicators (no credit card, 5-day setup, cancel anytime)
- Footer with copyright

## Features Implemented

✅ **Fully Responsive Design** - Looks great on mobile, tablet, and desktop
✅ **Smooth Scroll Behavior** - Anchor links scroll smoothly
✅ **Intersection Observer Animations** - Sections fade in as you scroll
✅ **Scroll-Triggered Effects** - Scroll indicator fades out on scroll
✅ **Interactive Hover States** - All buttons and cards have engaging hover effects
✅ **Clean Component Architecture** - Each section is a separate component
✅ **Color Consistency** - Uses your exact brand colors throughout
✅ **Accessibility** - Semantic HTML, proper contrast ratios
✅ **Performance** - Client-side components only where needed

## File Structure
```
/app
  /components
    Hero.tsx
    Problem.tsx
    Solution.tsx
    Features.tsx
    ProductDemo.tsx
    Testimonials.tsx
    FAQ.tsx
    CTA.tsx
  page.tsx       (main page importing all components)
  layout.tsx     (updated metadata)
  globals.css    (brand colors and animations)
```

## Next Steps
- Add actual product screenshots/video to ProductDemo section
- Connect real email backend for CTA forms
- Add analytics tracking
- Consider adding a navigation bar if needed
- Optimize images and add proper alt text

## Tech Stack
- Next.js 16.3.4
- React 19
- Tailwind CSS 4
- TypeScript

---

Built with ❤️ for Calibre Audits
