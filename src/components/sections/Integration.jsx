"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import IntegrationHeader from "../ui/IntegrationHeader.jsx";
import IntegrationOrbit from "../ui/IntegrationOrbit.jsx";

export default function Integration() {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-[#f5f6f7] px-4 py-24 md:px-8">
            <motion.div
                ref={sectionRef}
                initial={{
                    opacity: 0.5,
                    scale: 0.8,
                    y: 100,
                }}
                animate={{
                    opacity: isInView ? 1 : 0.5,
                    scale: isInView ? 1 : 0.8,
                    y: isInView ? 0 : 100,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-black/10 bg-slate-50 px-6 py-16 md:px-12 md:py-20">

                <IntegrationHeader isInView={isInView} />

                <IntegrationOrbit
                    isInView={isInView}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                />
            </motion.div>
        </section>
    );
}