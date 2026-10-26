import type { IconType } from "react-icons";
import {
  FiTarget,
  FiEye,
  FiShield,
  FiUsers,
  FiZap,
  FiCheckCircle,
} from "react-icons/fi";

export const CORE_VALUES = [
  {
    title: "Engineering Quality",
    desc: "We prioritize clean architecture, strict typing, and maintainable code over quick hacks.",
    icon: FiCheckCircle,
  },
  {
    title: "Customer Understanding",
    desc: "We solve business problems, not just technical puzzles. We listen before we build.",
    icon: FiUsers,
  },
  {
    title: "Integrity & Transparency",
    desc: "Clear communication, honest timelines, and no hidden surprises.",
    icon: FiShield,
  },
  {
    title: "Practical Innovation",
    desc: "We adopt new technologies only when they provide measurable value to your product.",
    icon: FiZap,
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Mulu",
    role: "Founder",
    // Photo omitted pending actual assets
  },
  {
    name: "Bekele",
    role: "Founder",
  },
  {
    name: "Abayneh",
    role: "Founder",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Discovery",
    desc: "Understanding your business goals, constraints, and technical requirements.",
  },
  {
    title: "Planning",
    desc: "Defining the architecture, scope, and technology stack.",
  },
  {
    title: "Design",
    desc: "Mapping user flows and creating intuitive interfaces.",
  },
  {
    title: "Development",
    desc: "Writing clean, tested code and integrating systems.",
  },
  {
    title: "Testing",
    desc: "Ensuring reliability, security, and performance across devices.",
  },
  {
    title: "Deployment",
    desc: "Launching the product and providing handover documentation.",
  },
  {
    title: "Maintenance",
    desc: "Ongoing support, updates, and iterative improvements.",
  },
];
