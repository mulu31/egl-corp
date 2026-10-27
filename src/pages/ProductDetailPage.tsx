import { PageContainer } from "@/components/PageContainer";
import { Seo } from "@/components/Seo";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useParams } from "react-router";

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="bg-background min-h-[70vh] flex items-center justify-center">
      <Seo
        title="Product Details"
        description="Product details coming soon."
        path={`/products/${slug || ""}`}
        noIndex
      />
      <PageContainer>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-orange-500 mb-4">
            Product
          </p>
          <h1 className="font-serif text-4xl font-semibold mb-6">
            Product Details Coming Soon
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            We are currently documenting our software products. The details for
            this specific product ({slug}) will be available in a future update.
          </p>
          <Link
            to="/"
            className="focus-ring-orange inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Home
          </Link>
        </div>
      </PageContainer>
    </div>
  );
}
