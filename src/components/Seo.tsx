import { Helmet } from "react-helmet-async";
import { SITE, canonicalUrl } from "@/config/site";

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  type?: "website" | "article" | "event";
  image?: string;
  jsonLd?: Record<string, unknown>;
}

export function Seo({
  title,
  description,
  path,
  noIndex = false,
  type = "website",
  image,
  jsonLd,
}: SeoProps) {
  const url = canonicalUrl(path);
  const fullTitle = `${title} | ${SITE.name}`;
  const defaultImage =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"; // Fallback OG Image
  const metaImage = image || defaultImage;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
