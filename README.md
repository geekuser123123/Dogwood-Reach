# Dogwood Reach: Website

A one-page site for Dogwood Reach, which provides Solo and self-directed 401(k) plan support from an
office in Atlanta, Georgia. It's static with no dependencies, built with Node and hosted on
**Cloudflare** (Workers static assets via `wrangler.jsonc`, or Pages).

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check (fails while placeholders remain)
```

## Deploy to Cloudflare

**Workers (current setup):** Workers & Pages → Create → Import a repository → this repo.
Build command `npm run build`, deploy command `npx wrangler deploy`. `wrangler.jsonc` serves `./dist`.
Every push to the branch redeploys automatically.

**Pages (alternative):** Build command `node build.mjs`, output directory `dist`.

Security headers and redirects live in `src/static/_headers` and `src/static/_redirects`, which
are copied into `dist/` and applied by Cloudflare. After the first deploy, set `site.url` in
`site.config.mjs` to the live address (or custom domain) so canonicals, the sitemap and the form's
thank-you redirect are correct.

## Contact form (n8n)

The meeting form posts to an **n8n Webhook**, and the n8n workflow routes each submission
(email, sheet, CRM) and redirects the visitor to `/thank-you/`. Put the webhook's production URL
in `form.webhookUrl` in `site.config.mjs`. Until then the form shows a "not connected yet" notice
and won't send. Setup steps: `docs/N8N-FORM-SETUP.md`.

## Office

**2970 Clairmont Rd, Atlanta, GA 30329** (storefront office). Phone: **(470) 762-0430**.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under Georgia law,
plus `/thank-you/` and `404.html`.

## Design

- **Palette:** slate ink `#1F2B33`, river blue `#2E5E8C` (buttons), dogwood pink `#E9A0BC`, leaf `#8FAE5E`, cream `#FBF8F5`
- **Type:** Domine (display) and Rubik (text), both self-hosted
- **Logo:** a quatrefoil badge with a cream dogwood blossom over a blue river reach (`src/brand.mjs`)
- **Hero:** drone video over leafy intown Atlanta rising to the Midtown skyline (desktop only; phones get the poster image)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
