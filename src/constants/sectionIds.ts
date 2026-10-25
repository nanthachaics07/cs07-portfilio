/**
 * Scroll-target IDs for the sticky tab bar (`TabNav`) and `PageSection`.
 * Keep hrefs in sync: `#${SECTION_IDS.*}`.
 */
export const SECTION_IDS = {
  introduction: 'tab-Introduction',
  about: 'tab-About',
  education: 'tab-Education',
  project: 'tab-Project',
  skill: 'tab-Skill',
  certificate: 'tab-Certificate',
  contact: 'tab-Contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export type PortfolioTab = {
  href: `#${SectionId}`;
  label: string;
  shortLabel: string;
};

export const PORTFOLIO_TABS: PortfolioTab[] = [
  { href: `#${SECTION_IDS.introduction}`, label: 'Introduction', shortLabel: 'Intro' },
  { href: `#${SECTION_IDS.about}`, label: 'About', shortLabel: 'About' },
  { href: `#${SECTION_IDS.education}`, label: 'Education', shortLabel: 'Edu' },
  { href: `#${SECTION_IDS.project}`, label: 'Project', shortLabel: 'Work' },
  { href: `#${SECTION_IDS.skill}`, label: 'Skill', shortLabel: 'Skill' },
  { href: `#${SECTION_IDS.certificate}`, label: 'Certificate', shortLabel: 'Certs' },
  { href: `#${SECTION_IDS.contact}`, label: 'Contact', shortLabel: 'Contact' },
];
