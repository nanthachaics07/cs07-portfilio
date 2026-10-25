import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import CertificateSection from './CertificateSection';

describe('CertificateSection', () => {
  it('mounts certificate cards without duplicate element ids', () => {
    const { container } = render(<CertificateSection />);
    expect(container.querySelector(`#${SECTION_IDS.certificate}`)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
    expect(container.querySelectorAll('[id]')).toHaveLength(1);
    expect(container.querySelector('[id]')).toHaveAttribute('id', SECTION_IDS.certificate);
  });
});
