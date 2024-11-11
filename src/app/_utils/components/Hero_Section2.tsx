"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Globe from "@/components/ui/globe";
import { motion } from "framer-motion";

export default function HeroSection2() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className="container py-[60px] min-[960px]:py-[96px] pt-[120px]"
    >
      <div className="flex-col min-[960px]:flex-row flex items-center justify-between">
        <div className="w-full flex flex-col items-center min-[960px]:items-start justify-center [&>*]:text-center">
          <h2 className="heading-1">
            Seamless Payment Solutions for Freelancers and Entrepreneurs
          </h2>
          <p className="text-[16px] xl:text-[18px] font-[300] pt-4 md:pt-6 pr-0 lg:pr-10">
            Empowering freelancers and entrepreneurs with fast, secure, and
            innovative payment solutions designed to simplify transactions and
            support business growth.
          </p>

          <div className="flex justify-start items-center mt-[32px] md:mt-[35px]">
            <Link
              target="_blank"
              href="https://t.me/AynaPayofficia"
              className="text-[16px] whitespace-nowrap px-5 py-2 h-10 rounded-full flex items-center justify-center transition-all duration-500  dark:text-white hover:bg-opacity-60 bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary text-white"
            >
              <span>Talk on Telegram</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
        <div className="w-full max-w-full min-[600px]:max-w-[420px] min-[960px]:max-w-[400px] xl:max-w-[560px] border ml-none min-[960px]:ml-auto relative">
          <Globe />
        </div>
      </div>
    </motion.div>
  );
}
