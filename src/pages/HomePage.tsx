import { Seo } from "@/components/Seo";
import { AboutSection } from "@/components/home/AboutSection";
import { BlogHighlights } from "@/components/home/BlogHighlights";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { StatsCarousel } from "@/components/home/StatsCarousel";
import { TechOrbit } from "@/components/home/TechOrbit";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export function HomePage() {
  return (
    <>
      <Seo
        title="Software Built for What's Next"
        description="EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow."
        path="/"
      />
      <Hero />
      <AboutSection />
      <StatsCarousel />
      <ServicesShowcase />
      <WhyChooseUs />
      <TechOrbit />
      <FeaturedProjects />
      <BlogHighlights />
      <Testimonials />
      <FaqSection />
      <FinalCta />
    </>
  );
}
