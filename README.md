# PLTS Qatar — Modern Website

A modern, production-ready website for **Power Lead Technical Services Co. WLL** built with Next.js 16, React, Tailwind CSS, TypeScript, and Framer Motion.

## Tech Stack

| Technology      | Purpose                        |
| --------------- | ------------------------------ |
| Next.js 16      | Framework (App Router, SSG)    |
| React           | UI library                     |
| TypeScript      | Type safety                    |
| Tailwind CSS    | Styling                        |
| Framer Motion   | Animations                     |
| Next.js Image   | Image optimization             |
| Next.js Metadata| SEO (Open Graph, JSON-LD)      |

## Pages

| Route       | Page            |
| ----------- | --------------- |
| `/`         | Home            |
| `/about`    | About Us        |
| `/services` | Services        |
| `/products` | Products        |
| `/projects` | Projects        |
| `/clients`  | Clients         |
| `/contact`  | Contact Us      |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── about/
│   │   ├── page.tsx
│   │   └── TeamSection.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── ServicesDetail.tsx
│   ├── products/
│   │   ├── page.tsx
│   │   └── ProductsGrid.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── ProjectsContent.tsx
│   ├── clients/
│   │   ├── page.tsx
│   │   └── ClientsContent.tsx
│   └── contact/
│       ├── page.tsx
│       └── GoogleMap.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── PageHero.tsx
│   ├── SectionHeader.tsx
│   ├── ServiceCard.tsx
│   ├── StatsSection.tsx
│   ├── ClientLogos.tsx
│   └── ContactForm.tsx
└── lib/
    └── constants.ts        # All business data
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import the GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Your site will be live at `your-project.vercel.app`

### Custom Domain

In the Vercel dashboard:
1. Go to **Settings → Domains**
2. Add your domain (e.g., `pltsqatar.com`)
3. Follow DNS instructions to point your domain to Vercel

## Customization

### Business Data

All company information, services, products, team, and clients data are in `src/lib/constants.ts`. Update this single file to change content across the entire site.

### Images

Replace placeholder images in `/public/images/` with actual images:
- Client logos: `/public/images/clients/`
- Hero banners: `/public/images/`
- Team photos: `/public/images/team/`

### Colors

Brand colors are defined in `src/app/globals.css` under `@theme inline`. Update the CSS custom properties to match your brand:

```css
--color-primary: #1a365d;
--color-secondary: #e67e22;
```

### Contact Form

The contact form at `src/components/ContactForm.tsx` currently simulates submission. To integrate with a real backend:

1. Replace the `handleSubmit` function with an API call
2. Create an API route at `src/app/api/contact/route.ts`
3. Or integrate with services like Formspree, EmailJS, or SendGrid

## SEO Features

- ✅ Dynamic metadata per page
- ✅ JSON-LD structured data
- ✅ Open Graph tags
- ✅ Proper heading hierarchy
- ✅ Auto-generated sitemap (`/sitemap.xml`)
- ✅ Auto-generated robots.txt (`/robots.txt`)
- ✅ Semantic HTML
- ✅ Static generation (SSG) for all pages

## Performance

- ✅ Static Site Generation (all pages pre-rendered)
- ✅ Image optimization (AVIF, WebP)
- ✅ Code splitting (automatic with Next.js)
- ✅ Font optimization (Inter via `next/font`)
- ✅ Compression enabled
- ✅ Lazy loading (Framer Motion viewport-based animations)

## License

© Power Lead Technical Services Co. WLL. All rights reserved.
