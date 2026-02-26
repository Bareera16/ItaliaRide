import { MapPin, Plane, Car } from 'lucide-react';
import Image from 'next/image';

export default function Coverage() {
    const locations = [
        { name: "Rome", types: ["Airports", "City", "Ports"] },
        { name: "Milan", types: ["Airports", "City"] },
        { name: "Venice", types: ["Airports", "City", "Ports"] },
        { name: "Florence", types: ["Airports", "City"] },
        { name: "Naples", types: ["Airports", "City", "Ports"] },
        { name: "Amalfi Coast", types: ["City"] },
        { name: "Lake Como", types: ["City"] },
        { name: "Sicily", types: ["Airports", "City"] }
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden font-inter">
            {/* Background Map Overlay (Optional placeholder) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                {/* Map-style background could be an image */}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Widespread Coverage</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Serving All Major <br />Airports & Cities</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
                            Our taxi taxi network spans across the entire Italian peninsula. From the busy streets of Rome to the serene shores of Lake Como, we ensure you travel in absolute comfort.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <Plane className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest">30+ Airports</h4>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest">100+ Cities</h4>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <Car className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest">500+ Drivers</h4>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <Car className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest">24/7 Support</h4>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 p-4 md:p-10 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            {locations.map((loc, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-navy/80 border border-white/5 rounded-2xl hover:border-gold/50 transition-all duration-300 animate-slide-left"
                                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                >
                                    <h5 className="text-white font-bold text-lg mb-2">{loc.name}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {loc.types.map(t => (
                                            <span key={t} className="text-[10px] text-gold font-bold uppercase tracking-widest bg-gold/10 px-2 py-0.5 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
