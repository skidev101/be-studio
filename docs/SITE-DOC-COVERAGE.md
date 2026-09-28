# Site ↔ Docs Coverage

Two documents govern the content on this site. This file maps what is currently
aligned and what is missing, so nobody has to re-derive it by reading both PDFs.

| Ref | Document |
| --- | --- |
| **service §NN** | `docs/BE Graphic Studio service system.pdf` |
| **foundation §NN** | `docs/BE GRAPHIC STUDIO — BRAND RESTRUCTURE FOUNDATION.pdf` |

The two have **independent section numbering** — service §15 is BE Academy,
foundation §15 is the brand-building methodology. Always cite which document a
section number came from; a bare `§15` is ambiguous. The code comments follow
this convention.

## Aligned

| Site area | Source | Notes |
| --- | --- | --- |
| `components/landing/Hero.tsx` | foundation §04, §05; service §19 | Audience and belief. No positioning claim — see Gaps. |
| `components/landing/About.tsx` | foundation §09, §05 | Purpose and core belief. |
| `components/landing/Approach.tsx` | foundation §15 | The six stages (Understand → Position → Communicate → Experience → Express → Systemize), restating service §02. |
| `components/landing/Services.tsx` | service §17, §20 | The five engagements as "what does your business need?". |
| `components/landing/Pricing.tsx` | service §17, §18, §20 | Client-voice entry points; accessibility model replaces discount language. |
| `lib/services-config.ts` | service §01, §10–§14, §17, §20 | Single source of truth for all service copy. |
| `components/services/ServiceTemplate.tsx` | service §01 | One brand treatment for every engagement; no tiers. |
| `components/services/BrandDiscoveryPage.tsx` | service §10 | |
| `components/services/BrandBuildPage.tsx` | service §11 | |
| `lib/portfolio-config.ts` | — | Empty by design. Neither document contains a case study. |

**Load-bearing rule.** service §20 permits publishing only three price points:
Discovery from ₦150k, Brand Build ₦500k+, and Custom for Evolution /
Implementation / Partnership. The full internal ladder in §20 (Focused Strategy
₦250k, Identity ₦300k, Evolution ₦450k, Partnership ₦150k/month, …) must stay out
of anything client-facing.

## Gaps

### 1. BE Graphic Studio Academy — not on the site at all

Both documents give the Academy its own section (service §15, foundation §11),
and service §20's system diagram lists **Educate** as one of four pillars
alongside Strategy, Build and Engage.

- service §15: "should remain separate from the agency pricing", "is not simply
  another service". Revenue streams listed: courses, workshops, masterclasses,
  cohort programmes, corporate training, mentorship, educational resources.
- foundation §11: "isn't simply an extra project".

**Decision needed:** does the relaunched site represent the Academy, link out to
it, or stay agency-only for now?

### 2. Positioning as a visible entry point

service §04 prices Positioning "From ₦150,000" (deeper work ₦250,000–₦350,000+),
and §20's system diagram lists **Brand Strategy / Brand Analysis / Positioning**
as a Strategy category alongside the five client-facing engagements.

service §17 does sanction folding strategy *inside* an engagement ("Then BE
scopes the actual services inside"), which is what the site does. But a visitor
who arrives wanting positioning specifically has no visible route to it.

**Decision needed:** add Positioning as a sixth visible entry, or leave it folded
into Discovery and Brand Build.

### 3. The positioning statement does not exist yet

foundation §18 ("Where We Are Now") closes with:

> The next thing we should build is BE Graphic Studio's Positioning.

So the absence of a positioning claim on the homepage is **correct**, not an
oversight. Hero, About and Services are written from audience, belief and
methodology instead. This needs revisiting once positioning is decided — the
homepage will be the first place it should land.

### 4. Case studies / Brand Success Stories

foundation §17 lists "BE's Brand Success Stories" as part of the emerging
ecosystem, described as evidence of the impact BE wants to create — but no actual
project, client or metric appears in either document.

`lib/portfolio-config.ts` is therefore empty and `/portfolio` renders an honest
empty state. Real work must be supplied; do not backfill with invented projects.

### 5. Operational, not doc-sourced

- The contact form collects PII and there is no privacy policy page.
- Service URLs changed in the audit pass (`brand-analysis` → `brand-discovery`,
  `full-brand-build` → `brand-build`) with no redirects in place.

## When adding copy

Write from the documents, not around them. Neither PDF establishes metrics, ROI
figures or guarantees — service §19 explicitly rules out affordability framing
("Affordable branding from ₦50k", "World-class branding at affordable prices").
If a claim cannot be traced to a section above, it does not belong on the site.
