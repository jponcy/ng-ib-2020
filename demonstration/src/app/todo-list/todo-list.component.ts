import { Component, OnInit } from '@angular/core';

interface Todo {
  name: string;
  finished: boolean;
}

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

}
