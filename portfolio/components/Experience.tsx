"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />

      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="section-heading text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              company={exp.company}
              role={exp.role}
              period={exp.period}
              type={exp.type}
              bullets={exp.bullets}
              techStack={exp.techStack}
              isLast={index === experiences.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
