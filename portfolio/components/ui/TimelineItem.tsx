"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  type: "full-time" | "freelance";
  bullets: string[];
  techStack: string[];
  isLast?: boolean;
  index: number;
}

export function TimelineItem({
  company,
  role,
  period,
  type,
  bullets,
  techStack,
  isLast = false,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex gap-6 pb-10"
    >
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-cyan flex-shrink-0 mt-1 z-10
          shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
        {!isLast && (
          <div className="absolute top-4 w-0.5 h-full bg-gradient-to-b from-blue-500/40 via-purple-500/20 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="text-lg font-bold text-white font-display leading-tight">{role}</h3>
            <p className="text-blue-400 font-semibold text-sm">{company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-slate-400 text-sm">{period}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                type === "freelance"
                  ? "bg-purple-500/15 text-purple-300 border border-purple-500/25"
                  : "bg-blue-500/15 text-blue-300 border border-blue-500/25"
              }`}
            >
              {type === "freelance" ? "Freelance" : "Full-time"}
            </span>
          </div>
        </div>

        {/* Bullets */}
        <ul className="mt-3 space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
              <span className="w-1 h-1 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
