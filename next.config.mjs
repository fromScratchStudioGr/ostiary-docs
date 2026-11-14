import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Build the whole site as static files in `out/`.
  output: 'export',
  // Write each page as `page/index.html`, so static hosts such as GitHub Pages
  // find it next to the folder that holds the page's preload data.
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default withMDX(config);
