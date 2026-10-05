import CtaButton from "../ui/ctaButton";

export default function Navbar() {
    return (
        <header className="fixed top-6 left-1/2 z-50 w-[calc(100%-32px)] max-w-5xl -translate-x-1/2">
            <nav className="flex h-12 items-center justify-between rounded-xl border border-black/10 bg-white px-2 shadow-sm">

                {/* Logo */}
                <a
                    href="/"
                    className="font-heading px-3 text-md font-bold tracking-[-0.02em]"
                >
                    CoreShift
                </a>

                {/* Navigation */}
                <div className="hidden items-center gap-4 md:flex">
                    <a
                        href="#product"
                        className="text-xs font-medium text-black/70 transition-colors hover:text-black"
                    >
                        Product
                    </a>

                    <a
                        href="#features"
                        className="text-xs font-medium text-black/70 transition-colors hover:text-black"
                    >
                        Features
                    </a>

                    <a
                        href="#pricing"
                        className="text-xs font-medium text-black/70 transition-colors hover:text-black"
                    >
                        Pricing
                    </a>

                    <a
                        href="#resources"
                        className="text-xs font-medium text-black/70 transition-colors hover:text-black"
                    >
                        Resources
                    </a>
                </div>

                {/* cta */}
                <div className="flex items-center gap-2">
                    <CtaButton variant="secondary" size="sm" href="#signin">
                        Sign in
                    </CtaButton>

                    <CtaButton variant="hero" size="sm" href="#demo">
                        Request a Demo
                    </CtaButton>
                </div>
            </nav>
        </header>
    );
}