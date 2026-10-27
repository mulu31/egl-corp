import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiLayout,
  FiLink,
  FiMessageSquare,
  FiServer,
  FiSmartphone,
  FiTool,
} from "react-icons/fi";

export interface ServiceDetail {
  id: string;
  title: string;
  summary: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  idealFor: string[];
  image: string;
}

export const SERVICES_DETAILED: readonly ServiceDetail[] = [
  {
    id: "web-development",
    title: "Web Development",
    summary:
      "Fast, responsive, and accessible websites engineered for modern browsers.",
    description:
      "We build digital experiences that are not only visually appealing but also technically robust. Whether you need a corporate presence, a content-managed platform, or a complex customer portal, we engineer solutions that load fast and scale reliably.",
    icon: FiCode,
    deliverables: [
      "Corporate & business websites",
      "Landing pages & marketing sites",
      "E-commerce platforms",
      "Content-managed websites (CMS)",
      "Customer portals & web applications",
    ],
    idealFor: [
      "Businesses needing a credible digital presence",
      "Companies ready to upgrade from legacy websites",
      "Organizations needing secure client portals",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "mobile-apps",
    title: "Mobile Application Development",
    summary:
      "Native and cross-platform applications that deliver smooth experiences.",
    description:
      "We design and build mobile applications that solve specific business problems or provide value directly to your customers. Our focus is on smooth performance, intuitive user interfaces, and seamless integration with your existing backend systems.",
    icon: FiSmartphone,
    deliverables: [
      "Customer-facing mobile apps",
      "Internal workflow applications",
      "Utility and companion apps",
      "Cross-platform solutions (iOS & Android)",
    ],
    idealFor: [
      "Businesses requiring mobile access to their services",
      "Teams replacing manual paper-based field workflows",
      "Products aiming for direct consumer engagement",
    ],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "business-systems",
    title: "Business Systems & CMS/ERP",
    summary: "Custom internal tools, dashboards, and workflow software.",
    description:
      "Off-the-shelf software rarely fits the exact processes of a growing business. We build tailored business systems, from content management dashboards to inventory and operational tools, designed specifically around how your team actually works.",
    icon: FiServer,
    deliverables: [
      "Custom content management systems",
      "Inventory & operational dashboards",
      "Reporting & data management tools",
      "Tailored business applications",
    ],
    idealFor: [
      "Operations struggling with fragmented spreadsheets",
      "Businesses needing software tailored to unique workflows",
      "Organizations requiring strict data control",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "integrations",
    title: "Integrations & Automation",
    summary: "APIs, third-party integrations, and automated pipelines.",
    description:
      "Your software tools should talk to each other. We connect disconnected systems, automate repetitive data entry, and build APIs that allow your existing software to share information securely and reliably.",
    icon: FiLink,
    deliverables: [
      "Custom API development",
      "Third-party system integrations",
      "Telegram bots & automated notifications",
      "Workflow automation pipelines",
      "Data synchronization between services",
    ],
    idealFor: [
      "Businesses manually copying data between systems",
      "Teams needing custom bots for communication",
      "Organizations requiring secure API bridges",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "testing-maintenance",
    title: "Testing, Deployment & Support",
    summary: "Reliable QA, deployment strategies, and ongoing support.",
    description:
      "Software requires continuous care to remain secure and performant. We provide rigorous quality assurance, assist with deployment to production environments, and offer ongoing maintenance to ensure your systems run smoothly.",
    icon: FiTool,
    deliverables: [
      "Functional & regression testing",
      "Bug investigation & resolution",
      "Deployment assistance & CI/CD setup",
      "Performance & security updates",
      "Ongoing technical support",
    ],
    idealFor: [
      "Teams preparing for a major software launch",
      "Businesses inheriting untested or legacy codebases",
      "Organizations requiring long-term technical support",
    ],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop",
  },
];

// Consolidated to 4 steps to match the visual curve design
export const ENGAGEMENT_STEPS = [
  {
    title: "Initial Discussion",
    desc: "We listen to your business goals, constraints, and high-level vision to understand the problem.",
    icon: FiMessageSquare,
  },
  {
    title: "Design & Approach",
    desc: "We define the problem statement, propose the architecture, and map out a clear scope.",
    icon: FiLayout,
  },
  {
    title: "Build & Integrate",
    desc: "Our team designs, builds, and integrates the solution, ensuring quality at every step.",
    icon: FiCpu,
  },
  {
    title: "Deliver & Support",
    desc: "We test thoroughly, deploy to production, hand over documentation, and offer ongoing support.",
    icon: FiCheckCircle,
  },
];

export const SERVICE_FAQS = [
  {
    q: "What information should we provide before starting?",
    a: "It is helpful to have a clear understanding of your business problem, your target audience, and any existing systems or constraints. However, we can help you define these requirements during our initial discovery discussion.",
  },
  {
    q: "How is project scope determined?",
    a: "Scope is defined collaboratively. We break the project into distinct features and phases, ensuring we address the most critical business needs first while keeping the architecture flexible for future additions.",
  },
  {
    q: "Can EGL Corp improve an existing application?",
    a: "Yes. We can take over existing codebases, perform architectural reviews, resolve technical debt, and modernize legacy systems to improve performance and maintainability.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "We do. We offer various maintenance and support arrangements to ensure your software remains secure, updated, and operational after the initial delivery phase.",
  },
  {
    q: "How is pricing estimated?",
    a: "Pricing depends on the complexity of the requirements, the technology stack, and the timeline. We provide a detailed proposal after the initial technical scope is agreed upon.",
  },
];
