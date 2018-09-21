import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexHomeRoutingModule } from './pokedex-home-routing.module';
import { AppBootstrapModule } from './../app-bootstrap/app-bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PokedexHomeComponent } from './containers/pokedex-home.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonSearchPipe } from './pipes/pokemon-search.pipe';


@NgModule({
  imports: [
    CommonModule,
    PokedexHomeRoutingModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PokedexHomeComponent,
    PokemonListComponent,
    PokemonSearchComponent,
    PokemonSearchPipe
  ]
})
export class PokedexHomeModule { }
