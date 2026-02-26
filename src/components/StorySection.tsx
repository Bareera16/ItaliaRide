import Image from 'next/image';

export default function StorySection() {
    return (
        <section className="py-24 bg-white font-inter">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2 animate-slide-left">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[2px] bg-gold" />
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Our Story</p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-8">
                            Taxi Transfers <br /><span className="text-gold italic font-serif">Born from Passion</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                We started with a simple mission: to provide reliable, stress-free airport transfers across Italy. We realized that travel should be more than just moving from A to B—it should be an experience of comfort and elegance.
                            </p>
                            <p>
                                Today, ItaliaRide proudly serves thousands of travelers in Rome, Milan, Venice, Florence, and beyond. Every journey is handled with the same level of precision and quality that we demanded when we first began.
                            </p>
                            <p className="font-bold text-navy">
                                Experience Italy the way it was meant to be seen—from the passenger seat of a comfortable taxi.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] animate-slide-left [animation-delay:0.3s]">
                        <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/images/about.jpg"
                                alt="Professional taxi driver"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-full -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gold/20 rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
