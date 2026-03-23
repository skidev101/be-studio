export interface Project {
  id: string
  title: string
  category: string
  description: string
  longDescription?: string
  client?: string
  year?: string
  image: string
  gallery?: string[]
  slug: string
  tags: string[]
  featured?: boolean
  challenge?: string
  solution?: string
}

export const portfolioProjects: Project[] = [
  {
    id: '1',
    title: 'Nexus Fintech Rebrand',
    category: 'Brand Strategy & Identity',
    client: 'Nexus Digital Bank',
    year: '2023',
    description: 'A complete visual overhaul for a next-generation digital banking platform, focusing on trust and innovation.',
    longDescription: 'Nexus required a brand identity that could bridge the gap between traditional banking security and modern fintech agility. We developed a comprehensive system including a new logo, typography, and a "digital-first" color palette.',
    challenge: 'The existing brand felt "too startup" and lacked the gravitas needed to attract institutional investors while still appearing accessible to Gen-Z users.',
    solution: 'We utilized a structured grid system and a deep "Midnight Navy" paired with an "Electric Cyan" to balance stability with energy.',
    image: '/images/blue-abstract.png',
    gallery: ['/images/blue-abstract.png', '/images/analysis.png', '/images/hero3.png'],
    slug: 'nexus-fintech',
    tags: ['Brand Identity', 'UI/UX Design', 'Strategy'],
    featured: true
  },
  {
    id: '2',
    title: 'Ethereal Skincare',
    category: 'Packaging & Print',
    client: 'Ethereal Organics',
    year: '2024',
    description: 'Minimalist packaging design for a premium organic skincare line, emphasizing purity and natural ingredients.',
    longDescription: 'Ethereal Skincare wanted to stand out in a crowded "green beauty" market. We moved away from typical leaf motifs and focused on tactile minimalism.',
    challenge: 'Creating a premium feel using only sustainable, recycled materials which often have inherent texture and color limitations.',
    solution: 'We used blind embossing and a single-color botanical ink system to create a luxury experience that remains 100% compostable.',
    image: '/images/hero3.png',
    gallery: ['/images/hero3.png', '/images/hero2.1.jpg'],
    slug: 'ethereal-skincare',
    tags: ['Packaging', 'Print', 'Art Direction'],
    featured: true
  },
  {
    id: '3',
    title: 'Vanguard Realty',
    category: 'Digital Assets',
    client: 'Vanguard Group',
    year: '2023',
    description: 'High-performance social media and marketing campaign assets for a luxury real estate group.',
    longDescription: 'Vanguard needed a way to showcase multi-million dollar properties across Instagram and LinkedIn with a consistent, high-end editorial feel.',
    image: '/images/analysis.png',
    slug: 'vanguard-realty',
    tags: ['Social Media', 'Marketing', 'Digital Assets'],
    featured: false
  },
  {
    id: '4',
    title: 'Aura Wellness',
    category: 'Brand Analysis',
    client: 'Aura Global',
    year: '2024',
    description: 'Deep-dive brand audit and market positioning for an international wellness and meditation app.',
    image: '/images/hero2.1.jpg',
    slug: 'aura-wellness',
    tags: ['Brand Audit', 'Positioning', 'Research'],
    featured: false
  },
  {
    id: '5',
    title: 'Stellar Tech Conference',
    category: 'Custom Design',
    client: 'Stellar Events',
    year: '2023',
    description: 'Complete event visual system including environmental graphics, signage, and digital promotion.',
    image: '/images/blue-abstract.png',
    slug: 'stellar-tech',
    tags: ['Event Branding', 'Signage', 'Creative Direction'],
    featured: false
  },
  {
    id: '6',
    title: 'Lumina Home',
    category: 'Business Branding',
    client: 'Lumina Ltd.',
    year: '2024',
    description: 'Strategic branding for a sustainable home goods manufacturer, connecting modern design with eco-conscious values.',
    image: '/images/hero123.png',
    slug: 'lumina-home',
    tags: ['Logo Design', 'Brand Guidelines', 'Messaging'],
    featured: false
  }
]
