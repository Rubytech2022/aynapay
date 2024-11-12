import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTA_Section() {
  return (
    <section className="container section">
      <div className="flex flex-col items-center justify-center p-10 rounded-xl md:rounded-[40px] bg-primary [&>*]:text-white">
        <div className="[&>*]:text-center max-w-[600px] pb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p>
            Experience hassle-free payments tailored for freelancers and
            entrepreneurs. Simplify transactions, focus on growth.
          </p>
        </div>
        <Link href="https://t.me/AynaPayofficia">
          <Button className="rounded-full text-primary" variant="outline">Talk on Telegram</Button>
        </Link>
      </div>
    </section>
  );
}
