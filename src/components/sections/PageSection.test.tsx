import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';

describe('PageSection', () => {
  it('renders a scroll anchor section', () => {
    render(
      <PageSection id={SECTION_IDS.about}>
        <p>About body</p>
      </PageSection>,
    );
    const section = screen.getByText('About body').closest('section');
    expect(section).toHaveClass('et-slide');
    expect(section).toHaveAttribute('id', SECTION_IDS.about);
  });
});
