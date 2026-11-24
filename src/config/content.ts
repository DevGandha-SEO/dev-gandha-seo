/**
 * Page copy, kept out of the components.
 *
 * Components render whatever this file provides, so changing wording never
 * means touching markup — and when this later moves to a CMS or to Astro
 * content collections, only this file gets replaced.
 */
import type { Service, Stat } from '../types';

export const HERO = {
  eyebrow: 'SEO studio for brands that refuse to stay invisible',

  /** Oversized display headline, split so the second line can take the accent
   * colour. Rendered uppercase by the component. */
  title: 'Rank where',
  titleAccent: 'it pays',

  /**
   * Keyword rail under the headline. Parenthesised entries read as asides —
   * a typographic trick borrowed from editorial layouts to break the rhythm.
   */
  keywords: ['TECHNICAL', 'CONTENT', 'AUTHORITY', '(ANALYTICS)', '(LOCAL)'],

  /** Full-bleed wordmark the hero card sits on top of. */
  wordmark: 'DEV GANDHA',

  /** The card that overlaps the wordmark. */
  card: {
    badge: '2 slots open · Q1',
    name: 'Dev Gandha',
    role: 'SEO Studio · Ahmedabad, India',
    cta: { label: 'Book a teardown', href: '#contact' },
  },
} as const;

export const HERO_STATS: Stat[] = [
  { value: '3.4x', label: 'Median organic lift' },
  { value: '180+', label: 'Technical audits' },
  { value: '92%', label: 'Retention past year two' },
];

export const SERVICES_SECTION = {
  eyebrow: 'What we do',
  title: 'Services',
  description:
    'Most SEO fails because the work happens out of order. We fix what Google can crawl before we chase what it ranks.',
} as const;

export const SERVICES: Service[] = [
  {
    id: 'technical-seo',
    title: 'Technical SEO',
    description:
      'Crawl budget, Core Web Vitals, indexation and render-path problems — found, ranked by revenue impact, and shipped alongside your engineers.',
    icon: 'code',
    highlights: ['Log-file analysis', 'Core Web Vitals', 'Schema & indexation'],
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    description:
      'Topic clusters mapped to real search intent and real buying stages, so every page has a job and nothing cannibalises anything else.',
    icon: 'pen',
    highlights: ['Intent mapping', 'Cluster architecture', 'Editorial calendar'],
  },
  {
    id: 'digital-pr',
    title: 'Digital PR & Links',
    description:
      'Authority earned through stories journalists actually want, not placements bought from a spreadsheet of expiring domains.',
    icon: 'link',
    highlights: ['Data-led campaigns', 'Journalist outreach', 'Toxic link cleanup'],
  },
  {
    id: 'local-analytics',
    title: 'Local & Analytics',
    description:
      'Multi-location visibility plus the measurement layer that ties organic sessions to pipeline, so the programme defends its own budget.',
    icon: 'map',
    highlights: ['GBP optimisation', 'GA4 & Looker', 'Attribution modelling'],
  },
];

export const FOOTER = {
  /** Keyword rail across the top of the footer. */
  keywords: ['CRAWL', 'CONTENT', 'AUTHORITY', 'REVENUE'],
  blurb:
    'We build search programmes that compound — technical foundations, content that answers real intent, and authority that holds its value.',
  /** Ghosted wordmark behind the bottom bar. */
  wordmark: 'DEV GANDHA',
  note: 'Search that earns its keep.',
} as const;
