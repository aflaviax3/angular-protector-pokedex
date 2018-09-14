import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from './../models/pokemon.model';
import { PokedexService } from '../core/services/pokedex.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  public pokemon;
  private pokemonName;

  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.params.subscribe( params => this.pokemonName = params["id"] );
    this.pokedexService.getPokemon(this.pokemonName)
      .subscribe((data: Pokemon) => {
        this.pokemon = data.name;
        console.log(data);
    });
  }

}
