export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Data Science & Engineering" | "Full-Stack & AI" | "Security";
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  coverImage?: string;
  featured: boolean;
}

export type SkillCategoryType = "Languages" | "Tools/Platforms" | "Frameworks" | "Soft Skills";

export interface SkillItem {
  name: string;
  category: SkillCategoryType;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 1-100
    categoryBadge: string;
    description: string;
  }[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  credentialId?: string;
  imageUrl?: string;
  skills: string[];
  grade?: string;
  type?: "Certificates" | "Certifications";
  iconType: "cloud" | "database" | "ai" | "code" | "analytics" | "security";
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  score: string;
  scoreType: "CGPA" | "Percentage";
  location: string;
  highlights: string[];
  courses: string[];
}

export const PERSONAL_INFO = {
  name: "Shubhangi Dixit",
  role: "Data Science & Data Engineering Specialist",
  roleSecondary: "Full-Stack AI Engineer",
  tagline: "Building data-driven applications, data pipelines, and AI-powered web solutions.",
  bio: "Computer Science student exploring data engineering, AI, and full-stack development through hands-on projects. Worked on large messy datasets, web applications, and AI integrations. Interested in building practical software that solves real problems and learning through continuous experimentation.",
  email: "shubhangidixitlko@gmail.com",
  phone: "+91 9453921211",
  location: "Lucknow & Punjab, India",
  github: "https://github.com/Shubhangidixit01",
  linkedin: "https://linkedin.com/in/shubhangidixit01",
  stats: [
    { label: "Data Records Processed", value: "72.5K+", suffix: "" },
    { label: "Projects", value: "3", suffix: "" },
    { label: "Certifications", value: "10", suffix: "" },
    { label: "B.Tech CGPA", value: "8.04", suffix: "/10" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Engineering & Pipelines",
    description: "Designing end-to-end ingestion, schema modeling, automated ETL processes, and reliable data pipelines.",
    iconName: "Database",
    skills: [
      { name: "ETLAutomation", level: 90, categoryBadge: "Pipelines", description: "Automated extraction, cleanup, schema normalization, and loading pipelines." },
      { name: "Data Transformation", level: 92, categoryBadge: "Data Ops", description: "Reshaping complex semi-structured datasets, vectorization, aggregation." },
      { name: "SQL (MySQL, SQLite)", level: 88, categoryBadge: "Databases", description: "Optimized indexing, subqueries, CTEs, window functions, and integrity constraints." },
      { name: "Pandas & NumPy", level: 94, categoryBadge: "Engineering", description: "High-throughput data manipulation, vectorized computations, series processing." },
      { name: "Data Pipelines", level: 86, categoryBadge: "Architecture", description: "Scheduled data feeds, pipeline orchestrations, fault-tolerant batch flows." },
      { name: "Python", level: 95, categoryBadge: "Core", description: "Production script design, OOP architectures, performance profiling." },
    ],
  },
  {
    title: "Data Science & Analytics",
    description: "Statistical modeling, exploratory data analysis, visual storytelling, and business intelligence.",
    iconName: "BarChart3",
    skills: [
      { name: "PowerBI Desktop", level: 88, categoryBadge: "BI Tool", description: "DAX calculations, relational data modeling, executive reporting dashboards." },
      { name: "Tableau Public", level: 85, categoryBadge: "BI Tool", description: "Interactive geographic maps, calculated fields, dashboard storyboards." },
      { name: "MS Excel Advanced", level: 90, categoryBadge: "Analysis", description: "Pivot tables, advanced lookup functions, regression modeling, macros." },
      { name: "Scikit-Learn", level: 84, categoryBadge: "Machine Learning", description: "Predictive modeling, regression, clustering, hyperparameter tuning." },
      { name: "Seaborn & Matplotlib", level: 90, categoryBadge: "Visualization", description: "Multi-variate distribution plots, correlation matrices, publication visuals." },
      { name: "Data Wrangling", level: 92, categoryBadge: "Analytics", description: "Handling missing values, outlier detection, encoding, normalization." },
    ],
  },
  {
    title: "Web & AI Engineering",
    description: "Building responsive, modern user interfaces with resilient backends and generative AI integrations.",
    iconName: "Cpu",
    skills: [
      { name: "React.js", level: 90, categoryBadge: "Frontend", description: "Hooks, component state architecture, virtual DOM optimization, animations." },
      { name: "Node.js & Express.js", level: 88, categoryBadge: "Backend", description: "RESTful API design, middleware pipelines, error handling, microservices." },
      { name: "Gemini API", level: 92, categoryBadge: "Generative AI", description: "Prompt engineering, function calling, multimodal token streaming, agents." },
      { name: "Flask", level: 85, categoryBadge: "Python Web", description: "Lightweight API servers, Jinja templates, WSGI deployment patterns." },
      { name: "JWT & Security Auth", level: 88, categoryBadge: "Security", description: "Stateless authentication, token rotation, bcrypt hashing, 2FA workflows." },
      { name: "Docker (Basic)", level: 75, categoryBadge: "DevOps", description: "Containerizing web services, Dockerfile scripting, multi-stage builds." },
      { name: "Git & GitHub", level: 92, categoryBadge: "VCS", description: "Branching strategies, collaborative pull requests, merge conflict resolution." },
      { name: "REST APIs", level: 92, categoryBadge: "Networking", description: "Endpoint standardization, rate limiting, status codes, documentation." },
    ],
  },
  {
    title: "Programming Languages",
    description: "Multi-paradigm foundation enabling algorithm optimization and versatile software design.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 95, categoryBadge: "Multi-purpose", description: "Data science, machine learning, web scraping, backend frameworks." },
      { name: "Java", level: 88, categoryBadge: "Enterprise", description: "Object-Oriented Programming, collections framework, DSA, memory lifecycle." },
      { name: "JavaScript (ES6+)", level: 90, categoryBadge: "Web", description: "Asynchronous programming, event loops, DOM manipulation, modern syntax." },
      { name: "C++", level: 82, categoryBadge: "Systems/DSA", description: "Standard Template Library (STL), pointers, algorithms, computational speed." },
      { name: "C", level: 80, categoryBadge: "Low-level", description: "Memory management, data structures, pointer arithmetic." },
      { name: "R", level: 78, categoryBadge: "Statistics", description: "Statistical computation, hypothesis testing, exploratory data visualizations." },
    ],
  },
];

export const SKILL_ITEMS: SkillItem[] = [
  // Languages (6)
  { name: "Python", category: "Languages", iconName: "Code2" },
  { name: "Java", category: "Languages", iconName: "Coffee" },
  { name: "JavaScript", category: "Languages", iconName: "FileCode" },
  { name: "C", category: "Languages", iconName: "Cpu" },
  { name: "C++", category: "Languages", iconName: "Terminal" },
  { name: "R", category: "Languages", iconName: "BarChart2" },

  // Tools/Platforms (9)
  { name: "Jupyter Notebook", category: "Tools/Platforms", iconName: "BookOpen" },
  { name: "Tableau Public", category: "Tools/Platforms", iconName: "BarChart3" },
  { name: "PowerBI Desktop", category: "Tools/Platforms", iconName: "PieChart" },
  { name: "MS Excel", category: "Tools/Platforms", iconName: "Table" },
  { name: "MySQL Workbench", category: "Tools/Platforms", iconName: "Database" },
  { name: "Git", category: "Tools/Platforms", iconName: "GitBranch" },
  { name: "GitHub", category: "Tools/Platforms", iconName: "Github" },
  { name: "Docker (basic)", category: "Tools/Platforms", iconName: "Box" },
  { name: "MongoDB Atlas", category: "Tools/Platforms", iconName: "Layers" },

  // Frameworks (9)
  { name: "Numpy", category: "Frameworks", iconName: "Binary" },
  { name: "Pandas", category: "Frameworks", iconName: "Table2" },
  { name: "Matplotlib", category: "Frameworks", iconName: "LineChart" },
  { name: "Seaborn", category: "Frameworks", iconName: "TrendingUp" },
  { name: "Scikit-Learn", category: "Frameworks", iconName: "Brain" },
  { name: "React.js", category: "Frameworks", iconName: "Atom" },
  { name: "Node.js", category: "Frameworks", iconName: "Server" },
  { name: "Express.js", category: "Frameworks", iconName: "Workflow" },
  { name: "Flask", category: "Frameworks", iconName: "Flame" },

  // Soft Skills (6)
  { name: "Problem-Solving", category: "Soft Skills", iconName: "Lightbulb" },
  { name: "Analytical Thinking", category: "Soft Skills", iconName: "Target" },
  { name: "Communication", category: "Soft Skills", iconName: "MessageSquare" },
  { name: "Teamwork", category: "Soft Skills", iconName: "Users" },
  { name: "Leadership", category: "Soft Skills", iconName: "Compass" },
  { name: "Adaptability", category: "Soft Skills", iconName: "Zap" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "vector-ai-guidance",
    title: "Vector — AI Career Guidance System",
    subtitle: "Contextualized AI career advisor & skill pathway generation engine",
    category: "Full-Stack & AI",
    description: "An intelligent career planning platform integrating Google's Gemini API to analyze candidate profiles, assess real-time skill gaps, and dynamically formulate actionable learning roadmaps.",
    longDescription: "Vector leverages the Gemini 1.5 Pro LLM alongside a performant Node.js/Express backend and MongoDB data store. Features automated resume scoring, tailored career transition roadmaps, interactive milestone checklists, and Cloudinary-powered asset streaming. Provides students and professionals with actionable, personalized career pathways.",
    tags: ["Gemini API", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT Auth", "Tailwind CSS"],
    coverImage: "/projects/vector-ai-guidance.png",
    metrics: [
      { label: "LLM Model", value: "Gemini 1.5" },
      { label: "Inference Latency", value: "< 850ms" },
      { label: "Profile Match Rate", value: "94.2%" },
    ],
    highlights: [
      "Integrated Google Gemini API for personalized semantic evaluation of career ambitions and curriculum vitae.",
      "Engineered secure authentication with JWT, bcrypt password hashing, and role-based permissions.",
      "Constructed MongoDB schema for dynamic pathway versioning and user progress persistence.",
      "Deployed automated Cloudinary pipelines for instant document and profile media processing.",
    ],
    githubUrl: "https://github.com/Shubhangidixit01",
    liveUrl: "https://github.com/Shubhangidixit01",
    featured: true,
  },
  {
    id: "mgnrega-analysis",
    title: "Region-Wise Descriptive Analysis of MGNREGA",
    subtitle: "Large-scale demographic & socioeconomic ETL analytics across 6 states",
    category: "Data Science & Engineering",
    description: "A comprehensive data engineering and analytical pipeline processing 72,575 real-world records to uncover employment patterns, fund distribution, and seasonal labor anomalies under MGNREGA.",
    longDescription: "Architected an automated multi-stage Python ETL pipeline that ingested raw government records across 6 distinct Indian states. Conducted comprehensive data cleaning, missing-value imputation, outlier filtering, and statistical aggregations. Developed an interactive Power BI dashboard featuring dynamic DAX KPIs, temporal heatmaps, and demographic breakdowns for policy insights.",
    tags: ["Python", "ETL Pipeline", "Power BI", "Pandas", "NumPy", "Data Wrangling", "Statistical Analysis"],
    coverImage: "/projects/mgnrega-analysis.png",
    metrics: [
      { label: "Records Ingested", value: "72,575" },
      { label: "States Analyzed", value: "6 Major" },
      { label: "Data Quality Score", value: "99.8%" },
    ],
    highlights: [
      "Constructed an automated data pipeline processing 72,575 real-world records across 6 states.",
      "Cleaned, normalized, and modeled raw district level data to reveal seasonal employment trends and expenditure distribution across regions of India.",
      "Designed dynamic Power BI dashboard featuring KPI cards, geo-spatial maps, and gender participation metrics."
    ],
    githubUrl: "https://github.com/Shubhangidixit01",
    liveUrl: "https://github.com/Shubhangidixit01",
    featured: true,
  },
  {
    id: "securefs-file-management",
    title: "SecureFS — Cryptographic File Management System",
    subtitle: "Enterprise-grade zero-trust file storage with TOTP 2FA & AES encryption",
    category: "Security",
    description: "A hardened web application engineered in Flask providing end-to-end encryption at rest, time-based one-time password (TOTP) two-factor authentication, and granular access authorization.",
    longDescription: "SecureFS is built for environments demanding rigorous privacy and confidentiality. Implements Fernet symmetric encryption with PBKDF2 HMAC-SHA256 key derivation to guarantee zero plaintext exposure on physical disks. Integrates authenticator app-compatible TOTP 2FA, session timeouts, and SQLite audit logging.",
    tags: ["Flask", "Python", "SQLite", "2FA (TOTP)", "Fernet / AES", "Cryptography", "bcrypt"],
    coverImage: "/projects/securefs-file-management.png",
    metrics: [
      { label: "Encryption", value: "Fernet / AES" },
      { label: "Auth Mechanism", value: "TOTP 2FA" },
      { label: "Plaintext Leakage", value: "0.0%" },
    ],
    highlights: [
      "Designed an encrypted file storage system utilizing Fernet symmetric encryption at rest.",
      "Built multi-factor authentication with QR code generation compatible with Google Authenticator and Authy.",
      "Employed bcrypt with calibrated salt rounds for impenetrable credential authentication.",
      "Developed audit logging for user access and cryptographic operations.",
    ],
    githubUrl: "https://github.com/Shubhangidixit01",
    liveUrl: "https://github.com/Shubhangidixit01",
    featured: true,
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "infosys-dbms",
    title: "Database Management System Part-1",
    issuer: "Infosys",
    date: "Aug’ 26",
    credentialUrl: "https://infyspringboard.onwingspan.com/web/en/app/profile/competency/certificate",
    credentialId: "INFYS-DBMS-PART1",
    imageUrl: "/certificates/infosys-dbms.jpg",
    skills: ["Relational Databases", "SQL Optimization", "Normalization", "ER Modeling"],
    type: "Certificates",
    iconType: "database",
  },
  {
    id: "techveda-data-management",
    title: "Data Management (Excel & Tableau)",
    issuer: "Tech Veda",
    date: "Mar’ 25",
    credentialUrl: "https://drive.google.com/file/d/1L43kvBED_zJ9jXXNIkprko4iMNMNFAXo/view?usp=sharing",
    credentialId: "TV-DM-EXCEL-TABLEAU",
    imageUrl: "/certificates/techveda-data-management.png",
    skills: ["Advanced Excel", "Tableau Public", "Data Modeling", "Executive Storytelling"],
    type: "Certificates",
    iconType: "analytics",
  },
  {
    id: "cse-pathshala-python",
    title: "Basic to Beyond Python",
    issuer: "CSE Pathshala",
    date: "Jan’ 25",
    credentialUrl: "https://drive.google.com/file/d/1HrtF_uBmnQlZ3f7lZ5pP_Gz1F5umGSwE/view?usp=sharing",
    credentialId: "CSEP-PY-BEYOND",
    imageUrl: "/certificates/cse-pathshala-python.png",
    skills: ["Python Core", "Data Structures", "Automation Scripting", "Functional Programming"],
    type: "Certificates",
    iconType: "code",
  },
  {
    id: "mlsa-codestorm",
    title: "Microsoft Learn Student Ambassador CodeStorm Hackathon",
    issuer: "MLSA",
    date: "Nov’ 24",
    credentialUrl: "https://drive.google.com/file/d/1rK3S7UgB0jvzOYhYx44qtXjorkEtx0JR/view?usp=sharing",
    credentialId: "MLSA-CODESTORM-HONOR",
    imageUrl: "/certificates/mlsa-codestorm.png",
    skills: ["Cloud Architecture", "Collaborative Engineering", "Rapid Prototyping", "Full-Stack Web"],
    type: "Certificates",
    iconType: "cloud",
  },
  {
    id: "udemy-communication-skills",
    title: "Communication Skills",
    issuer: "Udemy",
    date: "Oct’ 24",
    credentialUrl: "https://drive.google.com/file/d/1xglkxmsHhngEAFbmRzgq12x1BzH7MFSU/view?usp=sharing",
    credentialId: "UDEMY-COMM-SKILLS",
    imageUrl: "/certificates/udemy-communication-skills.png",
    skills: ["Professional Communication", "Presentation", "Active Listening", "Teamwork"],
    type: "Certificates",
    iconType: "analytics",
  },
  {
    id: "deloitte-analytics",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Jul’ 26",
    credentialUrl: "https://www.theforage.com/simulations/deloitte-au/data-analytics-s5zy/completed",
    credentialId: "FORAGE-DELOITTE-DA",
    imageUrl: "/certificates/deloitte-analytics.png",
    skills: ["Data Analytics", "Forensic Data Analysis", "Client Presentation", "Tableau"],
    type: "Certifications",
    iconType: "analytics",
  },
  {
    id: "iamneo-java",
    title: "Programming in JAVA",
    issuer: "iamneo",
    date: "May’ 26",
    credentialUrl: "https://drive.google.com/file/d/1vWsjwZZqQMfG60gjBvksO70unNk5vO3g/view?usp=sharing",
    credentialId: "IAMNEO-JAVA",
    imageUrl: "/certificates/iamneo-java.png",
    skills: ["Java", "Object-Oriented Design", "Collections Framework", "Core Java"],
    type: "Certifications",
    iconType: "code",
  },
  {
    id: "iamneo-oop",
    title: "Object Oriented Programming",
    issuer: "iamneo",
    date: "Jan’ 26",
    credentialUrl: "https://drive.google.com/file/d/1yyuGtyKd6iqhQNZJDZrNBOjhOKvkN41L/view?usp=sharing",
    credentialId: "IAMNEO-OOP",
    imageUrl: "/certificates/iamneo-oop.png",
    skills: ["OOP Concepts", "Inheritance & Polymorphism", "Encapsulation", "Design Principles"],
    type: "Certifications",
    iconType: "code",
  },
  {
    id: "iamneo-dsa",
    title: "Data Structure and Algorithm",
    issuer: "iamneo",
    date: "Jan’ 26",
    credentialUrl: "https://drive.google.com/file/d/1JM96f-nsWe4dEPcAIL_KHonJcamTr9iU/view?usp=sharing",
    credentialId: "IAMNEO-DSA",
    imageUrl: "/certificates/iamneo-dsa.png",
    skills: ["Data Structures", "Algorithms", "Time Complexity", "Optimization"],
    type: "Certifications",
    iconType: "code",
  },
  {
    id: "iamneo-computer-programming",
    title: "Computer Programming",
    issuer: "iamneo",
    date: "May’ 25",
    credentialUrl: "https://drive.google.com/file/d/1u0G-G16TgevPgz9Wvkd43S-gkMw_cPxX/view?usp=sharing",
    credentialId: "IAMNEO-COMP-PROG",
    imageUrl: "/certificates/iamneo-computer-programming.png",
    skills: ["C Programming", "Control Flow", "Memory Management", "Problem Solving"],
    type: "Certifications",
    iconType: "code",
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "Lovely Professional University (LPU)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (Honours)",
    duration: "2024 – 2028",
    score: "8.04 CGPA",
    scoreType: "CGPA",
    location: "Punjab, India",
    highlights: [
      "Pursuing Computer Science with a focus on Data Science, machine learning, and software development.",
      "Building practical experience through academic projects, data-driven applications, and collaborative technical work.",
      "Developing a strong foundation in programming, databases, data structures, and analytical problem-solving.",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (Java/C++)",
      "Operating Systems & Virtualization",
      "Software Engineering & Architecture",
      "Statistical Methods & Data Science",
    ],
  },
  {
    institution: "City Montessori School (CMS)",
    degree: "Senior Secondary (12th Grade) & Secondary (10th Grade)",
    field: "Science Stream with Computer Science (ISC / ICSE)",
    duration: "2019 – 2023",
    score: "12th: 92.4% | 10th: 97.8%",
    scoreType: "Percentage",
    location: "Lucknow, Uttar Pradesh, India",
    highlights: [
      "Achieved 97.8% in ICSE Board examination with centum honors in Computer Applications and Science.",
      "Secured 92.4% in ISC Senior Secondary examination majoring in Mathematics, Physics, Chemistry, and Computer Science.",
      "Participated actively in mathematics olympiads, scientific exhibitions, and debate forums.",
    ],
    courses: [
      "Advanced Mathematics & Calculus",
      "Computer Science & Java Programming",
      "Physics & Mechanics",
      "Chemistry & Material Science",
      "English Literature & Composition",
    ],
  },
];
