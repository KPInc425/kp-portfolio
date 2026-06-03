export type PortfolioProjectRecord = {
  id: string
  title: string
  tagline: string
  description: string
  bullets: string[]
  imageUrl: string
  projectUrl: string
  techStack?: string[]
  sortOrder: number
  comingSoon?: boolean
}

export const defaultProjects: PortfolioProjectRecord[] = [
  {
    id: 'tmra-app',
    title: 'TMRA.ai',
    tagline: 'Interactive Choose Your Own Adventure Game for the Web',
    description: "Be a part of generating your own player-choice adventure stories with the power of AI, immersive imagery, and sharable story flows. The app blends narrative generation, image synthesis, and user-driven branching to create an experience that feels playful, surprising, and personal.",
    bullets: [
      'ChatGPT for story generation and Stable Diffusion for image generation',
      'Integration with print service and PDF generation for physical story copies',
      'Gallery-to-webshop flow for favorite generated images',
      'Interactive story telling with user-driven choices to direct the narrative',
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--zwekjVui--/v1695340529/PortfolioSite/TMRAExample_y1y6ow.jpg',
    projectUrl: 'https://app.tmra.ai',
    techStack: ['Blazor', '.NET', 'AI APIs', 'Stable Diffusion'],
    sortOrder: 10,
  },
  {
    id: 'tmra-landing',
    title: 'TMRA Landing Page',
    tagline: 'Landing page for TMRA.ai',
    description: 'A marketing site built to replace a constrained hosted-page solution with a custom React experience. The focus was tighter control over story, interaction, and design while keeping the content approachable for first-time visitors.',
    bullets: [
      'Simple landing page to showcase the game and build excitement',
      'Replaced limitations from the original hosted site builder',
      'Built with React, Theme UI, Radix Components, Node.js, Express, and Vite',
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--B9qT-Iw1--/v1699392666/PortfolioSite/TMRALanding_gtw5oc.jpg',
    projectUrl: 'https://tmra.ai',
    techStack: ['React', 'Theme UI', 'Radix', 'Express', 'Vite'],
    sortOrder: 20,
  },
  {
    id: 'word-search-kingdom',
    title: 'Word Search Kingdom',
    tagline: 'Nostalgic Word Search Game with a modern twist',
    description: 'A puzzle experience that modernizes a classic format with account-aware progression, planned social competition, and a more polished product mindset. It leans on the .NET ecosystem and a test-oriented workflow for long-term growth.',
    bullets: [
      'Generate custom word search puzzles with custom words and sizes',
      'Account-aware progress with leaderboard plans',
      'Future multiplayer roadmap includes time-attack and collaborative modes',
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--R1NUUd1X--/v1695341498/PortfolioSite/WSKExample_tmoj0r.jpg',
    projectUrl: 'https://wordsearchkingdom.com',
    techStack: ['Blazor WASM', 'C#', 'MudBlazor', 'SQL'],
    sortOrder: 30,
  },
  {
    id: 'willows-wonderland',
    title: 'Willows Wonderland',
    tagline: 'Bringing imagination to life, stroke by stroke',
    description: 'A full-stack portfolio site for a local artist, designed to reflect the artist’s style while giving them straightforward tools to manage their gallery. It connected design sensibility with practical admin workflows.',
    bullets: [
      'Full stack app built with RedwoodJS, Mantine, and Netlify',
      'Simple auth and admin tools for gallery management',
      'Cloudinary-backed image upload and delete flows',
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--94AVblML--/v1699393171/PortfolioSite/WillowsWonderland_xtws8r.jpg',
    projectUrl: 'https://willows-wonderland.netlify.app/',
    techStack: ['RedwoodJS', 'Mantine', 'Supabase', 'Cloudinary'],
    sortOrder: 40,
  },
  {
    id: 'kng-auto-detail',
    title: 'KnG Auto Detail',
    tagline: 'Crafting Brilliance, One Car at a Time',
    description: 'A small-business site built to present services cleanly, support mobile-first browsing, and give customers a direct path to contact. The work focused on pragmatic clarity and trustworthy presentation.',
    bullets: [
      'Simple small-business site for services and contact details',
      'Built with Next.js and Theme UI',
      'Mobile-first layout for all devices',
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--IflweC9Y--/v1697566205/KnGAuto/LandingExample_rattsm.jpg',
    projectUrl: 'https://kngautodetail.netlify.app/kng/about',
    techStack: ['Next.js', 'Theme UI'],
    sortOrder: 50,
  },
  {
    id: 'deno-tauri-foundation',
    title: 'Deno-Native SvelteKit + Tauri Integration',
    tagline: 'Cross-platform desktop foundations with modern tooling',
    description: 'A clean, scalable foundation for cross-platform desktop applications using modern tooling. Built to highlight architecture decisions, onboarding clarity, and maintainability from day one.',
    bullets: [
      'Modular routing and shared-state patterns for scalable app growth',
      'Build optimizations and a future-proof folder structure',
      'Built as a showcase of cleaner architecture and stronger delivery maturity',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    projectUrl: '#coming-soon',
    techStack: ['Deno', 'SvelteKit', 'Tauri', 'TypeScript'],
    sortOrder: 60,
    comingSoon: true,
  },
  {
    id: 'modular-game-framework',
    title: 'Modular Game Framework',
    tagline: 'Plugin-based architecture for multiplayer-ready systems',
    description: 'A flexible lobby and plugin system inspired by large-scale multiplayer frameworks. The emphasis is hot-swappable modules, event-driven flows, and long-term extensibility without turning the codebase into a maze.',
    bullets: [
      'Plugin-based architecture with clean boundaries',
      'Event-driven logic for rapid prototyping and iterative growth',
      'Designed to demonstrate systems thinking, not just feature delivery',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    projectUrl: '#coming-soon',
    techStack: ['TypeScript', 'Game Systems', 'Plugin Architecture'],
    sortOrder: 70,
    comingSoon: true,
  },
  {
    id: 'cube-pipeline-optimization',
    title: 'Data Pipeline Optimization with Cube.dev',
    tagline: 'Faster analytics through pre-aggregation and cache strategy',
    description: 'A performance-oriented analytics effort focused on pre-aggregations, caching strategy, and latency reduction. The work sharpened the balance between clean architecture and measurable runtime gains.',
    bullets: [
      'Implemented pre-aggregations and smarter cache layers',
      'Improved analytics query performance and reduced infra load',
      'A showcase of practical data engineering and performance tuning',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    projectUrl: '#coming-soon',
    techStack: ['Cube.dev', 'PostgreSQL', 'Caching', 'Analytics'],
    sortOrder: 80,
    comingSoon: true,
  },
]