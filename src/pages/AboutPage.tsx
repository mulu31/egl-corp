import { Seo } from "@/components/Seo";
import { PageContainer } from "@/components/PageContainer";
import { SectionSeparator } from "@/components/SectionSeparator";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCta } from "@/components/home/FinalCta";
import { CORE_VALUES, TEAM_MEMBERS, PROCESS_STEPS } from "@/data/aboutData";
import { Link } from "react-router";
import { FiArrowRight, FiUser } from "react-icons/fi";

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about EGL Corp's mission, vision, and the team engineering digital solutions for businesses."
        path="/about"
      />

      {/* 1. Hero Section */}
      <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
        <PageContainer>
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-4">
              About EGL Corp
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Engineering Ideas.
              <br />
              <span className="text-teal-400">Empowering Progress.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              We are a software engineering company dedicated to helping
              businesses and organizations build reliable digital products. We
              combine technical expertise with a deep understanding of
              real-world operational challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="focus-ring-orange rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Start a Project
              </Link>
              <Link
                to="/services"
                className="focus-ring-orange rounded-md border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 2. Background & Philosophy */}
      <section className="py-24 bg-background">
        <PageContainer>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Our Background
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
            <div className="bg-muted p-8 rounded-lg border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                What We Bring
              </h3>
              <ul className="space-y-4">
                {[
                  "Understanding requirements before implementation.",
                  "Building usable and maintainable software systems.",
                  "Choosing technologies based on project needs.",
                  "Integrating systems and automating repetitive workflows.",
                  "Considering accessibility, performance, and security.",
                  "Providing testing, deployment, and ongoing maintenance.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-600 dark:text-teal-400 text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      <SectionSeparator />

      {/* 3. Mission & Vision */}
      <section className="py-24 bg-muted/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-muted-foreground">
              The core direction that drives our work and decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-background p-8 border border-border rounded-lg">
              <div className="h-12 w-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                <FiTarget size={24} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To engineer digital solutions and software products that help
                businesses solve problems, work smarter, and grow. We achieve
                this through rigorous engineering and a commitment to
                understanding our clients' needs.
              </p>
            </div>
            <div className="bg-background p-8 border border-border rounded-lg">
              <div className="h-12 w-12 rounded-lg bg-teal-500/10 text-teal-500 flex items-center justify-center mb-6">
                <FiEye size={24} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where businesses of all sizes can leverage reliable,
                well-engineered technology to overcome operational friction,
                improve customer experiences, and unlock new opportunities for
                progress.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-background p-6 border border-border rounded-lg"
              >
                <div className="mb-4 text-orange-500">
                  <value.icon size={24} />
                </div>
                <h4 className="font-medium text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 4. Statistics (Graceful Handling) */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <PageContainer>
          <h2 className="font-serif text-3xl font-semibold mb-6">
            Our Commitment
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            While we are actively growing and delivering results, we prioritize
            transparency. We choose not to display unverified numerical claims.
            Our focus is on the quality of our engineering, the reliability of
            our systems, and the long-term success of our clients.
          </p>
          {/*
            This section is intentionally designed to be non-numeric
            as per the strict anti-hallucination rules. If verified stats
            become available, a standard grid can be rendered here.
          */}
        </PageContainer>
      </section>

      {/* 5. Team */}
      <section className="py-24 bg-background">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Meet the Founders
            </h2>
            <p className="text-muted-foreground">The people behind EGL Corp.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-muted border border-border mb-4 text-muted-foreground">
                  <FiUser size={48} strokeWidth={1} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-orange-500 mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Full profile coming soon.
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 6. Process */}
      <section className="py-24 bg-muted/30">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground">
              How we take projects from initial concept to deployed reality.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Line */}
                {index !== PROCESS_STEPS.length - 1 && (
                  <div
                    className="absolute left-6 top-14 bottom-0 w-px bg-border"
                    aria-hidden="true"
                  />
                )}
                {/* Number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background border-2 border-primary text-primary font-bold">
                  {index + 1}
                </div>
                <div className="pt-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* 7. Reused Sections */}
      <FeaturedProjects />
      <Testimonials />

      {/* 8. Follow Our Journey */}
      <section className="py-24 bg-background border-t border-border">
        <PageContainer>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
              Follow Our Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              We are preparing to share more insights, technical articles, and
              behind-the-scenes updates. Connect with us on our social channels
              as we build.
            </p>
            {/* Empty state since no real social links are provided */}
            <div className="inline-flex items-center justify-center rounded-lg border border-dashed border-border bg-muted/50 p-8 w-full max-w-md mx-auto">
              <p className="text-sm text-muted-foreground">
                Social links and updates will be published here soon.
              </p>
            </div>
          </div>
        </PageContainer>
      </section>

      <FinalCta />
    </>
  );
}
