# Shubhangi Dixit — Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-shubhangidixit.vercel.app-7C3AED?style=flat-square)](https://shubhangidixit.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Shubhangidixit01-181717?style=flat-square&logo=github)](https://github.com/Shubhangidixit01)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-shubhangidixit01-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/shubhangidixit01)

A responsive personal portfolio website built to showcase projects, skills, education, and technical certifications across data engineering, data science, and web development.

**Live Demo:** [shubhangidixit.vercel.app](https://shubhangidixit.vercel.app)

---

## Overview

This repository contains the source code for Shubhangi Dixit's personal developer portfolio. The website is structured as a single-page application with smooth section navigation, a dark interface theme, an interactive particle background canvas, and a centralized data architecture that separates content from UI presentation.

---

## Features

- **Interactive Hero Section:** Introduces primary focus areas with direct links to GitHub, LinkedIn, and an in-browser resume viewer.
- **Projects Showcase:** Categorized project cards with technical summaries, relevant technology tags, key highlights, and links to source code and live demos.
- **Skills Matrix:** Organized breakdown of technical competencies across programming languages, data pipelines, analytics tools, and web development.
- **Certificates & Achievements:** Gallery of completed certifications and course credentials with verification links.
- **Education Timeline:** Chronological academic history highlighting relevant coursework and milestones.
- **Resume Modal (CV Viewer):** Built-in modal dialog that renders the resume directly in the browser with an option to download.
- **Responsive & Accessible UI:** Mobile-first layout with semantic HTML structure, keyboard-friendly navigation, and smooth scroll transitions.
- **Contact Section:** Clean contact form and social channels for direct inquiries and networking.

---

## Tech Stack & Architecture

### Core Technologies

- **[Next.js](https://nextjs.org/) (App Router):** Serves as the primary application framework, handling page routing, metadata management for SEO, static asset optimization, and production deployment builds.
- **[React 19](https://react.dev/):** Powers the component-driven interface, utilizing hooks to manage interactive states such as modal visibility, section active states, and project filtering.
- **[TypeScript](https://www.typescriptlang.org/):** Provides strict type checking across all data schemas (projects, certificates, skills, education) to maintain code quality and prevent runtime errors.

### Styling & Animation

- **[Tailwind CSS v4](https://tailwindcss.com/):** Utility-first styling engine used to configure the dark theme, responsive breakpoints, layout flexbox/grids, and typography.
- **[Framer Motion](https://www.framer.com/motion/):** Handles declarative animations, including viewport scroll reveals, card hover feedback, and modal entry/exit transitions.
- **HTML5 Canvas:** Powers a lightweight background visualization component that simulates data flow streams using animated nodes and connecting lines.

### Icons & Utilities

- **[Lucide React](https://lucide.dev/):** Lightweight, consistent icon set used for navigation links, project badges, and social media handles.
- **[Vercel Analytics](https://vercel.com/analytics):** Privacy-friendly page-view and visitor analytics integrated into the root layout.

---

## Project Structure

```
Portfolio/
├── public/                # Static assets (images, project screenshots, resume PDF)
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styling and Tailwind base directives
│   │   ├── layout.tsx     # Root layout (metadata, canvas background, analytics)
│   │   └── page.tsx       # Main page assembling all portfolio sections
│   ├── components/
│   │   ├── layout/        # Shared layout elements (Header, Footer)
│   │   ├── sections/      # Page sections (Hero, About, Projects, Skills, Contact)
│   │   └── ui/            # Reusable UI widgets (CVModal, Canvas, Badges)
│   └── data/
│       └── portfolioData.ts # Central data source for all site content
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- **Node.js:** v18.x or later
- **npm:** v9.x or later (or yarn / pnpm)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shubhangidixit01/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the development server with hot-module replacement |
| `npm run build` | Compiles and builds the production bundle |
| `npm run start` | Serves the production build locally |

---

## Managing Content

All portfolio content (personal details, project descriptions, skills, certificates, and academic entries) is decoupled from the UI components and maintained in a single configuration file:

```
src/data/portfolioData.ts
```

To customize content:
- **Personal Information:** Update `PERSONAL_INFO` (bio, contact details, social links).
- **Projects:** Add or edit objects in the `PROJECTS` array (titles, descriptions, tech stacks, links).
- **Skills:** Modify categories and competency groups in `SKILL_CATEGORIES`.
- **Certificates:** Update entries in `CERTIFICATES` with credential links and issuers.
- **Education:** Adjust academic details and coursework in `EDUCATION_LIST`.

---

## Deployment

The project is configured for continuous deployment on **Vercel**:
- Pushes to the `main` branch automatically trigger a production build.
- Static assets and routes are optimized automatically through Next.js.

---

## Contact

- **Email:** shubhangidixitlko@gmail.com
- **LinkedIn:** [shubhangidixit01](https://linkedin.com/in/shubhangidixit01)
- **GitHub:** [Shubhangidixit01](https://github.com/Shubhangidixit01)

---

## License

This project is open for personal reference and portfolio layout inspiration.
