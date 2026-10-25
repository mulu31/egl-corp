import { Link } from "react-router";
import { Seo } from "../components/Seo";
import { PageIntro } from "../components/PageIntro";

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
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          Return to homepage
        </Link>
      </section>
    </>
  );
}
