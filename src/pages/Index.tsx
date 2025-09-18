import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CasesSection from "@/components/CasesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ROISection from "@/components/ROISection";
import PriceSection from "@/components/PriceSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <HowItWorksSection />
      <CasesSection />
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <ROISection />
      <div id="precos">
        <PriceSection />
      </div>
      <FAQSection />
      <CTASection />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
