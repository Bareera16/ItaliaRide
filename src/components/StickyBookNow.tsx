"use client";

import TaxiButton from './TaxiButton';
import { useState, useEffect } from 'react';

export default function StickyBookNow() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show only on mobile and only after scrolling down a bit
            const mobile = window.innerWidth < 1024;
            const scrolled = window.scrollY > 300;
            setIsVisible(mobile && scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:hidden animate-slide-up">
            <TaxiButton
                href="/book-now/"
                className="w-full"
            >
                Book Now
            </TaxiButton>
        </div>
    );
}
