import type { Metadata } from 'next';
import Link from 'next/link';
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/seo';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = createMetadata({
  title: 'Website Development Services | Custom Web Development',
  description: 'Expert website development services — custom Next.js, React, WordPress & e-commerce solutions. Fast, secure, mobile-first websites built to convert visitors into customers.',
  path: '/services/website-development',
});

const features = [
  { icon: '⚡', title: 'Lightning-Fast Performance', desc: 'Next.js & modern frameworks delivering sub-2s load times and 95+ Lighthouse scores for every build.' },
  { icon: '📱', title: 'Mobile-First Responsive', desc: 'Pixel-perfect across all devices. Every site is built mobile-first with fluid layouts and touch-optimised UX.' },
  { icon: '🔒', title: 'Enterprise Security', desc: 'SSL, WAF, OWASP best practices, regular audits, and hardened configurations protecting your site 24/7.' },
  { icon: '🎨', title: 'Custom UI/UX Design', desc: 'Bespoke designs aligned to your brand identity — no templates. Every pixel crafted for conversion.' },
  { icon: '🛒', title: 'E-commerce Ready', desc: 'Shopify, WooCommerce & headless commerce solutions built to maximise product discovery and checkout conversion.' },
  { icon: '🔗', title: 'CMS & API Integrations', desc: 'Sanity, WordPress, HubSpot, Salesforce, payment gateways — seamlessly integrated into your workflow.' },
];

const techStack = [
  { category: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'tRPC', 'REST APIs', 'GraphQL'] },
  { category: 'CMS', items: ['Sanity', 'WordPress', 'Contentful', 'Strapi', 'Payload'] },
  { category: 'E-commerce', items: ['Shopify', 'WooCommerce', 'Medusa', 'Stripe', 'Razorpay'] },
  { category: 'Infrastructure', items: ['Vercel', 'AWS', 'Cloudflare', 'Docker', 'GitHub Actions'] },
];

const process = [
  { step: '01', title: 'Discovery & Scoping', desc: 'Deep-dive into your business goals, target audience, and technical requirements. We define scope, stack, and success metrics.' },
  { step: '02', title: 'UX Wireframing', desc: 'Information architecture, user flows, and low-fidelity wireframes validated before a single line of code is written.' },
  { step: '03', title: 'UI Design', desc: 'High-fidelity Figma designs with your brand system, micro-interactions, and responsive breakpoints.' },
  { step: '04', title: 'Development', desc: 'Agile sprints with weekly demos. Clean, documented, TypeScript code with component libraries and test coverage.' },
  { step: '05', title: 'QA & Testing', desc: 'Cross-browser, cross-device testing. Performance audits, accessibility checks, and security scanning.' },
  { step: '06', title: 'Launch & Support', desc: '99.9% uptime SLA, CDN configuration, monitoring, and ongoing support & feature development post-launch.' },
];

const faqs = [
  { question: 'How long does a website project take?', answer: 'A standard 5–10 page business website takes 3–5 weeks. Complex e-commerce or web applications take 8–16 weeks. We provide a detailed timeline during discovery.' },
  { question: 'Do you redesign existing websites?', answer: 'Absolutely. We audit your current site, identify UX and performance bottlenecks, and redesign with zero downtime migration.' },
  { question: 'What CMS do you recommend?', answer: 'For most businesses, Sanity or WordPress. For e-commerce, Shopify or WooCommerce. We choose the CMS that best fits your content workflow and scale requirements.' },
  { question: 'Will my website rank on Google?', answer: 'Every site we build follows technical SEO best practices — semantic HTML, Core Web Vitals optimisation, structured data, fast load times, and mobile-first indexing readiness.' },
  { question: 'Do you provide ongoing maintenance?', answer: 'Yes. We offer monthly maintenance plans covering security patches, performance monitoring, content updates, and feature additions.' },
];

export default function WebsiteDevelopmentPage() {
  const jsonLd = [
    serviceSchema({ name: 'Website Development', description: 'Custom website and web application development services using Next.js, React, and modern web technologies.', url: 'https://vswot.com/services/website-development' }),
    faqSchema(faqs),
    breadcrumbSchema([{ name: 'Services', url: 'https://vswot.com/services' }, { name: 'Website Development', url: 'https://vswot.com/services/website-development' }]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="container-xl relative z-10">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: 'Website Development' }]} className="mb-8" />
          <div className="max-w-3xl">
            <span className="eyebrow mb-4 inline-block">Website Development</span>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Websites That Win Business,{' '}
              <span className="gradient-text">Not Just Look Good</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              We engineer high-performance websites and web applications that load in under 2 seconds, rank on Google, and convert visitors into paying customers. Every project is bespoke — no templates, no shortcuts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">Start Your Project →</Link>
              <Link href="/portfolio" className="btn-secondary">View Our Work</Link>
            </div>
          </div>

          {/* Result strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
            {[['200+', 'Sites Launched'], ['<2s', 'Average Load Time'], ['95+', 'Lighthouse Score'], ['99.9%', 'Uptime SLA']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-display font-bold gradient-text">{num}</div>
                <div className="text-sm text-white/50 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">What We Build</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Engineering Excellence,<br />Delivered by Default</h2>
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

      {/* Tech Stack */}
      <section className="py-24 bg-surface-1/30">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Tech Stack</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">Modern Stack for Modern Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((stack) => (
              <div key={stack.category} className="card-base p-6">
                <h3 className="text-sm font-semibold text-brand mb-4 uppercase tracking-widest">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-sm text-white/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container-xl">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Our Process</span>
            <h2 className="text-4xl font-display font-bold text-white mb-4">How We Build Your Website</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.step} className="card-base p-7 relative overflow-hidden group hover:border-brand/40 transition-all">
                <span className="absolute top-4 right-4 text-6xl font-display font-bold text-white/5 group-hover:text-brand/10 transition-colors">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="py-24">
        <div className="container-xl text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Get a free project consultation and technical scoping call with our lead developer.</p>
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">Get Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}
