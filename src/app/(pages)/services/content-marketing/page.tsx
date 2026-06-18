import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Content Marketing Services | Content That Ranks, Converts & Builds Authority',
  description: 'Strategic content marketing services — SEO blog content, long-form guides, case studies, email sequences, and content strategy that drives organic traffic and generates leads.',
  path: '/services/content-marketing',
});

const contentTypes = [
  { icon: '📝', title: 'SEO Blog Content', desc: 'Research-backed blog posts targeting high-intent keywords. Every article is optimised for Google and written to establish authority in your niche.' },
  { icon: '📚', title: 'Long-Form Guides', desc: 'Comprehensive pillar content — ultimate guides, whitepapers, and industry reports that earn backlinks and generate leads at scale.' },
  { icon: '📊', title: 'Case Studies', desc: 'Conversion-focused case studies turning your client results into compelling proof that shortens sales cycles.' },
  { icon: '✉️', title: 'Email Sequences', desc: 'Nurture sequences, welcome flows, and campaign emails that build relationships and convert subscribers into customers.' },
  { icon: '📱', title: 'Social Content', desc: 'Platform-native social content — LinkedIn articles, Instagram captions, Twitter threads — repurposed from your core content.' },
  { icon: '🎥', title: 'Video Scripts', desc: 'YouTube scripts, explainer video copy, and webinar content that educates your audience and builds trust.' },
];

const strategy = [
  { step: '01', title: 'Audience & Keyword Research', desc: 'Deep dive into your target audience\'s questions, pain points, and search behaviour to build a content map aligned to buying intent.' },
  { step: '02', title: 'Content Strategy & Calendar', desc: 'A 3–6 month content roadmap with topic clusters, publishing cadence, and content formats mapped to each funnel stage.' },
  { step: '03', title: 'Creation & Optimisation', desc: 'Expert writers with industry knowledge create SEO-optimised, brand-voice-consistent content with internal linking and schema.' },
  { step: '04', title: 'Distribution & Amplification', desc: 'Multi-channel distribution — social, email, PR — to maximise reach and build backlinks to your new content.' },
  { step: '05', title: 'Measure & Iterate', desc: 'Monthly reporting on rankings, traffic, leads, and engagement. We double down on what works and refine what doesn\'t.' },
];

const faqs = [
  { question: 'What makes content marketing effective for lead generation?', answer: 'Effective content marketing targets buying-intent keywords, answers your prospects\' questions, and guides them through the funnel. Compounding organic traffic from quality content delivers the lowest long-term cost per lead.' },
  { question: 'How many articles do you produce per month?', answer: 'Our standard packages start at 4 articles per month. We also offer 8 and 12 article packages. All include keyword research, writing, SEO optimisation, and internal linking.' },
  { question: 'Do your writers have industry expertise?', answer: 'Yes. We match writers to your industry from our specialist network — technology, finance, healthcare, legal, real estate, and more. All content goes through an SEO and editorial review process.' },
  { question: 'How long before content marketing shows ROI?', answer: 'Most clients see initial ranking movement within 60–90 days, with significant traffic growth at the 6-month mark. Content marketing is a compounding investment — results accelerate over time.' },
  { question: 'Do you handle content distribution too?', answer: 'Yes — creation alone isn\'t enough. Our service includes social distribution, email newsletters, and PR outreach for high-value pieces. We also build internal linking structures to pass authority through your site.' },
];

export default function ContentMarketingPage() {
  const jsonLd = [
    serviceSchema({ name: 'Content Marketing', description: 'Strategic content marketing services — SEO content, long-form guides, case studies, and email sequences that drive organic traffic and generate leads.', url: 'https://vswot.com/services/content-marketing' }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }, { name: 'Content Marketing', url: 'https://vswot.com/services/content-marketing' }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Content Marketing' }]} className="mb-8" />
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 inline-block">Content Marketing</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Content That Ranks,{' '}
              <span className="gradient-text">Converts & Compounds</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              Strategic content marketing that builds organic traffic, establishes authority, and generates qualified leads month after month — without paying for every click.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get Content Strategy →</Link>
              <Link href="/blog" className="btn-secondary">Read Our Blog</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {[['10M+', 'Words Published'], ['320%', 'Avg. Traffic Growth'], ['2.1x', 'Lead Gen Improvement'], ['95%', 'Client Retention Rate']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{num}</div>
                <div className="text-sm text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Content Types</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Every Content Format, Mastered</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((c) => (
              <div key={c.title} className="card-base p-7 group hover:border-brand/40 transition-all">
                <span className="text-3xl mb-4 block">{c.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{c.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-1/30">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Our Approach</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">How We Build Your Content Engine</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {strategy.map((s) => (
              <div key={s.step} className="card-base p-6 relative overflow-hidden group hover:border-brand/40 transition-all">
                <span className="absolute top-3 right-3 text-5xl font-display font-bold text-white/5 group-hover:text-brand/10 transition-colors">{s.step}</span>
                <h3 className="text-sm font-semibold text-white mb-2 relative z-10">{s.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Build Your Content Engine?</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Get a free content gap analysis showing which keywords your competitors rank for — and you don't.</p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">Get Free Content Audit →</Link>
        </div>
      </section>
    </>
  );
}
