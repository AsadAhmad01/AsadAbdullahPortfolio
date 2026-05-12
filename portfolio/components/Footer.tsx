"use client";

import { Mail, ExternalLink, MessageCircle } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  { href: "https://github.com/AsadAhmad01", Icon: FiGithub, label: "GitHub" },
  { href: "https://linkedin.com/in/asad-abdullah-dev", Icon: FiLinkedin, label: "LinkedIn" },
  { href: "mailto:haalim376@gmail.com", Icon: Mail, label: "Email" },
  { href: "https://linktr.ee/asad._.abdullah", Icon: ExternalLink, label: "Linktree" },
  { href: "https://wa.me/923481400801", Icon: MessageCircle, label: "WhatsApp" },
];

export function Footer() {
  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container-portfolio py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500
                flex items-center justify-center text-white font-bold text-sm font-display">
                AA
              </div>
              <span className="font-display font-bold text-white">Asad Abdullah</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Senior Mobile App Developer specializing in Android, Flutter, Edge AI, WebRTC, and Web3.
            </p>
            <p className="text-slate-600 text-xs mt-2">Lahore, Pakistan</p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-slate-300 font-semibold text-sm mb-4">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {socialIcons.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10
                    flex items-center justify-center text-slate-500
                    hover:text-white hover:bg-white/10 hover:border-blue-500/30
                    transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © 2025 Asad Abdullah. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js 14 · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
