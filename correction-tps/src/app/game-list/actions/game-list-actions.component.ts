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
  follow = new EventEmitter<void>();

  @Output()
  share = new EventEmitter<void>();

  @Output()
  buy = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onFollow(): void {
    this.follow.emit();
  }

  onShare(): void {
    this.share.emit();
  }

  onBuy(): void {
    this.buy.emit();
  }
}
