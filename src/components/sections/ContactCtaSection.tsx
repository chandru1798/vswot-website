"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { AnimateIn } from "@/components/animations/AnimateIn";

export function ContactCtaSection() {
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "")}?text=${encodeURIComponent("Hi! I'd like to discuss a digital marketing project with Vswot.")}`;

  return (
    <section className="section-py bg-surface-50 dark:bg-surface-900/30 relative overflow-hidden">
      <div className="container-custom">
        <AnimateIn>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-violet-800" />
            <div className="absolute inset-0 mesh-bg opacity-30" />

            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/80 mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Currently accepting new clients
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white mb-6 text-balance">
                  Ready to Dominate
                  <br />
                  Your Digital Market?
                </h2>

                <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Book a free strategy session and discover exactly how Vswot can help you attract more customers, generate more revenue, and outperform your competition online.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn bg-white text-brand-700 hover:bg-white/90 btn-lg font-semibold w-full sm:w-auto shadow-xl hover:shadow-2xl"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-green-500 text-white hover:bg-green-400 btn-lg font-semibold w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat on WhatsApp
                  </a>
                </div>

                <p className="text-sm text-white/50 mt-6">
                  No commitment required · Free 30-minute consultation · Response within 2 hours
                </p>
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
