import { SITE, canonicalUrl } from "@/config/site";
import { Helmet } from "react-helmet-async";

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function Seo({ title, description, path, noIndex = false }: SeoProps) {
  const url = canonicalUrl(path);
  const fullTitle = `${title} | ${SITE.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
