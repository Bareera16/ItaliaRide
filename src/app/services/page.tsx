import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="taxi & Reliable"
        titleBottom="Professional Services"
        description="From airport pickups to taxi city tours, we provide the highest standard of taxi services across Italy."
        backgroundImage="/images/hero.png"
      />
      <div className="py-20">
        <Services />
      </div>
      <Footer />
    </main>
  );
}

