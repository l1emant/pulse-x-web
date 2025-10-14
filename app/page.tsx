import HeroSection from "@/components/hero-section";
import Features from "@/components/features";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import Faqs from "@/components/faqs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <CallToAction />
      <Faqs />
      <Footer />
    </>
  );
}
