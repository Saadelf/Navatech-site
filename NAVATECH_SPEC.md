\# navatech-spec.md — Navatech.pro (V1)

\*\*Goal:\*\* Build a bilingual (FR default / EN) conversion website for Navatech that sells 3 website packages focused on \*\*réservations directes\*\* via \*\*WhatsApp + Google + Website\*\*, plus a \*\*profit simulator\*\* (OTA vs Direct) and a \*\*free audit\*\* lead magnet.



\*\*Deploy:\*\* Vercel  

\*\*Repo:\*\* `navatech-site` (GitHub)  

\*\*Domains:\*\* `navatech.pro` + `staging.navatech.pro`  

\*\*Stack:\*\* Next.js (App Router) + TailwindCSS  

\*\*UI reference:\*\* Near-clone of UIcore style (feel, spacing, typography vibe, gradients, motion).  

\*\*Motion:\*\* View Transitions + Framer Motion reveals + Lenis smooth scroll, with reduced-motion fallback.  

\*\*Compliance:\*\* No cookie banner; GA4 loads immediately; reCAPTCHA v3 on forms.  

\*\*Tone:\*\* Premium modern “hospitality growth partner” (clear + direct, not technical).



---



\## 0) Non-negotiables (must follow)

1\) \*\*Do NOT invent proof.\*\* Use placeholders labeled clearly (e.g., “Exemple (anonymisé)”).  

2\) \*\*Keep copy simple.\*\* Avoid heavy technical jargon; focus on outcomes and clarity.  

3\) \*\*UI near-clone:\*\* replicate UIcore’s spacing + motion patterns as closely as possible, but with Navatech content.  

4\) \*\*Mobile-first\*\* and excellent readability in FR/EN.  

5\) \*\*Lighthouse ≥ 90 mobile\*\* on Home page.  

6\) Generate SEO assets: `sitemap.xml`, `robots.txt`, `llms.txt`, OpenGraph images.



---



\## 1) Reference assets \& folders (required inputs)

\### 1.1 UI reference

Place UIcore reference files here:

\- `/\_reference/uicore/uicore\_desktop.png`

\- `/\_reference/uicore/uicore\_mobile.png`

\- `/\_reference/uicore/notes.md` (what to copy exactly: header style, buttons, gradients, spacing, cards, motion)



\### 1.2 Brand assets

Place brand files here:

\- `/\_reference/brand/logo-light.(svg|png)`

\- `/\_reference/brand/logo-dark.(svg|png)`

\- `/\_reference/brand/favicon.(ico|png|svg)`



No brand-notes required; derive brand “feel” from UIcore reference.



\### 1.3 Proof placeholders (v1)

Use placeholders now (replace later):

\- `/\_reference/proof/` (optional placeholder images if provided later)

If not provided, render clean placeholder cards with “À remplacer”.



---



\## 2) Audience \& positioning

\### 2.1 Primary audience

\- Independent riad owners, boutique hotel owners/managers, guesthouses in Morocco.

\- Secondary: “tourism brands”.



\### 2.2 Core promise (homepage)

\*\*FR:\*\* “Plus de réservations directes en transformant WhatsApp + Google + votre site en moteur de réservation.”  

\*\*EN:\*\* “More direct bookings by turning WhatsApp + Google + your website into a direct-booking engine.”



\### 2.3 Must-include concepts in copy (simple wording)

Include these words naturally:

\- “réservations directes”, “WhatsApp”, “Google”, “audit gratuit/offert”, “simulateur”, “visibilité IA / AI-discoverable / GEO-ready”

But \*\*explain simply\*\* (no deep technical detail).



\### 2.4 Claims to avoid

Avoid “guaranteed more bookings”. Position as: improved conversion + reduced OTA dependence + measurable tracking.



---



\## 3) Information architecture (bilingual)

\### 3.1 Routes (FR default at `/`, EN at `/en`)

\*\*FR\*\*

\- `/` (Accueil)

\- `/solutions` (Nos Solutions)

\- `/simulateur` (Simulateur)

\- `/tarifs` (Tarifs)

\- `/audit` (Audit Gratuit)

\- `/etudes-de-cas` (Résultats / Exemples)

\- `/blog` (Scaffolding)

\- `/blog/\[slug]` (Scaffolding)

\- `/a-propos` (À Propos)

\- `/contact`

\- `/legal/terms` (placeholder)

\- `/legal/privacy` (placeholder)

\- `/legal/cookies` (placeholder page only, no banner)



\*\*EN\*\*

\- `/en`

\- `/en/solutions`

\- `/en/simulator`

\- `/en/pricing`

\- `/en/audit`

\- `/en/case-studies`

\- `/en/blog`

\- `/en/blog/\[slug]`

\- `/en/about`

\- `/en/contact`

\- `/en/legal/terms`

\- `/en/legal/privacy`

\- `/en/legal/cookies`



\### 3.2 Header nav (max 5) + CTA

Nav items (FR):

\- Nos Solutions | Simulateur | Tarifs | Blog | À Propos

Primary CTA button (FR):

\- \*\*Obtenir mon audit offert\*\*

Language switch (FR/EN) must be visible.



\### 3.3 Footer must include

\- WhatsApp, email, address (Casablanca), LinkedIn placeholder, mention of SmartPath, sitemap links, legal links, language switch.



---



\## 4) CTAs — exact labels + behaviors (locked)

\### 4.1 Exact CTA labels

\*\*Navbar CTA\*\*

\- FR: \*\*Obtenir mon audit offert\*\*

\- EN: \*\*Get my free audit\*\*



\*\*Simulator CTA (after results)\*\*

\- FR: \*\*Je veux plus de réservations directes\*\*

\- EN: \*\*I want more direct bookings\*\*



\*\*Packages CTA (same label across packages)\*\*

\- FR: \*\*Voir un aperçu de mon futur site\*\*

\- EN: \*\*Preview my future website\*\*



\### 4.2 CTA behaviors

\*\*Simulator CTA (v1):\*\*

\- Opens WhatsApp with simulator-specific message (see WhatsApp rules).

\- Track GA4 event (see Analytics section).



\*\*Packages CTA (v1):\*\*

\- Opens WhatsApp with pricing-specific message (see WhatsApp rules).

\- Track GA4 event.



\*\*Sticky WhatsApp button:\*\*

\- Always visible bottom-right.

\- Uses \*\*page-specific message\*\* depending on current route.



---



\## 5) WhatsApp rules (page-specific messages)

\### 5.1 WhatsApp number

\- `+212659595059`



\### 5.2 Messages (FR)

\*\*From Simulator page\*\*

> Bonjour, je viens d'utiliser le simulateur sur votre site. J'aimerais discuter de mes résultats et voir comment Navatech peut m'aider à augmenter mes réservations directes.



\*\*From Audit page\*\*

> Bonjour, je souhaite demander l'audit digital gratuit pour mon établissement. Quelle est la marche à suivre ?



\*\*From Pricing page\*\*

> Bonjour, je regarde vos forfaits sur le site Navatech. J'aimerais avoir plus de détails pour choisir la solution la mieux adaptée à mon établissement.



\### 5.3 Implementation

\- Use WhatsApp click link format with URL-encoded text.

\- If on EN routes, message can remain FR in v1 (acceptable) OR provide EN variants if easy.

\- Add `utm\_source` style info only if needed; keep simple.



---



\## 6) Packages (pricing ranges + simple scope)

\### 6.1 Pricing (MAD, show “à partir de” ranges)

\- \*\*Pack 1 (Foundation):\*\* 1,500 → 8,500 MAD  

\- \*\*Pack 2 (Closer):\*\* 9,500 → 15,500 MAD  

\- \*\*Pack 3 (Commander):\*\* 19,500 → 28,000 MAD  



Show as “À partir de …” with range context. Avoid deep details (no page counts, no SLA).



\### 6.2 Package positioning (high-level only)

\*\*Pack 1 — Foundation\*\*

\- Site web FR/EN

\- Optimisé Google (SEO)

\- “Visibilité IA” (AEO / AI-discoverable / GEO-ready) in simple terms

\- Direct booking flow v1: inquiry form → WhatsApp + email

\- GA4 included (setup placeholder)



\*\*Pack 2 — Closer\*\*

Everything in Pack 1 +

\- AI booking/qualification assistant (website widget)

\- Handles FAQs + collects dates/guests/budget

\- Pushes guest to WhatsApp with structured summary

\- Never confirms bookings



\*\*Pack 3 — Commander\*\*

Everything in Pack 2 +

\- 1 month SmartPath included

\- SmartPath: WhatsApp concierge assistant + reviews/upsells automations + dashboard mention

\- After free month: \*\*à partir de 790 MAD / mois\*\*



\### 6.3 Add-ons (public mention)

Display as small add-on note:

\- FR: \*\*Option Photos Pro sur place — sur devis\*\*

\- EN: \*\*On-site pro photography — on request\*\*

\- FR: \*\*Option Création de contenu — sur devis\*\*

\- EN: \*\*Content creation — on request\*\*



---



\## 7) “Direct booking” definition (v1)

\### 7.1 Default v1 flow (what Navatech sells)

\- Availability inquiry form on the client website

\- Sends inquiry to hotel email

\- Encourages WhatsApp conversion for rapid confirmation

\- \*\*Manual confirmation by staff\*\* (explicit; do not imply automation)



\### 7.2 Objection handling on-site

Do NOT use “Phase 1–3” framing section.

Instead include:

1\) \*\*FAQ section\*\* on Home + dedicated FAQ page

2\) A short “How we prevent chaos” bullet section (Home + possibly Solutions)



\*\*How we prevent chaos\*\* (short bullets, non-technical):

\- Messages structurés (moins de promesses floues)

\- Résumés envoyés à l’équipe (moins d’erreurs)

\- Process clair de confirmation manuelle

\- Suivi et mesure (pour décider, pas deviner)



---



\## 8) Profit simulator (OTA vs Direct) — locked math \& UX

\### 8.1 Inputs (v1)

\- Nightly rate (ADR)

\- Rooms count

\- Occupancy %

\- OTA share %

\- OTA commission %

\- Target OTA share % (default \*\*30%\*\*)

Currency toggle: \*\*MAD/EUR\*\* (fixed rate: \*\*1 EUR = 10.5 MAD\*\*)



\### 8.2 Outputs (v1)

\- Annual revenue

\- OTA commissions/year

\- Annual savings if target reached

\- Monthly gain



\### 8.3 Formulas (exact)

\- `annual\_revenue = nightly\_rate \* rooms \* 365 \* (occupancy\_rate / 100)`

\- `ota\_commissions = annual\_revenue \* (ota\_share / 100) \* (commission\_rate / 100)`

\- `savings = annual\_revenue \* ((ota\_share - target\_ota\_share) / 100) \* (commission\_rate / 100)`

\- `monthly\_gain = savings / 12`



\### 8.4 UX rules

\- Results visible instantly (no gate)

\- “Je veux plus de réservations directes” CTA opens WhatsApp (simulator message)

\- \*\*Save simulator run only on CTA click\*\* (v1: no Sheets, so just log to console or store in-memory; Phase 2 adds Sheets)



---



\## 9) Free audit (lead magnet)

\### 9.1 Audit promise (simple)

Direct booking readiness audit combining:

\- Google Business Profile visibility

\- Booking friction

\- Speed \& SEO

\- “Visibilité IA” score



\### 9.2 Delivery

\- Promise PDF report, \*\*manual production in v1\*\*

\- Phase 3: enable basic instant PDF from form + simulator inputs



\### 9.3 Audit form fields (v1)

\- first name

\- email

\- WhatsApp

\- establishment name

\- type (riad/hotel/resort/other)

\- rooms count

\- city

\- website URL (optional)

\- message (optional)

\- owner/manager checkbox



\### 9.4 Submission behavior (v1)

\- Sends email notification to `contact@navatech.pro`

\- Sender: `no-reply@navatech.pro`, Reply-To: `contact@navatech.pro`

\- Show success state + \*\*optional WhatsApp button\*\* (opens Audit message)

\- Protect with \*\*reCAPTCHA v3\*\*



---



\## 10) Case studies / proof (v1 placeholders)

\### 10.1 Style

Use branded fictional names:

\- “Riad Atlas”

\- “Maison Zellige”

\- “Dar Horizon”



\### 10.2 Content

Use anonymized “Audit Example” style case cards:

\- short problem

\- short action

\- short outcome (no fake numbers; qualitative only)

Label clearly as example/anonymized.



\### 10.3 Visuals

Use Morocco-inspired hospitality stock visuals (tasteful, premium), plus fictional website mockups later.



---



\## 11) Blog (v1 scaffolding only)

\- Routes exist (FR/EN), but content can be placeholders.

\- Use MDX-ready structure in repo for future posts.

\- No category/search required in v1.

\- Provide empty index pages with “Coming soon” sections in FR/EN.



---



\## 12) SmartPath mention (Navatech)

\- Navatech should mention SmartPath in Pack 3 and footer.

\- Link to a placeholder external site link later (use placeholder URL in config).



---



\## 13) SEO / AEO / “AI discoverable” requirements

\### 13.1 On-page SEO

\- Strong meta titles/descriptions per page (FR + EN)

\- Clean headings hierarchy

\- Internal linking between: Home → Simulator → Audit → Pricing



\### 13.2 Structured data (v1)

Add JSON-LD (FR and EN pages):

\- Organization

\- WebSite

\- FAQPage (only for visible Q/A)

Optional later: BreadcrumbList



\### 13.3 LLM discoverability

Generate:

\- `/llms.txt` describing:

&nbsp; - what Navatech sells

&nbsp; - packages + pricing ranges

&nbsp; - simulator + audit

&nbsp; - how to contact (WhatsApp/email)

Keep it simple and accurate.



\### 13.4 AEO answer blocks

Add short “Answer blocks” (plain language) on:

\- Home: “Comment augmenter les réservations directes ?”

\- Simulator: “Comment calculer le coût des OTA ?”

\- Pricing: “Quel forfait choisir ?”



---



\## 14) Analytics (GA4) — required events

GA4 loads immediately (no consent gate, no cookie banner).



Track events:

1\) `cta\_whatsapp\_click`

&nbsp;  - params: `source\_page` (home/pricing/simulator/audit/contact), `language` (fr/en)

2\) `cta\_audit\_click`

&nbsp;  - params: `source\_page`, `language`

3\) `simulator\_start` (first interaction)

4\) `simulator\_complete` (results visible or CTA shown)

5\) `package\_cta\_click`

&nbsp;  - params: `package` (foundation/closer/commander), `language`

6\) `form\_submit\_audit`

7\) `form\_submit\_contact`

8\) `calendly\_click` (placeholder in v1 if link missing)



---



\## 15) Forms \& integrations (v1 vs future)

\### 15.1 Email delivery

Use a provider integration (Resend recommended):

\- In v1, implement real email sending.

\- If keys are missing, gracefully degrade (server logs + UI success message).



\### 15.2 Google Sheets lead storage

\- \*\*Phase 2 only.\*\* v1 should be structured so Sheets can be plugged in easily.



\### 15.3 Calendly

\- Include a placeholder button/slot.

\- When link is provided later, wire it without refactor.



---



\## 16) Motion, accessibility, performance

\### 16.1 Motion

\- Use View Transitions where possible

\- Framer Motion for section reveals

\- Lenis smooth scroll

\- \*\*Reduced-motion fallback\*\* (prefers-reduced-motion disables heavy animations)



\### 16.2 Performance

\- Lighthouse ≥ 90 on mobile for Home

\- Use Next/Image, proper sizes, lazy load

\- Avoid heavy libraries; keep bundle lean

\- Defer non-critical scripts



\### 16.3 Accessibility

\- Contrast-safe text on gradients

\- Focus states

\- Keyboard navigable menus



---



\## 17) Technical architecture (implementation guidance)

\### 17.1 Next.js

\- App Router

\- `next-intl` (or equivalent) for FR default + `/en` routing

\- Use `generateMetadata` per locale/page

\- Create shared layout with language switcher



\### 17.2 Styling

\- TailwindCSS

\- Define design tokens as CSS variables:

&nbsp; - colors derived from UIcore screenshots

&nbsp; - spacing and radii mimic UIcore feel

\- Use Google Fonts closest match to UIcore (unless font files are later provided)



\### 17.3 Key env vars (placeholders ok)

\- `NEXT\_PUBLIC\_GA4\_ID=G-XXXXXXXXXX`

\- `RECAPTCHA\_SITE\_KEY=...`

\- `RECAPTCHA\_SECRET\_KEY=...`

\- `RESEND\_API\_KEY=...` (or chosen provider)

\- `SMARTPATH\_URL=https://example.com` (placeholder)

\- `CALENDLY\_URL=` (placeholder)



\### 17.4 SEO assets

\- `public/robots.txt`

\- `public/sitemap.xml` (or dynamic)

\- `public/llms.txt`

\- OG images per locale (static or generated)



---



\## 18) Content rules (copy \& tone)

\- Sound like a \*\*hospitality growth partner\*\* (not a generic web agency).

\- Be direct, confident, simple.

\- Avoid technical deep dives.

\- Emphasize WhatsApp + Google + Website engine.



---



\## 19) Legal \& identity

\### 19.1 Company identity (must appear in footer/contact)

\- Legal name: \*\*Navatech S.A.R.L.\*\*

\- Address: \*\*77 Rue Mohamed Smiha, ETG 8, Casablanca\*\*

\- Email: \*\*contact@navatech.pro\*\*

\- WhatsApp: \*\*+212659595059\*\*

\- LinkedIn: placeholder (to be added later)



\### 19.2 Legal pages (v1)

\- Simple placeholders ready to replace later (FR/EN).



---



\## 20) Documentation (required /docs)

Create `/docs` with:

\- `docs/update-copy.md` (where text lives, how to edit FR/EN)

\- `docs/add-blog-post.md` (MDX structure, slug rules)

\- `docs/change-pricing.md` (single source of truth for package ranges)

\- `docs/deploy-vercel.md` (env vars + staging setup + domain mapping)



---



\## 21) Delivery phases (internal, not a website section)

\*\*V1\*\*

\- Full site + simulator + audit + WhatsApp flows + GA4 + reCAPTCHA v3

\- Email notifications working (or graceful fallback)

\- Blog scaffolding only

\- Proof placeholders



\*\*Phase 2\*\*

\- Google Sheets lead logging (audit + simulator CTA click)

\- Better lead tagging by source page



\*\*Phase 3\*\*

\- Instant basic PDF generation from inputs

\- Improve SmartPath deep link and proof assets



---



\## 22) Acceptance checklist (definition of done)

\- UI feels like UIcore (spacing, gradients, motion patterns), mobile-first.

\- FR default + full EN translation across pages (including legal placeholders).

\- Simulator math correct; results match formulas.

\- CTA labels exactly match spec; behaviors match spec.

\- WhatsApp messages page-specific; encoded correctly.

\- Audit + contact forms send email to contact@navatech.pro with reCAPTCHA v3.

\- GA4 events implemented as listed (with placeholders OK).

\- `sitemap.xml`, `robots.txt`, `llms.txt`, OG metadata present.

\- Lighthouse mobile Home ≥ 90.

\- Repo `navatech-site` deployable on Vercel; staging supported.

