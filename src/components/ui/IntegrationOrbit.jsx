"use client";

import { motion } from "framer-motion";

const integrations = [
    {
        name: "React",
        description: "Build modern interactive interfaces",
        icon: "devicon-react-original colored",
    },
    {
        name: "Figma",
        description: "Design and collaborate visually",
        icon: "devicon-figma-plain colored",
    },
    {
        name: "Docker",
        description: "Build, ship and run applications",
        icon: "devicon-docker-plain colored",
    },
    {
        name: "Node.js",
        description: "Fast backend development",
        icon: "devicon-nodejs-plain colored",
    },
    {
        name: "MongoDB",
        description: "Flexible application database",
        icon: "devicon-mongodb-plain colored",
    },
    {
        name: "AWS",
        description: "Cloud infrastructure and deployment",
        icon: "devicon-amazonwebservices-plain colored",
    },
];

export default function IntegrationOrbit({
    isInView,
    activeIndex,
    setActiveIndex,
}) {
    return (
        <div className="mt-14 w-full">

            {/* Desktop */}
            <div className="hidden md:block">

                {/* Orbit area */}
                <motion.div
                    className="relative mx-auto mt-14 h-[230px] max-w-5xl"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >

                    {/* Cards */}
                    <div className="relative flex items-start justify-center gap-6">
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
                                    <i className={`${integration.icon} text-6xl`} />
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
                        flex h-[190px] w-full flex-col
                        items-center justify-between
                        rounded-2xl
                        bg-[#f5f6f8]
                        p-5
                        text-center
                        shadow-sm
                        transition-shadow duration-300
                        ${isActive ? "shadow-md" : ""}
                    `}
                            >
                                {/* Icon */}
                                <div className="flex flex-1 items-center justify-center">
                                    <i className={`${integration.icon} text-5xl`} />
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