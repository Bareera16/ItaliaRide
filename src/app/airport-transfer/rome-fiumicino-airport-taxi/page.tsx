import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import TaxiButton from '@/components/TaxiButton';
import { MapPin, Clock, Euro, CheckCircle } from 'lucide-react';

export default function LeonardodaVinciFiumicinoAirportTaxiPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />

      <PageHero
        titleTop="Airport Transfer"
        titleBottom="Rome Fiumicino (FCO)"
        description="Reliable, taxi taxi and taxi services from Leonardo da Vinci Airport directly to your destination in Rome or beyond."
        backgroundImage="/images/hero.png"
      />

      <div className="container mx-auto py-24 px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Main Content */}
          <div className="flex-1 lg:w-2/3">
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#0F1C2E] mb-8 border-l-4 border-[#F4C430] pl-6">Professional Pickup & Drop</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Navigating Fiumicino Airport can be stressful. Our professional drivers wait for you at the arrivals hall with a name sign, assist with your luggage, and provide a seamless transition to your taxi vehicle.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Meet & Greet Service in Arrivals",
                  "Flight Monitoring & Real-time Updates",
                  "60 Minutes Free Waiting Time",
                  "Fixed Pricing - No Hidden Costs",
                  "Door-to-Door Private Transfer",
                  "Professional English-speaking Drivers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-[#F4C430] w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="w-10 h-10 text-[#F4C430] mx-auto mb-4" />
                <h3 className="font-bold text-[#0F1C2E]">Distance</h3>
                <p className="text-gray-500">32 km to Center</p>
              </div>
              <div className="text-center">
                <Clock className="w-10 h-10 text-[#F4C430] mx-auto mb-4" />
                <h3 className="font-bold text-[#0F1C2E]">Travel Time</h3>
                <p className="text-gray-500">Approx. 45 mins</p>
              </div>
              <div className="text-center">
                <Euro className="w-10 h-10 text-[#F4C430] mx-auto mb-4" />
                <h3 className="font-bold text-[#0F1C2E]">Starting Price</h3>
                <p className="text-gray-500">From €50.00</p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#0F1C2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-[#0F1C2E] mb-2 text-lg">How do I find my driver at FCO?</h3>
                  <p className="text-gray-600 font-light">Your driver will be waiting at the designated meeting point in the arrivals hall (usually near the columns at Terminal 3 or Terminal 1) holding a sign with your name or company logo.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-[#0F1C2E] mb-2 text-lg">What if my flight is delayed?</h3>
                  <p className="text-gray-600 font-light">We use live flight tracking. Your pickup time is automatically adjusted based on your actual arrival time, so your driver will be there exactly when you land.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-[#0F1C2E] p-10 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Book Your Transfer</h3>
              <p className="text-gray-400 mb-8 font-light">Reserve your private Fiumicino taxi in just a few clicks. Secure, fixed rates.</p>
              <TaxiButton href="/book-now/" className="w-full">
                BOOK THIS TRANSFER
              </TaxiButton>
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="text-sm font-bold text-[#F4C430] uppercase tracking-widest mb-4">Need Help?</p>
                <Link href="/contact/" className="text-white hover:text-[#F4C430] transition-colors block mb-2 underline">Contact Support</Link>
                <p className="text-gray-400 text-sm">Our support team is available 24/7 for any changes or special requests.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

