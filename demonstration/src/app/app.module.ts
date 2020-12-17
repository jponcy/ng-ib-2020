import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodoFormComponent, TodoListComponent } from './todo';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TodoFormTplDrivenFormComponent } from './todo/todo-form-tpl-driven-form/todo-form-tpl-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoFormReactiveComponent } from './todo/todo-form-reactive/todo-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    FirstComponentComponent,
    TodoFormTplDrivenFormComponent,
    TodoFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,          // Module a importer pour pouvoir utiliser les TEMPLATE-DRIVEN forms.
    ReactiveFormsModule   // Module a importer pour pouvoir utiliser les REACTIVE forms.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
