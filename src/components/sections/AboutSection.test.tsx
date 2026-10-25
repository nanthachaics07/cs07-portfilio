import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('mounts the about anchor', () => {
    const { container } = render(<AboutSection />);
    expect(container.querySelector(`#${SECTION_IDS.about}`)).toBeInTheDocument();
    expect(container.textContent).toMatch(/microservice architecture/i);
  });
});
