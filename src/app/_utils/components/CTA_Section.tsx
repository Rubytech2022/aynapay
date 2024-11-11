import Link from "next/link";

export default function CTA_Section() {
    return (
        <section className="py-[40px] md:my-[80px] lg:my-[120px]">
            <div className="mx-auto flex  w-full md:w-[1200px] flex-col items-center justify-center gap-y-5 rounded-2xl border border-slate-500/20  p-10 shadow-inner dark:bg-neutral-900 bg-neutral-50">
                <h3 className="mx-auto max-w-2xl text-balance text-center text-2xl font-bold text-neutral-800 dark:text-white md:text-3xl lg:text-4xl">Ready to Get Started?</h3>
                <p className="mx-auto text-balance text-center md:text-lg">Experience hassle-free payments tailored for freelancers and entrepreneurs. Simplify transactions, focus on growth.</p>
                <Link href="/" className="shadow-small flex h-10 w-48 items-center justify-center gap-2.5 rounded-full border border-neutral-300/30 bg-neutral-900 font-medium text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.9)] transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:scale-95 active:shadow-none bg-primary">Contact Us</Link>
            </div>
        </section>
    )
}
