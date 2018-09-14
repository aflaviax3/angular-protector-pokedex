import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { 
    path: 'pokemon-list', 
    loadChildren: './pokedex-home/pokedex-home.module#PokedexHomeModule'  
  },
  { 
    path: 'pokemon-detail/:id', 
    component: PokemonDetailComponent
  },
  { 
    path: '', 
    redirectTo: '/pokemon-list', 
    pathMatch: 'full' 
  }

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {   

}
