import { Seo } from "@/components/Seo";
import { PageContainer } from "@/components/PageContainer";
import { PROJECTS } from "@/data/projects";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";

export function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <Seo
        title="Our Projects"
        description="Explore the platforms, systems, and digital products engineered by EGL Corp."
        path="/projects"
      />

      <section className="bg-slate-950 py-24 text-white text-center">
        <PageContainer>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6">
            Engineering Excellence
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A selection of the platforms, internal tools, and digital products
            we have architected and built.
          </p>
        </PageContainer>
      </section>

      <section className="py-24">
        <PageContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="focus-ring-orange group flex flex-col bg-background border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase font-medium bg-muted text-muted-foreground px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto text-primary font-medium text-sm flex items-center group-hover:underline">
                    View Project <FiArrowRight className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
