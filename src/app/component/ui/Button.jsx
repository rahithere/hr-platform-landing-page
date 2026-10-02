export default function Button({
    children,
    variant = "primary",
    size = "sm",
    href = "#",
}) {
    const variants = {
        primary: "bg-black text-white hover:bg-black/90",
        secondary: "bg-white text-black border border-black/10 hover:bg-black/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
    };

    return (
        <a
            href={href}
            className={`inline-flex items-center justify-center rounded-xl font-medium transition-colors duration-200 ${variants[variant]} ${sizes[size]}`}
        >
            {children}
        </a>
    );
}