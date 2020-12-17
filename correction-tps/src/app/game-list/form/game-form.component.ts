import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { Game } from '../models';

@Component({
  selector: 'app-todo-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent {

  @Output()
  readonly create = new EventEmitter<Game>();

  readonly form = this.fb.group({
    id: null,
    name: [null, Validators.required],
    editor: [null, Validators.required],
    genre: [null, Validators.required],
    coverImg: null,
    description: null,
    note: null
  });

  constructor(private readonly fb: FormBuilder) { }

  get name(): AbstractControl {
    return this.form.controls.name;
  }

  get editor(): AbstractControl {
    return this.form.controls.editor;
  }

  get genre(): AbstractControl {
    return this.form.controls.genre;
  }

  get isNew(): boolean {
    return !this.form.controls.id.value;
  }

  setGame(game: Game): void {
    this.form.patchValue(game);
  }

  onSubmit(): void {
    this.create.emit(this.form.value);
  }
}
