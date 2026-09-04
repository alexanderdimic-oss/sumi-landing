# 墨 Sumi — Marketing Landing Page

A polished, bilingual (Japanese / English) marketing landing page for **墨 (Sumi)**, a fictional enterprise data management company. Built with a **和モダン (Japanese modern)** aesthetic — calm, spacious, and precise.

## Brand

**墨 / Sumi** — "Bring order to your data, quietly." (データを、静かに整える。)

Positioning: enterprise and mid-market data management — governance, pipelines, catalogs, privacy, and reliability.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5180](http://localhost:5180) (or the port in `vite.config.ts`).

```bash
npm run build    # production build
npm run preview  # preview production build
```

## Design notes

| Element | Choice |
|---------|--------|
| Palette | Washi off-white (`#F7F5F0`), sumi ink (`#1A1A1A`), deep indigo (`#1E2D4A`), gold hairlines (`#B8956A`) |
| Typography | Noto Serif JP + Noto Sans JP (Japanese), Cormorant Garamond (Latin display) |
| Motifs | Subtle seigaiha waves (hero), asanoha pattern (CTA), vertical kanji accent |
| Motion | Fade/slide on scroll; respects `prefers-reduced-motion` |
| Language | Japanese primary with EN/JP toggle in the nav |

## Page sections

1. Sticky minimal nav
2. Hero with dual CTAs
3. Trust strip (placeholder client logos)
4. Four value pillars (quality, lineage, security, speed)
5. Product showcase with dashboard mock
6. How it works (3 steps)
7. Customer testimonials
8. Final CTA band
9. Footer with links and legal stubs

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
