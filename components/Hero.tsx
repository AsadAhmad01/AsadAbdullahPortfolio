"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, MessageCircle, Download, ChevronDown } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { heroTitles, heroTagline, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,
  FiMail: Mail,
  FiExternalLink: ExternalLink,
  FiMessageCircle: MessageCircle,
};

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #0d1428 60%, #111827 100%)" }}
    >
      {/* Particle Canvas */}
      <ParticleBackground />

      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full
          bg-blue-600/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full
          bg-purple-600/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full
          bg-cyan-600/5 blur-[80px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-portfolio text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-emerald-500/10 border border-emerald-500/25 text-emerald-400
            text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl
            text-white leading-none tracking-tight mb-4"
        >
          Asad{" "}
          <span className="gradient-text">Abdullah</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          {heroTagline}
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-xl md:text-2xl font-semibold mb-10 h-10 flex items-center justify-center"
        >
          <TypewriterText
            texts={heroTitles}
            className="neon-text-cyan font-display"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button onClick={scrollToProjects} className="btn-primary text-base">
            View My Work
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary text-base"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon] || ExternalLink;
            return (
              <a
                key={link.id}
                href={link.url}
                target={link.id !== "email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10
                  flex items-center justify-center text-slate-400
                  hover:text-white hover:bg-white/10 hover:border-blue-500/40
                  hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                  transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
