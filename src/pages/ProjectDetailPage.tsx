import { useParams } from "react-router";
import { PlaceholderPage } from "./PlaceholderPage";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <PlaceholderPage
      title="Project details"
      description={`Detailed information for this project will be available soon.`}
      path={`/projects/${slug ?? ""}`}
      eyebrow="Projects"
    />
  );
}
