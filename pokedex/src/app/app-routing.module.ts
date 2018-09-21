import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'pokemon-list', 
    loadChildren: './pokedex-home/pokedex-home.module#PokedexHomeModule'  
  },
  { 
    path: 'pokemon-detail/:id', 
    loadChildren: './pokemon-detail/pokemon-detail.module#PokemonDetailModule'
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
