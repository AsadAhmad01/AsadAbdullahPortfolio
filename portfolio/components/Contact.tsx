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
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_id",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "public_key"
      );
      toast.success("Message sent! I'll get back to you soon.", { duration: 5000 });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send. Please email me directly at haalim376@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { background: "#111827", border: "1px solid rgba(255,255,255,0.1)", color: "#f0f4ff" },
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96
        rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="container-portfolio">
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
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to discuss mobile AI, WebRTC, or Web3? I&apos;m always open to interesting opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm
                    bg-white/5 border border-white/10 text-white placeholder-slate-500
                    focus:border-blue-500/50 focus:bg-white/8 focus:outline-none focus:ring-1 focus:ring-blue-500/30
                    transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm
                    bg-white/5 border border-white/10 text-white placeholder-slate-500
                    focus:border-blue-500/50 focus:bg-white/8 focus:outline-none focus:ring-1 focus:ring-blue-500/30
                    transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl text-sm resize-none
                    bg-white/5 border border-white/10 text-white placeholder-slate-500
                    focus:border-blue-500/50 focus:bg-white/8 focus:outline-none focus:ring-1 focus:ring-blue-500/30
                    transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                id="submit-contact"
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Prefer to reach out directly? Here are my active channels. Response time is typically within 24 hours.
            </p>

            {directLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.href}
                target={link.id !== "email-link" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-center gap-4 p-4 rounded-xl border
                  backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 group
                  ${colorMap[link.color]}`}
                id={link.id}
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10
                  flex items-center justify-center group-hover:scale-110 transition-transform">
                  <link.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">{link.label}</p>
                  <p className="text-white text-sm font-medium">{link.value}</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-slate-600 group-hover:text-current transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
