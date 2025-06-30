import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/contactUs";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import SmallBanner from "@/components/SmallBanner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute w-full lg:top-8 top-3 z-10 left-0">
        <Navbar />
      </div>
      <HeroSection/>
      <Stats/>
      <HowItWorks/>
      <AboutUs/>
      <Features/>
      <Testimonials/>
      <ContactUs/>
      <SmallBanner/>
      <FaqSection/>
      <Footer/>
    </main>
  );
}