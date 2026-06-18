"use client";

import { AnimateIn } from "@/components/animations/AnimateIn";

// Placeholder client logos as text badges (replace with actual logos via Sanity)
const clients = [
  "TechNova", "Elevate Retail", "Bloom Beauty", "FinEdge Capital",
  "Rodriguez Law", "CloudStack", "MediCore", "GreenPath",
  "Apex Ventures", "NovaBuild", "SwiftLogix", "PeakBrands",
];

export function ClientLogosSection() {
  return (
    <section className="py-14 bg-white dark:bg-surface-950 relative overflow-hidden border-y border-surface-100 dark:border-surface-800/50">
      <div className="container-custom mb-8">
        <AnimateIn className="text-center">
          <p className="text-sm font-medium text-surface-500 dark:text-surface-400 uppercase tracking-widest">
            Trusted by 200+ ambitious businesses
          </p>
        </AnimateIn>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-sm font-semibold text-surface-500 dark:text-surface-400 hover:text-brand-500 hover:border-brand-500/30 transition-colors cursor-default flex-shrink-0"
            >
              {client}
            </div>
          ))}
        </div>
        <div className="flex gap-8 animate-marquee2 whitespace-nowrap absolute top-0">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 py-2.5 rounded-xl bg-surface-50 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 text-sm font-semibold text-surface-500 dark:text-surface-400 flex-shrink-0"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
