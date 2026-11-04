# DSH Marketing Skills

A curated marketing skill pack for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness), ported from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT). It is an installable DSH bundle, not a folder of copied markdown.

It contains eight focused skills plus a router:

- **copywriting** — landing pages, headlines, CTAs, value propositions; removes AI tells.
- **copy-editing** — seven-sweep edit of existing copy, AI-tell cleanup, content refresh.
- **cro** — conversion review for pages and forms, experiments.
- **ab-testing** — experiment design, sample size, test templates.
- **emails** — welcome, nurture, re-engagement and lifecycle sequences.
- **popups** — exit-intent, modals, banners, overlay copy.
- **offers** — value framing, bonus stacking, guarantees, urgency.
- **pricing** — pricing models, tiers, willingness to pay, pricing-page teardown.

## Why this is not a raw copy

- **Curated, not all 53.** These eight are the core skills that reference each other; the long tail of niche marketing skills is intentionally omitted.
- **A router skill (`marketing`)** decides which skill to load, instead of making the model guess.
- **A real bundle.** `package.json` + `cordis.patch.yml` + a provider that reads `manifest.json` and each `SKILL.md`; install once, no manual copying.
- **Fixed an upstream bug.** `cro/SKILL.md` links `references/inbound-routing.md`, but the file lives under `skills/revops/`; this port copies it so the link resolves.
- **Tests.** `npm test` validates the provider, the manifest, every frontmatter, and every `references/` link.

## Install

### Option A: DSH bundle

From a local checkout, install the folder through **Plugins → Add plugin**, or with the plugin manager. After the package is published to npm:

```bash
dsh plugin --profile web add dsh-marketing-skills
```

### Option B: copy into the skills root

```bash
./install.sh
```

or:

```bash
mkdir -p "${DSH_HOME:-$HOME/.dsh}/skills"
cp -R skills/* "${DSH_HOME:-$HOME/.dsh}/skills/"
```

The filesystem skill provider watches `~/.dsh/skills`, so the skills appear without restarting. The bundle route registers the same skills through the provider.

## Use

Ask the agent normally, or start with the router: *"Use the marketing skill to decide which skill fits this task."* Examples:

- "Rewrite this landing page with the copywriting skill."
- "Review this signup form with the CRO skill."
- "Help me price this product with the pricing skill."

The agent can also load a skill by name with the `skill` tool.

## Attribution

- Upstream: [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills), MIT, Copyright (c) 2025 Corey Haines.
- Port commit: `88c79f6528a9347420e57ceb1fff9a60de651768`.
- Changes: kept the upstream skill bodies and references; omitted `evals/`; fixed the CRO `inbound-routing.md` reference by copying it from `skills/revops/`.
- This port is unofficial and not affiliated with DeepSeek.

## License

MIT, see [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md).
