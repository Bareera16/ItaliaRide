import Link from 'next/link';

export default function VernazzaTaxiServicePage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Professional Taxi Service in Vernazza</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Reliable Transportation in Vernazza</h2>
        <p>Experience the best taxi and private transfer services in Vernazza. Whether you are traveling for business or leisure, our professional drivers ensure a comfortable and timely journey.</p>
        <ul className="list-disc ml-6 mt-4">
          <li>City center transfers</li>
          <li>Hotel pickups and drop-offs</li>
          <li>Sightseeing tours in Vernazza</li>
          <li>Fix-rate long distance transfers</li>
        </ul>
      </section>

      <section className="mb-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-blue-900">Why Choose Our Vernazza Taxi?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Transparent Pricing</h3>
            <p>Know your fare in advance with our fixed-price guarantee.</p>
          </div>
          <div>
            <h3 className="font-bold">24/7 Availability</h3>
            <p>We work around the clock to provide rides whenever you need them.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">Can I book a taxi in Vernazza in advance?</h3>
            <p>Yes, we recommend booking at least 24 hours in advance to guarantee availability.</p>
          </div>
          <div>
            <h3 className="font-bold">Are your drivers licensed?</h3>
            <p>All our drivers in Vernazza are fully licensed, insured, and professional.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 pt-10 border-t">
        <h2 className="text-2xl font-semibold mb-4">Airport Connections</h2>
        <p>Need a ride to the airport? Check out our <Link href="/airport-transfer/" className="text-blue-600 hover:underline">Airport Transfer</Link> services for all major Italian airports.</p>
      </section>
    </div>
  );
}

