# Notizen: Projektdateien (Vite + React + TypeScript)

## index.html
- Einzige HTML-Seite des Projekts
- Enthält einen leeren `<div id="root">` und lädt `src/main.tsx`
- React zeichnet die ganze Anwendung in diesen Block

## src/main.tsx (Einstiegspunkt)
- Findet `root` und startet die App: `createRoot(...).render(<App />)`
- `StrictMode` hilft, Fehler während der Entwicklung zu finden

## src/App.tsx (Hauptkomponente)
- Funktion, die JSX (die Struktur der Seite) zurückgibt
- Hier werden weitere Komponenten eingebunden

## package.json (Steckbrief des Projekts)
- `scripts`: Befehle (`npm run dev`, `npm run build`)
- `dependencies`: was die Seite braucht (react, react-dom)
- `devDependencies`: Werkzeuge für die Entwicklung (Vite, TypeScript, Linter)
- `npm install` lädt alles in den Ordner `node_modules`

## Ablauf
`index.html` → `main.tsx` → `App.tsx` → eigene Komponenten

## JSX-Regeln
- Der Name einer Komponente beginnt mit einem Großbuchstaben
- Genau ein Wurzelelement
- Alle Tags müssen geschlossen werden
- `className` statt `class`

## Git nach jedem Schritt
`git add .` → `git commit -m "..."` → `git push`
