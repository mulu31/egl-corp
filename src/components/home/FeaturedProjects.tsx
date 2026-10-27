import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { PROJECTS } from "@/data/projects"; // FIXED IMPORT
import { PageContainer } from "@/components/PageContainer";

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <PageContainer>
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-teal-400 mb-2 border-b border-teal-400 inline-block pb-1">
              Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-4">
              Recent Highlights
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl">
              A look at the platforms and systems we've engineered for our
              clients.
            </p>
          </div>
          <Link
            to="/projects"
            className="focus-ring-orange bg-[#d4a373] text-slate-900 px-6 py-2.5 text-sm font-semibold hover:bg-[#c29262] transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(0, 3).map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="focus-ring-orange group flex flex-col bg-[#1e293b] border border-slate-800 overflow-hidden hover:border-slate-600 transition-colors"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#d4a373] text-slate-900 text-xs font-bold px-3 py-1">
                  {project.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 flex-1 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase font-medium bg-slate-800 text-slate-300 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto text-[#d4a373] font-medium text-sm flex items-center group-hover:text-[#c29262]">
                  Read Story <FiArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
