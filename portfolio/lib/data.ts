// ─── Types ────────────────────────────────────────────────────────────────────

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: string; // icon name from react-icons
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface SkillItem {
  name: string;
  tooltip: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  color: "blue" | "cyan" | "purple" | "green" | "orange" | "pink";
  icon: string;
  skills: SkillItem[];
}

export type ProjectCategory = "all" | "android" | "flutter" | "ai-ml" | "webrtc" | "web3";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  categories: ProjectCategory[];
  techStack: string[];
  githubUrl?: string;
  featured?: boolean;
  featuredDetails?: FeaturedProjectDetails;
}

export interface FeaturedProjectDetails {
  tagline: string;
  keyFeatures: string[];
  architecture: string;
  challengesSolved: string[];
  impact: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: "full-time" | "freelance";
  bullets: string[];
  techStack: string[];
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: "gold" | "silver" | "bronze";
}

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/AsadAhmad01",
    icon: "FiGithub",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://linkedin.com/in/asad-abdullah-dev",
    icon: "FiLinkedin",
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:haalim376@gmail.com",
    icon: "FiMail",
  },
  {
    id: "linktree",
    label: "Portfolio",
    url: "https://linktr.ee/asad._.abdullah",
    icon: "FiExternalLink",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    url: "https://wa.me/923481400801",
    icon: "FiMessageCircle",
  },
];

// ─── About Stats ──────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: "4", suffix: "+", label: "Years Experience" },
  { value: "10", suffix: "+", label: "Production Apps" },
  { value: "5", label: "Specialized Domains" },
  { value: "4", label: "Company Awards" },
];

export const techDNA: string[] = [
  "Android", "Flutter", "Kotlin", "Dart", "Edge AI",
  "WebRTC", "Web3", "eSIM", "Jetpack Compose", "MediaPipe",
];

// ─── Bio ──────────────────────────────────────────────────────────────────────

export const bio = `Senior Mobile App Developer at ArhamSoft with 4+ years building production-grade Android and Flutter applications. I specialize in the intersection of cutting-edge technologies — on-device AI inference, real-time WebRTC communications, Web3/blockchain integrations, and eSIM provisioning — all delivered with clean architecture and measurable impact. Multiple ArhamSoft award recipient; passionate about engineering mobile experiences that scale.`;

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile",
    title: "Mobile Development",
    color: "blue",
    icon: "smartphone",
    skills: [
      { name: "Kotlin", tooltip: "Primary Android language" },
      { name: "Java", tooltip: "Legacy Android development" },
      { name: "Jetpack Compose", tooltip: "Modern declarative Android UI" },
      { name: "Flutter / Dart", tooltip: "Cross-platform mobile framework" },
      { name: "Android SDK", tooltip: "Core Android platform APIs" },
      { name: "Jetpack Components", tooltip: "Navigation, Room, WorkManager, etc." },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    color: "cyan",
    icon: "cpu",
    skills: [
      { name: "Google MediaPipe GenAI", tooltip: "On-device generative AI framework" },
      { name: "Gemma / Llama Models", tooltip: "Open-weight LLMs for mobile" },
      { name: "Qwen 2.5 LLM", tooltip: "On-device LLM for fintech AI" },
      { name: "On-Device Inference", tooltip: "Mobile-constrained AI execution" },
      { name: "RAG Engine", tooltip: "Retrieval-Augmented Generation" },
      { name: "RLHF", tooltip: "Reinforcement Learning from Human Feedback" },
      { name: "Vector Embeddings", tooltip: "Semantic representation of data" },
      { name: "Semantic Search", tooltip: "Meaning-based vector retrieval" },
      { name: "ML Kit", tooltip: "Google's on-device ML library" },
      { name: "TensorFlow Lite", tooltip: "Mobile-optimized ML inference" },
      { name: "Model Quantization", tooltip: "INT4/INT8 model size reduction" },
      { name: "SMS Parsing", tooltip: "46+ bank transaction extraction" },
      { name: "Prompt Engineering", tooltip: "LLM prompt design and optimization" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Patterns",
    color: "purple",
    icon: "layers",
    skills: [
      { name: "MVVM", tooltip: "Model-View-ViewModel pattern" },
      { name: "Clean Architecture", tooltip: "Domain-driven layered architecture" },
      { name: "MVP", tooltip: "Model-View-Presenter pattern" },
      { name: "MVI", tooltip: "Model-View-Intent unidirectional flow" },
      { name: "Repository Pattern", tooltip: "Data source abstraction layer" },
      { name: "SOLID Principles", tooltip: "Five OOP design principles" },
      { name: "DRY / KISS", tooltip: "Code quality philosophies" },
    ],
  },
  {
    id: "integrations",
    title: "Specialized Integrations",
    color: "green",
    icon: "zap",
    skills: [
      { name: "WebRTC", tooltip: "Real-time peer-to-peer communication" },
      { name: "JANUS Server", tooltip: "WebRTC gateway for VoIP" },
      { name: "Web3 / MetaMask", tooltip: "Ethereum wallet integration" },
      { name: "WalletConnect", tooltip: "Multi-chain wallet protocol" },
      { name: "eSIM (GSMA/RSP)", tooltip: "Remote SIM provisioning protocol" },
      { name: "Firebase Suite", tooltip: "Auth, Firestore, FCM, Analytics" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    color: "orange",
    icon: "database",
    skills: [
      { name: "Room", tooltip: "Android SQLite ORM" },
      { name: "SQLite", tooltip: "Embedded relational database" },
      { name: "Supabase", tooltip: "Open-source Firebase alternative" },
      { name: "Firestore", tooltip: "Firebase NoSQL cloud database" },
      { name: "RESTful APIs", tooltip: "HTTP API design and consumption" },
      { name: "Coroutines / Flow", tooltip: "Kotlin async programming" },
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    color: "pink",
    icon: "wrench",
    skills: [
      { name: "Git / GitHub / GitLab", tooltip: "Version control and CI/CD" },
      { name: "WorkManager", tooltip: "Reliable background task scheduling" },
      { name: "Hilt / Dagger", tooltip: "Dependency injection framework" },
      { name: "Retrofit", tooltip: "Type-safe HTTP client for Android" },
      { name: "FCM", tooltip: "Firebase Cloud Messaging push notifications" },
      { name: "Android Keystore", tooltip: "Hardware-backed key storage" },
      { name: "App Store Deployment", tooltip: "Google Play Store publishing" },
    ],
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: "arhamsoft-senior",
    company: "ArhamSoft Pvt. Ltd.",
    role: "Senior Android Developer",
    period: "Apr 2023 – Present",
    type: "full-time",
    bullets: [
      "Built AuraChat, an 100% on-device AI companion with RLHF, WhatsApp persona cloning, vector-based memory, and Gemma/Llama inference via MediaPipe GenAI",
      "Engineered Budget — AI Fintech app with on-device Qwen 2.5 LLM, custom RAG engine, hybrid OCR pipeline, and 46+ bank SMS format parsers",
      "Implemented SpeakerBus VoIP call center with WebRTC + JANUS server achieving sub-100ms call setup latency",
      "Integrated eSIM provisioning (GSMA/RSP) and Web3 crypto payments (MetaMask + WalletConnect) in Travel eSIM app",
      "Led architectural migration to Clean Architecture + MVVM, improving maintainability by 30%",
    ],
    techStack: ["Kotlin", "Jetpack Compose", "MediaPipe", "WebRTC", "eSIM", "Web3", "Hilt", "Room"],
  },
  {
    id: "arhamsoft-flutter",
    company: "ArhamSoft Pvt. Ltd.",
    role: "Flutter Developer",
    period: "Sep 2022 – Mar 2023",
    type: "full-time",
    bullets: [
      "Developed cross-platform Flutter features shipped to production on both Android and iOS",
      "Implemented Material Design M2/M3 components with custom theming and animation systems",
      "Integrated RESTful APIs and Riverpod state management for scalable feature development",
    ],
    techStack: ["Flutter", "Dart", "Riverpod", "Material Design", "REST APIs"],
  },
  {
    id: "arhamsoft-junior",
    company: "ArhamSoft Pvt. Ltd.",
    role: "Jr. Android Developer",
    period: "Oct 2021 – Aug 2022",
    type: "full-time",
    bullets: [
      "Built Android features using SDK, Jetpack Components, and MVVM architecture",
      "Integrated REST APIs with Retrofit and managed local state with Room database",
      "Implemented Firebase Authentication, Firestore, and FCM push notifications",
      "Received two ArhamSoft company awards for performance and dedication",
    ],
    techStack: ["Kotlin", "Android SDK", "Jetpack", "Firebase", "Retrofit", "Room"],
  },
  {
    id: "fiverr",
    company: "Fiverr",
    role: "Freelance Mobile Developer",
    period: "Apr 2020 – Oct 2021",
    type: "freelance",
    bullets: [
      "Delivered Android and mobile app projects for international clients across multiple industries",
      "Managed full project lifecycle from requirements gathering to App Store deployment",
      "Maintained 5-star ratings through clear communication and on-time delivery",
    ],
    techStack: ["Android", "Kotlin", "Java", "Firebase", "REST APIs"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "aurachat",
    name: "AuraChat",
    tagline: "AI Companion with RLHF",
    description:
      "100% offline AI companion with real-time RLHF learning, WhatsApp persona cloning, and vector-based long-term memory — all on-device.",
    image: "/assets/projects/aurachat.png",
    categories: ["all", "android", "ai-ml"],
    techStack: ["Kotlin", "MediaPipe GenAI", "Gemma/Llama", "Vector Embeddings", "RAG", "RLHF", "Jetpack Compose"],
    featured: true,
    featuredDetails: {
      tagline: "Privacy-first AI companion with RLHF and persona mirroring",
      keyFeatures: [
        "100% offline — all AI processing and data on-device, zero cloud dependency",
        "Real-time RLHF: user corrections update vector embeddings and semantic knowledge base instantly",
        "WhatsApp persona cloning: parses exported chat .txt to mirror communication styles",
        "Vector-based long-term memory with semantic search for contextual recall across sessions",
        "Premium glassmorphic UI with bento-box dashboard, tactile voice UX (STT + waveforms)",
        "Dynamic LLM parameter tuning studio (Temperature, Top-P, max tokens, system prompts)",
      ],
      architecture: "Clean Architecture + MVVM + UDF; modular persona engine with decoupled RAG, RLHF, and inference layers",
      challengesSolved: [
        "On-device inference within mobile memory constraints via INT4 model quantization",
        "Real-time vector recalculation on user feedback without blocking the UI thread",
        "WhatsApp text parsing without regex brittleness using semantic chunking",
      ],
      impact:
        "State-of-the-art privacy-first AI companion demonstrating production-grade edge AI capabilities on commodity Android hardware",
    },
  },
  {
    id: "budget",
    name: "Budget",
    tagline: "AI Fintech App",
    description:
      "On-device fintech AI with Qwen 2.5 LLM, custom RAG engine, OCR pipeline, and intelligent SMS parsing for 46+ bank formats.",
    image: "/assets/projects/budget.png",
    categories: ["all", "android", "ai-ml"],
    techStack: ["Kotlin", "MediaPipe", "Qwen 2.5", "RAG", "ML Kit", "Room", "WorkManager"],
  },
  {
    id: "speakerbus",
    name: "SpeakerBus",
    tagline: "VoIP Call Center",
    description:
      "Enterprise VoIP call center app with sub-100ms call setup via WebRTC and JANUS server, featuring real-time audio processing.",
    image: "/assets/projects/speakerbus.png",
    categories: ["all", "android", "webrtc"],
    techStack: ["Kotlin", "WebRTC", "JANUS", "WebSockets", "Jetpack Compose"],
  },
  {
    id: "esim",
    name: "Travel eSIM App",
    tagline: "eSIM + Web3 Payments",
    description:
      "Global travel connectivity with eSIM provisioning (GSMA/RSP) and Web3 crypto payments via MetaMask and WalletConnect.",
    image: "/assets/projects/esim.png",
    categories: ["all", "android", "web3"],
    techStack: ["Kotlin", "Jetpack Compose", "MetaMask", "WalletConnect", "eSIM", "GSMA/RSP"],
  },
  {
    id: "kiosks",
    name: "KIOSKS",
    tagline: "In-Store Navigation",
    description:
      "Indoor store navigation system with interactive floor maps, route optimization, and product location search via Google Maps API.",
    image: "/assets/projects/kiosks.png",
    categories: ["all", "android"],
    techStack: ["Kotlin", "Google Maps API", "Indoor Navigation", "Jetpack"],
  },
  {
    id: "bustracker",
    name: "University Bus Tracker",
    tagline: "Real-time GPS Tracking",
    description:
      "Full-featured university transit app with real-time GPS tracking, attendance management, fee collection, and FCM push alerts.",
    image: "/assets/projects/bustracker.png",
    categories: ["all", "android"],
    techStack: ["Kotlin", "Firebase", "FCM", "Google Maps", "Firestore"],
  },
  {
    id: "pixeldrape",
    name: "PixelDrape",
    tagline: "Wallpaper App",
    description:
      "Premium wallpaper app with glassmorphic UI, admin-curated content via Supabase, and smooth infinite scroll powered by Riverpod v2.",
    image: "/assets/projects/pixeldrape.png",
    categories: ["all", "flutter"],
    techStack: ["Flutter", "Riverpod v2", "Supabase", "PostgreSQL", "Dart"],
  },
  {
    id: "blight",
    name: "Blight",
    tagline: "Food Freshness Classifier",
    description:
      "On-device ML food freshness classifier with real-time TFLite inference, BLoC state management, and Clean Architecture.",
    image: "/assets/projects/blight.png",
    categories: ["all", "flutter", "ai-ml"],
    techStack: ["Flutter", "TFLite", "BLoC", "Drift", "Clean Architecture"],
  },
];

// ─── Awards ───────────────────────────────────────────────────────────────────

export const awards: Award[] = [
  {
    id: "shining-star-2024",
    title: "The Shining Star",
    issuer: "ArhamSoft Pvt. Ltd.",
    date: "March 2024",
    icon: "🏆",
    color: "gold",
  },
  {
    id: "rising-star-2024",
    title: "The Rising Star",
    issuer: "ArhamSoft Pvt. Ltd.",
    date: "March 2024",
    icon: "⭐",
    color: "silver",
  },
  {
    id: "shining-star-2022",
    title: "The Shining Star & Unmatched Dedication",
    issuer: "ArhamSoft Pvt. Ltd.",
    date: "March 2022",
    icon: "🏆",
    color: "gold",
  },
  {
    id: "rising-star-2022",
    title: "The Rising Star",
    issuer: "ArhamSoft Pvt. Ltd.",
    date: "August 2022",
    icon: "⭐",
    color: "silver",
  },
];

// ─── Hero Titles ──────────────────────────────────────────────────────────────

export const heroTitles: string[] = [
  "Senior Android Developer",
  "Flutter Engineer",
  "Edge AI / On-Device LLM",
  "AI Companion & RLHF Specialist",
  "WebRTC & Web3 Integrator",
];

export const heroTagline = "Building AI-Integrated Mobile Experiences That Scale";
