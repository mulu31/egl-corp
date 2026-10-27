import { PageContainer } from "@/components/PageContainer";
import { Seo } from "@/components/Seo";
import { PROJECTS } from "@/data/projects";
import {
  FiAlertTriangle,
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiDatabase,
  FiExternalLink,
  FiGithub,
  FiLayout,
  FiMap,
  FiTrendingUp,
} from "react-icons/fi";
import { Link, useParams } from "react-router";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-background">
        <h1 className="font-serif text-3xl font-semibold mb-4">
          Project Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The project you are looking for does not exist.
        </p>
        <Link
          to="/projects"
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
        >
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const prevProject = PROJECTS[projectIndex - 1];
  const nextProject = PROJECTS[projectIndex + 1];

  return (
    <div className="bg-background min-h-screen">
      <Seo
        title={project.title}
        description={project.tagline}
        path={`/projects/${project.slug}`}
        type="article"
        image={project.image}
      />

      {/* 1. Hero / Overview Section */}
      <section className="pt-24 pb-16">
        <PageContainer>
          <Link
            to="/projects"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-xs uppercase font-bold text-orange-500 mb-4 block">
                {project.category}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring-orange inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring-orange inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    <FiGithub className="mr-2" /> Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>

          {/* Quick Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Role
              </p>
              <p className="font-medium text-foreground">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Timeline
              </p>
              <p className="font-medium text-foreground">{project.timeline}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Status
              </p>
              <p className="font-medium text-foreground">{project.status}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-medium bg-muted px-2 py-0.5 rounded-sm text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 2. Problem Statement & Background */}
      <section className="py-24 bg-muted/30">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-10 text-center">
              The Problem & The Goal
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-8 border border-border rounded-xl">
                <FiAlertTriangle className="text-orange-500 mb-4" size={24} />
                <h3 className="font-serif text-xl font-semibold mb-3">
                  The Challenge
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.problem.challenge}
                </p>
              </div>
              <div className="bg-background p-8 border border-border rounded-xl">
                <FiLayout className="text-teal-500 mb-4" size={24} />
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Target Audience
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.problem.audience}
                </p>
              </div>
              <div className="bg-background p-8 border border-border rounded-xl">
                <FiTrendingUp className="text-blue-500 mb-4" size={24} />
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Core Goal
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.problem.goal}
                </p>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 3. Key Features & Highlights */}
      <section className="py-24">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-10 text-center">
              Key Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 bg-muted/20 border border-border rounded-lg"
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-600">
                    <FiCheck size={14} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 8. Screenshots (Gallery) */}
      <section className="pb-24">
        <PageContainer>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-10 text-center">
              Application Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden border border-border shadow-sm ${i === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 4. Technical Architecture */}
      <section className="py-24 bg-[#0f172a] text-white">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold mb-10 text-center text-white">
              Technical Architecture
            </h2>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FiLayout className="text-teal-400" size={24} />
                  <h3 className="font-serif text-2xl font-semibold">
                    System Overview
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {project.architecture.overview}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FiDatabase className="text-teal-400" size={24} />
                  <h3 className="font-serif text-2xl font-semibold">
                    Database Design
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {project.architecture.database}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6 border-t border-slate-800 pt-8">
                Key Challenges & Solutions
              </h3>
              <div className="space-y-6">
                {project.architecture.challenges.map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/50 p-6 rounded-lg border border-slate-800"
                  >
                    <p className="text-orange-400 font-medium mb-2">
                      Challenge: {item.challenge}
                    </p>
                    <p className="text-slate-300">
                      <span className="text-teal-400 font-medium">
                        Solution:
                      </span>{" "}
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 5. Results & Impact */}
      <section className="py-24">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-10 text-center">
              Results & Impact
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {project.results.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="text-center p-8 bg-muted/30 border border-border rounded-xl"
                >
                  <p className="font-serif text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-muted/20 p-8 rounded-xl border border-border">
              <h3 className="font-serif text-xl font-semibold mb-4">
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {project.results.takeaways.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 6. Next Steps */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FiMap className="text-orange-500" size={28} />
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Next Steps / Roadmap
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.nextSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-background p-6 border border-border rounded-lg flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 font-bold">
                    {i + 1}
                  </div>
                  <p className="text-sm font-medium text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 7. Footer / Navigation */}
      <section className="py-16 border-t border-border">
        <PageContainer>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.slug}`}
                className="focus-ring-orange flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                  <FiArrowLeft size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                    Previous Project
                  </p>
                  <p className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextProject ? (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="focus-ring-orange flex items-center gap-4 group text-right"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                    Next Project
                  </p>
                  <p className="font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                  <FiArrowRight size={20} />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="focus-ring-orange inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Start a Project Like This
            </Link>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
