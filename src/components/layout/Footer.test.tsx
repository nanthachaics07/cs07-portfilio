import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  it('renders copyright line', () => {
    render(<Footer />);
    expect(screen.getByText(/nanthachai intarpradit/i)).toBeInTheDocument();
    expect(screen.getByText(/copyright reserved/i)).toBeInTheDocument();
  });
});
