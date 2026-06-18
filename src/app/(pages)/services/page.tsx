import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Digital Marketing Services | Full-Service Agency',
  description: 'Explore Vswot\'s full suite of digital marketing services — SEO, performance marketing, web development, social media, content marketing, graphic design, and video production.',
  path: '/services',
});

const services = [
  {
    slug: 'website-development',
    icon: '💻',
    title: 'Website Development',
    desc: 'High-performance Next.js, React, and WordPress websites built to convert. Custom UI/UX, mobile-first, and SEO-ready.',
    tags: ['Next.js', 'React', 'WordPress', 'E-commerce'],
    color: 'from-cyan-500/10 to-blue-500/10',
    border: 'hover:border-cyan-500/40',
  },
  {
    slug: 'seo',
    icon: '📈',
    title: 'SEO',
    desc: 'Technical SEO, on-page optimisation, link building, and content strategy that drives sustainable organic growth.',
    tags: ['Technical SEO', 'Link Building', 'Content'],
    color: 'from-green-500/10 to-emerald-500/10',
    border: 'hover:border-green-500/40',
  },
  {
    slug: 'local-seo',
    icon: '📍',
    title: 'Local SEO',
    desc: 'Dominate Google Maps, the Local 3-Pack, and "near me" searches. Drive calls, visits, and local leads.',
    tags: ['Google Maps', 'GBP', 'Citations'],
    color: 'from-teal-500/10 to-green-500/10',
    border: 'hover:border-teal-500/40',
  },
  {
    slug: 'geo-aeo',
    icon: '🤖',
    title: 'GEO/AEO Optimisation',
    desc: 'Get your brand cited in ChatGPT, Perplexity, and Google AI Overviews. Future-proof your search visibility.',
    tags: ['AI Search', 'Featured Snippets', 'Voice'],
    color: 'from-violet-500/10 to-purple-500/10',
    border: 'hover:border-violet-500/40',
  },
  {
    slug: 'performance-marketing',
    icon: '🎯',
    title: 'Performance Marketing',
    desc: 'Google Ads and Meta Ads campaigns managed for maximum ROAS. Full-funnel paid strategy from awareness to conversion.',
    tags: ['Google Ads', 'Meta Ads', 'ROAS'],
    color: 'from-brand/10 to-fuchsia-500/10',
    border: 'hover:border-brand/40',
  },
  {
    slug: 'social-media-marketing',
    icon: '📱',
    title: 'Social Media Marketing',
    desc: 'Strategic organic social across Instagram, LinkedIn, Facebook, and YouTube. Content creation, community management, and growth.',
    tags: ['Instagram', 'LinkedIn', 'YouTube'],
    color: 'from-pink-500/10 to-rose-500/10',
    border: 'hover:border-pink-500/40',
  },
  {
    slug: 'content-marketing',
    icon: '✍️',
    title: 'Content Marketing',
    desc: 'SEO blog content, long-form guides, case studies, and email sequences that build authority and generate leads.',
    tags: ['SEO Content', 'Blogs', 'Email'],
    color: 'from-amber-500/10 to-yellow-500/10',
    border: 'hover:border-amber-500/40',
  },
  {
    slug: 'graphic-design',
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Brand identity, marketing materials, social graphics, and UI design that makes your business look world-class.',
    tags: ['Branding', 'Social Graphics', 'UI/UX'],
    color: 'from-orange-500/10 to-red-500/10',
    border: 'hover:border-orange-500/40',
  },
  {
    slug: 'video-editing',
    icon: '🎬',
    title: 'Video Editing',
    desc: 'Short-form Reels, YouTube content, brand films, and ad creatives. Fast turnaround, cinematic quality.',
    tags: ['Reels', 'YouTube', 'Brand Films'],
    color: 'from-red-500/10 to-pink-500/10',
    border: 'hover:border-red-500/40',
  },
];

export default function ServicesPage() {
  const jsonLd = breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-xl relative z-10 text-center">
          <Breadcrumb items={[{ label: 'Services' }]} className="mb-8 justify-center" />
          <span className="eyebrow mb-4 inline-block">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Grow Online</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            From your first website to full-scale digital marketing — Vswot is the only agency you'll ever need. One team, unified strategy, measurable results.
          </p>
          <Link href="/contact" className="btn-primary">Get Free Strategy Call →</Link>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`card-base p-7 group transition-all ${service.border} bg-gradient-to-br ${service.color}`}
              >
                <span className="text-4xl mb-5 block">{service.icon}</span>
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h2>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{service.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-brand text-sm font-medium group-hover:gap-3 flex items-center gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us strip */}
      <section className="py-24 bg-surface-1/30">
        <div className="container-xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white">One Agency, Unified Strategy</h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">Working with multiple agencies creates gaps in strategy. Vswot integrates every channel for compounding, not competing, results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🔗', title: 'Integrated Strategy', desc: 'Your SEO, paid ads, content, and social work together — not in silos.' },
              { icon: '📊', title: 'Unified Reporting', desc: 'One dashboard, one report, one clear view of ROI across every channel.' },
              { icon: '🚀', title: 'Faster Results', desc: 'Coordinated campaigns compound — learnings from ads inform content, SEO insights fuel social.' },
            ].map((item) => (
              <div key={item.title} className="card-base p-7 text-center">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Book a free 30-minute strategy call to discuss which services will move the needle most for your business.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">Get Free Strategy Call →</Link>
            <Link href="/portfolio" className="btn-secondary text-lg px-10 py-4">View Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
