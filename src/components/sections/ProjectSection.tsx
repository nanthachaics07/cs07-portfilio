/** Projects — featured work and self-study items. */
import ExternalLink from '../common/ExternalLink';
import { siteLinks } from '../../lib/siteLinks';
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';
import './ProjectSection.css';

const { projects: p } = siteLinks;

export default function ProjectSection() {
  return (
    <PageSection id={SECTION_IDS.project}>
      <div className="services--section">
        <div className="container">
          <div className="top--title">project</div>
          <h2 className="title">My <span>Specializations</span> in project</h2>
          <div className="services">
            <div className="service">
              <h3>E-commerce Project</h3>
              <p className="list-project-top">
                Used Clean Architecture, DDD, Event sourcing with Golang Backend gRPC, with data supplied by a PostgreSQL, Mongo database.
              </p>
              <p className="list-project-item">• Golang</p>
              <p className="list-project-item">• gRPC</p>
              <p className="list-project-item">• Kafka</p>
              <p className="list-project-item">• Redis</p>
              <p className="list-project-item">• Elasticsearch</p>
              <p className="list-project-item">• MongoDB</p>
              <p className="list-project-item">• PostgreSQL</p>
              <p className="list-project-item list-project-item--highlight"> In Development (coming soon)</p>
              <p />
            </div>
            <div className="service">
              <h3>PEA Internship Project &amp; Experience</h3>
              <p className="list-project-top">Activities during internship (4 Position)</p>
              <p className="list-project-item">• Developer</p>
              <p className="list-project-item">• Tester</p>
              <p />
              <ExternalLink
                href={p.peaInternship.experiences}
                className="project chageColor"
                title="INTERNSHIP EXPERIENCES"
              >
                INTERNSHIP EXPERIENCES
              </ExternalLink>
              <ExternalLink
                href={p.peaInternship.presentation}
                className="project"
                title="PROJECT SLIDERS"
              >
                PRESENTATION
              </ExternalLink>
              <ExternalLink href={p.peaInternship.treatise} className="project" title="TREATISE">
                TREATISE
              </ExternalLink>
            </div>
            <div className="service">
              <h3>Drowsiness detector program for Drivers</h3>
              <p className="list-project-top">
                Image Processing with AI Using Python, Final Project (2 Developer)
              </p>
              <ExternalLink
                href={p.drowsiness.presentation}
                className="project chageColor"
                title="CODE & PROGRAM"
              >
                PROJECT PRESENTATION
              </ExternalLink>
              <ExternalLink href={p.drowsiness.sourceCode} className="project" title="TREATISE">
                SOURCE CODE
              </ExternalLink>
              <ExternalLink href={p.drowsiness.treatise} className="project" title="TREATISE">
                TREATISE
              </ExternalLink>
            </div>
            <div className="service">
              <h3>Movie Review Web application</h3>
              <p className="list-project-top">
                Used React, with data supplied by a Golang back end REST API and PostgreSQL database.
              </p>
              <p className="list-project-item list-project-item--highlight">[FRONT-END] During Maintenance (coming soon)</p>
              <p />
              <ExternalLink
                href={p.movieReview.preview}
                className="project chageColor"
                title="CODE & PROGRAM"
              >
                PREVIEW PROJECT
              </ExternalLink>
              <ExternalLink href={p.movieReview.frontend} className="project" title="TREATISE">
                FRONTEND CODE
              </ExternalLink>
              <ExternalLink href={p.movieReview.backend} className="project" title="TREATISE">
                BACKEND CODE
              </ExternalLink>
            </div>
            <div className="service">
              <h3>Web portfolio</h3>
              <p>Use HTML, CSS, Javascript, Bootstrap, UI/UX to create my own web portfolio.</p>
              <ExternalLink href={p.webPortfolio.sourceCode} className="project" title="TREATISE">
                SOURCE CODE
              </ExternalLink>
            </div>
            <div className="service">
              <h3>Deep Learning Project</h3>
              <p>Image classification with Tensorflow (Final Lab)</p>
              <ExternalLink href={p.deepLearning.presentation} className="project" title="Video">
                PRESENTATION
              </ExternalLink>
              <ExternalLink href={p.deepLearning.sourceCode} className="project" title="TREATISE">
                SOURCE CODE
              </ExternalLink>
            </div>
            <div className="service">
              <h3>OracleDB DATAInstallation Guide</h3>
              <p>
                LAB “simulate convenience-store and print receipt” ( For Oracle APEX ONLY ) (CO-OP Lab)
              </p>
              <ExternalLink href={p.oracleGuide.manual} className="project" title="TREATISE">
                MANUAL
              </ExternalLink>
            </div>
            <div className="service-group">
              <h3>Learn <span className="service-group__accent">By Myself</span></h3>
            </div>
            <div className="service">
              <h3>Hexagonal Architecture</h3>
              <p>GoAPI Running DB on Docker (Learning Course)</p>
              <ExternalLink
                href={p.hexagonalArchitecture.sourceCode}
                className="project"
                title="CODE"
              >
                SOURCE CODE
              </ExternalLink>
            </div>
            <div className="service">
              <h3>GoAPI HTTPRequest</h3>
              <p>HTTPRequest (Learning Basic Project)</p>
              <ExternalLink href={p.goHttpRequest.sourceCode} className="project" title="CODE">
                SOURCE CODE
              </ExternalLink>
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
