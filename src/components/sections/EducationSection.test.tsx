import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import EducationSection from './EducationSection';

describe('EducationSection', () => {
  it('mounts the education anchor with timeline entries', () => {
    const { container } = render(<EducationSection />);
    expect(container.querySelector(`#${SECTION_IDS.education}`)).toBeInTheDocument();
    expect(screen.getByText(/gridwhiz/i)).toBeInTheDocument();
    expect(screen.getByText(/rmutsb university/i)).toBeInTheDocument();
  });
});
