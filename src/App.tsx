import PortfolioContent from './components/PortfolioContent';
import { useAntiCopy } from './hooks/useAntiCopy';
import { useStickyNavigation } from './hooks/useStickyNavigation';

/** Root view: portfolio page plus global interaction hooks. */
export default function App() {
  useStickyNavigation();
  useAntiCopy();

  return <PortfolioContent />;
}
