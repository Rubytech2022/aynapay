"use client";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const data = [
    {
        url: "/images/bkash logo .png"
    },
    {
        url: "/images/easypaisa .png"
    },
    {
        url: "/images/google pay .png"
    },
    {
        url: "/images/Jazz Cash.png"
    },
    {
        url: "/images/Nagad logo .png"
    },
    {
        url: "/images/Nagad pay .png"
    },
    {
        url: "/images/paytm logo .png"
    },
    {
        url: "/images/phonepe logo.png"
    },
    {
        url: "/images/upay logo .png"
    },
];


export default function ClientSection() {
    return (
        <section className="container section-bottom">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background">
                <Marquee pauseOnHover className="[--duration:20s] ">
                    {data?.map((item, idx) => (
                        <div className="" key={idx}>
                            <Image className="h-[48px] w-auto px-2 " src={item?.url} alt="client" width={100} height={80} />
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    );
}
