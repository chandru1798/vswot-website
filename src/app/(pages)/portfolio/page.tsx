import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Portfolio & Case Studies | Client Results That Speak for Themselves',
  description: 'Real results for real businesses. Explore Vswot\'s case studies across SEO, performance marketing, web development, and social media.',
  path: '/portfolio',
});

// Static showcase data (replace with Sanity queries in production)
const caseStudies = [
  {
    id: '1',
    category: 'SEO + Content Marketing',
    client: 'TechFlow SaaS',
    title: 'From 2K to 45K Monthly Organic Visitors in 9 Months',
    desc: 'Rebuilt site architecture, created 80+ SEO articles, and executed a link building campaign that drove a 2,150% increase in organic traffic.',
    results: [
      { metric: '2,150%', label: 'Traffic Growth' },
      { metric: '#1', label: 'for 12 Keywords' },
      { metric: '340%', label: 'Lead Increase' },
    ],
    tags: ['SEO', 'Content Marketing', 'Technical SEO'],
    color: 'from-green-500/10 to-cyan-500/10',
    border: 'border-green-500/20',
  },
  {
    id: '2',
    category: 'Performance Marketing',
    client: 'Urban Fitness Co.',
    title: '4.8x ROAS on Meta Ads for Fitness Brand Launch',
    desc: 'Full-funnel Meta Ads strategy — awareness Reels, retargeting carousels, and dynamic product ads — that launched a new fitness brand to ₹2.4Cr in month 3.',
    results: [
      { metric: '4.8x', label: 'ROAS' },
      { metric: '₹2.4Cr', label: 'Revenue Month 3' },
      { metric: '62%', label: 'Lower CPA' },
    ],
    tags: ['Meta Ads', 'Performance Marketing', 'E-commerce'],
    color: 'from-brand/10 to-fuchsia-500/10',
    border: 'border-brand/20',
  },
  {
    id: '3',
    category: 'Website Development',
    client: 'LegalEdge Law Firm',
    title: 'New Website Doubled Consultation Bookings',
    desc: 'Complete redesign and rebuild of a law firm\'s website — new UX, trust architecture, and conversion-focused landing pages that doubled consultation requests.',
    results: [
      { metric: '2.1x', label: 'Consultation Bookings' },
      { metric: '0.8s', label: 'Page Load Time' },
      { metric: '98', label: 'Lighthouse Score' },
    ],
    tags: ['Web Development', 'UX Design', 'CRO'],
    color: 'from-cyan-500/10 to-blue-500/10',
    border: 'border-cyan-500/20',
  },
  {
    id: '4',
    category: 'Local SEO',
    client: 'Sparkle Dental Clinics',
    title: 'Google 3-Pack Ranking Across 8 Locations',
    desc: 'Multi-location GBP optimisation, citation building, and local content strategy that placed all 8 clinic locations in the Google 3-Pack within 4 months.',
    results: [
      { metric: '8/8', label: 'Locations in 3-Pack' },
      { metric: '3.2x', label: 'More Phone Calls' },
      { metric: '4.9★', label: 'Average Rating' },
    ],
    tags: ['Local SEO', 'GBP Optimisation', 'Multi-location'],
    color: 'from-teal-500/10 to-green-500/10',
    border: 'border-teal-500/20',
  },
  {
    id: '5',
    category: 'Social Media Marketing',
    client: 'Aura Skincare',
    title: '0 to 85K Followers in 6 Months — Organically',
    desc: 'Content strategy, Reels production, and influencer micro-collaborations that grew Aura from zero to 85K engaged Instagram followers without paid advertising.',
    results: [
      { metric: '85K', label: 'Followers in 6 Months' },
      { metric: '9.2%', label: 'Engagement Rate' },
      { metric: '180%', label: 'Website Traffic' },
    ],
    tags: ['Instagram', 'Content Creation', 'Influencer Marketing'],
    color: 'from-pink-500/10 to-rose-500/10',
    border: 'border-pink-500/20',
  },
  {
    id: '6',
    category: 'Google Ads',
    client: 'SwiftShip Logistics',
    title: 'Google Ads at ₹8 CPA for B2B Logistics Leads',
    desc: 'Rebuilt a Google Ads account, improved Quality Scores from 3 to 8+, and restructured bidding strategy to reduce CPA by 74% while doubling lead volume.',
    results: [
      { metric: '₹8', label: 'Cost Per Lead' },
      { metric: '74%', label: 'CPA Reduction' },
      { metric: '2.4x', label: 'Lead Volume' },
    ],
    tags: ['Google Ads', 'B2B', 'Lead Generation'],
    color: 'from-amber-500/10 to-orange-500/10',
    border: 'border-amber-500/20',
  },
];

const categories = ['All', 'SEO', 'Performance Marketing', 'Web Development', 'Social Media', 'Local SEO'];

export default function PortfolioPage() {
  const jsonLd = breadcrumbSchema([{ name: 'Portfolio', url: 'https://vswot.com/portfolio' }]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="container-xl relative z-10 text-center">
          <Breadcrumb items={[{ label: 'Portfolio' }]} className="mb-8 justify-center" />
          <span className="eyebrow mb-4 inline-block">Case Studies</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Results That{' '}
            <span className="gradient-text">Speak for Themselves</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Real campaigns. Real clients. Real numbers. No vanity metrics — just the results that actually grow businesses.
          </p>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10 max-w-4xl mx-auto">
            {[['150+', 'Projects Completed'], ['8.5x', 'Average ROAS'], ['320%', 'Avg. Traffic Growth'], ['4.9★', 'Client Satisfaction']].map(([num, label]) => (
              <div key={label}>
                <div className="text-3xl font-display font-bold gradient-text">{num}</div>
                <div className="text-sm text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter categories */}
      <section className="py-8 border-b border-white/10 sticky top-20 z-10 bg-surface-0/80 backdrop-blur-xl">
        <div className="container-xl">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  i === 0
                    ? 'bg-brand text-white border-brand'
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div key={cs.id} className={`card-base p-7 flex flex-col group hover:scale-[1.01] transition-all bg-gradient-to-br ${cs.color} ${cs.border}`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-brand font-semibold uppercase tracking-widest">{cs.category}</span>
                  <span className="text-xs text-white/40 font-mono">{cs.client}</span>
                </div>
                <h2 className="text-lg font-semibold text-white mb-3 leading-snug">{cs.title}</h2>
                <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">{cs.desc}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white/3 border border-white/5">
                  {cs.results.map(({ metric, label }) => (
                    <div key={label} className="text-center">
                      <div className="text-lg font-display font-bold gradient-text">{metric}</div>
                      <div className="text-xs text-white/40 mt-0.5 leading-tight">{label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-1/30">
        <div className="container-xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Want Results Like These?</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Book a free strategy call and we'll show you exactly what's possible for your business.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-10 py-4">Get Free Strategy Call →</Link>
            <Link href="/services" className="btn-secondary text-lg px-10 py-4">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
