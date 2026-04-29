"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Search,
  LayoutDashboard,
  FileText,
  Mail,
  Mic,
  Star,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import FadeIn from "@/components/FadeIn";
import WordsReveal from "@/components/WordsReveal";
import CompanyMarquee from "@/components/CompanyMarquee";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { value: 500, suffix: "+", label: "Successful clients", subtle: "across 30+ countries" },
  { value: 99, suffix: "%", label: "Success rate", subtle: "Top 10% on Upwork" },
  { value: 3000, suffix: "+", label: "Hours worked", subtle: "5+ years experience" },
  { value: 200, suffix: "+", label: "Projects completed", subtle: "with measurable outcomes" },
];

const previewServices = [
  {
    icon: Search,
    title: "Job Search & Hunting",
    description: "I scour every job board, niche site, and hidden network to surface roles that actually fit your goals.",
  },
  {
    icon: LayoutDashboard,
    title: "Application Dashboard",
    description: "A live tracker of every role applied, status, follow-up, and interview pipeline — full transparency.",
  },
  {
    icon: FileText,
    title: "Resume Customization",
    description: "Each application gets a resume tuned to the role, keywords, and ATS — no generic templates.",
  },
  {
    icon: Mail,
    title: "Cover Letter Writing",
    description: "Personalized cover letters that recruiters actually read — written in your voice, not a template.",
  },
  {
    icon: Mic,
    title: "Interview Preparation",
    description: "Mock interviews, role-specific question banks, and behavioral story coaching that closes offers.",
  },
];

const testimonials = [
  {
    quote: "I had been applying for 8 months with zero traction. Within 6 weeks of working with Zohaib, I had 4 onsite interviews and an offer from Salesforce. He treats your job search like it's his own.",
    author: "Priya R.",
    role: "Senior Product Manager",
    company: "Salesforce",
    rating: 5,
  },
  {
    quote: "Zohaib's application dashboard alone changed my life. I always knew exactly where I stood, what was next, and never missed a follow-up. Landed at Snowflake in two months.",
    author: "Marcus W.",
    role: "Data Engineer",
    company: "Snowflake",
    rating: 5,
  },
  {
    quote: "The resume he built for me got more callbacks in two weeks than my old one did in a year. The interview coaching sealed the offer at Amazon. Worth every dollar.",
    author: "Sofia M.",
    role: "Software Engineer II",
    company: "Amazon",
    rating: 5,
  },
  {
    quote: "I was burned out from job hunting. Zohaib took the entire load off my plate — applications, follow-ups, prep. I just showed up to interviews. Now I'm at Tanium.",
    author: "James L.",
    role: "Security Analyst",
    company: "Tanium",
    rating: 5,
  },
];

const trustBadges = [
  { label: "Top Rated", subtle: "Top 10% Upwork" },
  { label: "5+ Years", subtle: "Experience" },
  { label: "99% Success", subtle: "Rate" },
  { label: "500+ Clients", subtle: "Placed" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full bg-signal-400/[0.08] blur-[120px]" />
          <div className="absolute bottom-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-amber-accent/[0.05] blur-[120px]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-signal-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-signal-400" />
            </span>
            <span className="text-xs text-cream-200 font-mono uppercase tracking-wider">
              Accepting 2 new clients · April 2026
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-display-1 font-serif text-cream-50 max-w-[20ch] text-balance mb-8">
            <WordsReveal
              text="Land your dream job faster — with a proven"
              delay={0.2}
            />
            <span className="block">
              <WordsReveal
                text="reverse recruiter."
                delay={0.7}
                highlight="reverse"
                highlightClassName="font-serif-italic text-signal-400"
              />
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg md:text-xl text-cream-300 max-w-2xl text-pretty leading-relaxed mb-10"
          >
            I&apos;m Zohaib. For 5+ years I&apos;ve handled the job search end-to-end for ambitious professionals — finding roles, customizing applications, and prepping interviews — so they land offers at places like{" "}
            <span className="text-cream-100 font-medium">Amazon, Salesforce, Snowflake, and Tanium</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-4 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_50px_-5px_rgba(184,255,20,0.7)]"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-4 bg-cream-100/[0.04] border border-cream-100/[0.1] text-cream-100 rounded-full font-medium hover:bg-cream-100/[0.08] hover:border-cream-100/20 transition-all"
            >
              View Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-cream-100/[0.06] rounded-2xl overflow-hidden max-w-3xl"
          >
            {trustBadges.map((b) => (
              <div key={b.label} className="bg-ink-950 px-5 py-4">
                <div className="text-cream-50 font-medium text-sm">{b.label}</div>
                <div className="text-cream-400 text-xs mt-0.5 font-mono uppercase tracking-wider">{b.subtle}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-400 text-xs font-mono uppercase tracking-[0.2em] flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cream-400 to-transparent" />
        </motion.div>
      </section>

      {/* COMPANY MARQUEE */}
      <section className="relative py-16 border-y border-cream-100/[0.06]">
        <FadeIn className="text-center mb-8">
          <p className="section-number">Clients have landed at</p>
        </FadeIn>
        <CompanyMarquee />
      </section>

      {/* STATS */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            number="01"
            label="Numbers, not promises"
            title={
              <>
                Five years of work,{" "}
                <span className="font-serif-italic text-signal-400">measured in offers</span>.
              </>
            }
            description="Every number below comes from real client outcomes. No vanity metrics."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-cream-100/[0.06] rounded-3xl overflow-hidden">
            {stats.map((stat, i) => (
              <FadeIn
                key={stat.label}
                delay={i * 0.1}
                className="bg-ink-900 p-8 lg:p-10 group hover:bg-ink-800 transition-colors duration-500"
              >
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl lg:text-6xl font-serif text-cream-50 tabular-nums">
                    <CountUp to={stat.value} />
                  </span>
                  <span className="text-3xl lg:text-4xl font-serif-italic text-signal-400">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-cream-100 font-medium mb-1.5">{stat.label}</div>
                <div className="text-xs text-cream-400 font-mono uppercase tracking-wider">
                  {stat.subtle}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-7">
              <FadeIn>
                <p className="section-number mb-4 inline-flex items-center gap-3">
                  <span className="w-8 h-px bg-signal-400" />
                  <span className="text-signal-400">02</span>
                  <span className="text-cream-400">What I do</span>
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-display-3 font-serif text-cream-50 text-balance">
                  The full stack of a job search,{" "}
                  <span className="font-serif-italic text-signal-400">handled for you</span>.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 lg:pt-12">
              <FadeIn delay={0.2}>
                <p className="text-cream-300 text-lg leading-relaxed text-pretty">
                  Most candidates lose months to inefficient searches and inconsistent applications. I take it off your plate so you can focus on interviews — and offers.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream-100/[0.06] rounded-3xl overflow-hidden">
            {previewServices.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <div className="group relative bg-ink-900 p-8 h-full hover:bg-ink-800 transition-colors duration-500">
                  <div className="w-12 h-12 rounded-xl bg-signal-400/10 border border-signal-400/20 flex items-center justify-center mb-6 group-hover:bg-signal-400/20 transition-colors">
                    <service.icon className="w-5 h-5 text-signal-400" />
                  </div>
                  <h3 className="text-xl font-medium text-cream-50 mb-3">{service.title}</h3>
                  <p className="text-cream-300 leading-relaxed text-pretty">{service.description}</p>
                  <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-cream-400 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={previewServices.length * 0.08}>
              <Link
                href="/services"
                className="group relative bg-ink-900 p-8 h-full flex flex-col justify-between hover:bg-ink-800 transition-colors duration-500"
              >
                <Sparkles className="w-5 h-5 text-signal-400 mb-6" />
                <div>
                  <h3 className="text-xl font-medium text-cream-50 mb-3">
                    See the full service breakdown
                  </h3>
                  <p className="text-cream-300 leading-relaxed text-pretty mb-6">
                    Pricing, deliverables, and exactly how each part of the process works.
                  </p>
                  <span className="inline-flex items-center gap-2 text-signal-400 font-medium link-underline">
                    Explore services
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROCESS / EDITORIAL */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            number="03"
            label="The process"
            title={
              <>
                A repeatable system, refined over{" "}
                <span className="font-serif-italic text-signal-400">500+ job searches</span>.
              </>
            }
          />

          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Discovery & strategy",
                body: "We map your goals, target companies, salary expectations, and timeline. I audit your current materials and identify the fastest path to offers.",
              },
              {
                step: "02",
                title: "Daily applications",
                body: "I run your job search every weekday — sourcing roles, customizing each resume and cover letter, applying, and tracking everything in your dashboard.",
              },
              {
                step: "03",
                title: "Interview & close",
                body: "When recruiters reach out, I prep you for every stage — behavioral, technical, system design, negotiation. We don't stop until you've signed an offer you love.",
              },
            ].map((p, i) => (
              <FadeIn key={p.step} delay={i * 0.15}>
                <div className="relative pl-6 border-l border-cream-100/10 hover:border-signal-400/40 transition-colors h-full">
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-signal-400" />
                  <div className="text-signal-400 font-mono text-sm mb-4">{p.step}</div>
                  <h3 className="text-2xl font-serif text-cream-50 mb-4">{p.title}</h3>
                  <p className="text-cream-300 leading-relaxed text-pretty">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            number="04"
            label="What clients say"
            title={
              <>
                The only review that matters is{" "}
                <span className="font-serif-italic text-signal-400">an offer letter</span>.
              </>
            }
            description="Here's what clients said after they got theirs."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={(i % 2) * 0.1}>
                <article className="group relative bg-ink-900 border border-cream-100/[0.06] hover:border-signal-400/30 rounded-3xl p-8 lg:p-10 h-full hover-lift transition-all duration-500">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-signal-400 text-signal-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-cream-100 text-lg leading-relaxed text-pretty mb-8">
                    <span className="font-serif-italic text-signal-400 text-2xl mr-1">&ldquo;</span>
                    {t.quote}
                    <span className="font-serif-italic text-signal-400 text-2xl ml-1">&rdquo;</span>
                  </blockquote>
                  <div className="flex items-center gap-4 pt-6 border-t border-cream-100/[0.06]">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-signal-400/30 to-amber-accent/30 border border-cream-100/10 flex items-center justify-center text-cream-50 font-medium">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-cream-50 font-medium">{t.author}</div>
                      <div className="text-cream-400 text-sm">
                        {t.role} <span className="text-cream-500">·</span>{" "}
                        <span className="text-signal-400">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 border border-cream-100/[0.08] p-10 md:p-20">
              {/* Glow */}
              <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-signal-400/[0.12] blur-[100px]" />
              <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-amber-accent/[0.06] blur-[100px]" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal-400/10 border border-signal-400/20 mb-8">
                  <TrendingUp className="w-3.5 h-3.5 text-signal-400" />
                  <span className="text-xs text-signal-200 font-mono uppercase tracking-wider">
                    Outcomes-focused, not hourly
                  </span>
                </div>
                <h2 className="text-display-2 font-serif text-cream-50 text-balance max-w-[20ch] mb-8">
                  Stop applying alone.{" "}
                  <span className="font-serif-italic text-signal-400">
                    Start landing offers.
                  </span>
                </h2>
                <p className="text-cream-300 text-lg max-w-2xl mb-10 text-pretty">
                  Limited slots each month. If we&apos;re a fit, we&apos;ll start within 48 hours and you&apos;ll see your first applications go out by week one.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-4 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_50px_-5px_rgba(184,255,20,0.7)]"
                  >
                    Start your job search
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-4 text-cream-100 hover:text-signal-400 transition-colors"
                  >
                    See client outcomes
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-signal-400" />
                    <span>Free 30-min strategy call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-signal-400" />
                    <span>No long-term contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-signal-400" />
                    <span>NDA available on request</span>
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
