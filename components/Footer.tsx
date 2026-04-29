import Link from "next/link";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-cream-100/[0.06] bg-ink-950">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        {/* Big CTA */}
        <div className="grid lg:grid-cols-12 gap-10 pb-20 border-b border-cream-100/[0.06]">
          <div className="lg:col-span-8">
            <p className="section-number mb-6">— Let&apos;s talk</p>
            <h2 className="text-display-2 font-serif text-cream-50 mb-6 text-balance">
              Ready to <span className="font-serif-italic text-signal-400">land your dream job?</span>
            </h2>
            <p className="text-cream-300 text-lg max-w-xl text-pretty">
              I take on a limited number of clients each month to ensure every job search gets the attention it deserves. Reach out — let&apos;s see if we&apos;re a fit.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end items-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-signal-400 text-ink-950 rounded-full font-medium hover:bg-signal-300 transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(184,255,20,0.7)]"
            >
              Start your job search
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 pt-16">
          <div className="col-span-2 lg:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-signal-400 flex items-center justify-center">
                <span className="text-ink-950 font-serif-italic text-xl leading-none translate-y-[1px]">Z</span>
              </div>
              <span className="text-cream-50 font-medium">Zohaib Ahmed</span>
            </Link>
            <p className="text-cream-400 text-sm max-w-sm leading-relaxed">
              Reverse recruiter and job application assistant. Helping ambitious professionals shortcut the job search and land roles at top companies.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signal-400/10 border border-signal-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-400 animate-pulse-soft" />
              <span className="text-xs text-signal-200 font-mono uppercase tracking-wider">
                Available · 2 spots open
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs uppercase tracking-[0.15em] text-cream-400 mb-4 font-mono">
              Pages
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-cream-200 hover:text-signal-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-cream-200 hover:text-signal-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-cream-200 hover:text-signal-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-cream-200 hover:text-signal-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-cream-200 hover:text-signal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.15em] text-cream-400 mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="text-cream-200 hover:text-signal-400 transition-colors">Job Hunting</Link></li>
              <li><Link href="/services" className="text-cream-200 hover:text-signal-400 transition-colors">Application Mgmt</Link></li>
              <li><Link href="/services" className="text-cream-200 hover:text-signal-400 transition-colors">Resume</Link></li>
              <li><Link href="/services" className="text-cream-200 hover:text-signal-400 transition-colors">Cover Letter</Link></li>
              <li><Link href="/services" className="text-cream-200 hover:text-signal-400 transition-colors">Interview Prep</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.15em] text-cream-400 mb-4 font-mono">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:hello@zohaibahmed.com" className="inline-flex items-center gap-2 text-cream-200 hover:text-signal-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@zohaibahmed.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-cream-200 hover:text-signal-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://upwork.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-cream-200 hover:text-signal-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                  Upwork (Top Rated)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream-100/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-cream-400 font-mono uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Zohaib Ahmed · All rights reserved</p>
          <p className="flex items-center gap-3">
            <span>Top Rated · Top 10% on Upwork</span>
            <span className="w-1 h-1 rounded-full bg-cream-400/40" />
            <span>5+ years</span>
            <span className="w-1 h-1 rounded-full bg-cream-400/40" />
            <span>500+ clients</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
