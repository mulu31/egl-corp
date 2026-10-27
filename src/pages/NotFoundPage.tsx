import { Link } from "react-router";
import { Seo } from "@/components/Seo";
import { PageContainer } from "@/components/PageContainer";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background">
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        path="/404"
        noIndex
      />
      <PageContainer>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-4">
            404 Error
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-semibold text-foreground mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="focus-ring-orange inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              <FiArrowLeft className="mr-2" /> Back to Home
            </Link>
            <Link
              to="/services"
              className="focus-ring-orange inline-flex items-center justify-center rounded-md border border-border bg-background px-8 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors w-full sm:w-auto"
            >
              <FiSearch className="mr-2" /> Explore Services
            </Link>
          </div>
        </div>
      </PageContainer>
    </div>
  );
}
