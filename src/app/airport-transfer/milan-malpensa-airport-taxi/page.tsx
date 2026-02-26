import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import TaxiButton from '@/components/TaxiButton';
import { MapPin, Clock, Euro, CheckCircle } from 'lucide-react';

export default function MilanMalpensaAirportTaxiPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F1]">
      <Navbar />

      <PageHero
        titleTop="Airport Transfer"
        titleBottom="Milan Malpensa (MXP)"
        description="taxi airport transfers from Milan Malpensa Airport. The most reliable way to reach Milan city center or the Italian Lakes."
        backgroundImage="/images/hero.png"
      />

      <div className="container mx-auto py-24 px-6">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Main Content */}
          <div className="flex-1 lg:w-2/3">
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#0F1C2E] mb-8 border-l-4 border-[#F4C430] pl-6">Milan Malpensa Excellence</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                As Milan's primary international gateway, Malpensa can be overwhelming. Our taxi service provides a calm, organized alternative to the taxi queues. We monitor your flight, meet you at the gate, and whisk you away in a taxi vehicle.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Personalized Meet & Greet",
                  "Arrival Gate Pickup (Terminal 1 & 2)",
                  "Fixed Rates to Milan & Lake Como",
                  "taxi Mercedes-Benz Fleet",
                  "Complimentary Bottled Water",
                  "24/7 Professional taxis"
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
                <p className="text-gray-500">50 km to Milan</p>
              </div>
              <div className="text-center">
                <Clock className="w-10 h-10 text-[#F4C430] mx-auto mb-4" />
                <h3 className="font-bold text-[#0F1C2E]">Travel Time</h3>
                <p className="text-gray-500">Approx. 50-60 mins</p>
              </div>
              <div className="text-center">
                <Euro className="w-10 h-10 text-[#F4C430] mx-auto mb-4" />
                <h3 className="font-bold text-[#0F1C2E]">Starting Price</h3>
                <p className="text-gray-500">From €95.00</p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-[#0F1C2E] mb-8">Travel Information</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-[#0F1C2E] mb-2 text-lg">Where is my meeting point at MXP?</h3>
                  <p className="text-gray-600 font-light">Your driver will be waiting at the Arrivals hall exit gate corresponding to your flight (Exit 4 or 5 at Terminal 1) with a personalized name board.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-[#0F1C2E] p-10 rounded-2xl text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Milan Center Transfer</h3>
              <p className="text-gray-400 mb-8 font-light">Book your Malpensa to Milan City or Milan Linate transfer at fixed, competitive rates.</p>
              <TaxiButton href="/book-now/" className="w-full">
                BOOK MILAN TRANSFER
              </TaxiButton>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

