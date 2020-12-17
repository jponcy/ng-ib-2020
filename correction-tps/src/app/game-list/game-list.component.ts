import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GameFormComponent } from './form/game-form.component';
import { Game, GameListActions, GameListFilter } from './models';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  private games: Game[] = [{
    id: 1,
    name: 'BattleBlock Theater',
    genre: 'Jeu de plateforme multijoueur',
    coverImg: 'https://steamcdn-a.akamaihd.net/steam/apps/238460/header.jpg?t=1599169670',
    editor: 'The Behemoth',
    description: `
      Shipwrecked. Captured. Betrayed. Forced to perform for an audience of cats?
      Yes, all that and more when you unlock BattleBlock Theater!
      There’s no turning back once you've started on your quest to free over 300 of your
      imprisoned friends from evil technological cats.
      Immerse yourself in this mind bending tale of treachery as you use your arsenal of
      weapon-tools to battle your way through hundreds of levels in order to discover the
      puzzling truth behind BattleBlock Theater.

      If solo acts aren't your style, go online or bring a buddy couch-side to play a thoroughly
      co-optimized quest or enter the arenas. The game also includes a level editor so you can
      craft your own mind bending trials!
    `,
    note: 9.8
  }, {
    id: 2,
    name: 'Castle Crashers®',
    genre: 'action',
    coverImg: 'https://steamcdn-a.akamaihd.net/steam/apps/204360/header.jpg?t=1600880882',
    editor: 'The Behemoth',
    description: `
      Hack, slash, and smash your way to victory in this newly updated edition of the insanely
      popular 2D arcade adventure from The Behemoth! Up to four friends can play locally or
      online and save your princess, defend your kingdom, and crash some castles!<br><br>
      With the new Barbarian Makeover Update, Castle Crashers now delivers uncapped framerate
      and a new Ultra texture quality mode. We even built a new, fast-paced multiplayer
      minigame just for you and your friends!<h2 class="bb_tag">Key Features:</h2><ul class="bb_ul"><li>(NEW!) Back Off Barbarian mini game: Jump and hop across the level
      to avoid the enemies!<br></li><li>Unlock more than 25 characters and over 40 weapons!
      <br></li><li>Intuitive combo and magic system: Unlock an arsenal of new attacks as your character progresses through the game.<br></li><li>Level up your character and adjust
      Strength, Magic, Defense, and Agility.<br></li><li>Adorable animal orbs are your companions. Each adds different abilities to aid you on your journey.<br></li><li>Arena mode:
      Battle other players in free-for-all or team matches!<br></li><li>Insane Mode: Test your skills in the ultimate campaign challenge<br></li><li>Necromantic Pack (includes Necromancer
      and Cult Minion characters) <br></li><li>King Pack (includes The King and Open-Faced
      Gray Knight)<br></li><li>Also includes: Alien Hominid playable character</li></ul><h2 class="bb_tag">Ultra Graphics:</h2>A new optional texture quality setting located in the
      Game Settings Menu.  Once the game has been updated, this mode will not be on by default. Players must go to the Game Settings menu and manually toggle it on.  Please note,
      this setting will not perform the same on all systems. It is intended for use on high spec gaming systems and requires a 64-bit OS. So use at your own risk!
    `,
    note: 8.7
  }];

  filteredGames = [...this.games];

  constructor(private readonly modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.openCreateGameDialog();
  }

  private openCreateGameDialog(gameToEdit: Game = null): void {
    const dialogRef = this.modalService.open(GameFormComponent);

    if (gameToEdit) {
      dialogRef.componentInstance.setGame(gameToEdit);
    }

    dialogRef
        .componentInstance
        .create
        .subscribe(game => {
          if (game.id) {
            this.editGame(this.games, game);
            this.editGame(this.filteredGames, game);
          } else {
            game.id = this.games.length + 1;
            this.games.push(game);
            this.filteredGames.push(game); // On devrait plutot rafraichir le filtre.
          }

          // Le code ici n'est pas tres realiste, car il manque encore le service d'API pour faire la sauvegarde reelle.
          dialogRef.close();
        });
  }

  private editGame(list: Game[], game: Game): void {
    const original = list.find(g => g.id === game.id);

    if (original) {
      list[list.indexOf(original)] = {...game};
    } else {
      throw new Error('Impossible to retrieve the data');
    }
  }

  coverImgAlt(game: Game): string {
    return 'Cover image of' + game.name;
  }

  description(game: Game): string {
    let result: string = null;

    if (game.description) {
      const words = game.description.split(/\s+/);

      if (words.length > 20) {
        result = words.slice(0, 21).join(' ') + '...';

        // result = '';

        // for (let i = 0; i < 20; ++i) {
        //   if (result) {
        //     result += ' ';
        //   }

        //   result += words[i];
        // }

        // result += '...';
      } else {
        result = game.description;
      }
    }

    return result;
  }

  onActionClick(actionType: GameListActions, game: Game): void {
    switch (actionType) {
      case GameListActions.EDIT:
        this.openCreateGameDialog(game);
        break;
      default:
        window.alert(`User '${actionType}' ${game.name}`);
        break;
    }
  }

  onFilter(filter: GameListFilter): void {
    const games = [];

    for (const g of this.games) {
      // Pas besoin de tester si un filtre est renseigne pour name/editor
      // car le sous-composant renvoit au pire une chaine vide.
      // if (!filter.name || g.name.includes(filter.name)) {
      if (g.name.toLowerCase().includes(filter.name)
          && (!filter.genre || g.genre.includes(filter.genre))
          && g.editor.toLowerCase().includes(filter.editor)) {
        games.push(g);
      }
    }

    this.filteredGames = games;
  }
}
