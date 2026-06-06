# Stripe Payments — Integration Plan (not yet implemented)

**Status:** Bookings are handled via WhatsApp/email for now. This document is the
roadmap for accepting card payments later. Nothing here is wired up yet.

## Goal

Let clients pay **deposits** (or full package fees) online for the fixed packages
already defined in `app/components/Packages.tsx`, while keeping WhatsApp as the
primary enquiry channel.

## Recommended phased rollout

### Phase 1 — Stripe Payment Links (no code, fastest)
The quickest path to taking money with zero backend.
1. In the Stripe Dashboard → **Payment Links**, create one link per fixed item:
   - The Essentials — £250
   - The Ceremony Special — £395
   - The Full Day Experience — £695
   - "Booking deposit" — e.g. £50 / £100
2. Turn each package card's "Enquire" button into a **"Pay deposit"** / **"Book"**
   button that opens the matching Payment Link. (Keep a secondary WhatsApp link
   for questions.)
3. Stripe emails receipts automatically; payouts go to Hanna's connected bank.

**Pros:** live in an afternoon, no secrets in the app, no server code.
**Cons:** fixed amounts only, no custom/bespoke totals, limited metadata.

### Phase 2 — Stripe Checkout via a Next.js Route Handler
For custom amounts (bespoke packages, travel surcharge, deposit vs balance) and
richer data capture.

Suggested shape (App Router):
```
app/
  api/
    checkout/route.ts        # POST → creates a Checkout Session, returns URL
    webhook/route.ts         # POST ← Stripe events (payment succeeded, etc.)
  book/
    success/page.tsx         # post-payment confirmation
    cancelled/page.tsx
  lib/
    stripe.ts                # server-only Stripe client (uses STRIPE_SECRET_KEY)
```
Flow:
1. Client clicks "Pay deposit" on a package card → `POST /api/checkout` with the
   package id (and optional event date / mileage).
2. Route handler maps id → amount (server-side price table — never trust the
   client for prices), creates a Checkout Session with `line_items`, `currency:
   "gbp"`, `metadata` (event date, package, client name), and `success_url` /
   `cancel_url`, then returns `session.url`.
3. Redirect the browser to `session.url` (Stripe-hosted page).
4. `/api/webhook` verifies the Stripe signature and reacts to
   `checkout.session.completed` (send confirmation, mark booking paid).

### Phase 3 (optional) — persist bookings
Only if a dashboard/calendar is wanted. Add Vercel Postgres or Supabase and store
bookings keyed by the Stripe session id. Not needed to take payments — the Stripe
Dashboard is the source of truth until then.

## Dependencies (when implementing)
```bash
npm install stripe @stripe/stripe-js
```
- `stripe` — server SDK (route handlers only).
- `@stripe/stripe-js` — only if redirecting client-side; with hosted Checkout you
  can also just `redirect()` to `session.url`.

## Environment variables (set in Vercel → Settings → Environment Variables)
| Variable | Where | Notes |
|---|---|---|
| `STRIPE_SECRET_KEY` | Server only | `sk_live_…` / `sk_test_…`. Never exposed to client. |
| `STRIPE_WEBHOOK_SECRET` | Server only | From the webhook endpoint config. |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Client OK | `pk_live_…` — only if using `@stripe/stripe-js`. |

Add test keys to Preview/Development and live keys to Production.

## Webhooks
- Create the endpoint at `https://<domain>/api/webhook` in the Stripe Dashboard.
- Route handler must read the **raw body** to verify the signature
  (`stripe.webhooks.constructEvent`). In the App Router, read `await req.text()`.
- Test locally with the Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhook`.

## Decisions to confirm with Hanna before building
- Deposit amount vs full payment up front?
- Refund / cancellation policy (shown at checkout)?
- Should the travel surcharge (£0.45/mile) be calculated or added manually?
- Stripe Tax / VAT — is she VAT registered?

## Security notes
- Prices live **server-side** only; the client sends an id, never an amount.
- Secret key + webhook secret stay in Vercel env vars, never committed.
- Always verify the webhook signature before trusting an event.
