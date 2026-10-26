# Portfolio — React + Vite + Tailwind CSS

Portfolio frontend animé en thème sombre violet/bleu, prêt pour GitHub Pages.

## Prérequis
- Node.js 22 LTS, npm et Git.

## Lancer en local
```bash
npm install
npm run dev
```
Contrôles avant publication :
```bash
npm run lint
npm run build
npm run preview
```

## Personnaliser
Modifie `src/data.js` pour mettre à jour ton nom, e-mail, liens, compétences, projets et parcours. Les URL GitHub sont fictives et doivent être remplacées.
Place ton CV dans `public/documents/cv.pdf`.

## Configurer GitHub Pages
1. Crée un dépôt GitHub, par exemple `portfolio-react-vite`.
2. Dans `vite.config.js`, définis `base: '/NOM-DU-DEPOT/'`. Pour un dépôt spécial `TON-PSEUDO.github.io`, utilise `base: '/'`.
3. Dans GitHub : **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Pousse le code sur la branche `main`.
5. Surveille **Actions**. Après succès, l’URL apparaît dans **Settings → Pages**.

## Premier push
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/portfolio-react-vite.git
git push -u origin main
```
Remplace `TON-PSEUDO` et le nom du dépôt. Si Git est déjà initialisé, vérifie `git remote -v` avant d’ajouter le remote.

Le workflow vérifie le code, lance le build et déploie `dist` automatiquement à chaque push sur `main`. Les pull requests sont vérifiées sans publier le site.

## Limites
GitHub Pages héberge seulement le frontend statique, pas FastAPI. Le contact utilise `mailto:` et n'enregistre pas les messages. Les polices Google nécessitent une connexion réseau.
