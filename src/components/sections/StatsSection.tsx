"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { AnimateIn, StaggerContainer, staggerItem } from "@/components/animations/AnimateIn";
import { motion } from "framer-motion";

const stats = [
  {
    value: 200,
    suffix: "+",
    label: "Clients Served",
    description: "Across 15+ industries worldwide",
    color: "text-brand-400",
  },
  {
    value: 350,
    suffix: "%",
    label: "Average ROI",
    description: "Measured across all campaigns",
    color: "text-cyan-400",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Long-term growth partnerships",
    color: "text-fuchsia-400",
  },
  {
    value: 5,
    suffix: "M+",
    label: "Revenue Generated",
    prefix: "$",
    description: "For our clients last year",
    color: "text-amber-400",
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Client Rating",
    description: "Verified reviews on Google",
    color: "text-green-400",
    decimals: 1,
  },
  {
    value: 50,
    suffix: "+",
    label: "Awards Won",
    description: "Industry recognition & excellence",
    color: "text-orange-400",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={staggerItem}
      className="relative group"
    >
      <div className="card-base card-hover h-full text-center">
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-500/0 to-brand-500/0 group-hover:from-brand-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500" />
        
        <div className="relative">
          <div className={`text-4xl md:text-5xl font-display font-bold ${stat.color} mb-2`}>
            {inView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                decimals={stat.decimals || 0}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                enableScrollSpy={false}
              />
            ) : (
              <span>{stat.prefix}{0}{stat.suffix}</span>
            )}
          </div>
          <div className="text-base font-semibold text-surface-900 dark:text-surface-50 mb-1.5">
            {stat.label}
          </div>
          <div className="text-sm text-surface-500 dark:text-surface-400">
            {stat.description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="section-py bg-white dark:bg-surface-950 relative overflow-hidden">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      
      <div className="container-custom">
        <AnimateIn className="text-center mb-12">
          <div className="eyebrow">By the Numbers</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white">
            Results That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-surface-600 dark:text-surface-400 mt-3 max-w-2xl mx-auto">
            We don&apos;t just promise results — we deliver measurable, repeatable growth for every client.
          </p>
        </AnimateIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
