import { PORTFOLIO_TABS } from '../../constants/sectionIds';
import './TabNav.css';

/** Sticky top navigation; links scroll to `PageSection` anchors. */
export default function TabNav() {
  return (
    <nav className="et-hero-tabs" aria-label="Portfolio sections">
      <div className="et-hero-tabs-container">
        {PORTFOLIO_TABS.map((tab) => (
          <a key={tab.href} className="et-hero-tab" href={tab.href}>
            <span className="et-hero-tab__label et-hero-tab__label--long">{tab.label}</span>
            <span className="et-hero-tab__label et-hero-tab__label--short">{tab.shortLabel}</span>
          </a>
        ))}
        <span className="et-hero-tab-slider" />
      </div>
    </nav>
  );
}
