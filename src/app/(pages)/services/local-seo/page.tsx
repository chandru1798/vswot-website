import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Local SEO Services | Dominate Local Search Results',
  description: 'Local SEO services to dominate Google Maps and local search results. Google Business Profile optimisation, local citations, and geo-targeted content to drive foot traffic and leads.',
  path: '/services/local-seo',
});

const features = [
  { icon: '📍', title: 'Google Business Profile', desc: 'Complete GBP optimisation — categories, attributes, photos, posts, Q&A management, and review strategies to rank in the Local 3-Pack.' },
  { icon: '🗺️', title: 'Local Citation Building', desc: 'NAP-consistent citations across 100+ authoritative local directories. Audit, clean, and build citations that signal local authority to Google.' },
  { icon: '⭐', title: 'Review Management', desc: 'Systematic review generation strategies, ORM monitoring, and professional response templates across Google, Justdial, and IndiaMART.' },
  { icon: '📝', title: 'Local Content Strategy', desc: 'Geo-targeted landing pages, neighbourhood content, and local schema that convert search intent into calls and store visits.' },
  { icon: '🔗', title: 'Local Link Building', desc: 'Partnerships with local media, sponsorships, and chamber memberships that build domain authority in your service area.' },
  { icon: '📊', title: 'Rank Tracking & Reporting', desc: 'Weekly rank tracking across local keywords, GBP insights, and monthly reporting showing ROI — calls, clicks, and direction requests.' },
];

const results = [
  { metric: '3-Pack', label: 'Ranking in 90 days avg.' },
  { metric: '4.2x', label: 'More calls from Google' },
  { metric: '180%', label: 'Avg. local traffic increase' },
  { metric: '500+', label: 'Local businesses ranked' },
];

const faqs = [
  { question: 'What is Local SEO and why does my business need it?', answer: 'Local SEO optimises your online presence to appear in location-based searches. 46% of all Google searches have local intent, and 76% of people who search for something nearby visit a business within a day.' },
  { question: 'How long does Local SEO take to show results?', answer: 'Most businesses see GBP improvements within 30–60 days and significant ranking increases within 90 days. Citation authority builds over 3–6 months.' },
  { question: 'Do you optimise Google Business Profile?', answer: 'Yes — complete GBP optimisation is the foundation of our local SEO service. We optimise every attribute, post weekly updates, and manage your review strategy.' },
  { question: 'Can you help multiple locations?', answer: 'Absolutely. We manage multi-location local SEO at scale — from 2 locations to 200+. Each location gets a dedicated strategy and individual tracking.' },
  { question: 'How do you track local SEO results?', answer: 'We track keyword rankings by location, GBP calls and direction requests, local pack visibility, citation coverage, and review ratings — all in monthly reports.' },
];

export default function LocalSeoPage() {
  const jsonLd = [
    serviceSchema({ name: 'Local SEO', description: 'Local SEO services to dominate Google Maps, local search results, and drive foot traffic.', url: 'https://vswot.com/services/local-seo' }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }, { name: 'Local SEO', url: 'https://vswot.com/services/local-seo' }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Local SEO' }]} className="mb-8" />
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 inline-block">Local SEO</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Own Your City on{' '}
              <span className="gradient-text">Google Maps</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              We help local businesses dominate the Google 3-Pack, rank for "near me" searches, and turn online visibility into real footfall, phone calls, and leads.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get Local SEO Audit →</Link>
              <Link href="/portfolio" className="btn-secondary">See Results</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {results.map(({ metric, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{metric}</div>
                <div className="text-sm text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">What's Included</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Complete Local SEO Coverage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-base p-7 group hover:border-brand/40 transition-all">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-1/30">
        <div className="container-xl max-w-3xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">FAQs</span>
            <h2 className="text-4xl font-display font-bold text-white">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-base p-6">
                <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Rank Locally?</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Get a free local SEO audit showing exactly where you're losing customers to competitors.</p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">Get Free Local SEO Audit →</Link>
        </div>
      </section>
    </>
  );
}
