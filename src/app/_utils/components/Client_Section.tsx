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
        <section className=" client_section mt-[80px] md:mt-[0px] mb-[60px] lg:mt-[80px] lg:mb-[80px] max-w-full lg:max-w-[1200px] px-5 lg:px-0">
            {/* <h3 className="text-center text-sm font-semibold text-gray-600 pb-[30px] px-10 md:px-0">
                {" "}
                TRUSTED BY TEAMS FROM AROUND THE WORLD
            </h3> */}
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  bg-background">
                <Marquee pauseOnHover className="[--duration:20s] ">
                    {data?.map((item, idx) => (
                        <div className="" key={idx}>
                            <Image className="h-[40px] w-28 px-2 " src={item?.url} alt="client" width={100} height={80} />
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </section>
    );
}
