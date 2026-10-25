import { Link } from "react-router";
import { PageContainer } from "../PageContainer";

export function FinalCta() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to build what's next?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let's discuss your project, your constraints, and how we can
            engineer a solution that moves your business forward.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/contact"
              className="rounded-md bg-background px-8 py-3 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
