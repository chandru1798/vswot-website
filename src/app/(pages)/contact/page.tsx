"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, Loader2, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Website Design & Development",
  "SEO",
  "Local SEO",
  "GEO / AEO Optimization",
  "Performance Marketing (Google & Meta Ads)",
  "Social Media Marketing",
  "Content Marketing",
  "Graphic Design",
  "Video Editing",
  "Full Digital Marketing Package",
  "Other",
];

const budgets = [
  "Under $1,500/month",
  "$1,500 - $3,000/month",
  "$3,000 - $5,000/month",
  "$5,000 - $10,000/month",
  "$10,000+/month",
  "One-time project",
];

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@vswot.com", href: "mailto:hello@vswot.com" },
  { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
  { icon: Clock, label: "Working Hours", value: "Mon–Fri: 9am – 6pm PST", href: "#" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
        toast.success("Message sent! We'll get back to you within 2 hours.");
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="container-custom relative text-center">
          <AnimateIn>
            <div className="eyebrow mb-4">Get In Touch</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              Let&apos;s Grow Your{" "}
              <span className="gradient-text">Business Together</span>
            </h1>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Book a free strategy call or send us a message. We respond within 2 hours during business hours.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="section-py bg-surface-50 dark:bg-surface-900/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <AnimateIn direction="left">
                <div className="card-base">
                  <h2 className="text-xl font-semibold text-surface-900 dark:text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                          <item.icon className="w-4 h-4 text-brand-500" />
                        </div>
                        <div>
                          <div className="text-xs text-surface-500 mb-0.5">{item.label}</div>
                          <div className="text-sm font-medium text-surface-900 dark:text-white group-hover:text-brand-500 transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/15550000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:border-green-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">Chat on WhatsApp</div>
                    <div className="text-xs text-surface-500">Instant response available</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-500 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Trust badges */}
                <div className="card-base">
                  <h3 className="text-sm font-semibold text-surface-900 dark:text-white mb-4">
                    Why Choose Vswot?
                  </h3>
                  <ul className="space-y-2.5">
                    {[
                      "Free 30-min strategy consultation",
                      "Response within 2 business hours",
                      "No long-term contracts required",
                      "Dedicated account manager assigned",
                      "100% transparent reporting",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <AnimateIn direction="right">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-base text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-surface-600 dark:text-surface-400 mb-6">
                      Thank you for reaching out. Our team will review your message and get back to you within 2 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-outline"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="card-base space-y-5">
                    <div>
                      <h2 className="text-xl font-semibold text-surface-900 dark:text-white mb-1">
                        Send Us a Message
                      </h2>
                      <p className="text-sm text-surface-500">
                        Tell us about your project and goals. The more detail, the better.
                      </p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register("name")}
                          placeholder="John Smith"
                          className={cn("input-field", errors.name && "border-red-500 focus:ring-red-500")}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="john@company.com"
                          className={cn("input-field", errors.email && "border-red-500 focus:ring-red-500")}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          {...register("phone")}
                          placeholder="+1 (555) 000-0000"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
                          Company Name
                        </label>
                        <input
                          {...register("company")}
                          placeholder="Your Company Inc."
                          className="input-field"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
                        Service Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        {...register("service")}
                        className={cn("input-field", errors.service && "border-red-500")}
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>
                      )}
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
                        Monthly Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {budgets.map((b) => (
                          <label key={b} className="cursor-pointer">
                            <input
                              type="radio"
                              {...register("budget")}
                              value={b}
                              className="sr-only peer"
                            />
                            <div className="px-3 py-2 rounded-lg border border-surface-200 dark:border-surface-700 text-xs text-surface-600 dark:text-surface-400 text-center hover:border-brand-400 peer-checked:border-brand-500 peer-checked:bg-brand-500/10 peer-checked:text-brand-500 transition-all cursor-pointer">
                              {b}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-1.5">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us about your business, goals, current challenges, and what success looks like for you..."
                        className={cn("input-field resize-none", errors.message && "border-red-500")}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg w-full justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message & Request Consultation
                        </>
                      )}
                    </button>

                    <p className="text-xs text-surface-500 text-center">
                      By submitting, you agree to our{" "}
                      <a href="/privacy-policy" className="text-brand-400 hover:underline">Privacy Policy</a>.
                      We never share your data.
                    </p>
                  </form>
                )}
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
