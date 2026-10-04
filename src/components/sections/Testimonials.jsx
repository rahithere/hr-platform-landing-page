"use client";

import { motion } from "framer-motion";
import TestimonialVisual from "../ui/TestimonialVisual.jsx";

export default function Testimonials() {
    const heading = "What our customers say";

    return (
        <section className="bg-[#f5f6f7] px-4 py-20 md:px-8 md:py-24">
            <div className="mx-auto max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <h2 className="font-heading text-3xl font-semibold tracking-tight text-black md:text-4xl">
                        {heading.split(" ").map((word, index) => (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
                                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.35, delay: index * 0.07, ease: "easeOut" }}
                                className="mr-[0.25em] inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
                        className="mx-auto mt-4 max-w-lg font-body text-base leading-6 text-black/50"
                    >
                        See how teams are simplifying their work and getting more done with CoreShift.
                    </motion.p>
                </motion.div>

                <TestimonialVisual />
            </div>
        </section>
    );
}