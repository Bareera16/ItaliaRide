import { MousePointer2, UserCheck, Car } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            title: "Book Online",
            desc: "Choose your destination and vehicle type. Get instant fixed pricing with no hidden fees.",
            icon: <MousePointer2 className="w-10 h-10 text-gold" />
        },
        {
            title: "Meet Your Driver",
            desc: "Your professional driver will meet you with a name sign at the designated pickup spot.",
            icon: <UserCheck className="w-10 h-10 text-gold" />
        },
        {
            title: "Enjoy Your Ride",
            desc: "Relax in comfort as we take you to your destination safely, comfortably and on time.",
            icon: <Car className="w-10 h-10 text-gold" />
        }
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden font-inter">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">The Process</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">How It Works</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="uiverse-card p-10 group animate-slide-left min-h-[350px]"
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center text-center w-full h-full">
                                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-2xl relative group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-sm shadow-lg border-2 border-navy">
                                        {index + 1}
                                    </span>
                                    {step.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{step.title}</h3>
                                <p className="text-gray-400 max-w-[250px] mx-auto leading-relaxed text-sm">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
