import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GameListActionsComponent } from './game-list/actions/game-list-actions.component';
import { GameListFilterComponent } from './game-list/filter/game-list-filter.component';
import { GameFormComponent } from './game-list/form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListFilterComponent,
    GameListActionsComponent,
    GameFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    GameFormComponent
  ]
})
export class AppModule { }
