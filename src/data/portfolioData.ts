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
  featured: boolean;
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
  skills: string[];
  grade?: string;
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
  tagline: "Engineered scalable data pipelines, automated ETL workflows, and built AI-driven full-stack web applications.",
  bio: "Passionate Computer Science scholar blending robust data engineering architectures with intelligent AI models and full-stack software development. Proven track record of architecting automated ETL pipelines processing 70k+ records, implementing secure enterprise systems, and integrating cutting-edge LLMs like Gemini to deliver high-impact human experiences.",
  email: "shubhangidixitlko@gmail.com",
  phone: "+91 9453921211",
  location: "Lucknow & Punjab, India",
  github: "https://github.com/Shubhangidixit01",
  linkedin: "https://linkedin.com/in/shubhangidixit01",
  stats: [
    { label: "Data Records Processed", value: "72.5K+", suffix: "" },
    { label: "AI & Pipeline Projects", value: "8+", suffix: "" },
    { label: "Certifications & Honors", value: "7+", suffix: "" },
    { label: "Academics B.Tech CGPA", value: "8.04", suffix: "/10" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Data Engineering & Pipelines",
    description: "Designing end-to-end ingestion, schema modeling, automated ETL processes, and reliable data pipelines.",
    iconName: "Database",
    skills: [
      { name: "ETL Automation", level: 90, categoryBadge: "Pipelines", description: "Automated extraction, cleanup, schema normalization, and loading pipelines." },
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

export const PROJECTS: ProjectItem[] = [
  {
    id: "vector-ai-guidance",
    title: "Vector — AI Career Guidance System",
    subtitle: "Contextualized AI career advisor & skill pathway generation engine",
    category: "Full-Stack & AI",
    description: "An intelligent career planning platform integrating Google's Gemini API to analyze candidate profiles, assess real-time skill gaps, and dynamically formulate actionable learning roadmaps.",
    longDescription: "Vector leverages the Gemini 1.5 Pro LLM alongside a performant Node.js/Express backend and MongoDB data store. Features automated resume scoring, tailored career transition roadmaps, interactive milestone checklists, and Cloudinary-powered asset streaming. Provides students and professionals with actionable, personalized career pathways.",
    tags: ["Gemini API", "Node.js", "Express.js", "MongoDB", "Cloudinary", "JWT Auth", "Tailwind CSS"],
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
    metrics: [
      { label: "Records Ingested", value: "72,575" },
      { label: "States Analyzed", value: "6 Major" },
      { label: "Data Quality Score", value: "99.8%" },
    ],
    highlights: [
      "Engineered automated ETL scripts normalizing heterogeneous data across 72,575 citizen records.",
      "Uncovered critical seasonal labor fluctuations between agricultural downtime and peak public work demand.",
      "Designed dynamic Power BI dashboard featuring KPI cards, geo-spatial maps, and gender participation metrics.",
      "Formulated regression models evaluating fund utilization velocity versus household demand.",
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
    metrics: [
      { label: "Encryption", value: "Fernet / AES" },
      { label: "Auth Mechanism", value: "TOTP 2FA" },
      { label: "Plaintext Leakage", value: "0.0%" },
    ],
    highlights: [
      "Implemented Fernet symmetric key cryptography ensuring files remain fully encrypted at rest on the storage layer.",
      "Built multi-factor authentication with QR code generation compatible with Google Authenticator and Authy.",
      "Employed bcrypt with calibrated salt rounds for impenetrable credential authentication.",
      "Designed tamper-proof audit trails logging timestamped cryptographic verification events.",
    ],
    githubUrl: "https://github.com/Shubhangidixit01",
    liveUrl: "https://github.com/Shubhangidixit01",
    featured: true,
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "deloitte-analytics",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte | Forage",
    date: "Jul 2026",
    credentialUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte/data-analytics",
    credentialId: "FORAGE-DELOITTE-DA-2026",
    skills: ["Data Analytics", "Forensic Data Analysis", "Client Presentation", "Tableau", "Dashboarding"],
    iconType: "analytics",
  },
  {
    id: "infosys-dbms",
    title: "Database Management System Part-1",
    issuer: "Infosys Springboard",
    date: "Aug 2026",
    credentialUrl: "https://infyspringboard.onwingspan.com/",
    credentialId: "INFYS-DBMS-PART1-2026",
    skills: ["Relational Databases", "SQL Optimization", "Normalization", "ACID Transactions", "ER Modeling"],
    iconType: "database",
  },
  {
    id: "lpu-mern-bootcamp",
    title: "AI-Driven MERN Stack Bootcamp (Grade O)",
    issuer: "Lovely Professional University",
    date: "Jul 2026",
    credentialUrl: "https://lpu.in",
    grade: "Grade O (Outstanding)",
    credentialId: "LPU-MERN-AI-GRADE-O",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Agent Integration", "RESTful Architecture"],
    iconType: "ai",
  },
  {
    id: "iamneo-java-dsa",
    title: "Programming in JAVA, OOPs, DSA",
    issuer: "iamneo",
    date: "2025",
    credentialUrl: "https://iamneo.ai",
    credentialId: "NEO-JAVA-DSA-CERT",
    skills: ["Java", "Object-Oriented Design", "Data Structures", "Algorithms", "Algorithmic Complexity"],
    iconType: "code",
  },
  {
    id: "mlsa-codestorm",
    title: "Microsoft Learn Student Ambassador CodeStorm Hackathon",
    issuer: "Microsoft Learn Student Ambassadors (MLSA)",
    date: "2025",
    credentialUrl: "https://studentambassadors.microsoft.com",
    credentialId: "MLSA-CODESTORM-HONOR",
    skills: ["Cloud Architecture", "Collaborative Engineering", "Rapid Prototyping", "Full-Stack Web"],
    iconType: "cloud",
  },
  {
    id: "techveda-data-management",
    title: "Data Management (Excel & Tableau)",
    issuer: "Tech Veda",
    date: "2025",
    credentialUrl: "https://techveda.org",
    credentialId: "TV-DM-EXCEL-TABLEAU",
    skills: ["Advanced Excel", "Tableau Public", "Data Modeling", "Executive Storytelling"],
    iconType: "analytics",
  },
  {
    id: "cse-pathshala-python",
    title: "Basic to Beyond Python",
    issuer: "CSE Pathshala",
    date: "2024",
    credentialUrl: "https://csepathshala.com",
    credentialId: "CSEP-PY-BEYOND",
    skills: ["Python Core", "Data Structures", "Automation Scripting", "Functional Programming"],
    iconType: "code",
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: "Lovely Professional University (LPU)",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering (Honours)",
    duration: "2023 – 2027",
    score: "8.04 CGPA",
    scoreType: "CGPA",
    location: "Punjab, India",
    highlights: [
      "Awarded Grade 'O' (Outstanding) in the AI-Driven Full Stack Bootcamp.",
      "Core focus on Data Structures, Database Systems, Machine Learning Foundations, and Distributed Architecture.",
      "Active participant and team lead in campus hackathons including Microsoft CodeStorm.",
      "Consistently in the top quartile of the Computer Science Honours cohort.",
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
