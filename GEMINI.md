\# GEMINI.md — Navatech Website Build Rules (Gemini Code Assist)



You are assisting on the Navatech website (Next.js App Router + Tailwind).

Your job is to implement the spec safely, incrementally, and without breaking existing behavior.



\## 0) Non-Negotiable Rules

1\. Do NOT redesign the site unless explicitly asked.

2\. Do NOT rename routes, components, or folders unless explicitly asked.

3\. Do NOT delete any existing sections or files unless explicitly asked.

4\. Do NOT “refactor” for style/cleanliness unless it fixes a real bug or is requested.

5\. Always keep interactive elements working (buttons, links, forms). If you change them, test them.

6\. If you are unsure, ASK before making structural changes.



\## 1) Implementation Style

\- Work in SMALL CHUNKS only.

\- Each chunk must be shippable: compile cleanly, run `npm run dev` without errors.

\- Prefer minimal code. No over-engineering.

\- Prefer server components by default; use `"use client"` only when needed (state, events).

\- Avoid adding new libraries unless requested.



\## 2) Bilingual Content Policy (FR + EN)

\- All public marketing copy must have both FR and EN versions if the spec includes both.

\- Store copy in one place (simple object or constants file) to avoid duplication.

\- No automatic translation beyond what the spec provides. If copy is missing, use placeholders:

&nbsp; - FR placeholder: `\[Texte à compléter]`

&nbsp; - EN placeholder: `\[Copy to be added]`



\## 3) Placeholders Are Allowed (and preferred for v1)

When assets or proofs are missing (screenshots, case studies, external links):

\- Use clear placeholders and TODO comments.

\- Do NOT invent fake claims, results, or client proofs.

\- For external links not provided yet, use `#` and label as “Placeholder”.



\## 4) Safety Rules for the Profit Simulator

\- The Profit Simulator is a lead magnet for the free audit (not part of packages).

\- The simulator CTA must always be clickable and functional.

\- If a button becomes unclickable, fix it before doing anything else.

\- Simulator logic must be simple, readable, and stable.



\## 5) File/Folder Conventions (do not change unless asked)

\- Keep Next.js App Router structure under `/app`.

\- Reuse existing layout where possible.

\- Prefer these folders when needed:

&nbsp; - `/app/(marketing)/...` for public pages (only if it already exists)

&nbsp; - `/components/...` for shared components

&nbsp; - `/lib/...` for simple helpers/constants



\## 6) Work Order (build in this exact sequence)

\### Phase 1 — Foundation

1\) Navbar + Footer + primary CTAs (FR/EN exact strings from spec)

2\) Home page skeleton: hero, value prop, packages preview, proof placeholders

3\) Basic styling consistency (spacing, typography) without redesign



\### Phase 2 — Conversion Features

4\) Profit Simulator section/page with working CTA to free audit

5\) Packages page sections with correct CTAs and embedded posts placeholders



\### Phase 3 — Credibility + Content

6\) Case cards using Morocco-inspired fictional names (no real claims)

7\) Blog scaffolding structure (no posts required, embed placeholders allowed)



\### Phase 4 — Compliance

8\) Legal placeholder pages (simple, ready to replace)



\## 7) “Done” Criteria for Every Change

Before finishing a chunk:

\- App builds without errors.

\- `npm run dev` works.

\- Buttons and links are clickable.

\- No console errors in the browser for the affected pages.



\## 8) Output Format When You Respond

When you propose changes, always include:

1\) What files you will change/create

2\) The exact diff-like summary (what changes where)

3\) How to verify quickly (what to click/test)



\## 9) If Something Breaks

If anything breaks:

\- Immediately revert or fix before adding new features.

\- Prioritize restoring the last working state.



End of rules.

