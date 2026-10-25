/** Certificates — credential images and tags. */
import { SECTION_IDS } from '../../constants/sectionIds';
import { asset } from '../../lib/asset';
import PageSection from './PageSection';
import './CertificateSection.css';

export default function CertificateSection() {
  return (
    <PageSection id={SECTION_IDS.certificate}>
{/* PORTFOLIO TOPIC */}
          <div className="portfolio">
            <div className="container">
              <div className="top--title">certificate</div>
              <h2 className="title">Featured <span>Project &amp; Certificate</span></h2>
              <div className="portfolio--cards">
                <div className="full--cover">
                  <a
                    href="https://drive.google.com/file/d/10-udsJxJ4Q141Kzu4hq9JP214Tyny5Dd/view?usp=drive_link"
                    className="social--icon certificate-card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={asset('images/certificate1.png')} alt="Web portfolio certificate" />
                  </a>
                  <div className="chips">
                    <div className="chip">Google Web Editor</div>
                    <div className="chip">Html</div>
                    <div className="chip">CSS</div>
                    <div className="chip">UI/UX</div>
                  </div>
                </div>
                <div className="full--cover">
                  <a
                    href="https://drive.google.com/file/d/1ThVWe3rHZDL9G5OmDaCdWSAXENjk4p9T/view?usp=drive_link"
                    className="social--icon certificate-card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={asset('images/certificate2.png')} alt="Network cabling certificate" />
                  </a>
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
