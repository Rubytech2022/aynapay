import ClientSection from "./_utils/components/Client_Section";
import { MarqueeReviewSection } from "./_utils/components/Review_Section";
import CTA_Section from "./_utils/components/CTA_Section";
import HeroSection2 from "./_utils/components/Hero_Section2";
import FeaturesSection from "./_utils/components/Features_Section";
import HowSection from "./_utils/components/How_Section";
import ContactUs from "./_utils/components/Contact__Us";

export default function Home() {
  return (
    <main>
      <HeroSection2 />
      <ClientSection />
      <FeaturesSection />
      <HowSection/>
      <MarqueeReviewSection />
      <ContactUs />
      <CTA_Section />
    </main>
  );
}
