import type { ReactNode } from 'react';
import type { SectionId } from '../../constants/sectionIds';

type PageSectionProps = {
  /** Must match an entry in `SECTION_IDS` (used by tab scroll spy). */
  id: SectionId;
  children: ReactNode;
};

/** One full-page block in the main column; pairs with a `TabNav` link. */
export default function PageSection({ id, children }: PageSectionProps) {
  return (
    <section className="et-slide" id={id}>
      {children}
    </section>
  );
}
