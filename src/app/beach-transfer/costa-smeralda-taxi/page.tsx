import Link from 'next/link';

export default function CostaSmeraldaBeachPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Taxi & Transfer to Costa Smeralda</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Summer Transfers to Costa Smeralda</h2>
        <p>Enjoy the sun and sea at Costa Smeralda in Olbia/Sardinia without the hassle of parking or public transport. We provide reliable private transfers directly to the most beautiful beaches in Italy.</p>
      </section>

      <section className="mb-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Beach Service Benefits</h2>
        <ul className="grid md:grid-cols-2 gap-2 list-none">
          <li>🏖️ Direct hotel-to-beach service</li>
          <li>🏖️ Plenty of room for beach gear and luggage</li>
          <li>🏖️ Fixed prices - know the cost before you go</li>
          <li>🏖️ Professional drivers who know the best local spots</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Explore the Coast</h2>
        <p>Whether you're visiting for a day trip or an extended holiday, our Olbia/Sardinia taxi service ensures you reach Costa Smeralda comfortably and on time.</p>
      </section>

      <section className="mt-10 pt-10 border-t">
        <h2 className="text-2xl font-semibold mb-4">Nearby Services</h2>
        <p>Check out more: <Link href="/attraction-transfer" className="text-blue-600 hover:underline">Attraction Transfers</Link> or <Link href="/city-transfer/" className="text-blue-600 hover:underline">City Taxi Services</Link>.</p>
      </section>
    </div>
  );
}

