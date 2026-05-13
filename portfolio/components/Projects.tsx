"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Star, ExternalLink, Play, Apple } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { projects } from "@/lib/data";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { type Project } from "@/lib/data";
import { type LiveApp, type GithubRepo } from "@/lib/linktree";

type Tab = "live" | "github";

interface Props {
  liveApps?: LiveApp[];
  githubRepos?: GithubRepo[];
}

interface UnifiedProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  otherUrl?: string;
  featured?: boolean;
  featuredDetails?: any;
}

export function Projects({ liveApps = [], githubRepos = [] }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("github");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter Linktree Github repos to exclude those already in data.ts
  const uniqueLinktreeGithub = githubRepos.filter(r => 
    !projects.some(p => p.name.toLowerCase() === r.name.toLowerCase())
  );

  // All Linktree live apps go to Live Apps tab
  const mappedLiveProjects: UnifiedProject[] = liveApps.map(app => ({
    id: app.name,
    name: app.name,
    tagline: "Live Application",
    description: "Available now on the App Store / Google Play Store.",
    image: (app.icon && !app.icon.includes("blank-avatar")) ? app.icon : "/assets/og-image.png",
    techStack: ["Production App"],
    playStoreUrl: app.playStoreUrl,
    appStoreUrl: app.appStoreUrl,
    otherUrl: app.otherUrl,
  }));

  // ALL data.ts projects + Linktree Github repos go to Github Projects tab
  const mappedGithubProjects: UnifiedProject[] = [
    ...projects.map(p => ({
      ...p,
      playStoreUrl: undefined,
      appStoreUrl: undefined,
      otherUrl: undefined
    })),
    ...uniqueLinktreeGithub.map(repo => ({
      id: repo.htmlUrl,
      name: repo.name,
      tagline: "Open Source Project",
      description: repo.description || "Public GitHub Repository.",
      image: repo.bannerUrl || "/assets/og-image.png",
      techStack: ["Open Source"],
      githubUrl: repo.htmlUrl,
    }))
  ];

  const handleDetailsClick = (unifiedId: string) => {
    const originalProject = projects.find(p => p.id === unifiedId);
    if (originalProject) {
      setSelectedProject(originalProject);
    }
  };

  return (
    <section id="projects" className="relative py-16">
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
            A comprehensive portfolio combining full-scale production applications and open-source GitHub repositories.
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
        >
          <button
            role="tab"
            aria-selected={activeTab === "github"}
            onClick={() => setActiveTab("github")}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "github"
                ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            GitHub Projects
          </button>
          <button
            role="tab"
            aria-selected={activeTab === "live"}
            onClick={() => setActiveTab("live")}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "live"
                ? "bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            Live Apps
          </button>
        </motion.div>

        {/* Content Grid */}
        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "github" ? (
              <motion.div
                key="github"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {mappedGithubProjects.map((project, i) => (
                  <RichProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    onSelect={() => handleDetailsClick(project.id)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="live"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              >
                {mappedLiveProjects.map((project, i) => (
                  <RichProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                    onSelect={() => handleDetailsClick(project.id)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

/** Unified Rich Card Component for all projects and apps */
function RichProjectCard({ project, index, onSelect }: { project: UnifiedProject, index: number, onSelect: () => void }) {
  const isLive = !!(project.playStoreUrl || project.appStoreUrl || project.otherUrl);
  const isPublicGithub = !!project.githubUrl;
  const isPrivate = !isLive && !isPublicGithub;

  const targetUrl = project.playStoreUrl || project.appStoreUrl || project.otherUrl || project.githubUrl;

  const CardWrapper = targetUrl ? motion.a : motion.button;
  const wrapperProps: any = targetUrl 
    ? { href: targetUrl, target: "_blank", rel: "noopener noreferrer" } 
    : { onClick: onSelect, type: "button" };

  return (
    <CardWrapper
      {...wrapperProps}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
        overflow-hidden hover:border-blue-500/30 hover:-translate-y-1
        hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(59,130,246,0.1)]
        transition-all duration-300 flex flex-col text-left"
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-wrap gap-2">
        {project.featured && (
          <div className="flex items-center gap-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            <Star size={10} fill="currentColor" />
            Featured
          </div>
        )}
        {isLive && (
          <div className="flex items-center gap-1 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            <Play size={10} fill="currentColor" />
            Live App
          </div>
        )}
        {!isLive && isPublicGithub && (
          <div className="flex items-center gap-1 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            <FiGithub size={10} />
            Public
          </div>
        )}
        {isPrivate && (
          <div className="flex items-center gap-1 bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-semibold px-2 py-1 rounded-full backdrop-blur-sm">
            🔒 Private
          </div>
        )}
      </div>

      {/* Image Area */}
      <div className="relative h-44 w-full overflow-hidden bg-midnight-200">
        <Image
          src={project.image}
          alt={`${project.name} thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-base mb-1 group-hover:text-blue-400 transition-colors">{project.name}</h3>
        <p className="text-cyan-400 text-xs font-medium mb-2">{project.tagline}</p>
        <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
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

        {/* Hover Hint Action Area */}
        <div className="mt-auto pt-4 border-t border-white/5 text-xs font-medium text-slate-500 flex items-center justify-between group-hover:text-blue-400 transition-colors">
          <span>{targetUrl ? "Click to view external link" : "Click to view full details"}</span>
          <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
        </div>
      </div>
    </CardWrapper>
  );
}
