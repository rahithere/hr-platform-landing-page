"use client";

import { motion } from "framer-motion";

export default function Envelope({ isRevealed }) {
    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={isRevealed ? { y: 180, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-1/2 z-10 w-[560px] -translate-x-1/2"
        >
            <svg viewBox="0 0 500 300" fill="none" className="h-auto w-full drop-shadow-[0_12px_25px_rgba(0,0,0,0.12)]">
                {/* Envelope body */}
                <path d="M20 70H480V270H20V70Z" fill="#F5F6F7" stroke="#F5F6F7" strokeWidth="2" />

                {/* Left fold */}
                <path d="M20 70L250 220L480 70" fill="#F5F6F7" stroke="#F5F6F7" strokeWidth="2" />

                {/* Bottom folds */}
                <path d="M20 270L180 145" stroke="#F5F6F7" strokeWidth="2" />
                <path d="M480 270L320 145" stroke="#F5F6F7" strokeWidth="2" />

                {/* Top flap */}
                <motion.path
                    d="M20 70L250 225L480 70"
                    fill="#8B5CF6"
                    stroke="#F5F6F7"
                    strokeWidth="2"
                    initial={{ opacity: 1 }}
                    animate={isRevealed ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.4 }}
                />
            </svg>
        </motion.div>
    );
}