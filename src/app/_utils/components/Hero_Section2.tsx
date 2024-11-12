"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Globe from "@/components/ui/globe";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection2() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 },
      }}
      className="container section"
    >
      <div className="flex-col min-[960px]:flex-row flex items-center justify-between">
        <div className="w-full flex flex-col items-center min-[960px]:items-start justify-center min-[960px]:text-left [&>*]:text-center min-[960px]:[&>*]:text-left">
          <h2 className="heading-1">
            Seamless <span className="text-primary">Payment Solutions</span> for
            Freelancers and Entrepreneurs
          </h2>
          <p className="text-[16px] xl:text-[18px] font-[300] pt-4 md:pt-6 pr-0 lg:pr-10">
            Empowering freelancers and entrepreneurs with fast, secure, and
            innovative payment solutions designed to simplify transactions and
            support business growth.
          </p>

          <div className="flex justify-start items-center mt-[32px] md:mt-[35px]">
            <Link target="_blank" href="https://t.me/AynaPayofficia">
              <Button className="rounded-full">
                <span>Talk on Telegram</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-full min-[600px]:max-w-[420px] min-[960px]:max-w-[400px] xl:max-w-[560px] ml-none min-[960px]:ml-auto relative">
          <Globe />
        </div>
      </div>
    </motion.div>
  );
}
