# Klokke

Minimal React-applikasjon som viser en stilfull klokke, pakket for Docker Desktop.

## Kjøre lokalt

1. `npm install`
2. `npm run dev`

## Bygge og kjøre i Docker

Med Docker Desktop installert:

1. `docker build -t klokke .`
2. `docker run --rm -p 3000:80 klokke`

Åpne `http://localhost:3000` i nettleseren.

## Alternativ: Docker Compose

1. `docker compose up --build`
2. Åpne `http://localhost:3000`

## Filoversikt

- `src/App.jsx` - React-komponenten for klokke og animasjon.
- `Dockerfile` - Bygger appen og serverer den med Nginx.
- `docker-compose.yml` - Enkel Docker Compose-oppsett.

## Publisert image på GHCR

Imaget er bygget og publisert til GitHub Container Registry.

```
ghcr.io/aey001/klokke:latest
```

For å hente og kjøre det publiserte imaget:

```bash
docker pull ghcr.io/aey001/klokke:latest
docker run --rm -p 3000:80 ghcr.io/aey001/klokke:latest
```

Åpne deretter `http://localhost:3000` i nettleseren.

## GitHub Pages

Denne appen kan også publiseres som en statisk side med GitHub Pages.
Workflow-filen `.github/workflows/deploy-pages.yml` bygger `dist/` og distribuerer det når du pusher til `main`.

Nettsiden vil være tilgjengelig her etter første vellykkede deploy:

```
https://aey001.github.io/klokke/
```

For å bygge og publisere manuelt fra GitHub Actions:

```bash
git add .github/workflows/deploy-pages.yml README.md
git commit -m "ci: deploy to GitHub Pages"
git push origin main
```
