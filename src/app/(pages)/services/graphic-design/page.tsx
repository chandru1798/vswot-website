import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Graphic Design Services | Brand Identity & Visual Design',
  description: 'Professional graphic design services — brand identity, logo design, marketing materials, social media graphics, and UI/UX design that makes your brand unforgettable.',
  path: '/services/graphic-design',
});

const services = [
  { icon: '🎨', title: 'Brand Identity Design', desc: 'Logo, colour palette, typography system, and brand guidelines that make your business instantly recognisable across every touchpoint.' },
  { icon: '📄', title: 'Marketing Materials', desc: 'Brochures, flyers, business cards, presentations, and trade show materials that make a lasting impression.' },
  { icon: '📱', title: 'Social Media Graphics', desc: 'Branded templates for Instagram, LinkedIn, Facebook, and YouTube — posts, Stories, Reels covers, and banners.' },
  { icon: '🌐', title: 'Web & UI Design', desc: 'Website mockups, landing page designs, and UI components in Figma — pixel-perfect and ready for development.' },
  { icon: '📦', title: 'Packaging Design', desc: 'Product packaging, labels, and unboxing experiences that convert browsers to buyers and build brand loyalty.' },
  { icon: '🎬', title: 'Motion Graphics', desc: 'Animated logos, social media animations, explainer graphics, and branded motion assets for video content.' },
];

const faqs = [
  { question: 'What file formats do you deliver?', answer: 'All projects include print-ready files (PDF, AI, EPS), digital formats (PNG, SVG, JPG), and source files in Adobe Illustrator, Photoshop, or Figma — depending on the project type.' },
  { question: 'How many revisions are included?', answer: 'Our standard packages include 3 rounds of revisions per deliverable. We work iteratively with your feedback to ensure the final design exceeds expectations.' },
  { question: 'How long does a brand identity project take?', answer: 'A full brand identity (logo + brand guide) takes 2–3 weeks. Individual deliverables like social templates take 3–5 business days.' },
  { question: 'Do you design for print as well as digital?', answer: 'Yes — all our designers are trained in both print and digital production. We prepare print-ready files with correct bleed, colour profiles (CMYK), and resolution.' },
  { question: 'Can you redesign an existing brand?', answer: 'Absolutely. We conduct a brand audit, identify inconsistencies, and evolve your visual identity while preserving brand equity and recognition.' },
];

export default function GraphicDesignPage() {
  const jsonLd = [
    serviceSchema({ name: 'Graphic Design', description: 'Professional graphic design services — brand identity, marketing materials, social graphics, and UI/UX design.', url: 'https://vswot.com/services/graphic-design' }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }, { name: 'Graphic Design', url: 'https://vswot.com/services/graphic-design' }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Graphic Design' }]} className="mb-8" />
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 inline-block">Graphic Design</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Design That Makes Your{' '}
              <span className="gradient-text">Brand Unforgettable</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              From brand identity to social media graphics, we create visuals that stop the scroll, communicate your values, and make your business look as professional as it is.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Start a Design Project →</Link>
              <Link href="/portfolio" className="btn-secondary">View Portfolio</Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {[['500+', 'Brands Designed'], ['48hr', 'Avg. First Draft'], ['99%', 'Client Approval Rate'], ['100%', 'Source Files Included']].map(([num, label]) => (
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
            <span className="eyebrow mb-4 inline-block">Services</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Every Design Need, Covered</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-base p-7 group hover:border-orange-500/40 transition-all">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-lg font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's Create Something Remarkable</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Share your brief and get a custom design proposal within 24 hours.</p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">Start Your Design Project →</Link>
        </div>
      </section>
    </>
  );
}
