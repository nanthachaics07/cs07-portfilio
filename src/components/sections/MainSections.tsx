/**
 * Main column: ordered page sections (right side beside `SideMenu`).
 * Each block maps to one tab in `TabNav` via matching `SECTION_IDS`.
 */
import '../../styles/section-shared.css';
import AboutSection from './AboutSection';
import CertificateSection from './CertificateSection';
import ContactSection from './ContactSection';
import EducationSection from './EducationSection';
import IntroductionSection from './IntroductionSection';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';

export default function MainSections() {
  return (
    <div className="main--content">
      <main className="et-main" id="main-content">
        <IntroductionSection />
        <AboutSection />
        <EducationSection />
        <ProjectSection />
        <SkillSection />
        <CertificateSection />
        <ContactSection />
      </main>
    </div>
  );
}
