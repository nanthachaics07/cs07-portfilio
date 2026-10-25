/** Introduction — welcome headline and stats. */
import { SECTION_IDS } from '../../constants/sectionIds';
import PageSection from './PageSection';
import './IntroductionSection.css';

export default function IntroductionSection() {
  return (
    <PageSection id={SECTION_IDS.introduction}>
<div className="intro">
            <div className="container">
              <div className="top--title">introduce</div>
              <h2 className="intro__title">
                Say Hi from <span>Nanthachai</span>, Computer Science
              </h2>
              <p>
                Hello, Welcome to my web portfolio. I hope you enjoy to my introduction like that!
              </p>
              <div className="intro--flex--container">
                <div className="intro--flex">
                  <p className="intro-stat__number" aria-label="5 plus years of coding">
                    5+
                  </p>
                  <p>YEAR OF CODING</p>
                </div>
                <div className="intro--flex">
                  <p className="intro-stat__number" aria-label="8 plus final lab projects completed">
                    8+
                  </p>
                  <p>FINAL LAB PROJECT COMPLETED</p>
                </div>
              </div>
            </div>
          </div>
    </PageSection>
  );
}
