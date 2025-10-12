export type Link = Readonly<{
  label: string;
  href: string;
  external?: boolean;
  verifyHref?: string;
  verifyLabel?: string;
}>;

export type Identity = Readonly<{
  brandMark: string;
  name: string;
  title: string;
}>;

export type HeroData = Readonly<{
  eyebrow: string;
  lead: string;
  highlights: readonly string[];
  primaryAction: Link;
  secondaryAction: Link;
}>;

export type SkillGroup = Readonly<{
  category: string;
  items: readonly string[];
}>;

export type Experience = Readonly<{
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: readonly string[];
}>;

export type Project = Readonly<{
  name: string;
  stack: string;
  description: string;
  link?: string;
}>;

export type Language = Readonly<{
  label: string;
  level: string;
}>;

export type SectionHeader = Readonly<{
  eyebrow: string;
  title: string;
  subtitle?: string;
}>;

export type SkillsSection = Readonly<{
  header: SectionHeader;
  groups: readonly SkillGroup[];
}>;

export type ExperienceSection = Readonly<{
  header: SectionHeader;
  entries: readonly Experience[];
}>;

export type ProjectsSection = Readonly<{
  header: SectionHeader;
  items: readonly Project[];
}>;

export type ListItem = string | Link;

export type ListSection = Readonly<{
  header: SectionHeader;
  items: readonly ListItem[];
}>;

export type LanguagesSection = Readonly<{
  header: SectionHeader;
  items: readonly Language[];
}>;

export type ContactLinksSection = Readonly<{
  header: SectionHeader;
  items: readonly Link[];
}>;

export type CvData = Readonly<{
  identity: Identity;
  navigation: readonly Link[];
  hero: HeroData;
  skillsSection: SkillsSection;
  experienceSection: ExperienceSection;
  projectsSection: ProjectsSection;
  educationSection: Readonly<{
    education: ListSection;
    certifications: ListSection;
  }>;
  contactSection: Readonly<{
    languages: LanguagesSection;
    contacts: ContactLinksSection;
  }>;
  footerNote: string;
}>;
export const cvData: CvData = {
  identity: {
    brandMark: 'HB',
    name: 'Hamza Benchekchou',
    title: 'Développeur Backend Java & Angular',
  },
  navigation: [
    { label: 'Compétences', href: '#competences' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Projets', href: '#projets' },
    { label: 'Contact', href: '#contact' },
    {
      label: 'CV',
      href: 'assets/hamza.benchekchou.pdf',
      external: true,
    },
  ],
  hero: {
    eyebrow: 'Spring Boot - Node.js - Angular',
    lead:
      'Développeur backend spécialisé en Java Spring Boot et Node.js, passionné par la conception d’API RESTful, les microservices et les tests automatisés.',
    highlights: [
      'Spring Boot',
      'Node.js',
      'Angular',
      'Microservices',
      'TDD',
    ],
    primaryAction: {
      label: 'Voir mes projets',
      href: '#projets',
    },
    secondaryAction: {
      label: 'Me contacter',
      href: 'mailto:hamza.benchekchou@usmba.ac.ma',
    },
  },
  skillsSection: {
    header: {
      eyebrow: 'Compétences',
      title: 'Backend Java & Node.js, Frontend Angular',
      subtitle:
        'Une maîtrise complète du développement backend avec Spring Boot et Node.js, couplée à une expertise Angular et à une forte culture qualité logicielle.',
    },
    groups: [
      {
        category: 'Langages',
        items: ['Java', 'Python', 'PHP', 'C/C++', 'JavaScript', 'TypeScript'],
      },
      {
        category: 'Frameworks',
        items: [
          'Spring Boot',
          'Spring Security',
          'Hibernate',
          'Node.js',
          'Express.js',
          'Prisma',
        ],
      },
      {
        category: 'Bases de données',
        items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
      },
      {
        category: 'Backend',
        items: ['API RESTful', 'Microservices', 'Swagger/OpenAPI'],
      },
      {
        category: 'Frontend',
        items: ['Angular'],
      },
      {
        category: 'DevOps',
        items: ['Git', 'Docker', 'CI/CD', 'Jira'],
      },
      {
        category: 'Qualité & Tests',
        items: [
          'JUnit',
          'Mockito',
          'TDD',
          'Tests d’intégration',
          'Selenium',
        ],
      },
      {
        category: 'Architecture',
        items: ['Clean Architecture', 'Design Patterns'],
      },
      {
        category: 'Méthodologies',
        items: ['Agile (Scrum)'],
      },
    ],
  },
  experienceSection: {
    header: {
      eyebrow: 'Expérience',
      title: 'Projets et missions Full Stack',
      subtitle:
        'Des réalisations concrètes dans le développement d’applications Java Spring Boot et Angular, avec une approche centrée sur la qualité et la maintenabilité.',
    },
    entries: [
      {
        period: 'Fév. 2025 – Juil. 2025',
        company: 'Atlecs',
        role: 'Stagiaire Ingénierie Logicielle – Développement Full Stack',
        summary:
          'Développement d’un module de gestion des ressources humaines avec Spring Boot et Angular.',
        highlights: [
          'Conception et implémentation d’API RESTful avec Spring Boot',
          'Intégration de composants Angular dynamiques',
          'Rédaction de tests unitaires et d’intégration',
          'Collaboration avec les équipes RH pour adapter les fonctionnalités métiers',
        ],
      },
      {
        period: 'Sept. 2025 – Présent',
        company: 'Soluxury Hospitality',
        role: 'Développeur Logiciel – Développement Full Stack',
        summary:
          'Développement de services backend Node.js et intégration frontend Angular pour une plateforme hôtelière.',
        highlights: [
          'Développement de services backend avec Node.js, Express et Prisma',
          'Optimisation des requêtes SQL et intégration front Angular',
          'Participation aux revues de code et amélioration des performances',
        ],
      },
    ],
  },
  projectsSection: {
    header: {
      eyebrow: 'Projets',
      title: 'Réalisations techniques',
    },
    items: [
      {
        name: 'Système de gestion de cinéma',
        stack: 'Spring Boot - PostgreSQL - REST API',
        description:
          'Application de gestion des films, séances et réservations avec tests unitaires et d’intégration.',
      },
      {
        name: 'Gestion de comptes bancaires',
        stack: 'Spring Boot - MySQL - Hibernate - Angular',
        description:
          'Backend et frontend pour la gestion des comptes, transactions et historiques bancaires.',
      },
    ],
  },
  educationSection: {
    education: {
      header: {
        eyebrow: 'Formation',
        title: 'Parcours académique',
      },
      items: [
        'Licence en Mathématiques et Informatique – USMBA, Fès (2020–2023)',
        'Master en Systèmes Intelligents et Mobiles – USMBA, Fès (2023–2025)',
      ],
    },
    certifications: {
      header: {
        eyebrow: 'Certifications',
        title: '',
      },
      items: [
        {
          label: 'OCP: Java SE 17 Developer',
          href: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=0EE069369353753821CA5D841FEB536C9B4DDFD740973247C4C4087472669989',
          verifyLabel: 'Lien de vérification',
          verifyHref: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=0EE069369353753821CA5D841FEB536C9B4DDFD740973247C4C4087472669989',
          external: true,
        },
        {
          label: 'OCP: Java EE 7 Developer',
          href: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=280562B46268D2B0BD6211CA5EB813442A56104EA823B30F7E5A957AF8F7DED4',
          verifyLabel: 'Lien de vérification',
          verifyHref: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=280562B46268D2B0BD6211CA5EB813442A56104EA823B30F7E5A957AF8F7DED4',
          external: true,
        },
        {
          label: 'Spécialisation Spring Framework (Coursera)',
          href: 'https://www.coursera.org/account/accomplishments/specialization/9PW7OO2PHXVG',
          verifyLabel: 'Lien de vérification',
          verifyHref: 'https://www.coursera.org/account/accomplishments/specialization/9PW7OO2PHXVG',
          external: true,
        },
        {
          label: 'Gestion de projet Agile (Google)',
          href: 'https://www.coursera.org/account/accomplishments/verify/WY5JQWCVRTST',
          verifyLabel: 'Lien de vérification',
          verifyHref: 'https://www.coursera.org/account/accomplishments/verify/WY5JQWCVRTST',
          external: true,
        },
      ],
    },
  },
  contactSection: {
    languages: {
      header: {
        eyebrow: 'Langues',
        title: 'Communication',
      },
      items: [
        { label: 'Français / Arabe', level: 'Courant' },
        { label: 'Anglais', level: 'Intermédiaire' },
      ],
    },
    contacts: {
      header: {
        eyebrow: 'Contact',
        title: 'Discutons ensemble',
      },
      items: [
        {
          label: 'hamza.benchekchou@usmba.ac.ma',
          href: 'mailto:hamza.benchekchou@usmba.ac.ma',
        },
        {
          label: '+212 7 62 85 15 29',
          href: 'tel:+212762851529',
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/hamza-benchekchou',
          external: true,
        },
        {
          label: 'GitHub',
          href: 'https://github.com/benchekchou',
          external: true,
        },
      ],
    },
  },
  footerNote:
    'Passionné par la conception d’architectures backend robustes et testables avec Spring Boot, Node.js et Angular.',
};

export type EducationSection = CvData['educationSection'];
export type ContactSection = CvData['contactSection'];
