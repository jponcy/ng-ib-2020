import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
    Organisations possibles pour nos deux composants :
    1) creation de base
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

    2) filter en tant que sous composant de list (sous repertoire)
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

    3) sous-repertoire + flat + -s
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
    Pour la correction, j'ai choisi la troisieme option.
   */
}
