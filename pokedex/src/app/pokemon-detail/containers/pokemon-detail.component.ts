import { PokemonSprites } from './../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PokedexService } from '@core/services/pokedex.service';

import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  template: `
  <div class="container h-100 pt-5">
    <h1 class="pt-4 text-center" *ngIf="pokemonSprites">{{pokemonName}}</h1>
    <app-pokemon-sprites [pokemonSprites]="pokemonSprites"></app-pokemon-sprites>
    <app-pokemon-type [pokemonTypes]="pokemonTypes"></app-pokemon-type>
  </div>
  `,
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  private pokemonName;
  public pokemonSprites;
  public pokemonTypes;

  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe( params => this.pokemonName = params["id"] );
    this.pokedexService.getPokemon(this.pokemonName)
      .subscribe((data: Pokemon) => {
        this.pokemonName = data.name;
        this.pokemonSprites = data.sprites;
        this.pokemonTypes = data.types;
        console.log(data);
    });
  }

}
