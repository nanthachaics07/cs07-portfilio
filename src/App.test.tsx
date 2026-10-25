import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the portfolio page', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /hello, it's me safe/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Introduction' })).toBeInTheDocument();
  });
});
