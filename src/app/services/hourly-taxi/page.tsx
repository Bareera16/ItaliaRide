import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HourlytaxiPage() {
  const features = [
    "Complete schedule flexibility",
    "Unlimited stops within hours",
    "Dedicated private taxi",
    "Sightseeing or shopping",
    "English-speaking professionalism",
    "Fixed hourly rates"
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private taxi"
        titleBottom="Service by the Hour"
        description="Flexible, taxi transport tailored specifically to your schedule and personal requirements."
        backgroundImage="https://images.unsplash.com/photo-1511210115033-ec8464db31d6?q=80&w=2070&auto=format&fit=crop"
        buttonText="Book Hourly Service"
      />

      <ServiceIntro
        title="Your Schedule, Your Way"
        content="Hire a private driver for sightseeing, shopping, business meetings, or special events. Enjoy full flexibility with hourly booking and a dedicated vehicle at your disposal."
      />

      <ServiceFeatures
        title="Flexible Mobility Solutions"
        features={features}
        bg="bg-[#F8F9FA]"
      />


      <HowItWorks />

      <FAQSection />

      <CTA />

      <Footer />
    </main>
  );
}
