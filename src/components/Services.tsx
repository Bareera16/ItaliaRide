import { Plane, Briefcase, Camera, MapPin, Anchor, Clock } from 'lucide-react';
import TaxiButton from './TaxiButton';

export default function Services() {
    const services = [
        {
            title: "Airport Transfers",
            icon: <Plane className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
            description: "Reliable transfers to and from all major Italian airports with meet & greet service.",
            link: "/services/airport-transfers/"
        },
        {
            title: "City to City Transfers",
            icon: <MapPin className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
            description: "Seamless point-to-point travel between Italy's most famous cities in professional cabs.",
            link: "/services/city-to-city/"
        },
        {
            title: "Hotel Transfers",
            icon: <Anchor className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
            description: "Pickup and drop-off from any hotel, Airbnb, or resort across the Italian peninsula.",
            link: "/services/hotel-transfers/"
        },
        {
            title: "Business / Corporate",
            icon: <Briefcase className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
            description: "Executive-class taxi services tailored for corporate meetings and important events.",
            link: "/services/business-taxi/"
        },
        {
            title: "Hourly Taxi Service",
            icon: <Clock className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
            description: "Enjoy complete flexibility with a private driver at your disposal for several hours.",
            link: "/services/hourly-taxi/"
        },
        {
            title: "Wedding & Events",
            icon: <Camera className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-300" />,
            description: "Make your special day more elegant with our high-quality taxi transport solutions.",
            link: "/services/wedding-events/"
        }
    ];

    return (
        <section className="py-24 bg-white font-inter">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.4em] mb-4">What We Offer</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-[#0F1C2E]">Our Services</h3>
                    <div className="w-20 h-1 bg-[#F4C430] mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group uiverse-card p-10 min-h-[380px] animate-slide-left shadow-2xl"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center text-center h-full">
                                <div className="mb-8 p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all duration-500 shadow-lg">
                                    {service.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-10">
                                    {service.description}
                                </p>
                                <TaxiButton href={service.link} className="scale-90 mt-auto">
                                    Learn More
                                </TaxiButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
