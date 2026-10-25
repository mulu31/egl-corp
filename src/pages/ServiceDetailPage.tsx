import { useParams } from "react-router";
import { PlaceholderPage } from "./PlaceholderPage";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <PlaceholderPage
      title="Service details"
      description={`Detailed information for this service will be available soon.`}
      path={`/services/${slug ?? ""}`}
      eyebrow="Services"
    />
  );
}
