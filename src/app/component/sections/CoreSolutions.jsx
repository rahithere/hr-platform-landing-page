import Button from "../ui/Button";
import CircularOrbit from "../ui/CircularOribit.jsx";

export default function CoreSolutions() {
    return (
        <section className="px-4 py-16 md:px-8 md:py-24">
            <div className="relative mx-auto h-[640px] max-w-9xl overflow-hidden rounded-[24px] bg-[#f5f6f7]">

                {/* LEFT ORBIT */}

                {/* todo */}

                {/* RIGHT ORBIT */}

                {/* todo */}

                {/* CENTER CONTENT */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="flex w-full max-w-md flex-col items-center px-8 text-center">

                        {/* Icon */}
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-8 w-8"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    fill="#9B68FF"
                                />
                                <path
                                    d="M6.5 18.5c.5-3 2.5-4.5 5.5-4.5s5 1.5 5.5 4.5"
                                    stroke="#9B68FF"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>

                        {/* Heading */}
                        <h2 className="font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-[56px]">
                            Core HR
                            <br />
                            solutions
                        </h2>

                        {/* Description */}
                        <p className="mt-6 max-w-sm font-body text-base leading-6 text-black/50">
                            Streamline HR processes in one centralized
                            platform, enhancing team transparency.
                        </p>

                        {/* CTA */}
                        <Button
                            variant="purple"
                            size="md"
                            href="#"
                            className="mt-6"
                        >
                            Learn More
                        </Button>

                    </div>
                </div>

            </div>
        </section>
    );
}