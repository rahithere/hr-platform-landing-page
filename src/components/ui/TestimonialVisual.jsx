"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard.jsx";
import Envelope from "./Envelope.jsx";
import TestButton from "./testi-button.jsx";


//Notes: envelope animation are done in its component




const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "HR Director at Nexa Solutions",
        image: "https://images.pexels.com/photos/30048912/pexels-photo-30048912.jpeg",
        quote: "CoreShift has completely streamlined the way our team handles HR.",
        rating: "5.0",
    },
    {
        name: "John Carter",
        role: "People Operations Lead",
        image: "https://images.pexels.com/photos/11951275/pexels-photo-11951275.jpeg",
        quote: "Everything is finally organized and accessible in one place.",
        rating: "5.0",
    },
    {
        name: "Emily Watson",
        role: "Head of People at Lumina",
        image: "https://images.pexels.com/photos/20181989/pexels-photo-20181989.jpeg",
        quote: "Our HR workflows are now faster, simpler, and much easier to manage.",
        rating: "5.0",
    },
];

export default function TestimonialVisual() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isRevealed, setIsRevealed] = useState(false);

    const handlePrevious = () => {
        setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
    };

    return (
        <>
            {/* MOBILE */}
            <div className="mt-10 flex gap-4 overflow-x-auto px-4 pb-4 md:hidden">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.name} className="w-[85vw] shrink-0">
                        <TestimonialCard testimonial={testimonial} />
                    </div>
                ))}
            </div>

            {/* DESKTOP */}
            <div className="relative mx-auto mt-14 hidden h-[520px] w-full max-w-3xl md:block">
                <Envelope isRevealed={isRevealed} />

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    onAnimationComplete={() => setIsRevealed(true)}
                    transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-8 z-20 w-[380px] -translate-x-1/2"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <TestimonialCard testimonial={testimonials[activeIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
                    <TestButton direction="left" onClick={handlePrevious} />
                    <TestButton direction="right" onClick={handleNext} />
                </div>
            </div>
        </>
    );
}