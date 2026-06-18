import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { AnimateIn, StaggerContainer, staggerItem } from "@/components/animations/AnimateIn";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { motion } from "framer-motion";
import {
  Search, TrendingUp, Link2, Code2, FileText, BarChart2,
  CheckCircle, ArrowRight, Star
} from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "SEO Services",
  description:
    "Drive sustainable organic growth with Vswot's data-driven SEO services. Technical SEO, on-page optimization, link building, and content strategy that ranks and converts.",
  path: "/services/seo",
  keywords: ["SEO services", "search engine optimization", "technical SEO", "on-page SEO", "link building"],
});

const features = [
  { icon: Code2, title: "Technical SEO Audit", description: "Deep-dive site audit covering crawlability, Core Web Vitals, schema markup, and indexation issues." },
  { icon: FileText, title: "On-Page Optimization", description: "Title tags, meta descriptions, header structure, internal linking, and content optimization." },
  { icon: Link2, title: "Link Building", description: "White-hat authority link acquisition through digital PR, guest posting, and outreach campaigns." },
  { icon: Search, title: "Keyword Strategy", description: "Comprehensive keyword research identifying high-value opportunities your competitors are missing." },
  { icon: BarChart2, title: "Content SEO", description: "Topic cluster strategies and SEO content that ranks for competitive keywords and converts visitors." },
  { icon: TrendingUp, title: "Performance Tracking", description: "Real-time rank tracking, traffic analysis, and monthly performance reports with actionable insights." },
];

const results = [
  { metric: "+312%", label: "Organic Traffic", client: "TechNova SaaS" },
  { metric: "#1", label: "Target Keyword Rankings", client: "FinEdge Capital" },
  { metric: "+187%", label: "Organic Lead Volume", client: "MediCore Health" },
  { metric: "3x", label: "Domain Authority Growth", client: "Bloom Beauty" },
];

const faqs = [
  { question: "How long does SEO take to show results?", answer: "Most clients see measurable improvements within 3-6 months, with significant gains by month 6-12. The timeline depends on your starting authority, competition, and the scope of work." },
  { question: "Do you follow Google's guidelines?", answer: "Absolutely. We only use white-hat, Google-approved SEO techniques. No shortcuts, no risks — just sustainable, long-term rankings." },
  { question: "What makes your SEO different?", answer: "We combine technical expertise with content strategy and CRO. We don't just improve rankings — we improve the entire organic search funnel from click to conversion." },
  { question: "Do you provide monthly reports?", answer: "Yes. Every client gets a real-time dashboard, weekly ranking updates, and a detailed monthly report with insights and next steps." },
];

export default function SeoServicePage() {
  const schemas = [
    serviceSchema({
      name: "SEO Services",
      description: "Data-driven SEO strategies including technical SEO, on-page optimization, link building, and content strategy.",
      url: "https://vswot.com/services/seo",
    }),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Home", url: "https://vswot.com" },
      { name: "Services", url: "https://vswot.com/services" },
      { name: "SEO", url: "https://vswot.com/services/seo" },
    ]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-green-500/15 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <AnimateIn>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-surface-500 mb-6">
                <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-brand-400 transition-colors">Services</Link>
                <span>/</span>
                <span className="text-surface-300">SEO</span>
              </nav>

              <div className="badge bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
                <Search className="w-3.5 h-3.5" />
                Search Engine Optimization
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                SEO That Drives{" "}
                <span className="gradient-text">Sustainable Growth</span>
              </h1>
              <p className="text-xl text-surface-400 leading-relaxed mb-8 max-w-3xl">
                Move beyond vanity rankings. Our data-driven SEO strategies are designed to increase organic traffic, improve search visibility, and generate qualified leads that convert.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get Your Free SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="btn btn-outline btn-lg text-white">
                  View SEO Case Studies
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Results Strip */}
      <section className="py-10 bg-white dark:bg-surface-900 border-y border-surface-100 dark:border-surface-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r) => (
              <AnimateIn key={r.metric} className="text-center">
                <div className="text-3xl font-display font-bold text-green-500 mb-1">{r.metric}</div>
                <div className="text-sm font-medium text-surface-900 dark:text-white">{r.label}</div>
                <div className="text-xs text-surface-500 mt-0.5">{r.client}</div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-py bg-surface-50 dark:bg-surface-950">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <div className="eyebrow">What&apos;s Included</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white">
              A Complete SEO Solution
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <motion.div key={f.title} variants={staggerItem}>
                <div className="card-base card-hover group h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center mb-4 shadow-md">
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-surface-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="section-py bg-white dark:bg-surface-900/30">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <div className="eyebrow">Our SEO Process</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white">
              How We Achieve Top Rankings
            </h2>
          </AnimateIn>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-4">
              {[
                { step: "01", title: "Technical SEO Foundation", desc: "We audit and fix every technical issue preventing search engines from properly crawling, indexing, and ranking your site." },
                { step: "02", title: "Keyword & Competitor Research", desc: "Deep keyword analysis to identify high-value opportunities and content gaps your competitors aren't capitalizing on." },
                { step: "03", title: "On-Page Optimization", desc: "Optimize every page element — titles, headings, content, internal links — to maximize relevance and click-through rates." },
                { step: "04", title: "Content Strategy & Creation", desc: "Build topic authority through strategic content clusters that attract links, rank broadly, and convert visitors." },
                { step: "05", title: "Link Authority Building", desc: "Earn high-quality backlinks from authoritative sites through digital PR, guest content, and outreach campaigns." },
                { step: "06", title: "Monitor, Report & Scale", desc: "Continuous monitoring, monthly performance reports, and iterative improvements to compound your organic growth." },
              ].map((item) => (
                <motion.div key={item.step} variants={staggerItem}>
                  <div className="flex gap-5 p-5 rounded-xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-900 hover:border-brand-400/30 transition-colors">
                    <div className="text-xs font-mono font-bold text-brand-400 bg-brand-500/10 px-2 py-1 rounded h-fit">{item.step}</div>
                    <div>
                      <h3 className="font-semibold text-surface-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-surface-600 dark:text-surface-400">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-surface-50 dark:bg-surface-950">
        <div className="container-custom max-w-3xl">
          <AnimateIn className="text-center mb-10">
            <div className="eyebrow">SEO FAQ</div>
            <h2 className="text-3xl font-display font-bold text-surface-900 dark:text-white">
              Common SEO Questions
            </h2>
          </AnimateIn>
          <AnimateIn>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card-base">
                  <h3 className="font-semibold text-surface-900 dark:text-white mb-2 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400 pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
