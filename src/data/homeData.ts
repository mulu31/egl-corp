import {
  FiCode,
  FiSmartphone,
  FiServer,
  FiLink,
  FiCheckCircle,
  FiAward,
  FiShield,
  FiZap,
  FiUsers,
} from "react-icons/fi";

export const ABOUT_VALUES = [
  {
    icon: FiAward,
    title: "Excellence",
    desc: "Striving for the highest standards in every line of code.",
  },
  {
    icon: FiShield,
    title: "Integrity",
    desc: "Building trust through honest communication and ethical engineering.",
  },
  {
    icon: FiZap,
    title: "Innovation",
    desc: "Embracing modern architectures and creative problem solving.",
  },
  {
    icon: FiUsers,
    title: "Partnership",
    desc: "Fostering collaborative relationships with our clients.",
  },
];

export const STATS = [
  {
    icon: FiCode,
    value: "150+",
    title: "Projects Delivered",
    desc: "Successful software deployments across various industries.",
  },
  {
    icon: FiCheckCircle,
    value: "98%",
    title: "Client Retention",
    desc: "Consistent results and ongoing support that keep clients returning.",
  },
  {
    icon: FiZap,
    value: "15+",
    title: "Tech Stacks",
    desc: "Modern frameworks and tools used to build robust solutions.",
  },
  {
    icon: FiServer,
    value: "25+",
    title: "Systems Built",
    desc: "Custom internal tools and dashboards for enterprise operations.",
  },
  {
    icon: FiUsers,
    value: "10k+",
    title: "Users Served",
    desc: "End-users interacting with the applications we engineer.",
  },
];

export const SERVICES = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: FiCode,
    desc: "Fast, responsive, and accessible websites engineered for modern browsers.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    icon: FiSmartphone,
    desc: "Native and cross-platform applications that deliver smooth experiences.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "business-systems",
    title: "Business Systems",
    icon: FiServer,
    desc: "Custom internal tools, dashboards, and workflow software.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    slug: "integrations",
    title: "Integrations & Automation",
    icon: FiLink,
    desc: "APIs, third-party integrations, and automated pipelines.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
  },
];

export const WHY_US = [
  {
    title: "Strategic Architecture",
    desc: "We align technical decisions with your business goals, ensuring scalable and maintainable systems.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Clear Communication",
    desc: "Regular updates, direct collaboration, and no vague promises. You are part of the process.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Quality Assurance",
    desc: "Testing and stability are integrated into our process, not bolted on at the end.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Ongoing Support",
    desc: "We remain available to iterate, maintain, and scale the systems we build.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
];

export const PROJECTS = [
  {
    slug: "erp-platform",
    title: "Enterprise ERP Platform",
    category: "Web App",
    desc: "A comprehensive resource planning tool for manufacturing.",
    tech: ["React", "Node"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    slug: "health-app",
    title: "Health Tracking App",
    category: "Mobile",
    desc: "Cross-platform patient monitoring application.",
    tech: ["Flutter", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800",
  },
  {
    slug: "retail-dashboard",
    title: "Retail Analytics Dashboard",
    category: "Business System",
    desc: "Real-time sales and inventory visualization.",
    tech: ["Vue", "D3.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  },
  {
    slug: "logistics-api",
    title: "Logistics Routing API",
    category: "Integration",
    desc: "Automated route optimization and tracking.",
    tech: ["Go", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
  },
  {
    slug: "crm-system",
    title: "Custom CRM System",
    category: "Web App",
    desc: "Tailored customer relationship management tool.",
    tech: ["React", "Python"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800",
  },
];

export const BLOGS = [
  {
    slug: "future-of-web",
    title: "The Future of Web Development",
    category: "Engineering",
    date: "Oct 15, 2026",
    desc: "Exploring emerging trends in React and Vite.",
    venue: "Tech Blog",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
  },
  {
    slug: "scaling-databases",
    title: "Scaling Databases for Growth",
    category: "Architecture",
    date: "Nov 02, 2026",
    desc: "Best practices for handling high-traffic applications.",
    venue: "Engineering",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
  },
  {
    slug: "ui-ux-trends",
    title: "UI/UX Trends to Watch",
    category: "Design",
    date: "Nov 20, 2026",
    desc: "Moving beyond flat design into immersive interfaces.",
    venue: "Design Lab",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration Strategies",
    category: "Cloud",
    date: "Dec 05, 2026",
    desc: "A practical guide to moving legacy systems.",
    venue: "Tech Talk",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
  },
  {
    slug: "cybersecurity-basics",
    title: "Cybersecurity Basics for Startups",
    category: "Security",
    date: "Dec 12, 2026",
    desc: "Protecting your digital assets from day one.",
    venue: "Security",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
  },
];

export const FAQS = [
  {
    q: "What types of projects does EGL Corp undertake?",
    a: "We build web applications, mobile apps, custom business systems, APIs, and automation tools. We work with businesses that need reliable, scalable software to solve operational problems.",
  },
  {
    q: "How does a project begin?",
    a: "We start by understanding your business problem, constraints, and goals. From there, we propose a technical approach, define a scope, and map out the phases of work.",
  },
  {
    q: "How are project requirements defined?",
    a: "Requirements are defined collaboratively through discovery sessions. We translate business needs into technical specifications and user flows before writing code.",
  },
  {
    q: "Can EGL Corp maintain existing applications?",
    a: "Yes. We can take over existing codebases, perform code reviews, resolve technical debt, and provide ongoing maintenance and feature development.",
  },
  {
    q: "What happens after delivery?",
    a: "We offer deployment support, testing, and handover documentation. We can also arrange ongoing maintenance and support agreements depending on your needs.",
  },
];

// Append to the end of the file
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "EGL Corp completely transformed our internal workflow. Their engineering team didn't just write code; they understood our business problems and delivered a scalable system that our staff actually enjoys using.",
    name: "Samantha William",
    role: "Senior Operations Manager",
    company: "Apex Logistics",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    quote:
      "The mobile application they built for us is incredibly fast and reliable. Communication was clear throughout the entire process, and they delivered exactly on time. Highly recommended for any serious business.",
    name: "David Tesfaye",
    role: "Founder & CEO",
    company: "Nexus Retail",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    quote:
      "Working with EGL Corp felt like having an in-house engineering team. They handled our complex API integrations flawlessly and provided excellent documentation for our internal developers.",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "FinServe Group",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 4,
    quote:
      "They took our legacy dashboard and rebuilt it into a modern, responsive web application. The performance improvements were immediate, and our clients love the new interface.",
    name: "Michael Chen",
    role: "Product Director",
    company: "DataStream",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 5,
    quote:
      "From discovery to deployment, EGL Corp maintained a high standard of quality. Their focus on maintainable architecture gives us confidence as we continue to scale our platform.",
    name: "Elena Rodriguez",
    role: "VP of Engineering",
    company: "CloudScale Inc.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  },
];
