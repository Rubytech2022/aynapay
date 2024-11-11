'use client'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import Globe from "@/components/ui/globe";

export default function HeroSection() {
    return (
        <section className="w-full mb-[0px] ">
            <div className="h-screen relative flex w-full items-center justify-center overflow-hidden bg-background px-5 lg:px-20 pt-[120px] lg:pt-20">
                <div className="z-10 ">
                    <div className="max-w-full lg:max-w-[750px] m-auto">
                        {/* <div className=" flex items-center justify-center pb-5">
                            <ShimmerButton className="shadow-2xl px-[10px] py-[8px]">
                                <span className="whitespace-pre-wrap text-center text-[12px] lg:text-sm font-medium leading-none tracking-tight text-white/80 dark:from-white dark:to-slate-900/10">
                                    ✨ Introducing Saas Template
                                </span>
                            </ShimmerButton>
                        </div> */}
                        <h2 className=" bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text text-transparent whitespace-pre-wrap text-center text-[32px] md:text-[42px] lg:text-[56px] font-medium tracking-tighter text-black dark:text-white leading-[42px] md:leading-[48px] lg:leading-[60px]">
                            Simplify Your Payments with AynaPay
                        </h2>
                        <div className="mt-[35px] ">
                            <p className="block px-0 lg:px-16 text-center translate-y-[-1rem] animate-fade-in tracking-tight text-[13px] md:text-[14px] lg:text-base dark:text-white/60 text-gray-600 font-medium">
                                Empowering freelancers and entrepreneurs with fast, secure, and innovative payment solutions designed to simplify transactions and support business growth.
                            </p>
                        </div>

                        <div className="flex justify-center items-center mt-[32px] md:mt-[35px]">
                            {/* <Button className="  transition-all duration-500 dark:bg-white dark:text-primary hover:bg-primary mr-[15px]">
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button> */}
                            <Link target="_blank" href="https://t.me/AynaPayofficia" className="whitespace-nowrap px-4 py-2 h-10 rounded-full flex items-center justify-center transition-all duration-500  dark:text-white hover:bg-opacity-60 bg-primary hover:text-white dark:hover:bg-white dark:hover:text-primary text-white">
                                <span>
                                    Talk on Telegram</span>
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </div>
                    </div>
                    {/* <div className="py-[250px] relative" >
                        <Globe className="top-[6%]" />
                    </div> */}
       
                    
                </div>
                <Globe className="top-[6%]" />
                <AnimatedGridPattern
                    numSquares={100}
                    maxOpacity={0.1}
                    duration={3}
                    repeatDelay={1}
                    className={cn(
                        "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-60%] h-[200%] skew-y-12",
                    )}
                />
            </div>
        </section>
    )
}