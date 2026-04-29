"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Search,
  LayoutDashboard,
  FileText,
  Mail,
  Mic,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    id: "01",
    icon: Search,
    title: "Job Search & Job Hunting",
    tagline: "I find the roles. You focus on interviews.",
    description:
      "Job hunting is a full-time job — except no one pays you for it. I run your entire search every weekday, sourcing roles across LinkedIn, Indeed, niche boards, AngelList, Wellfound, company career pages, and hidden network channels.",
    benefits: [
      "Daily curated role pipeline tailored to your goals",
      "Sourcing across 20+ platforms (not just LinkedIn)",
      "Hidden roles via direct company outreach",
      "Filter out noise — only roles that match your level & comp",
      "Weekly strategy syncs to refine targeting",
    ],
    deliverables: "Daily role list · Weekly report · Outreach copy",
  },
  {
    id: "02",
    icon: LayoutDashboard,
    title: "Application Management Dashboard",
    tagline: "A real-time view of every application, every status.",
    description:
      "You'll have a live dashboard showing every application I've submitted on your behalf — company, role, date, status, follow-up dates, recruiter contact, and notes. Full transparency. No mystery work.",
    benefits: [
      "Live tracker of every application & status",
      "Recruiter contact info & follow-up reminders",
      "Pipeline view: applied → screened → interviewing → offer",
      "Historical analytics on response rates by company type",
      "Shareable view for accountability",
    ],
    deliverables: "Custom dashboard · Weekly digest · Monthly analytics",
  },
  {
    id: "03",
    icon: FileText,
    title: "Resume Customization",
    tagline: "Every application gets a tuned resume. No exceptions.",
    description:
      "Generic resumes lose. I rewrite your resume for each target role — adjusting positioning, keywords for ATS, achievement framing, and bullet ordering — so it lands at the top of recruiter screens, not in the reject pile.",
    benefits: [
      "ATS-optimized formatting & keyword targeting",
      "Achievement framing using STAR/CAR methods",
      "Quantified impact bullets that pass recruiter scans",
      "Role-specific positioning per application",
      "Master resume + tailored variants per industry",
    ],
    deliverables: "Master resume · Tailored variants · ATS scan report",
  },
  {
    id: "04",
    icon: Mail,
    title: "Cover Letter Writing",
    tagline: "Written in your voice. Read by humans.",
    description:
      "Most cover letters get skipped. Mine get read because they sound like you, reference the company specifically, and tell a sharp story in 3-4 paragraphs. Every letter is custom — no templates.",
    benefits: [
      "Custom-written for every role (not template fills)",
      "Tone-matched to your professional voice",
      "Company & role-specific research baked in",
      "Strong opening hooks that recruiters finish reading",
      "Quick turnaround — usually within 24 hours",
    ],
    deliverables: "Custom letter per role · Reusable hook bank · Voice guide",
  },
  {
    id: "05",
    icon: Mic,
    title: "Interview Preparation",
    tagline: "From first call to final round — fully prepped.",
    description:
      "When recruiters reach out, we shift gears. I prep you for every stage: phone screens, behavioral, technical, system design, take-homes, executive panels, and salary negotiation. Mock interviews included.",
    benefits: [
      "Role-specific question banks (not generic lists)",
      "Live mock interviews with detailed feedback",
      "STAR-format story bank for behavioral questions",
      "Technical & system design coaching",
      "Salary negotiation strategy & scripts",
    ],
    deliverables: "Question bank · Story library · Mock sessions · Negotiation scripts",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "48-hour kickoff",
    body: "From signed agreement to your first applications going out — guaranteed.",
  },
  {
    icon: Target,
    title: "Outcome-focused pricing",
    body: "Pay for results, not hours. Most clients work on a flat monthly retainer.",
  },
  {
    icon: Zap,
    title: "No long contracts",
    body: "Month-to-month engagements. Scale up, scale down, or pause whenever.",
  },
  {
    icon: TrendingUp,
    title: "Working until offer",
    body: "If we hit week 3 without traction, I dig back in at no extra charge.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-signal-400/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="section-number mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-signal-400" />
              <span className="text-signal-400">Services</span>
              <span className="text-cream-400">— Five ways I get you hired</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-display-1 font-serif text-cream-50 max-w-[18ch] text-balance mb-10">
              The full-stack reverse{" "}
              <span className="font-serif-italic text-signal-400">recruiter playbook</span>.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-cream-300 text-xl leading-relaxed max-w-3xl text-pretty">
              Most candidates lose to inefficient searches and inconsistent applications. Here&apos;s what I take off your plate — so you can focus on closing offers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES — large cards */}
      <section className="relative py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-6">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl bg-ink-900 border border-cream-100/[0.06] hover:border-signal-400/30 hover-lift transition-all duration-500">
                <div className="grid lg:grid-cols-12 gap-0">
                  {/* Left side */}
                  <div className="lg:col-span-7 p-8 lg:p-12 lg:border-r border-cream-100/[0.06]">
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-signal-400/10 border border-signal-400/20 flex items-center justify-center group-hover:bg-signal-400/20 transition-colors">
                          <service.icon className="w-6 h-6 text-signal-400" />
                        </div>
                        <span className="text-cream-400 font-mono text-sm">{service.id}</span>
                      </div>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-serif text-cream-50 mb-3 text-balance">
                      {service.title}
                    </h2>
                    <p className="text-signal-400 font-serif-italic text-xl mb-6">
                      {service.tagline}
                    </p>
                    <p className="text-cream-300 text-lg leading-relaxed text-pretty mb-8 max-w-2xl">
                      {service.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-100/[0.04] border border-cream-100/[0.08] mb-8">
                      <span className="text-xs text-cream-400 font-mono uppercase tracking-wider">
                        Deliverables
                      </span>
                      <span className="w-1 h-1 rounded-full bg-cream-500" />
                      <span className="text-xs text-cream-200">{service.deliverables}</span>
                    </div>

                    <div>
                      <Link
                        href="/contact"
                        className="group/cta inline-flex items-center gap-2 px-5 py-3 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(184,255,20,0.6)]"
                      >
                        Book this service
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right side - benefits */}
                  <div className="lg:col-span-5 p-8 lg:p-12 bg-gradient-to-br from-ink-900 to-ink-950">
                    <div className="text-cream-400 text-xs font-mono uppercase tracking-[0.15em] mb-6">
                      What you get
                    </div>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-signal-400 shrink-0 mt-0.5" />
                          <span className="text-cream-200 leading-relaxed text-pretty">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionHeader
            number="06"
            label="The fine print"
            title={
              <>
                Four{" "}
                <span className="font-serif-italic text-signal-400">guarantees</span>.
              </>
            }
            description="The terms I'm willing to put in writing — because they're the terms I deliver on every engagement."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream-100/[0.06] rounded-3xl overflow-hidden">
            {guarantees.map((g, i) => (
              <FadeIn key={g.title} delay={i * 0.1}>
                <div className="bg-ink-900 p-8 h-full hover:bg-ink-800 transition-colors duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-signal-400/10 border border-signal-400/20 flex items-center justify-center mb-6 group-hover:bg-signal-400/20 transition-colors">
                    <g.icon className="w-5 h-5 text-signal-400" />
                  </div>
                  <h3 className="text-xl font-medium text-cream-50 mb-3">{g.title}</h3>
                  <p className="text-cream-300 leading-relaxed text-sm text-pretty">{g.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 border border-cream-100/[0.08] p-10 md:p-20 text-center">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-signal-400/[0.1] blur-[100px]" />
              <div className="relative">
                <h2 className="text-display-2 font-serif text-cream-50 text-balance max-w-[16ch] mx-auto mb-8">
                  Not sure which service you need?{" "}
                  <span className="font-serif-italic text-signal-400">Let&apos;s figure it out.</span>
                </h2>
                <p className="text-cream-300 text-lg max-w-2xl mx-auto mb-10 text-pretty">
                  Book a free 30-minute strategy call. We&apos;ll map your situation and I&apos;ll give you a clear plan — even if you don&apos;t hire me.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-4 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_50px_-5px_rgba(184,255,20,0.7)]"
                >
                  Book free strategy call
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
