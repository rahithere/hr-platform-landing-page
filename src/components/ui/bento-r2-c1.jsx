"use client";
import { motion } from "framer-motion"

import Image from "next/image";

export default function EmployeeDataVisual() {
    return (
        <div className="relative h-48 w-full overflow-hidden">

            {/* image1  */}
            <motion.div
                className="absolute left-[8%] top-6 h-40 w-[48%]"
                initial={{ x: 0 }}
                whileInView={{ x: 300 }}
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/bento/r2-c1-1.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </motion.div>

            {/* Training */}
            <motion.div
                className="absolute right-[-5%] top-6 h-40 w-[55%]"
                initial={{ x: 0 }}
                whileInView={{ x: -350 }}
                viewport={{
                    once: true,
                    amount: 0.5,
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                }}
            >
                <Image
                    src="/bento/r2-c1-2.png"
                    alt=""
                    fill
                    className="object-cover"
                />
            </motion.div>


            {/* blur from bottom  */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div >
    );
}