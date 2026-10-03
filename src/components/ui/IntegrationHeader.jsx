"use client";

import { motion } from "framer-motion";

export default function IntegrationHeader({ isInView }) {
    return (
        <div className="text-center">

            {/* Icon */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    scale: isInView ? 1 : 0.8,
                    y: isInView ? 0 : 10,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl border border-black/5 bg-white shadow-sm"
            >
                <div className="relative h-7 w-7">

                    {/* Big gear */}
                    <motion.svg
                        viewBox="0 0 24 24"
                        className="absolute left-0 top-0 h-5 w-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <path d="M19 13.2v-2.4l-1.8-.5a5.7 5.7 0 0 0-.5-1.2l1-1.6-1.7-1.7-1.6 1a5.7 5.7 0 0 0-1.2-.5L12.8 4h-2.4l-.4 2.3a5.7 5.7 0 0 0-1.2.5l-1.6-1-1.7 1.7 1 1.6a5.7 5.7 0 0 0-.5 1.2L4.2 10.8v2.4l1.8.5c.1.4.3.8.5 1.2l-1 1.6 1.7 1.7 1.6-1c.4.2.8.4 1.2.5l.4 2.3h2.4l.4-2.3c.4-.1.8-.3 1.2-.5l1.6 1 1.7-1.7-1-1.6c.2-.4.4-.8.5-1.2l1.8-.5Z" />
                        <circle cx="11.6" cy="12" r="3" />
                    </motion.svg>

                    {/* Small gear */}
                    <motion.svg
                        viewBox="0 0 24 24"
                        className="absolute bottom-0 right-0 h-4 w-4 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <path d="M19 13.2v-2.4l-1.8-.5a5.7 5.7 0 0 0-.5-1.2l1-1.6-1.7-1.7-1.6 1a5.7 5.7 0 0 0-1.2-.5L12.8 4h-2.4l-.4 2.3a5.7 5.7 0 0 0-1.2.5l-1.6-1-1.7 1.7 1 1.6a5.7 5.7 0 0 0-.5 1.2L4.2 10.8v2.4l1.8.5c.1.4.3.8.5 1.2l-1 1.6 1.7 1.7 1.6-1c.4.2.8.4 1.2.5l.4 2.3h2.4l.4-2.3c.4-.1.8-.3 1.2-.5l1.6 1 1.7-1.7-1-1.6c.2-.4.4-.8.5-1.2l1.8-.5Z" />
                        <circle cx="11.6" cy="12" r="3" />
                    </motion.svg>

                </div>
            </motion.div>


            {/* Heading */}
            <motion.h2
                initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    filter: isInView
                        ? "blur(0px)"
                        : "blur(20px)",
                }}
                transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: 0.12,
                }}
                className="font-heading mx-auto mt-6 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em]"
            >
                Integrate with your existing
                <br />
                tools in seconds
            </motion.h2>

        </div>
    );
}