export default function Button({
    children,
    variant = "primary",
    size = "sm",
    href = "#",
    className = ""
}) {

    const variants = {
        primary: "bg-black text-white hover:bg-black/90",
        secondary: "bg-white text-black border border-black/10 hover:bg-black/5",
        hero: "bg-[#FF6548] text-white hover:scale-[1.02]"
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
    };

    return (
        <a
            href={href}
            className={`font-body inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className} `}
        >
            {children}
        </a>
    );
}