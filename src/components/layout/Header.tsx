"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Menu, X, Sun, Moon, ChevronDown, Zap, Globe, Search, 
  BarChart2, Share2, FileText, Palette, Video, MapPin,
  Cpu, Phone
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  { label: "Website Design", href: "/services/website-development", icon: Globe, description: "Stunning, conversion-focused websites" },
  { label: "Website Development", href: "/services/website-development", icon: Cpu, description: "Scalable, high-performance web apps" },
  { label: "SEO", href: "/services/seo", icon: Search, description: "Rank higher, drive organic traffic" },
  { label: "Local SEO", href: "/services/local-seo", icon: MapPin, description: "Dominate local search results" },
  { label: "GEO / AEO Optimization", href: "/services/geo-aeo", icon: Zap, description: "AI search & featured snippet optimization" },
  { label: "Performance Marketing", href: "/services/performance-marketing", icon: BarChart2, description: "Google & Meta Ads that convert" },
  { label: "Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, description: "Build brand presence & community" },
  { label: "Content Marketing", href: "/services/content-marketing", icon: FileText, description: "Content that attracts & converts" },
  { label: "Graphic Design", href: "/services/graphic-design", icon: Palette, description: "Visual identity that stands out" },
  { label: "Video Editing", href: "/services/video-editing", icon: Video, description: "Compelling video content" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-surface-950/90 backdrop-blur-xl border-b border-surface-200/50 dark:border-surface-800/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
                <span className="text-white font-display font-bold text-lg leading-none">V</span>
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-brand-400 to-cyan-500 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-xl text-surface-900 dark:text-white tracking-tight">
                Vswot
              </span>
              <span className="text-2xs text-surface-500 dark:text-surface-400 font-medium tracking-widest uppercase">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "nav-link flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors",
                      pathname.startsWith("/services") && "text-brand-500 dark:text-brand-400"
                    )}
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen && "rotate-180")}
                    />
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] glass dark:bg-surface-900/95 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-2xl overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-widest mb-3 px-2">
                            Our Services
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-500/5 dark:hover:bg-brand-500/10 transition-colors group/item"
                              >
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-500/10 dark:bg-brand-500/15 flex items-center justify-center group-hover/item:bg-brand-500/20 transition-colors">
                                  <service.icon className="w-4 h-4 text-brand-500 dark:text-brand-400" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-surface-900 dark:text-surface-50 group-hover/item:text-brand-500 transition-colors">
                                    {service.label}
                                  </div>
                                  <div className="text-xs text-surface-500 dark:text-surface-400 mt-0.5">
                                    {service.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-surface-200 dark:border-surface-700">
                            <Link
                              href="/services"
                              className="flex items-center justify-center gap-2 text-sm font-medium text-brand-500 hover:text-brand-400 transition-colors py-1"
                            >
                              View all services →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "nav-link px-4 py-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors",
                    pathname === link.href && "text-brand-500 dark:text-brand-400 font-medium"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="btn-icon text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-surface-50 hover:bg-surface-100 dark:hover:bg-surface-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:flex btn btn-primary text-sm px-5 py-2.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Get Free Consultation
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden btn-icon text-surface-700 dark:text-surface-300"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white dark:bg-surface-950 border-b border-surface-200 dark:border-surface-800 overflow-hidden"
          >
            <nav className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center py-3 px-4 rounded-xl text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-brand-500 bg-brand-500/10"
                        : "text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile services list */}
              <div className="py-2 px-4">
                <div className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-2">
                  Services
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-2 py-2 px-3 rounded-lg text-xs text-surface-600 dark:text-surface-400 hover:text-brand-500 hover:bg-brand-500/5 transition-colors"
                    >
                      <service.icon className="w-3.5 h-3.5 flex-shrink-0" />
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 mt-1 border-t border-surface-200 dark:border-surface-800">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full justify-center py-3"
                >
                  Get Free Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
