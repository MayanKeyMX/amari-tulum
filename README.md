# AMARI Uptown Tulum: Vercel deploy

Static site. No build step. Vercel serves this folder as is.

## Deploy (pick one)

**A. Drag and drop (fastest)**
1. Go to https://vercel.com/new and sign in.
2. Drag this whole `amari-tulum` folder onto the page (or choose "Deploy" from a Git repo, see B).
3. Framework preset: **Other**. Build command: none. Output directory: leave blank (root).
4. Deploy. You get a `*.vercel.app` link in under a minute.

**B. From GitHub (best for ongoing edits)**
1. Push this folder to a new GitHub repo.
2. vercel.com/new, Import the repo, preset **Other**, Deploy.
3. Every push to `main` redeploys automatically.

**C. From a terminal**
```bash
cd amari-tulum
npx vercel          # preview deploy
npx vercel --prod   # production
```

## Custom domain
Vercel project, Settings, Domains, add `amaritulum.com` and follow the DNS records it shows.
Canonical, hreflang and sitemap already point at `https://amaritulum.com/...`.
Until the domain is attached, the `*.vercel.app` preview works fully.

## What vercel.json does
- Clean URLs: `/villas`, `/kitchen`, `/es/cocina` (the `.html` versions redirect).
- Old `/cidro` and `/es/cidro` redirect to the Kitchen pages.
- Long cache on `/assets` (video) and `/img`, shorter cache on CSS and JS.
- Basic security headers.

## Pages
| EN | ES |
|---|---|
| / | /es |
| /villas | /es/venta |
| /stay | /es/hospedaje |
| /cowork | /es/cowork |
| /kitchen | /es/cocina |
| /la-veleta | /es/la-veleta |

## Before going public
- Replace the AI generated dish photos in `img/kitchen/` with a real shoot (same filenames).
- Confirm cowork and meal prep prices, Fuel Bar hours, and the Nomad Club perks.
- "Garantia Cenote" on /stay is still marked as awaiting owner approval.
- Test video scrubbing on a real iPhone.

