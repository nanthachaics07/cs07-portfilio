import { describe, expect, it } from 'vitest';
import { mailto, siteLinks } from './siteLinks';

describe('siteLinks', () => {
  it('loads contact and social URLs from YAML', () => {
    expect(siteLinks.contact.email).toContain('@');
    expect(siteLinks.social.github).toMatch(/^https:\/\/github\.com\//);
    expect(siteLinks.projects.peaInternship.experiences).toMatch(/^https:\/\//);
  });

  it('builds mailto links', () => {
    expect(mailto('a@b.co')).toBe('mailto:a@b.co');
  });
});
