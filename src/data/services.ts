export type ServiceIconKey =
  | "web"
  | "mobile"
  | "systems"
  | "automation"
  | "maintenance";

export interface Service {
  slug: string;
  title: string;
  summary: string;
  iconKey: ServiceIconKey;
  href: string;
}

export const SERVICES: readonly Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    summary:
      "Fast, responsive, and accessible websites engineered for modern browsers and business needs.",
    iconKey: "web",
    href: "/services/web-development",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    summary:
      "Native and cross-platform applications that deliver smooth experiences on iOS and Android.",
    iconKey: "mobile",
    href: "/services/mobile-apps",
  },
  {
    slug: "business-systems",
    title: "Business Systems",
    summary:
      "Custom internal tools, dashboards, and workflow software designed around your actual operations.",
    iconKey: "systems",
    href: "/services/business-systems",
  },
  {
    slug: "integrations-automation",
    title: "Integrations & Automation",
    summary:
      "APIs, third-party integrations, and automated pipelines that connect your software stack.",
    iconKey: "automation",
    href: "/services/integrations-automation",
  },
  {
    slug: "testing-maintenance",
    title: "Testing & Maintenance",
    summary:
      "Reliable QA, deployment strategies, and ongoing support to keep your product running.",
    iconKey: "maintenance",
    href: "/services/testing-maintenance",
  },
] as const;
