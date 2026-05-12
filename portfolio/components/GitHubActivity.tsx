import { fetchGitHubStats, languageColors } from "@/lib/github";
import { Star, Code2, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { GlassCard } from "@/components/ui/GlassCard";

export async function GitHubActivity() {
  const { repos, languages, totalStars } = await fetchGitHubStats();

  const langEntries = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 5);

  return (
    <section id="github" className="relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="container-portfolio">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-3">Open Source</p>
          <h2 className="section-heading text-white">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <a
            href="https://github.com/AsadAhmad01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mt-3 text-sm transition-colors"
          >
            <FiGithub size={16} />
            @AsadAhmad01
            <ExternalLink size={12} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Language Distribution */}
          <GlassCard className="p-6 lg:col-span-1" delay={0}>
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={18} className="text-blue-400" />
              <h3 className="font-semibold text-white">Languages</h3>
            </div>

            <div className="space-y-3">
              {langEntries.map(([lang, pct]) => (
                <div key={lang}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: languageColors[lang] ?? "#64748b" }}
                      />
                      <span className="text-sm text-slate-300 font-medium">{lang}</span>
                    </div>
                    <span className="text-xs text-slate-500">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{
                        width: `${pct}%`,
                        backgroundColor: languageColors[lang] ?? "#3B82F6",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text font-display">{repos.length}+</div>
                <div className="text-xs text-slate-500 mt-1">Repositories</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text font-display">{totalStars}</div>
                <div className="text-xs text-slate-500 mt-1">Total Stars</div>
              </div>
            </div>
          </GlassCard>

          {/* Top Repos */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
            {repos.map((repo, i) => (
              <GlassCard key={repo.id} delay={i * 0.08} className="p-5" glowColor="blue">
                <div className="flex items-start justify-between mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-blue-400 transition-colors text-sm leading-tight"
                  >
                    {repo.name}
                  </a>
                  <div className="flex items-center gap-1 text-slate-500 text-xs ml-2 flex-shrink-0">
                    <Star size={12} />
                    {repo.stargazers_count}
                  </div>
                </div>

                {repo.description && (
                  <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                )}

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {repo.language && (
                  <div className="flex items-center gap-1.5 mt-auto">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: languageColors[repo.language] ?? "#64748b" }}
                    />
                    <span className="text-xs text-slate-500">{repo.language}</span>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
