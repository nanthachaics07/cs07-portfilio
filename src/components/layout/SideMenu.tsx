import { asset } from '../../lib/asset';
import './SideMenu.css';

/** Left column: photo, social links, CV / Oxford test links. */
export default function SideMenu() {
  return (
    <aside className="sidemenu" aria-label="Profile and links">
      <div className="sidemenu__sticky">
      <div className="avatar--cover">
        <a
          href="https://drive.google.com/file/d/1p6W9BglAA-uzb9fRI6HgbJ5pjKdi8Ris/view?usp=drive_link"
          aria-label="Open profile photo on Google Drive"
        >
          <img
            src={asset('images/safe001.jpg')}
            alt="Portrait of Nanthachai Intarpradit"
            width={290}
            height={290}
            loading="eager"
            decoding="async"
          />
        </a>
      </div>
      <h3 className="name">Nanthachai Intarpradit</h3>
      <p className="position">
        &quot; The bast way to predict the future is to create it &quot;
      </p>
      <div className="social--icons">
        <a
          href="https://github.com/nanthachaics07"
          className="social--icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <i className="ri-github-fill" aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/nanthachai-intarpradit-129799314/"
          className="social--icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <i className="ri-linkedin-fill" aria-hidden="true" />
        </a>
      </div>
      <div className="btn">
        <a href="mailto:nanthachai.safecs07@gmail.com" title="CONTACT ME">
          MAIL ME
        </a>
      </div>
      <div className="btn--line">
        <a
          href={asset('pages/cv.html')}
          target="_blank"
          rel="noreferrer"
          title="LOOK AT MY CV"
        >
          Curriculum Vitae (CV)
        </a>
      </div>
      <div className="btn--line">
        <a
          href={asset('pages/eng-lv.html')}
          target="_blank"
          rel="noreferrer"
          title="ENG Lv"
        >
          Oxford Placement Test
        </a>
      </div>
      </div>
    </aside>
  );
}
