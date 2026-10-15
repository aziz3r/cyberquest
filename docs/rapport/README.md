# Rapport technique

[`rapport.pdf`](rapport.pdf) — 45 pages : contexte et objectifs, présentation du
jeu, technologies, architecture des deux branches (`master` client-serveur et
`proof-of-concept` autonome), moteur de jeu, contenu pédagogique (Active
Directory, failles web, Linux, prompt injection), intelligence artificielle,
sécurité, état réel du projet au 15 octobre 2026, gestion de projet, bilan.
Annexes : glossaire, commandes simulées, références.

## Recompiler

Avec Tectonic (celui utilisé pour vérifier le rapport) :

```bash
make tectonic
```

Avec une installation TeX Live :

```bash
make
```

## Fichiers

| Fichier | Rôle |
|---------|------|
| `rapport.tex` | source du rapport |
| `grille.tikz.tex` | figure de la carte, générée par `gen-grille.mjs` |
| `gen-grille.mjs` | régénère la grille à partir de `frontend/src/map.js` (`make grille`) |
| `figures/` | captures d'écran du jeu |

## Origine des captures

Les captures de `figures/` sont extraites de la vidéo de démonstration
(`../demo/demo-cyberquest.mp4`), qui montre la branche `master`. Instants utilisés
(en secondes) : `login` 3, `landing` 25, `ad-carte` 118, `ad-terminal` 102,
`mentor` 92, `linux` 142, `carte` 162, `web` 212, `llm` 282, `mainframe` 312.

```bash
ffmpeg -ss 162 -i ../demo/demo-cyberquest.mp4 -frames:v 1 -q:v 3 figures/carte.jpg
```
