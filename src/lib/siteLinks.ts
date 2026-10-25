import { load as loadYaml } from 'js-yaml';
import raw from '../config/site-links.yaml?raw';

export type SiteLinks = {
  contact: { email: string; phone: string };
  social: { github: string; linkedin: string };
  profile: { photo: string };
  pages: { cv: string; engLevel: string };
  certificates: { webPortfolio: string; network: string };
  projects: {
    peaInternship: { experiences: string; presentation: string; treatise: string };
    drowsiness: { presentation: string; sourceCode: string; treatise: string };
    movieReview: { preview: string; frontend: string; backend: string };
    webPortfolio: { sourceCode: string };
    deepLearning: { presentation: string; sourceCode: string };
    oracleGuide: { manual: string };
    hexagonalArchitecture: { sourceCode: string };
    goHttpRequest: { sourceCode: string };
  };
};

export const siteLinks = loadYaml(raw) as SiteLinks;

export function mailto(email: string): string {
  return `mailto:${email}`;
}
