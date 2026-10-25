import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import IntroductionSection from './IntroductionSection';

describe('IntroductionSection', () => {
  it('mounts the introduction anchor', () => {
    const { container } = render(<IntroductionSection />);
    expect(container.querySelector(`#${SECTION_IDS.introduction}`)).toBeInTheDocument();
    expect(container.textContent).toMatch(/say hi from/i);
  });
});
