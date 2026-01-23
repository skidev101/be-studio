// 1. Service Configuration with Content Strategy
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
  'brand-analysis': {
    slug: 'brand-analysis',
    tier: 'premium',
    title: 'Brand Analysis',
    tagline: 'Data-Driven Brand Intelligence',
    description: 'We assess how your brand is perceived, where it stands in the market, and how it can be positioned for long-term growth.',
    items: [
      'Brand audits and competitive analysis',
      'Visual and verbal identity evaluation',
      'Market positioning insights',
    ],
    hero: {
      badge: 'Brand Analysis & Strategy',
      headline: 'Stop Guessing. Start Knowing.',
      subheadline: 'Data-driven brand analysis that reveals how customers truly perceive you, where competitors are winning, and the exact positioning gaps costing you growth.',
      ctaPrimary: 'Get Your Brand Assessment',
      ctaSecondary: 'View Sample Report',
    },
    hasCustomPage: true, // Uses custom component
  },
  
  'business-branding-packages': {
    slug: 'business-branding-packages',
    tier: 'premium',
    title: 'Business Branding Packages',
    tagline: 'Complete Brand Systems',
    description: 'Strategic branding systems designed to support business goals and scale as your company grows.',
    items: [
      'Startup and early-stage brand kits',
      'Rebranding for growing businesses',
      'Brand strategy and positioning',
    ],
    hero: {
      badge: 'Business Branding',
      headline: 'Build a Brand That Grows With You',
      subheadline: 'Complete branding systems that establish credibility, attract customers, and scale alongside your business ambitions.',
      ctaPrimary: 'Start Brand analysis',
      ctaSecondary: 'View Portfolio',
    },
    hasCustomPage: true, // Could have custom page later
    templateContent: {
      problem: {
        title: 'Why Most Startups Struggle With Brand Identity',
        description: 'Without a cohesive brand system, businesses waste resources on inconsistent materials, confuse potential customers, and struggle to compete with established players.',
        painPoints: [
          { stat: '64%', desc: 'of startups rebrand within 2 years due to poor initial foundation' },
          { stat: '$45K', desc: 'average cost of inconsistent branding in first year' },
          { stat: '2.8x', desc: 'longer sales cycles without professional brand presence' },
        ],
      },
      process: {
        title: 'Our Comprehensive Branding Process',
        steps: [
          {
            title: 'Brand Strategy Workshop',
            desc: 'Deep-dive sessions to define your positioning, audience, values, and competitive differentiation.',
            timeline: 'Week 1',
          },
          {
            title: 'Visual Identity Development',
            desc: 'Logo design, color systems, typography, and visual language that embodies your brand strategy.',
            timeline: 'Week 2-4',
          },
          {
            title: 'Brand Guidelines & Assets',
            desc: 'Complete brand book, templates, and asset library for consistent implementation.',
            timeline: 'Week 5-6',
          },
        ],
      },
      deliverables: {
        title: 'Everything You Need to Launch Strong',
        items: [
          'Complete brand strategy documentation',
          'Primary and secondary logo variations',
          'Comprehensive brand guidelines (40+ pages)',
          'Color palette and typography system',
          'Business card and stationery designs',
          'Social media templates and assets',
          'Email signature and presentation templates',
          'Brand asset library (100+ files)',
        ],
      },
      // pricing: {
      //   startingAt: '$8,500',
      //   packages: [
      //     {
      //       name: 'Starter Brand',
      //       price: '$8,500',
      //       features: [
      //         'Brand strategy session',
      //         'Logo + 2 variations',
      //         'Basic brand guidelines',
      //         'Business card design',
      //         '3 revision rounds',
      //       ],
      //     },
      //     {
      //       name: 'Growth Brand',
      //       price: '$15,000',
      //       recommended: true,
      //       features: [
      //         'Everything in Starter',
      //         'Complete visual identity system',
      //         'Full brand guidelines book',
      //         'Social media templates',
      //         'Website design system',
      //         'Unlimited revisions',
      //       ],
      //     },
      //     {
      //       name: 'Enterprise Brand',
      //       price: 'Custom',
      //       features: [
      //         'Everything in Growth',
      //         'Multi-brand architecture',
      //         'Motion design system',
      //         'Internal brand training',
      //         'Dedicated brand manager',
      //         'Ongoing support (6 months)',
      //       ],
      //     },
      //   ],
      // },
      cta: {
        title: 'Ready to Build Your Brand?',
        description: 'Schedule a free 30-minute strategy call to discuss your goals and find the right package for your business.',
      },
    },
  },
  
  'marketing-digital-assets': {
    slug: 'marketing-digital-assets',
    tier: 'standard',
    title: 'Marketing & Digital Assets',
    tagline: 'Design Systems for Digital Growth',
    description: 'Design systems and assets that help your brand communicate clearly and consistently across digital channels.',
    items: [
      'Social media and campaign templates',
      'Website and UI design assets',
      'Email and digital marketing visuals',
    ],
    hero: {
      badge: 'Digital Assets',
      headline: 'Scale Your Marketing Without Sacrificing Quality',
      subheadline: 'Professional design systems and templates that empower your team to create on-brand content consistently.',
      ctaPrimary: 'Get Started',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'The Digital Content Bottleneck',
        description: 'Marketing teams need to move fast, but without proper design systems, quality suffers and brand consistency breaks down.',
        painPoints: [
          { stat: '12hrs', desc: 'average weekly time lost on ad-hoc design requests' },
          { stat: '58%', desc: 'of digital content fails to meet brand standards' },
          { stat: '3.4x', desc: 'higher engagement with professionally designed assets' },
        ],
      },
      process: {
        title: 'How We Build Your Design System',
        steps: [
          {
            title: 'Audit & Requirements',
            desc: 'Review existing assets, identify gaps, and define your content needs across channels.',
          },
          {
            title: 'System Design',
            desc: 'Create flexible templates and components that maintain brand integrity while enabling speed.',
          },
          {
            title: 'Team Training',
            desc: 'Workshop sessions to ensure your team can confidently use and customize the system.',
          },
        ],
      },
      deliverables: {
        title: 'Your Complete Digital Asset Library',
        items: [
          '50+ social media post templates (all platforms)',
          'Email marketing template suite',
          'Ad creative templates (Meta, Google, LinkedIn)',
          'Website graphics and UI components',
          'Presentation deck templates',
          'Digital brand guidelines',
          'Editable source files (Figma/Canva)',
        ],
      },
      cta: {
        title: 'Empower Your Marketing Team',
        description: 'Let\'s build a design system that accelerates your content creation. Starting at $4,500.',
      },
    },
  },
  
  'print-brand-collateral': {
    slug: 'print-brand-collateral',
    tier: 'standard',
    title: 'Print & Brand Collateral',
    tagline: 'Make Every Touchpoint Count',
    description: 'Tangible brand materials that reinforce credibility and recognition across physical touchpoints.',
    items: [
      'Business cards and marketing collateral',
      'Presentations and reports',
      'Packaging and print design',
    ],
    hero: {
      badge: 'Print Design',
      headline: 'Physical Touchpoints That Leave Lasting Impressions',
      subheadline: 'Professional print materials that command attention and reinforce your brand\'s credibility in every interaction.',
      ctaPrimary: 'Start a Project',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'Why Print Still Matters',
        description: 'In a digital world, premium print materials signal professionalism, permanence, and attention to detail that digital alone can\'t achieve.',
        painPoints: [
          { stat: '82%', desc: 'of customers judge credibility by business card quality' },
          { stat: '4x', desc: 'better recall with physical marketing materials' },
          { stat: '67%', desc: 'of B2B buyers prefer printed proposals for major decisions' },
        ],
      },
      process: {
        title: 'From Concept to Print-Ready',
        steps: [
          {
            title: 'Requirements & Strategy',
            desc: 'Understand your goals, audience, and how these materials fit into your brand ecosystem.',
          },
          {
            title: 'Design & Refinement',
            desc: 'Create designs optimized for print production with proper bleeds, color modes, and specifications.',
          },
          {
            title: 'Production Support',
            desc: 'Print-ready files with vendor coordination and quality assurance if needed.',
          },
        ],
      },
      deliverables: {
        title: 'Print-Perfect Deliverables',
        items: [
          'Print-ready PDF files (CMYK, proper bleeds)',
          'Multiple size variations',
          'Spot color specifications',
          'Paper and finish recommendations',
          'Vendor coordination (optional)',
          'Digital preview mockups',
        ],
      },
      cta: {
        title: 'Ready for Premium Print Materials?',
        description: 'Let\'s create print collateral that elevates your brand. Project pricing starts at $1,200.',
      },
    },
  },
  
  'custom-design-solutions': {
    slug: 'custom-design-solutions',
    tier: 'flexible',
    title: 'Custom Design Solutions',
    tagline: 'Flexible Design Partnership',
    description: 'Flexible, on-demand design support tailored to unique business needs and evolving projects.',
    items: [
      'Custom design engagements',
      'Design support for launches and campaigns',
    ],
    hero: {
      badge: 'Custom Solutions',
      headline: 'Your Vision, Our Expertise',
      subheadline: 'Flexible design partnership for unique projects that don\'t fit into standard packages.',
      ctaPrimary: 'Discuss Your Project',
    },
    hasCustomPage: false,
    templateContent: {
      problem: {
        title: 'When Standard Packages Don\'t Fit',
        description: 'Some projects require a custom approach. Whether it\'s a product launch, special campaign, or unique business need, we adapt to your requirements.',
        painPoints: [
          { stat: '100%', desc: 'of projects are tailored to specific business goals' },
          { stat: 'Flexible', desc: 'pricing models: hourly, project, or retainer' },
          { stat: '48hr', desc: 'typical response time for urgent requests' },
        ],
      },
      process: {
        title: 'How Custom Engagements Work',
        steps: [
          {
            title: 'Discovery Call',
            desc: 'Free 30-minute consultation to understand your needs and determine if we\'re a good fit.',
          },
          {
            title: 'Custom Proposal',
            desc: 'Detailed scope, timeline, and pricing tailored to your specific project requirements.',
          },
          {
            title: 'Flexible Execution',
            desc: 'Work together in the way that suits your project best - sprint, iterative, or ongoing support.',
          },
        ],
      },
      deliverables: {
        title: 'Past Custom Projects',
        items: [
          'Event branding and signage systems',
          'Product launch campaigns (360° design)',
          'Interactive pitch decks and presentations',
          'Trade show booth designs',
          'Internal communications materials',
          'Book and editorial design',
          'Motion graphics and video assets',
          'Environmental and retail design',
        ],
      },
      cta: {
        title: 'Let\'s Explore Your Project',
        description: 'Every custom project starts with a conversation. Share your vision and we\'ll create a plan to bring it to life.',
      },
    },
  },
}

// Helper function
export const getServiceConfig = (slug: string): ServiceConfig | null => {
  return servicesConfig[slug] || null
}