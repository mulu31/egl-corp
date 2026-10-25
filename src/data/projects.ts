export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  type: "Internal Product" | "Concept" | "Platform";
  tech: string[];
  imageUrl: string;
}

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    slug: "enterprise-dashboard",
    title: "Operations Dashboard",
    category: "Business Systems",
    description:
      "A scalable dashboard concept for visualizing internal business metrics and streamlining reporting workflows.",
    type: "Concept",
    tech: ["React", "TypeScript", "Tailwind"],
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "ecommerce-platform",
    title: "Commerce Platform",
    category: "Web Development",
    description:
      "An architectural exploration of a headless e-commerce setup designed for performance and flexibility.",
    type: "Concept",
    tech: ["Vite", "React Router", "API"],
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation Tool",
    category: "Automation",
    description:
      "An internal tool designed to connect fragmented APIs and automate repetitive data entry tasks.",
    type: "Internal Product",
    tech: ["Node.js", "TypeScript", "REST APIs"],
    imageUrl:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
] as const;
