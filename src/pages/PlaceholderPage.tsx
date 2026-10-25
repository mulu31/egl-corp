import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { PageIntro } from "../components/PageIntro";
import { PageContainer } from "../components/PageContainer";

export interface PlaceholderPageProps {
  title: string;
  description: string;
  path: string;
  eyebrow?: string;
}

export function PlaceholderPage({
  title,
  description,
  path,
  eyebrow,
}: PlaceholderPageProps) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <PageIntro title={title} description={description} eyebrow={eyebrow} />
      <section className="py-12">
        <PageContainer>
          <p className="max-w-2xl text-muted-foreground">
            This page is currently being prepared. Detailed content for this
            section will be published in a future update.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Contact us
          </Link>
        </PageContainer>
      </section>
    </>
  );
}
