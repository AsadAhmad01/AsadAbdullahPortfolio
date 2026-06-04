"use client";

import { motion } from "framer-motion";
import { Smartphone, Cpu, Layers, Zap, Database, Wrench } from "lucide-react";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories, SkillCategory } from "@/lib/data";

const categoryIcons: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  cpu: Cpu,
  layers: Layers,
  zap: Zap,
  database: Database,
  wrench: Wrench,
};

const colorBg: Record<string, string> = {
  blue: "from-blue-500/10 to-blue-600/5 border-blue-500/15",
  cyan: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/15",
  purple: "from-purple-500/10 to-purple-600/5 border-purple-500/15",
  green: "from-emerald-500/10 to-emerald-600/5 border-emerald-500/15",
  orange: "from-orange-500/10 to-orange-600/5 border-orange-500/15",
  pink: "from-pink-500/10 to-pink-600/5 border-pink-500/15",
};

const colorText: Record<string, string> = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  green: "text-emerald-400",
  orange: "text-orange-400",
  pink: "text-pink-400",
};

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="section-heading text-white">
            Skills &{" "}
            <span className="gradient-text-purple">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Hover over any skill to learn more. Rare combination of mobile, AI, real-time, and blockchain expertise.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = categoryIcons[category.icon] || Cpu;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className={`rounded-2xl border bg-gradient-to-br p-6 ${colorBg[category.color]}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10
                      flex items-center justify-center ${colorText[category.color]}`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className={`font-display font-bold text-base ${colorText[category.color]}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      skill={skill}
                      color={category.color}
                      delay={catIndex * 0.08 + skillIndex * 0.03}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
