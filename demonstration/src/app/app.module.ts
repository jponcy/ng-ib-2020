import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TodoFormComponent, TodoListComponent } from './todo';
import { TodoFormReactiveComponent } from './todo/todo-form-reactive/todo-form-reactive.component';
import { TodoFormTplDrivenFormComponent } from './todo/todo-form-tpl-driven-form/todo-form-tpl-driven-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    FirstComponentComponent,
    TodoFormTplDrivenFormComponent,
    TodoFormReactiveComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,

    AppRoutingModule,     // Importation du RouterModule avec notre onfiguration.

    FormsModule,          // Module a importer pour pouvoir utiliser les TEMPLATE-DRIVEN forms.
    ReactiveFormsModule   // Module a importer pour pouvoir utiliser les REACTIVE forms.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
