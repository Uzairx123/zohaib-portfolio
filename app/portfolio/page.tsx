"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, TrendingUp } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";

interface Project {
  id: string;
  client: string;
  role: string;
  company: string;
  category: "Engineering" | "Product" | "Data" | "Security" | "Operations";
  duration: string;
  location: string;
  result: string;
  description: string;
  metrics: { label: string; value: string }[];
  accent: "signal" | "amber" | "cream";
}

const projects: Project[] = [
  {
    id: "p01",
    client: "Priya R.",
    role: "Senior Product Manager",
    company: "Salesforce",
    category: "Product",
    duration: "6 weeks",
    location: "Bay Area, US",
    result: "Landed Salesforce after 4 onsite interviews",
    description:
      "Priya had been job hunting for 8 months with almost no recruiter conversations. We rebuilt her positioning from the ground up — focusing on her platform experience and B2B SaaS wins. Within 6 weeks she had four onsite interviews and a Salesforce offer.",
    metrics: [
      { label: "Time to first interview", value: "9 days" },
      { label: "Onsite interviews", value: "4" },
      { label: "Final offers", value: "2" },
      { label: "Comp increase", value: "+38%" },
    ],
    accent: "signal",
  },
  {
    id: "p02",
    client: "Marcus W.",
    role: "Senior Data Engineer",
    company: "Snowflake",
    category: "Data",
    duration: "8 weeks",
    location: "NYC, US",
    result: "Snowflake offer with 42% comp jump",
    description:
      "Marcus was a strong data engineer with weak storytelling. We rewrote every project as outcomes — pipelines built, latency reduced, costs saved — and ran daily applications. He landed Snowflake on his second wave of interviews.",
    metrics: [
      { label: "Applications submitted", value: "82" },
      { label: "Recruiter calls", value: "14" },
      { label: "Final-round interviews", value: "3" },
      { label: "Comp increase", value: "+42%" },
    ],
    accent: "amber",
  },
  {
    id: "p03",
    client: "Sofia M.",
    role: "Software Engineer II",
    company: "Amazon",
    category: "Engineering",
    duration: "5 weeks",
    location: "Seattle, US",
    result: "Amazon SDE II — full LP coaching",
    description:
      "Sofia had passed Amazon's coding rounds before but always failed Leadership Principles. We built a 24-story library mapped to all 16 LPs, ran weekly mocks, and refined her delivery. She passed the loop and signed her offer in week 5.",
    metrics: [
      { label: "Mock interviews", value: "11" },
      { label: "LP stories built", value: "24" },
      { label: "Loop pass rate", value: "100%" },
      { label: "Offer base bump", value: "+29%" },
    ],
    accent: "signal",
  },
  {
    id: "p04",
    client: "James L.",
    role: "Senior Security Analyst",
    company: "Tanium",
    category: "Security",
    duration: "7 weeks",
    location: "Austin, US",
    result: "Tanium offer + 2 backups",
    description:
      "James was burned out from job hunting alone. I took on the entire pipeline — applications, follow-ups, interview scheduling, prep. He ran six concurrent processes and signed at Tanium with two backup offers in hand for negotiation leverage.",
    metrics: [
      { label: "Active processes", value: "6" },
      { label: "Final offers", value: "3" },
      { label: "Interview prep hours", value: "18" },
      { label: "Negotiation lift", value: "+$22k" },
    ],
    accent: "cream",
  },
  {
    id: "p05",
    client: "Aisha K.",
    role: "Engineering Manager",
    company: "Stripe",
    category: "Engineering",
    duration: "10 weeks",
    location: "Remote, EU",
    result: "Stripe EM — first leadership role",
    description:
      "Aisha was an IC stepping into management for the first time. We repositioned her tech-lead experience as management evidence, built a leadership-specific story bank, and prepped her for system design and people-management interviews.",
    metrics: [
      { label: "EM-track interviews", value: "9" },
      { label: "System design mocks", value: "6" },
      { label: "People-mgmt mocks", value: "8" },
      { label: "Title elevation", value: "IC → EM" },
    ],
    accent: "signal",
  },
  {
    id: "p06",
    client: "Daniel O.",
    role: "Director of Operations",
    company: "Series B SaaS",
    category: "Operations",
    duration: "9 weeks",
    location: "London, UK",
    result: "Director-level offer at $240k+",
    description:
      "Daniel wanted his first director-level role. We targeted Series B/C startups where his ops chops mattered most, ran exec-level outreach, and prepped him for founder interviews. He signed at $240k base + equity in nine weeks.",
    metrics: [
      { label: "Founder interviews", value: "12" },
      { label: "Final-round talks", value: "4" },
      { label: "Director-level offers", value: "2" },
      { label: "Base + equity", value: "$240k+" },
    ],
    accent: "amber",
  },
];

const categories = ["All", "Engineering", "Product", "Data", "Security", "Operations"] as const;

export default function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-signal-400/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="section-number mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-signal-400" />
              <span className="text-signal-400">Portfolio</span>
              <span className="text-cream-400">— Real clients · Real outcomes</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-display-1 font-serif text-cream-50 max-w-[18ch] text-balance mb-10">
              Six recent searches.{" "}
              <span className="font-serif-italic text-signal-400">Six offer letters.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-cream-300 text-xl leading-relaxed max-w-3xl text-pretty">
              Names changed for privacy. Outcomes verified. These are real engagements from the past 18 months — across product, engineering, data, security, and operations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FILTERS */}
      <section className="relative pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-cream-100/[0.06]">
              <span className="text-cream-400 text-xs font-mono uppercase tracking-[0.15em] mr-3">
                Filter ·
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all ${
                    filter === cat
                      ? "bg-signal-400 text-ink-950 border-signal-400"
                      : "bg-transparent text-cream-300 border-cream-100/10 hover:border-cream-100/30 hover:text-cream-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="relative pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div layout className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-3xl bg-ink-900 border border-cream-100/[0.06] hover:border-signal-400/30 hover-lift transition-all duration-500"
                >
                  {/* Accent strip */}
                  <div
                    className={`h-1 w-full ${
                      p.accent === "signal"
                        ? "bg-signal-400"
                        : p.accent === "amber"
                        ? "bg-amber-accent"
                        : "bg-cream-200"
                    }`}
                  />

                  <div className="p-8 lg:p-10">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-100/[0.04] border border-cream-100/[0.08]">
                        <span className="text-xs font-mono uppercase tracking-wider text-cream-400">
                          {p.category}
                        </span>
                      </div>
                      <span className="text-cream-500 font-mono text-xs">{p.id}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-serif text-cream-50 mb-2 text-balance">
                      {p.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cream-300 mb-6">
                      <span className="text-signal-400 font-medium">@ {p.company}</span>
                      <span className="w-1 h-1 rounded-full bg-cream-500" />
                      <span className="text-sm text-cream-400">via {p.client}</span>
                    </div>

                    {/* Result banner */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-signal-400/[0.08] to-transparent border border-signal-400/20 px-5 py-4 mb-6">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-signal-400 shrink-0" />
                        <span className="text-cream-50 font-serif-italic text-lg leading-snug">
                          {p.result}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cream-300 leading-relaxed text-pretty mb-8">
                      {p.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-px bg-cream-100/[0.06] rounded-xl overflow-hidden mb-6">
                      {p.metrics.map((m) => (
                        <div key={m.label} className="bg-ink-900 px-4 py-3">
                          <div className="text-cream-400 text-xs font-mono uppercase tracking-wider mb-1">
                            {m.label}
                          </div>
                          <div className="text-cream-50 text-lg font-serif">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Footer meta */}
                    <div className="flex items-center justify-between pt-6 border-t border-cream-100/[0.06] text-xs text-cream-400 font-mono uppercase tracking-wider">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {p.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {p.location}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-cream-400 group-hover:text-signal-400 transition-colors" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 border border-cream-100/[0.08] p-10 md:p-16">
              <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-signal-400/[0.1] blur-[100px]" />
              <div className="relative grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-display-3 font-serif text-cream-50 text-balance mb-4">
                    Want a story like these?{" "}
                    <span className="font-serif-italic text-signal-400">Let&apos;s start yours.</span>
                  </h2>
                  <p className="text-cream-300 text-lg max-w-xl text-pretty">
                    Every engagement begins with a free strategy call. Even if we don&apos;t end up working together, you&apos;ll leave with a clear plan.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-4 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_50px_-5px_rgba(184,255,20,0.7)]"
                  >
                    Start your job search
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
