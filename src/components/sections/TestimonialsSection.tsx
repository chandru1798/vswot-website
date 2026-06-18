"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimateIn } from "@/components/animations/AnimateIn";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechNova Solutions",
    industry: "SaaS",
    content:
      "Vswot transformed our digital presence completely. Our organic traffic increased by 312% in just 6 months, and the quality of leads has been phenomenal. Their team is incredibly responsive, strategic, and genuinely invested in our success.",
    rating: 5,
    service: "SEO + Content Marketing",
    avatar: "SJ",
    result: "+312% Organic Traffic",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Elevate Retail",
    industry: "E-Commerce",
    content:
      "The Google and Meta Ads campaigns Vswot set up for us have been a game-changer. We went from a 1.8x ROAS to a consistent 6.2x ROAS within 3 months. Their data-driven approach and constant optimization make all the difference.",
    rating: 5,
    service: "Performance Marketing",
    avatar: "MC",
    result: "6.2x ROAS Achieved",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Founder",
    company: "Bloom Beauty Co.",
    industry: "Beauty & Wellness",
    content:
      "Our new website designed by Vswot is absolutely stunning. Conversion rates went up by 85% from the first month. More importantly, our bounce rate dropped significantly and customers are spending more time engaging with our brand.",
    rating: 5,
    service: "Website Design + Development",
    avatar: "EW",
    result: "+85% Conversion Rate",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Owner",
    company: "Rodriguez Law Firm",
    industry: "Legal Services",
    content:
      "Local SEO with Vswot has been the best investment I've made. We now rank #1 for 15+ local keywords in our city, and monthly inquiries have tripled. The team understands the local market and delivers consistently.",
    rating: 5,
    service: "Local SEO",
    avatar: "DR",
    result: "#1 Local Rankings x15",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Head of Marketing",
    company: "FinEdge Capital",
    industry: "Financial Services",
    content:
      "The social media strategy Vswot built for us created a brand personality we're proud of. Our LinkedIn following grew from 2K to 45K in a year, and we've generated multiple enterprise deals directly from social media.",
    rating: 5,
    service: "Social Media Marketing",
    avatar: "PP",
    result: "2K → 45K LinkedIn",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-surface-600"}`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="section-py bg-surface-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-60" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="container-custom relative">
        <AnimateIn className="text-center mb-14">
          <div className="eyebrow">Testimonials</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            What Our Clients{" "}
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-surface-400 max-w-2xl mx-auto">
            Don&apos;t take our word for it — hear directly from the businesses we&apos;ve helped grow.
          </p>
        </AnimateIn>

        <div className="max-w-4xl mx-auto">
          {/* Main testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="glass rounded-3xl p-8 md:p-12 border border-white/5 relative">
                {/* Quote icon */}
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-16 h-16 text-brand-400" />
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <StarRating rating={testimonials[current].rating} />
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 font-medium">
                  &ldquo;{testimonials[current].content}&rdquo;
                </blockquote>

                {/* Author + result */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonials[current].name}</div>
                      <div className="text-sm text-surface-400">
                        {testimonials[current].role} · {testimonials[current].company}
                      </div>
                      <div className="text-xs text-surface-500 mt-0.5">
                        {testimonials[current].industry}
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-xl px-4 py-2.5 border border-brand-500/20">
                    <div className="text-xs text-surface-400 mb-0.5">{testimonials[current].service}</div>
                    <div className="text-sm font-bold text-brand-400">{testimonials[current].result}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-brand-500"
                      : "w-2 h-2 bg-surface-600 hover:bg-surface-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-surface-400 hover:text-white hover:border-brand-500/30 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-surface-400 hover:text-white hover:border-brand-500/30 transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mini testimonial cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setCurrent(i)}
              className={`p-3 rounded-xl border transition-all duration-200 text-left ${
                i === current
                  ? "bg-brand-500/15 border-brand-500/40"
                  : "glass border-white/5 hover:border-white/10"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-lg bg-brand-500/20 flex items-center justify-center text-xs text-brand-400 font-bold">
                  {t.avatar}
                </div>
                <span className="text-xs font-medium text-surface-300 truncate">{t.name}</span>
              </div>
              <div className="text-xs text-brand-400 font-semibold">{t.result}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
