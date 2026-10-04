"use client";

import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

export default function Footer() {
    return (
        <section className="bg-[#f5f6f7] px-4 pb-6 pt-16 md:px-8 md:pb-8 md:pt-24"> {/*section animation*/}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.8, ease: easeInOut }}
                className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-black/10 bg-white"
            >
                <div className="px-8 pb-0 pt-12 md:px-12 md:pt-16">
                    <div className="grid grid-cols-2 gap-10 md:grid-cols-6 md:gap-8">
                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.45, ease: "easeOut" }}
                            className="col-span-2 max-w-xs"
                        >
                            <p className="font-heading text-sm font-semibold leading-5 text-black md:text-base md:leading-5">
                                CoreShift is the HRM platform that builds a thriving workplace culture—all in one place.
                            </p>
                        </motion.div>

                        {/* links are anchor tag */}
                        {/* Product */}
                        <FooterColumn
                            title="Product"
                            links={["CoreHR", "Recruit", "Perform", "Pulse"]}
                            delay={0.1}
                        />

                        {/* Features */}
                        <FooterColumn
                            title="Features"
                            links={["Desk", "Time", "Analytics"]}
                            delay={0.15}
                        />

                        {/* Pricing */}
                        <FooterColumn
                            title="Pricing"
                            links={[]}
                            delay={0.2}
                        />

                        {/* Resources */}
                        <FooterColumn
                            title="Resources"
                            links={[]}
                            delay={0.25}
                        />

                        {/* Social */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
                            className="col-span-2 md:col-span-1"
                        >
                            <p className="font-heading text-sm font-semibold text-black">Follow us</p>

                            <div className="mt-4 flex gap-2">
                                <SocialButton label="Instagram" icon="instagram" />
                                <SocialButton label="X" icon="x" />
                                <SocialButton label="TikTok" icon="tiktok" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Huge CoreShift text - bottom */}
                <div className="relative mt-10 h-[180px] overflow-hidden md:mt-14 md:h-[250px]">
                    {/* Mobile - static */}
                    <h2 className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-[18vw] font-semibold leading-none tracking-[-0.06em] text-[#ff674f] md:hidden">
                        CoreShift
                    </h2>

                    {/* Desktop - animated */}
                    <motion.h2
                        initial={{ y: 200, opacity: 0, filter: "blur(30px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-heading text-[24vw] font-semibold leading-none tracking-[-0.06em] text-[#ff674f] md:block md:text-[220px]"
                    >
                        CoreShift
                    </motion.h2>
                </div>
            </motion.div>
        </section>
    );
}

function FooterColumn({ title, links, delay }) {
    // link - array
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay, ease: "easeOut" }}
        >
            <p className="font-heading text-sm font-semibold text-black">{title}</p>

            {links.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                    {links.map((link) => (
                        <a key={link} href="#" className="font-body text-sm text-black/45 transition-colors duration-200 hover:text-black">
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </motion.div>
    );
}

function SocialButton({ label, icon }) {
    return (
        <a
            href="#"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5f6f7] text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
            {icon === "instagram" && (
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
            )}

            {icon === "x" && (
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M5 4L19 20M19 4L5 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )}

            {icon === "tiktok" && (
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path d="M14 4V15.5C14 18 12.2 20 9.8 20C7.7 20 6 18.5 6 16.5C6 14.4 7.8 12.8 10 12.8C11 12.8 12 13.1 12.8 13.7V8.5C15.3 9.9 17.3 10.5 19 10.5V7.2C16.5 7 15 5.8 14 4Z" fill="currentColor" />
                </svg>
            )}
        </a>
    );
}