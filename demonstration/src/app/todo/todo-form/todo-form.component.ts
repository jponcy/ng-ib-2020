import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../models';

/** Implementation manuelle du formulaire. */
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: [
  ]
})
export class TodoFormComponent implements OnInit {

  // Definition d'un input facultatif (avec une valeur par defaut).
  @Input()
  visibleFields = ['name', 'finished', 'endedAt'];

  @Output()
  // create = new EventEmitter<void>(); // Juste un evenement, pas de donnee
  create = new EventEmitter<Todo>();

  tempTodo: Todo = { name: null, finished: false, endedAt: null };

  // Definition d'un input obligatoire.
  // @Input()
  // visibleFields: string[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    // TODO: Implement creation using API!
    this.create.emit(this.tempTodo);
    this.tempTodo = { name: null, finished: false, endedAt: null };
  }

  get hasName(): boolean {
    return this.visibleFields.includes('name');
  }

  get hasFinished(): boolean {
    return this.visibleFields.includes('finished');
  }

  get hasEndedAt(): boolean {
    return this.visibleFields.includes('endedAt');
  }

  // onNameChange(value: string): void {
  //   this.tempTodo.name = value;
  // }

  onChange(field: string, value: string): void {
    this.tempTodo[field] = value;
  }

  onFinishedChange(checked: boolean): void {
    this.tempTodo.finished = checked;
  }
}
