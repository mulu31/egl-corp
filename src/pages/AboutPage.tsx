import { PageContainer } from "@/components/PageContainer";
import { Seo } from "@/components/Seo";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCta } from "@/components/home/FinalCta";
import { StatsCarousel } from "@/components/home/StatsCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import {
  ABOUT_SERVICES,
  CORE_VALUES,
  HERO_SLIDES,
  JOURNEY_ITEMS,
  PROCESS_STEPS,
  TEAM_MEMBERS,
} from "@/data/aboutData";
import { useEffect, useState } from "react";
import { FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import {
  FiArrowRight,
  FiChevronRight,
  FiExternalLink,
  FiLinkedin,
  FiPackage,
  FiTool,
  FiTruck,
} from "react-icons/fi";
import { Link } from "react-router";

const PROCESS_ICONS = {
  box: FiPackage,
  tools: FiTool,
  truck: FiTruck,
};

export function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background">
      <Seo
        title="About Us"
        description="Learn about EGL Corp's mission, vision, and the team engineering digital solutions for businesses."
        path="/about"
      />

      {/* 1. Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-900 text-center">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt="EGL Corp Background"
              className="h-full w-full object-cover opacity-30"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-slate-950/50" />
        <PageContainer>
          <div className="relative z-10 mx-auto max-w-3xl py-20">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-orange-500">
              About EGL Corp
            </p>
            <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl mb-6">
              Engineering Ideas.
              <br />
              Empowering Progress.
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              We are a software engineering company dedicated to helping
              businesses and organizations build reliable digital products.
            </p>
            <Link
              to="/services"
              className="focus-ring-orange inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Discover Our Services <FiChevronRight className="ml-2" />
            </Link>
          </div>
        </PageContainer>
      </section>

      {/* 2. Background & Philosophy */}
      <section className="py-24 lg:py-32 overflow-hidden">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative z-10 lg:pr-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
                We Are EGL Corp
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  EGL Corp exists to bridge the gap between complex business
                  requirements and modern software engineering. We saw a need
                  for software that is not only functional but also
                  maintainable, scalable, and aligned with the actual workflows
                  of the people using it.
                </p>
                <p>
                  Rather than treating software as a one-off deliverable, we
                  approach it as an ongoing asset. We focus on understanding the
                  problem deeply before writing code, ensuring that the
                  resulting system solves the right issues and can adapt as your
                  organization grows.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] hidden sm:block w-full max-w-md mx-auto lg:ml-auto overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                  alt="EGL Corp Team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 hidden lg:block bg-background p-8 shadow-xl border border-border max-w-xs rounded-lg">
                <p className="font-serif text-2xl font-semibold text-foreground mb-2">
                  Our Philosophy
                </p>
                <p className="text-sm text-muted-foreground">
                  Build it right the first time, ensuring it scales for the
                  future.
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 3. Services (Zigzag) */}
      <section className="py-24 bg-muted/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-2">
              What We Do
            </p>
            <h2 className="font-serif text-4xl font-semibold text-foreground">
              Tailored Solutions
            </h2>
          </div>
          <div className="space-y-16 lg:space-y-0">
            {ABOUT_SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} lg:min-h-[400px] border-b border-border last:border-0`}
                >
                  <div className="w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 bg-background p-8 lg:p-16 flex flex-col justify-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
                      Our Service
                    </p>
                    <h3 className="font-serif text-3xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <Link
                      to="/services"
                      className="focus-ring-orange inline-flex w-fit items-center text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      Read More <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* 4. Mission, Vision & Core Values (Timeline) */}
      <section className="py-24 bg-[#0f172a] text-white">
        <PageContainer>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold">
              Our Mission & Vision
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 hidden md:block" />
            <div className="md:w-1/2 md:text-right md:pr-12">
              <h3 className="text-xl font-bold text-orange-500 mb-4">
                OUR MISSION
              </h3>
              <p className="text-slate-300 leading-relaxed">
                To engineer digital solutions and software products that help
                businesses solve problems, work smarter, and grow. We achieve
                this through rigorous engineering and a commitment to
                understanding our clients' needs.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h3 className="text-xl font-bold text-teal-400 mb-4">
                OUR VISION
              </h3>
              <p className="text-slate-300 leading-relaxed">
                A future where businesses of all sizes can leverage reliable,
                well-engineered technology to overcome operational friction,
                improve customer experiences, and unlock new opportunities for
                progress.
              </p>
            </div>
          </div>

          {/* Core Values Timeline */}
          <div className="max-w-3xl mx-auto mt-16">
            <h3 className="text-center text-2xl font-serif font-semibold mb-12">
              Our Core Values
            </h3>
            <div className="relative border-l border-slate-700 ml-4 md:ml-0 md:border-l-0">
              {/* Desktop central line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-700 hidden md:block" />

              {CORE_VALUES.map((val, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`relative mb-10 md:flex md:items-center md:justify-between ${isEven ? "md:flex-row-reverse" : ""}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-[-5px] top-2 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 h-3 w-3 rounded-full bg-teal-400 ring-4 ring-slate-900 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-6 md:ml-0 md:w-[45%] ${isEven ? "md:text-left" : "md:text-right"}`}
                    >
                      <div
                        className={`bg-slate-800/50 p-6 rounded-lg border border-slate-700 ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
                      >
                        <div
                          className={`flex items-center gap-3 mb-2 ${isEven ? "md:justify-start" : "md:justify-end"}`}
                        >
                          <val.icon className="text-teal-400" size={20} />
                          <h4 className="font-semibold text-white">
                            {val.title}
                          </h4>
                        </div>
                        <p className="text-sm text-slate-400">{val.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 5. Statistics (Reused) */}
      <StatsCarousel />

      {/* 6. Team Section */}
      <section className="py-24 bg-background">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
              Our Experts
            </p>
            <h2 className="font-serif text-4xl font-semibold text-foreground">
              Team Members
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col items-center bg-muted/30 border border-border p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-48 w-48 rounded-full overflow-hidden mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-orange-500 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {member.bio}
                </p>

                {/* Circled Social Icons */}
                <div className="flex gap-3">
                  <a
                    href={member.socials.linkedin}
                    aria-label="LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-colors focus-ring-orange"
                  >
                    <FiLinkedin size={14} />
                  </a>
                  <a
                    href={member.socials.x}
                    aria-label="X"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-black hover:text-white transition-colors focus-ring-orange"
                  >
                    <FaXTwitter size={14} />
                  </a>
                  <a
                    href={member.socials.reddit}
                    aria-label="Reddit"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-[#FF4500] hover:text-white transition-colors focus-ring-orange"
                  >
                    <FaRedditAlien size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 7. Process Section (Wavy Line & Alternating Layout) */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-2 border border-orange-500 rounded-full px-4 py-1 inline-block">
              How It Works
            </p>
            <h2 className="font-serif text-4xl font-semibold text-foreground mt-4">
              Our simple process
            </h2>
            <p className="mt-4 text-muted-foreground">
              No complicated process, no surprises. Here is exactly what happens
              when you contact us.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* SVG Curve for Desktop (Replicating the screenshot) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none -mt-12">
              <svg viewBox="0 0 1000 300" fill="none" className="w-full h-full">
                <path
                  d="M 50 150 Q 200 50 350 150 T 650 150 T 950 150"
                  stroke="#F97316"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
              {PROCESS_STEPS.map((step, index) => {
                const Icon =
                  PROCESS_ICONS[step.icon as keyof typeof PROCESS_ICONS];
                // Alternating margin to align with the wavy line
                const yOffset = index === 1 ? "lg:mt-24" : "lg:mt-0";

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center text-center ${yOffset}`}
                  >
                    {/* Huge Background Number */}
                    <span className="absolute -top-8 text-8xl font-serif font-bold text-muted/50 select-none -z-10">
                      {index + 1}
                    </span>

                    {/* Floating Icon Box */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-xl border border-border text-orange-500 mb-8 z-10">
                      <Icon size={32} />
                    </div>

                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 8. Reused Sections */}
      <FeaturedProjects />
      <Testimonials />

      {/* 9. Follow Our Journey (Video Backgrounds) */}
      <section className="py-24 bg-slate-950 text-white">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-medium uppercase tracking-wider text-[#d4a373] mb-4">
              Follow The Journey
            </p>
            <h2 className="font-serif text-4xl font-semibold mb-4">
              Stay Connected
            </h2>
            <p className="text-slate-400">
              Discover events, community activities and local stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JOURNEY_ITEMS.map((item) => (
              <a
                key={item.platform}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden rounded-xl bg-slate-900 border border-slate-800 focus-ring-orange block"
              >
                {/* Background Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={item.poster}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                >
                  <source src={item.video} type="video/mp4" />
                </video>

                {/* Overlay - Always visible on mobile, hover on desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                  <div
                    className={`transition-all duration-300 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:group-focus:opacity-100 lg:group-focus:translate-y-0`}
                  >
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg mb-4 ${item.color}`}
                    >
                      <item.icon size={20} />
                    </div>
                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      {item.platform} • {item.followers}
                    </p>
                    <h3 className="text-lg font-serif font-semibold text-white mb-2">
                      {item.text}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">{item.desc}</p>
                    <div className="flex items-center text-sm font-medium text-white">
                      Learn More <FiExternalLink className="ml-2" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 10. Final CTA (Reused) */}
      <FinalCta />
    </div>
  );
}
