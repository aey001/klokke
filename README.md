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
