"use client";

export default function TestButton({ direction, onClick, disabled = false }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={direction === "left" ? "Previous" : "Next"}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition-all duration-300 hover:bg-[#9B68FF] hover:text-white disabled:pointer-events-none disabled:opacity-40"
        >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                {direction === "left" ? (
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                )}
            </svg>
        </button>
    );
}