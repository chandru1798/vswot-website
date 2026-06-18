# Vswot — Premium Digital Marketing Agency Website

> Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion & Sanity CMS

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+
- npm / yarn / pnpm
- Sanity account (free at sanity.io)

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token

RESEND_API_KEY=your_resend_key
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210

NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://vswot.com
```

### 3. Set Up Sanity CMS

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Log in to Sanity
sanity login

# Create a new project (or link existing)
sanity init --env

# Push schema to Sanity
sanity schema deploy
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Sanity Studio** is available at [http://localhost:3000/studio](http://localhost:3000/studio)

---

## 📁 Project Structure

```
vswot/
├── public/                    # Static assets
│   ├── icons/                 # PWA icons
│   ├── images/                # Static images
│   └── manifest.json          # PWA manifest
├── sanity/
│   └── schemas/               # Sanity content schemas
│       ├── blogPost.ts
│       ├── caseStudy.ts
│       └── index.ts           # testimonial, teamMember, faq, clientLogo, service
├── src/
│   ├── app/
│   │   ├── (pages)/           # Route group (no layout nesting)
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   │   └── [slug]/
│   │   │   ├── contact/
│   │   │   ├── portfolio/
│   │   │   ├── privacy-policy/
│   │   │   ├── services/
│   │   │   │   ├── page.tsx               # Services overview
│   │   │   │   ├── seo/
│   │   │   │   ├── local-seo/
│   │   │   │   ├── geo-aeo/
│   │   │   │   ├── performance-marketing/
│   │   │   │   ├── social-media-marketing/
│   │   │   │   ├── content-marketing/
│   │   │   │   ├── website-development/
│   │   │   │   ├── graphic-design/
│   │   │   │   └── video-editing/
│   │   │   └── terms-conditions/
│   │   ├── api/
│   │   │   └── contact/route.ts   # Contact form API
│   │   ├── studio/                # Embedded Sanity Studio
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   ├── sitemap.ts             # Dynamic sitemap
│   │   └── robots.ts              # Dynamic robots.txt
│   ├── components/
│   │   ├── animations/            # PageTransition, AnimateIn
│   │   ├── layout/                # Header, Footer
│   │   ├── sections/              # Homepage section components
│   │   └── ui/                    # WhatsAppButton, StickyCtaButton, Breadcrumb
│   ├── lib/
│   │   ├── sanity.ts              # Sanity client + GROQ queries
│   │   ├── seo.ts                 # Metadata + JSON-LD schemas
│   │   └── utils.ts               # Utility functions
│   ├── styles/
│   │   └── globals.css            # CSS variables, utility classes
│   └── types/
│       └── index.ts               # TypeScript interfaces
├── next.config.ts
├── tailwind.config.ts
├── sanity.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## 🌐 Deployment (Vercel)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial Vswot website build"
git remote add origin https://github.com/yourusername/vswot.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Add all environment variables from `.env.local`
4. Deploy

### 3. Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add `vswot.com` and `www.vswot.com`
3. Update DNS records as instructed

### 4. Post-deployment Checklist

- [ ] Verify sitemap at `vswot.com/sitemap.xml`
- [ ] Verify robots.txt at `vswot.com/robots.txt`
- [ ] Submit sitemap in Google Search Console
- [ ] Test contact form (check Resend dashboard)
- [ ] Verify GA4 is tracking (check Realtime in GA)
- [ ] Test mobile on BrowserStack or real device
- [ ] Run Lighthouse audit (target 95+)
- [ ] Set up Vercel Analytics

---

## 📱 Sanity CMS — Content Management

### Access Your Studio
- Development: `http://localhost:3000/studio`
- Production: `https://vswot.com/studio`

### Content Types

| Type | Purpose | URL |
|------|---------|-----|
| Blog Post | Marketing blog articles | `/blog/[slug]` |
| Case Study | Client results | `/portfolio/[slug]` |
| Testimonial | Client reviews | Homepage slider |
| Team Member | About Us team grid | `/about` |
| FAQ | FAQ accordion | Homepage + service pages |
| Client Logo | Trusted By marquee | Homepage |
| Service | Service content | Services pages |

### Recommended First Steps
1. Add 6 team members with photos and bios
2. Upload 10+ client logos
3. Add 8–10 testimonials with ratings
4. Publish 3 blog posts
5. Add 2–3 case studies

---

## 🔧 Additional Packages to Install

```bash
# Portable text rendering for blog content
npm install @portabletext/react

# Form validation (already in package.json)
npm install react-hook-form @hookform/resolvers zod

# If using reCAPTCHA for contact form
npm install react-google-recaptcha-v3

# Sanity code input plugin
npm install @sanity/code-input
```

---

## 📊 Performance Targets

| Metric | Target | How Achieved |
|--------|--------|--------------|
| LCP | < 1.5s | Next.js Image, CDN, preload |
| FID / INP | < 100ms | Minimal JS, deferred loading |
| CLS | < 0.1 | Fixed dimensions, no layout shift |
| Lighthouse | 95+ | All of the above |
| Bundle size | < 200KB gzip | Code splitting, tree shaking |

---

## ✍️ Content Strategy Recommendations

### SEO Content Pillars
1. **Digital Marketing** — Hub: "Complete Guide to Digital Marketing in India"
2. **SEO** — Hub: "SEO in 2025: The Complete Playbook"
3. **Performance Marketing** — Hub: "Google Ads + Meta Ads Strategy Guide"
4. **Local SEO** — Hub: "Local SEO for Indian Businesses"
5. **GEO/AEO** — Hub: "How to Rank in AI Search"

### Blog Publishing Cadence
- **Week 1:** SEO/Technical article (high search volume)
- **Week 2:** Case study or results breakdown
- **Week 3:** Platform-specific how-to (Google Ads, Meta, etc.)
- **Week 4:** Industry news/trend analysis

### Content Types for Authority
- Original research / surveys
- Client case studies with real numbers
- Tool comparisons (best SEO tools, etc.)
- Free calculators (ROAS calculator, SEO ROI calculator)
- Ultimate guides (10,000+ words) for pillar pages

---

## 🎯 Conversion Rate Optimisation Recommendations

### Quick Wins (Implement Week 1)
1. **Exit Intent Popup** — "Get a free SEO audit before you go" with email capture
2. **Live Chat** — Intercom or Crisp for real-time lead capture
3. **Trust Badges** — Google Partner, Meta Business Partner badges in header/footer
4. **Social Proof Ticker** — "Vswot just helped [Client] grow traffic by 320%" notifications

### Hero Section Optimisation
- A/B test: "Get Free Strategy Call" vs "Get Free SEO Audit" CTA text
- Add a trust signal below CTA: "No commitment. 30-minute call."
- Video testimonial in hero for high-intent pages

### Lead Magnet Ideas
1. "2025 Digital Marketing Audit Checklist" (PDF) — gated with email
2. "ROAS Calculator" — interactive tool → lead capture
3. "Local SEO Starter Kit" — targeting local businesses
4. "Content Calendar Template" — for content marketing service

### Contact Page Optimisation
- Add Calendly embed for direct booking (reduces friction)
- Show average response time: "We reply within 2 hours on business days"
- Add video from founder/team for trust
- Include client logos above the form

### Service Page Optimisation
- Add pricing anchors ("Projects from ₹X") to qualify leads
- Include ROI calculator for SEO and paid ads pages
- Add comparison table vs hiring in-house or competitor agencies
- Case study excerpt relevant to each service

### Technical CRO
- Implement scroll depth tracking in GA4
- Set up conversion events: form_submit, whatsapp_click, calendly_open
- Heatmaps with Hotjar or Microsoft Clarity (both free tiers)
- Record sessions to identify UX drop-off points

---

## 🛡️ Security Checklist

- [ ] Environment variables never committed to git
- [ ] Sanity API token has read-only permissions for public queries
- [ ] Contact form rate-limited (implement with Upstash Redis or Vercel KV)
- [ ] reCAPTCHA v3 on contact and newsletter forms
- [ ] Content Security Policy headers (configured in next.config.ts)
- [ ] Regular dependency updates (`npm audit`)

---

## 📞 Support

For technical questions about this codebase, contact the development team at dev@vswot.com.

---

*Built with ❤️ by Vswot*
