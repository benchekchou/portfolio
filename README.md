
# Portfolio Hamza

Ce projet Angular (CLI 19.2.7 avec SSR) sert de portfolio moderne pour présenter les compétences, expériences et projets de Hamza Benchekchou.

## Développement local

1. Installer les dépendances  
   ```bash
   npm install
   ```
2. Lancer le serveur  
   ```bash
   ng serve
   ```
3. Ouvrir [http://localhost:4200](http://localhost:4200)

## Build

```bash
npm run build
```

Le build SSR est généré dans `dist/portfolio-hamza/`.

## Tests

```bash
ng test
```

## Construction du portfolio (étapes)

1. **Initialisation** – `ng new portfolio-hamza --ssr`, nettoyage du template Angular par défaut.  
2. **Données centralisées** – Fichier `src/app/core/data/cv.ts` avec types (Link, Experience, Project, etc.) couvrant identité, compétences, expériences, projets, formation, certifications, contacts.  
3. **Components standalone** – Création des features: `hero`, `skills`, `experience`, `projects`, `education`, `contact`. Chaque composant reçoit les données via inputs et encapsule son HTML/CSS.  
4. **Design & layout** – Thème sombre, header sticky, hero visuel avec photo `public/assets/DSC_90.png`, grilles responsive, timeline expérience, cartes projets. Variables globales dans `src/styles.scss`.  
5. **Responsive/mobile** – Media queries <900px / <640px / <600px pour timeline, boutons, grilles; optimisation mobile (timeline en colonnes, buttons stack).  
6. **Contenus dynamiques** – Navigation auto depuis `cvData`, certifications avec lien de vérification, contact `mailto:`/`tel:`/LinkedIn, CV téléchargeable depuis `public/assets/Hamza-Benchekchou-CV.pdf`.  
7. **Tests & build** – Vérification `ng test`, `npm run build` (SSR) après chaque refactor; correction des erreurs liées à la compilation serveur.  
8. **Docs & déploiement** – README mis à jour, instructions Vercel, rappel pour placer les fichiers dans `public/assets/`, tests manuels sur mobile.

### Structure utile

| Dossier                | Description                                      |
|------------------------|--------------------------------------------------|
| `public/assets/`       | CV, photo, fichiers statiques téléchargeables    |
| `src/app/core/data/`   | Source de données typée du portfolio             |
| `src/app/features/`    | Components standalone par section                |
| `dist/portfolio-hamza` | Build SSR généré (non versionné dans Git)        |
