import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-first-component></app-first-component>
    <hr>
    <app-todo-list></app-todo-list>
  `,
  styles: []
})
export class AppComponent {
}
