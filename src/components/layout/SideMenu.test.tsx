import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SideMenu from './SideMenu';

describe('SideMenu', () => {
  it('renders profile and document links', () => {
    render(<SideMenu />);
    expect(screen.getByRole('heading', { name: /nanthachai intarpradit/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /mail me/i })).toHaveAttribute(
      'href',
      'mailto:nanthachai.safecs07@gmail.com',
    );
    expect(screen.getByRole('link', { name: /curriculum vitae/i })).toHaveAttribute(
      'href',
      '/cs07-portfilio/pages/cv.html',
    );
  });
});
