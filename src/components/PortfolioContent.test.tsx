import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PortfolioContent from './PortfolioContent';

describe('PortfolioContent', () => {
  it('composes layout shell and main column', () => {
    const { container } = render(<PortfolioContent />);
    expect(screen.getByRole('heading', { name: /hello, it's me safe/i })).toBeInTheDocument();
    expect(container.querySelector('.main')).toBeInTheDocument();
    expect(container.querySelector('.sidemenu')).toBeInTheDocument();
    expect(container.querySelector('.et-main')).toBeInTheDocument();
    expect(container.querySelector('.footer1')).toBeInTheDocument();
  });
});
