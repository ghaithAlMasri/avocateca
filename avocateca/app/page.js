import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero"
export default function Home() {
  return (
    <main className="w-full h-screen font-martel bg-light-background-color scroll-smooth">
      <Navbar />
      <Hero />
    </main>
  );
}
