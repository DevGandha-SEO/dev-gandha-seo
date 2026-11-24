/**
 * SEO defaults and helpers — the main surface for experimenting.
 *
 * Every page gets its metadata from here unless it overrides a field via the
 * `seo` prop on `<BaseLayout />`. Change a value, run `npm run build`, then
 * look at `dist/index.html` to see exactly what the crawler would see.
 *
 * Things worth trying:
 *   - Shorten/lengthen `defaultTitle` and watch how it renders in the SERP
 *     preview of your favourite checker (Google truncates around 580px wide,
 *     roughly 55-60 characters).
 *   - Rewrite `defaultDescription` to lead with the primary keyword.
 *   - Flip `noindex` to true and confirm the robots meta tag changes.
 *   - Swap `ogImage` and validate with the Facebook / LinkedIn post inspectors.
 */
import { SITE } from './site';

export const SEO_DEFAULTS = {
  /**
   * Used verbatim on the homepage. Other pages pass their own `title` and get
   * it run through `titleTemplate` below.
   */
  defaultTitle: 'SEO Studio for Brands That Want to Rank | Dev Gandha',

  /**
   * `%s` is replaced by the page title. Keeping the brand on the right is the
   * convention — the unique part of the title stays visible when truncated.
   */
  titleTemplate: '%s | Dev Gandha',

  /**
   * Aim for 150-160 characters. Longer gets truncated; shorter wastes the slot.
   * This should read as ad copy, not as a summary — it drives click-through.
   */
  defaultDescription:
    'Technical SEO, content strategy and digital PR that compound. We help brands win the searches that actually convert — and prove it with revenue, not vanity rankings.',

  /**
   * Open Graph image, resolved against SITE.url. Recommended 1200x630.
   * Must be an absolute URL when it reaches the crawler — `resolveUrl` handles that.
   */
  ogImage: '/og-image.svg',
  ogImageAlt: 'Dev Gandha — SEO Studio',

  /** `summary_large_image` renders the big card; `summary` renders a thumbnail. */
  twitterCard: 'summary_large_image' as const,
  twitterSite: '@devgandha',

  /** Set true to emit `noindex, nofollow`. Handy for staging deploys. */
  noindex: false,
} as const;

/** Per-page SEO overrides. Every field is optional — defaults fill the gaps. */
export interface SeoProps {
  title?: string;
  description?: string;
  /** Path or absolute URL. Defaults to the current page's URL. */
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  /** `website` for landing pages, `article` for blog posts. */
  ogType?: 'website' | 'article';
  noindex?: boolean;
  /**
   * When true, the page title is used exactly as given instead of being run
   * through `titleTemplate`. The homepage uses this.
   */
  rawTitle?: boolean;
}

/**
 * Turn a path into an absolute URL. Open Graph, canonical tags and JSON-LD all
 * require absolute URLs — relative ones are silently ignored by most crawlers.
 */
export function resolveUrl(path: string, base: string | URL = SITE.url): string {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, base).href;
}

/** Apply the title template unless the caller opted out. */
export function buildTitle(title?: string, rawTitle = false): string {
  if (!title) return SEO_DEFAULTS.defaultTitle;
  if (rawTitle) return title;
  return SEO_DEFAULTS.titleTemplate.replace('%s', title);
}

/**
 * JSON-LD for the organisation. Structured data is how you earn rich results;
 * validate any change at https://validator.schema.org/.
 */
export function buildOrganizationSchema(baseUrl: string | URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    description: SEO_DEFAULTS.defaultDescription,
    url: resolveUrl('/', baseUrl),
    image: resolveUrl(SEO_DEFAULTS.ogImage, baseUrl),
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: 'Worldwide',
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.location,
    },
    sameAs: ['https://linkedin.com', 'https://github.com/DevGandha-SEO'],
  };
}
