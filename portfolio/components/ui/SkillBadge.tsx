"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SkillItem } from "@/lib/data";

interface SkillBadgeProps {
  skill: SkillItem;
  color: "blue" | "cyan" | "purple" | "green" | "orange" | "pink";
  delay?: number;
}

const colorMap = {
  blue: {
    bg: "bg-blue-500/10 hover:bg-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
    text: "text-blue-300",
    dot: "bg-blue-400",
  },
  cyan: {
    bg: "bg-cyan-500/10 hover:bg-cyan-500/20",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
  },
  purple: {
    bg: "bg-purple-500/10 hover:bg-purple-500/20",
    border: "border-purple-500/20 hover:border-purple-500/40",
    text: "text-purple-300",
    dot: "bg-purple-400",
  },
  green: {
    bg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
  },
  orange: {
    bg: "bg-orange-500/10 hover:bg-orange-500/20",
    border: "border-orange-500/20 hover:border-orange-500/40",
    text: "text-orange-300",
    dot: "bg-orange-400",
  },
  pink: {
    bg: "bg-pink-500/10 hover:bg-pink-500/20",
    border: "border-pink-500/20 hover:border-pink-500/40",
    text: "text-pink-300",
    dot: "bg-pink-400",
  },
};

export function SkillBadge({ skill, color, delay = 0 }: SkillBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div
        className={`
          inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium
          border cursor-default transition-all duration-200
          ${c.bg} ${c.border} ${c.text}
        `}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
        {skill.name}
      </div>

      {/* Tooltip */}
      {showTooltip && skill.tooltip && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50
            bg-midnight-50 border border-white/10 backdrop-blur-md
            rounded-lg px-3 py-1.5 text-xs text-slate-300
            whitespace-nowrap pointer-events-none shadow-xl"
        >
          {skill.tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white/10" />
        </motion.div>
      )}
    </motion.div>
  );
}
