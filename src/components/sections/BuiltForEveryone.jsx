import { BentoGrid, BentoGridItem, } from "../ui/bento-grid";
import InsightsVisual from "../ui/bento-r1-c2.jsx"
import EmployeeDataVisual from "../ui/bento-r2-c1.jsx";
import Image from "next/image";

export default function BuiltForEveryone() {
    return (
        <section className="px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-6xl">

                {/* Section heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-[56px]">
                        Built for everyone
                    </h2>

                    <p className="mt-6 font-body text-base leading-6 text-black/50">
                        Thousands of businesses, from startups to enterprises, use
                        CoreShift to handle payments.
                    </p>
                </div>

                {/* Bento */}
                <BentoGrid className="mt-12">
                    <BentoGridItem
                        title="For HR professionals"
                        description="Everything HR teams need to manage people."
                        header={
                            <div className="relative h-44 w-full overflow-hidden">
                                <Image
                                    src="/bento/attendance-report.png"
                                    alt="Attendance report"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        }
                    />

                    <BentoGridItem
                        title="For managers & leaders"
                        description="Get the information you need to lead your team."
                        header={<InsightsVisual />}
                    />

                    <BentoGridItem
                        title="For legal teams"
                        description="Keep compliance and employee information organized."
                    />

                    <BentoGridItem
                        title="All employee data at once"
                        description="Everything about your employees in one place."
                        className="md:col-span-2"
                        header={<EmployeeDataVisual />}
                    />

                    <BentoGridItem
                        title="For teams & employees"
                        description="Keep everyone aligned and informed."
                    />
                </BentoGrid>
            </div>
        </section>
    );
}