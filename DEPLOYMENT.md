# Deployment — Vercel + Namecheap domain

The site is already live at **https://hanna-young-music.vercel.app**.

## A. Deploy changes to Vercel

### Option 1 — Git push (recommended, automatic)
✅ **Verified working (June 2026).** The Vercel project's GitHub integration is
connected to `shyakaster/hannayoung`, so deployment is automatic — a push to `main`
produces a production deployment aliased to `hannayoungmusic.com` (confirmed by the
`hanna-young-music-git-main-…` alias Vercel attaches only to Git-triggered builds),
and a push to any other branch produces a preview:

```bash
git add -A
git commit -m "Redesign site"
git push origin main
```

- Pushing to **main** → Vercel builds and deploys to **production** (the live URL).
- Opening a PR / pushing any other branch → Vercel creates a **Preview**
  deployment with its own URL, so you can review before merging.

Watch the build at https://vercel.com/dashboard → the project → **Deployments**.

> ⚠️ Before the first deploy of this redesign, replace the placeholder images:
> save the two real photos as `public/hanna-1.jpg` (portrait) and
> `public/hanna-2.jpg` (landscape), then commit them.

### Option 2 — Vercel CLI (deploy from your machine)
```bash
npm i -g vercel        # once
vercel login           # once
vercel                 # deploy a preview
vercel --prod          # deploy to production
```

### If the repo is NOT yet linked to Vercel
1. Push this repo to GitHub.
2. https://vercel.com/new → Import the repo.
3. Framework preset: **Next.js** (auto-detected). No build settings to change.
4. Deploy.

## B. Point your Namecheap domain at Vercel

> **Actual setup (as of June 2026):** the domain is **hannayoungmusic.com**
> (apex = primary, `www` redirects to it). Both are already added to the Vercel
> project via CLI. **Gotcha:** the domain is registered at Namecheap but its
> nameservers point to **Wix** (`ns4/ns5.wixdns.net`), so DNS must be taken back
> by changing nameservers at Namecheap — either to Vercel
> (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`, simplest) or to Namecheap BasicDNS
> and then adding `A @ 76.76.21.21` + `CNAME www cname.vercel-dns.com`. Switching
> nameservers disconnects any Wix site/email on that domain.


Use your real domain (e.g. `hannayoungmusic.com`). Two parts: tell Vercel about the
domain, then update DNS at Namecheap.

### Step 1 — Add the domain in Vercel
1. Vercel → your project → **Settings → Domains**.
2. Enter your domain (e.g. `hannayoungmusic.com`) → **Add**.
3. Add the `www` version too (`www.hannayoungmusic.com`) and let Vercel set one to
   redirect to the other (apex → www, or www → apex; either is fine).
4. Vercel now shows the exact DNS records to create. **Use the values Vercel shows
   you** — the ones below are the current Vercel defaults but always defer to the
   dashboard.

### Step 2 — Set DNS at Namecheap
1. Namecheap → **Domain List** → **Manage** next to the domain → **Advanced DNS**.
2. Delete the default Namecheap "parking" records (the CNAME `www → parkingpage`
   and any `URL Redirect`/A records for `@`) so they don't conflict.
3. Add the records Vercel asked for. Typically:

   | Type  | Host | Value                  | TTL       |
   |-------|------|------------------------|-----------|
   | A     | `@`  | `76.76.21.21`          | Automatic |
   | CNAME | `www`| `cname.vercel-dns.com` | Automatic |

   - **A record** points the apex/root domain (`@`) to Vercel.
   - **CNAME** points `www` to Vercel.
   - In Namecheap, `@` = the root domain; don't type the domain name in "Host".
4. Make sure Namecheap's **Nameservers** (Domain tab) are set to **Namecheap
   BasicDNS** — otherwise the Advanced DNS records are ignored. (Only skip this if
   you deliberately moved nameservers to Vercel; then add the records in Vercel's
   DNS instead.)

### Step 3 — Wait & verify
- DNS usually propagates in minutes, sometimes up to a few hours.
- Vercel's **Settings → Domains** shows each domain as **Valid** with HTTPS once
  it detects the records and auto-issues a free SSL certificate.
- Test: visit `https://hannayoungmusic.com` and `https://www.hannayoungmusic.com`.

### Alternative — let Vercel run DNS (optional, simpler ongoing)
Instead of editing records, point Namecheap's **Custom DNS** nameservers to the
ones Vercel provides (Vercel → Domains will list them). Vercel then manages all
DNS. Trade-off: any email/other records for the domain must then also be managed
in Vercel.

## Troubleshooting — "I pushed to GitHub but the live site didn't change"

> **Note (June 2026):** Git auto-deploy is confirmed connected and working, so the
> "Git integration isn't connected" branch below is unlikely. If a push doesn't go
> live, the cause is almost always **browser cache** (step 4) or a **failed build**
> (step 1) — not a missing integration. You can verify a deploy fired from this
> machine with `vercel ls hanna-young-music` (the CLI is logged in).

The push is fine if `git log origin/main -1` shows your latest commit (it does).
The issue is then on Vercel. Check, in order:

1. **Vercel → project → Deployments.** Did a new deployment start when you pushed?
   - **No new deployment** → Git integration got disconnected. Re-link via
     **Settings → Git → Connect Git Repository → `shyakaster/hannayoung`**, and
     set **Production Branch = `main`**. (This is normally already configured.)
   - **Deployment failed** → open it and read the build logs; fix the error.
   - **Deployment succeeded but site looks unchanged** → see steps 2–4.
2. **Settings → Git → Production Branch** must be `main` (pushes to other branches
   only create previews, never update the live URL).
3. **Settings → Build & Deployment → Root Directory** must be empty / `.` — this
   Next.js app lives at the repo root. (Earlier commits mention "syncing to repo
   root," which hints this may be pointed at a stale subfolder.)
4. **Hard-refresh** the live URL (Cmd+Shift+R) to rule out browser cache.

### Fastest fix from this machine (CLI)
If the dashboard Git link is the problem, you can also deploy directly:
```bash
! vercel login            # run in this terminal (interactive) — type your email
```
Once logged in, I can run `vercel link` (point it at the existing
`hanna-young-music` project) and `vercel --prod` to push the current code live.
Linking the existing project is important — otherwise the CLI creates a *new*
project at a different URL.

## Notes
- `images.unoptimized: true` is set in `next.config.ts`, so local photos in
  `public/` deploy as-is with no extra config.
- No environment variables are needed for the current site. (Stripe will add some
  later — see `STRIPE_PLAN.md`.)
