import Link from 'next/link';

export default function VeniceCruisePortTransferPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Private Transfer to Venice Cruise Port</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Seamless Port Transfers</h2>
        <p>Reliable and professional taxi services between Venice Cruise Port and Venice city center, hotels, or airports. Ensure a stress-free start or end to your cruise with our meet and greet service.</p>
      </section>

      <section className="mb-8 p-6 bg-teal-50 border border-teal-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-teal-900">Cruise Port Service Highlights</h2>
        <ul className="grid md:grid-cols-2 gap-2 list-none">
          <li className="flex items-center">⚓ Driver waiting at the pier</li>
          <li className="flex items-center">⚓ Luggage assistance included</li>
          <li className="flex items-center">⚓ Fixed-rate transfers</li>
          <li className="flex items-center">⚓ Modern, spacious minivans for groups</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Where will my driver meet me at Venice Cruise Port?</h3>
            <p>Your driver will be waiting just outside the cruise terminal or at the designated meeting point on the pier with a sign showing your name.</p>
          </div>
          <div>
            <h3 className="font-bold">Can you take me directly to the airport?</h3>
            <p>Yes, we provide direct transfers from Venice Cruise Port to all major airports in Italy.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-10 border-t">
        <h2 className="text-2xl font-semibold mb-4">Related Services</h2>
        <p>Explore city transfers: <Link href="/city-transfer/" className="text-blue-600 hover:underline">Taxi Services in Italy</Link>.</p>
      </section>
    </div>
  );
}

