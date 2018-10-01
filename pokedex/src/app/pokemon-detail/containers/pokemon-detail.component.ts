import { PokemonSprites } from './../models/pokemon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokedexService } from '@core/services/pokedex.service';
import { Location } from '@angular/common';

import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  template: `
  <div class="container h-100 pt-5">
    <h1 class="pt-4 text-center" *ngIf="pokemonSprites">{{pokemonName}}</h1>
    <app-pokemon-sprites [pokemonSprites]="pokemonSprites"></app-pokemon-sprites>
    <app-pokemon-type [pokemonTypes]="pokemonTypes"></app-pokemon-type>
    <p>{{pokemonDescription}}</p>
    <button type="button" class="btn btn-dark" (click)="goBack()">< Back</button>
  </div>
  `,
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  public pokemonId;
  public pokemonName;
  public pokemonSprites;
  public pokemonTypes;
  public pokemonDescription;

  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe( params => this.pokemonId = params["id"] );

    this.pokedexService.getPokemon(this.pokemonId)
      .subscribe((data: Pokemon) => {
        this.pokemonName = data.name;
        this.pokemonSprites = data.sprites;
        this.pokemonTypes = data.types;
        console.log(data);
      },
      err => {
          console.log(err);
      },
      () => {
          this.pokedexService.getPokemonDescription(this.pokemonId)
            .subscribe((data)=> {
              this.pokemonDescription = data.flavor_text
              console.log(data);
            }); 
        }
    );
  }

  goBack(): void {
    this.location.back();
  }

}
