# Vercel Deployment Requirements

## Project requirements

- Node.js 20.9 or newer
- npm 10 or newer
- Next.js 16.3.0
- No environment variables are required for the current portfolio
- An internet connection is required for the embedded Tableau dashboard

## Vercel project settings

Vercel should detect this as a Next.js project automatically. Use these settings if manual configuration is needed:

- Framework Preset: `Next.js`
- Root Directory: project root
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave empty (Next.js default)

## Deploy from GitHub

1. Push the project to a GitHub repository.
2. In Vercel, choose **Add New Project** and import the repository.
3. Confirm the settings above.
4. Click **Deploy**.

## Deploy from the Vercel CLI

```powershell
npm install
npm run build
npx vercel
npx vercel --prod
```

The Power BI report is served from the local PDF in `public/`. The Tableau preview loads from the public Tableau embed and will not display if third-party scripts are blocked by the browser.
