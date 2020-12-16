import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameListFilterComponent } from './game-list/filter/game-list-filter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameListActionsComponent } from './game-list/actions/game-list-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameListFilterComponent,
    GameListActionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
