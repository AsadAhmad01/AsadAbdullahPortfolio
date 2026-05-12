"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/data";

const colorMap = {
  gold: {
    bg: "from-amber-500/15 to-yellow-500/5 border-amber-500/25",
    glow: "hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(245,158,11,0.15)]",
    text: "text-amber-300",
    badge: "bg-amber-500/20 border-amber-500/30 text-amber-300",
  },
  silver: {
    bg: "from-slate-400/15 to-slate-500/5 border-slate-400/25",
    glow: "hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(148,163,184,0.15)]",
    text: "text-slate-300",
    badge: "bg-slate-400/15 border-slate-400/25 text-slate-300",
  },
  bronze: {
    bg: "from-orange-600/15 to-orange-700/5 border-orange-600/25",
    glow: "hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(234,88,12,0.15)]",
    text: "text-orange-300",
    badge: "bg-orange-500/15 border-orange-500/25 text-orange-300",
  },
};

export function Awards() {
  return (
    <section id="awards" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/3 to-transparent pointer-events-none" />

      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Recognition</p>
          <h2 className="section-heading text-white">
            Awards &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Four ArhamSoft company awards across 4+ years — recognizing consistent performance and technical excellence.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((award, i) => {
            const colors = colorMap[award.color];
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-2xl bg-gradient-to-br border p-6 text-center
                  backdrop-blur-md hover:-translate-y-1 transition-all duration-300 cursor-default
                  ${colors.bg} ${colors.glow}`}
              >
                {/* Icon */}
                <div className="text-5xl mb-4 drop-shadow-lg">{award.icon}</div>

                {/* Title */}
                <h3 className={`font-display font-bold text-base mb-2 leading-tight ${colors.text}`}>
                  {award.title}
                </h3>

                {/* Issuer */}
                <p className="text-slate-400 text-sm mb-3">{award.issuer}</p>

                {/* Date Badge */}
                <span className={`inline-block text-xs px-3 py-1 rounded-full border font-medium ${colors.badge}`}>
                  {award.date}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
