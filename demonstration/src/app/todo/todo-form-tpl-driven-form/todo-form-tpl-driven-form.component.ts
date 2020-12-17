import { Component, EventEmitter, Output } from '@angular/core';

import { Todo } from '../models';

@Component({
  selector: 'app-todo-form-tpl-driven-form',
  templateUrl: './todo-form-tpl-driven-form.component.html',
  styleUrls: ['./todo-form-tpl-driven-form.component.scss']
})
export class TodoFormTplDrivenFormComponent {

  @Output()
  create = new EventEmitter<Todo>();

  /** Model de notre Todo a creer. Les attributs de cet objet vont etre liee au formulaire HTML. */
  tempTodo: Todo = { name: null, finished: false, endedAt: null };

  onSubmit(): void {
    // TODO: Implement creation using API!
    this.create.emit(this.tempTodo);
    this.tempTodo = { name: null, finished: false, endedAt: null };
  }
}
