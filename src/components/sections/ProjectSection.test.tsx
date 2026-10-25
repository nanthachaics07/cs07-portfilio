import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import ProjectSection from './ProjectSection';

describe('ProjectSection', () => {
  it('mounts the project anchor with featured work', () => {
    const { container } = render(<ProjectSection />);
    expect(container.querySelector(`#${SECTION_IDS.project}`)).toBeInTheDocument();
    expect(screen.getByText(/e-commerce project/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /source code/i }).length).toBeGreaterThan(0);
  });
});
