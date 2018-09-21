import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailRoutingModule } from './pokemon-detail-routing.module';
import { AppBootstrapModule } from '../app-bootstrap/app-bootstrap.module';
import { CoreModule } from './../core/core.module';

import { PokemonDetailComponent } from './containers/pokemon-detail.component';
import { PokemonSpritesComponent } from './components/pokemon-sprites/pokemon-sprites.component';
import { PokemonTypeComponent } from './components/pokemon-type/pokemon-type.component';

@NgModule({
  imports: [
    CommonModule,
    PokemonDetailRoutingModule,
    AppBootstrapModule,
    CoreModule
  ],
  declarations: [
    PokemonDetailComponent,
    PokemonSpritesComponent,
    PokemonTypeComponent
  ]
})
export class PokemonDetailModule { }
