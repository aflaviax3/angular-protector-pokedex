import { Component, OnInit } from '@angular/core';
import { AllPokemon, ListedPokemon } from './../models/all-pokemon.model';
import { PokedexService } from '../../core/services/pokedex.service';

@Component({
  selector: 'app-pokedex-home',
  template: `
  <div *ngIf="pokemonList?.length" class="pt-4">
    <app-pokemon-search (searchQuery)="queryReceiver($event)"></app-pokemon-search>
    <app-pokemon-list [pokemonList]="pokemonList" [pokemonQuery]="pokemonQuery"></app-pokemon-list>
  </div>
  `,
  styleUrls: ['./pokedex-home.component.css']
})
export class PokedexHomeComponent implements OnInit {

  pokemonList: ListedPokemon[];
  pokemonQuery: string;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getAllPokemon()
      .subscribe((data: AllPokemon) => {
        this.pokemonList = data.results;
        console.log(data);
    });
  }

  queryReceiver(search) {
    this.pokemonQuery = search;
    console.log('Foi emitido o evento e chegou no pai >>>> ', search);
  }

}
