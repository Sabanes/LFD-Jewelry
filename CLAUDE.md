# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Development server**: `npm run dev` - Start the Next.js development server
- **Build**: `npm run build` - Build the production application
- **Start production**: `npm run start` - Start the production server
- **Lint**: `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a **Next.js 15** jewelry company website (LFD Jóias) with the following key characteristics:

### Framework & Structure
- **Next.js App Router** - Uses the modern app directory structure (`src/app/`)
- **Internationalization** - Bilingual site (Portuguese/English) using custom i18n implementation with `next-i18next`
- **TypeScript support** - Mixed JS/TS codebase with TypeScript configuration

### Key Technologies
- **GSAP** - Advanced scroll-based animations and carousel transitions using ScrollTrigger
- **Lenis** - Smooth scrolling library for enhanced user experience
- **Cloudinary** - All images are hosted on Cloudinary CDN (`res.cloudinary.com/dcraqvlmb/`)
- **EmailJS** - Client-side email functionality for contact forms

### Application Structure

#### Pages & Routing
- **Homepage** (`/`) - Hero section with GSAP-powered scroll animations
- **About** (`/sobre-nos`) - Company information page
- **Brands** (`/marcas`) - Showcase of jewelry brands with carousel
- **Celebrities** (`/celebridade`) - Celebrity endorsements
- **Events** (`/evento`) - Company events
- **Contacts** (`/contactos`) - Contact form and information

#### Core Components
- **Navbar** - Responsive navigation with language switcher and scroll-hide behavior
- **ShuffleText** - Text animation component
- **Carousel system** - Complex GSAP-based image carousel with clip-path animations

#### Internationalization
- Custom i18n context (`LanguageProvider`) in `src/app/i18n/`
- Dictionary-based translations in `dictionaries.js`
- Language switching between Portuguese (default) and English
- Configuration in `next-i18next.config.js` with locales: `['pt', 'en']`

### Animation & Scroll System
The homepage features a sophisticated scroll-based carousel system:
- Uses GSAP ScrollTrigger for pinned scroll sections
- Clip-path animations for slide transitions
- Carousel data defined in `carouselItems.js` with brand information
- Smooth scrolling implemented with Lenis library

### SEO & Metadata
- Comprehensive SEO setup with Open Graph and Twitter cards
- Structured data (JSON-LD) for organization information
- Canonical URLs and proper meta tags
- Custom fonts from Fontshare (Zodiak and Plus Jakarta Sans)

### Development Notes
- Images are externally hosted on Cloudinary - no local image assets
- Mixed file extensions (.jsx, .js, .css) throughout the project
- Error handling in language context to prevent crashes
- Responsive design with mobile-first approach