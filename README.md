# Ostiary docs

The documentation site for [Ostiary](https://github.com/fromScratchStudioGr/ostiary), the open source LLM gateway, and its [admin panel](https://github.com/fromScratchStudioGr/ostiary-panel).

The site is built with [Fumadocs](https://fumadocs.dev) on Next.js.

## Running it locally

You need Node.js 20 or later.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build the site:

```bash
npm run build
```

The site is fully static. The build writes every page, the search index and the images to `out/`, which any static host can serve.

## Publishing

The site is published to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which you run by hand: in the **Actions** tab, choose **Deploy to GitHub Pages**, then **Run workflow**. In the repository settings, under **Pages**, set the source to **GitHub Actions**.

The workflow reads the site's address from the Pages settings, so the site works both at `https://<owner>.github.io/ostiary-docs/` and on a custom domain. To build for a subfolder yourself, set `NEXT_PUBLIC_BASE_PATH` (for example `/ostiary-docs`) and `NEXT_PUBLIC_SITE_URL` (the full address) before `npm run build`.

## Where things are

| Path | What it holds |
|---|---|
| `content/docs` | The pages, written in MDX. Each folder's `meta.json` sets the order in the sidebar. |
| `app/(home)/page.tsx` | The landing page. |
| `components` | Components used inside pages, and the search box. |
| `lib/shared.ts` | The site name, the GitHub links and the base path. |
| `public` | Logos and icons. |

## Writing pages

- Read the code before writing about it. Settings, defaults, ports and endpoints come from the [Ostiary repository](https://github.com/fromScratchStudioGr/ostiary), not from memory.
- Write plain English for people who are not experts, and explain a term the first time it appears.
- Keep pages short, one topic each.
- Give commands for bash, and add cmd and PowerShell tabs where they differ.

## Contributing

Found a mistake or something unclear? Open an issue or a pull request.

## License

MIT. See [LICENSE](LICENSE).
