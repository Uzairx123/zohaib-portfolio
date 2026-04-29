import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zohaib Ahmed — Reverse Recruiter & Job Application Assistant",
  description:
    "Top-rated reverse recruiter helping ambitious professionals land roles at Amazon, Salesforce, Snowflake & more. 500+ clients. 99% success rate. 5+ years experience.",
  keywords: [
    "reverse recruiter",
    "job application assistant",
    "job search service",
    "resume customization",
    "cover letter writing",
    "interview preparation",
    "career coach",
    "Zohaib Ahmed",
  ],
  authors: [{ name: "Zohaib Ahmed" }],
  openGraph: {
    title: "Zohaib Ahmed — Reverse Recruiter",
    description:
      "Land your dream job faster with a proven reverse recruiter. 500+ clients placed at top companies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zohaib Ahmed — Reverse Recruiter",
    description: "Land your dream job faster. 500+ clients. 99% success rate.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-ink-950">
      <body className="bg-ink-950 text-cream-100 antialiased grain">
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
