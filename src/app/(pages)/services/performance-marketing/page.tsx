import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/seo";
import { AnimateIn, StaggerContainer, staggerItem } from "@/components/animations/AnimateIn";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { motion } from "framer-motion";
import { BarChart2, Target, DollarSign, LineChart, Users, Zap, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Performance Marketing — Google Ads & Meta Ads",
  description:
    "ROI-focused Performance Marketing services. Google Ads, Meta Ads (Facebook & Instagram), and cross-channel paid media strategies that maximize your return on ad spend.",
  path: "/services/performance-marketing",
  keywords: ["Google Ads management", "Meta Ads", "Facebook advertising", "PPC management", "performance marketing"],
});

const channels = [
  { name: "Google Search Ads", description: "Capture high-intent buyers exactly when they're searching for your product or service.", color: "from-blue-500 to-blue-700" },
  { name: "Google Shopping Ads", description: "Showcase your products with images and prices to drive qualified e-commerce traffic.", color: "from-green-500 to-green-700" },
  { name: "Google Display Network", description: "Build brand awareness and retarget visitors across millions of partner websites.", color: "from-yellow-500 to-yellow-700" },
  { name: "YouTube Ads", description: "Video advertising that tells your brand story to a captive, targeted audience.", color: "from-red-500 to-red-700" },
  { name: "Meta (Facebook) Ads", description: "Precisely targeted campaigns on the world's largest social advertising platform.", color: "from-indigo-500 to-indigo-700" },
  { name: "Instagram Ads", description: "Visually compelling campaigns that reach your audience in their daily scroll.", color: "from-pink-500 to-rose-700" },
];

const metrics = [
  { icon: DollarSign, value: "6.4x", label: "Average ROAS", sub: "Across all client accounts" },
  { icon: Users, value: "47%", label: "Lower Cost Per Lead", sub: "Vs. industry benchmark" },
  { icon: LineChart, value: "+215%", label: "Revenue Growth", sub: "Average client result" },
  { icon: Target, value: "$10M+", label: "Annual Ad Spend Managed", sub: "Across all platforms" },
];

const faqs = [
  { question: "What's a realistic ROAS I can expect?", answer: "Our clients average 6.4x ROAS across all accounts. However, realistic targets depend on your industry, margins, and current baseline. We'll set clear expectations during our initial strategy session." },
  { question: "How much ad budget do I need?", answer: "We recommend a minimum of $3,000/month in ad spend to gather meaningful data and optimize effectively. Smaller budgets can work but limit the speed of optimization." },
  { question: "How long until I see results from paid ads?", answer: "Unlike SEO, paid ads can show results immediately. Typically, the first 30-60 days are the learning phase. Consistent ROI improvements usually come by month 3 as we optimize based on data." },
  { question: "Do you handle creative (ad designs/copy)?", answer: "Absolutely. Our team creates all ad creatives — static images, video ads, carousels, and copy — as part of our performance marketing service. Creative testing is central to our optimization strategy." },
];

export default function PerformanceMarketingPage() {
  const schemas = [
    serviceSchema({
      name: "Performance Marketing",
      description: "ROI-focused Google Ads and Meta Ads management that maximizes your return on ad spend.",
      url: "https://vswot.com/services/performance-marketing",
    }),
    faqSchema(faqs),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-4xl">
            <AnimateIn>
              <nav className="flex items-center gap-2 text-xs text-surface-500 mb-6">
                <Link href="/" className="hover:text-brand-400">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-brand-400">Services</Link>
                <span>/</span>
                <span className="text-surface-300">Performance Marketing</span>
              </nav>

              <div className="badge bg-red-500/10 text-red-400 border border-red-500/20 mb-6">
                <BarChart2 className="w-3.5 h-3.5" />
                Performance Marketing
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Paid Ads That{" "}
                <span className="gradient-text">Maximise Every Dollar</span>
              </h1>
              <p className="text-xl text-surface-400 leading-relaxed mb-8 max-w-3xl">
                We manage Google and Meta Ads campaigns with a single obsession: delivering the highest possible ROI for every dollar you invest. Data-driven, creative-led, and relentlessly optimized.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get a Free Ad Account Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-white dark:bg-surface-900 border-y border-surface-100 dark:border-surface-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <AnimateIn key={m.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-3">
                  <m.icon className="w-5 h-5 text-brand-500" />
                </div>
                <div className="text-3xl font-display font-bold text-brand-400 mb-1">{m.value}</div>
                <div className="text-sm font-medium text-surface-900 dark:text-white">{m.label}</div>
                <div className="text-xs text-surface-500 mt-0.5">{m.sub}</div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Channels */}
      <section className="section-py bg-surface-50 dark:bg-surface-950">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <div className="eyebrow">Ad Channels</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white">
              Every Platform. One Strategy.
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {channels.map((ch) => (
              <motion.div key={ch.name} variants={staggerItem}>
                <div className="card-base card-hover group h-full">
                  <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${ch.color} mb-4`} />
                  <h3 className="font-semibold text-surface-900 dark:text-white mb-2">{ch.name}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">{ch.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What We Handle */}
      <section className="section-py bg-white dark:bg-surface-900/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateIn direction="left">
              <div className="eyebrow">What We Handle</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white mb-6">
                Full-Service Paid Media Management
              </h2>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-8">
                From strategy and creative to launch and optimization, we handle every aspect of your paid media campaigns so you can focus on running your business.
              </p>
              <div className="space-y-3">
                {[
                  "Campaign strategy & architecture",
                  "Audience research & targeting",
                  "Ad creative design & copywriting",
                  "Landing page optimization",
                  "Conversion tracking & attribution setup",
                  "A/B testing & creative iteration",
                  "Budget management & bid optimization",
                  "Weekly reporting & strategy calls",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-surface-700 dark:text-surface-300">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="glass dark:bg-surface-900 rounded-2xl border border-surface-200 dark:border-surface-700 p-6">
                <div className="text-sm font-semibold text-surface-500 mb-4">Live Campaign Performance</div>
                <div className="space-y-4">
                  {[
                    { label: "Impressions", value: "284,923", change: "+18%", positive: true },
                    { label: "Clicks", value: "12,847", change: "+24%", positive: true },
                    { label: "Conversions", value: "1,082", change: "+41%", positive: true },
                    { label: "Cost Per Conversion", value: "$24.80", change: "-22%", positive: true },
                    { label: "ROAS", value: "6.4x", change: "+2.1x", positive: true },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-2 border-b border-surface-100 dark:border-surface-800 last:border-0">
                      <span className="text-sm text-surface-600 dark:text-surface-400">{row.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-surface-900 dark:text-white">{row.value}</span>
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${row.positive ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"}`}>
                          {row.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-xs text-surface-500 text-center">Sample performance dashboard — client data anonymized</div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-surface-50 dark:bg-surface-950">
        <div className="container-custom max-w-3xl">
          <AnimateIn className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-surface-900 dark:text-white">
              Paid Ads FAQ
            </h2>
          </AnimateIn>
          <AnimateIn>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card-base">
                  <h3 className="font-semibold text-surface-900 dark:text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400">{faq.answer}</p>
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
