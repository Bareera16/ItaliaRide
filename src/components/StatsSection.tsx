import { Award, Users, MapPin, Star } from 'lucide-react';

export default function StatsSection() {
    const stats = [
        { label: "Rides Completed", value: "10,000+", icon: <Award className="w-8 h-8" /> },
        { label: "Happy Travelers", value: "25,000+", icon: <Users className="w-8 h-8" /> },
        { label: "Cities Served", value: "30+", icon: <MapPin className="w-8 h-8" /> },
        { label: "Service Rating", value: "5.0", icon: <Star className="w-8 h-8" /> },
    ];

    return (
        <section className="py-24 bg-navy relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="uiverse-card p-10 group animate-slide-left min-h-[220px]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center text-center w-full">
                                <div className="inline-flex items-center justify-center p-5 rounded-2xl bg-white/5 border border-white/10 text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">{stat.value}</div>
                                <div className="text-gold/80 text-[10px] font-bold uppercase tracking-[0.3em]">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Built on Trust and Excellence</h3>
                    <p className="text-gray-400">
                        Our growth is a testament to our commitment to quality and safety. We don't just provide rides; we provide peace of mind in every Italian mile.
                    </p>
                </div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #F4C430 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </section>
    );
}
