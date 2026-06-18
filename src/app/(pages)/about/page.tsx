import type { Metadata } from "next";
import { createMetadata, breadcrumbSchema } from "@/lib/seo";
import { AnimateIn, StaggerContainer, staggerItem } from "@/components/animations/AnimateIn";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";
import { motion } from "framer-motion";
import { Award, Globe, Users, Zap, Heart, Target, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Vswot — a premium digital marketing agency founded on the principle that every business deserves world-class digital marketing. Meet our team and discover our story.",
  path: "/about",
  keywords: ["about vswot", "digital marketing agency team", "who we are"],
});

const values = [
  { icon: Target, title: "Results First", description: "Every decision we make is measured by its impact on your bottom line. ROI isn't a buzzword — it's our north star." },
  { icon: Heart, title: "Client Partnership", description: "We don't take on clients; we take on partners. Your success is our success, and we're in it for the long haul." },
  { icon: Lightbulb, title: "Constant Innovation", description: "Digital marketing never stops evolving. Neither do we. We're always learning, testing, and pushing boundaries." },
  { icon: Shield, title: "Radical Transparency", description: "No hidden fees, no BS reports, no vanity metrics. Full visibility into everything we do and every dollar we spend." },
];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", department: "Leadership", initials: "AM", specialty: "Digital Strategy" },
  { name: "Jessica Liu", role: "Chief Marketing Officer", department: "Marketing", initials: "JL", specialty: "Performance Marketing" },
  { name: "Ryan Patel", role: "Head of SEO", department: "SEO", initials: "RP", specialty: "Technical SEO" },
  { name: "Maria Santos", role: "Creative Director", department: "Creative", initials: "MS", specialty: "Brand & Design" },
  { name: "James Wilson", role: "Lead Developer", department: "Development", initials: "JW", specialty: "Next.js & React" },
  { name: "Sophie Chen", role: "Social Media Lead", department: "Social", initials: "SC", specialty: "Community Growth" },
];

const milestones = [
  { year: "2020", title: "Founded", description: "Vswot was founded with a simple mission: deliver premium digital marketing with measurable results." },
  { year: "2021", title: "50 Clients", description: "Reached 50 active clients milestone across 8 different industries within our first year." },
  { year: "2022", title: "Team of 20", description: "Scaled our team to 20 specialists across SEO, paid media, design, and development." },
  { year: "2023", title: "200+ Clients", description: "Crossed the 200 client milestone while maintaining 98% retention — a testament to our results." },
  { year: "2024", title: "Global Reach", description: "Expanded to serve clients in 15+ countries, managing $10M+ in annual ad spend." },
];

export default function AboutPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://vswot.com" },
    { name: "About Us", url: "https://vswot.com/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-surface-950 relative overflow-hidden">
        <div className="absolute inset-0 mesh-bg opacity-60" />
        <div className="container-custom relative">
          <AnimateIn className="max-w-4xl">
            <div className="eyebrow mb-6">About Vswot</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              We&apos;re the Agency That{" "}
              <span className="gradient-text">Actually Delivers</span>
            </h1>
            <p className="text-xl text-surface-400 leading-relaxed max-w-3xl">
              Founded in 2020, Vswot is a premium digital marketing agency built on a radical idea: that great marketing should produce measurable business outcomes — not just impressive-looking reports.
            </p>
          </AnimateIn>

          {/* Stats row */}
          <AnimateIn delay={0.2} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "200+", label: "Clients Worldwide" },
              { value: "50+", label: "Team Members" },
              { value: "98%", label: "Client Retention" },
              { value: "$10M+", label: "Ad Spend Managed" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-5 border border-white/5 text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-surface-400">{stat.label}</div>
              </div>
            ))}
          </AnimateIn>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-white dark:bg-surface-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div className="eyebrow">Our Mission</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white mb-6">
                Democratizing World-Class Digital Marketing
              </h2>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-6">
                We believe every ambitious business — not just Fortune 500 companies — deserves access to premium digital marketing strategies that drive real growth. That&apos;s why we built Vswot.
              </p>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                Our team of specialists combines deep expertise in SEO, paid media, creative design, and web development to build digital marketing systems that consistently generate leads, sales, and long-term brand equity for our clients.
              </p>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Globe, label: "Global Reach", value: "15+ Countries" },
                  { icon: Users, label: "Team Size", value: "50+ Specialists" },
                  { icon: Award, label: "Industry Awards", value: "50+ Won" },
                  { icon: Zap, label: "Campaigns Launched", value: "500+" },
                ].map((item) => (
                  <div key={item.label} className="card-base text-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div className="text-xl font-bold text-surface-900 dark:text-white">{item.value}</div>
                    <div className="text-xs text-surface-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-surface-50 dark:bg-surface-900/30">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <div className="eyebrow">Our Values</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white">
              What We Stand For
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <div className="card-base card-hover text-center h-full">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-surface-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-white dark:bg-surface-950">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <div className="eyebrow">Our Journey</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white">
              From Startup to{" "}
              <span className="gradient-text">Market Leader</span>
            </h2>
          </AnimateIn>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500/20 via-brand-500 to-brand-500/20 md:-translate-x-px" />
            
            <StaggerContainer className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  variants={staggerItem}
                  className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                    <div className="card-base inline-block">
                      <div className="text-xs font-mono font-bold text-brand-400 mb-1">{m.year}</div>
                      <h3 className="font-semibold text-surface-900 dark:text-white mb-1">{m.title}</h3>
                      <p className="text-sm text-surface-600 dark:text-surface-400">{m.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-xs text-white font-bold z-10 flex-shrink-0">
                    {m.year.slice(2)}
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-py bg-surface-50 dark:bg-surface-900/30">
        <div className="container-custom">
          <AnimateIn className="text-center mb-12">
            <div className="eyebrow">Meet the Team</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-900 dark:text-white">
              The Experts Behind Your Growth
            </h2>
          </AnimateIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((member) => (
              <motion.div key={member.name} variants={staggerItem}>
                <div className="card-base card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-glow-sm group-hover:shadow-glow transition-shadow">
                    {member.initials}
                  </div>
                  <h3 className="text-sm font-semibold text-surface-900 dark:text-white">{member.name}</h3>
                  <p className="text-xs text-surface-500 mt-0.5">{member.role}</p>
                  <span className="mt-2 badge bg-brand-500/10 text-brand-400 text-xs">{member.specialty}</span>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
