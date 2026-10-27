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
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EGL Corp",
    url: "https://REPLACE-BEFORE-LAUNCH.example",
    logo: "https://REPLACE-BEFORE-LAUNCH.example/logo.png",
    description:
      "EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+251-911-391-625",
      contactType: "customer service",
      areaServed: "ET",
      availableLanguage: ["English", "Amharic"],
    },
  };

  return (
    <>
      <Seo
        title="Software Built for What's Next"
        description="EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow."
        path="/"
        jsonLd={orgSchema}
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
