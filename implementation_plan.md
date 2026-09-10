# Implementation Plan: Ultra-Modern Data & AI Portfolio for Shubhangi Dixit

Build a high-performance, visually stunning single-page portfolio website for **Shubhangi Dixit** (Data Science & Data Engineering Specialist | Full-Stack AI Engineer). The website will feature a dark obsidian-to-velvet navy aesthetic, vibrant electric violet & amethyst accents, fluid Framer Motion spring physics, a dynamic data-pipeline particle background, real-time telemetry badge, interactive project showcase with category filters, certificate accreditation verification cards, an education timeline, an interactive contact form with toast notifications, and an embedded CV preview modal.

## User Review Required

> [!IMPORTANT]
> The portfolio is engineered with Next.js 15 / App Router and Tailwind CSS, fully prepared for Vercel deployment with zero-config serverless function handling for the `/api/contact` endpoint.

Please review the proposed design tokens, section layout, and interactive features below.

## Proposed Architecture & Design System

### 1. Visual Design & Theme Tokens
- **Background Palette**: Obsidian Black (`#07060E`) to Deep Velvet Navy (`#0C0A1A`) radial & linear gradients.
- **Accents & Highlights**:
  - Primary Purple: `#8B5CF6` / `#7C3AED`
  - Electric Violet: `#A855F7`
  - Neon Amethyst / Glow: `#D8B4FE` / `rgba(139, 92, 246, 0.25)`
- **Glassmorphism**: Backdrop blur (`backdrop-blur-xl`), micro-borders (`border-purple-500/15`), specular top edge highlights (`inset 0 1px 0 0 rgba(216, 180, 254, 0.1)`), and diffused purple ambient shadows.
- **Custom Cursor**: Dual-layer custom cursor (a precise electric violet dot with a smooth spring-following ambient glowing ring that expands and shifts into magnetic focus over links/buttons). Includes fallback for touch/mobile devices.
- **Typography**: Google Fonts Inter / Plus Jakarta Sans with JetBrains Mono for telemetry, data metrics, and code chips.

### 2. Component Hierarchy & Sections

```
src/
├── app/
│   ├── layout.tsx              # Root layout with fonts, metadata, custom cursor wrapper
│   ├── page.tsx                # Main single-page application orchestrating all sections
│   ├── globals.css             # Obsidian gradient theme, glowing utility classes, scrollbar styles
│   └── api/
│       └── contact/
│           └── route.ts        # Serverless API endpoint for contact messages
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx    # Framer Motion animated glow cursor
│   │   ├── DataPipelineCanvas.tsx # Canvas particle network representing distributed ETL pipelines
│   │   ├── CVModal.tsx         # Embedded CV preview modal with direct download button
│   │   ├── TelemetryBadge.tsx  # Hero interactive live metrics & simulated data throughput
│   │   └── Toast.tsx           # Floating toast notification system
│   ├── layout/
│   │   ├── Header.tsx          # Glassmorphic navbar with active section observer & mobile drawer
│   │   └── Footer.tsx          # Minimalist footer with purple gradient rule & back-to-top
│   └── sections/
│       ├── HeroSection.tsx     # Dynamic headline, subtitle, CTAs, social links, metrics badge
│       ├── AboutSection.tsx    # Technical philosophy, core metrics (72.5k records, 3+ pipelines)
│       ├── EducationSection.tsx# Interactive switchable tabs (LPU 8.04 CGPA vs CMS 92.4%/97.8%)
│       ├── SkillsMatrix.tsx    # Categorized data grid (Data Eng, Data Science, Web & AI, Languages)
│       ├── ProjectsSection.tsx # Filterable cards (All, Data Science/Eng, Full-Stack & AI, Security)
│       ├── CertificatesSection.tsx # Accreditation cards with "Verify Credential" external triggers
│       └── ContactSection.tsx  # Modern glassmorphic form + direct contact details & social channels
├── data/
│   ├── portfolioData.ts        # Structured data for projects, skills, education, certifications
│   └── resumeData.ts           # Rich formatted resume data for embedded CV modal
└── public/
    └── resume.pdf / svg assets
```

---

## Proposed Changes

### Core Setup & Configuration

#### [NEW] Next.js App Router Scaffold
- Initialize Next.js project with App Router, TypeScript, Tailwind CSS, and Lucide React.
- Install `framer-motion`, `canvas-confetti` (for submission celebrations), and `lucide-react`.
- Configure `tailwind.config.ts` with custom brand colors (`obsidian`, `velvet`, `electric-purple`, `amethyst`) and glassmorphic box-shadow / border utilities.

#### [NEW] [portfolioData.ts](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/data/portfolioData.ts)
- Comprehensive dataset containing:
  - Personal Information (Shubhangi Dixit, email, phone, GitHub, LinkedIn).
  - Categorized Skills (Data Engineering & Pipelines, Data Science & Analytics, Web & AI Engineering, Programming Languages) with icon references and proficiency indicators.
  - Featured Projects:
    1. **Vector — AI Career Guidance System** (Gemini API, Node.js, Express.js, MongoDB, Cloudinary, tailored recommendations).
    2. **Region-Wise Descriptive Analysis of MGNREGA in India** (Python ETL, 72,575 records across 6 states, Power BI Dashboard, seasonal trends).
    3. **SecureFS — Secure File Management System** (Flask, SQLite, 2FA, AES/Fernet Cryptography, bcrypt, RBAC).
  - Certificates:
    1. Deloitte Data Analytics Job Simulation | Forage (Jul 2026)
    2. Database Management System Part-1 | Infosys (Aug 2026)
    3. AI-Driven MERN Stack Bootcamp (Grade O) | Lovely Professional University (Jul 2026)
    4. Programming in JAVA, OOPs, DSA | iamneo
    5. Microsoft Learn Student Ambassador CodeStorm Hackathon | MLSA
    6. Data Management (Excel & Tableau) | Tech Veda
    7. Basic to Beyond Python | CSE Pathshala
  - Education Entries (LPU B.Tech CSE Hons., CMS 12th & 10th).

### Visual & Interactive Components

#### [NEW] [CustomCursor.tsx](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/components/ui/CustomCursor.tsx)
- Custom mouse follower with electric violet center dot and smooth spring trailing halo.
- Expands and blurs when hovering over interactive elements (`a`, `button`, input fields).
- Gracefully disables on touch devices.

#### [NEW] [DataPipelineCanvas.tsx](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/components/ui/DataPipelineCanvas.tsx)
- Interactive HTML5 Canvas animation with floating interconnected nodes symbolizing data engineering workflows.
- Dynamic data packets pulsating across connector lines with mouse proximity reaction.

#### [NEW] [TelemetryBadge.tsx](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/components/ui/TelemetryBadge.tsx)
- Live terminal / telemetry card in the Hero section showing real-time counters:
  - `72,575` Records Ingested & Analyzed
  - `Gemini 1.5 Pro` AI Pipeline Active
  - `99.98%` Data Quality Assurance
  - Live query simulator toggle demonstrating automated data cleaning.

#### [NEW] [CVModal.tsx](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/components/ui/CVModal.tsx)
- Embedded CV Preview modal with high-fidelity resume document formatting, section tabs, print button, and direct download option.

#### [NEW] [Header.tsx](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/components/layout/Header.tsx) & [Footer.tsx](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/components/layout/Footer.tsx)
- Fixed glassmorphic navigation bar with scrollspy highlight, mobile hamburger menu, and "Download CV" action.
- Smooth scroll navigation to sections: About, Education, Skills, Projects, Certificates, Contact.
- Footer with back-to-top button, social links, and copyright.

#### [NEW] Section Components
- **HeroSection**: High-impact presentation, animated subtitle cycling, primary CTAs, telemetry badge.
- **AboutSection**: Engineering background, stats counters, core architectural principles.
- **EducationSection**: Sleek switchable tabs between LPU and CMS with timeline milestones.
- **SkillsMatrix**: Interactive tabs for Data Engineering, Data Science, Web & AI, and Languages with visual proficiency bars and badges.
- **ProjectsSection**: Filterable cards ("All", "Data Science & Engineering", "Full-Stack & AI", "Security") with metrics, tech stack pills, and GitHub / Demo links.
- **CertificatesSection**: Responsive card grid with issuer badges, verification links, and skills validated.
- **ContactSection**: Glassmorphism contact form connected to `/api/contact`, with interactive feedback toast.

#### [NEW] [route.ts](file:///c:/Users/Shubhangi/Desktop/Portfolio/Portfolio/src/app/api/contact/route.ts)
- Next.js App Router POST handler to process inquiries, validate inputs, and return structured JSON response.

---

## Verification Plan

### Automated Verification
1. `npm run build` to verify clean Next.js static generation, TypeScript strict typing, and zero bundling errors.
2. `npm run lint` to check for syntax and style compliance.

### Manual & Interactive Verification
1. Start dev server `npm run dev` and test in browser subagent:
   - Header navigation and smooth scrolling to all 6 sections.
   - Interactive CV preview modal open/close and download button.
   - Dynamic particle canvas responsiveness and custom cursor movement.
   - Project filtering tabs ("All", "Data Science & Engineering", "Full-Stack & AI", "Security").
   - Education tab switching between LPU and CMS.
   - Contact form validation and toast notification on submit.
   - Responsive layout check across desktop and mobile viewports.
