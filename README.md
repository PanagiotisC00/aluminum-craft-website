# Aluminum Fabricator Website - Cyprus

A professional, SEO-optimized, bilingual (English & Greek) brochure-style website for aluminum fabrication services in Cyprus.

## 🚀 Features

- **Bilingual Support**: English and Greek translations with seamless language switching
- **SEO Optimized**: Complete meta tags, structured data, and sitemap generation  
- **Mobile-First Responsive**: Optimized for all device sizes
- **Modern Design**: Clean, professional aesthetic with aluminum-themed color palette
- **Interactive Components**: Smooth animations, lightbox gallery, contact form
- **Performance Optimized**: Next.js Image optimization, lazy loading, fast loading times

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Internationalization**: next-i18next
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Formspree integration
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
airs_company/
├── components/           # React components
│   ├── Navbar.tsx       # Navigation with language switcher
│   ├── Hero.tsx         # Hero section with CTA
│   ├── About.tsx        # Company information
│   ├── Services.tsx     # Service offerings
│   ├── Gallery.tsx      # Portfolio with lightbox
│   ├── ContactForm.tsx  # Contact form with validation
│   └── Footer.tsx       # Footer with links
├── pages/               # Next.js pages
│   ├── index.tsx        # Main landing page
│   ├── _app.tsx         # App wrapper with i18n
│   └── _document.tsx    # Custom document for SEO
├── public/              # Static assets
│   ├── locales/         # Translation files
│   │   ├── en/common.json
│   │   └── el/common.json
│   └── images/          # Website images
├── styles/              # Global styles
│   └── globals.css      # Tailwind + custom CSS
└── config files         # Next.js, Tailwind, TypeScript configs
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
corepack pnpm install
```

### 2. Add Images

Place the required images in the `public/images/` directory. See `public/images/placeholder.txt` for the complete list.

### 3. Configure Contact Form

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` for local testing, or in Vercel for production.
4. Keep the placeholder value locally if you do not want local submissions to reach Formspree.

### 4. Development Server

```bash
corepack pnpm run dev
```

Visit `http://localhost:3000` to see the website.

### 5. Build for Production

```bash
corepack pnpm run build
```

## 🧪 Local Testing

Run all tests locally only. Do not point tests at Vercel preview, staging, production, or any external deployment URL.

```bash
corepack pnpm run lint
corepack pnpm run typecheck
corepack pnpm run test:unit
corepack pnpm run test:e2e
corepack pnpm run build
```

Playwright starts the app on `http://127.0.0.1:3001` with a placeholder Formspree ID so E2E tests do not submit to the live form endpoint. See `doc/testing.md` for the full local testing runbook.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables for the public site URL and Formspree form ID
4. Let Vercel detect pnpm from `pnpm-lock.yaml`, or set the install command to `corepack pnpm install --frozen-lockfile`
5. Deploy automatically on every push

### Custom Domain Setup

1. Purchase your domain (e.g., `aluminumcraftcy.com`)
2. Configure DNS settings in Vercel
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel to the final public origin, for example `https://www.example.com`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Leave this placeholder locally to prevent accidental live form submissions.
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

For production, set these in your hosting provider's environment variables.

### Customization

#### Colors & Styling
- Edit `tailwind.config.js` to modify the color palette
- Update `styles/globals.css` for custom component styles

#### Content & Translations
- Modify `public/locales/en/common.json` for English content
- Modify `public/locales/el/common.json` for Greek content

#### SEO & Meta Data
- Update structured data in `pages/index.tsx`
- The sitemap is served from `pages/api/sitemap.xml.js` and uses `NEXT_PUBLIC_SITE_URL`

## 📧 Contact Form Setup

The contact form uses Formspree for backend handling. No server required!

1. Create a free [Formspree](https://formspree.io) account
2. Set up a new form project
3. Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` or the Vercel dashboard
4. Test local form behavior only with a local/test Formspree ID

## 🎨 Design System

### Color Palette
- **Primary**: Neutral grays and metallics
- **Accent**: Professional blue shades
- **Aluminum**: Specific aluminum-themed colors

### Typography
- **Font**: Inter (loaded from Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Readable sizes with good line height

### Components
- Reusable button styles (`btn-primary`, `btn-secondary`)
- Consistent spacing with Tailwind utilities
- Smooth transitions and hover effects

## 📱 Features Overview

### Navigation
- Responsive navbar with mobile menu
- Language switcher (EN/EL)
- Smooth scroll navigation

### Hero Section
- Full-screen background image
- Compelling headline and CTA buttons
- Company statistics display

### About Section
- Company story and values
- Workshop imagery
- Trust indicators

### Services Section
- Four main service categories
- Icon-based layout
- Hover animations

### Gallery
- Filterable portfolio grid
- Lightbox modal for image viewing
- Category-based organization

### Contact
- Validated contact form
- Company information display
- Multiple contact methods

### Footer
- Quick navigation links
- Contact information
- Language switcher
- Legal links

## 🚀 Performance

- **Next.js Image**: Automatic optimization and lazy loading
- **Code Splitting**: Automatic by Next.js
- **Animations**: Optimized with Framer Motion
- **SEO**: Complete meta tags and structured data
- **Accessibility**: Semantic HTML and ARIA labels

## 📊 SEO Features

- Complete meta tag implementation
- Open Graph and Twitter Card tags
- JSON-LD structured data for local business
- Automatic sitemap generation
- Multi-language SEO support
- Performance-optimized loading

## 🛡️ Security

- Security headers, including Content Security Policy
- XSS protection
- Secure form handling
- Safe external link policies

## 📄 License

This project is created for Aluminum Craft Cyprus. All rights reserved.

## 🤝 Support

For technical support or customizations, contact the development team.

---

**Built with ❤️ using modern web technologies for Cyprus aluminum fabrication industry.** 
