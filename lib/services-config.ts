// lib/services-config.ts
//
// Source of truth: docs/BE Graphic Studio service system.pdf and
// docs/BE GRAPHIC STUDIO — BRAND RESTRUCTURE FOUNDATION.pdf
//
// The client-facing structure is the five ENGAGEMENTS from §17, not a list of
// disciplines. A client arrives with a need ("I need to build my brand
// properly"), we map that to an engagement, and scope the actual work inside.
//
// §01 is explicit that BE does not sell Basic → Standard → Premium, so there
// is deliberately no tier field here.
//
// §20 fixes what may be shown publicly: ₦150k Discovery, ₦500k+ Build, and
// Custom for Evolution / Implementation / Partnership. Do not publish the
// internal ladder.

export interface ServiceConfig {
  slug: string
  title: string
  /** Shorter label for nav and footer columns. Falls back to `title`. */
  navLabel?: string
  /** Highlighted on the home-page services grid. */
  featured?: boolean
  tagline: string
  description: string
  items: string[]
  hero: {
    badge: string
    headline: string
    subheadline: string
    ctaPrimary: string
  }
  templateContent?: {
    problem: {
      title: string
      description: string
      /** Short lead-in word, not a statistic — the docs publish no metrics. */
      points: Array<{ lead: string; desc: string }>
    }
    process: {
      title: string
      steps: Array<{ title: string; desc: string; timeline?: string }>
    }
    deliverables: {
      title: string
      items: string[]
    }
    /** Public investment statement. §20: never expose the full ladder. */
    investment: {
      startingAt: string
      note: string
    }
    cta: {
      title: string
      description: string
    }
  }
}

export const servicesConfig: Record<string, ServiceConfig> = {
  'brand-discovery': {
    slug: 'brand-discovery',
    title: 'Brand Discovery',
    navLabel: 'Brand Discovery',
    tagline: 'Start by understanding',
    description:
      'For businesses saying: "Something isn\'t working with our brand, but we don\'t know what."',
    items: [
      'Brand, visual and communication audit',
      'Market and competitor review',
      'Recommended next steps',
    ],
    hero: {
      badge: 'Brand Discovery',
      headline: 'Something isn\'t working. Let\'s find out what.',
      subheadline:
        'A structured audit of how your brand is understood today, where it is losing ground, and what to do next.',
      ctaPrimary: 'Start with Discovery',
    },
  },

  'brand-build': {
    slug: 'brand-build',
    title: 'Brand Build',
    navLabel: 'Brand Build',
    featured: true,
    tagline: 'One of BE\'s main engagements',
    description:
      'It is not a fixed package. We build the brand the business actually needs.',
    items: [
      'Strategy, positioning and messaging',
      'Visual identity and core applications',
      'Brand guidelines and systems',
    ],
    hero: {
      badge: 'Brand Build',
      headline: 'Build the brand your business actually needs.',
      subheadline:
        'Strategy, positioning, communication, experience, identity and systems — combined to fit the project rather than sold as a fixed package.',
      ctaPrimary: 'Start a Brand Build',
    },
  },

  'brand-evolution': {
    slug: 'brand-evolution',
    title: 'Brand Evolution',
    navLabel: 'Brand Evolution',
    tagline: 'For brands that have outgrown their current form',
    description:
      'This is our alternative to casually calling everything a rebrand.',
    items: [
      'Existing brand audit and what-to-keep assessment',
      'Strategic and visual refinement',
      'Updated guidelines and rollout support',
    ],
    hero: {
      badge: 'Brand Evolution',
      headline: 'Your business has changed. Your brand should follow.',
      subheadline:
        'We identify what to keep and what to evolve, then refine the strategy, the communication and the visual system around it.',
      ctaPrimary: 'Discuss an Evolution',
    },
    templateContent: {
      problem: {
        title: 'When the brand stops matching the business',
        description:
          'Businesses grow faster than their brands do. What worked at the start can start working against you — not because it was wrong, but because it no longer describes who you are.',
        points: [
          {
            lead: 'Drift',
            desc: 'Your messaging, visuals and touchpoints have each evolved separately.',
          },
          {
            lead: 'Perception',
            desc: 'The market reads you as smaller, older or less capable than you are.',
          },
          {
            lead: 'Progress',
            desc: 'You are held back by decisions that made sense two years ago.',
          },
        ],
      },
      process: {
        title: 'How an Evolution runs',
        steps: [
          {
            title: 'Heritage audit',
            desc: 'We establish what your brand has earned the right to keep, and what is holding it back.',
          },
          {
            title: 'Strategic refinement',
            desc: 'Positioning and communication are sharpened around where the business is going.',
          },
          {
            title: 'Identity and rollout',
            desc: 'The visual system is evolved where required, then rolled out with updated guidelines.',
          },
        ],
      },
      deliverables: {
        title: 'What you receive',
        items: [
          'Existing brand audit',
          'What-to-keep / what-to-change assessment',
          'Positioning and communication refinement',
          'Visual evolution, with identity redesign where required',
          'Updated brand guidelines',
          'Rollout and implementation support',
        ],
      },
      investment: {
        startingAt: 'Custom',
        note: 'Evolution is scoped around what your brand has already earned and what actually needs to change.',
      },
      cta: {
        title: 'Evolve without losing what your brand has earned',
        description:
          'A short conversation is usually enough for us to tell you whether you need an evolution or something smaller.',
      },
    },
  },

  'brand-implementation': {
    slug: 'brand-implementation',
    title: 'Brand Implementation',
    navLabel: 'Brand Implementation',
    tagline: 'For brands that need to reach the market',
    description:
      'For brands that already have their strategy and identity but haven\'t successfully put the brand into the marketplace.',
    items: [
      'Digital, physical and commercial applications',
      'Templates and internal brand tools',
      'Rollout and implementation guidance',
    ],
    hero: {
      badge: 'Brand Implementation',
      headline: 'You have the brand. Now put it to work.',
      subheadline:
        'We apply your existing strategy and identity across the touchpoints your market actually sees, and give your team the tools to keep it consistent.',
      ctaPrimary: 'Plan an Implementation',
    },
    templateContent: {
      problem: {
        title: 'A brand that exists but isn\'t being used',
        description:
          'Strategy documents and identity files do not build recognition on their own. Until the brand is applied consistently where your market meets it, the work stays invisible.',
        points: [
          {
            lead: 'Digital',
            desc: 'Website, social, email and digital advertising tell different stories.',
          },
          {
            lead: 'Physical',
            desc: 'Stationery, packaging and signage are produced ad hoc.',
          },
          {
            lead: 'Commercial',
            desc: 'Proposals and sales materials are rebuilt from scratch every time.',
          },
        ],
      },
      process: {
        title: 'How an Implementation runs',
        steps: [
          {
            title: 'Application audit',
            desc: 'We map the touchpoints that matter most and where the brand currently breaks down.',
          },
          {
            title: 'Build',
            desc: 'The priority applications are designed, using the identity and strategy you already have.',
          },
          {
            title: 'Handover',
            desc: 'Templates and internal guidance are set up so the brand holds without us.',
          },
        ],
      },
      deliverables: {
        title: 'What you receive',
        items: [
          'Brand rollout across priority touchpoints',
          'Digital applications and social media system',
          'Marketing collateral and campaign assets',
          'Presentation and proposal systems',
          'Internal brand tools and templates',
          'Brand implementation guidance',
        ],
      },
      investment: {
        startingAt: 'Custom',
        note: 'Implementation is scoped to the actual number and complexity of applications, not a fixed package.',
      },
      cta: {
        title: 'Turn the brand you built into the brand people see',
        description:
          'Tell us which touchpoints matter most and we will scope the implementation around them.',
      },
    },
  },

  'brand-partnership': {
    slug: 'brand-partnership',
    title: 'Brand Partnership',
    navLabel: 'Brand Partnership',
    tagline: 'Ongoing brand support',
    description:
      'For businesses that need someone to stay with them and help manage the brand as it grows.',
    items: [
      'Brand guidance and creative review',
      'Consistency checks and design direction',
      'Strategic advice as you grow',
    ],
    hero: {
      badge: 'Brand Partnership',
      headline: 'Someone in your corner, protecting the brand.',
      subheadline:
        'Ongoing guidance from a BE Brand Expert so that what you built stays consistent, and keeps evolving with the business.',
      ctaPrimary: 'Discuss a Partnership',
    },
    templateContent: {
      problem: {
        title: 'Brands decay quietly after handover',
        description:
          'Without someone protecting it, a brand drifts the moment it meets day-to-day pressure. That is the slow version of the problem, and it is the expensive one.',
        points: [
          {
            lead: 'Drift',
            desc: 'New material gets produced without reference to the guidelines.',
          },
          {
            lead: 'Judgement',
            desc: 'There is no senior view on whether a decision strengthens or dilutes the brand.',
          },
          {
            lead: 'Momentum',
            desc: 'The brand stops evolving at exactly the point the business starts moving.',
          },
        ],
      },
      process: {
        title: 'How a Partnership works',
        steps: [
          {
            title: 'Scope',
            desc: 'We agree response times, meeting frequency and deliverable limits up front.',
          },
          {
            title: 'Ongoing review',
            desc: 'A BE Brand Expert reviews creative work and keeps the brand consistent.',
          },
          {
            title: 'Guidance',
            desc: 'Strategic advice and brand evolution guidance as the business changes.',
          },
        ],
      },
      deliverables: {
        title: 'What a BE Brand Expert does',
        items: [
          'Brand guidance',
          'Creative review',
          'Brand consistency checks',
          'Design direction',
          'Communication guidance',
          'Content review and strategic advice',
        ],
      },
      investment: {
        startingAt: 'Custom',
        note: 'Retainers are defined by response times, meeting frequency, deliverable limits and scope — not by unlimited access.',
      },
      cta: {
        title: 'Keep the brand working as the business grows',
        description:
          'Bring the brand you have already built under ongoing care rather than starting over each time.',
      },
    },
  },
}

export const getServiceConfig = (slug: string): ServiceConfig | null => {
  return servicesConfig[slug] ?? null
}
