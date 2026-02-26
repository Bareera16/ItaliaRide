import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import StorySection from '@/components/StorySection';
import MissionValues from '@/components/MissionValues';
import StatsSection from '@/components/StatsSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="About Our Private"
        titleBottom="Transfer Service"
        description="taxi airport and city transfers across Italy with licensed professional drivers. Born from a passion for excellence."
        backgroundImage="/images/hero.png"
      />

      <StorySection />

      <MissionValues />

      <StatsSection />

      <div className="bg-white">
      </div>

      <CTA />

      <Footer />
    </main>
  );
}

