import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import { getLinktreeData } from "@/lib/linktree";

export const revalidate = 86400; // daily ISR

export default async function Home() {
  const { liveApps, githubRepos } = await getLinktreeData();
  return (
    <main className="min-h-screen bg-midnight overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects liveApps={liveApps} githubRepos={githubRepos} />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
