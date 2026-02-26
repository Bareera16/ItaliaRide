import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Coverage from '@/components/Coverage';
import Footer from '@/components/Footer';

export default function CoverageAreasPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Explore Our Full"
        titleBottom="Italy Coverage"
        description="Our premium taxi network covers all major airports, cities, and tourist destinations across the Italian peninsula."
        backgroundImage="/images/hero.png"
      />
      <div className="py-20">
        <Coverage />
      </div>
      <Footer />
    </main>
  );
}

