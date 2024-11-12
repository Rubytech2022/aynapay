"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/ui/magic-card";
import Globe from "@/components/ui/globe";
import { motion } from "framer-motion";
import { Building2, CreditCard, Store } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

const Tracking = () => {
  return (
    <div className="mx-auto flex w-[240px] md:max-w-[320px] items-center justify-between pt-[50px] pb-[30px]">
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-green-100">
          <CreditCard className="h-[22px] w-[22px] text-green-600" />
        </div>
        <span className="text-[12px] font-medium text-zinc-500 uppercase">
          Payeer
        </span>
      </div>
      <div className="relative w-32 h-[2px]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-blue-100">
          <Store className="h-[22px] w-[22px] text-blue-600" />
        </div>
        <span className="text-[12px] font-medium text-zinc-500 uppercase">
          Reviewed
        </span>
      </div>
      <div className="relative w-32 h-[2px] ">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-orange-100">
          <Building2 className="h-[22px] w-[22px] text-orange-600" />
        </div>
        <span className="text-[12px] font-medium text-zinc-500 uppercase">
          Received
        </span>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Seamless transactions",
    desc: "Experience fast, secure, and effortless payments with our gateway. Enjoy seamless transactions designed to simplify and elevate your business.",
    compo: (
      <Image
        className="object-contain rotate-45 h-full w-full scale-[1.5]"
        src="/images/CardFront.png"
        width={300}
        height={300}
        alt="as"
      />
    ),
  },
  {
    title: "Real-time tracking",
    desc: "Get real-time tracking on every transaction, ensuring complete transparency and control. Monitor payments seamlessly, anytime, anywhere.",
    compo: <Tracking />,
  },
  {
    title: "Global coverage",
    desc: "Access seamless payments with global coverage, connecting your business to customers worldwide. Expand effortlessly with reliable, cross-border transactions.",
    compo: (
      <Image
        src="/globe.png"
        width={300}
        height={200}
        alt=""
        className="object-contain mx-auto"
      />
    ),
  },
];

export default function FeaturesSection() {
  const { theme } = useTheme();

  return (
    <div id="features" className="container section">
      <h2 className="heading-2 text-center">AynaPay at a Glance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {features?.map((item, idx) => (
          <MagicCard
            key={idx}
            className={clsx("cursor-pointer shadow-2xl p-5 w-full", {
              "col-span-1 md:col-span-2 xl:col-span-1": idx === 2,
            })}
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="h-full flex flex-col items-center justify-between gap-8">
              <div>
                <h3 className="text-[20px] font-medium">{item.title}</h3>
                <p className="text-[14px] font-[300] pt-[8px]">{item.desc}</p>
              </div>

              <div className="relative max-h-[200px] overflow-hidden w-full">
                {item?.compo}
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}
