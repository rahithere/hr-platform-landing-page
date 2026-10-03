"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import InsightsVisual from "../ui/bento-r1-c2.jsx";
import EmployeeDataVisual from "../ui/bento-r2-c1.jsx";
import Image from "next/image";
import TeamsVisual from "../ui/bento-r2-c2.jsx";
import LegalTeamsVisual from "../ui/bento-r1-c3.jsx";

export default function BuiltForEveryone() {
    const heading = "Built for everyone";

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            className="bg-[#f5f6f7] px-4 py-16 md:px-8 md:py-24"
        >
            <div className="mx-auto max-w-5xl">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">

                    <h2 className="font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-[56px]">
                        {heading.split(" ").map((word, index) => (
                            <motion.span
                                key={word}
                                initial={{
                                    opacity: 0,
                                    filter: "blur(8px)",
                                    y: 8,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    filter: "blur(0px)",
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.8,
                                }}
                                transition={{
                                    duration: 0.35,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                className="mr-[0.25em] inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h2>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.8,
                        }}
                        transition={{
                            duration: 0.45,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="mt-6 font-body text-base leading-6 text-black/50"
                    >
                        Thousands of businesses, from startups to enterprises,
                        use CoreShift to handle payments.
                    </motion.p>
                </div>

                {/* Bento */}
                <BentoGrid className="mt-12">

                    {/* FIRST ROW */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <BentoGridItem
                            title="For HR professionals"
                            description="Everything HR teams need to manage people."
                            header={
                                <div className="relative h-44 w-full overflow-hidden">
                                    <Image
                                        src="/bento/attendance-report.png"
                                        alt="Attendance report"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            }
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.18,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <BentoGridItem
                            title="For managers & leaders"
                            description="Get the information you need to lead your team."
                            header={<InsightsVisual />}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.26,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <BentoGridItem
                            title="For legal teams"
                            description="Keep compliance and employee information organized."
                            header={<LegalTeamsVisual />}
                        />
                    </motion.div>

                    {/* SECOND ROW */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.38,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="md:col-span-2"
                    >
                        <BentoGridItem
                            title="All employee data at once"
                            description="Everything about your employees in one place."
                            header={<EmployeeDataVisual />}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.46,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <BentoGridItem
                            title="For teams & employees"
                            description="Keep everyone aligned and informed."
                            header={<TeamsVisual />}
                        />
                    </motion.div>

                </BentoGrid>
            </div>
        </motion.section>
    );
}