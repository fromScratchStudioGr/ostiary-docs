import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Ostiary';

// Set when the site is built for GitHub Pages (see .github/workflows/deploy.yml).
// The base path is the subfolder the site is served from, such as `/ostiary-docs`,
// and is empty on a custom domain. Plain <img> tags, icons and fetches need it added by hand.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

// The docs repository, used for the "view on GitHub" link on each page.
export const gitConfig = {
  user: 'fromScratchStudioGr',
  repo: 'ostiary-docs',
  branch: 'main',
};

// The gateway repository, linked from the top bar and the landing page.
export const gatewayRepoUrl = 'https://github.com/fromScratchStudioGr/ostiary';

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
