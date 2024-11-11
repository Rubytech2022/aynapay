'use client'
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Globe from "@/components/ui/globe";
import { motion } from "framer-motion";

export default function HeroSection2() {
    return (
        <motion.div initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 }
        }} className="w-full mb-[0px] lg:px-0 px-5 bg-transparent ">

            <div className=" relative md:flex-row flex-col flex flex-start justify-between  overflow-hidden bg-background py-[100px] md:py-[180px] container ">

                <div className="w-full md:w-[55%] ">
                    <h2 className="text-[38px] md:text-[58px] font-medium leading-[44px] md:leading-[68px]  bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent whitespace-pre-wrap  lg:text-[56px]  tracking-tighter text-black dark:text-white  lg:leading-[60px]">Seamless Payment Solutions for Freelancers and Entrepreneurs</h2>
                    <p className="text-[16px] xl:text-[18px] font-[300] pt-4 md:pt-6 pr-0 lg:pr-10">Empowering freelancers and entrepreneurs with fast, secure, and innovative payment solutions designed to simplify transactions and support business growth.</p>
                    
                    <div className="flex justify-start items-center mt-[32px] md:mt-[35px]">
                        {/* <Button className="bg-primary dark:bg-primary dark:text-white mt-[40px] hover:bg-primary tracking-tight text-base xl:text-[22px]  w-full md:w-[245px] h-[48px] md:h-[58px]">Get Started</Button> */}
                        <Link target="_blank" href="https://t.me/AynaPayofficia" className="text-[16px] whitespace-nowrap px-5 py-2 h-10 rounded-full flex items-center justify-center transition-all duration-500  dark:text-white hover:bg-opacity-60 bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary text-white">
                            <span>
                            Talk on Telegram</span>
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-[45%]  flex justify-center md:justify-end relative  pt-10 md:pt-0 mb-[300px] md:mb-0 ">
                    <Globe className="top-[100%] md:-top-[35%] right-0 " />
                </div>
            </div>
        </motion.div>
    )



}

