# Our Family

A responsive, single-page React + Vite family overview. It introduces each
family member's role, everyday responsibilities, and contribution to the home.

## Run locally

```sh
npm install
npm run dev
```

Create a production build with `npm run build`; preview it with `npm run preview`.
Vite writes the deployable site to `dist/`.

## Deploy to Azure Static Web Apps

Create an Azure Static Web App and connect this project repository. Use these
build settings:

- **Build preset:** React
- **App location:** `/`
- **API location:** leave blank
- **Output location:** `dist`
- **Build command:** `npm run build`

The Azure Static Web Apps configuration is in `public/staticwebapp.config.json`
and is copied to the build output. For the GitHub Actions setup, use the
repository's root as the app location and `dist` as the output location.