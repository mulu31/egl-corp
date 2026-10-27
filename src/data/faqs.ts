export interface FaqItem {
  q: string;
  a: string;
}

export const DEFAULT_FAQS: readonly FaqItem[] = [
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
