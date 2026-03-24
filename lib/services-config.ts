// lib/services-config.ts

export type ServiceTier = 'premium' | 'standard' | 'flexible'

export interface ServiceConfig {
  slug: string
  tier: ServiceTier
  title: string
  tagline: string
  description: string
  items: string[]
  
  // Hero section
  hero: {
    badge: string
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary?: string
  }
  
  // Custom page flag
  hasCustomPage: boolean
  
  // For template-based pages
  templateContent?: {
    problem: {
      title: string
      description: string
      painPoints: Array<{ stat: string; desc: string }>
    }
    process: {
      title: string
      steps: Array<{
        title: string
        desc: string
        timeline?: string
      }>
    }
    deliverables: {
      title: string
      items: string[]
    }
    pricing?: {
      startingAt: string
      packages: Array<{
        name: string
        price: string
        features: string[]
        recommended?: boolean
      }>
    }
    cta: {
      title: string
      description: string
    }
  }
}

export const servicesConfig: Record<string, ServiceConfig> = {
  'full-brand-build': {
    slug: 'full-brand-build',
    tier: 'premium',
    title: 'Full Brand Build',
    tagline: 'The Flagship Service',
    description: 'Our most comprehensive service for startups and businesses needing an end-to-end transformation.',
    items: [
      'Analysis + Strategy + Identity',
      'Brand guidelines & rollout',
      'Marketing & growth asset suite',
    ],
    hero: {
      badge: 'Flagship Service',
      headline: 'The Ultimate Brand Foundation',
      subheadline: 'Go from zero to a market-leading brand with our comprehensive end-to-end partnership.',
      ctaPrimary: 'Launch Your Brand',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'Don\'t Launch Without a Soul',
        description: 'A fragmented brand is a weak brand. We build everything you need for a powerful, cohesive, and successful launch.',
        painPoints: [
          { stat: '90%', desc: 'of purchasing decisions are made subconsciously based on branding' },
          { stat: 'All-in', desc: 'approach saves months of back-and-forth between agencies' },
          { stat: 'Bespoke', desc: 'solutions for high-growth startups and established firms' },
        ],
      },
      process: {
        title: 'The Complete Roadmap',
        steps: [
          { title: 'Foundation', desc: 'Analysis and Strategy phase to find your "Why".' },
          { title: 'Creation', desc: 'Visual Identity and Asset phase to build your "How".' },
          { title: 'Launch', desc: 'Final rollout and implementation support.' },
        ],
      },
      deliverables: {
        title: 'Full Brand Ecosystem',
        items: [
          'Comprehensive brand strategy',
          'Full visual identity system',
          'Complete marketing asset suite',
          'Extensive brand guidelines',
          'Website design assets',
          '6 months of brand support',
        ],
      },
      cta: {
        title: 'Build Your Legacy Today',
        description: 'Starting at $10,000. The definitive brand partnership.',
      },
    },
  },

  'brand-analysis': {
    slug: 'brand-analysis',
    tier: 'premium',
    title: 'Brand Analysis',
    tagline: 'Data-Driven Brand Intelligence',
    description: 'Evaluate the current state of a brand and identify opportunities for improvement.',
    items: [
      'Brand audit & market analysis',
      'Competitor & audience insight',
      'Strategic recommendations',
    ],
    hero: {
      badge: 'Brand Analysis',
      headline: 'Stop Guessing. Start Knowing.',
      subheadline: 'Data-driven brand analysis that reveals how customers truly perceive you and where the exact positioning gaps are costing you growth.',
      ctaPrimary: 'Get Brand Assessment',
    },
    hasCustomPage: true,
  },
  
  'brand-strategy': {
    slug: 'brand-strategy',
    tier: 'premium',
    title: 'Brand Strategy',
    tagline: 'Define Your Market Position',
    description: 'Define how the brand should position itself in the market and communicate with its audience.',
    items: [
      'Brand positioning & purpose',
      'Mission, vision & values',
      'Messaging pillars & tone of voice',
    ],
    hero: {
      badge: 'Brand Strategy',
      headline: 'A Strategy That Commands Attention',
      subheadline: 'Align your business goals with a powerful brand narrative that resonates with your ideal audience.',
      ctaPrimary: 'Start Strategy Session',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'Why Strategy Comes First',
        description: 'Without a clear strategy, even the best design fails to connect. We define your "Why" before we design your "How".',
        painPoints: [
          { stat: '80%', desc: 'of customers buy based on brand values, not just price' },
          { stat: '2.3x', desc: 'faster growth for companies with documented brand strategies' },
          { stat: '50%', desc: 'lower marketing costs when messaging is precisely targeted' },
        ],
      },
      process: {
        title: 'Our Strategic Framework',
        steps: [
          { title: 'Discovery Workshop', desc: 'Deep-dive into your business model, goals, and audience.' },
          { title: 'Positioning & Voice', desc: 'Crafting your unique space in the market and how you speak.' },
          { title: 'Strategic Document', desc: 'Final comprehensive brand strategy guide.' },
        ],
      },
      deliverables: {
        title: 'Strategic Deliverables',
        items: [
          'Brand positioning statement',
          'Core values & brand purpose',
          'Mission & Vision statements',
          'Target audience personas',
          'Tone of voice framework',
          'Key messaging pillars',
        ],
      },
      cta: {
        title: 'Ready for a Strategic Foundation?',
        description: 'Starting at $2,500. Let\'s define your brand\'s future today.',
      },
    },
  },
  
  'brand-identity-system': {
    slug: 'brand-identity-system',
    tier: 'premium',
    title: 'Brand Identity System',
    tagline: 'Strong Visual Presence',
    description: 'Translate strategy into a strong visual identity system including logos, typography, and color.',
    items: [
      'Primary, secondary & icon logos',
      'Typography & color palette',
      'Graphic elements & patterns',
    ],
    hero: {
      badge: 'Identity System',
      headline: 'Visual Identity That Builds Trust',
      subheadline: 'Premium visual systems designed to make your brand instantly recognizable across all platforms.',
      ctaPrimary: 'Design Your Identity',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'Consistency is Credibility',
        description: 'An inconsistent visual identity makes your business look amateur. We build systems that ensure you look professional everywhere.',
        painPoints: [
          { stat: '33%', desc: 'increase in revenue with consistent brand presentation' },
          { stat: '1/10s', desc: 'for a customer to form a first impression of your brand' },
          { stat: '7x', desc: 'more brand recall with professional visual systems' },
        ],
      },
      process: {
        title: 'The Design Journey',
        steps: [
          { title: 'Concept Development', desc: 'Exploring visual directions that align with your strategy.' },
          { title: 'Refinement', desc: 'Iterating on selected concepts to reach pixel-perfection.' },
          { title: 'System Rollout', desc: 'Building out the full toolkit of brand assets.' },
        ],
      },
      deliverables: {
        title: 'Visual Identity Assets',
        items: [
          'Primary & secondary logos',
          'Brand mark/iconography',
          'Typography system',
          'Complete color palette',
          'Brand patterns & textures',
          'Usage guidelines (Brand Book)',
        ],
      },
      cta: {
        title: 'Elevate Your Visual Identity',
        description: 'Starting at $3,500. Build a brand that looks as good as it performs.',
      },
    },
  },

  'brand-repositioning': {
    slug: 'brand-repositioning',
    tier: 'premium',
    title: 'Brand Repositioning / Rebrand',
    tagline: 'Evolve Your Brand',
    description: 'Help established brands evolve and reposition in their market to reach new heights.',
    items: [
      'Strategic repositioning audit',
      'Identity evolution & redesign',
      'Brand rollout strategy',
    ],
    hero: {
      badge: 'Repositioning',
      headline: 'Evolve Without Losing Your Soul',
      subheadline: 'We help established brands modernize their look and message to stay relevant in a changing market.',
      ctaPrimary: 'Discuss Rebrand',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'Is Your Brand Holding You Back?',
        description: 'As your business grows, your brand needs to keep up. We ensure your identity reflects who you are today, not who you were years ago.',
        painPoints: [
          { stat: '5-7yr', desc: 'average lifespan of a brand identity before needing an update' },
          { stat: '64%', desc: 'of customers feel more connected to brands that evolve with them' },
          { stat: '25%+', desc: 'average growth post-successful rebranding' },
        ],
      },
      process: {
        title: 'The Evolution Process',
        steps: [
          { title: 'Heritage Audit', desc: 'Identifying what to keep and what to evolve.' },
          { title: 'Strategic Pivot', desc: 'Aligning the brand with new goals or audiences.' },
          { title: 'Identity Refresh', desc: 'Modernizing the visual system for today\'s standards.' },
        ],
      },
      deliverables: {
        title: 'Rebrand Deliverables',
        items: [
          'Full visual identity refresh',
          'Updated messaging framework',
          'Brand rollout plan',
          'Updated collateral system',
          'New brand guidelines',
          'Asset migration support',
        ],
      },
      cta: {
        title: 'Ready for Your Brand\'s Next Chapter?',
        description: 'Starting at $6,000. Let\'s evolve your brand together.',
      },
    },
  },

  'brand-growth-assets': {
    slug: 'brand-growth-assets',
    tier: 'standard',
    title: 'Brand Growth Assets',
    tagline: 'Scale Your Marketing',
    description: 'Create assets that help businesses consistently apply their brand across marketing channels.',
    items: [
      'Social media design systems',
      'Marketing & campaign templates',
      'Pitch decks & sales collateral',
    ],
    hero: {
      badge: 'Growth Assets',
      headline: 'Fuel Your Marketing Engine',
      subheadline: 'Professional templates and assets that empower your team to create content that converts.',
      ctaPrimary: 'Get Your Assets',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'The Content Creation Struggle',
        description: 'Stop wasting time designing from scratch. We build systems that allow you to produce high-quality content in minutes.',
        painPoints: [
          { stat: '10hr+', desc: 'saved weekly with professional design templates' },
          { stat: '3.4x', desc: 'higher engagement on professionally designed social posts' },
          { stat: '100%', desc: 'brand consistency across all marketing channels' },
        ],
      },
      process: {
        title: 'Asset Development',
        steps: [
          { title: 'Needs Audit', desc: 'Identifying the most impactful assets for your marketing.' },
          { title: 'System Design', desc: 'Creating flexible, easy-to-use templates.' },
          { title: 'Final Handover', desc: 'Providing source files and training if needed.' },
        ],
      },
      deliverables: {
        title: 'Marketing Toolkit',
        items: [
          'Social media post templates',
          'Email marketing visuals',
          'Ad creative templates',
          'Pitch deck & presentation suite',
          'Sales sheets & brochures',
          'Marketing icons & graphics',
        ],
      },
      cta: {
        title: 'Supercharge Your Marketing',
        description: 'Starting at $1,200. Get the tools you need to grow.',
      },
    },
  },
}

export const getServiceConfig = (slug: string): ServiceConfig | null => {
  return servicesConfig[slug] || null;
}
