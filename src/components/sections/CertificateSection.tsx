/** Certificates — credential images and tags. */
import ExternalLink from '../common/ExternalLink';
import { asset } from '../../lib/asset';
import { siteLinks } from '../../lib/siteLinks';
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';
import './CertificateSection.css';

export default function CertificateSection() {
  const { webPortfolio, network } = siteLinks.certificates;

  return (
    <PageSection id={SECTION_IDS.certificate}>
      <div className="portfolio">
        <div className="container">
          <div className="top--title">certificate</div>
          <h2 className="title">Featured <span>Project &amp; Certificate</span></h2>
          <div className="portfolio--cards">
            <div className="full--cover">
              <ExternalLink
                href={webPortfolio}
                className="social--icon certificate-card-link"
              >
                <img src={asset('images/certificate1.png')} alt="Web portfolio certificate" />
              </ExternalLink>
              <div className="chips">
                <div className="chip">Google Web Editor</div>
                <div className="chip">Html</div>
                <div className="chip">CSS</div>
                <div className="chip">UI/UX</div>
              </div>
            </div>
            <div className="full--cover">
              <ExternalLink
                href={network}
                className="social--icon certificate-card-link"
              >
                <img src={asset('images/certificate2.png')} alt="Network cabling certificate" />
              </ExternalLink>
              <div className="chips">
                <div className="chip">Network</div>
                <div className="chip">Cabling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
