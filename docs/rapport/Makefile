# Compilation du rapport.
#
# Avec une installation TeX Live (pdflatex) :
#     make
#
# Avec Tectonic (installation minimale, telecharge les paquets a la demande) :
#     make tectonic
#
# Le rapport a ete compile et verifie avec Tectonic ; la cible pdflatex suit
# la meme preambule que le rapport de revision-planner mais n'a pas ete testee.

PDF := rapport.pdf
TEX := rapport.tex

$(PDF): $(TEX) grille.tikz.tex
	pdflatex -interaction=nonstopmode -halt-on-error $(TEX)
	pdflatex -interaction=nonstopmode -halt-on-error $(TEX)

.PHONY: tectonic grille clean
tectonic:
	tectonic -X compile $(TEX)

# Regenere la figure de la carte a partir de frontend/src/map.js
grille:
	node gen-grille.mjs > grille.tikz.tex

clean:
	rm -f rapport.aux rapport.log rapport.out rapport.toc rapport.lof rapport.lot
