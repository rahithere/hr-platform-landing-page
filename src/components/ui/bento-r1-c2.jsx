'use client'
import { motion } from "framer-motion";

function InsightsVisual() {
    return (
        <div className="relative h-48 w-full overflow-hidden">

            {/* Radar / orbit background */}
            <svg
                viewBox="0 0 400 220"
                className="absolute inset-0 h-full w-full"
                fill="none"
            >

                {/* outer */}
                <motion.circle
                    cx="200"
                    cy="120"
                    r="100"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    animate={{
                        r: [100, 108, 100],
                        opacity: [0.2, 0.1, 0.2],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                <motion.circle
                    cx="200"
                    cy="120"
                    r="75"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    animate={{
                        r: [75, 83, 75],
                        opacity: [0.2, 0.08, 0.2],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />

                <motion.circle
                    cx="200"
                    cy="120"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                    animate={{
                        r: [50, 58, 50],
                        opacity: [0.06, 0.02, 0.06],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </svg>


            {/* Card stack */}
            <div className="absolute left-1/2 top-8 w-[78%] -translate-x-1/2">

                {/* Back card */}
                <div
                    className="absolute left-1/2 top-8 h-14 w-[88%] -translate-x-1/2 rounded-xl border border-black/5 bg-white/50 shadow-sm"
                />


                {/* Middle card */}
                <div
                    className="absolute left-1/2 top-4 h-14 w-[94%] -translate-x-1/2 rounded-xl border border-black/5 bg-white/75 shadow-md"
                />

                {/* Main card */}
                <div
                    className="absolute left-1/2 top-0 flex h-14 w-full -translate-x-1/2 items-center gap-3 rounded-xl border border-black/5 bg-white px-4 shadow-lg"
                >

                    {/* Icon */}
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

                    {/* Text */}
                    <span className="text-sm font-medium text-black">
                        Access Real-Time Insights
                    </span>
                </div>

            </div>
        </div>
    );
}

export default InsightsVisual