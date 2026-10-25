import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  it('mounts contact details', () => {
    const { container } = render(<ContactSection />);
    expect(container.querySelector(`#${SECTION_IDS.contact}`)).toBeInTheDocument();
    expect(screen.getByText(/nanthachai\.safecs07@gmail\.com/i)).toBeInTheDocument();
    expect(screen.getByText(/\+66 80-9407678/)).toBeInTheDocument();
  });
});
