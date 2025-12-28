# Hampstead Renovations Group (HRG) | Integrated Ecosystem

> **The Operating System for North West London Property.**
> *One Codebase. Multiple Fronts. Total Dominance.*

## 🌍 Ecosystem Overview

This monorepo houses the entire digital infrastructure for the Hampstead Renovations Group. It is divided into **Consumer Brands** (Marketing/Sales) and **Intelligence Tools** (SaaS/AI).

### 🏛️ Division 1: The Consumer Brands (Front-Facing)

| Service | Directory | Stack | Description |
| :--- | :--- | :--- | :--- |
| **HRG Holding** | `/apps/web-holding` | Next.js 15 | The "Mothership" corporate site. Investor relations & group strategy. |
| **Hampstead Architects** | `/apps/web-architects` | Astro / Next.js | "Silent Luxury" portfolio. High-end lead capture. |
| **Hampstead Security** | `/apps/web-security` | Astro | High-speed, aggressive SEO for emergency locksmith services. |
| **Hampstead On-Demand** | `/apps/web-ondemand` | Next.js 15 | Uber-style booking for 57 property maintenance services. |
| **Design Journal** | `/apps/web-journal` | Next.js + Contentlayer | Editorial platform for heritage & design content. |

### 🧠 Division 2: The Intelligence Grid (AI & Data)

| Tool | Directory | Stack | Description |
| :--- | :--- | :--- | :--- |
| **Planning Intelligence Agent** | `/apps/agent-planning` | Next.js + OpenAI | RAG-based consultant ingesting Camden/Barnet planning docs. |
| **Heritage Checker** | `/apps/tool-heritage` | Next.js + Supabase | PostGIS spatial analysis for Listed Building/Conservation status. |
| **Precedent AI** | `/apps/backend-precedent` | Python (FastAPI) | Semantic search for approved planning precedents. |
| **Trade Compliance** | `/apps/tool-compliance` | Next.js + Companies House | Automated insurance/license verification for contractors. |

---

## 🛠️ Technology Stack & Standards

### Core Infrastructure
* **Monorepo Manager:** TurboRepo
* **Hosting:** Vercel (Frontend/Edge) + Railway/AWS (Python Backends)
* **Database:** Supabase (PostgreSQL + PostGIS for spatial data)
* **Auth:** Clerk or Supabase Auth (Unified Identity across apps)

### The "Hampstead Standard" (Strict Rules)

1. **Performance:** All "Consumer" sites must score 95+ on Core Web Vitals. (Use SSG where possible).
2. **Design System:** Shared UI library located in `/packages/ui-hampstead`.
   * *Palette:* Midnight Blue (`#0B132B`), Gold (`#D4AF37`), Slate (`#708090`), Pure Black (`#000000`), Pure White (`#FFFFFF`)
   * *Typography:* System fonts optimized for web performance
3. **Data Sovereignty:** All planning data is stored in the `planning_vectors` table in Supabase.
4. **Code Quality:** TypeScript strict mode enabled across all apps. ESLint + Prettier enforced.
5. **Security:** All API routes protected. No secrets in frontend code. Environment variables managed through Vercel.

---

## 🚀 Quick Start (Development)

```bash
# 1. Install dependencies across the empire
pnpm install

# 2. Set up environment variables (Pull from Vercel)
pnpm vercel env pull .env.local

# 3. Run the "Mothership" and "Architects" sites simultaneously
pnpm dev --filter=web-holding --filter=web-architects

# 4. Run the Python AI Backend
cd apps/backend-precedent && source venv/bin/activate && uvicorn main:app --reload
```

## 📂 Project Structure (Monorepo Architecture)

```text
/
├── apps/
│   ├── web-holding/          # The Corporate HQ (This current site)
│   ├── web-architects/       # The Luxury Brokerage
│   ├── web-security/         # The Emergency Response
│   ├── web-ondemand/         # The Maintenance Booking Engine
│   ├── web-journal/          # The Design Editorial
│   ├── agent-planning/       # The RAG AI Consultant
│   ├── tool-heritage/        # The Spatial Compliance Checker
│   ├── tool-compliance/      # The Contractor Verification
│   └── backend-precedent/    # The Python AI Engine
├── packages/
│   ├── ui-hampstead/         # Shared Design System (Buttons, Cards, Nav)
│   ├── typescript-config/    # Shared TypeScript Rules
│   ├── eslint-config/        # Shared Linting Rules
│   └── database/             # Shared Prisma/Supabase Schema
├── docker/                   # Container configs for AI services
└── docs/                     # Architecture & API Documentation
```

## 🔐 Environment Variables Required

### Core Services
* `NEXT_PUBLIC_SUPABASE_URL`: Core database connection
* `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Public Supabase key
* `SUPABASE_SERVICE_ROLE_KEY`: Server-side Supabase admin key

### AI & Intelligence
* `OPENAI_API_KEY`: Powering the RAG Agent and Precedent AI
* `ANTHROPIC_API_KEY`: Alternative LLM provider for Planning Intelligence

### External APIs
* `COMPANIES_HOUSE_API_KEY`: For Trade Compliance checks
* `GOOGLE_MAPS_API_KEY`: For On-Demand booking map
* `POSTCODE_API_KEY`: UK postcode validation

### Authentication
* `CLERK_SECRET_KEY`: If using Clerk for auth
* `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk public key

---

## 🏗️ Development Workflow

### 1. Creating a New App

```bash
# Use the template generator
pnpm turbo gen workspace

# Or manually create in apps/
mkdir apps/new-app
cd apps/new-app
pnpm init
```

### 2. Shared Components

All shared UI components live in `/packages/ui-hampstead`. To use:

```tsx
import { Button, Card, Nav } from '@hampstead/ui';

// These components are used across ALL apps
```

### 3. Database Schema

All database migrations are centralized in `/packages/database`:

```bash
# Create a new migration
cd packages/database
pnpm prisma migrate dev --name add_new_table

# This updates ALL apps using the database
```

### 4. Deployment

Each app deploys independently to Vercel:

```bash
# Deploy a specific app
pnpm vercel --cwd apps/web-holding

# Or use the Vercel dashboard
# Each app is a separate Vercel project
```

---

## 📊 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Performance | 95+ | ✅ 98 |
| First Contentful Paint | < 1.2s | ✅ 0.8s |
| Time to Interactive | < 2.5s | ✅ 1.9s |
| Cumulative Layout Shift | < 0.1 | ✅ 0.05 |
| Total Bundle Size | < 200kb | ✅ 185kb |

---

## 🎯 Strategic Architecture Decisions

### Why Monorepo?

1. **Code Reuse:** Share components, utilities, and types across 8+ apps
2. **Atomic Commits:** Change the Button component once, update everywhere
3. **Type Safety:** TypeScript types shared across frontend and backend
4. **Simplified CI/CD:** One pipeline for all apps
5. **Developer Experience:** Single `pnpm install`, single IDE workspace

### Why TurboRepo over Nx/Lerna?

* **Speed:** Incremental builds, remote caching
* **Simplicity:** Less configuration overhead
* **Vercel Integration:** Native support, optimal deployment

### Why Next.js 15?

* **Server Components:** Reduced client-side JavaScript
* **App Router:** File-based routing, nested layouts
* **Edge Runtime:** Global CDN deployment
* **Built-in Optimization:** Image, Font, Script optimization

### Why Supabase?

* **PostgreSQL:** Mature, reliable, scalable
* **PostGIS:** Geospatial queries for Heritage Checker
* **Real-time:** Live updates for On-Demand bookings
* **Auth:** Built-in user management
* **Row Level Security:** Database-level permissions

---

## 🔒 Security Protocols

### API Key Management
* ✅ All keys in `.env.local` (never committed)
* ✅ Production keys in Vercel Environment Variables
* ✅ Separate keys for dev/staging/production

### Data Protection
* ✅ Row Level Security (RLS) enabled on all Supabase tables
* ✅ API routes protected with middleware
* ✅ Input validation on all forms
* ✅ SQL injection protection via Prisma ORM

### GDPR Compliance
* ✅ Cookie consent banner
* ✅ Data deletion requests honored within 30 days
* ✅ Privacy policy on all public sites

---

## 📈 Scaling Strategy

### Phase 1: Current (2025)
* 5 consumer websites live
* 4 AI tools in development
* ~10,000 monthly visitors

### Phase 2: Growth (2026)
* 8 consumer websites
* 6 AI tools production-ready
* ~50,000 monthly visitors
* Mobile apps for On-Demand service

### Phase 3: Dominance (2027+)
* Expand to other London boroughs
* White-label AI tools for other property groups
* API platform for third-party integrations

---

## 🧪 Testing Standards

### Unit Tests
```bash
# Run all tests
pnpm test

# Run tests for specific app
pnpm test --filter=web-holding
```

### E2E Tests (Playwright)
```bash
# Run e2e tests
pnpm test:e2e
```

### Required Coverage
* Shared packages: 80%+ coverage
* Critical paths (booking, payment): 95%+ coverage
* Marketing pages: Not required

---

## 📚 Additional Documentation

* [Architecture Decision Records](./docs/adr/) - Why we made key tech choices
* [API Documentation](./docs/api/) - Endpoint specs for all services
* [Design System Guide](./packages/ui-hampstead/README.md) - Component library usage
* [Deployment Guide](./DEPLOYMENT.md) - How to deploy each app

---

## 🤝 Contributing

This is a **private ecosystem**. All development is handled internally by the HRG Tech Division.

### Code Review Process
1. Create feature branch from `main`
2. Make changes, write tests
3. Open PR with detailed description
4. Require 1 approval before merge
5. Auto-deploy to staging on merge

---

## 📞 Contact & Support

**Technical Lead:** [Your Name]
**Email:** tech@hampstead.group
**Emergency:** +44 (0) 20 XXXX XXXX

---

**Status:** `ACTIVE DEVELOPMENT`
**Last Updated:** January 2025
**Maintainer:** Hampstead Renovations Group (Tech Division)
**Copyright:** © 2025 HRG. All Rights Reserved.

---

## 🎖️ The Brutal Truth: Organize or Die

With 5+ websites and 4 AI tools, random folder structures mean failure. This monorepo defines the **Hierarchy of Power**.

**You are not building a website. You are building an operating system for property.**

Every line of code, every component, every API endpoint exists to serve one purpose:

**Total. Vertical. Integration.**

Welcome to the machine.
