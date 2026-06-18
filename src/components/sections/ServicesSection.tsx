"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe, Search, MapPin, Zap, BarChart2, Share2,
  FileText, Palette, Video, ArrowRight, Cpu
} from "lucide-react";
import { AnimateIn, StaggerContainer, staggerItem } from "@/components/animations/AnimateIn";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description: "Stunning, conversion-optimized websites that captivate your audience and drive measurable business results.",
    href: "/services/website-development",
    tags: ["UI/UX", "Conversion", "Mobile-First"],
    color: "from-brand-500 to-violet-600",
    glow: "group-hover:shadow-glow",
  },
  {
    icon: Cpu,
    title: "Website Development",
    description: "Scalable Next.js, React, and WordPress solutions built for performance, security, and growth.",
    href: "/services/website-development",
    tags: ["Next.js", "React", "WordPress"],
    color: "from-cyan-500 to-blue-600",
    glow: "group-hover:shadow-glow-cyan",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Data-driven SEO strategies that improve rankings, increase organic traffic, and deliver long-term ROI.",
    href: "/services/seo",
    tags: ["On-Page", "Technical", "Link Building"],
    color: "from-green-500 to-teal-600",
    glow: "",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate local search results and Google Maps to attract more customers from your area.",
    href: "/services/local-seo",
    tags: ["Google Maps", "Citations", "Reviews"],
    color: "from-orange-500 to-amber-600",
    glow: "",
  },
  {
    icon: Zap,
    title: "GEO / AEO Optimization",
    description: "Optimize for AI-powered search engines, featured snippets, and answer engine results.",
    href: "/services/geo-aeo",
    tags: ["AI Search", "Featured Snippets", "Gemini"],
    color: "from-yellow-500 to-orange-600",
    glow: "",
    isNew: true,
  },
  {
    icon: BarChart2,
    title: "Performance Marketing",
    description: "ROI-focused Google Ads and Meta Ads campaigns that maximize every dollar of your ad spend.",
    href: "/services/performance-marketing",
    tags: ["Google Ads", "Meta Ads", "PPC"],
    color: "from-red-500 to-rose-600",
    glow: "",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media management that builds brand awareness, community, and leads.",
    href: "/services/social-media-marketing",
    tags: ["Instagram", "LinkedIn", "TikTok"],
    color: "from-pink-500 to-fuchsia-600",
    glow: "",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "High-quality content strategies that educate, engage, and convert your target audience.",
    href: "/services/content-marketing",
    tags: ["Blog", "Strategy", "Distribution"],
    color: "from-indigo-500 to-brand-600",
    glow: "",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Professional brand identity, marketing materials, and visual assets that make you unforgettable.",
    href: "/services/graphic-design",
    tags: ["Brand Identity", "Marketing", "Print"],
    color: "from-purple-500 to-brand-600",
    glow: "",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Compelling video content for ads, social media, and brand storytelling that drives engagement.",
    href: "/services/video-editing",
    tags: ["Reels", "Ads", "Brand Films"],
    color: "from-teal-500 to-cyan-600",
    glow: "",
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={service.href} className="block group h-full">
        <div className="card-base card-hover h-full relative overflow-hidden">
          {/* Gradient background on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
          />

          {/* New badge */}
          {service.isNew && (
            <div className="absolute top-4 right-4">
              <span className="badge bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs">
                New
              </span>
            </div>
          )}

          {/* Icon */}
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg ${service.glow} transition-shadow duration-300`}
          >
            <service.icon className="w-5 h-5 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2.5 group-hover:text-brand-500 transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1.5 text-sm font-medium text-brand-500 dark:text-brand-400 mt-auto">
            Learn more
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="section-py bg-surface-50 dark:bg-surface-900/30 relative overflow-hidden" id="services">
      <div className="container-custom">
        {/* Header */}
        <AnimateIn className="text-center mb-14">
          <div className="eyebrow">What We Do</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-surface-900 dark:text-white mb-4">
            Full-Spectrum Digital{" "}
            <span className="gradient-text">Marketing Services</span>
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-3xl mx-auto leading-relaxed">
            From brand strategy to performance marketing, we offer everything your business needs to dominate the digital landscape and outpace the competition.
          </p>
        </AnimateIn>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimateIn className="text-center mt-12" delay={0.2}>
          <p className="text-surface-600 dark:text-surface-400 mb-5">
            Not sure which service you need?
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get a Free Strategy Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
