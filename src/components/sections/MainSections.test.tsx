import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SECTION_IDS } from '../../constants/sectionIds';
import MainSections from './MainSections';

describe('MainSections', () => {
  it('renders every page section in tab order', () => {
    const { container } = render(<MainSections />);
    const ids = Object.values(SECTION_IDS);
    for (const id of ids) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
  });
});
