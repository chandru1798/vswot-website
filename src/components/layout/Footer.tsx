"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter, Linkedin, Instagram, Facebook, Youtube,
  Mail, Phone, MapPin, ArrowRight, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "SEO Optimization", href: "/services/seo" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "GEO / AEO Optimization", href: "/services/geo-aeo" },
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing" },
  { label: "Content Marketing", href: "/services/content-marketing" },
  { label: "Graphic Design", href: "/services/graphic-design" },
  { label: "Video Editing", href: "/services/video-editing" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

const social = [
  { icon: Twitter, href: "https://twitter.com/vswot", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/vswot", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/vswot", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/vswot", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@vswot", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-surface-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 mesh-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      {/* CTA Banner */}
      <div className="relative border-b border-surface-800/50">
        <div className="container-custom py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-cyan-500/10 rounded-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 badge-brand mb-4">
                <Zap className="w-3.5 h-3.5" />
                Ready to Scale?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Let&apos;s Build Something{" "}
                <span className="gradient-text">Extraordinary</span>
              </h2>
              <p className="text-surface-400 text-lg max-w-2xl mx-auto mb-8">
                Join 200+ businesses that trust Vswot to drive digital growth, generate leads, and build lasting online presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn btn-primary btn-lg w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/portfolio" className="btn btn-outline btn-lg w-full sm:w-auto">
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg leading-none">V</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-xl text-white">Vswot</span>
                <span className="text-2xs text-surface-500 font-medium tracking-widest uppercase">Digital Agency</span>
              </div>
            </Link>
            <p className="text-surface-400 text-sm leading-relaxed mb-6">
              A premium digital marketing agency helping ambitious brands grow through strategic design, SEO, and performance marketing.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {[
                { icon: Mail, text: "hello@vswot.com", href: "mailto:hello@vswot.com" },
                { icon: Phone, text: "+1 (555) 000-0000", href: "tel:+15550000000" },
                { icon: MapPin, text: "San Francisco, CA", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 text-sm text-surface-400 hover:text-brand-400 transition-colors group"
                >
                  <div className="w-7 h-7 rounded-lg bg-surface-800 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-600 group-hover:bg-brand-400 transition-colors flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-400 hover:text-brand-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-600 group-hover:bg-brand-400 transition-colors flex-shrink-0" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">
              Newsletter
            </h3>
            <p className="text-sm text-surface-400 mb-4">
              Get weekly digital marketing insights, tips, and strategies in your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="input-field text-sm bg-surface-900 border-surface-700"
              />
              <button type="submit" className="btn btn-primary justify-center py-2.5">
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="text-xs text-surface-600 mt-2">
              No spam. Unsubscribe anytime.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 mt-6">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-surface-800 hover:bg-brand-600 flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-3.5 h-3.5 text-surface-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-surface-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-500">
            © {new Date().getFullYear()} Vswot Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-surface-500 hover:text-surface-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-xs text-surface-500 hover:text-surface-300 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-xs text-surface-600">
              Made with ♥ by Vswot
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
