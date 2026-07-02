# Publishing

This project is prepared for a public GitHub repository and Netlify hosting.

## GitHub

Recommended repository:

- Owner: `sagasa`
- Name: `sand-research-tracker`
- Visibility: Public
- License: MIT

After creating the empty GitHub repository, push the local `main` branch:

```powershell
git push -u origin main
```

The local repository already has this remote configured:

```powershell
git remote -v
```

Expected remote:

```text
origin  https://github.com/sagasa/sand-research-tracker.git
```

## Netlify

Create a new Netlify site from the GitHub repository.

Settings:

- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: none required

The app is a static Vite build. Runtime data fetching is intentionally not used; generated data is bundled in `src/generated/techTreeData.ts` and `src/generated/equipmentStatsData.ts`.

## Data Updates

Only run the generators when intentionally refreshing the bundled research or equipment data:

```powershell
npm run generate:all
npm run check
npm run build
```

Commit regenerated files under `src/generated/` and any changed files under `public/equipment-icons/` together with generator changes.
