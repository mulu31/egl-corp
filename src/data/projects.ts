export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  type: "Internal Product" | "Concept" | "Platform" | "Client Work";
  role: string;
  timeline: string;
  status: "Live" | "In Progress" | "Archived";
  tech: string[];
  image: string;
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;

  problem: {
    challenge: string;
    audience: string;
    goal: string;
  };
  features: { title: string; desc: string }[];
  architecture: {
    overview: string;
    database: string;
    challenges: { challenge: string; solution: string }[];
  };
  results: {
    metrics: { label: string; value: string }[];
    takeaways: string[];
  };
  nextSteps: string[];
}

export const PROJECTS: readonly Project[] = [
  {
    slug: "enterprise-erp-platform",
    title: "Custom Manufacturing ERP",
    tagline: "A unified resource planning system replacing four legacy tools.",
    category: "Business Systems",
    description:
      "A comprehensive enterprise resource planning system built for a mid-sized manufacturing firm. The platform integrates inventory management, employee scheduling, automated payroll, and raw material procurement into a single unified dashboard.",
    type: "Client Work",
    role: "Full-Stack Developer",
    timeline: "3 Months (Jan 2026 – Mar 2026)",
    status: "Live",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "#",
    problem: {
      challenge:
        "The client was relying on four disconnected systems (spreadsheets, legacy desktop apps, and paper logs) to manage inventory and payroll, leading to severe data silos and costly inventory errors.",
      audience:
        "Factory floor managers, HR administrators, and C-level executives.",
      goal: "To build a single source of truth for all operational data, reducing inventory counting time by 80% and eliminating payroll discrepancies.",
    },
    features: [
      {
        title: "Real-time Inventory Sync",
        desc: "Live tracking of raw materials and finished goods across multiple warehouse locations.",
      },
      {
        title: "Automated Payroll Engine",
        desc: "Calculation of employee hours, overtime, and tax deductions based on factory shift logs.",
      },
      {
        title: "Role-Based Access Control",
        desc: "Strict permission tiers for floor workers, managers, and executives.",
      },
    ],
    architecture: {
      overview:
        "A monolithic Node.js backend serving a React SPA. The database is hosted on a managed PostgreSQL instance with automated daily backups.",
      database:
        "Strictly normalized to 3NF. Prisma ORM is used for type-safe database access. Key entities include Employee, ShiftLog, InventoryItem, and PurchaseOrder.",
      challenges: [
        {
          challenge:
            "Concurrent updates during shift changes caused data locks.",
          solution:
            "Implemented optimistic UI updates on the frontend and PostgreSQL row-level locking on the backend to handle 500+ simultaneous writes.",
        },
        {
          challenge: "Legacy payroll CSV exports were malformed.",
          solution:
            "Built a custom parsing pipeline using PapaParse to sanitize and validate historical data before migration.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Inventory Errors", value: "-95%" },
        { label: "Payroll Processing", value: "2 Days -> 2 Hrs" },
        { label: "User Adoption", value: "100% in 2 weeks" },
      ],
      takeaways: [
        "Gained deep experience in database transaction isolation levels and concurrency handling.",
      ],
    },
    nextSteps: [
      "Develop a mobile app for factory floor workers to scan barcodes directly.",
      "Integrate machine telemetry data for predictive maintenance.",
    ],
  },
  {
    slug: "healthcare-patient-portal",
    title: "Healthcare Patient Portal",
    tagline: "A secure, HIPAA-compliant portal for a regional clinic network.",
    category: "Web Development",
    description:
      "A secure, HIPAA-compliant patient portal designed for a regional clinic network. The application allows patients to schedule appointments, view lab results, request prescription refills, and securely message their doctors, significantly reducing administrative call volume.",
    type: "Client Work",
    role: "Frontend Engineer",
    timeline: "2 Months (Feb 2026 – Apr 2026)",
    status: "Live",
    tech: ["Vite", "React Router", "Tailwind", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "#",
    problem: {
      challenge:
        "The clinic's phone lines were overwhelmed with routine requests for lab results and appointment scheduling, causing long wait times for urgent calls.",
      audience: "Patients of all ages and clinic administrative staff.",
      goal: "Shift 60% of routine administrative tasks to a self-service portal, freeing up staff to handle urgent patient needs.",
    },
    features: [
      {
        title: "Appointment Scheduling",
        desc: "Real-time availability syncing with doctor calendars.",
      },
      {
        title: "Secure Messaging",
        desc: "End-to-end encrypted messaging between patients and care providers.",
      },
      {
        title: "Lab Results Viewer",
        desc: "Clear, accessible presentation of complex medical data.",
      },
    ],
    architecture: {
      overview:
        "A React frontend communicating with a third-party healthcare API (Epic Systems) via a secure API gateway.",
      database:
        "No patient data is stored locally; the app acts as a secure, authenticated proxy to the external EMR.",
      challenges: [
        {
          challenge: "Strict HIPAA compliance required complex authentication.",
          solution:
            "Implemented OAuth 2.0 with PKCE and biometric 2FA for all patient logins.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Call Volume", value: "-45%" },
        { label: "Patient Satisfaction", value: "4.8/5" },
      ],
      takeaways: [
        "Learned how to integrate with legacy SOAP APIs and present data in a modern, user-friendly way.",
      ],
    },
    nextSteps: [
      "Add video telehealth capabilities.",
      "Integrate wearable data (Apple Health, Fitbit).",
    ],
  },
  {
    slug: "logistics-routing-api",
    title: "Logistics Routing API",
    tagline: "High-concurrency routing engine for a delivery startup.",
    category: "Integrations & Automation",
    description:
      "A highly concurrent routing API built for a delivery startup. The system ingests hundreds of delivery coordinates, calculates the most efficient multi-stop routes accounting for real-time traffic, and dispatches automated SMS updates to customers. Engineered to handle high throughput with minimal latency.",
    type: "Platform",
    role: "Backend Engineer",
    timeline: "4 Months (Oct 2025 – Feb 2026)",
    status: "Live",
    tech: ["Go", "Redis", "PostgreSQL", "Google Maps API"],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    ],
    githubUrl: "#",
    problem: {
      challenge:
        "The startup's manual dispatching system couldn't handle more than 50 orders per day without errors, severely limiting their growth.",
      audience: "Logistics dispatchers and delivery drivers.",
      goal: "Build an automated routing engine capable of processing 1,000+ deliveries per hour with zero manual intervention.",
    },
    features: [
      {
        title: "Route Optimization",
        desc: "Calculates the shortest path for multiple stops using the traveling salesman algorithm.",
      },
      {
        title: "Real-time Traffic",
        desc: "Integrates with Google Maps API to account for live traffic conditions.",
      },
      {
        title: "Webhook Notifications",
        desc: "Alerts drivers and customers at each delivery milestone.",
      },
    ],
    architecture: {
      overview:
        "Written in Go for extreme performance. Uses Redis for caching frequent geographic queries and PostgreSQL for persistent order history.",
      database:
        "PostgreSQL with PostGIS extension for spatial querying and geofencing.",
      challenges: [
        {
          challenge: "Third-party map API rate limits.",
          solution:
            "Built a Redis caching layer that reduced external API calls by 70% by caching common route segments.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Orders Processed", value: "1,200/Hr" },
        { label: "Avg Route Time", value: "-18%" },
      ],
      takeaways: [
        "Mastered concurrency patterns in Go and spatial database indexing.",
      ],
    },
    nextSteps: [
      "Add machine learning to predict delivery times based on historical data.",
      "Develop a driver-facing mobile app.",
    ],
  },
  {
    slug: "agriculture-supply-tracker",
    title: "Agriculture Supply Tracker",
    tagline: "Offline-first mobile app for remote field agents.",
    category: "Mobile Apps",
    description:
      "A cross-platform mobile application used by field agents to track crop yields, monitor supply chain movement, and log farmer data in remote areas with limited internet connectivity. The app utilizes offline-first architecture with background sync to ensure no data is lost.",
    type: "Client Work",
    role: "Mobile Developer",
    timeline: "3 Months (May 2026 – Jul 2026)",
    status: "Live",
    tech: ["Flutter", "SQLite", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=1000&auto=format&fit=crop",
    ],
    problem: {
      challenge:
        "Field agents in rural areas often lacked internet access, forcing them to record data on paper and re-enter it days later, leading to lost and inaccurate data.",
      audience: "Agricultural field agents and farm managers.",
      goal: "Create a mobile experience that works flawlessly offline and syncs seamlessly when a connection is restored.",
    },
    features: [
      {
        title: "Offline Data Capture",
        desc: "Full CRUD operations available without an internet connection.",
      },
      {
        title: "Background Sync",
        desc: "Automatically uploads queued data when the device regains connectivity.",
      },
      {
        title: "GPS Tagging",
        desc: "Automatically attaches geographic coordinates to every farm logged.",
      },
    ],
    architecture: {
      overview:
        "Flutter frontend compiled to native iOS/Android. Local SQLite database acts as the source of truth, syncing with Firebase Cloud Firestore.",
      database:
        "SQLite local. Firebase handles conflict resolution on the server side.",
      challenges: [
        {
          challenge:
            "Handling sync conflicts when multiple agents edit the same farm.",
          solution:
            "Implemented a 'last write wins' strategy combined with a conflict alert for the administrator.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Data Accuracy", value: "+80%" },
        { label: "Agent Time Saved", value: "2 Hrs/Day" },
      ],
      takeaways: [
        "Deepened expertise in local-first mobile architecture and offline sync patterns.",
      ],
    },
    nextSteps: [
      "Add barcode scanning for crop bags.",
      "Build a web dashboard for farm managers to view aggregated data.",
    ],
  },
  {
    slug: "retail-analytics-dashboard",
    title: "Retail Analytics Dashboard",
    tagline: "Internal BI tool for a 15-location retail chain.",
    category: "Business Systems",
    description:
      "An internal business intelligence tool developed for a retail chain. It aggregates POS data across 15 store locations and visualizes sales trends, inventory turnover, and employee performance in real-time, allowing management to make data-driven decisions quickly.",
    type: "Internal Product",
    role: "UI/UX Designer & Frontend Dev",
    timeline: "2 Months (Aug 2025 – Oct 2025)",
    status: "Archived",
    tech: ["Vue.js", "D3.js", "Python", "Snowflake"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1000&auto=format&fit=crop",
    ],
    problem: {
      challenge:
        "Store managers were exporting CSV files from cash registers and manually compiling reports every Monday morning.",
      audience: "Regional managers and store owners.",
      goal: "Provide real-time visibility into store performance and automate daily reporting.",
    },
    features: [
      {
        title: "Custom D3 Charts",
        desc: "Interactive sales graphs showing trends over time.",
      },
      {
        title: "Inventory Alerts",
        desc: "Automated low-stock warnings based on recent sales velocity.",
      },
    ],
    architecture: {
      overview:
        "Vue.js frontend pulling data from a Python (FastAPI) backend, querying a Snowflake data warehouse.",
      database: "Snowflake Data Warehouse with a star schema.",
      challenges: [
        {
          challenge:
            "Rendering large datasets (100k+ points) caused browser crashes.",
          solution:
            "Implemented data aggregation at the database level and virtualized rendering on the frontend.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Report Gen Time", value: "4 Hrs -> 0" },
        { label: "Inventory Waste", value: "-12%" },
      ],
      takeaways: [
        "Learned the importance of pre-aggregating data before sending it to the client.",
      ],
    },
    nextSteps: [
      "Integrate with the POS system for real-time streaming data.",
      "Move to React for better ecosystem support.",
    ],
  },
  {
    slug: "e-learning-lms-concept",
    title: "E-Learning LMS Concept",
    tagline: "Architectural exploration of a modern learning platform.",
    category: "Web Development",
    description:
      "An architectural exploration of a modern Learning Management System. Designed for high-concurrency video streaming, interactive quizzes, and integrated student-teacher messaging. The concept focuses on modular course building and accessible video playback interfaces.",
    type: "Concept",
    role: "Full-Stack Developer",
    timeline: "6 Weeks (Nov 2026 – Dec 2026)",
    status: "In Progress",
    tech: ["Next.js", "Tailwind", "Prisma"],
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    ],
    problem: {
      challenge:
        "Existing LMS platforms are either too expensive or lack accessibility features.",
      audience: "Independent educators and small training organizations.",
      goal: "Build a scalable, open-source-friendly LMS template with excellent accessibility.",
    },
    features: [
      {
        title: "Video Hosting",
        desc: "Integrated Mux video API for secure, fast streaming.",
      },
      {
        title: "Interactive Quizzes",
        desc: "Inline quizzes that track student progress.",
      },
    ],
    architecture: {
      overview:
        "Next.js App Router with server components for performance. Prisma ORM with PostgreSQL.",
      database:
        "PostgreSQL with a modular schema for Courses, Modules, Lessons, and UserProgress.",
      challenges: [
        {
          challenge:
            "Handling video progress tracking without overwhelming the server.",
          solution:
            "Throttled progress updates using a custom React hook that batches writes every 10 seconds.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Time to Build", value: "6 Weeks" },
      ],
      takeaways: [
        "Explored the limits of server-side rendering with complex video interactions.",
      ],
    },
    nextSteps: [
      "Add a certificate generation feature.",
      "Integrate Stripe for course payments.",
    ],
  },
  {
    slug: "financial-audit-automation",
    title: "Financial Audit Automation",
    tagline: "Automating transaction reconciliation for an accounting firm.",
    category: "Integrations & Automation",
    description:
      "An automated workflow tool that connects a company's accounting software to external banking APIs. It automatically pulls transaction data, flags anomalies based on predefined rules, and generates audit-ready PDF reports, reducing manual reconciliation time by hours.",
    type: "Internal Product",
    role: "Automation Engineer",
    timeline: "2 Months (Sep 2025 – Nov 2025)",
    status: "Live",
    tech: ["Node.js", "Express", "Plaid API"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    ],
    problem: {
      challenge:
        "Accountants spent 40% of their week manually matching bank statements to ledger entries.",
      audience: "Forensic accountants and auditors.",
      goal: "Automate the matching process and flag discrepancies for human review.",
    },
    features: [
      {
        title: "Bank Integration",
        desc: "Secure connection to 10,000+ banks via Plaid.",
      },
      {
        title: "Anomaly Detection",
        desc: "Rule-based engine that flags duplicate or suspicious transactions.",
      },
    ],
    architecture: {
      overview:
        "Node.js server running as a cron job. Extracts data from QuickBooks and Plaid, runs matching logic, and saves results to a PostgreSQL database.",
      database: "PostgreSQL storing ledger_entries and bank_transactions.",
      challenges: [
        {
          challenge: "Dealing with API rate limits from Plaid.",
          solution:
            "Implemented exponential backoff and a queue system using BullMQ.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Manual Work", value: "-70%" },
        { label: "Audit Accuracy", value: "+99%" },
      ],
      takeaways: [
        "Strengthened skills in API orchestration and background job processing.",
      ],
    },
    nextSteps: [
      "Add support for multi-currency transactions.",
      "Develop a custom reporting dashboard.",
    ],
  },
  {
    slug: "real-estate-listing-platform",
    title: "Real Estate Listing Platform",
    tagline: "A modern, map-based marketplace for local properties.",
    category: "Web Development",
    description:
      "A public-facing real estate marketplace featuring advanced map-based search, dynamic filtering by property features, and virtual 360-degree tour integration. The platform includes a custom CMS allowing agents to easily upload and manage listings without technical assistance.",
    type: "Client Work",
    role: "Lead Frontend Developer",
    timeline: "4 Months (Jun 2025 – Oct 2025)",
    status: "Live",
    tech: ["React", "Mapbox", "Sanity.io"],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "#",
    problem: {
      challenge:
        "The client's old website was slow, not mobile-responsive, and difficult for agents to update.",
      audience: "Home buyers, renters, and real estate agents.",
      goal: "Create a fast, highly visual search experience that reduces the time it takes to find a property.",
    },
    features: [
      {
        title: "Map-based Search",
        desc: "Draw custom boundaries on the map to find properties within a specific area.",
      },
      {
        title: "Virtual Tours",
        desc: "Embedded Matterport 3D tours for every high-end listing.",
      },
    ],
    architecture: {
      overview:
        "React SPA hosted on Vercel. Sanity.io acts as a headless CMS for content management.",
      database: "Sanity Content Lake, queried via GROQ.",
      challenges: [
        {
          challenge: "Loading hundreds of map pins caused performance lag.",
          solution:
            "Implemented marker clustering and lazy-loading of property details on hover.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Page Speed", value: "2.1s LCP" },
        { label: "Leads Generated", value: "+35%" },
      ],
      takeaways: ["Mastered Mapbox GL JS and headless CMS integration."],
    },
    nextSteps: [
      "Add a mortgage calculator widget.",
      "Implement saved search email alerts.",
    ],
  },
  {
    slug: "hotel-booking-engine",
    title: "Hotel Booking Engine",
    tagline: "Direct booking platform to bypass third-party agencies.",
    category: "Web Development",
    description:
      "A direct-booking engine integrated into a boutique hotel's website, bypassing third-party travel agencies. It includes real-time room availability, dynamic pricing based on seasonality, and secure payment processing, giving the hotel full control over their margins and customer data.",
    type: "Client Work",
    role: "Full-Stack Developer",
    timeline: "3 Months (Jan 2025 – Apr 2025)",
    status: "Live",
    tech: ["Vite", "Stripe API", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1542314831-c6a4d1424b94?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1542314831-c6a4d1424b94?q=80&w=1000&auto=format&fit=crop",
    ],
    liveUrl: "#",
    problem: {
      challenge:
        "The hotel was losing 20% of its revenue to Online Travel Agencies (OTAs) like Booking.com.",
      audience: "Direct hotel guests.",
      goal: "Provide a seamless, trustworthy booking experience on the hotel's own website.",
    },
    features: [
      {
        title: "Real-time Availability",
        desc: "Prevents double-booking by syncing with the hotel's property management system.",
      },
      {
        title: "Dynamic Pricing",
        desc: "Adjusts room rates automatically based on demand and seasonality.",
      },
    ],
    architecture: {
      overview:
        "Vite React frontend. Node.js backend handling Stripe webhooks and PMS synchronization.",
      database:
        "PostgreSQL with tables for Rooms, Reservations, and PricingRules.",
      challenges: [
        {
          challenge:
            "Ensuring payment webhooks were not missed during server restarts.",
          solution:
            "Used a robust message queue (RabbitMQ) to capture and process Stripe events asynchronously.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Direct Bookings", value: "+50%" },
        { label: "OTA Commission Saved", value: "$40k/Year" },
      ],
      takeaways: [
        "Learned the intricacies of payment processing and webhook security.",
      ],
    },
    nextSteps: [
      "Integrate with Expedia and Booking.com APIs to centralize inventory.",
      "Add a loyalty program feature.",
    ],
  },
  {
    slug: "hr-onboarding-system",
    title: "HR Onboarding System",
    tagline: "Automated workflows for a seamless new hire experience.",
    category: "Business Systems",
    description:
      "A tailored workflow application for a growing tech company to manage new employee onboarding. The system automates task assignments for IT, HR, and managers, serves as a document repository for contracts, and provides a welcoming dashboard for new hires.",
    type: "Internal Product",
    role: "Product Designer",
    timeline: "6 Weeks (Mar 2025 – May 2025)",
    status: "Archived",
    tech: ["React", "Firebase", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
    ],
    problem: {
      challenge:
        "Onboarding was managed via scattered email threads, causing IT equipment delays and missed paperwork.",
      audience: "HR managers, IT administrators, and new hires.",
      goal: "Create a single dashboard to track and automate every step of the onboarding process.",
    },
    features: [
      {
        title: "Task Automation",
        desc: "Triggers IT setup requests automatically when a contract is signed.",
      },
      {
        title: "Document Hub",
        desc: "Secure storage for signed contracts and policy agreements.",
      },
    ],
    architecture: {
      overview:
        "React frontend with Firebase Authentication and Firestore database for real-time updates.",
      database:
        "Firestore NoSQL document structure optimized for real-time task lists.",
      challenges: [
        {
          challenge: "Enforcing access control across departments.",
          solution:
            "Implemented granular Firebase Security Rules to restrict data visibility based on user roles.",
        },
      ],
    },
    results: {
      metrics: [
        { label: "Onboarding Time", value: "-3 Days" },
        { label: "New Hire Satisfaction", value: "95%" },
      ],
      takeaways: [
        "Gained experience in designing for internal operations and handling role-based permissions.",
      ],
    },
    nextSteps: [
      "Add an e-signature integration for contracts.",
      "Automate offboarding workflows.",
    ],
  },
];
