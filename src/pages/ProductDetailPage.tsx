import { useParams } from "react-router";
import { PlaceholderPage } from "./PlaceholderPage";

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <PlaceholderPage
      title="Product details"
      description={`Detailed information for this product will be available soon.`}
      path={`/products/${slug ?? ""}`}
      eyebrow="Products"
    />
  );
}
