import Globe from "@/components/ui/globe";

export default function WatchInAction(){
    return(
        <div className="my-[80px] lg:my-[120px] ">
            <h2 className="px-5 lg:px-0 text-[28px] md:text-[36px] pb-[40px] font-medium bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">Accept Payments. Grow Fast.</h2>

            <div className=" relative pt-5 h-[400px]">
                <Globe />
            </div>

        </div>
    )
}