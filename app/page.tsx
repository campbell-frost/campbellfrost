import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Technologies />
    </main>
  );
}
