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
        <div className="sidemenu__identity">
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
          <blockquote className="profile-tagline" cite="https://en.wikiquote.org/wiki/Peter_Drucker">
            The best way to predict the future is to create it.
          </blockquote>
        </div>

        <div className="social--icons" aria-label="Social profiles">
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

        <div className="sidemenu__actions">
          <div className="btn">
            <a href={mailto(contact.email)} title="Contact by email">
              Email me
            </a>
          </div>
          <div className="btn--line">
            <ExternalLink href={asset(pages.cv)} newTab title="Open curriculum vitae">
              Curriculum vitae
            </ExternalLink>
          </div>
          <div className="btn--line">
            <ExternalLink href={asset(pages.engLevel)} newTab title="Open Oxford placement test">
              Oxford placement test
            </ExternalLink>
          </div>
        </div>
      </div>
    </aside>
  );
}
