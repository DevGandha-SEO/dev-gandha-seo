/**
 * Shared domain types.
 *
 * Keep every cross-component contract here so a change to a shape surfaces as a
 * type error at each usage site rather than silently drifting.
 */

/** A single navigation entry, used by both the header and the footer. */
export interface NavLink {
  label: string;
  href: string;
  /** External links get `rel="noopener noreferrer"` and open in a new tab. */
  external?: boolean;
}

/** A named group of links, used to build footer columns. */
export interface NavGroup {
  title: string;
  links: NavLink[];
}

/** Social profile. `icon` must match a key in `src/components/ui/Icon.astro`. */
export interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

/** Icon keys available to `<Icon />`. Adding an icon means adding it here too. */
export type IconName =
  | 'search'
  | 'chart'
  | 'link'
  | 'code'
  | 'pen'
  | 'map'
  | 'arrow-right'
  | 'check'
  | 'menu'
  | 'close'
  | 'linkedin'
  | 'github'
  | 'x';

/** One service card in the main section. */
export interface Service {
  /** Stable key — used as the React-style list key and as an anchor id. */
  id: string;
  title: string;
  description: string;
  icon: IconName;
  /** Short proof points rendered as a checklist inside the card. */
  highlights: string[];
}

/** A headline statistic rendered in the hero. */
export interface Stat {
  value: string;
  label: string;
}

/** Surface context. Components read this to pick the right token set. */
export type Surface = 'light' | 'subtle' | 'accent' | 'dark';

/** Shared visual sizing scale. */
export type Size = 'sm' | 'md' | 'lg';
