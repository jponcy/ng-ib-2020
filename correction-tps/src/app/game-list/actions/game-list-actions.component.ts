import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { GameListActions } from '../models';

@Component({
  selector: 'app-game-list-actions',
  templateUrl: './game-list-actions.component.html',
  styleUrls: ['./game-list-actions.component.scss']
})
export class GameListActionsComponent implements OnInit {

  // @Input()
  // game: Game;

  @Output()
  actionClick = new EventEmitter<GameListActions>();

  constructor() { }

  ngOnInit(): void {
  }

  onFollow(): void {
    this.actionClick.emit(GameListActions.FOLLOW);
  }

  onShare(): void {
    this.actionClick.emit(GameListActions.SHARE);
  }

  onBuy(): void {
    this.actionClick.emit(GameListActions.BUY);
  }
}
