/**
 * ============================================================================
 *  DOGWOOD REACH — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://dogwood-reach.kevin-c4h.workers.dev', // no trailing slash — confirm after first Cloudflare deploy
    googleSiteVerification: 'myKt8DwODyW2ZSgyMCoBO59cnf9HylanqvjDivJC1v8', // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Dogwood Reach',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the trade name is registered (DeKalb County Clerk of Superior Court)
    owner: null, // optional
    foundingYear: null,

    phone: '(470) 762-0430',
    phoneE164: '+14707620430',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '2970 Clairmont Rd', // real, staffed office — add suite if any
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      postalCode: '30329',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Atlanta, GA'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  /**
   * Contact form — submissions are POSTed to an n8n Webhook (production URL,
   * https://…/webhook/…). The n8n workflow routes them (email, sheet, CRM) and
   * should answer with a redirect to `redirect_to` (the /thank-you/ page).
   * Until webhookUrl is set, the form shows a "not connected yet" notice and won't send.
   * See docs/N8N-FORM-SETUP.md.
   */
  form: { name: 'consultation', provider: 'n8n', webhookUrl: null },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 2818554 — drone over leafy intown Atlanta rising to the Midtown skyline (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      dogwood: { src: '/assets/media/dogwood.webp', pos: '50% 45%', alt: 'Pink flowering dogwood blossoms in spring' },
      downtown: { src: '/assets/media/downtown.webp', pos: '50% 50%', alt: 'Downtown Atlanta towers seen from above on a clear day' },
      skyline: { src: '/assets/media/skyline.webp', pos: '50% 40%', alt: 'Tree-covered Atlanta with the skyline on the horizon' },
    },
  },
};
