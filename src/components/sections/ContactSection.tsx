/** Contact — email, phone, and closing message. */
import { mailto, siteLinks } from '../../lib/siteLinks';
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';
import './ContactSection.css';

export default function ContactSection() {
  const { email, phone } = siteLinks.contact;

  return (
    <PageSection id={SECTION_IDS.contact}>
      <div className="contact">
        <div className="container">
          <div className="top--title">contact</div>
          <h2 className="title">Let&apos;s work <span>Together</span></h2>
          <div className="contact--cards">
            <div className="contact--card">
              <i className="ri-mail-fill" />
              <a href={mailto(email)} title="CONTACT ME">
                <p>{email}</p>
              </a>
            </div>
            <div className="contact--card">
              <i className="ri-phone-fill" />
              <p>{phone}</p>
            </div>
          </div>
          <div className="thanks">
            <h1><span style={{ color: '#27e187' }}>THANKS</span> YOU</h1>
            <h2>FOR <span> VISITING</span></h2>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
