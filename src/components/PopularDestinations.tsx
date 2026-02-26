import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function PopularDestinations() {
    const destinations = [
        { name: "Rome", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop", link: "/city/rome" },
        { name: "Milan", image: "https://images.unsplash.com/photo-1520986606214-8b456906c813?q=80&w=2070&auto=format&fit=crop", link: "/city/milan" },
        { name: "Florence", image: "/images/florence.jfif", link: "/city/florence" },
        { name: "Venice", image: "/images/venice.jfif", link: "/city/venice" },
        { name: "Naples", image: "/images/naples.jpg", link: "/city/naples" },
        { name: "Bologna", image: "/images/Bologna.jpg", link: "/city/bologna" },
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden font-inter">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Top Italian Cities</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Popular Destinations</h3>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((city, index) => (
                        <div
                            key={index}
                            className="uiverse-card group relative h-[400px] overflow-hidden animate-slide-left cursor-pointer"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <Link href={city.link} className="absolute inset-0 z-20">
                                <span className="sr-only">View {city.name}</span>
                            </Link>
                            <div className="absolute inset-[2px] rounded-[18px] overflow-hidden z-10">
                                <Image
                                    src={city.image}
                                    alt={city.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <h4 className="text-3xl font-bold text-white mb-2">{city.name}</h4>
                                    <div className="flex items-center text-gold font-bold text-sm uppercase tracking-widest opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        View Transfers <ChevronRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/city-transfer/"
                        className="inline-flex items-center text-gold hover:text-white font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-white transition-all pb-1"
                    >
                        Explore All 100+ Destinations <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
