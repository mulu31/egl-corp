/**
 * Central site configuration.
 *
 * IMPORTANT: `baseUrl` is a placeholder. Replace with the real production
 * domain before launch. All canonical and Open Graph URLs derive from this.
 */
export const SITE = {
  name: "EGL Corp",
  tagline: "Engineering Ideas. Empowering Progress.",
  description:
    "EGL Corp engineers digital solutions and software products that help businesses solve problems, work smarter, and grow.",
  baseUrl: "https://REPLACE-BEFORE-LAUNCH.example",
} as const;

/** Join a route path with the configured base URL. */
export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.baseUrl}${normalized === "/" ? "" : normalized}`;
}
