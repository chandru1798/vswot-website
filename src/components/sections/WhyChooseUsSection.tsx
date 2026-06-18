"use client";

import { motion } from "framer-motion";
import {
  Target, BarChart, Lightbulb, Shield, Clock, HeartHandshake,
  TrendingUp, Award
} from "lucide-react";
import { AnimateIn, StaggerContainer, staggerItem } from "@/components/animations/AnimateIn";

const reasons = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description:
      "Every strategy is built around measurable KPIs. We track, analyze, and optimize campaigns continuously to ensure maximum ROI.",
    stat: "350% avg. ROI",
    color: "brand",
  },
  {
    icon: BarChart,
    title: "Data-Led Decisions",
    description:
      "We use advanced analytics, A/B testing, and market intelligence to make decisions that consistently outperform industry benchmarks.",
    stat: "100% data-backed",
    color: "cyan",
  },
  {
    icon: Lightbulb,
    title: "Innovative Strategies",
    description:
      "We stay ahead of algorithm updates, AI search evolution, and platform changes so your brand is always one step ahead.",
    stat: "Always cutting-edge",
    color: "amber",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description:
      "Real-time dashboards, weekly reports, and monthly strategy calls keep you informed of every metric that matters.",
    stat: "Full transparency",
    color: "green",
  },
  {
    icon: Clock,
    title: "Dedicated Team",
    description:
      "You get a dedicated account manager and specialist team — not shared resources — fully committed to your growth.",
    stat: "Your team, always",
    color: "purple",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Mindset",
    description:
      "We treat your business goals as our own. Your success is our success — that's why 98% of our clients stay long-term.",
    stat: "98% retention rate",
    color: "pink",
  },
];

const colorMap: Record<string, string> = {
  brand: "from-brand-500 to-violet-600",
  cyan: "from-cyan-500 to-blue-500",
  amber: "from-amber-500 to-orange-500",
  green: "from-green-500 to-teal-500",
  purple: "from-purple-500 to-brand-500",
  pink: "from-pink-500 to-rose-500",
};

const textColorMap: Record<string, string> = {
  brand: "text-brand-400",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
  green: "text-green-400",
  purple: "text-purple-400",
  pink: "text-pink-400",
};

export function WhyChooseUsSection() {
  return (
    <section className="section-py bg-white dark:bg-surface-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-brand-500/5 to-transparent pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <AnimateIn>
              <div className="eyebrow">Why Vswot</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-surface-900 dark:text-white mb-6">
                The Agency That{" "}
                <span className="gradient-text">Doesn&apos;t Stop</span>{" "}
                Until You Win
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 leading-relaxed mb-8">
                Most agencies deliver reports. We deliver revenue. Our obsession with measurable results, combined with deep expertise across every digital channel, makes Vswot the partner ambitious brands choose.
              </p>
            </AnimateIn>

            {/* Quick wins */}
            <AnimateIn delay={0.2}>
              <div className="space-y-3">
                {[
                  "No long-term lock-in contracts",
                  "Dedicated account manager from day one",
                  "Weekly performance reports with insights",
                  "Cross-channel strategy at no extra cost",
                  "Proven process for 200+ clients worldwide",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-500" />
                    </div>
                    <span className="text-sm text-surface-700 dark:text-surface-300">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* Awards strip */}
            <AnimateIn delay={0.3} className="mt-8 flex items-center gap-4">
              {[Award, TrendingUp].map((Icon, i) => (
                <div key={i} className="flex items-center gap-3 glass dark:bg-surface-900/80 rounded-xl px-4 py-3 border border-surface-200 dark:border-surface-700">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/15 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-surface-900 dark:text-white">
                      {i === 0 ? "50+ Awards" : "Top Agency 2024"}
                    </div>
                    <div className="text-xs text-surface-500">
                      {i === 0 ? "Industry recognition" : "Clutch & G2 rated"}
                    </div>
                  </div>
                </div>
              ))}
            </AnimateIn>
          </div>

          {/* Right: Cards grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <motion.div key={reason.title} variants={staggerItem}>
                <div className="card-base card-hover group h-full">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[reason.color]} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <reason.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-surface-900 dark:text-surface-50 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-surface-600 dark:text-surface-400 leading-relaxed mb-3">
                    {reason.description}
                  </p>
                  <span className={`text-xs font-semibold ${textColorMap[reason.color]}`}>
                    {reason.stat}
                  </span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
