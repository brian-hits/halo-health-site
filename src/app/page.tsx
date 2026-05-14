import TrustBar from "@/components/TrustBar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Treatments from "@/components/Treatments";
import BackedByData from "@/components/BackedByData";
import WhyChooseHalo from "@/components/WhyChooseHalo";
import Testimonials from "@/components/Testimonials";
import ResultsDisclaimer from "@/components/ResultsDisclaimer";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TrustBar />
      <Hero />
      <HowItWorks />
      <Treatments />
      <BackedByData />
      <WhyChooseHalo />
      <Testimonials />
      <ResultsDisclaimer />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
