import Navbar from "@/app/components/navbar/Navbar";
import Hero from "@/app/components/hero/Hero"
import Features from "@/app/components/features/Features";
import Services from "@/app/components/services/Services";
import About from "@/app/components/about/About";
import Certificates from "@/app/components/certificates/Certificates";
import Contact from "@/app/components/contact/Contact";
import Footer from "@/app/components/footer/Footer";



export default function Home() {
  return (
    <main className="w-full h-screen font-martel bg-light-background-color">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <About />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
