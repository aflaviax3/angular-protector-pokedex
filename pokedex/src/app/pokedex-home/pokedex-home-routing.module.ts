import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexHomeComponent } from './containers/pokedex-home.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexHomeRoutingModule { }
