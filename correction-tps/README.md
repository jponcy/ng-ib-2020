Correction TPs
==============

Explications additionels des corrections
-----------------------------------------

### IHM

Organisations possibles pour nos deux composants :
1. creation de base
app
  game-list
    game-list.component.ts
    game-list.component.html
    game-list.component.scss
    game-list.component.spec.ts
  game-list-filter
    game-list-filter.component.ts
    game-list-filter.component.html
    game-list-filter.component.scss
    game-list-filter.component.spec.ts

1. filter en tant que sous composant de list (sous repertoire)
app
  game-list
    game-list.component.ts
    game-list.component.html
    game-list.component.scss
    game-list.component.spec.ts
    game-list-filter
      game-list-filter.component.ts
      game-list-filter.component.html
      game-list-filter.component.scss
      game-list-filter.component.spec.ts

1. sous-repertoire + flat + -s
app
  game-list
    game-list.component.ts
    game-list.component.html
    game-list.component.scss
    game-list.component.spec.ts
    game-list-filter.component.ts
    game-list-filter.component.html
    game-list-filter.component.spec.ts

Il y a bien plus de possibilites d'organisation que ça (example : https://www.jhipster.tech/using-angular/).
Pour la correction, j'ai choisi la troisieme option :
```bash
ng generate component game-list
ng g c game-list/game-list-filter -s --flat
## il est possible aussi d'utiliser un outil graphique comme celui intégré a vscode.

## Installation de bootstrap (avec surcouche angular).
ng add @ng-bootstrap/ng-bootstrap
```


Liens utiles
------------

### Divers

* Emmet (création rapide de contenu HTML) : https://emmet.io/

### CSS

* Flexbox : https://www.alsacreations.com/tuto/lire/1493-css3-flexbox-layout-module.html
* Grid layout : https://www.w3schools.com/css/css_grid.asp
* Media query : https://www.alsacreations.com/article/lire/930-css3-media-queries.html
* Bootstrap
** https://getbootstrap.com/
** Grid : https://getbootstrap.com/docs/4.0/layout/grid/
** Passage 3 &rarr; 4 : https://getbootstrap.com/docs/4.0/migration/

### Angular

* sous-formulaires (nested form)
* routing ++ (passage de data)
* pipes
* services (tp - plutôt pour ceux qui veulent faire plus que du maquetage/integration)
* création de modules (intéressant dans une démarche de maîtrise du framework - pas prioritaire)
* tests unitaires+e2e (intéressant dans une démarche qualité)
* icons bootstrap
* intégrer/utiliser angular/material
