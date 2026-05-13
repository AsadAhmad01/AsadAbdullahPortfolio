"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ExternalLink, MessageCircle, Loader2 } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const directLinks = [
  {
    id: "email-link",
    icon: Mail,
    label: "Email",
    value: "haalim376@gmail.com",
    href: "mailto:haalim376@gmail.com",
    color: "blue",
  },
  {
    id: "linkedin-link",
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "asad-abdullah-dev",
    href: "https://linkedin.com/in/asad-abdullah-dev",
    color: "blue",
  },
  {
    id: "github-link",
    icon: FiGithub,
    label: "GitHub",
    value: "AsadAhmad01",
    href: "https://github.com/AsadAhmad01",
    color: "purple",
  },
  {
    id: "whatsapp-link",
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+92-348-1400801",
    href: "https://wa.me/923481400801",
    color: "green",
  },
  {
    id: "portfolio-link",
    icon: ExternalLink,
    label: "Linktree",
    value: "linktr.ee/asad._.abdullah",
    href: "https://linktr.ee/asad._.abdullah",
    color: "cyan",
  },
];

const colorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40",
  green: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20 hover:border-emerald-500/40",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 hover:border-cyan-500/40",
};

export function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "#f0f4ff" },
        }}
      />

      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
        rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96
        rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="container-portfolio relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="section-heading text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Ready to bring your mobile app vision to life? Whether it&apos;s AI integration, WebRTC systems, or high-performance Flutter/Android development, I&apos;m just a click away.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {directLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.id !== "email-link" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative flex flex-col p-8 rounded-3xl border
                bg-white/5 border-white/10 backdrop-blur-md 
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
                overflow-hidden`}
              id={link.id}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300
                bg-gradient-to-br ${link.color === 'blue' ? 'from-blue-500' : link.color === 'purple' ? 'from-purple-500' : link.color === 'green' ? 'from-emerald-500' : 'from-cyan-500'} to-transparent`} />

              <div className={`w-14 h-14 rounded-2xl mb-6
                flex items-center justify-center border border-white/10
                group-hover:scale-110 transition-all duration-500
                ${colorMap[link.color]}`}>
                <link.icon size={28} strokeWidth={1.5} />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-display font-bold text-xl mb-1 group-hover:text-blue-400 transition-colors">
                  {link.label}
                </h3>
                <p className="text-slate-400 text-sm font-medium mb-4 break-all">
                  {link.value}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-white transition-colors">
                <span>Reach Out</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}

          {/* Special "Ready to Talk" Primary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="sm:col-span-2 lg:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600
              flex flex-col justify-center items-center text-center shadow-xl hover:scale-[1.02] transition-transform"
          >
            <h3 className="text-white font-display font-bold text-2xl mb-3">Looking for a Senior Developer?</h3>
            <p className="text-white/80 text-sm mb-6 max-w-[240px]">
              Available for full-time roles and high-impact consultancy projects.
            </p>
            <a 
              href="mailto:haalim376@gmail.com"
              className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-sm hover:shadow-lg transition-all"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
