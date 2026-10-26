import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Benefits from "@/components/sections/Benefits";
import LocalSEO from "@/components/sections/LocalSEO";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Benefits />
      <LocalSEO />
      <Gallery />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
    </>
  );
}
