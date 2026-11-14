import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// The site is static, so the search index is exported as a file at build time
// and searched in the browser.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
