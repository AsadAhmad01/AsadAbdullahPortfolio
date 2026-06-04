export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  topics: string[];
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
}

export interface GitHubStats {
  repos: GitHubRepo[];
  languages: Record<string, number>;
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  contributions: ContributionDay[];
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const GITHUB_USERNAME = "AsadAhmad01";

const FALLBACK_USER: GitHubUser = {
  login: "AsadAhmad01",
  name: "Asad Abdullah",
  bio: "Senior Android & Flutter Engineer",
  public_repos: 20,
  followers: 25,
  following: 30,
  html_url: "https://github.com/AsadAhmad01",
};

export async function fetchGitHubUser(): Promise<GitHubUser> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return FALLBACK_USER;
    return await res.json();
  } catch {
    return FALLBACK_USER;
  }
}

// Static fallback data in case of API rate limits
const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "AuraChat",
    description: "Privacy-first AI Companion with RLHF, on-device LLM, and WhatsApp persona cloning",
    html_url: "https://github.com/AsadAhmad01",
    stargazers_count: 12,
    language: "Kotlin",
    fork: false,
    topics: ["android", "ai", "kotlin", "mediapipe", "rlhf"],
  },
  {
    id: 2,
    name: "Budget-AI",
    description: "On-device fintech AI with Qwen 2.5 LLM, RAG engine, and 46+ bank SMS parser",
    html_url: "https://github.com/AsadAhmad01",
    stargazers_count: 8,
    language: "Kotlin",
    fork: false,
    topics: ["android", "fintech", "ai", "llm"],
  },
  {
    id: 3,
    name: "SpeakerBus",
    description: "Enterprise VoIP call center with WebRTC + JANUS achieving sub-100ms call setup",
    html_url: "https://github.com/AsadAhmad01",
    stargazers_count: 6,
    language: "Kotlin",
    fork: false,
    topics: ["webrtc", "voip", "android"],
  },
  {
    id: 4,
    name: "PixelDrape",
    description: "Premium wallpaper Flutter app with Supabase backend and Riverpod v2",
    html_url: "https://github.com/AsadAhmad01",
    stargazers_count: 5,
    language: "Dart",
    fork: false,
    topics: ["flutter", "dart", "supabase"],
  },
];

const FALLBACK_LANGUAGES: Record<string, number> = {
  Kotlin: 65,
  Dart: 20,
  Java: 10,
  TypeScript: 5,
};

export async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [reposRes, commitsRes, prsRes] = await Promise.all([
      fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=stars&direction=desc`,
        { headers, next: { revalidate: 3600 } }
      ),
      fetch(
        `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`,
        { headers: { ...headers, Accept: "application/vnd.github.cloak-preview" }, next: { revalidate: 3600 } }
      ),
      fetch(
        `https://api.github.com/search/issues?q=author:${GITHUB_USERNAME}+type:pr`,
        { headers, next: { revalidate: 3600 } }
      )
    ]);

    // Generate mock contribution data for the last 30 days
    const mockContributions: ContributionDay[] = Array.from({ length: 30 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (29 - i));
      return {
        date: d.toISOString().split("T")[0],
        contributionCount: Math.floor(Math.random() * 10),
      };
    });

    if (!reposRes.ok) {
      console.warn("GitHub API rate limited or error, using fallback data");
      return {
        repos: FALLBACK_REPOS,
        languages: FALLBACK_LANGUAGES,
        totalStars: FALLBACK_REPOS.reduce((sum, r) => sum + r.stargazers_count, 0),
        totalCommits: 75,
        totalPRs: 5,
        contributions: mockContributions,
      };
    }

    const allRepos: GitHubRepo[] = await reposRes.json();
    const ownRepos = allRepos.filter((r) => !r.fork).slice(0, 6);

    // Aggregate languages
    const languageCounts: Record<string, number> = {};
    for (const repo of ownRepos) {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
      }
    }

    const total = Object.values(languageCounts).reduce((s, v) => s + v, 0);
    const languages: Record<string, number> = {};
    for (const [lang, count] of Object.entries(languageCounts)) {
      languages[lang] = Math.round((count / total) * 100);
    }

    const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0);

    let totalCommits = 75;
    if (commitsRes.ok) {
      const commitsData = await commitsRes.json();
      totalCommits = commitsData.total_count ?? 75;
    }

    let totalPRs = 5;
    if (prsRes.ok) {
      const prsData = await prsRes.json();
      totalPRs = prsData.total_count ?? 5;
    }

    return { repos: ownRepos, languages, totalStars, totalCommits, totalPRs, contributions: mockContributions };
  } catch (error) {
    console.warn("GitHub fetch failed, using fallback:", error);
    
    // Generate mock contribution data for the fallback
    const mockContributions: ContributionDay[] = Array.from({ length: 30 }).map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (29 - i));
      return {
        date: d.toISOString().split("T")[0],
        contributionCount: Math.floor(Math.random() * 5),
      };
    });

    return {
      repos: FALLBACK_REPOS,
      languages: FALLBACK_LANGUAGES,
      totalStars: FALLBACK_REPOS.reduce((sum, r) => sum + r.stargazers_count, 0),
      totalCommits: 75,
      totalPRs: 5,
      contributions: mockContributions,
    };
  }
}

export const languageColors: Record<string, string> = {
  Kotlin: "#7F52FF",
  Dart: "#00B4AB",
  Java: "#B07219",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  Swift: "#FA7343",
  "C++": "#F34B7D",
  CSS: "#563D7C",
  HTML: "#E34C26",
};
