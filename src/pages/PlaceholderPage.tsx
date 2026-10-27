import { Link } from "react-router";
import { Seo } from "@/components/Seo";
import { PageIntro } from "@/components/PageIntro";
import { PageContainer } from "@/components/PageContainer";

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
      <Seo title={title} description={description} path={path} noIndex />
      <PageIntro title={title} description={description} eyebrow={eyebrow} />
      <section className="py-12">
        <PageContainer>
          <div className="bg-muted/30 border border-border p-8 rounded-lg max-w-2xl">
            <h2 className="font-serif text-xl font-semibold mb-3">
              Work in Progress
            </h2>
            <p className="text-muted-foreground mb-6">
              This page is currently being prepared. Detailed content for this
              section will be published in a future update. Thank you for your
              patience.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-ring-orange transition-colors"
            >
              Contact us for more info
            </Link>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
