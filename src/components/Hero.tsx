import Link from 'next/link';
import TaxiButton from './TaxiButton';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden font-inter">
            {/* Background with darker gradient overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/images/hero.png")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E]/90 via-[#0F1C2E]/60 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-4xl pt-20">
                    <h1 className="text-white font-montserrat font-semibold leading-[1.1] mb-6">
                        <span className="text-5xl md:text-6xl block mb-2 animate-slide-left [animation-delay:0.2s]">Experience the Finest</span>
                        <span className="text-5xl md:text-7xl text-[#F4C430] font-serif italic block animate-slide-left [animation-delay:0.4s]">Italian Taxi Service</span>
                    </h1>

                    <div className="mb-10 space-y-2">
                        <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide uppercase animate-slide-left [animation-delay:0.6s]">
                            Reliable travel, redefined.
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 font-light italic animate-slide-left [animation-delay:0.8s]">
                            Professional taxi drivers, reliable fleet.
                        </p>
                    </div>

                    <div className="animate-slide-left [animation-delay:1s]">
                        <TaxiButton
                            href="/book-now/"
                        >
                            RESERVE YOUR RIDE
                        </TaxiButton>
                    </div>
                </div>
            </div>

            {/* Solid Gold Bottom Edge as per mockup */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#F4C430] shadow-[0_-5px_15px_rgba(244,196,48,0.3)]" />
        </section>
    );
}
