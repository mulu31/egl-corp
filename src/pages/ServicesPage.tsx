import { PageContainer } from "@/components/PageContainer";
import { Seo } from "@/components/Seo";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCta } from "@/components/home/FinalCta";
import { useEffect, useState } from "react";
// FIXED IMPORT
import { ENGAGEMENT_STEPS, SERVICE_FAQS, SERVICES } from "@/data/services";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router";

const HERO_SLIDES = SERVICES.map((s) => s.image);

export function ServicesPage() {
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
        title="Services"
        description="EGL Corp engineers digital solutions, custom software, mobile apps, and business systems tailored to your operational needs."
        path="/services"
      />

      {/* ... Hero ... */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-slate-900 text-center">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide}
              alt="Services Background"
              className="h-full w-full object-cover opacity-30"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-slate-950/60" />
        <PageContainer>
          <div className="relative z-10 mx-auto max-w-3xl py-20">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-orange-500">
              Our Services
            </p>
            <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl mb-6">
              Technology That Moves
              <br />
              Your Business Forward.
            </h1>
            <p className="text-lg text-slate-300 mb-8">
              We help businesses and organizations build digital experiences,
              business software, mobile applications, and connected workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="focus-ring-orange rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Discuss a Project
              </Link>
              <a
                href="#core-services"
                className="focus-ring-orange rounded-md border border-slate-600 bg-slate-800/50 px-8 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ... Services Zigzag ... */}
      <section id="core-services" className="py-24">
        <PageContainer>
          <div className="space-y-0">
            {SERVICES.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[500px] border-b border-border last:border-0`}
                >
                  <div className="w-full lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 bg-[#FAF6F0] dark:bg-muted p-8 lg:p-16 flex flex-col justify-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      Our Service
                    </p>
                    <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-medium text-foreground mb-3 text-sm uppercase tracking-wider">
                          Deliverables
                        </h3>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <FiCheck className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-3 text-sm uppercase tracking-wider">
                          Ideal For
                        </h3>
                        <ul className="space-y-2">
                          {service.idealFor.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-orange-500 mt-0.5 shrink-0 font-bold">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Link
                        to="/contact"
                        className="focus-ring-orange inline-flex items-center bg-[#C2832D] hover:bg-[#A36D24] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 transition-colors"
                      >
                        Inquire About This
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </PageContainer>
      </section>

      {/* ... Process ... */}
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
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute inset-0 hidden lg:block pointer-events-none -mt-12">
              <svg viewBox="0 0 1200 300" fill="none" className="w-full h-full">
                <path
                  d="M 50 150 Q 200 50 350 150 T 650 150 T 950 150 T 1150 150"
                  stroke="#C2832D"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border lg:hidden -translate-x-1/2" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {ENGAGEMENT_STEPS.map((step, index) => {
                const Icon = step.icon;
                const desktopOffset =
                  index === 0
                    ? "lg:mt-0"
                    : index === 1
                      ? "lg:mt-24"
                      : index === 2
                        ? "lg:mt-0"
                        : "lg:mt-24";
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center text-center ${desktopOffset}`}
                  >
                    <span className="absolute -top-8 text-8xl font-serif font-bold text-muted-foreground/10 select-none -z-10">
                      {index + 1}
                    </span>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-background shadow-xl border border-border text-[#C2832D] mb-8 z-10">
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

      <FeaturedProjects />

      {/* ... FAQ ... */}
      <FaqSection
        faqs={SERVICE_FAQS}
        title="Service Questions"
        subtitle="Common inquiries about how we scope and deliver our software services."
      />

      <FinalCta />
    </div>
  );
}
