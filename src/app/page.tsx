import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute w-full top-16 z-10 left-0">
        <Navbar />
      </div>
      <HeroSection/>
      <Stats/>
      <HowItWorks/>
      <AboutUs/>
      <Features/>
    </main>
  );
}