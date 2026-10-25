import { useParams } from "react-router";
import { PlaceholderPage } from "./PlaceholderPage";

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <PlaceholderPage
      title="Article"
      description="Full article content will be available soon."
      path={`/blogs/${slug ?? ""}`}
      eyebrow="Blogs & Events"
    />
  );
}
