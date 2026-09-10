import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DataPipelineCanvas } from "@/components/ui/DataPipelineCanvas";

export const metadata: Metadata = {
  title: "Shubhangi Dixit | Data Science & Data Engineering Specialist | Full-Stack AI Engineer",
  description:
    "Portfolio of Shubhangi Dixit — Computer Science scholar specialized in scalable data pipelines, automated ETL workflows, and AI-driven full-stack web applications. Built systems processing 72.5k+ records and powered by Gemini API.",
  keywords: [
    "Shubhangi Dixit",
    "Data Science",
    "Data Engineering",
    "ETL Automation",
    "Full-Stack AI Engineer",
    "Gemini API",
    "Python",
    "Power BI",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Shubhangi Dixit" }],
  openGraph: {
    title: "Shubhangi Dixit | Data Science & Data Engineering Specialist",
    description: "Scalable data pipelines, automated ETL workflows, and AI-driven full-stack software.",
    type: "website",
    url: "https://shubhangidixit.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="relative bg-[#07060e] text-slate-100 antialiased selection:bg-purple-600/40 selection:text-white">
        <CustomCursor />
        <DataPipelineCanvas />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
