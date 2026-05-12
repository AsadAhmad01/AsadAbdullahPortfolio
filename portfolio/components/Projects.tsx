"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Star } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects, ProjectCategory } from "@/lib/data";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { type Project } from "@/lib/data";

const filterTabs: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Android", value: "android" },
  { label: "Flutter", value: "flutter" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "WebRTC", value: "webrtc" },
  { label: "Web3", value: "web3" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64
        bg-gradient-to-t from-blue-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-3">Showcase</p>
          <h2 className="section-heading text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            8 production applications spanning Android, Flutter, Edge AI, WebRTC, and Web3 — each solving a distinct technical challenge.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Project filter"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              role="tab"
              aria-selected={activeFilter === tab.value}
              id={`filter-${tab.value}`}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === tab.value
                  ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
                  overflow-hidden hover:border-blue-500/30 hover:-translate-y-1
                  hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.1)]
                  transition-all duration-300 flex flex-col"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1
                    bg-amber-500/20 border border-amber-500/40 text-amber-300
                    text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </div>
                )}

                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-midnight-200">
                  <Image
                    src={project.image}
                    alt={`${project.name} project thumbnail`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-white text-base mb-1">{project.name}</h3>
                  <p className="text-cyan-400 text-xs font-medium mb-2">{project.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.name} GitHub repository`}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium
                          bg-white/5 border border-white/10 text-slate-400
                          hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <FiGithub size={13} />
                        GitHub
                      </a>
                    )}
                    {project.featured && project.featuredDetails && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`View ${project.name} details`}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium
                          bg-blue-500/10 border border-blue-500/20 text-blue-400
                          hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200"
                      >
                        <Info size={13} />
                        Details
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
