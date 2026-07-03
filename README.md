# BookAgent Landing Page

Marketing site for BookAgent.gr built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Contact form setup

The contact form submits to Formspree using a frontend-safe endpoint.

1. Create a form at Formspree and copy your endpoint URL.
2. Copy `.env.example` to `.env`.
3. Set `VITE_FORMSPREE_ENDPOINT`.
4. Optionally set `VITE_CONTACT_FALLBACK_EMAIL`.

Example:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/yourFormId
VITE_CONTACT_FALLBACK_EMAIL=hello@bookagent.gr
```

## Build

```bash
npm run build
```
