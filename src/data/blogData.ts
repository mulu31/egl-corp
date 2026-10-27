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
  summary: string;
  type: ContentType;
  category: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
  content: string; // HTML/Markdown string

  eventData?: {
    startAt: string;
    endAt?: string;
    location: string;
    status: EventStatus;
    registrationUrl?: string;
    details: EventDetailData;
  };
  articleData?: ArticleDetailData;
}

// ----------------------------------------------------------------------
// DEVELOPMENT FIXTURES
// ----------------------------------------------------------------------

export const BLOG_POSTS: readonly BlogPost[] = [
  // --- UPCOMING EVENT (Matches Screenshot Data) ---
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
      "<p>Get ready for an unforgettable day of sports, unity, and community bonding at the Bishoftu Sports Stadium.</p>",
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
  // --- ARTICLE 1 (Featured) ---
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
      <p>Many teams rush to build a generic component library before they even understand their domain. This leads to bloated components with 20 props, trying to handle every edge case.</p>
      <p>Instead, start with page-specific components and promote them to the shared directory only when they are used in at least three distinct contexts.</p>
      <blockquote>Good architecture is boring. It is predictable, heavily typed, and easy for a new developer to read.</blockquote>
      <h2>Enforcing Boundaries</h2>
      <p>Use ESLint rules to prevent deep relative imports. Enforce the use of path aliases, and group code by feature rather than by file type.</p>
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
  // --- 23 MORE FIXTURES ---
  {
    slug: "p1",
    title: "Mastering Tailwind v4",
    summary: "How the new engine changes CSS architecture.",
    type: "article",
    category: "Design",
    publishedAt: "2026-10-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800",
    tags: ["CSS", "Tailwind"],
    featured: false,
    content: "<p>Tailwind v4 is fast...</p>",
    articleData: {
      readTime: 4,
      authorProfile: {
        name: "Bekele",
        role: "Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Bekele focuses on bridging business and tech.",
      },
    },
  },
  {
    slug: "p2",
    title: "API Security Best Practices",
    summary: "Securing your backend endpoints.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-09-28T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    tags: ["Security", "API"],
    featured: false,
    content: "<p>Security is paramount...</p>",
    articleData: {
      readTime: 8,
      authorProfile: {
        name: "Abayneh",
        role: "Operations",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
        bio: "Abayneh ensures secure and seamless delivery.",
      },
    },
  },
  {
    slug: "p3",
    title: "The Rise of Edge Computing",
    summary: "Why moving logic closer to users matters.",
    type: "article",
    category: "Cloud",
    publishedAt: "2026-09-15T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    tags: ["Cloud", "Edge"],
    featured: false,
    content: "<p>Edge is the future...</p>",
    articleData: {
      readTime: 5,
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
    slug: "p4",
    title: "UI/UX Trends 2027",
    summary: "Looking ahead at interface design.",
    type: "article",
    category: "Design",
    publishedAt: "2026-09-01T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    tags: ["UI", "UX"],
    featured: false,
    content: "<p>Design trends are shifting...</p>",
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
    slug: "p5",
    title: "Migrating Legacy Databases",
    summary: "A guide to zero-downtime migration.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-08-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
    tags: ["Database", "Migration"],
    featured: false,
    content: "<p>Migrating is hard...</p>",
    articleData: {
      readTime: 10,
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
    slug: "p6",
    title: "Automating Workflows with Telegram",
    summary: "Building custom bots for internal tools.",
    type: "article",
    category: "Automation",
    publishedAt: "2026-08-05T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
    tags: ["Telegram", "Bots"],
    featured: false,
    content: "<p>Bots are powerful...</p>",
    articleData: {
      readTime: 5,
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
    slug: "p7",
    title: "Understanding React Server Components",
    summary: "How RSC changes the game.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-07-22T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    tags: ["React", "RSC"],
    featured: false,
    content: "<p>RSC is a paradigm shift...</p>",
    articleData: {
      readTime: 7,
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
    slug: "p8",
    title: "The Importance of Accessibility",
    summary: "Building for everyone.",
    type: "article",
    category: "Design",
    publishedAt: "2026-07-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800",
    tags: ["A11y", "Design"],
    featured: false,
    content: "<p>A11y is essential...</p>",
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
    slug: "p9",
    title: "Effective Code Reviews",
    summary: "How to review code better.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-06-15T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800",
    tags: ["Culture", "Code Review"],
    featured: false,
    content: "<p>Code reviews should be kind...</p>",
    articleData: {
      readTime: 5,
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
    slug: "p10",
    title: "Scaling Node.js Microservices",
    summary: "Handling high traffic.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-06-01T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    tags: ["Node.js", "Microservices"],
    featured: false,
    content: "<p>Microservices scale...</p>",
    articleData: {
      readTime: 9,
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
    slug: "p11",
    title: "Choosing the Right CMS",
    summary: "Headless vs Traditional.",
    type: "article",
    category: "Web Dev",
    publishedAt: "2026-05-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
    tags: ["CMS", "Web"],
    featured: false,
    content: "<p>Headless is flexible...</p>",
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
    slug: "p12",
    title: "Testing React Components",
    summary: "A guide to Vitest and Testing Library.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-05-05T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    tags: ["Testing", "React"],
    featured: false,
    content: "<p>Testing is critical...</p>",
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
    slug: "p13",
    title: "The Power of CSS Grid",
    summary: "Building complex layouts easily.",
    type: "article",
    category: "Design",
    publishedAt: "2026-04-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800",
    tags: ["CSS", "Layout"],
    featured: false,
    content: "<p>Grid is powerful...</p>",
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
    slug: "p14",
    title: "Understanding GraphQL",
    summary: "Why it might replace REST.",
    type: "article",
    category: "Web Dev",
    publishedAt: "2026-04-05T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    tags: ["GraphQL", "API"],
    featured: false,
    content: "<p>GraphQL solves over-fetching...</p>",
    articleData: {
      readTime: 8,
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
    slug: "p15",
    title: "Optimizing Docker Images",
    summary: "Making containers smaller.",
    type: "article",
    category: "DevOps",
    publishedAt: "2026-03-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=800",
    tags: ["Docker", "DevOps"],
    featured: false,
    content: "<p>Smaller images deploy faster...</p>",
    articleData: {
      readTime: 6,
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
    slug: "p16",
    title: "Functional Programming in JS",
    summary: "Using map, filter, and reduce.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-03-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    tags: ["JavaScript", "FP"],
    featured: false,
    content: "<p>FP reduces bugs...</p>",
    articleData: {
      readTime: 5,
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
    slug: "p17",
    title: "Modern Authentication",
    summary: "JWT vs Session Cookies.",
    type: "article",
    category: "Security",
    publishedAt: "2026-02-25T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    tags: ["Auth", "Security"],
    featured: false,
    content: "<p>Auth is tricky...</p>",
    articleData: {
      readTime: 7,
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
    slug: "p18",
    title: "Building a Design System",
    summary: "From Figma to Code.",
    type: "article",
    category: "Design",
    publishedAt: "2026-02-10T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    tags: ["Design System", "UI"],
    featured: false,
    content: "<p>Design systems align teams...</p>",
    articleData: {
      readTime: 6,
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
    slug: "p19",
    title: "Caching Strategies",
    summary: "Redis vs Memcached.",
    type: "article",
    category: "Engineering",
    publishedAt: "2026-01-20T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
    tags: ["Caching", "Backend"],
    featured: false,
    content: "<p>Caching saves DB cycles...</p>",
    articleData: {
      readTime: 5,
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
    slug: "p20",
    title: "Web Performance Metrics",
    summary: "Understanding LCP, CLS, and INP.",
    type: "article",
    category: "Web Dev",
    publishedAt: "2026-01-05T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    tags: ["Performance", "SEO"],
    featured: false,
    content: "<p>Core Web Vitals matter...</p>",
    articleData: {
      readTime: 8,
      authorProfile: {
        name: "Bekele",
        role: "Strategist",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
        bio: "Design thinker.",
      },
    },
  },
  // --- PAST EVENT ---
  {
    slug: "past-tech-meetup-2025",
    title: "Annual Developer Meetup 2025",
    summary: "A recap of our previous year's community gathering.",
    type: "event",
    category: "Events",
    publishedAt: "2025-11-15T10:00:00Z",
    coverImage:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1000&auto=format&fit=crop",
    tags: ["Community", "Meetup"],
    featured: false,
    content: "<p>Thanks to everyone who joined us!</p>",
    eventData: {
      startAt: "2025-11-15T18:00:00Z",
      location: "Bishoftu Cultural Center",
      status: "past",
      details: {
        agenda: [
          { time: "6:00 PM", title: "Networking", desc: "Drinks and snacks." },
        ],
        speakers: [
          {
            name: "Mulu",
            role: "Host",
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
