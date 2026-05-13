import * as cheerio from 'cheerio';

export type LiveApp = {
  name: string;
  icon?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  otherUrl?: string;
};

export type GithubRepo = {
  owner: string;
  name: string;
  description?: string;
  htmlUrl: string;
  bannerUrl?: string;
};

/** Fetch the raw HTML of the public Linktree page */
export async function fetchLinktreeHTML(): Promise<string> {
  const res = await fetch('https://www.linktr.ee/asad._.abdullah');
  if (!res.ok) {
    throw new Error(`Failed to fetch Linktree page: ${res.status}`);
  }
  return await res.text();
}

/** Extract the first image URL from a markdown string (README) */
export function extractFirstImageFromReadme(md: string): string | undefined {
  const match = /!\[[^\]]*\]\((https?:[^)]+)\)/i.exec(md);
  return match ? match[1] : undefined;
}

/** Parse the Linktree HTML and classify links */
export async function parseLinktree(html: string) {
  const $ = cheerio.load(html);
  const liveApps: LiveApp[] = [];
  const githubRepos: GithubRepo[] = [];

  // Linktree typically renders each link inside a <a> with a child <img> for the icon
  $('a').each((_i, el) => {
    const href = $(el).attr('href')?.trim() ?? '';
    const label = $(el).text().trim();
    const icon = $(el).find('img').attr('src')?.trim();

    if (!href) return;

    // --- Live / Store apps ------------------------------------------------
    if (/play\.google\.com/.test(href)) {
      // Check if we already have an entry for this app name (could have both Play & App Store)
      let app = liveApps.find((a) => a.name === label);
      if (!app) {
        app = { name: label, icon, playStoreUrl: href };
        liveApps.push(app);
      } else {
        app.playStoreUrl = href;
        if (!app.icon && icon) app.icon = icon;
      }
    } else if (/apps\.apple\.com/.test(href)) {
      let app = liveApps.find((a) => a.name === label);
      if (!app) {
        app = { name: label, icon, appStoreUrl: href };
        liveApps.push(app);
      } else {
        app.appStoreUrl = href;
        if (!app.icon && icon) app.icon = icon;
      }
    } else if (/github\.com/.test(href)) {
      // --- GitHub repo ---------------------------------------------------
      // Expect URLs like https://github.com/owner/repo
      const match = /github\.com\/([^/]+)\/([^/]+)/i.exec(href);
      if (match) {
        const [, owner, repo] = match;
        const repoInfo: GithubRepo = {
          owner,
          name: repo,
          htmlUrl: href,
        };
        githubRepos.push(repoInfo);
      }
    } else {
      // Fallback for any other link that is an app (e.g., direct website) – treat as otherUrl
      const app: LiveApp = { name: label, icon, otherUrl: href };
      liveApps.push(app);
    }
  });

  // The specific 9 apps the user wants to show
  const ALLOWED_LIVE_APPS = [
    "Deal Detector", "The CareMD", "Tour27 - Guide", "Yapiee", 
    "InnerLight Academy", "LoyiCard Stamper", "Biz Card Scanner", 
    "Home Decor", "Al Quran"
  ];

  const customBanners: Record<string, string> = {
    "Dynotch": "/assets/projects/dynotch.png",
    "LookAway": "/assets/projects/lookaway.png",
    "QuizFlow": "/assets/projects/quizflow.png",
    "GeoShiftPro": "/assets/projects/geoshiftpro.png"
  };

  // For each GitHub repo, fetch its README to get the first image banner
  await Promise.all(
    githubRepos.map(async (repo) => {
      if (customBanners[repo.name]) {
        repo.bannerUrl = customBanners[repo.name];
        return;
      }
      try {
        const rawUrl = `https://raw.githubusercontent.com/${repo.owner}/${repo.name}/HEAD/README.md`;
        const res = await fetch(rawUrl);
        if (!res.ok) return;
        const md = await res.text();
        const banner = extractFirstImageFromReadme(md);
        if (banner) repo.bannerUrl = banner;
      } catch (e) {
        // Silently ignore failures
      }
    })
  );

  return { 
    liveApps: liveApps.filter(app => ALLOWED_LIVE_APPS.includes(app.name)), 
    githubRepos 
  };
}

/** Convenience wrapper used in the page component */
export async function getLinktreeData() {
  const html = await fetchLinktreeHTML();
  return await parseLinktree(html);
}
