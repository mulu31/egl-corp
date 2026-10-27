import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
import { FiCheckCircle, FiShield, FiUsers, FiZap } from "react-icons/fi";

export const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
];

export const ABOUT_SERVICES = [
  {
    title: "Web & Software Development",
    desc: "We build fast, responsive, and scalable web applications tailored to your business logic. From customer portals to complex internal dashboards.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Mobile App Engineering",
    desc: "Native and cross-platform applications designed for smooth user experiences on iOS and Android, seamlessly integrating with your backend.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Systems & Automation",
    desc: "Custom ERP-style systems, workflow automation, and API integrations that eliminate repetitive manual work and connect your fragmented tools.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
];

export const CORE_VALUES = [
  {
    title: "Engineering Quality",
    desc: "We prioritize clean architecture and maintainable code.",
    icon: FiCheckCircle,
  },
  {
    title: "Customer Understanding",
    desc: "We solve business problems, not just technical puzzles.",
    icon: FiUsers,
  },
  {
    title: "Integrity & Transparency",
    desc: "Clear communication and no hidden surprises.",
    icon: FiShield,
  },
  {
    title: "Practical Innovation",
    desc: "We adopt tech only when it provides measurable value.",
    icon: FiZap,
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Mulu",
    role: "Founder & Lead Engineer",
    bio: "Driving technical architecture and ensuring robust software delivery.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    socials: { linkedin: "#", x: "#", reddit: "#" },
  },
  {
    name: "Bekele",
    role: "Founder & Product Strategist",
    bio: "Bridging the gap between business requirements and technical execution.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    socials: { linkedin: "#", x: "#", reddit: "#" },
  },
  {
    name: "Abayneh",
    role: "Founder & Operations",
    bio: "Ensuring seamless project delivery and client communication.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
    socials: { linkedin: "#", x: "#", reddit: "#" },
  },
];

// Structured for the wavy line layout
export const PROCESS_STEPS = [
  {
    title: "Free Home Visit",
    desc: "We discuss your goals and map out a clear path forward. No surprises.",
    icon: "box",
  },
  {
    title: "Design & Prototype",
    desc: "We design intuitive interfaces and technical architectures before coding begins.",
    icon: "tools",
  },
  {
    title: "Build & Deliver",
    desc: "Our engineers write clean code, rigorously test, and deploy your product.",
    icon: "truck",
  },
];

export const JOURNEY_ITEMS = [
  {
    platform: "TikTok",
    icon: FaTiktok,
    followers: "12K+",
    text: "Follow our TikTok page",
    desc: "Behind-the-scenes of our engineering team.",
    // Using a video element for the background
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-42807-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    link: "#",
    color: "bg-black text-white",
  },
  {
    platform: "Facebook",
    icon: FaFacebook,
    followers: "25K+",
    text: "Follow on Facebook",
    desc: "Stay updated with our latest news and events.",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-modern-office-41316-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop",
    link: "#",
    color: "bg-[#1877F2] text-white",
  },
  {
    platform: "Instagram",
    icon: FaInstagram,
    followers: "18K+",
    text: "Follow on Instagram",
    desc: "Visual highlights of our workspace and projects.",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-42809-large.mp4",
    poster:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&auto=format&fit=crop",
    link: "#",
    color:
      "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white",
  },
];
