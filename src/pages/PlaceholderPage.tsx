import { Link } from "react-router";
import { Seo } from "@/components/Seo";
import { PageIntro } from "@/components/PageIntro";

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
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-2xl text-slate-600">
          This page is currently being prepared. Detailed content for this
          section will be published in a future update.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Contact us
        </Link>
      </section>
    </>
  );
}
