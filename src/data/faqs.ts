export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: readonly Faq[] = [
  {
    question: "What types of projects does EGL Corp undertake?",
    answer:
      "We build web applications, mobile apps, custom business systems, APIs, and automation tools. We work with businesses that need reliable, scalable software to solve operational problems.",
  },
  {
    question: "How does a project begin?",
    answer:
      "We start by understanding your business problem, constraints, and goals. From there, we propose a technical approach, define a scope, and map out the phases of work.",
  },
  {
    question: "How are project requirements defined?",
    answer:
      "Requirements are defined collaboratively through discovery sessions. We translate business needs into technical specifications and user flows before writing code.",
  },
  {
    question: "Can EGL Corp maintain existing applications?",
    answer:
      "Yes. We can take over existing codebases, perform code reviews, resolve technical debt, and provide ongoing maintenance and feature development.",
  },
  {
    question: "What happens after delivery?",
    answer:
      "We offer deployment support, testing, and handover documentation. We can also arrange ongoing maintenance and support agreements depending on your needs.",
  },
] as const;
