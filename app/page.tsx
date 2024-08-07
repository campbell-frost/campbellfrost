import Navbar from "@/components/navbar";
import Hero from "../components/hero";
import { HeroHighlight } from "@/components/ui/hero-background";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar />
      <HeroHighlight>
        <div className="max-w-7xl mx-auto px-4 py-10">
          <Hero />
        </div>
      </HeroHighlight>
    </main>
  );
}
