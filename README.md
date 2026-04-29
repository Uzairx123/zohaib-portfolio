# Zohaib Ahmed — Reverse Recruiter Portfolio

A premium, conversion-focused personal website built for **Zohaib Ahmed**, a Top-Rated reverse recruiter and job application assistant. Production-ready, fully responsive, animation-rich, and ready to deploy to Vercel or Netlify in minutes.

---

## ✨ What's inside

- **5 fully-built pages** — Home, About, Services, Portfolio, Contact
- **Animated hero** with word-by-word reveal animation
- **Animated counter stats** (clients, success rate, hours, projects)
- **Company logo marquee** (Amazon, Salesforce, Snowflake, Tanium, etc.)
- **Editorial-grade typography** — Instrument Serif italic display + Geist Sans body
- **Working contact form** with validation, loading states, and email delivery via Resend
- **Filterable portfolio grid** with smooth animated transitions
- **FAQ accordion** with smooth open/close
- **Mobile-first responsive design** at every breakpoint
- **Premium dark theme** with custom electric-lime accent and warm cream typography
- **Glassmorphism, gradient borders, animated gradient orbs, grain overlay**
- **Smooth scroll-triggered fade-in animations** throughout
- **Accessible** — focus-visible states, semantic HTML, reduced-motion support, aria-labels
- **SEO-ready** — full Open Graph & Twitter card metadata

---

## 🛠 Tech Stack

| Layer | Tool |
|---|---|
| Framework | **Next.js 14** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** with custom design tokens |
| Animations | **Framer Motion** |
| Icons | **Lucide React** |
| Forms | **React Hook Form** + **Zod** validation |
| Email | **Resend** (3,000 free emails/month) |

No database. No backend to maintain. Fully deployable on Vercel/Netlify free tier.

---

## 📁 Folder Structure

```
zohaib-portfolio/
├── app/
│   ├── about/page.tsx          # About page (story, timeline, values)
│   ├── api/
│   │   └── contact/route.ts    # API route — sends contact emails via Resend
│   ├── contact/page.tsx        # Contact form + FAQ
│   ├── portfolio/page.tsx      # Project grid with category filter
│   ├── services/page.tsx       # 5 detailed service cards
│   ├── globals.css             # Global styles, fonts, custom CSS
│   ├── layout.tsx              # Root layout (Navbar, Footer, metadata)
│   └── page.tsx                # Home / landing page
├── components/
│   ├── CompanyMarquee.tsx      # Animated logo strip
│   ├── ContactForm.tsx         # Form with validation
│   ├── CountUp.tsx             # Animated number counter
│   ├── FadeIn.tsx              # Scroll-triggered fade wrapper
│   ├── Footer.tsx              # Footer with CTA
│   ├── Navbar.tsx              # Sticky animated navbar
│   ├── SectionHeader.tsx       # Reusable section heading
│   └── WordsReveal.tsx         # Hero text word-by-word reveal
├── public/                     # Static assets (favicons, etc.)
├── .env.local.example          # Env variable template
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Quick Start (Local)

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and add:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=hello@zohaibahmed.com
CONTACT_EMAIL_FROM=onboarding@resend.dev
```

**How to get a Resend API key (free, 2 minutes):**
1. Go to **[resend.com](https://resend.com)** and sign up.
2. Verify your account email.
3. Go to **API Keys → Create API Key** and copy it into `RESEND_API_KEY`.
4. Set `CONTACT_EMAIL_TO` to your real email address (where you want client inquiries to land).
5. For `CONTACT_EMAIL_FROM`, you can use `onboarding@resend.dev` for testing. Once you verify your own domain in Resend, switch this to `hello@yourdomain.com` for better deliverability.

### 3. Run the dev server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** to see the site.

The contact form will work end-to-end — submit it and check the inbox you set in `CONTACT_EMAIL_TO`.

---

## 🌐 Deploy

### Option A — Vercel (recommended, free)

1. Push the project to GitHub.
2. Go to **[vercel.com/new](https://vercel.com/new)** and import your repo.
3. Vercel auto-detects Next.js — just hit **Deploy**.
4. After the first deploy, go to **Project → Settings → Environment Variables** and add:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO`
   - `CONTACT_EMAIL_FROM`
5. Hit **Redeploy** so the new env vars take effect.

Done. Your live URL will be something like `https://zohaib-portfolio.vercel.app`. You can attach a custom domain in **Settings → Domains**.

### Option B — Netlify

1. Push the project to GitHub.
2. Go to **[app.netlify.com](https://app.netlify.com)**, click **Add new site → Import existing project**.
3. Select your repo. Netlify auto-detects Next.js.
4. Under **Site settings → Environment variables**, add the same three env vars listed above.
5. Trigger a new deploy.

---

## 🎨 Customizing the Content

Everything is plain TypeScript/React — no CMS, no DB, no magic. Open the page files and edit the content arrays at the top:

| Want to change... | Edit |
|---|---|
| Hero headline | `app/page.tsx` (the `<h1>` in the HERO section) |
| Stats numbers | `app/page.tsx` — `stats` array |
| Testimonials | `app/page.tsx` — `testimonials` array |
| Services | `app/services/page.tsx` — `services` array |
| Projects | `app/portfolio/page.tsx` — `projects` array |
| Timeline / journey | `app/about/page.tsx` — `journey` array |
| FAQ | `app/contact/page.tsx` — `faqs` array |
| Footer links / email | `components/Footer.tsx` |
| Nav items | `components/Navbar.tsx` — `navItems` array |

### Theme colors

All colors are defined in `tailwind.config.ts` under `theme.extend.colors`. The four key palettes:

- `ink` — dark backgrounds (`ink-950` is the page bg)
- `cream` — warm off-white text colors
- `signal` — electric lime accent (the "GO / approved" color)
- `amber-accent` — secondary warm accent

### Fonts

Loaded from Google Fonts in `app/globals.css`:
- **Instrument Serif** (italic) — display
- **Geist Sans** — body
- **Geist Mono** — labels & section numbers

To swap fonts, replace the `@import` URLs in `globals.css` and update the `fontFamily` block in `tailwind.config.ts`.

---

## 📧 How the Contact Form Works

1. User submits the form on `/contact`.
2. The data is validated client-side via **Zod** (also re-validated server-side).
3. The form POSTs to `/api/contact` (a Next.js Route Handler).
4. The handler calls **Resend** to email a beautifully-formatted message to `CONTACT_EMAIL_TO`.
5. The user sees a success state; you get the email with a `Reply-To` header set to the sender, so you can reply directly from your inbox.

If Resend isn't configured (no API key), the form will return a clean error and prompt the user to email directly — so the site never breaks.

---

## 🧪 Building for Production

```bash
npm run build
npm run start
```

Builds are static-optimized where possible, and the contact API route runs as a Vercel serverless function (or Netlify function).

---

## 📐 Performance & Accessibility

- All animations respect `prefers-reduced-motion`
- Lighthouse-friendly: minimal JS, no large images, only Google Fonts loaded
- Semantic HTML, focus-visible outlines, aria-labels on icon buttons
- Mobile-first responsive at 320px, 640px, 768px, 1024px, 1400px breakpoints

---

## 📝 License

This project is built for Zohaib Ahmed's personal use. Code is yours to modify freely.

---

## ❓ Troubleshooting

**"Email service is not configured" error on contact form**
→ You haven't set `RESEND_API_KEY` and `CONTACT_EMAIL_TO` in `.env.local` (locally) or in your Vercel/Netlify dashboard (production).

**Emails go to spam**
→ Verify your custom domain in Resend (under **Domains** in their dashboard) and switch `CONTACT_EMAIL_FROM` to an address on your verified domain.

**Animations feel laggy**
→ Most likely `prefers-reduced-motion` is on, or you're on a low-power device. Animations auto-disable in those cases.

**Fonts look generic on first load**
→ Google Fonts can have a brief load delay. The site uses fallbacks (Georgia, system-ui) so layout never shifts.

---

Built with care. Ship it. 🚀
