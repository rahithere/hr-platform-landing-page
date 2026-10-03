"use client";

import { motion } from "framer-motion";

export default function LegalTeamsVisual() {
    return (
        <div className="relative h-48 w-full overflow-hidden">

            {/* Vertical background lines */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:28px_100%]" />
            </div>

            {/* paper left */}
            <motion.div
                className="absolute left-[28%] top-8 z-10 h-24 w-20"
                initial={{
                    opacity: 0,
                    y: 12,
                    rotate: -7,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: -7,
                }}
                viewport={{
                    once: false,
                    amount: 0.5,
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.15,
                }}
            >
                <Document />
            </motion.div>

            {/* paper right */}
            <motion.div
                className="absolute right-[28%] top-8 z-10 h-24 w-20"
                initial={{
                    opacity: 0,
                    y: 12,
                    rotate: 7,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 7,
                }}
                viewport={{
                    once: false,
                    amount: 0.5,
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.25,
                }}
            >
                <Document />
            </motion.div>

            {/* purple icon */}
            <motion.div
                className="absolute left-1/2 top-[48%] z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-violet-500 shadow-lg"
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                viewport={{
                    once: false,
                    amount: 0.5,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                }}
            >
                <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                >
                    <rect
                        x="5"
                        y="4"
                        width="11"
                        height="15"
                        rx="2"
                    />

                    <path d="M9 8h4" />
                    <path d="M9 11h4" />
                    <path d="M9 14h2" />

                    <circle
                        cx="17"
                        cy="16"
                        r="4"
                        fill="currentColor"
                        stroke="white"
                    />

                    <path
                        d="M15.5 16l1 1 2-2"
                        stroke="white"
                        strokeWidth="1.5"
                    />
                </svg>
            </motion.div>

        </div>
    );
}


// document svg(paper)
function Document() {
    return (
        <div className="relative h-full w-full rounded-lg border border-black/5 bg-white shadow-md">

            <svg
                viewBox="0 0 80 96"
                className="absolute inset-0 h-full w-full"
                fill="none"
            >
                {/* Small top square */}
                <rect
                    x="10"
                    y="10"
                    width="20"
                    height="16"
                    rx="4"
                    fill="#EEF0F7"
                />

                {/* Text lines */}
                <rect
                    x="10"
                    y="38"
                    width="50"
                    height="3"
                    rx="1.5"
                    fill="#E5E7EB"
                />

                <rect
                    x="10"
                    y="47"
                    width="42"
                    height="3"
                    rx="1.5"
                    fill="#E5E7EB"
                />

                <rect
                    x="10"
                    y="56"
                    width="34"
                    height="3"
                    rx="1.5"
                    fill="#E5E7EB"
                />

                {/* Bottom line */}
                <rect
                    x="10"
                    y="72"
                    width="25"
                    height="3"
                    rx="1.5"
                    fill="#E5E7EB"
                />
            </svg>

        </div>
    );
}