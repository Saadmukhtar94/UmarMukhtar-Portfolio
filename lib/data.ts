// ─── Navigation ────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Services',   href: '#services'   },
  { label: 'Portfolio',  href: '#portfolio'  },
  { label: 'Contact',    href: '#contact'    },
]

// ─── Professional Experience ───────────────────────────────────────────────────
export const experiences = [
  {
    title:    'Game Programmer',
    company:  'TinyKraken Games',
    period:   '2022 – 2024',
    location: 'Lahore, Pakistan',
    bullets: [
      'Built and shipped hyper-casual, idle and puzzle titles for publishers including Voodoo and Supersonic.',
      'Implemented modular game systems and Git-based workflows enabling concurrent development with minimal merge conflicts.',
      'Designed and delivered solo projects end-to-end: prototyping, gameplay programming, optimisation and publishing preparation.',
      'Mentored junior developers on coding standards, architecture and troubleshooting to improve delivery consistency.',
      'Managed mobile build pipelines, including iOS uploads and App Store packaging.',
    ],
  },
  {
    title:    'Game Developer',
    company:  'Journal Post',
    period:   '2021 – 2022',
    location: 'Lahore, Pakistan',
    bullets: [
      'Developed casual game systems and rapid prototypes with a focus on user retention.',
      'Designed modular pipelines and reusable architecture to accelerate feature delivery across projects.',
      'Integrated ads/analytics SDKs ensuring stability across frequent mobile OS updates.',
      'Collaborated with designers to convert specifications into production-ready gameplay systems.',
    ],
  },
  {
    title:    'Software Engineer',
    company:  'GameStorm Studios',
    period:   '2020 – 2021',
    location: 'Lahore, Pakistan',
    bullets: [
      'Worked on simulation and casual titles with emphasis on asset reskinning, asset merge workflows and large UI integrations.',
      'Integrated popular Unity assets (RCC, RFPS, UCC) and 3rd-party SDKs, optimising performance for mobile hardware.',
      'Implemented scalable gameplay systems and mechanics across multiple projects.',
      'Assisted QA cycles and bug triage to ensure stable releases and reduced regressions.',
    ],
  },
]

// ─── Skills ────────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    icon:   '📱',
    title:  'Platforms & Technologies',
    skills: [
      'Android Development', 'iOS Development',
      'WebGL Deployment',    'Xcode Integration',
      'ARKit Implementation','Cross-platform Optimization',
      'Build Automation',    'Version Control (Git)',
    ],
  },
  {
    icon:   '🎨',
    title:  'Graphics & Animation',
    skills: [
      'UI/UX Design for Games', '2D Sprite Animation',
      '3D Modeling Basics',     'Shader Programming',
      'Visual Effects',         'Texture Optimization',
      'Lighting Systems',       'Post-processing Effects',
    ],
  },
  {
    icon:   '🤝',
    title:  'Problem Solving & Collaboration',
    skills: [
      'Agile Development',   'Project Management',
      'Code Review',         'Team Leadership',
      'Client Communication','Debugging & Testing',
      'Documentation',       'Mentoring',
    ],
  },
]

// ─── Services ──────────────────────────────────────────────────────────────────
export const services = [
  {
    icon:        '⚡',
    title:       'Mobile Optimization',
    description: 'Performance tuning and optimization for mobile devices. Ensuring smooth gameplay across different hardware configurations and reducing resource usage.',
    features:    ['Performance Analysis','Draw Call Reduction','Memory Optimization','Battery Life Enhancement'],
  },
  {
    icon:        '🎯',
    title:       'Consultation',
    description: 'Expert consultation and strategic guidance for game development projects. From technical architecture to gameplay mechanics optimization.',
    features:    ['Technical Architecture Review','Performance Analysis','Best Practices Guidance','Strategic Planning'],
  },
  {
    icon:        '🔗',
    title:       'SDK & Third-party Integrations',
    description: 'Seamless integration of advertising networks, analytics platforms, payment systems, and social media APIs to enhance game functionality.',
    features:    ['Ad Network Integration','Analytics Implementation','Payment Solutions','Social Media APIs'],
  },
  {
    icon:        '🌐',
    title:       'Cross-platform Development',
    description: 'Building games that work flawlessly across Android, iOS, and WebGL platforms with platform-specific optimizations and features.',
    features:    ['Multi-platform Deployment','Platform-specific Features','Universal Compatibility','Cloud Synchronization'],
  },
  {
    icon:        '🔧',
    title:       'Custom Tools & Automation',
    description: 'Development of custom Unity tools and automated build systems to streamline workflow and improve development efficiency.',
    features:    ['Unity Editor Extensions','Build Automation','Custom Workflows','Development Tools'],
  },
]

// ─── Portfolio Games ───────────────────────────────────────────────────────────
export const portfolioItems = [
  {
    title:       'Puzzle Warrior: Dungeon Fight',
    description: 'A match-3 RPG blending strategic puzzle combat, RPG progression & offline play. Match gems, unleash special skills, conquer dungeons + collect powerful gear.',
    techs:       ['Unity','C#','Scriptable Objects','Event System','3D Physics','2D Grid'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Blender Jam: Juice Match Game',
    description: 'Vibrant match-3 puzzle game with a fruit & blender twist: blend juices, upgrade blenders, serve customers & unlock combos. Relaxing visuals, offline play & tons of juicy fun.',
    techs:       ['Unity','C#','Object Pooling','Scriptable Objects','PathFinding','Animator'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Battle Order: Merge Defense TD',
    description: 'Offline merge-based tower defense: build and merge troops to upgrade strength, place defenders strategically, and repel waves of enemies.',
    techs:       ['Unity','C#','Scriptable Objects','Pooling','Event System','3D Physics'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Balloon Fill: Color Match Game',
    description: 'Satisfying match-and-fill puzzle gameplay: match balloons by color, fill shapes, unlock new levels & enjoy relaxing visuals. Casual and fun for all ages.',
    techs:       ['Unity','C#','Object Pooling','Scriptable Objects','DoTween','Animator'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Merge Empress: Kingdom Restoration',
    description: 'Relaxing merge-based puzzle adventure: combine identical items to upgrade, renovate homes & castle grounds in the Avonlea Kingdom. Offline play, story missions, and soothing merge mechanics.',
    techs:       ['Unity','C#','Scriptable Objects','DoTween','Animator','2D Grid','Inventory System','JSON'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Secret Wars',
    description: 'Team-based arena combat: assemble your battle squad, deploy special skills and strategies, upgrade characters and win PvP matchups. Fast-paced battles with strategic upgrades.',
    techs:       ['Unity','C#','Scriptable Objects','3D Physics','Multiplayer','DoTween','GIT','Particle System','Optimizations'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Merge Farming Game',
    description: 'Build and expand your farm through relaxing merge-and-harvest gameplay. Merge lower-level crops to unlock higher varieties, harvest produce, sell for profit, unlock new plots.',
    techs:       ['Unity','C#','Scriptable Objects','3D Physics','Animator','Particles'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Frozen Glacier',
    description: 'Journey through a frozen wasteland: break ice, mine resources, and rebuild settlements to bring life back to a frozen world. Explore, gather, expand, and restore.',
    techs:       ['Unity','C#','3D Physics','Animator','DoTween'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Magnet Man',
    description: 'A fast-paced arcade game where you attract objects towards yourself, evade giants, then release to blast everything back and clear your path. Keep moving, stay sharp, survive.',
    techs:       ['Unity','C#','3D Physics','Particle System','DoTween'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       "Don't Touch - Escape Prison",
    description: 'Navigate treacherous prison levels full of traps and spikes — collect diamonds, avoid touching anything dangerous, and make your way to freedom.',
    techs:       ['Unity','C#','3D Physics','DoTween','Animator','NavMesh'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Stickers Puzzle: Match by Color',
    description: 'Relax & create: match stickers by number and color to complete beautiful picture puzzles. A calming art-sticker experience perfect for all ages.',
    techs:       ['Unity','C#','Scriptable Objects','Shader','DoTween'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Scavenger Hunt: Find the Words',
    description: 'Uncover hidden words and objects across beautifully designed scenes. Follow clues, zoom in, solve riddles, and explore immersive levels.',
    techs:       ['Unity 3D','C#','Hidden Object Mechanics','Clue & Riddle Integration','Puzzle Progression','Level Design & Visual Detail'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'Merge & Cook - Restaurant Game',
    description: 'Combine food items to craft advanced dishes, cook to serve customers, and grow your restaurant empire. Merge, manage, and create new cuisines.',
    techs:       ['Unity 3D','C#','Merge Mechanics','Cooking / Resource Management','Casual Game Loop','Restaurant Expansion'],
    storeUrl:    '#',
    image:       null,
  },
  {
    title:       'US Army Commando: Survival Battlegrounds',
    description: 'Parachute into hostile islands, fight enemies, survive intense battleground missions. Scavenge weapons, complete objectives and outlast threats in this fast-paced FPS shooter.',
    techs:       ['Unity 3D','C#','First-Person / Third-Person Shooter','Weapon Collection & Upgrades','Survival Mechanics','Mission / Level Progression'],
    storeUrl:    '#',
    image:       null,
  },
]
