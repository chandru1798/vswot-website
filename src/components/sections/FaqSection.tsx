"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { AnimateIn } from "@/components/animations/AnimateIn";
import Link from "next/link";
import { faqSchema } from "@/lib/seo";

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Most clients start seeing measurable improvements in rankings and traffic within 3–6 months, with significant gains by month 6–12. The timeline depends on your current authority, competition level, and the scope of our strategy. We provide monthly progress reports so you can track every step.",
  },
  {
    question: "What makes Vswot different from other digital marketing agencies?",
    answer:
      "Three things set us apart: (1) We're obsessively data-driven — every decision is backed by analytics, (2) We assign a dedicated specialist team rather than shared account managers, and (3) We focus exclusively on measurable ROI. We don't hide behind vanity metrics — your business growth is our success metric.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes. We work with startups, SMBs, and enterprise brands across all industries. Our strategies are always custom-built for your specific stage of growth, budget, and business goals. We've successfully scaled 200+ clients ranging from local businesses to international corporations.",
  },
  {
    question: "How much do your digital marketing services cost?",
    answer:
      "Pricing varies based on services, scope, and your specific goals. We offer tailored packages starting from $1,500/month for focused campaigns. After understanding your needs in a free consultation, we'll propose a custom solution that fits your budget and maximizes ROI.",
  },
  {
    question: "What is GEO/AEO Optimization and why does it matter?",
    answer:
      "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are next-generation SEO strategies designed to optimize your content for AI-powered search engines like Google's AI Overviews, ChatGPT, and Perplexity. As AI search becomes mainstream, these optimizations are critical for maintaining and growing your organic visibility.",
  },
  {
    question: "Can you manage both Google Ads and Meta Ads simultaneously?",
    answer:
      "Absolutely. Our Performance Marketing team specializes in cross-channel paid media strategy. We manage Google Search, Display, Shopping, and YouTube Ads alongside Meta (Facebook/Instagram) campaigns, ensuring consistent messaging, budget allocation, and attribution tracking across all platforms.",
  },
  {
    question: "Do you offer long-term contracts or month-to-month?",
    answer:
      "We offer both flexible month-to-month arrangements and discounted long-term partnerships. We believe in earning your business every month through results, so we never lock you into restrictive contracts. Our 98% client retention rate speaks to the value we consistently deliver.",
  },
  {
    question: "How do you measure and report campaign performance?",
    answer:
      "Every client gets access to a real-time analytics dashboard, weekly performance summaries, and monthly strategy calls. We track all relevant KPIs — organic traffic, keyword rankings, conversion rates, ROAS, and revenue attribution — and provide actionable insights, not just data dumps.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-surface-50 dark:hover:bg-surface-800/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-surface-900 dark:text-white">
          {faq.question}
        </span>
        <div className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-200 ${
          isOpen ? "bg-brand-500 text-white" : "bg-surface-100 dark:bg-surface-800 text-surface-500"
        }`}>
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5">
              <div className="h-px bg-surface-200 dark:bg-surface-700 mb-4" />
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const schema = faqSchema(faqs);

  return (
    <section className="section-py bg-white dark:bg-surface-950 relative" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <AnimateIn direction="left" className="lg:sticky lg:top-28">
            <div className="eyebrow">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white mb-4">
              Questions? We Have{" "}
              <span className="gradient-text">Answers</span>
            </h2>
            <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-8">
              Everything you need to know about working with Vswot. Can&apos;t find what you&apos;re looking for? Our team is always here to help.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Talk to an Expert
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { value: "< 2hrs", label: "Average response time" },
                { value: "98%", label: "Client satisfaction" },
                { value: "200+", label: "Happy clients" },
                { value: "24/7", label: "Support available" },
              ].map((stat) => (
                <div key={stat.label} className="glass-light dark:glass rounded-xl p-4 border border-surface-200 dark:border-surface-700">
                  <div className="text-2xl font-bold text-brand-500 dark:text-brand-400">{stat.value}</div>
                  <div className="text-xs text-surface-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Right: Accordion */}
          <AnimateIn direction="right" className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
