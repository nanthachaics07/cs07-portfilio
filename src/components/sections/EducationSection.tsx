/** Education — timeline of work and school. */
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';

export default function EducationSection() {
  return (
    <PageSection id={SECTION_IDS.education}>
{/* RESUME TOPIC */}
          <div className="resume">
            <div className="container">
              <div className="top--title">education</div>
              <h2 className="title">Education &amp; <span>Experience</span></h2>
              <div>
                <div className="experience">
                  <p className="date">June 2025 - Present</p>
                  <h3>Software Developer</h3>
                  <p className="school">Super Coconut Co. Ltd</p>
                  <div className="circle" />
                </div>
                <div className="experience">
                  <p className="date">July 2024 - May 2025</p>
                  <h3>Junior : Back-End Developer</h3>
                  <p className="school">GridWhiz Co. Ltd</p>
                  <div className="circle" />
                </div>
                <div>
                  <div className="experience">
                    <p className="date">November 2023 - March 2024</p>
                    <h3>Internship : Web Developer</h3>
                    <p className="school">The Provincial Electricity Authority (PEA headquarters)</p>
                    <div className="circle" />
                  </div>
                  <div className="experience">
                    <p className="date">August 2020 - March 2024 <span>(Graduated)</span></p>
                    <h3>University</h3>
                    <p className="school">RMUTSB University</p>
                    <div className="circle" />
                  </div>
                  <div className="experience">
                    <p className="date">July 2017 - March 2020</p>
                    <h3>High school</h3>
                    <p className="school">Anurajprasit School</p>
                    <div className="circle" />
                  </div>
                  <div className="experience">
                    <p className="date">July 2015 - March 2017</p>
                    <h3>Middle school</h3>
                    <p className="school">Anurajprasit School</p>
                    <div className="circle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </PageSection>
  );
}
