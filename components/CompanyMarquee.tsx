"use client";

const companies = [
  "Amazon",
  "Salesforce",
  "Snowflake",
  "Tanium",
  "Stripe",
  "Shopify",
  "Atlassian",
  "Datadog",
  "MongoDB",
  "Twilio",
  "Cloudflare",
  "Notion",
];

export default function CompanyMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-ink-950 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-ink-950 to-transparent pointer-events-none" />

      <div className="marquee-track">
        {[...companies, ...companies].map((company, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal-400/60" />
            <span className="text-2xl md:text-3xl font-serif-italic text-cream-300/70 whitespace-nowrap">
              {company}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
