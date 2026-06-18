"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, TrendingUp, Users, Award } from "lucide-react";

const socialProof = [
  { icon: Star, value: "4.9/5", label: "Rating" },
  { icon: Users, value: "200+", label: "Clients" },
  { icon: TrendingUp, value: "350%", label: "Avg. ROI" },
  { icon: Award, value: "50+", label: "Awards" },
];

const floatingCards = [
  {
    label: "Organic Traffic",
    value: "+287%",
    sub: "Last 90 days",
    color: "from-brand-500 to-cyan-500",
    delay: 0,
  },
  {
    label: "Lead Generation",
    value: "+143%",
    sub: "Month over month",
    color: "from-fuchsia-500 to-brand-500",
    delay: 0.3,
  },
  {
    label: "ROAS",
    value: "6.4x",
    sub: "Google & Meta Ads",
    color: "from-amber-500 to-orange-500",
    delay: 0.6,
  },
];

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ["#7c5ff2", "#06b6d4", "#d946ef", "#8b5cf6"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw subtle connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#7c5ff2";
            ctx.globalAlpha = (1 - dist / 120) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        });
      });

      animId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const titleWords = ["Drive", "Extraordinary", "Digital", "Growth"];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-950">
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-bg" aria-hidden="true" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 badge-brand mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Premium Digital Marketing Agency
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight"
            >
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.25em] last:mr-0"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {i === 1 ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-lg md:text-xl text-surface-400 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            We design, develop, and market world-class digital experiences that{" "}
            <span className="text-surface-200 font-medium">attract, engage, and convert</span>{" "}
            your ideal customers — at scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn btn-primary btn-lg w-full sm:w-auto group">
              Start Your Growth Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="btn btn-ghost btn-lg text-surface-300 hover:text-white w-full sm:w-auto gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-surface-800 hover:bg-surface-700 flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 text-brand-400 translate-x-0.5" fill="currentColor" />
              </div>
              See Our Work
            </Link>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {socialProof.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-brand-500/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white leading-none">{value}</div>
                  <div className="text-xs text-surface-500">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating result cards */}
        <div className="hidden lg:block">
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + card.delay }}
              className={`absolute glass rounded-2xl p-4 shadow-card-lg border border-white/5 ${
                i === 0 ? "left-4 xl:left-12 top-1/2 -translate-y-16" :
                i === 1 ? "right-4 xl:right-12 top-1/3" :
                "right-4 xl:right-20 bottom-1/3"
              }`}
              style={{
                animation: `float ${5 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <div className={`text-xs font-semibold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-1`}>
                {card.label}
              </div>
              <div className="text-2xl font-display font-bold text-white">{card.value}</div>
              <div className="text-xs text-surface-400 mt-0.5">{card.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-2 mt-16"
        >
          <span className="text-xs text-surface-600 tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-surface-700 flex items-center justify-center"
          >
            <div className="w-1 h-2 bg-brand-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />
    </section>
  );
}
