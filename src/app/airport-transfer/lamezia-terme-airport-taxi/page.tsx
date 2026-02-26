import Link from 'next/link';

export default function LameziaTermeInternationalAirportTaxiPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Lamezia Terme International Airport (SUF) Taxi Service</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pickup & Drop Options</h2>
        <p>Reliable airport transfers to and from Lamezia Terme International Airport. We provide door-to-door service, meet and greet, and flight monitoring.</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Terminal arrival pickup</li>
          <li>Hotel to airport drop-off</li>
          <li>Business meeting transfers</li>
        </ul>
      </section>

      <section className="mb-8 p-4 bg-gray-50 border rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Transfer Details</h2>
        <p><strong>Distance to Lamezia Terme City Center:</strong> 10 km</p>
        <p><strong>Estimated Travel Time:</strong> Approx. 30-45 minutes (depending on traffic)</p>
        <p><strong>Price Estimate:</strong> Starting from €45.00</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">How do I find my driver at SUF?</h3>
            <p>Your driver will be waiting at the arrivals hall with a sign showing your name.</p>
          </div>
          <div>
            <h3 className="font-bold">What if my flight is delayed?</h3>
            <p>We monitor all flights and adjust pickup times accordingly at no extra cost.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <p>Looking for transfers in other areas? Check out our <Link href="/city/lamezia terme" className="text-blue-600 hover:underline">Taxi in Lamezia Terme</Link> services.</p>
      </section>
    </div>
  );
}

