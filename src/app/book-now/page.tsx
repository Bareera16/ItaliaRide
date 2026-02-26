import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function BookNowPage() {
  return (
    <main className="min-h-screen bg-[#0F1C2E]">
      <Navbar />
      <section className="pt-40 pb-24 relative overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

