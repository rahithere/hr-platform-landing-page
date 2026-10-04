

export default function TestimonialCard({ testimonial }) {
    return (
        <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#f5f6f7]">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>

                <div>
                    <h3 className="font-heading text-base font-semibold">{testimonial.name}</h3>
                    <p className="font-body text-sm text-black/50">{testimonial.role}</p>
                </div>
            </div>

            <div className="mt-6">
                <div className="text-sm tracking-wide text-[#9B68FF]">★★★★★</div>

                <p className="mt-4 font-body text-lg leading-7 text-black/70">
                    “{testimonial.quote}”
                </p>
            </div>
        </div>
    );
}