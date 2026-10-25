import { Link } from "react-router";
import { FEATURED_PROJECTS } from "../../data/projects";
import { PageContainer } from "../PageContainer";

export function FeaturedProjects() {
  return (
    <section className="py-20 sm:py-24">
      <PageContainer>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              A look at the systems, tools, and platforms we engineer.
            </p>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            View all projects &rarr;
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {/* Image Cover */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-muted relative">
                <img
                  src={project.imageUrl}
                  alt={`Cover image for ${project.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-primary">
                  {project.category} • {project.type}
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
