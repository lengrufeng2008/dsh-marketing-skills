---
name: marketing
description: Route a marketing request to the right DSH marketing skill. Use when the user asks for marketing help without naming a skill, or when it is unclear whether the task is copywriting, copy editing, CRO, A/B testing, email, popups, offers, or pricing.
---

# Marketing skill router

This pack contains eight focused skills. Load the matching skill before doing the work; do not answer from this router alone.

| The user wants... | Load |
|---|---|
| New landing-page, homepage, headline, CTA, or value-proposition copy | `copywriting` |
| Edit, tighten, de-slop, or refresh existing copy | `copy-editing` |
| Diagnose why a page or form is not converting | `cro` |
| Design or size an A/B test | `ab-testing` |
| Welcome, nurture, re-engagement, or lifecycle email sequence | `emails` |
| Exit-intent, modal, overlay, banner, or slide-in copy | `popups` |
| Build or improve the offer: bonuses, guarantee, urgency, value framing | `offers` |
| Pricing model, tiers, packaging, willingness to pay, pricing-page teardown | `pricing` |

## How to load

Call the `skill` tool with the exact name. Each skill carries its own references; read only the ones it points to.

## Rules

- If the task spans two skills, load the primary one first, then the secondary. For example: rewrite the copy (`copywriting`), then test it (`ab-testing`).
- Product context belongs in `.agents/product-marketing.md` when it exists; read it before asking questions.
- Do not invent proof, numbers, or customer names. Mark missing evidence as `[NEED: ...]`.
- This pack is a curated port of the core skills from `coreyhaines31/marketingskills` (MIT). The remaining niche skills are not included.
