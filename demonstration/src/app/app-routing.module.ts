import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponentComponent } from './first-component/first-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo';

// const gameShopRoutes: Routes = [
//   { path: 'games/new',        component: GameFormComponent },
//   { path: 'games/:id/edit',   component: GameFormComponent },
//   { path: 'games',            component: GameListComponent },

//   {
//     path: 'games',
//     children: [
//       { path: 'new',          component: GameFormComponent },
//       { path: ':id/edit',     component: GameFormComponent },
//       { path: '',             component: GameListComponent,   pathMatch: 'full' }
//     ]
//   }
// ];

const routes: Routes = [{
  path: 'todos',
  // path: 'todos/:id',
  component: TodoListComponent
}, {
  path: 'tests',
  component: FirstComponentComponent
}, {
  path: '',
  redirectTo: 'todos',
  pathMatch: 'full'
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [
    // Recuperer les outils pour simuler une application multi-pages (routerLink, Router, ActivatedRoute, ...).
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
