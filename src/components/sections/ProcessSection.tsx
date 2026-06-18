"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart2, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { AnimateIn, StaggerContainer, staggerItem } from "@/components/animations/AnimateIn";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Discovery & Strategy",
    description:
      "We deep-dive into your business, industry, competitors, and target audience to build a custom digital strategy aligned with your goals.",
    deliverable: "Strategy Document + Roadmap",
    duration: "Week 1–2",
    color: "from-brand-500 to-violet-600",
  },
  {
    step: "02",
    icon: BarChart2,
    title: "Research & Analysis",
    description:
      "In-depth keyword research, competitor analysis, audience insights, and market opportunity mapping to find your competitive advantage.",
    deliverable: "Research Report + Opportunity Map",
    duration: "Week 2–3",
    color: "from-cyan-500 to-blue-600",
  },
  {
    step: "03",
    icon: Lightbulb,
    title: "Creative Development",
    description:
      "Our creative team designs, writes, and produces all assets — from landing pages and ad creatives to content and brand materials.",
    deliverable: "Creative Assets + Content Calendar",
    duration: "Week 3–5",
    color: "from-amber-500 to-orange-600",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Execute",
    description:
      "We launch campaigns with precision, ensuring tracking, pixels, and analytics are configured for complete visibility from day one.",
    deliverable: "Live Campaigns + Analytics Setup",
    duration: "Week 5–6",
    color: "from-green-500 to-teal-600",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Optimize & Scale",
    description:
      "Continuous A/B testing, performance analysis, and strategic scaling to compound your results month over month, quarter over quarter.",
    deliverable: "Monthly Reports + Scaling Plan",
    duration: "Ongoing",
    color: "from-fuchsia-500 to-brand-500",
  },
];

export function ProcessSection() {
  return (
    <section className="section-py bg-surface-50 dark:bg-surface-900/30 relative overflow-hidden" id="process">
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #7c5ff2 1px, transparent 1px), linear-gradient(to bottom, #7c5ff2 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom">
        <AnimateIn className="text-center mb-16">
          <div className="eyebrow">How We Work</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-surface-900 dark:text-white mb-4">
            Our Proven{" "}
            <span className="gradient-text">5-Step Process</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            A structured methodology that has delivered consistent results for 200+ clients across every industry and market.
          </p>
        </AnimateIn>

        {/* Steps */}
        <StaggerContainer className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-12 bottom-12 w-0.5 bg-gradient-to-b from-brand-500/20 via-brand-500/40 to-brand-500/20" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className={`relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
                  i % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div className="card-base card-hover group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                    
                    <div className="relative flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-mono font-bold text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-md">
                            STEP {step.step}
                          </span>
                          <span className="text-xs text-surface-500">{step.duration}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-3">
                          {step.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-surface-500">Deliverable:</span>
                          <span className="text-xs font-medium text-surface-700 dark:text-surface-300">
                            {step.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center step number (desktop) */}
                <div className={`hidden lg:flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-glow text-white font-display font-bold text-lg`}>
                      {step.step}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
