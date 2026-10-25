import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { PageContainer } from "../components/PageContainer";

export function HomePage() {
  return (
    <>
      <Seo
        title="Software Built for What's Next"
        description="EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow."
        path="/"
      />
      <section className="py-24">
        <PageContainer>
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Engineering Ideas. Empowering Progress.
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Software Built for What&apos;s Next.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            EGL Corp designs and engineers software that helps businesses and
            organizations solve real problems and grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Start a project
            </Link>
            <Link
              to="/services"
              className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Explore services
            </Link>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
