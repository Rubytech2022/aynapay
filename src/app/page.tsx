import ClientSection from "./_utils/components/Client_Section";
import { MarqueeReviewSection } from "./_utils/components/Review_Section";
import CTA_Section from "./_utils/components/CTA_Section";
import HeroSection2 from "./_utils/components/Hero_Section2";
import FeaturesSection from "./_utils/components/Features_Section";
import WatchInAction from "./_utils/components/WatchInAction";
import HowSection from "./_utils/components/How_Section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-0 lg:p-[70px] ">
      <HeroSection2 />
      <ClientSection />
      <FeaturesSection />
      <HowSection/>
      <WatchInAction />
      <MarqueeReviewSection />
      <CTA_Section />
    </main>
  );
}
