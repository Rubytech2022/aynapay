"use client";
import Confetti, { ConfettiRef } from "@/components/ui/confetti";
import TextReveal from "@/components/ui/text-reveal";
import { useRef } from "react";

export default function HowSection() {
  const confettiRef = useRef<ConfettiRef>(null);
  const steps = [
    "How to work with AynaPay? Start in 3 Easy Steps",
    "Step One",
    "Submit Application",
    "Step Two",
    "Complete Verification",
    "Step three",
    "Start Business🎉",
  ];
  return (
    <div id="how-works" className="container section">
      {steps?.map((item, idx) => {
        return (
          <div
            className="relative z-10 flex min-h-[40vh] items-center justify-center rounded-lg"
            key={idx}
          >
            <TextReveal
              className="text-[28px] md:text-[36px] pb-[40px] font-medium uppercase"
              text={item}
            />
            {item === "Start Business🎉" ? (
              <Confetti
                onMouseEnter={() => {
                  confettiRef.current?.fire({});
                }}
                ref={confettiRef}
                className="absolute left-0 top-[0] z-0 size-full"
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
