<h1 align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&pause=1000&color=A855F7&center=true&vCenter=true&width=700&lines=Shubhangi+Dixit+%E2%80%94+Portfolio;Data+Science+%26+Engineering+Specialist;Full-Stack+AI+Engineer" alt="Typing SVG" />
</h1>

<p align="center">
  <a href="https://shubhangidixit.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Portfolio-shubhangidixit.vercel.app-7C3AED?style=for-the-badge" alt="Live Site" />
  </a>
  <a href="https://github.com/Shubhangidixit01" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Shubhangidixit01-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/shubhangidixit01" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-shubhangidixit01-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.x-000000?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38BDF8?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer_Motion-13.x-EF0078?style=flat-square&logo=framer" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel" />
</p>

---

## Overview

A **premium personal portfolio** for **Shubhangi Dixit** — Computer Science scholar at Lovely Professional University (B.Tech CSE, CGPA 8.04) — specializing in scalable data pipelines, automated ETL workflows, and AI-driven full-stack web applications.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**, featuring a dark-mode glassmorphism aesthetic, a live animated data-pipeline background canvas, custom cursor, and smooth Framer Motion transitions throughout every section.

**Live:** https://shubhangidixit.vercel.app

---

## Features

| Feature | Description |
|---|---|
| Animated Background | Live canvas data-pipeline visualization with floating nodes and connecting data streams |
| Custom Cursor | Magnetic cursor with glow trails that reacts to interactive elements |
| Confetti Hero | Celebratory canvas-confetti burst on hero CTA interaction |
| CV Modal Viewer | In-browser PDF viewer modal with download capability |
| Skills Matrix | Categorized skill grid with animated progress bars (Languages, Tools, Frameworks, Soft Skills) |
| Projects Showcase | Filterable project cards with metrics, tech tags, and GitHub / live links |
| Certificates Gallery | Categorized certificate carousel with credential verification links |
| Education Timeline | Interactive education cards with courses and academic highlights |
| Contact Form | Functional email contact form with toast notifications |
| Vercel Analytics | Page-view and visitor analytics via @vercel/analytics |
| Accessibility | Semantic HTML5, ARIA labels, keyboard-navigable, scroll-smooth |
| Fully Responsive | Mobile-first design adapting across all screen sizes |

---

## Project Structure

```
Portfolio/
├── public/
│   ├── certificates/          # Certificate images (.jpg / .png)
│   └── projects/              # Project cover images (.png)
│
├── src/
│   ├── app/
│   │   ├── api/               # Next.js API routes
│   │   ├── globals.css        # Global CSS and Tailwind base
│   │   ├── layout.tsx         # Root layout with metadata + Analytics
│   │   └── page.tsx           # Main page — section assembly
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Landing hero with stats and CTA
│   │   │   ├── AboutSection.tsx        # Bio, personal info
│   │   │   ├── ProjectsSection.tsx     # Filterable project cards
│   │   │   ├── SkillsMatrix.tsx        # Skill categories and progress bars
│   │   │   ├── CertificatesSection.tsx # Certificates and certifications gallery
│   │   │   ├── EducationSection.tsx    # Education timeline
│   │   │   └── ContactSection.tsx      # Contact form
│   │   └── ui/
│   │       ├── CustomCursor.tsx        # Magnetic glow cursor
│   │       ├── DataPipelineCanvas.tsx  # Animated background canvas
│   │       ├── CVModal.tsx             # Resume PDF modal viewer
│   │       ├── TelemetryBadge.tsx      # Animated stat badges
│   │       ├── Icons.tsx               # Icon wrapper utilities
│   │       └── Toast.tsx               # Toast notification system
│   │
│   └── data/
│       └── portfolioData.ts   # Single source of truth for all content
│
├── next.config.mjs
├── tsconfig.json
├── postcss.config.mjs
├── package.json
└── README.md
```

---

## Tech Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| Next.js | ^16.3.4 | App framework, SSR, routing, API routes |
| React | ^19.3.0 | UI component library |
| TypeScript | ^7.0.2 | Static typing |

### Styling and Animation

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | ^4.3.3 | Utility-first styling |
| Framer Motion | ^13.2.0 | Animations, transitions, scroll effects |
| clsx + tailwind-merge | latest | Conditional class composition |

### UI and Experience

| Technology | Version | Purpose |
|---|---|---|
| Lucide React | ^1.43.0 | Icon system |
| canvas-confetti | ^1.9.4 | Hero confetti burst |
| @vercel/analytics | latest | Page-view and visitor analytics |

### Deployment

| Technology | Purpose |
|---|---|
| Vercel | Hosting, CI/CD, Edge Network |
| GitHub (main branch) | Source of truth, triggers auto-deploy on push |

---

## Content Highlights

### Featured Projects

| Project | Category | Key Metrics |
|---|---|---|
| **Vector — AI Career Guidance System** | Full-Stack and AI | Gemini 1.5 · <850ms inference latency · 94.2% profile match rate |
| **Region-Wise MGNREGA Analysis** | Data Science and Engineering | 72,575 records processed · 6 states · 99.8% data quality score |
| **SecureFS — Cryptographic File Management** | Security | Fernet/AES encryption · TOTP 2FA · 0% plaintext leakage |

### Skills (30 items across 4 categories)

| Category | Top Skills |
|---|---|
| **Languages** | Python 95%, JS ES6+ 90%, Java 88%, C++ 82%, C 80%, R 78% |
| **Data Engineering** | ETL Automation 90%, Pandas & NumPy 94%, Data Transformation 92%, SQL 88% |
| **Data Science** | Power BI 88%, Seaborn & Matplotlib 90%, Tableau 85%, Scikit-Learn 84% |
| **Web and AI** | Gemini API 92%, React.js 90%, Node.js & Express 88%, REST APIs 92% |

### Certifications (10 total)

| Issuer | Certificate |
|---|---|
| Infosys | Database Management System Part-1 |
| Forage (Deloitte) | Deloitte Data Analytics Job Simulation |
| iamneo | Programming in Java · OOP · DSA · Computer Programming |
| Tech Veda | Data Management (Excel and Tableau) |
| CSE Pathshala | Basic to Beyond Python |
| MLSA | Microsoft Learn Student Ambassador CodeStorm Hackathon |
| Udemy | Communication Skills |

### Education

| Institution | Degree | Score |
|---|---|---|
| Lovely Professional University (LPU) | B.Tech CSE (Honours) — 2024–2028 | 8.04 CGPA |
| City Montessori School (CMS) | ISC 12th / ICSE 10th — 2019–2023 | 92.4% / 97.8% |

---

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Shubhangidixit01/Portfolio.git

# 2. Enter the project directory
cd Portfolio

# 3. Install all dependencies
npm install

# 4. Start the development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Configuration

### Personalizing Content

All portfolio content lives in a **single file** — no other files need to be touched:

```
src/data/portfolioData.ts
```

| Exported Constant | What it controls |
|---|---|
| `PERSONAL_INFO` | Name, role tagline, bio, email, phone, location, social links, hero stats |
| `SKILL_CATEGORIES` | Four skill category groups with individual proficiency levels (1–100) |
| `SKILL_ITEMS` | Individual skill chips displayed in the skills grid, with icon names |
| `PROJECTS` | Project cards — title, description, tech tags, metrics, GitHub/live URLs |
| `CERTIFICATES` | Certificates and certifications with issuer, date, credential URL, skills |
| `EDUCATION_LIST` | Education timeline entries with institution, degree, score, courses |

### Environment Variables

No environment variables are required for the base portfolio.

If you configure the Contact API route with an email provider, create a `.env.local` file (never commit this):

```env
# .env.local
RESEND_API_KEY=your_resend_api_key
```

### Vercel Analytics

Already integrated into `src/app/layout.tsx`. Analytics activates automatically on Vercel — no extra configuration required.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |

---

## Deployment

This project deploys automatically to **Vercel** via Git integration:

1. Push any commit to the `main` branch on GitHub
2. Vercel detects the change and triggers a new deployment
3. Live within ~60 seconds at https://shubhangidixit.vercel.app

To deploy your own fork using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

---

## Static Assets

Place all static files inside the `public/` directory:

```
public/
├── certificates/
│   ├── infosys-dbms.jpg
│   ├── techveda-data-management.png
│   ├── cse-pathshala-python.png
│   ├── mlsa-codestorm.png
│   ├── udemy-communication-skills.png
│   ├── deloitte-analytics.png
│   ├── iamneo-java.png
│   ├── iamneo-oop.png
│   ├── iamneo-dsa.png
│   └── iamneo-computer-programming.png
└── projects/
    ├── vector-ai-guidance.png
    ├── mgnrega-analysis.png
    └── securefs-file-management.png
```

These are referenced in `portfolioData.ts` as `/certificates/filename.png` and `/projects/filename.png`.

---

## Design System

| Token | Value |
|---|---|
| Background | `#07060e` — near-black, purple-tinted |
| Primary Accent | Purple (`purple-600` / `#7C3AED`) |
| Text Base | `slate-100` |
| Text Selection | `purple-600/40` background with white text |
| Dark Mode | Always-on (`className="dark"` on `<html>`) |
| Scroll Behavior | `scroll-smooth` |
| Body Antialiasing | `antialiased` |
| Z-layering | Canvas background → Custom cursor → `z-10` content wrapper |

---

## Contact

| Channel | Details |
|---|---|
| Email | shubhangidixitlko@gmail.com |
| LinkedIn | https://linkedin.com/in/shubhangidixit01 |
| GitHub | https://github.com/Shubhangidixit01 |
| Portfolio | https://shubhangidixit.vercel.app |
| Location | Lucknow and Punjab, India |

---

## License

This project is for **personal portfolio use**. You are welcome to draw inspiration from the structure and design — please do not directly copy and deploy the personal content (bio, project descriptions, certificates, academic records) as your own.

---

<p align="center">
  Made with love by <strong>Shubhangi Dixit</strong> &nbsp;·&nbsp; Deployed on <strong>Vercel</strong>
</p>
