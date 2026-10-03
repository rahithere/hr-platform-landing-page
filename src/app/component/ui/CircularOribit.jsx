"use client";

import Image from "next/image";

export default function CircularOrbit({
    items,
    direction = "clockwise",
    duration = 24,
    radiusX = 90,
    radiusY = 145,
    cardWidth = 88,
    cardHeight = 108,
}) {
    const reverse = direction === "counterclockwise";

    return (
        <>
            <style jsx>{`
        @keyframes orbit-forward {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-reverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        .orbit {
          animation: ${reverse ? "orbit-reverse" : "orbit-forward"}
            ${duration}s linear infinite;
        }

        .orbit-card {
          animation: ${reverse
                    ? "orbit-forward"
                    : "orbit-reverse"} ${duration}s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit,
          .orbit-card {
            animation-play-state: paused;
          }
        }
      `}</style>

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="orbit absolute left-1/2 top-1/2"
                    style={{
                        width: radiusX * 2,
                        height: radiusY * 2,
                        marginLeft: -radiusX,
                        marginTop: -radiusY,
                    }}
                >
                    {items.map((item, index) => {
                        const angle = (360 / items.length) * index;
                        const radians = (angle * Math.PI) / 180;

                        const x = Math.cos(radians) * radiusX;
                        const y = Math.sin(radians) * radiusY;

                        return (
                            <div
                                key={`${item.src}-${index}`}
                                className="absolute left-1/2 top-1/2"
                                style={{
                                    width: cardWidth,
                                    height: cardHeight,
                                    marginLeft: -cardWidth / 2,
                                    marginTop: -cardHeight / 2,
                                    transform: `translate(${x}px, ${y}px)`,
                                }}
                            >
                                <div
                                    className="orbit-card relative h-full w-full overflow-hidden rounded-2xl border-2 border-white bg-white shadow-md"
                                    style={{
                                        animationDuration: `${duration}s`,
                                    }}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt || ""}
                                        fill
                                        sizes={`${cardWidth}px`}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}