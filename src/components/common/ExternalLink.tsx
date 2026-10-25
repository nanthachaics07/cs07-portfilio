import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  children: ReactNode;
  newTab?: boolean;
};

/** Opens external URLs in a new tab; mailto and placeholder `#` stay in-page. */
export default function ExternalLink({
  href,
  className,
  title,
  children,
  newTab,
  ...rest
}: ExternalLinkProps) {
  const isHttp = /^https?:\/\//i.test(href);
  const openNewTab = newTab ?? isHttp;

  return (
    <a
      href={href}
      className={className}
      title={title}
      {...rest}
      {...(openNewTab
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : href === '#'
          ? { 'aria-disabled': true }
          : {})}
    >
      {children}
    </a>
  );
}
