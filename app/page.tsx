import Navbar from "@/components/navbar";
import Hero from "../components/hero";
import Technologies from "./technologies";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Technologies />
    </main>
  );
}
