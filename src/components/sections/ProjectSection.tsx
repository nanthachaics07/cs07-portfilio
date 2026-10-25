/** Projects — featured work and self-study items. */
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';
import './ProjectSection.css';

export default function ProjectSection() {
  return (
    <PageSection id={SECTION_IDS.project}>
{/* SERVICE TOPIC */}
          <div className="services--section">
            <div className="container">
              <div className="top--title">project</div>
              <h2 className="title">My <span>Specializations</span> in project</h2>
              <div className="services">
                <div className="service">
                  <h3>E-commerce Project</h3>
                  <p className="list-project-top">
                    Used Clean Architecture, DDD, Event sourcing with Golang Backend gRPC, with data supplied by a PostgreSQL, Mongo database.
                  </p><p id="listProject">• Golang</p>
                  <p id="listProject">• gRPC</p>
                  <p id="listProject">• Kafka</p>
                  <p id="listProject">• Redis</p>
                  <p id="listProject">• Elasticsearch</p>
                  <p id="listProject">• MongoDB</p>
                  <p id="listProject">• PostgreSQL</p>
                  <p id="listProject" style={{color: '#ECDE35', fontWeight: 'bolder'}}> In Development (coming soon)</p>
                  <p />
                </div>
                <div className="service">
                  <h3>PEA Internship Project &amp; Experience</h3>
                  <p className="list-project-top">
                    Activities during internship (4 Position)
                  </p><p id="listProject">• Developer</p>
                  <p id="listProject">• Tester</p>
                  <p />
                  <a href="https://PEAinturnship.softr.app" className="project chageColor" target="_blank" title="INTERNSHIP EXPERIENCES">
                    INTERNSHIP EXPERIENCES
                  </a>
                  <a href="https://www.canva.com/design/DAF39EOHueU/EPuYdBvsEK-Pzv-90rWEAA/edit?utm_content=DAF39EOHueU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="project" target="_blank" title="PROJECT SLIDERS">
                    PRESENTATION
                  </a>
                  <a href="https://drive.google.com/file/d/1f9cWA53N8jHZaweL3MrGH4yuA91G1HWC/view?usp=sharing" className="project" target="_blank" title="TREATISE">
                    TREATISE
                  </a>
                </div>
                <div className="service">
                  <h3>Drowsiness detector program for Drivers</h3>
                  <p className="list-project-top">
                    Image Processing with AI Using Python, Final Project (2 Developer)
                    {/* <p id="listProject">• Final Project</p> */}
                  </p>
                  {/* onclick="external_link(this);return false;" */}
                  <a href="https://drive.google.com/file/d/1nUD_1ejJYtZn9b_mQUJI4pZmHUXgvHSn/view?usp=sharing" className="project chageColor" target="_blank" title="CODE & PROGRAM">
                    PROJECT PRESENTATION
                  </a>
                  <a href="https://github.com/nanthachaics07/face-detection" className="project" target="_blank" title="TREATISE">
                    SOURCE CODE
                  </a>                    
                  <a href="https://drive.google.com/file/d/109h5SaLrxo6FXZamWCCZ815sldjAJ3sM/view?usp=sharing" className="project" target="_blank" title="TREATISE">
                    TREATISE
                  </a>
                </div>
                <div className="service">
                  <h3>Movie Review Web application</h3>
                  <p className="list-project-top">
                    Used React, with data supplied by a Golang back end REST API and PostgreSQL database.
                  </p><p id="listProject" style={{color: '#ECDE35', fontWeight: 'bolder'}}>[FRONT-END] During Maintenance (coming soon)</p>
                  <p />
                  {/* TODO: Add link */}
                  <a href="#" className="project chageColor" target="_blank" title="CODE & PROGRAM">
                    PREVIEW PROJECT
                  </a>
                  <a href="https://github.com/nanthachaics07/MovieReview-FontEnd" className="project" target="_blank" title="TREATISE">
                    FRONTEND CODE
                  </a>                    
                  <a href="https://github.com/nanthachaics07/MovieReview-BackEnd" className="project" target="_blank" title="TREATISE">
                    BACKEND CODE
                  </a>                    
                </div>
                <div className="service">
                  <h3>Web portfolio</h3>
                  <p>
                    Use HTML, CSS, Javascript, Bootstrap, UI/UX to create my own web portfolio.
                  </p>
                  <a href="https://github.com/nanthachaics07/html-portfilio" className="project" target="_blank" title="TREATISE">
                    SOURCE CODE
                  </a>
                </div>
                <div className="service">
                  <h3>Deep Learning Project</h3>
                  <p>
                    Image classification with Tensorflow (Final Lab)
                  </p>
                  <a href="https://youtu.be/7Pri1pDFEQU?si=s9t-MmteGniobNTT" className="project" target="_blank" title="Video">
                    PRESENTATION
                  </a>
                  <a href="https://drive.google.com/file/d/1sJ-ptXPevNHQk5lJQA6X7oKtTsk9kcnm/view?usp=sharing" className="project" target="_blank" title="TREATISE">
                    SOURCE CODE
                  </a>
                </div>
                <div className="service">
                  <h3>OracleDB DATAInstallation Guide</h3>
                  <p>
                    LAB “simulate convenience-store and print receipt” ( For Oracle APEX ONLY ) (CO-OP Lab)
                  </p>
                  <a href="https://drive.google.com/file/d/1-O7XQCiXlAP6nqKNc0EKAUBAUo-bJKXB/view?usp=sharing" className="project" target="_blank" title="TREATISE">
                    MANUAL
                  </a>
                </div>
                <div className="service-group"><h3>Learn <span style={{color: '#27e187'}}>By Myself</span></h3></div>
                <div className="service">
                  <h3>Hexagonal Architecture</h3>
                  <p>
                    GoAPI Running DB on Docker (Learning Course)
                  </p>
                  <a href="https://github.com/nanthachaics07/Banking_Golang" className="project" target="_blank" title="CODE">
                    SOURCE CODE
                  </a>
                </div>
                <div className="service">
                  <h3>GoAPI HTTPRequest</h3>
                  <p>
                    HTTPRequest (Learning Basic Project)
                  </p>
                  <a href="https://github.com/nanthachaics07/Go_httpRequest.git" className="project" target="_blank" title="CODE">
                    SOURCE CODE
                  </a>
                </div>
                <div className="service">
                  <h3>Web Development Bootcamp</h3>
                  <p>
                    Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps (Learning Course)
                  </p>
                </div>
              </div>
            </div>
          </div>
    </PageSection>
  );
}
