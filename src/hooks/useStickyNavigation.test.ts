import { fireEvent, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { SECTION_IDS } from '../constants/sectionIds';
import { useStickyNavigation } from './useStickyNavigation';

function mountNavFixture(): void {
  document.body.innerHTML = `
    <div class="et-hero-tabs">
      <div class="et-hero-tabs-container">
        <a class="et-hero-tab" href="#${SECTION_IDS.about}">About</a>
        <span class="et-hero-tab-slider"></span>
      </div>
    </div>
    <section id="${SECTION_IDS.about}" style="height: 400px"></section>
  `;

  const section = document.getElementById(SECTION_IDS.about)!;
  vi.spyOn(section, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 200,
    width: 100,
    height: 400,
    top: 200,
    left: 0,
    bottom: 600,
    right: 100,
    toJSON: () => ({}),
  });

  const tabs = document.querySelector('.et-hero-tabs')!;
  vi.spyOn(tabs, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    width: 100,
    height: 70,
    top: 0,
    left: 0,
    bottom: 70,
    right: 100,
    toJSON: () => ({}),
  });

  Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true });
  window.scrollTo = vi.fn();
}

describe('useStickyNavigation', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    mountNavFixture();
  });

  it('handles tab clicks without throwing', () => {
    renderHook(() => useStickyNavigation());
    const tab = document.querySelector<HTMLAnchorElement>('.et-hero-tab')!;
    expect(() => fireEvent.click(tab)).not.toThrow();
    expect(tab.getAttribute('href')).toBe(`#${SECTION_IDS.about}`);
  });

  it('moves the slider under the clicked tab', () => {
    const container = document.querySelector<HTMLElement>('.et-hero-tabs-container')!;
    const tab = document.querySelector<HTMLAnchorElement>('.et-hero-tab')!;
    vi.spyOn(container, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 700,
      height: 70,
      top: 0,
      left: 0,
      bottom: 70,
      right: 700,
      toJSON: () => ({}),
    });
    vi.spyOn(tab, 'getBoundingClientRect').mockReturnValue({
      x: 600,
      y: 0,
      width: 100,
      height: 70,
      top: 0,
      left: 600,
      bottom: 70,
      right: 700,
      toJSON: () => ({}),
    });

    renderHook(() => useStickyNavigation());
    fireEvent.click(tab);

    const slider = document.querySelector<HTMLElement>('.et-hero-tab-slider')!;
    expect(slider.style.left).toBe('600px');
    expect(slider.style.width).toBe('100px');
  });
});
