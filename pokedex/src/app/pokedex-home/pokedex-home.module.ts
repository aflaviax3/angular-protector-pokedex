import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexHomeRoutingModule } from './pokedex-home-routing.module';
import { AppBootstrapModule } from './../app-bootstrap/app-bootstrap.module';

import { PokedexHomeComponent } from './containers/pokedex-home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';


@NgModule({
  imports: [
    CommonModule,
    PokedexHomeRoutingModule,
    AppBootstrapModule
  ],
  declarations: [
    PokedexHomeComponent,
    PokemonListComponent
  ]
})
export class PokedexHomeModule { }
