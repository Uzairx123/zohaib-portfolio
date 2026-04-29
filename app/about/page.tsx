"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Trophy,
  Users,
  Target,
  Heart,
  Lightbulb,
  Globe,
  Clock,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import CountUp from "@/components/CountUp";

const journey = [
  {
    year: "2020",
    title: "First freelance gigs",
    body: "Started helping a handful of friends restructure resumes and write cover letters on the side. Word-of-mouth referrals quickly outpaced my day job.",
  },
  {
    year: "2021",
    title: "Full-time on Upwork",
    body: "Went full-time as a freelance job application assistant. Built my first version of the application tracking dashboard for clients.",
  },
  {
    year: "2022",
    title: "Hit Top Rated status",
    body: "Achieved Top Rated and entered the Top 10% of freelancers globally on Upwork. Crossed 100 successful clients placed.",
  },
  {
    year: "2023",
    title: "Crossed 250 clients",
    body: "Refined the reverse-recruiter playbook into a repeatable system. Clients started landing at top-tier companies — Amazon, Salesforce, Snowflake.",
  },
  {
    year: "2024",
    title: "500+ clients & growing",
    body: "Expanded into interview coaching and salary negotiation. 99%+ success rate maintained across roles from entry-level to staff and director.",
  },
  {
    year: "2026",
    title: "Where we are now",
    body: "Working with a select group of clients each month. Doubling down on personalized strategy, deeper interview prep, and outcome-based engagements.",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcome over output",
    body: "I'm not paid for hours — I'm paid for offers. Everything I do is in service of getting you a better job, faster.",
  },
  {
    icon: Heart,
    title: "Treat your search like mine",
    body: "I research your target companies, learn your story, and care about the outcome. You'll feel it in every application.",
  },
  {
    icon: Lightbulb,
    title: "Strategy before tactics",
    body: "Anyone can fire off applications. I start by mapping your strengths to the right roles before a single resume goes out.",
  },
  {
    icon: Globe,
    title: "Global reach, local fit",
    body: "I've worked with clients across 30+ countries and tailor every application to the regional and industry context.",
  },
];

const achievements = [
  { icon: Trophy, label: "Top Rated", subtle: "Top 10% Upwork" },
  { icon: Award, label: "5+ Years", subtle: "in the trenches" },
  { icon: Users, label: "500+ Clients", subtle: "successfully placed" },
  { icon: Clock, label: "3,000+ Hours", subtle: "logged & billed" },
];

export default function AboutPage() {
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
              <span className="text-signal-400">About</span>
              <span className="text-cream-400">— The person behind the offers</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-display-1 font-serif text-cream-50 max-w-[18ch] text-balance mb-10">
              I don&apos;t apply to jobs.{" "}
              <span className="font-serif-italic text-signal-400">I land offers.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-cream-300 text-xl leading-relaxed max-w-3xl text-pretty">
              I&apos;m Zohaib Ahmed — a reverse recruiter who&apos;s spent the last five years obsessing over one question: <span className="text-cream-100">why do good people stay stuck in bad job searches?</span> The answer turned into a career.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* IMAGE / BRAND BLOCK */}
      <section className="relative py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 border border-cream-100/[0.08]">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,255,20,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(245,185,66,0.08),transparent_50%)]" />

                {/* Big initials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[14rem] font-serif-italic text-cream-100/[0.04] leading-none select-none">
                    ZA
                  </span>
                </div>

                {/* Avatar circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-44 h-44 rounded-full bg-gradient-to-br from-signal-400 to-signal-600 flex items-center justify-center shadow-[0_0_80px_-10px_rgba(184,255,20,0.5)]">
                    <span className="text-7xl font-serif-italic text-ink-950">Z</span>
                  </div>
                </div>

                {/* Status badge */}
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal-400 animate-pulse-soft" />
                  <span className="text-xs text-cream-200 font-mono uppercase tracking-wider">
                    Available for hire
                  </span>
                </div>

                {/* Bottom card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-strong">
                  <div className="text-cream-50 font-medium">Zohaib Ahmed</div>
                  <div className="text-cream-400 text-sm mt-1">Reverse Recruiter · Karachi, PK</div>
                </div>
              </div>
            </FadeIn>

            <div className="lg:col-span-7 lg:pl-10">
              <FadeIn delay={0.1}>
                <p className="section-number mb-6">— My story, in short</p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <h2 className="text-display-3 font-serif text-cream-50 text-balance mb-8">
                  From a side hustle to a career-defining{" "}
                  <span className="font-serif-italic text-signal-400">obsession</span>.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-6 text-cream-300 text-lg leading-relaxed text-pretty">
                  <p>
                    Five years ago, I helped a friend rewrite his resume. He landed at a Fortune 500 within weeks. Then his coworker asked. Then a stranger on Upwork. Six months later I was full-time helping people land jobs they thought were out of reach.
                  </p>
                  <p>
                    What started as &ldquo;just resumes&rdquo; turned into a complete reverse-recruiting practice — sourcing roles, customizing every application, building tracking dashboards, prepping interviews, and negotiating offers. The whole pipeline.
                  </p>
                  <p>
                    Today, I&apos;m a <span className="text-signal-400 font-medium">Top Rated freelancer in the Top 10%</span> on Upwork, with a <span className="text-cream-50 font-medium">99%+ success rate</span> across <span className="text-cream-50 font-medium">500+ clients</span>. They&apos;ve landed at companies like Amazon, Salesforce, Snowflake, Tanium, and dozens more — across software, data, product, security, and operations.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            number="01"
            label="Recognition"
            title={
              <>
                Five years of work,{" "}
                <span className="font-serif-italic text-signal-400">verified</span>.
              </>
            }
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream-100/[0.06] rounded-3xl overflow-hidden">
            {achievements.map((a, i) => (
              <FadeIn key={a.label} delay={i * 0.1}>
                <div className="bg-ink-900 p-8 lg:p-10 h-full hover:bg-ink-800 transition-colors duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-signal-400/10 border border-signal-400/20 flex items-center justify-center mb-6 group-hover:bg-signal-400/20 transition-colors">
                    <a.icon className="w-5 h-5 text-signal-400" />
                  </div>
                  <div className="text-cream-50 text-2xl font-serif mb-1">{a.label}</div>
                  <div className="text-cream-400 text-xs uppercase tracking-wider font-mono">
                    {a.subtle}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-10">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-cream-400">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif text-signal-400">
                  <CountUp to={99} suffix="%" />
                </span>
                <span>Job offer success rate</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-cream-500" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif text-signal-400">
                  <CountUp to={30} suffix="+" />
                </span>
                <span>Countries served</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-cream-500" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif text-signal-400">
                  <CountUp to={200} suffix="+" />
                </span>
                <span>Projects completed</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            number="02"
            label="The journey"
            title={
              <>
                A timeline,{" "}
                <span className="font-serif-italic text-signal-400">milestone by milestone</span>.
              </>
            }
          />

          <div className="relative max-w-4xl">
            {/* Vertical line */}
            <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-signal-400 via-cream-100/20 to-transparent" />

            {journey.map((j, i) => (
              <FadeIn key={j.year} delay={i * 0.1}>
                <div className="relative pl-10 md:pl-16 pb-16 last:pb-0 group">
                  <div className="absolute left-0 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full bg-ink-950 border-2 border-signal-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-signal-400" />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-4">
                    <span className="text-signal-400 font-mono text-sm">{j.year}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-cream-50">{j.title}</h3>
                  </div>
                  <p className="text-cream-300 text-lg leading-relaxed text-pretty max-w-2xl">
                    {j.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            number="03"
            label="How I work"
            title={
              <>
                Four principles,{" "}
                <span className="font-serif-italic text-signal-400">non-negotiable</span>.
              </>
            }
            description="These are the things I won't compromise on — they're the reason clients keep referring me."
          />

          <div className="grid md:grid-cols-2 gap-px bg-cream-100/[0.06] rounded-3xl overflow-hidden">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="bg-ink-900 p-10 h-full hover:bg-ink-800 transition-colors duration-500 group">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-signal-400/10 border border-signal-400/20 flex items-center justify-center group-hover:bg-signal-400/20 transition-colors">
                      <v.icon className="w-5 h-5 text-signal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif text-cream-50 mb-3">{v.title}</h3>
                      <p className="text-cream-300 leading-relaxed text-pretty">{v.body}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAL BRAND */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-signal-400/[0.08] via-ink-900 to-ink-950 border border-signal-400/20 p-10 md:p-16">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-signal-400/[0.1] blur-[100px]" />

              <div className="relative grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-7">
                  <p className="section-number mb-6">— My promise to you</p>
                  <h2 className="text-display-3 font-serif text-cream-50 text-balance mb-6">
                    If you don&apos;t get interviews,{" "}
                    <span className="font-serif-italic text-signal-400">we keep working</span>.
                  </h2>
                  <p className="text-cream-300 text-lg leading-relaxed text-pretty mb-8 max-w-xl">
                    I&apos;ve never had a client walk away without measurable progress. If by week three you&apos;re not seeing recruiter conversations, I dig back in — at no extra charge — until we fix what&apos;s broken.
                  </p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-4 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_50px_-5px_rgba(184,255,20,0.7)]"
                  >
                    Let&apos;s talk
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
                <div className="lg:col-span-5 lg:border-l lg:border-cream-100/[0.06] lg:pl-10">
                  <div className="space-y-8">
                    <div>
                      <div className="text-5xl font-serif text-signal-400 mb-2">
                        <CountUp to={48} />
                        <span className="text-2xl"> hrs</span>
                      </div>
                      <div className="text-cream-300">From signed agreement to first applications going out.</div>
                    </div>
                    <div>
                      <div className="text-5xl font-serif text-signal-400 mb-2">
                        <CountUp to={6} />
                        <span className="text-2xl"> weeks</span>
                      </div>
                      <div className="text-cream-300">Average time from kickoff to first offer for active clients.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
