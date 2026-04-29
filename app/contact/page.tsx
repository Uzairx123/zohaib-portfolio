"use client";

import { Mail, MapPin, Clock, Linkedin, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@zohaibahmed.com",
    href: "mailto:hello@zohaibahmed.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/zohaibahmed",
    href: "https://linkedin.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Karachi, Pakistan · Working globally",
    href: null,
  },
  {
    icon: Clock,
    label: "Reply time",
    value: "Within 24 hours, usually faster",
    href: null,
  },
];

const faqs = [
  {
    q: "How does pricing work?",
    a: "Most engagements are flat monthly retainers, scoped to your job-search needs. We'll align on pricing during your free strategy call — and there are no long-term contracts.",
  },
  {
    q: "How quickly can we start?",
    a: "Within 48 hours of a signed agreement. I run a tight intake call, review your materials, and your first applications usually go out by week one.",
  },
  {
    q: "Are you available for full-time engagements only?",
    a: "No. I work with clients on month-to-month retainers — you can pause, scale up, or scale down as your search evolves. Most clients work with me for 6–12 weeks until they've signed.",
  },
  {
    q: "What kinds of roles do you work on?",
    a: "Software engineering, product, data, security, and operations — across IC, manager, and director tracks. Most clients are mid-senior level, but I take on staff and director-level searches too.",
  },
  {
    q: "Do you guarantee a job offer?",
    a: "I guarantee process, not outcomes — but my track record speaks for itself: 99%+ success rate across 500+ clients. If you're not seeing recruiter conversations by week 3, I dig back in at no extra charge until we fix it.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes. NDAs are available on request — I take confidentiality seriously, especially for clients who are still employed and don't want their search exposed.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-signal-400/[0.06] blur-[120px]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="section-number mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-signal-400" />
              <span className="text-signal-400">Contact</span>
              <span className="text-cream-400">— Let&apos;s talk about your job search</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-display-1 font-serif text-cream-50 max-w-[16ch] text-balance mb-10">
              Tell me where you&apos;re stuck.{" "}
              <span className="font-serif-italic text-signal-400">I&apos;ll tell you the path.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-cream-300 text-xl leading-relaxed max-w-3xl text-pretty">
              Drop me a note below or email me directly. I read every message myself and reply within 24 hours — usually much faster.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="relative py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Form */}
            <FadeIn className="lg:col-span-7">
              <div className="rounded-3xl bg-ink-900 border border-cream-100/[0.06] p-8 lg:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-serif text-cream-50 mb-3">
                    Send a <span className="font-serif-italic text-signal-400">message</span>
                  </h2>
                  <p className="text-cream-300">
                    The more you share now, the better I can help on the first reply.
                  </p>
                </div>
                <ContactForm />
              </div>
            </FadeIn>

            {/* Info */}
            <div className="lg:col-span-5 space-y-6">
              <FadeIn delay={0.1}>
                <div className="rounded-3xl bg-gradient-to-br from-signal-400/[0.08] to-ink-900 border border-signal-400/20 p-8 lg:p-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal-400/10 border border-signal-400/20 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal-400 animate-pulse-soft" />
                    <span className="text-xs text-signal-200 font-mono uppercase tracking-wider">
                      Currently accepting clients
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif text-cream-50 mb-3">
                    2 spots open this month
                  </h3>
                  <p className="text-cream-300 leading-relaxed text-pretty">
                    I keep my client roster tight to give every search proper attention. If we&apos;re a fit, we can start within 48 hours.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-3xl bg-ink-900 border border-cream-100/[0.06] p-8 lg:p-10">
                  <h3 className="text-cream-400 text-xs font-mono uppercase tracking-[0.15em] mb-6">
                    Or reach me directly
                  </h3>
                  <ul className="space-y-5">
                    {contactDetails.map((item) => {
                      const content = (
                        <>
                          <div className="w-10 h-10 rounded-xl bg-cream-100/[0.04] border border-cream-100/[0.08] flex items-center justify-center shrink-0 group-hover:bg-signal-400/10 group-hover:border-signal-400/30 transition-colors">
                            <item.icon className="w-4 h-4 text-cream-300 group-hover:text-signal-400 transition-colors" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-mono uppercase tracking-wider text-cream-400 mb-0.5">
                              {item.label}
                            </div>
                            <div className="text-cream-100 truncate">{item.value}</div>
                          </div>
                        </>
                      );
                      return (
                        <li key={item.label}>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener" : undefined}
                              className="group flex items-center gap-4"
                            >
                              {content}
                            </a>
                          ) : (
                            <div className="group flex items-center gap-4">{content}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="rounded-3xl bg-ink-900 border border-cream-100/[0.06] p-8 lg:p-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-signal-400/10 border border-signal-400/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-signal-400" />
                    </div>
                    <div>
                      <h3 className="text-cream-50 font-medium mb-2">Free strategy call</h3>
                      <p className="text-cream-300 text-sm leading-relaxed">
                        Every inquiry includes a complimentary 30-minute call to map your situation — even if you don&apos;t end up hiring me.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <FadeIn>
            <p className="section-number mb-6 inline-flex items-center gap-3">
              <span className="w-8 h-px bg-signal-400" />
              <span className="text-signal-400">FAQ</span>
              <span className="text-cream-400">— Common questions</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-display-3 font-serif text-cream-50 text-balance mb-16">
              Things people <span className="font-serif-italic text-signal-400">always ask</span>.
            </h2>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <FadeIn key={i} delay={i * 0.05}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left rounded-2xl bg-ink-900 border border-cream-100/[0.06] hover:border-signal-400/30 transition-all overflow-hidden"
                  >
                    <div className="flex items-center justify-between gap-4 p-6">
                      <h3 className="text-lg font-medium text-cream-50">{faq.q}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-cream-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-signal-400" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 text-cream-300 leading-relaxed text-pretty">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
