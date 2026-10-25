import { describe, expect, it } from 'vitest';
import { PORTFOLIO_TABS, SECTION_IDS } from './sectionIds';

describe('sectionIds', () => {
  it('defines seven scroll targets', () => {
    expect(Object.keys(SECTION_IDS)).toHaveLength(7);
  });

  it('keeps tabs aligned with section ids', () => {
    expect(PORTFOLIO_TABS).toHaveLength(7);
    expect(PORTFOLIO_TABS.map((t) => t.href)).toEqual([
      `#${SECTION_IDS.introduction}`,
      `#${SECTION_IDS.about}`,
      `#${SECTION_IDS.education}`,
      `#${SECTION_IDS.project}`,
      `#${SECTION_IDS.skill}`,
      `#${SECTION_IDS.certificate}`,
      `#${SECTION_IDS.contact}`,
    ]);
  });
});
