"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glowColor?: "blue" | "cyan" | "purple" | "none";
  delay?: number;
  animate?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glowColor = "blue",
  delay = 0,
  animate = true,
}: GlassCardProps) {
  const glowClasses = {
    blue: "hover:border-blue-500/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.15)]",
    cyan: "hover:border-cyan-500/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(6,182,212,0.15)]",
    purple: "hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(139,92,246,0.15)]",
    none: "",
  };

  const baseClasses = `
    relative rounded-2xl
    bg-white/5 border border-white/10
    backdrop-blur-md
    transition-all duration-300
    ${hover ? `${glowClasses[glowColor]} hover:bg-white/[0.07] hover:-translate-y-1` : ""}
    ${className}
  `;

  if (!animate) {
    return <div className={baseClasses}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={baseClasses}
    >
      {children}
    </motion.div>
  );
}
