import ExternalLink from '../common/ExternalLink';
import { asset } from '../../lib/asset';
import { mailto, siteLinks } from '../../lib/siteLinks';
import './SideMenu.css';

/** Left column: photo, social links, CV / Oxford test links. */
export default function SideMenu() {
  const { contact, social, profile, pages } = siteLinks;

  return (
    <aside className="sidemenu" aria-label="Profile and links">
      <div className="sidemenu__sticky">
        <div className="avatar--cover">
          <ExternalLink
            href={profile.photo}
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
          </ExternalLink>
        </div>
        <h3 className="name">Nanthachai Intarpradit</h3>
        <p className="position">
          &quot; The bast way to predict the future is to create it &quot;
        </p>
        <div className="social--icons">
          <ExternalLink
            href={social.github}
            className="social--icon"
            aria-label="GitHub profile"
          >
            <i className="ri-github-fill" aria-hidden="true" />
          </ExternalLink>
          <ExternalLink
            href={social.linkedin}
            className="social--icon"
            aria-label="LinkedIn profile"
          >
            <i className="ri-linkedin-fill" aria-hidden="true" />
          </ExternalLink>
        </div>
        <div className="btn">
          <a href={mailto(contact.email)} title="CONTACT ME">
            MAIL ME
          </a>
        </div>
        <div className="btn--line">
          <ExternalLink href={asset(pages.cv)} newTab title="LOOK AT MY CV">
            Curriculum Vitae (CV)
          </ExternalLink>
        </div>
        <div className="btn--line">
          <ExternalLink href={asset(pages.engLevel)} newTab title="ENG Lv">
            Oxford Placement Test
          </ExternalLink>
        </div>
      </div>
    </aside>
  );
}
