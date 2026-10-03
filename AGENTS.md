# Repository guidance

Before implementation or review work, read and follow [`skills/frontend-architecture/SKILL.md`](skills/frontend-architecture/SKILL.md). Ecosystem work must also follow the canonical [`JST Stack engineering roadmap`](https://github.com/jst-stack/jst/blob/main/docs/ECOSYSTEM_ROADMAP.md). Inspect the nearest complete vertical slice before editing. Preserve the architecture kernel (`app/container`, feature injection, provider discovery, and architecture checks) when replacing the demo. Keep route modules thin and run `npm run check` before delivery.
