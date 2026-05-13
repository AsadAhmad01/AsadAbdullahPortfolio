"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, Layers, Zap, CheckCircle } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
              bg-midnight-50/95 border border-white/10 backdrop-blur-xl
              rounded-2xl shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-6 pb-4
              bg-midnight-50/95 backdrop-blur-xl border-b border-white/10">
              <div>
                <h2 className="text-2xl font-bold font-display gradient-text">{project.name}</h2>
                <p className="text-slate-400 text-sm mt-1">
                  {project.featuredDetails?.tagline || project.tagline}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10
                  text-slate-400 hover:text-white transition-all duration-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Description (Visible if no featuredDetails) */}
              {!project.featuredDetails && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cpu size={16} className="text-cyan-400" />
                  <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
                    Tech Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm font-medium
                        bg-blue-500/10 border border-blue-500/20 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.featuredDetails ? (
                <>
                  {/* Key Features */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap size={16} className="text-blue-400" />
                      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
                        Key Features
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {project.featuredDetails.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                          <CheckCircle size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers size={16} className="text-purple-400" />
                      <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-widest">
                        Architecture
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.featuredDetails.architecture}</p>
                  </div>

                  {/* Challenges Solved */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">
                      🛠 Challenges Solved
                    </h3>
                    <ul className="space-y-2">
                      {project.featuredDetails.challengesSolved.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-orange-500/15 border border-orange-500/25
                            text-orange-300 text-xs flex items-center justify-center flex-shrink-0 font-bold mt-0.5">
                            {i + 1}
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                    <h3 className="text-sm font-semibold text-cyan-300 uppercase tracking-widest mb-2">
                      ✨ Impact
                    </h3>
                    <p className="text-slate-200 text-sm leading-relaxed italic">{project.featuredDetails.impact}</p>
                  </div>
                </>
              ) : (
                <div className="p-8 rounded-2xl border border-dashed border-white/10 flex flex-col items-center justify-center text-center">
                  <p className="text-slate-500 text-sm italic">
                    Additional case study details for this project are currently being documented. 
                    Stay tuned for a deep dive into its architecture and challenges!
                  </p>
                </div>
              )}

              {/* GitHub Link */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  <FiGithub size={18} />
                  View on GitHub
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
