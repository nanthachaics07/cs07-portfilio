import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PORTFOLIO_TABS } from '../../constants/sectionIds';
import TabNav from './TabNav';

describe('TabNav', () => {
  it('renders all portfolio tabs', () => {
    render(<TabNav />);
    for (const tab of PORTFOLIO_TABS) {
      const link = screen.getByRole('link', { name: tab.label });
      expect(link).toHaveAttribute('href', tab.href);
    }
    expect(document.querySelector('.et-hero-tab-slider')).toBeInTheDocument();
  });
});
