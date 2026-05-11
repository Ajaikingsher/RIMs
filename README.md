# RIMS Software Company — Website

> Enterprise website for **Rohan Info Mediaa Softwares (RIMS)** — Dairy Cooperative ERP specialists since 1996. Built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and ShadCN UI.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
cd d:\RIMs
npm install
```

### 2. Set up environment variables
```bash
copy .env.example .env.local
# Then edit .env.local with your values
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout (Navbar + Footer)
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── solutions/page.tsx    # Solutions page
│   ├── features/page.tsx     # Features page
│   ├── leadership/page.tsx   # Leadership & Team page
│   ├── clients/page.tsx      # Clients & Deployments page
│   ├── gallery/page.tsx      # Gallery page
│   ├── support/page.tsx      # Support page
│   ├── contact/page.tsx      # Contact page
│   ├── api/contact/route.ts  # Contact form API
│   ├── sitemap.ts            # Auto-generated sitemap
│   └── robots.ts             # SEO robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky navbar with mobile menu
│   │   └── Footer.tsx        # Enterprise footer
│   ├── ui/
│   │   ├── button.tsx        # ShadCN Button
│   │   └── card.tsx          # ShadCN Card
│   ├── sections/             # Shared home page sections
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── WorkflowSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── IndustriesSection.tsx
│   │   ├── CTASection.tsx
│   │   ├── SectionHeader.tsx
│   │   └── AnimatedCounter.tsx
│   └── pages/                # Page-specific components
│       ├── about/
│       ├── leadership/
│       ├── solutions/
│       ├── features/
│       ├── clients/
│       ├── gallery/
│       ├── support/
│       └── contact/
│
├── lib/
│   ├── utils.ts              # cn() utility
│   └── constants.ts          # SITE_CONFIG, NAV_LINKS
│
└── types/
    └── index.ts              # TypeScript interfaces
```

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Trust, Workflow, Features, Industries, CTA |
| About | `/about` | Company story, Timeline, Mission/Vision, Stats |
| Solutions | `/solutions` | Gramya Paledu module suite |
| Features | `/features` | Full feature list + comparison table |
| Leadership | `/leadership` | Executive team + core team + customer care |
| Clients | `/clients` | State-wise deployments + testimonials |
| Gallery | `/gallery` | Masonry gallery with lightbox |
| Support | `/support` | FAQ accordion + downloads + remote support |
| Contact | `/contact` | Form with validation + contact info + map |

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (headings) + Inter (body)

---

## 🌐 Production Build

```bash
npm run build
npm start
```

---

## 📧 Contact Form Setup

The contact form posts to `/api/contact`. To enable actual email sending:
1. Fill in SMTP details in `.env.local`
2. Uncomment and configure the Nodemailer integration in `src/app/api/contact/route.ts`

---

## 🗺 SEO

- Metadata on every page
- Open Graph tags
- Auto-generated `sitemap.xml` at `/sitemap`
- `robots.txt` at `/robots`
- Semantic HTML throughout

---

© 2024 RIMS Software Company — Rohan Info Mediaa Softwares. All rights reserved.
