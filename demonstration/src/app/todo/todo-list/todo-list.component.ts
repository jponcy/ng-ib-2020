import { Component, OnInit } from '@angular/core';

import { Todo } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  img = 'https://fakeimg.pl/300/';

  todos: Todo[] = [
    { name: 'Apprendre à créer un projet Angular', finished: true },
    { name: 'Apprendre à faire une condition avec ngIf', finished: true },
    { name: 'Apprendre à faire une boucle ngFor', finished: false },
    { name: 'Apprendre à mapper une propriété', finished: false },
    { name: 'Installer bootstrap', finished: false },
    { name: 'S\'initier à bootstrap', finished: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onLabelClick(todo: Todo): void {
    window.alert('On a cliqué sur ' + todo.name);
  }

  onTodoCreate(todo: Todo): void {
    this.todos.push(todo);
  }
}
