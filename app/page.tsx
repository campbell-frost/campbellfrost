import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Projects />
    </main>
  );
}
