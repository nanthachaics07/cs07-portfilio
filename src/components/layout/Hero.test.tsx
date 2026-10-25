import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from './Hero';

describe('Hero', () => {
  it('renders the banner headline', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { name: /hello, it's me safe/i })).toBeInTheDocument();
    expect(screen.getByText(/create/i)).toBeInTheDocument();
  });
});
