import { useCallback, useEffect, useRef } from 'react';

const TAB_CONTAINER_HEIGHT = 70;

function animateScrollTo(targetTop: number, duration = 600): void {
  const start = window.scrollY;
  const change = targetTop - start;
  const startTime = performance.now();

  const step = (now: number): void => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - (1 - progress) ** 3;
    window.scrollTo(0, start + change * eased);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

export function useStickyNavigation(): void {
  const currentIdRef = useRef<string | null>(null);
  const currentTabRef = useRef<HTMLElement | null>(null);

  const setSliderCss = useCallback(() => {
    const slider = document.querySelector<HTMLElement>('.et-hero-tab-slider');
    const tab = currentTabRef.current;
    if (!slider) return;

    if (tab) {
      const parent = slider.parentElement;
      const tabRect = tab.getBoundingClientRect();
      const parentRect = parent?.getBoundingClientRect();
      const left = parentRect
        ? tabRect.left - parentRect.left + (parent?.scrollLeft ?? 0)
        : tab.offsetLeft;
      slider.style.width = `${tabRect.width}px`;
      slider.style.left = `${left}px`;
    } else {
      slider.style.width = '0px';
      slider.style.left = '0px';
    }
  }, []);

  const checkTabContainerPosition = useCallback(() => {
    const tabs = document.querySelector<HTMLElement>('.et-hero-tabs');
    const container = document.querySelector<HTMLElement>('.et-hero-tabs-container');
    if (!tabs || !container) return;

    const tabsTop = tabs.getBoundingClientRect().top;
    if (tabsTop <= 0) {
      container.classList.add('et-hero-tabs-container--top');
    } else {
      container.classList.remove('et-hero-tabs-container--top');
    }
  }, []);

  const findCurrentTabSelector = useCallback(() => {
    const tabs = document.querySelectorAll<HTMLAnchorElement>('.et-hero-tab');
    let newCurrentId: string | null = null;
    let newCurrentTab: HTMLElement | null = null;

    const maxScroll = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight,
    );
    const atPageEnd = window.scrollY >= maxScroll - 8;

    if (atPageEnd && tabs.length > 0) {
      const last = tabs[tabs.length - 1];
      newCurrentId = last.getAttribute('href');
      newCurrentTab = last;
    } else {
      tabs.forEach((tab) => {
        const id = tab.getAttribute('href');
        if (!id || !id.startsWith('#')) return;
        const section = document.querySelector<HTMLElement>(id);
        if (!section) return;

        const offsetTop =
          section.getBoundingClientRect().top + window.scrollY - TAB_CONTAINER_HEIGHT;

        if (window.scrollY + 1 >= offsetTop) {
          newCurrentId = id;
          newCurrentTab = tab;
        }
      });
    }

    if (currentIdRef.current !== newCurrentId) {
      currentIdRef.current = newCurrentId;
      currentTabRef.current = newCurrentTab;
      setSliderCss();
    }
  }, [setSliderCss]);

  const onTabClick = useCallback(
    (event: MouseEvent, tab: HTMLAnchorElement) => {
      event.preventDefault();
      const href = tab.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;

      currentIdRef.current = href;
      currentTabRef.current = tab;
      setSliderCss();
      tab.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const scrollTop = Math.min(
        maxScroll,
        section.getBoundingClientRect().top +
          window.scrollY -
          TAB_CONTAINER_HEIGHT +
          1,
      );

      animateScrollTo(scrollTop, 600);
      window.setTimeout(() => {
        checkTabContainerPosition();
        findCurrentTabSelector();
      }, 650);
    },
    [checkTabContainerPosition, findCurrentTabSelector, setSliderCss],
  );

  useEffect(() => {
    const tabs = document.querySelectorAll<HTMLAnchorElement>('.et-hero-tab');
    const clickHandlers = new Map<HTMLAnchorElement, (event: MouseEvent) => void>();

    tabs.forEach((tab) => {
      const handler = (event: MouseEvent) => onTabClick(event, tab);
      clickHandlers.set(tab, handler);
      tab.addEventListener('click', handler);
    });

    const onScroll = () => {
      checkTabContainerPosition();
      findCurrentTabSelector();
    };

    const onResize = () => {
      if (currentIdRef.current) {
        setSliderCss();
      }
    };

    const tabContainer = document.querySelector<HTMLElement>('.et-hero-tabs-container');
    const onTabStripScroll = () => {
      if (currentIdRef.current) {
        setSliderCss();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    tabContainer?.addEventListener('scroll', onTabStripScroll, { passive: true });
    onScroll();

    return () => {
      clickHandlers.forEach((handler, tab) => {
        tab.removeEventListener('click', handler);
      });
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      tabContainer?.removeEventListener('scroll', onTabStripScroll);
    };
  }, [checkTabContainerPosition, findCurrentTabSelector, onTabClick, setSliderCss]);
}
