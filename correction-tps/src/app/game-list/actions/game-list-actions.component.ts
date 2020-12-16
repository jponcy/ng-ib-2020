import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-list-actions',
  templateUrl: './game-list-actions.component.html',
  styleUrls: ['./game-list-actions.component.scss']
})
export class GameListActionsComponent implements OnInit {

  // @Input()
  // game: Game;

  @Output()
  actionClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onFollow(): void {
    this.actionClick.emit('follow');
  }

  onShare(): void {
    this.actionClick.emit('share');
  }

  onBuy(): void {
    this.actionClick.emit('buy');
  }
}
