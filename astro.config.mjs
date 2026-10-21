// @ts-check
import { defineConfig } from 'astro/config';

// The site's full web address. Link previews and canonical links are built from it.
// On Vercel it comes from the project's production domain (the custom domain once
// one is added, otherwise the .vercel.app address). Elsewhere, set SITE_URL, e.g.
//   SITE_URL=https://portfolio.nrold.com npm run build
// Without either, the production build fails so previews can't go live broken.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelDomain ? `https://${vercelDomain}` : undefined);

// https://astro.build/config
export default defineConfig({
  site,
  // Links on the site have no trailing slash; canonical links match them.
  trailingSlash: 'never',
});
