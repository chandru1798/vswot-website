import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'GEO & AEO Optimization | AI Search & Answer Engine Optimisation',
  description: 'Future-proof your brand with Generative Engine Optimisation (GEO) and Answer Engine Optimisation (AEO). Rank in ChatGPT, Perplexity, Google AI Overview, and voice search.',
  path: '/services/geo-aeo',
});

const features = [
  { icon: '🤖', title: 'Generative Engine Optimisation', desc: 'Optimise your content to appear in ChatGPT, Perplexity AI, Claude, and Gemini responses. Structure data and authority signals that AI models trust and cite.' },
  { icon: '🎯', title: 'AI Overview Optimisation', desc: 'Position your brand prominently in Google\'s AI Overviews (formerly SGE) with authoritative, structured content that triggers featured inclusion.' },
  { icon: '🗣️', title: 'Voice Search Optimisation', desc: 'Capture voice queries from Google Assistant, Siri, and Alexa with conversational content, featured snippets, and FAQ schema.' },
  { icon: '📋', title: 'Structured Data Architecture', desc: 'Advanced schema markup — FAQ, HowTo, Article, Product, Organization — that makes your content machine-readable and AI-citation-ready.' },
  { icon: '✍️', title: 'E-E-A-T Authority Building', desc: 'Experience, Expertise, Authoritativeness, Trustworthiness signals that elevate your brand as a trusted AI source — author profiles, citations, and expert content.' },
  { icon: '📊', title: 'AI Citation Monitoring', desc: 'Track how often your brand appears in AI-generated responses, which queries trigger mentions, and competitor citation share.' },
];

const stats = [
  { metric: '60%', label: 'Searches are now zero-click' },
  { metric: '40%', label: 'Gen Z uses AI for discovery' },
  { metric: '3x', label: 'More trust in AI answers' },
  { metric: '2026', label: 'When AI search overtakes traditional' },
];

const faqs = [
  { question: 'What is GEO (Generative Engine Optimisation)?', answer: 'GEO is the practice of optimising your content and digital presence to appear in AI-generated responses from tools like ChatGPT, Perplexity, Google AI Overview, and other generative search engines.' },
  { question: 'What is AEO (Answer Engine Optimisation)?', answer: 'AEO optimises content to appear in direct answer positions — Google featured snippets, voice search responses, and knowledge panels. It focuses on answering questions definitively and concisely.' },
  { question: 'Is GEO/AEO replacing traditional SEO?', answer: 'No — it\'s layered on top. Traditional SEO remains essential, but GEO/AEO extends your visibility into the AI search layer that\'s rapidly growing. Brands that invest now gain first-mover advantage.' },
  { question: 'How do you measure GEO/AEO results?', answer: 'We track AI citation frequency, featured snippet capture rate, AI Overview appearances, voice query rankings, and brand mentions in AI tools. We use specialised monitoring tools including Perplexity tracking.' },
  { question: 'What content changes are needed for GEO?', answer: 'We restructure existing content with clear question-answer formats, add structured data, build topical authority clusters, strengthen author E-E-A-T signals, and create AI-crawler-friendly content architecture.' },
];

export default function GeoAeoPage() {
  const jsonLd = [
    serviceSchema({ name: 'GEO & AEO Optimisation', description: 'Generative Engine Optimisation and Answer Engine Optimisation to capture AI search and voice search visibility.', url: 'https://vswot.com/services/geo-aeo' }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }, { name: 'GEO/AEO', url: 'https://vswot.com/services/geo-aeo' }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'GEO/AEO Optimisation' }]} className="mb-8" />
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-pulse" />
              The Future of Search is Here
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Get Found in{' '}
              <span className="gradient-text">AI Search</span>{' '}
              Before Your Competitors
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              The search landscape is shifting. ChatGPT, Perplexity, and Google AI Overviews are becoming the first point of discovery. We optimise your brand to appear in AI-generated answers — not just traditional search results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Get AI Search Audit →</Link>
              <Link href="/services/seo" className="btn-secondary">Also: Traditional SEO</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {stats.map(({ metric, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{metric}</div>
                <div className="text-sm text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What differentiates GEO/AEO */}
      <section className="py-24">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow mb-4 inline-block">Why It Matters Now</span>
              <h2 className="text-4xl font-display font-bold text-white mb-6">The Search Paradigm Has Shifted</h2>
              <p className="text-white/60 leading-relaxed mb-6">Traditional SEO gets you onto page 1. GEO/AEO gets you into the answer itself — the paragraph, the recommendation, the citation that millions of users see as truth.</p>
              <p className="text-white/60 leading-relaxed mb-8">Brands that establish AI authority today will dominate their categories for the next decade. Every month you wait, a competitor is building their AI citation share.</p>
              <div className="space-y-3">
                {['Appear in ChatGPT & Perplexity responses', 'Capture Google AI Overview positions', 'Win voice search queries at scale', 'Build unshakeable topical authority', 'Monitor and grow AI citation share'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/70">
                    <span className="w-5 h-5 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-brand text-xs">✓</span>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['ChatGPT', 'Perplexity', 'Google AI', 'Voice Search', 'Gemini', 'Copilot'].map((platform, i) => (
                <div key={platform} className={`card-base p-6 text-center ${i === 0 || i === 5 ? 'col-span-2' : ''}`}>
                  <div className="text-2xl mb-2">
                    {['🤖', '🔍', '🌐', '🎤', '♊', '💼'][i]}
                  </div>
                  <div className="font-semibold text-white text-sm">{platform}</div>
                  <div className="text-xs text-brand mt-1">Optimised ✓</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-1/30">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Our Services</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Full GEO/AEO Coverage</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-base p-7 group hover:border-fuchsia-500/40 transition-all">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Lead the AI Search Era</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Get a free GEO/AEO audit showing your current AI visibility and the gap to close against competitors.</p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">Get Free AI Search Audit →</Link>
        </div>
      </section>
    </>
  );
}
