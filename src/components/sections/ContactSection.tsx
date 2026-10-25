/** Contact — email, phone, and closing message. */
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <PageSection id={SECTION_IDS.contact}>
{/* CONTACT TOPIC */}
          <div className="contact">
            <div className="container">
              <div className="top--title">contact</div>
              <h2 className="title">Let's work <span>Together</span></h2>
              <div className="contact--cards">
                <div className="contact--card">
                  <i className="ri-mail-fill" />
                  <a href="mailto:nanthachai.safecs07@gmail.com" title="CONTACT ME"><p>nanthachai.safecs07@gmail.com</p></a>
                </div>
                <div className="contact--card">
                  <i className="ri-phone-fill" />
                  <p>+66 80-9407678</p> 
                </div>
              </div>
              <div className="thanks">
                <h1><span style={{color: '#27e187'}}>THANKS</span> YOU</h1>
                <h2>FOR <span> VISITING</span></h2>
              </div>
            </div>
          </div>
    </PageSection>
  );
}
