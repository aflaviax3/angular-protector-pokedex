import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexService } from './services/pokedex.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PokedexService
  ]
})
export class CoreModule { }
