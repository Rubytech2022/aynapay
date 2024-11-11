'use client'
import Confetti, { ConfettiRef } from "@/components/ui/confetti";
import TextReveal from "@/components/ui/text-reveal";
import { useRef } from "react";


export default function HowSection() {
    const confettiRef = useRef<ConfettiRef>(null);
    return (
        <div id="how-works" className="my-[80px] lg:my-[120px] ">
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  ">
                <TextReveal className="text-[28px] md:text-[36px] pb-[40px] font-medium" text="How to work with AynaPay? Start in 3 Easy Steps" />
            </div>
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  ">
                <TextReveal className="text-[28px] md:text-[36px] pb-[40px] font-medium uppercase" text="Step One" />
            </div>
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  ">
                <TextReveal className="text-[28px] md:text-[36px] pb-[40px] font-medium" text="Submit Application" />
            </div>
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  ">
                <TextReveal className="text-[28px] md:text-[36px] pb-[40px] font-medium uppercase" text="Step Two" />
            </div>
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  ">
                <TextReveal className="text-[28px] md:text-[36px] pb-[40px] font-medium uppercase" text="Complete Verification" />
            </div>
            <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  ">
                <TextReveal className="text-[28px] md:text-[36px] pb-[40px] font-medium uppercase" text="Step three" />
            </div>
            <div className="relative  z-10 flex min-h-64 items-center justify-center rounded-lg  ">
                <TextReveal className="text-[28px] md:text-[36px] pb-[40px] font-medium uppercase " text="Start Business🎉" />
                <Confetti
                    onMouseEnter={() => {
                        confettiRef.current?.fire({});
                    }}
                    ref={confettiRef}
                    className="absolute left-0 top-[0] z-0 size-full"
                />
            </div>

        </div>

    )
}