import { Link } from "react-router";
import { Seo } from "@/components/Seo";

export function HomePage() {
  return (
    <>
      <Seo
        title="Software Built for What's Next"
        description="EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow."
        path="/"
      />
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-600">
          Engineering Ideas. Empowering Progress.
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          Software Built for What&apos;s Next.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          EGL Corp designs and engineers software that helps businesses and
          organizations solve real problems and grow.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="rounded-md bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Start a project
          </Link>
          <Link
            to="/services"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Explore services
          </Link>
        </div>
      </section>
    </>
  );
}
