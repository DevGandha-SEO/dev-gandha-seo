import type { APIRoute } from 'astro';

/**
 * robots.txt, generated rather than hand-written so the sitemap URL is always
 * derived from the configured `site` and can never drift out of date.
 *
 * To practise: add `Disallow:` rules and re-run `npm run build`, then read
 * `dist/robots.txt`. Remember that Disallow blocks *crawling*, not indexing —
 * a blocked URL can still appear in results if other pages link to it. Use the
 * `noindex` flag in src/config/seo.ts to keep a page out of the index.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL('sitemap-index.xml', site).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
