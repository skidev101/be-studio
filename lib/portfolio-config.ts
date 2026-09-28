// lib/portfolio-config.ts
//
// EMPTY ON PURPOSE — DO NOT ADD INVENTED PROJECTS.
//
// The previous contents of this file were six fabricated case studies (made-up
// clients, years and craft narratives) illustrated with five recycled stock
// images. None of it appears anywhere in docs/, and the brand restructure
// foundation doc has BE at "foundational discovery" — with "BE's Brand Success
// Stories" listed as a future part of the ecosystem, not something that already
// exists. Publishing fictional client work on a relaunching agency site is the
// fastest way to lose the trust the whole positioning depends on.
//
// The portfolio page and grid render an honest empty state until real work is
// added here. To publish a project, add one object per case study below:
//
//   {
//     id: '1',
//     slug: 'client-name-project',
//     title: 'Client — Project',
//     category: 'Brand Identity',      // becomes a filter chip
//     client: 'Client name',           // omit to display "Confidential"
//     year: '2026',
//     description: 'One-line summary used on the card.',
//     longDescription: 'Opening paragraph on the detail page.',
//     challenge: 'What the business was up against.',
//     solution: 'What we did about it.',
//     image: '/images/portfolio/client-name/hero.jpg',
//     gallery: ['/images/portfolio/client-name/1.jpg'],
//     tags: ['Brand Strategy', 'Identity'],
//     featured: false,
//   }

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

export const portfolioProjects: Project[] = []
