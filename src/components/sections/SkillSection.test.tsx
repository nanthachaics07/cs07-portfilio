import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import SkillSection from './SkillSection';

describe('SkillSection', () => {
  it('mounts the skill anchor with stack labels', () => {
    const { container } = render(<SkillSection />);
    expect(container.querySelector(`#${SECTION_IDS.skill}`)).toBeInTheDocument();
    expect(screen.getByText(/programming language/i)).toBeInTheDocument();
    expect(screen.getByText('Golang')).toBeInTheDocument();
    const skillImages = container.querySelectorAll('.skill--img--cover img');
    expect(skillImages.length).toBeGreaterThan(0);
    for (const img of skillImages) {
      expect(img).toHaveAttribute('alt', '');
      expect(img).toHaveAttribute('aria-hidden', 'true');
    }
  });
});
