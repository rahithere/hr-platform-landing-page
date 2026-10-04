'use client'

import Image from "next/image";
import CtaButton from "../ui/ctaButton";
import { motion } from "framer-motion";

export default function Hero() {
    const heading = "All-in-one HR platform";
    return (
        <section className="relative bg-white pt-30">
            {/* Hero visual area */}
            <div className="relative mx-auto h-[500] w-full max-w-6xl">

                {/* Connector background */}
                {/* <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    viewBox="0 0 1200 520"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                > */}
                {/* Main horizontal line */}
                {/* <path
                        d="M180 175H1020"
                        stroke="currentColor"
                        strokeOpacity="0.12"
                        strokeWidth="1"
                    /> */}

                {/* Left upper connector */}
                {/* <path
                        d="M300 90H350L400 175"
                        stroke="currentColor"
                        strokeOpacity="0.12"
                        strokeWidth="1"
                    /> */}

                {/* Left lower connector */}
                {/* <path
                        d="M300 265H350L400 175"
                        stroke="currentColor"
                        strokeOpacity="0.12"
                        strokeWidth="1"
                    /> */}

                {/* Right upper connector */}
                {/* <path
                        d="M900 90H850L800 175"
                        stroke="currentColor"
                        strokeOpacity="0.12"
                        strokeWidth="1"
                    /> */}

                {/* Right lower connector */}
                {/* <path
                        d="M900 265H850L800 175"
                        stroke="currentColor"
                        strokeOpacity="0.12"
                        strokeWidth="1"
                    /> */}

                {/* Nodes */}
                {/* <circle cx="350" cy="90" r="3" fill="#8B5CF6" />
                    <circle cx="350" cy="265" r="3" fill="#8B5CF6" />
                    <circle cx="850" cy="90" r="3" fill="#8B5CF6" />
                    <circle cx="850" cy="265" r="3" fill="#8B5CF6" />
                </svg> */}

                {/* Left person */}
                <div className="absolute left-[9%] top-34 z-10">
                    <div className="h-16 w-16 overflow-hidden rounded-2xl border border-black/10 shadow-sm">
                        <Image
                            src="/hero/person-left.jpg"
                            alt=""
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Left bulb */}
                <div className="absolute left-[21%] top-16 z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-300 shadow-sm">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            {/* Bulb */}
                            <path
                                d="M9 18H15"
                                stroke="#171717"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />

                            <path
                                d="M9.5 21H14.5"
                                stroke="#171717"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />

                            <path
                                d="M8.5 14.5C7.55 13.6 7 12.35 7 11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11C17 12.35 16.45 13.6 15.5 14.5C14.7 15.25 14 16 14 17H10C10 16 9.3 15.25 8.5 14.5Z"
                                stroke="#171717"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                            />

                            {/* Rays */}
                            <path
                                d="M12 2V3.5M4.5 5L5.6 6.1M19.5 5L18.4 6.1M3 11H4.5M21 11H19.5"
                                stroke="#171717"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Left blue icon */}
                <div className="absolute left-[21%] top-57 z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400 shadow-sm">
                        <span className="text-xl text-white">♧</span>
                    </div>
                </div>

                {/* Center visual */}
                <div className="absolute left-1/2 top-30 z-20 -translate-x-1/2">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-violet-500 shadow-lg">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white/80">
                            <span className="text-3xl font-medium text-white">✓</span>
                        </div>
                    </div>
                </div>

                {/* Right shield */}
                <div className="absolute right-[21%] top-15 z-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 shadow-sm">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            {/* Shield */}
                            <path
                                d="M12 3L19 6V11.5C19 16.2 16.1 19.8 12 21C7.9 19.8 5 16.2 5 11.5V6L12 3Z"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinejoin="round"
                            />

                            {/* Lightning */}
                            <path
                                d="M13.5 7L9.5 13H12L10.5 17L15 11H12.8L13.5 7Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>

                {/* Right eyes */}
                <div className="absolute right-[10%] top-34 z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-sm">
                        <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            aria-hidden="true"
                        >
                            {/* Left eye */}
                            <ellipse
                                cx="10"
                                cy="16"
                                rx="4"
                                ry="7"
                                stroke="#171717"
                                strokeWidth="1.5"
                            />

                            {/* Right eye */}
                            <ellipse
                                cx="22"
                                cy="16"
                                rx="4"
                                ry="7"
                                stroke="#171717"
                                strokeWidth="1.5"
                            />

                            {/* Left pupil */}
                            <ellipse
                                cx="10"
                                cy="16"
                                rx="1.5"
                                ry="3"
                                fill="#171717"
                            />

                            {/* Right pupil */}
                            <ellipse
                                cx="22"
                                cy="16"
                                rx="1.5"
                                ry="3"
                                fill="#171717"
                            />
                        </svg>
                    </div>
                </div>

                {/* Right person */}
                <div className="absolute right-[21%] top-58 z-10">
                    <div className="h-12 w-12 overflow-hidden rounded-xl border border-black/10 shadow-sm">
                        <Image
                            src="/hero/person-right.jpg"
                            alt=""
                            width={48}
                            height={48}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Hero content */}
                <div className="absolute inset-x-0 top-[280px] z-30 flex flex-col items-center text-center md:top-auto md:bottom-0">
                    <h1 className="max-w-2xl font-heading text-[48px] font-semibold leading-[1.05] tracking-[-0.04em] md:text-[64px]">
                        {heading.split(" ").map((word, index) => (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
                                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                                className="mr-[0.25em] inline-block"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="mt-6 max-w-md font-body text-base leading-6 text-black/50">
                        CoreShift is a modern, all-in-one HR platform
                        designed to perfectly fit your business needs.
                    </motion.p>

                    <CtaButton
                        variant="hero"
                        size="md"
                        href="#"
                        className="mt-6"
                    >
                        Request a Demo
                    </CtaButton>
                </div>
            </div>
        </section>
    );
}