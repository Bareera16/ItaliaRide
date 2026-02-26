import { ShieldCheck, Heart, Zap, UserCheck, Eye } from 'lucide-react';

export default function MissionValues() {
    const values = [
        {
            title: "Reliability",
            desc: "Punctuality is our middle name. We track flights and traffic in real-time to ensure we're always there before you are.",
            icon: <Zap className="w-8 h-8 text-gold" />
        },
        {
            title: "Comfort",
            desc: "Our reliable fleet and professional drivers guarantee a smooth, relaxing journey across the Italian landscape.",
            icon: <Heart className="w-8 h-8 text-gold" />
        },
        {
            title: "Professionalism",
            desc: "Every driver is English-speaking, fully licensed, and trained to provide world-class hospitality.",
            icon: <UserCheck className="w-8 h-8 text-gold" />
        }
    ];

    const additionalValues = ["Transparency", "Safety", "Elegance"];

    return (
        <section className="py-24 bg-navy relative overflow-hidden font-inter">
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Core Values</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Ethics in Motion</h3>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((val, index) => (
                        <div
                            key={index}
                            className="uiverse-card p-10 group animate-slide-left min-h-[350px]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex flex-col items-center text-center w-full h-full">
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg">
                                    {val.icon}
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{val.title}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {val.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-10">
                    {additionalValues.map((v) => (
                        <div key={v} className="flex items-center gap-3 text-white/70 font-bold uppercase tracking-[0.3em] text-[10px] group transition-all">
                            <ShieldCheck className="w-5 h-5 text-gold animate-pulse" />
                            <span className="group-hover:text-gold transition-colors">{v}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
