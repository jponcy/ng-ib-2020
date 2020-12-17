import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

import { GameListFilter } from '../models';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styles: [
  ]
})
export class GameListFilterComponent {

  filterData: GameListFilter = { name: null, genre: null, editor: null };

  @Output()
  filter = new EventEmitter<GameListFilter>();

  constructor() { }

  onSubmit(): void {
    this.emitFilter();
  }

  onReset(): void {
    this.filterData = { name: null, genre: null, editor: null };
    this.emitFilter();
  }

  private emitFilter(): void {
    // this.filter.emit(this.filterData);
    this.filter.emit({
      name: (this.filterData.name || '').trim().toLowerCase(),
      genre: this.filterData.genre,
      // editor: this.filterData.editor ? this.filterData.editor.trim() : null
      editor: (this.filterData.editor || '').trim().toLowerCase()
    });
  }
}
