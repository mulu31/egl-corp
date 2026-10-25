import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { PageIntro } from "../components/PageIntro";
import { PageContainer } from "../components/PageContainer";

export function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you are looking for could not be found."
        path="/404"
        noIndex
      />
      <PageIntro
        title="Page not found"
        description="The page you requested does not exist or has been moved."
        eyebrow="404"
      />
      <section className="py-12">
        <PageContainer>
          <Link
            to="/"
            className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Return to homepage
          </Link>
        </PageContainer>
      </section>
    </>
  );
}
