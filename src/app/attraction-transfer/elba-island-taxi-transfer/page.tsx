import Link from 'next/link';

export default function ElbaIslandTransferPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Private Transfer to Elba Island</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visit Elba Island with Ease</h2>
        <p>Book a professional private transfer to Elba Island in Portoferraio. Avoid the crowds of public transport and enjoy a comfortable ride directly to one of Italy's most iconic locations.</p>
      </section>

      <section className="mb-8 p-6 bg-orange-50 border border-orange-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-orange-900">Transfer Services to Elba Island</h2>
        <ul className="grid md:grid-cols-2 gap-2 list-none">
          <li className="flex items-center">✅ Door-to-door service</li>
          <li className="flex items-center">✅ Professional English-speaking drivers</li>
          <li className="flex items-center">✅ Fixed rates, no hidden fees</li>
          <li className="flex items-center">✅ Comfortable, air-conditioned vehicles</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Plan Your Trip</h2>
        <p>Our drivers are locals who know the best routes and can provide tips for your visit to Elba Island. Whether you're traveling solo or in a group, we have the right vehicle for your needs.</p>
      </section>

      <section className="mt-10 pt-10 border-t">
        <h2 className="text-2xl font-semibold mb-4">Nearby City Services</h2>
        <p>Explore more in the area: <Link href="/city-transfer/portoferraio-taxi-service" className="text-blue-600 hover:underline">Taxi in Portoferraio</Link>.</p>
      </section>
    </div>
  );
}

