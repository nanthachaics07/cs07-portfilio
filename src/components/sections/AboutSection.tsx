/** About — short professional summary. */
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <PageSection id={SECTION_IDS.about}>
{/* ABOUT TOPIC */}
          <div className="about">
            <div className="container">
              <div className="top--title">about</div>
              <h2 className="title">
                <span>Hello, </span>Let me give you a brief summary of my history as follows. Just a simple like that!
              </h2>
              <p style={{textIndent: '2.0em'}}>
                Dear Interviewer,
                Software developer specialized in microservice architecture and back-end development. 
                Experienced in Domain-Driven Design implementation, API development, and database optimization. 
                Skilled in creating scalable and maintainable systems with focus on performance and code quality.
              </p>
            </div>
          </div>
    </PageSection>
  );
}
