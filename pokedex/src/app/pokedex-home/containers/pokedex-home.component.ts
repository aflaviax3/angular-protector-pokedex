import { Component, OnInit } from '@angular/core';
import { AllPokemon, ListedPokemon } from './../models/all-pokemon.model';
import { PokedexService } from '../../core/services/pokedex.service';

@Component({
  selector: 'app-pokedex-home',
  template: `
  <div *ngIf="pokemonList.length">
    <app-pokemon-list [pokemonList]="pokemonList"></app-pokemon-list>
  </div>
  `,
  styleUrls: ['./pokedex-home.component.css']
})
export class PokedexHomeComponent implements OnInit {

  pokemonList: ListedPokemon[];

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getAllPokemon()
      .subscribe((data: AllPokemon) => {
        this.pokemonList = data.results;
        console.log(data);
    });
  }

}
