import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { AboutUs } from "@/components/main/about-us";
import { Services } from "@/components/main/services";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Services />
        <AboutUs />
        <Projects />
      </div>
    </main>
  );
}
