"use client";

import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { useRef, useEffect } from "react";

const integrations = [
    {
        name: "Meet",
        description: "Connect with your team through video meetings",
        icon: "/integration-icons/googlemeet.png",
    },
    {
        name: "Loom",
        description: "Record and share quick video messages",
        icon: "/integration-icons/loom.png",
    },
    {
        name: "Outlook",
        description: "Manage your emails and calendar in one place",
        icon: "/integration-icons/outlook.png",
    },
    {
        name: "Teams",
        description: "Collaborate and communicate with your team",
        icon: "/integration-icons/teams.png",
    },
    {
        name: "Gmail",
        description: "Manage your email communication seamlessly",
        icon: "/integration-icons/gmail.png",
    },
    {
        name: "Sheets",
        description: "Organize and manage your HR data with spreadsheets",
        icon: "/integration-icons/sheets.png",
    },
];

export default function IntegrationOrbit({
    isInView,
    activeIndex,
    setActiveIndex,
}) {

    // const trackRef = useRef(null);
    // useEffect(() => {
    //     if (!isInView) return;

    //     const track = trackRef.current;

    //     const cards = gsap.utils.toArray(".integration-card");

    //     const cardWidth = cards[0].offsetWidth + 24;

    //     const ctx = gsap.context(() => {
    //         gsap.to(track, {
    //             x: `-=${cardWidth}`,
    //             duration: 1,
    //             ease: "power1.inOut",
    //             repeat: -1,
    //             repeatDelay: 0.8,
    //             modifiers: {
    //                 x: gsap.utils.unitize((value) => {
    //                     const x = parseFloat(value);

    //                     if (x <= -cardWidth * integrations.length) {
    //                         return 0;
    //                     }

    //                     return x;
    //                 }),
    //             },
    //         });
    //     }, track);

    //     return () => ctx.revert();
    // }, [isInView]);
    return (
        <div className="mt-14 w-full">

            {/* Desktop */}
            <div className="hidden md:block">

                {/* Orbit area */}
                <motion.div className="relative mx-auto mt-14 h-[230px] max-w-5xl">

                    {/* Cards */}
                    <div className=" relative flex items-start justify-center gap-6">
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={integration.name}
                                className="h-32 w-32 shrink-0 cursor-pointer"
                                style={{
                                    transform: `translateY(${index === 0 || index === 5
                                        ? 55
                                        : index === 1 || index === 4
                                            ? 15
                                            : 0
                                        }px) rotate(${index === 0
                                            ? -20
                                            : index === 1
                                                ? -10
                                                : index === 4
                                                    ? 10
                                                    : index === 5
                                                        ? 20
                                                        : 0
                                        }deg)`,
                                }}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#f5f6f8] shadow-sm transition-shadow duration-300 hover:shadow-md">
                                    <img src={integration.icon} alt={integration.name} className="h-16 w-16 object-contain" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>


                {/* Fixed information */}
                <div className="mt-2 min-h-[72px] text-center">

                    <motion.div
                        key={activeIndex}
                        initial={{
                            opacity: 0,
                            filter: "blur(5px)",
                        }}
                        animate={{
                            opacity: 1,
                            filter: "blur(0px)",
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                    >
                        <h3 className="text-lg font-medium">
                            {integrations[activeIndex].name}
                        </h3>

                        <p className="mt-1 text-sm text-black/40">
                            {integrations[activeIndex].description}
                        </p>
                    </motion.div>

                </div>

            </div>

            {/* MOBILE / TABLET */}
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 px-4 md:hidden">
                {integrations.map((integration, index) => {
                    const isActive = index === activeIndex;

                    return (
                        <motion.button
                            key={integration.name}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            initial={{
                                opacity: 0,
                                y: 20,
                                scale: 0.95,
                            }}
                            animate={
                                isInView
                                    ? {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                    }
                                    : {
                                        opacity: 0,
                                        y: 20,
                                        scale: 0.95,
                                    }
                            }
                            transition={{
                                duration: 0.45,
                                delay: index * 0.05,
                                ease: "easeOut",
                            }}
                            className="w-full"
                        >
                            <div
                                className={`
                        className="flex h-[250px] w-full flex-col items-center justify-between rounded-2xl bg-[#f5f6f8] p-5 text-center shadow-sm transition-shadow duration-300"
                        ${isActive ? "shadow-md" : ""}`}
                            >
                                {/* Icon */}
                                <div className="flex flex-1 items-center justify-center">
                                    <img src={integration.icon} alt={integration.name} className="h-16 w-16 object-contain" />
                                </div>

                                {/* Details */}
                                <div className="w-full">
                                    <h3 className="text-base font-semibold text-[#111]">
                                        {integration.name}
                                    </h3>

                                    <p className="mt-2 text-sm leading-5 text-gray-500">
                                        {integration.description}
                                    </p>
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>

        </div>
    );
}