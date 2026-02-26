import { ChevronRight } from 'lucide-react';

interface ServiceIntroProps {
    title: string;
    content: string;
}

export default function ServiceIntro({ title, content }: ServiceIntroProps) {
    return (
        <section className="py-24 bg-white font-inter">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-gold" />
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Introduction</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        {content}
                    </p>
                    <div className="w-20 h-1 bg-gold/30 mx-auto" />
                </div>
            </div>
        </section>
    );
}

interface ServiceFeaturesProps {
    title: string;
    features: string[];
    bg?: string;
}

export function ServiceFeatures({ title, features, bg = "bg-gray-50" }: ServiceFeaturesProps) {
    return (
        <section className={`py-24 ${bg} font-inter`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Why Choose Us</p>
                    <h2 className="text-4xl font-bold text-navy">{title}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                                <ChevronRight className="w-5 h-5 text-gold" />
                            </div>
                            <span className="text-navy font-bold text-lg leading-tight pt-0.5">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
