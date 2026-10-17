# AURON — Premium Watch Website

A compact, responsive luxury watch storefront for the AURON AR project.

## Design direction
- Premium black / ivory / champagne-gold visual system
- Constrained 1320px content width on large screens so cards never feel oversized
- Focused product cards with only key information
- Product detail modal with specifications and AR entry point
- Dedicated AR experience section: Scan → Explore → Wear
- Responsive navigation and layouts for desktop, tablet and mobile

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Assets

The `public/images` folder contains the current 1920×1280 AURON imagery.

The `public/ar-targets` folder contains the three starter Vuforia target images:
- AURON_TARGET_01.jpg — Classic
- AURON_TARGET_02.jpg — Chrono
- AURON_TARGET_03.jpg — Skeleton

Upload the target images to Vuforia Target Manager and verify the feature rating before printing.
