# Web-portfilio

Portfolio site: [https://nanthachaics07.github.io/cs07-portfilio/](https://nanthachaics07.github.io/cs07-portfilio/)

**Stack:** React 19 + TypeScript + Vite.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173/cs07-portfilio/`

## Build

```bash
npm test
npm run build
npm run preview
```

## Deploy (GitHub Pages)

Pushes to **`main`** run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**Settings → Pages → Source: GitHub Actions**

## Recommended actions (before going live)

1. **Verify locally (same as CI)**  
   ```bash
   npm ci
   npm run check
   ```  
   (`check` = typecheck → test → build.)  
   On macOS, **`make check` may fail** until you accept the Xcode license (`sudo xcodebuild -license`). Use **`npm run check`** or `./scripts/check.sh` instead — no `make` required.

2. **Commit the full React app**  
   Stage everything the site needs: `src/`, `public/` (images, pages, files), `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig*.json`, `.github/`, `Makefile`.  
   Do not push only `index.html` without `public/` — GitHub Pages would miss images and PDFs.

3. **Push to `main` and confirm deploy**  
   Open the repo **Actions** tab → workflow **Deploy GitHub Pages** must succeed.  
   Live URL: [https://nanthachaics07.github.io/cs07-portfilio/](https://nanthachaics07.github.io/cs07-portfilio/)

4. **Smoke-test in the browser**  
   Click each tab (Introduction → Contact), open CV / Oxford links from the sidebar, and check layout on a narrow viewport (tabs scroll horizontally with short labels).

5. **Optional (stronger confidence)**  
   Add Playwright (or similar) e2e tests for tab navigation and scroll — current Vitest tests are render/smoke only.

## Makefile shortcuts

| Target | Purpose |
|--------|---------|
| `make help` | List commands |
| `make dev` | Dev server |
| `make test` | Unit tests |
| `npm run check` | typecheck + test + build (use this if `make` hits Xcode license) |
| `make check` | same as above (needs Xcode CLI tools license on macOS) |

## Project layout (naming)

| Path | Role |
|------|------|
| `src/components/layout/` | Shell UI (`Hero`, `TabNav`, `SideMenu`, `Footer`) — PascalCase files |
| `src/constants/sectionIds.ts` | Tab / scroll anchor IDs (`SECTION_IDS`, `PORTFOLIO_TABS`) |
| `src/components/sections/` | One file per page block (`IntroductionSection`, …) + `MainSections.tsx` |
| `src/hooks/` | `useStickyNavigation.ts`, `useAntiCopy.ts` |
| `src/lib/asset.ts` | Public URL helper (`import.meta.env.BASE_URL`) |
| `src/config/site-links.yaml` | External URLs, email, social, project links (loaded via `src/lib/siteLinks.ts`) |
| `public/images/` | Image assets |
| `public/pages/` | Static HTML (`cv.html`, `eng-lv.html`) |
| `src/styles/` | Global + shared section + responsive CSS |
| `src/components/**/*.css` | Co-located styles (imported from matching `.tsx`) |
| `public/files/` | PDFs |
| `legacy/` | Archived HTML snapshot (reference only; not built or deployed) |

Edit portfolio content in `src/components/sections/MainSections.tsx` and layout components under `src/components/layout/`.

Contact: nanthachaiintarpradit2002@gmail.com
