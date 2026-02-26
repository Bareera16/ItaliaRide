import Link from 'next/link';

export default function MountEtnaTransferPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Private Transfer to Mount Etna</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visit Mount Etna with Ease</h2>
        <p>Book a professional private transfer to Mount Etna in Catania. Avoid the crowds of public transport and enjoy a comfortable ride directly to one of Italy's most iconic locations.</p>
      </section>

      <section className="mb-8 p-6 bg-orange-50 border border-orange-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-orange-900">Transfer Services to Mount Etna</h2>
        <ul className="grid md:grid-cols-2 gap-2 list-none">
          <li className="flex items-center">✅ Door-to-door service</li>
          <li className="flex items-center">✅ Professional English-speaking drivers</li>
          <li className="flex items-center">✅ Fixed rates, no hidden fees</li>
          <li className="flex items-center">✅ Comfortable, air-conditioned vehicles</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Plan Your Trip</h2>
        <p>Our drivers are locals who know the best routes and can provide tips for your visit to Mount Etna. Whether you're traveling solo or in a group, we have the right vehicle for your needs.</p>
      </section>

      <section className="mt-10 pt-10 border-t">
        <h2 className="text-2xl font-semibold mb-4">Nearby City Services</h2>
        <p>Explore more in the area: <Link href="/city-transfer/catania-taxi-service" className="text-blue-600 hover:underline">Taxi in Catania</Link>.</p>
      </section>
    </div>
  );
}

