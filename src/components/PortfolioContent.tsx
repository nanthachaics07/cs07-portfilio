/**
 * Full portfolio page layout (single route, no client router).
 *
 * Structure:
 * - `Hero` — top banner
 * - `TabNav` — section jump links
 * - `main` — `SideMenu` (left) + `MainSections` (right)
 * - `Footer`
 */
import { SECTION_IDS } from '../constants/sectionIds';
import './PortfolioContent.css';
import Footer from './layout/Footer';
import Hero from './layout/Hero';
import SideMenu from './layout/SideMenu';
import TabNav from './layout/TabNav';
import MainSections from './sections/MainSections';

export default function PortfolioContent() {
  return (
    <div className="portfolio-page">
      <a className="skip-link" href={`#${SECTION_IDS.introduction}`}>
        Skip to main content
      </a>
      <header className="site-header">
        <Hero />
        <TabNav />
      </header>
      <div className="main">
        <SideMenu />
        <div className="main-column">
          <MainSections />
        </div>
      </div>
      <Footer />
    </div>
  );
}
