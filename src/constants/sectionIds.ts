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
};

export const PORTFOLIO_TABS: PortfolioTab[] = [
  { href: `#${SECTION_IDS.introduction}`, label: 'Introduction' },
  { href: `#${SECTION_IDS.about}`, label: 'About' },
  { href: `#${SECTION_IDS.education}`, label: 'Education' },
  { href: `#${SECTION_IDS.project}`, label: 'Project' },
  { href: `#${SECTION_IDS.skill}`, label: 'Skill' },
  { href: `#${SECTION_IDS.certificate}`, label: 'Certificate' },
  { href: `#${SECTION_IDS.contact}`, label: 'Contact' },
];
