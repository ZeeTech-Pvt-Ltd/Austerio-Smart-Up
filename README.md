# Austerio Smart Up

Next.js (App Router) site for [austeriosmart-up.com](https://austeriosmart-up.com).

## Commands

```bash
npm install
npm run dev     # development server
npm run build   # production build
npm start       # serve the production build
npm run lint    # oxlint
```

## Structure

- `src/app/` - routes, per-page metadata, `sitemap.js`, `robots.js`, `not-found.jsx`
- `src/components/` - shared UI, including the one `RegistrationForm` rendered on
  both `/` (`#register`) and `/contact`
- `src/data/` - site copy (`content.js`), phone country list (`countries.js`),
  per-route SEO and JSON-LD (`seo.js`)
- `src/proxy.js` - legacy `/How-It-Works` redirect, matched case-sensitively
- `public/` - images, the local flag PNGs in `public/flags/`, OG image, manifest

## Notes

- Phone flags are bundled locally, so the picker makes no request to
  flagcdn.com and still works when that host is blocked.
- Fonts are self-hosted at build time by `next/font`; no runtime request goes to
  Google Fonts.
- The registration form posts JSON to the shared relay (see
  `src/lib/submitLead.js`) with `offerName: 'AusterioSmartUp-Site'`.
- `/thank-you` is `noindex, nofollow` with no canonical and is excluded from the
  sitemap. `robots.txt` deliberately does not disallow it, so crawlers can see
  the noindex tag.
- `/disclosure` permanently redirects to `/risk-disclosure`.
