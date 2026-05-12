"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { bio, stats, techDNA } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="container-portfolio">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">About Me</p>
          <h2 className="section-heading text-white">
            The Developer Behind the{" "}
            <span className="gradient-text">Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-8">{bio}</p>

            {/* Tech DNA */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Tech DNA</p>
              <div className="flex flex-wrap gap-2">
                {techDNA.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold
                      bg-gradient-to-r from-blue-500/10 to-cyan-500/10
                      border border-blue-500/20 text-blue-300
                      hover:border-blue-500/40 hover:bg-blue-500/15 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <GlassCard
                key={stat.label}
                delay={i * 0.1}
                glowColor={i % 2 === 0 ? "blue" : "cyan"}
                className="p-6 text-center"
              >
                <div className="font-display font-black text-4xl md:text-5xl gradient-text mb-2">
                  <AnimatedCounter
                    value={parseInt(stat.value)}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
