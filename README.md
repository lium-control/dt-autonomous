# Digital Twin Autonomous Unmanned Systems

A GitHub Pages-ready research showcase website for a lab direction on digital twin autonomous unmanned systems.

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to `Settings -> Pages`.
3. Set source to `GitHub Actions`.
4. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` will build and deploy the site.

## Update content

- Publications: `src/data/publications.js`
- Projects: `src/data/projects.js`
- Platforms: `src/data/platforms.js`
- Media: `src/data/media.js`

Put public downloadable files into:

- `public/pdfs/papers/`
- `public/pdfs/theses/`
- `public/videos/`
- `public/images/projects/`

Then use paths like:

```js
"/pdfs/papers/2026-TITS-Urban-Road-AV.pdf"
"/videos/av-urban-road-demo.mp4"


```