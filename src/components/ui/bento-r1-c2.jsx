"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function InsightsVisual() {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: false,
        amount: 0.5,
    });

    return (
        <div
            ref={ref}
            className="relative h-48 w-full overflow-hidden"
        >

            {/* Radar */}
            <svg
                viewBox="0 0 400 220"
                className="absolute inset-0 h-full w-full"
                fill="none"
            >
                <motion.circle
                    cx="200"
                    cy="120"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="1"
                    animate={{
                        r: isInView ? 108 : 100,
                        opacity: isInView ? 0.1 : 0.2,
                    }}
                    transition={{
                        duration: 1,
                    }}
                />

                <motion.circle
                    cx="200"
                    cy="120"
                    r="75"
                    stroke="currentColor"
                    strokeWidth="1"
                    animate={{
                        r: isInView ? 83 : 75,
                        opacity: isInView ? 0.08 : 0.2,
                    }}
                    transition={{
                        duration: 1,
                    }}
                />

                <motion.circle
                    cx="200"
                    cy="120"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="1"
                    animate={{
                        r: isInView ? 58 : 50,
                        opacity: isInView ? 0.02 : 0.06,
                    }}
                    transition={{
                        duration: 1,
                    }}
                />
            </svg>


            {/* Card stack */}
            <div className="absolute left-1/2 top-8 h-40 w-[78%] -translate-x-1/2">

                {/* Card 3 - initially underneath */}
                <motion.div
                    className="absolute left-1/2 top-0 flex h-14 w-[88%] -translate-x-1/2 items-center gap-3 rounded-xl border border-black/5 bg-white px-4 shadow-md"
                    animate={{
                        y: isInView ? 72 : 8,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: isInView ? 0.2 : 0,
                    }}
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="7" />
                            <path d="M12 8v4l3 2" />
                        </svg>
                    </div>

                    <span className="text-sm font-medium text-black">
                        Manage Your Team
                    </span>
                </motion.div>


                {/* Card 2 */}
                <motion.div
                    className="absolute left-1/2 top-0 flex h-14 w-[94%] -translate-x-1/2 items-center gap-3 rounded-xl border border-black/5 bg-white px-4 shadow-md"
                    animate={{
                        y: isInView ? 36 : 4,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: isInView ? 0.1 : 0,
                    }}
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-400">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="7" />
                            <path d="M12 8v4l3 2" />
                        </svg>
                    </div>

                    <span className="text-sm font-medium text-black">
                        Track Performance
                    </span>
                </motion.div>


                {/* Card 1 - main/front */}
                <motion.div
                    className="absolute left-1/2 top-0 flex h-14 w-full -translate-x-1/2 items-center gap-3 rounded-xl border border-black/5 bg-white px-4 shadow-lg"
                    animate={{
                        y: isInView ? 0 : 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-400">
                        <svg
                            viewBox="0 0 24 24"
                            className="h-5 w-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <circle cx="12" cy="12" r="7" />
                            <path d="M12 8v4l3 2" />
                        </svg>
                    </div>

                    <span className="text-sm font-medium text-black">
                        Access Real-Time Insights
                    </span>
                </motion.div>

            </div>
        </div>
    );
}

export default InsightsVisual;