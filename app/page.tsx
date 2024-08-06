import Navbar from "@/components/navbar";
import Hero from "../components/hero";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Hero />
      </div>
    </main>
  );
}
