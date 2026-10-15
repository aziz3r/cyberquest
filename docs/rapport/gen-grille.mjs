// Genere grille.tikz.tex (figure 2.4 du rapport) a partir de la carte du jeu.
// Usage : node gen-grille.mjs > grille.tikz.tex   (depuis docs/rapport/)
import { NETWORK_MAP, MACHINE_POSITIONS, GHOST_SPAWN, MAP_COLS, MAP_ROWS } from '../../frontend/src/map.js';

const couleur = { kali: 'cyan!55', webserver: 'blue!45', mailserver: 'orange!60', aicore: 'green!50!black!45', mainframe: 'red!55' };
const libelle = { kali: 'Kali', webserver: 'AD', mailserver: 'Web', aicore: 'AI\\_CORE', mainframe: 'Mainframe' };

let out = '';
for (let r = 0; r < MAP_ROWS; r++) for (let c = 0; c < MAP_COLS; c++) {
  if (NETWORK_MAP[r][c] === 0) out += `\\fill[black!8] (${c},${-r}) rectangle ++(1,-1);\n`;
}
for (const [id, p] of Object.entries(MACHINE_POSITIONS)) {
  out += `\\fill[${couleur[id]}] (${p.col},${-p.row}) rectangle ++(${p.w},${-p.h});\n`;
  out += `\\node[font=\\scriptsize\\bfseries] at (${p.col + p.w / 2},${-(p.row + p.h / 2)}) {${libelle[id]}};\n`;
}
out += `\\node[circle,fill=black,inner sep=1.4pt] at (${GHOST_SPAWN.col + 0.5},${-(GHOST_SPAWN.row + 0.5)}) {};\n`;
out += `\\draw[black!35,very thin] (0,0) grid[step=1] (${MAP_COLS},${-MAP_ROWS});\n`;
out += `\\draw[thick] (0,0) rectangle (${MAP_COLS},${-MAP_ROWS});\n`;
console.log(out);
