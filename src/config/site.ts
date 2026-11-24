/**
 * Site-wide constants.
 *
 * This is the single source of truth for brand, URLs and navigation. Nothing
 * here is secret — it all ships to the browser, so never put API keys, tokens
 * or private endpoints in this file. Use environment variables for those.
 * See: https://docs.astro.build/en/guides/environment-variables/
 */
import type { NavGroup, NavLink, SocialLink } from '../types';

export const SITE = {
  /** Brand name, used in the logo, <title> template and structured data. */
  name: 'Dev Gandha',
  /** Short descriptor shown next to the logo and in the footer. */
  tagline: 'SEO Studio',
  /**
   * Canonical production origin. No trailing slash.
   * Must match `site` in astro.config.mjs — the sitemap and canonical URLs
   * are both derived from it.
   */
  url: 'https://devgandha.example.com',
  /** Default language, emitted as <html lang> and in structured data. */
  locale: 'en',
  /** Contact details surfaced in the footer and structured data. */
  email: 'hello@devgandha.example.com',
  phone: '+91 00000 00000',
  location: 'Ahmedabad, India',
} as const;

/** Primary navigation. Shared by the header and the footer's first column. */
export const PRIMARY_NAV: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

/** Footer link columns. Add a group here and the footer grid grows with it. */
export const FOOTER_NAV: NavGroup[] = [
  {
    title: 'Services',
    links: [
      { label: 'Technical SEO', href: '#services' },
      { label: 'Content Strategy', href: '#services' },
      { label: 'Link Building', href: '#services' },
      { label: 'Local SEO', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#approach' },
      { label: 'Case Studies', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Sitemap', href: '/sitemap-index.xml' },
      { label: 'Robots.txt', href: '/robots.txt' },
      {
        label: 'Astro Docs',
        href: 'https://docs.astro.build',
        external: true,
      },
    ],
  },
];

/** Social profiles. `icon` must be a key handled by `<Icon />`. */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/DevGandha-SEO', icon: 'github' },
  { label: 'X', href: 'https://x.com', icon: 'x' },
];
