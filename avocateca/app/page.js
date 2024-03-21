import Navbar from "@/app/components/navbar/Navbar";
import Hero from "@/app/components/hero/Hero"
import Features from "./components/features/Features";
export default function Home() {
  return (
    <main className="w-full h-screen font-martel bg-light-background-color">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
