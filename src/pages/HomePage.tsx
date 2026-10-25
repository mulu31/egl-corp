import { Seo } from "../components/Seo";
import { Hero } from "../components/home/Hero";
import { StatsBand } from "../components/home/StatsBand";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { ServicesOverview } from "../components/home/ServicesOverview";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { TechStack } from "../components/home/TechStack";
import { FaqSection } from "../components/home/FaqSection";
import { LatestNews } from "../components/home/LatestNews";
import { FinalCta } from "../components/home/FinalCta";

export function HomePage() {
  return (
    <>
      <Seo
        title="Software Built for What's Next"
        description="EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow."
        path="/"
      />
      <Hero />
      <StatsBand />
      <WhyChooseUs />
      <ServicesOverview />
      <FeaturedProjects />
      <TechStack />
      {/* Testimonials omitted (no verified data) */}
      <FaqSection />
      <LatestNews />
      <FinalCta />
    </>
  );
}
