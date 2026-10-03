"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const people = [
    "/bento/person-1.jpg",
    "/bento/person-2.jpg",
    "/bento/person-3.jpg",
    "/bento/person-4.jpg",
    "/bento/person-5.jpg",
    "/bento/person-6.jpg",
    "/bento/person-7.jpg",
    "/bento/person-8.jpg",
];

const angles = people.map((_, index) => (360 / people.length) * index);

export default function TeamsVisual() {
    return (
        <div className="relative h-48 w-full overflow-visible">

            {/* Complete circular orbit */}
            <motion.div
                className="absolute left-1/2 top-[45%] h-40 w-40 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {people.map((person, index) => {
                    const angle = angles[index];

                    return (
                        <div
                            key={person}
                            className="absolute left-1/2 top-1/2 h-6 w-6"
                            style={{
                                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-70px)`,
                            }}
                        >
                            <motion.div
                                className="relative h-8 w-8 overflow-hidden rounded-md border border-white shadow-sm"
                                // animate={{ rotate: -360 }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                <Image
                                    src={person}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Center */}
            <div className="absolute left-1/2 top-[45%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/5 bg-white shadow-sm">
                <Image
                    src="/bento/team-center.png"
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                />
            </div>

            {/* blur  */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-15 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
    );
}
