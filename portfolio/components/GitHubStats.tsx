import {
  fetchGitHubStats,
  fetchGitHubUser,
  languageColors,
} from "@/lib/github";
import { GlassCard } from "@/components/ui/GlassCard";
import { LanguageChart } from "@/components/LanguageChart";
import { StarsChart } from "@/components/StarsChart";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  Star,
  GitCommit,
  GitPullRequest,
  BookOpen,
  Code2,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

export async function GitHubStats() {
  const [{ repos, languages, totalStars, totalCommits, totalPRs, contributions }, user] = await Promise.all([
    fetchGitHubStats(),
    fetchGitHubUser(),
  ]);

  const langEntries = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const profileStats = [
    {
      icon: BookOpen,
      label: "Public Repos",
      value: user.public_repos,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: Star,
      label: "Total Stars",
      value: totalStars,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
    },
    {
      icon: GitCommit,
      label: "Total Commits",
      value: totalCommits,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      icon: GitPullRequest,
      label: "Total PRs",
      value: totalPRs,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section id="github-stats" className="relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="container-portfolio relative z-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Open Source</p>
          <h2 className="section-heading text-white">
            GitHub <span className="gradient-text">Stats</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A live snapshot of my open-source journey — repositories, stars,
            and the languages I love building with.
          </p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            <FiGithub size={15} className="group-hover:text-blue-400 transition-colors" />
            <span className="font-medium">@{user.login}</span>
            <FiExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* ── Profile Stats Row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {profileStats.map((stat, i) => (
            <GlassCard
              key={stat.label}
              delay={i * 0.07}
              className={`p-5 flex flex-col items-center text-center border ${stat.border}`}
              glowColor="none"
            >
              <div className={`${stat.bg} p-3 rounded-xl mb-3`}>
                <stat.icon size={18} className={stat.color} />
              </div>
              <div className={`text-3xl font-bold font-display ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 mt-1 font-medium tracking-wide">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* ── Languages + Top Repos ── */}
        <div className="grid lg:grid-cols-5 gap-5 mb-5">

          {/* Language Breakdown */}
          <GlassCard delay={0.1} className="p-6 lg:col-span-2" glowColor="cyan">
            <div className="flex items-center gap-2 mb-6">
              <Code2 size={16} className="text-cyan-400" />
              <h3 className="font-semibold text-white text-sm">Language Breakdown</h3>
            </div>

            <LanguageChart data={langEntries as [string, number][]} colors={languageColors} />

            <StarsChart contributions={contributions} />

            {/* Totals */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text font-display">{repos.length}+</div>
                <div className="text-xs text-slate-500 mt-1">Repos Shown</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text font-display">{langEntries.length}</div>
                <div className="text-xs text-slate-500 mt-1">Languages</div>
              </div>
            </div>
          </GlassCard>

          {/* Top Repos */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2 px-1 mb-1">
              <TrendingUp size={16} className="text-blue-400" />
              <h3 className="font-semibold text-white text-sm">Top Repositories</h3>
            </div>
            {repos.map((repo, i) => (
              <GlassCard
                key={repo.id}
                delay={0.15 + i * 0.06}
                className="p-4"
                glowColor="blue"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-blue-400 transition-colors text-sm group"
                    >
                      {repo.name}
                      <ExternalLink size={11} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                    </a>
                    {repo.description && (
                      <p className="text-slate-400 text-xs mt-0.5 line-clamp-1 leading-relaxed">
                        {repo.description}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 text-xs flex-shrink-0">
                    <Star size={11} className="text-yellow-500/70" />
                    <span className="tabular-nums">{repo.stargazers_count}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-2.5">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: languageColors[repo.language] ?? "#64748b" }}
                      />
                      <span className="text-xs text-slate-500">{repo.language}</span>
                    </div>
                  )}
                  {repo.topics?.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center mt-10">
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FiGithub size={16} />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
