export type ContentType = "article" | "event";
export type EventStatus = "upcoming" | "past" | "cancelled";

export interface EventDetailData {
  agenda: { time: string; title: string; desc: string }[];
  speakers: { name: string; role: string; bio: string; image: string }[];
  venue: { name: string; address: string; mapUrl?: string };
  faqs: { q: string; a: string }[];
  sponsors: { name: string; image: string }[];
  gallery: string[];
  hostedBy: string;
}

export interface ArticleDetailData {
  readTime: number;
  authorProfile: { name: string; role: string; avatar: string; bio: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string; // MAPPED TO `desc` in Highlights
  type: ContentType;
  category: string;
  publishedAt: string; // MAPPED TO `date` in Highlights
  coverImage: string; // MAPPED TO `image` in Highlights
  tags: string[];
  featured: boolean;
  content: string;

  eventData?: {
    startAt: string;
    endAt?: string;
    location: string; // MAPPED TO `venue` in Highlights
    status: EventStatus;
    registrationUrl?: string;
    details: EventDetailData;
  };
  articleData?: ArticleDetailData;
}

export const BLOG_POSTS: readonly BlogPost[] = [
  // ==========================================
  // EVENTS (1-4)
  // ==========================================
  {
    slug: "sports-for-peace-tournament-2026",
    title: "Sports for Peace Tournament 2026",
    summary:
      "A multi-sport tournament promoting peace and unity through football, basketball, athletics, and volleyball for youth and community members across Bishoftu. Join us for friendly competition and community spirit.",
    type: "event",
    category: "Community",
    publishedAt: "2026-05-01T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    tags: ["Community", "Sports", "Peace"],
    featured: true,
    content:
      "<p>Get ready for an unforgettable day of sports, unity, and community bonding at the Bishoftu Sports Stadium. This event brings together youth from across the region to compete, collaborate, and celebrate the spirit of peace through athletics.</p><p>Expect a full day of activities ranging from the opening parade to intense finals. Food vendors and community organizations will also be present.</p>",
    eventData: {
      startAt: "2026-06-20T07:00:00Z",
      endAt: "2026-06-20T20:00:00Z",
      location: "Bishoftu Sports Stadium, Oromia",
      status: "upcoming",
      registrationUrl: "#booking",
      details: {
        hostedBy: "Bishoftu Sports Council",
        agenda: [
          {
            time: "07:00",
            title: "Opening Parade",
            desc: "Teams parade with peace messages",
          },
          {
            time: "08:00",
            title: "Football Matches Begin",
            desc: "Football tournament starts",
          },
          {
            time: "10:00",
            title: "Basketball Matches",
            desc: "Basketball competition",
          },
          {
            time: "12:00",
            title: "Athletics Events",
            desc: "Track and field events",
          },
          {
            time: "14:00",
            title: "Volleyball Matches",
            desc: "Volleyball competition",
          },
          {
            time: "17:00",
            title: "Finals",
            desc: "Final matches and awards ceremony",
          },
        ],
        speakers: [
          {
            name: "Solomon Ayele",
            role: "Sports Coordinator",
            bio: "Sports development expert promoting peace through athletics.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "Yonas Desta",
            role: "Football Coach",
            bio: "Experienced football coach developing youth talent.",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "Bekele Tulu",
            role: "Basketball Referee",
            bio: "Certified basketball referee promoting fair play.",
            image:
              "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=300&auto=format&fit=crop",
          },
          {
            name: "Tigist Wondimu",
            role: "Athletics Coach",
            bio: "Athletics coach training young runners and jumpers.",
            image:
              "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=300&auto=format&fit=crop",
          },
        ],
        venue: { name: "Bishoftu Sports Stadium", address: "Bishoftu, Oromia" },
        faqs: [
          {
            q: "How do I register a team?",
            a: "Team registration is currently closed. Please contact the organizers for waitlist options.",
          },
          {
            q: "Is there an entry fee for spectators?",
            a: "No, the event is free and open to the public.",
          },
        ],
        sponsors: [
          {
            name: "Oromia Sports Commission",
            image:
              "https://images.unsplash.com/photo-1577416412292-747c6607f055?q=80&w=500&auto=format&fit=crop",
          },
          {
            name: "Bishoftu City Admin",
            image:
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=500&auto=format&fit=crop",
          },
          {
            name: "Local Youth Assoc",
            image:
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop",
          },
        ],
        gallery: [
          "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=500&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500&auto=format&fit=crop",
        ],
      },
    },
  },
  {
    slug: "future-of-ai-in-enterprise",
    title: "The Future of AI in Enterprise Software",
    summary:
      "Join industry leaders for a deep dive into how artificial intelligence is reshaping enterprise workflows, data analysis, and customer experiences.",
    type: "event",
    category: "Events",
    publishedAt: "2026-10-01T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    tags: ["AI", "Enterprise", "Conference"],
    featured: false,
    content:
      "<p>Artificial intelligence is no longer a futuristic concept; it is actively transforming how enterprises operate. This summit brings together CTOs, lead engineers, and product managers to discuss practical implementations of AI.</p>",
    eventData: {
      startAt: "2026-12-15T09:00:00Z",
      endAt: "2026-12-15T17:00:00Z",
      location: "Bishoftu Cultural Center, Oromia",
      status: "upcoming",
      registrationUrl: "#booking",
      details: {
        hostedBy: "EGL Corp",
        agenda: [
          {
            time: "09:00 AM",
            title: "Registration & Breakfast",
            desc: "Networking and welcome coffee.",
          },
          {
            time: "10:00 AM",
            title: "Keynote: AI Strategy",
            desc: "Aligning AI initiatives with business goals.",
          },
          {
            time: "01:00 PM",
            title: "Lunch & Networking",
            desc: "Catered lunch for all attendees.",
          },
          {
            time: "02:00 PM",
            title: "Panel: LLMs in Production",
            desc: "Challenges and solutions for deploying large language models.",
          },
        ],
        speakers: [
          {
            name: "Dr. Sarah Jenkins",
            role: "Head of AI Research",
            bio: "Leading AI innovation.",
            image:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
          },
          {
            name: "David Tesfaye",
            role: "CTO, TechFlow",
            bio: "Expert in cloud infrastructure.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
          },
          {
            name: "Elena Rodriguez",
            role: "VP Engineering",
            bio: "Scaling engineering teams.",
            image:
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
          },
        ],
        venue: {
          name: "Bishoftu Cultural Center",
          address: "Bishoftu, Oromia, Ethiopia",
        },
        faqs: [
          {
            q: "Is this event free?",
            a: "Yes, registration is free but space is limited.",
          },
          {
            q: "Will there be a virtual option?",
            a: "The keynote will be streamed live, but the workshops are in-person only.",
          },
        ],
        sponsors: [
          {
            name: "TechFlow",
            image:
              "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop",
          },
          {
            name: "CloudScale",
            image:
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop",
          },
        ],
        gallery: [
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=500",
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=500",
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=500",
        ],
      },
    },
  },
  {
    slug: "annual-developer-meetup-2025",
    title: "Annual Developer Meetup 2025",
    summary:
      "A recap of our previous year's community gathering, featuring talks on edge computing and local developer communities.",
    type: "event",
    category: "Events",
    publishedAt: "2025-10-01T08:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000&auto=format&fit=crop",
    tags: ["Community", "Networking"],
    featured: false,
    content:
      "<p>Thank you to everyone who attended our 2025 meetup. The discussions around edge computing and database scaling were fantastic.</p><p>Stay tuned for the recording.</p>",
    eventData: {
      startAt: "2025-11-15T18:00:00Z",
      endAt: "2025-11-15T21:00:00Z",
      location: "Bishoftu Cultural Center",
      status: "past",
      details: {
        hostedBy: "EGL Corp",
        agenda: [
          { time: "6:00 PM", title: "Networking", desc: "Drinks and snacks." },
        ],
        speakers: [
          {
            name: "Mulu",
            role: "Host",
            bio: "Founder.",
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
          },
        ],
        venue: { name: "Bishoftu Cultural Center", address: "Bishoftu" },
        faqs: [],
        sponsors: [],
        gallery: [
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=500",
        ],
      },
    },
  },
  {
    slug: "tech-careers-workshop",
    title: "Tech Careers Workshop",
    summary:
      "A hands-on workshop for aspiring developers looking to break into the local tech industry.",
    type: "event",
    category: "Education",
    publishedAt: "2025-09-01T08:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop",
    tags: ["Education", "Careers"],
    featured: false,
    content:
      "<p>A fantastic session helping the next generation of engineers understand the realities of building software.</p>",
    eventData: {
      startAt: "2025-09-10T09:00:00Z",
      location: "EGL Corp HQ",
      status: "past",
      details: {
        hostedBy: "EGL Corp",
        agenda: [],
        speakers: [],
        venue: { name: "EGL Corp HQ", address: "Bishoftu" },
        faqs: [],
        sponsors: [],
        gallery: [],
      },
    },
  },

  // ==========================================
  // ARTICLES (5-24)
  // ==========================================
  {
    slug: "building-scalable-react-architectures",
    title: "Building Scalable React Architectures",
    summary:
      "A deep dive into structuring enterprise React applications for long-term maintainability and team growth.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-10-15T09:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    tags: ["React", "Architecture", "TypeScript"],
    featured: true,
    content: `
      <p>Building a React application that scales with a growing team is not just about using TypeScript and a state manager. It requires strict boundaries, maintainable folder structures, and a deep understanding of component composition.</p>
      <h2>The Problem with Over-Abstraction</h2>
      <p>Many teams rush to build a generic component library before they even understand their domain. This leads to bloated components with 20 props, trying to handle every edge case. Instead, start with page-specific components and promote them to the shared directory only when they are used in at least three distinct contexts.</p>
      <blockquote>Good architecture is boring. It is predictable, heavily typed, and easy for a new developer to read.</blockquote>
      <h2>Enforcing Boundaries</h2>
      <p>Use ESLint rules to prevent deep relative imports. Enforce the use of path aliases, and group code by feature rather than by file type. This ensures that when a developer opens a folder, they see everything related to that feature.</p>
    `,
    articleData: {
      readTime: 6,
      authorProfile: {
        name: "Mulu",
        role: "Founder & Lead Engineer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        bio: "Mulu is the driving force behind EGL Corp's technical architecture, specializing in React, Node.js, and scalable system design.",
      },
    },
  },
  {
    slug: "why-we-standardize-on-tailwind-css",
    title: "Why We Standardize on Tailwind CSS",
    summary:
      "An explanation of our design system choices and how Tailwind v4 improves our delivery speed and consistency.",
    type: "article",
    category: "Design",
    publishedAt: "2026-09-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1000&auto=format&fit=crop",
    tags: ["Tailwind", "CSS", "Design Systems"],
    featured: false,
    content: `<p>Utility-first CSS is polarizing, but for our team, it solves the problem of design inconsistency. By keeping styles close to the markup, we eliminate the dead CSS problem.</p><h2>Tailwind v4 and the Future</h2><p>With the new engine in Tailwind v4, compilation is virtually instant. The <code>@theme</code> directive allows us to centralize our brand tokens without needing a complex <code>tailwind.config.js</code> file.</p><p>More importantly, it forces us to design in the browser. Instead of jumping between a CSS file and a React component, we iterate directly in the JSX.</p>`,
    articleData: {
      readTime: 4,
      authorProfile: {
        name: "Bekele",
        role: "Product Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Bekele focuses on bridging business requirements with technical execution, ensuring our products solve real-world problems.",
      },
    },
  },
  {
    slug: "securing-api-endpoints",
    title: "Securing Your API Endpoints",
    summary:
      "Best practices for protecting your backend from unauthorized access and abuse.",
    type: "article",
    category: "Security",
    publishedAt: "2026-09-15T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Security", "API", "Backend"],
    featured: false,
    content: `<p>API security is not a feature you add at the end; it is a fundamental requirement from day one. Whether you are building a public API or an internal microservice, you must assume that bad actors will find your endpoints.</p><h2>1. Never Trust the Client</h2><p>Any validation done on the frontend can be bypassed. Always validate and sanitize inputs on the server. Use strict schema validation libraries like Zod or Joi to ensure the payload matches your expected structure.</p><h2>2. Implement Rate Limiting</h2><p>Without rate limiting, an attacker can brute-force your login endpoints or DDoS your servers. Use a middleware to track IPs and enforce limits on requests per minute.</p>`,
    articleData: {
      readTime: 8,
      authorProfile: {
        name: "Abayneh",
        role: "Operations Lead",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
        bio: "Abayneh ensures the reliable deployment and security of our clients' software infrastructure.",
      },
    },
  },
  {
    slug: "understanding-edge-computing",
    title: "The Rise of Edge Computing",
    summary:
      "Why moving logic closer to your users is the future of web performance.",
    type: "article",
    category: "Cloud",
    publishedAt: "2026-09-01T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    tags: ["Cloud", "Edge", "Performance"],
    featured: false,
    content: `<p>For decades, the standard architecture was a centralized server or data center. But as users become globally distributed, the speed of light becomes a limitation. Edge computing solves this by running code geographically closer to the user.</p><h2>Why Edge Matters</h2><p>By deploying serverless functions to the edge, we can serve personalized content, authenticate users, and process form submissions with sub-10ms latency.</p><p>This results in a significantly faster, more responsive experience for users regardless of where they are located.</p>`,
    articleData: {
      readTime: 5,
      authorProfile: {
        name: "Mulu",
        role: "Lead Engineer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        bio: "Tech architect.",
      },
    },
  },
  {
    slug: "modern-authentication-patterns",
    title: "Modern Authentication Patterns",
    summary: "Comparing JWTs, session cookies, and modern auth providers.",
    type: "article",
    category: "Security",
    publishedAt: "2026-08-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
    tags: ["Auth", "Security", "JWT"],
    featured: false,
    content: `<p>Authentication is the gateway to your application. Choosing the right pattern is crucial for both security and user experience.</p><h2>Session Cookies</h2><p>Traditional session cookies are stateful. The server stores the session, and the client holds a reference. This is easy to revoke but harder to scale horizontally.</p><h2>JSON Web Tokens (JWT)</h2><p>JWTs are stateless. The server signs the token, and the client sends it back with every request. This scales easily but revoking tokens before they expire is difficult.</p>`,
    articleData: {
      readTime: 7,
      authorProfile: {
        name: "Abayneh",
        role: "Operations Lead",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
        bio: "Ops expert.",
      },
    },
  },
  {
    slug: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics",
    summary: "How to write flexible, reusable, and strongly typed code.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-08-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    tags: ["TypeScript", "Types"],
    featured: false,
    content: `<p>Generics are one of the most powerful features of TypeScript, yet they are often misunderstood.</p><h2>Why Generics?</h2><p>Instead of writing multiple versions of a function for different types, you write one version that accepts a type parameter. This provides type safety without sacrificing reusability.</p><h2>Constraints</h2><p>Use the <code>extends</code> keyword to constrain your generics to types that have specific properties.</p>`,
    articleData: {
      readTime: 6,
      authorProfile: {
        name: "Mulu",
        role: "Engineer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        bio: "Tech architect.",
      },
    },
  },
  {
    slug: "the-importance-of-accessible-design",
    title: "The Importance of Accessible Design",
    summary:
      "Why building for everyone is not just ethical, but good business.",
    type: "article",
    category: "Design",
    publishedAt: "2026-07-25T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
    tags: ["A11y", "Design", "UX"],
    featured: false,
    content: `<p>Accessibility (often abbreviated as a11y) is the practice of making your websites usable by as many people as possible.</p><h2>Semantic HTML</h2><p>The foundation of accessibility is using the right HTML elements for the right job. A button should be a <code>&lt;button&gt;</code>, not a <code>&lt;div&gt;</code> with a click handler.</p><h2>Keyboard Navigation</h2><p>Ensure that all interactive elements can be reached and used with a keyboard.</p>`,
    articleData: {
      readTime: 4,
      authorProfile: {
        name: "Bekele",
        role: "Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Design thinker.",
      },
    },
  },
  {
    slug: "effective-database-indexing",
    title: "Effective Database Indexing",
    summary: "How to speed up your queries without bloating your database.",
    type: "article",
    category: "Backend",
    publishedAt: "2026-07-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
    tags: ["Database", "SQL", "Performance"],
    featured: false,
    content: `<p>Indexes are the key to fast database reads, but they come at a cost: slower writes and increased storage. Finding the right balance is crucial.</p><h2>Understand Your Queries</h2><p>Before adding an index, look at your slow query log. Index the columns that are frequently used in <code>WHERE</code> clauses.</p>`,
    articleData: {
      readTime: 9,
      authorProfile: {
        name: "Abayneh",
        role: "Ops",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
        bio: "Ops expert.",
      },
    },
  },
  {
    slug: "designing-restful-apis",
    title: "Designing RESTful APIs",
    summary:
      "Best practices for building predictable and developer-friendly APIs.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-06-15T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    tags: ["API", "REST", "Backend"],
    featured: false,
    content: `<p>A good API is intuitive. A developer should be able to guess the endpoint and payload structure just by looking at the resource name.</p><h2>Use Nouns, Not Verbs</h2><p>Instead of <code>/getUsers</code>, use <code>GET /users</code>.</p>`,
    articleData: {
      readTime: 6,
      authorProfile: {
        name: "Mulu",
        role: "Engineer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        bio: "Tech architect.",
      },
    },
  },
  {
    slug: "why-we-love-vite",
    title: "Why We Love Vite",
    summary:
      "How Vite replaced Webpack in our stack and sped up our development.",
    type: "article",
    category: "Tooling",
    publishedAt: "2026-06-05T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000&auto=format&fit=crop",
    tags: ["Vite", "Tooling"],
    featured: false,
    content: `<p>The developer experience of Vite is unmatched. With native ES modules and esbuild, the server starts instantly.</p>`,
    articleData: {
      readTime: 3,
      authorProfile: {
        name: "Bekele",
        role: "Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Design thinker.",
      },
    },
  },
  {
    slug: "state-management-in-2026",
    title: "State Management in 2026",
    summary: "Do we still need Redux, or is Context enough?",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-05-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "State"],
    featured: false,
    content: `<p>The React ecosystem has shifted. For most applications, server state (like React Query) and local state (useState) cover everything. Global state managers are increasingly unnecessary.</p>`,
    articleData: {
      readTime: 5,
      authorProfile: {
        name: "Mulu",
        role: "Lead Engineer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        bio: "Tech architect.",
      },
    },
  },
  {
    slug: "building-accessible-forms",
    title: "Building Accessible Forms",
    summary: "A guide to form validation and UX that works for everyone.",
    type: "article",
    category: "Design",
    publishedAt: "2026-05-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    tags: ["Forms", "A11y"],
    featured: false,
    content: `<p>Forms are the primary way users interact with your application. They must be easy to understand, fill out, and recover from errors.</p>`,
    articleData: {
      readTime: 6,
      authorProfile: {
        name: "Bekele",
        role: "Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Design thinker.",
      },
    },
  },
  {
    slug: "docker-for-frontend-devs",
    title: "Docker for Frontend Developers",
    summary: "Why and how to containerize your React applications.",
    type: "article",
    category: "DevOps",
    publishedAt: "2026-04-15T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Docker", "DevOps"],
    featured: false,
    content: `<p>Docker provides consistency. It ensures that your app runs the same on your local machine, the CI server, and production.</p>`,
    articleData: {
      readTime: 7,
      authorProfile: {
        name: "Abayneh",
        role: "Ops",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
        bio: "Ops expert.",
      },
    },
  },
  {
    slug: "introduction-to-web-sockets",
    title: "Introduction to WebSockets",
    summary: "Building real-time features into your web apps.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-04-01T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    tags: ["WebSockets", "Real-time"],
    featured: false,
    content: `<p>HTTP is request-response. WebSockets allow for bi-directional, real-time communication between the client and server.</p>`,
    articleData: {
      readTime: 6,
      authorProfile: {
        name: "Mulu",
        role: "Engineer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        bio: "Tech architect.",
      },
    },
  },
  {
    slug: "the-cost-of-technical-debt",
    title: "The Cost of Technical Debt",
    summary: "Why cutting corners today will slow you down tomorrow.",
    type: "article",
    category: "Business",
    publishedAt: "2026-03-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    tags: ["Tech Debt", "Business"],
    featured: false,
    content: `<p>Technical debt is like financial debt. You borrow time now to ship faster, but you pay interest later in the form of slower development and more bugs.</p>`,
    articleData: {
      readTime: 5,
      authorProfile: {
        name: "Bekele",
        role: "Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Design thinker.",
      },
    },
  },
  {
    slug: "automating-with-github-actions",
    title: "Automating with GitHub Actions",
    summary: "Setting up CI/CD pipelines for your React projects.",
    type: "article",
    category: "DevOps",
    publishedAt: "2026-03-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop",
    tags: ["CI/CD", "GitHub"],
    featured: false,
    content: `<p>Automation removes human error. GitHub Actions make it easy to run tests and deploy your code automatically.</p>`,
    articleData: {
      readTime: 8,
      authorProfile: {
        name: "Abayneh",
        role: "Ops",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
        bio: "Ops expert.",
      },
    },
  },
  {
    slug: "mastering-css-grid",
    title: "Mastering CSS Grid",
    summary: "Building complex layouts with minimal code.",
    type: "article",
    category: "Design",
    publishedAt: "2026-02-25T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop",
    tags: ["CSS", "Grid"],
    featured: false,
    content: `<p>Flexbox is for 1-dimensional layouts. Grid is for 2-dimensional layouts.</p>`,
    articleData: {
      readTime: 4,
      authorProfile: {
        name: "Mulu",
        role: "Engineer",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
        bio: "Tech architect.",
      },
    },
  },
  {
    slug: "why-seo-matters-for-spas",
    title: "Why SEO Matters for SPAs",
    summary:
      "Overcoming the challenges of search engine indexing for React apps.",
    type: "article",
    category: "Marketing",
    publishedAt: "2026-02-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1000&auto=format&fit=crop",
    tags: ["SEO", "React"],
    featured: false,
    content: `<p>Single Page Applications (SPAs) are great for users, but can be difficult for search engines to crawl. Server-side rendering or static generation is often necessary.</p>`,
    articleData: {
      readTime: 6,
      authorProfile: {
        name: "Bekele",
        role: "Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Design thinker.",
      },
    },
  },
  {
    slug: "choosing-a-cloud-provider",
    title: "Choosing a Cloud Provider",
    summary: "AWS vs GCP vs Azure for startup teams.",
    type: "article",
    category: "Cloud",
    publishedAt: "2026-01-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    tags: ["AWS", "Cloud"],
    featured: false,
    content: `<p>All three major providers are excellent. The choice often comes down to team familiarity and specific service requirements.</p>`,
    articleData: {
      readTime: 9,
      authorProfile: {
        name: "Abayneh",
        role: "Ops",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
        bio: "Ops expert.",
      },
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
): BlogPost[] {
  return BLOG_POSTS.filter(
    (p) => p.slug !== currentSlug && p.category === category,
  ).slice(0, 3);
}
