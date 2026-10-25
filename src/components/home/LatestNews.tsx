import { Link } from "react-router";
import { PageContainer } from "../PageContainer";

export function LatestNews() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 sm:py-24">
      <PageContainer>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Latest updates
            </h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Insights, technical notes, and company announcements.
            </p>
          </div>
          <Link
            to="/blogs"
            className="text-sm font-medium text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Visit Blogs & Events &rarr;
          </Link>
        </div>

        {/* Empty State — MDX Content Pipeline to be implemented in a later phase */}
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-background p-12 text-center">
          <p className="text-muted-foreground">
            No published articles or events yet.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Check back soon for engineering insights and company updates.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
