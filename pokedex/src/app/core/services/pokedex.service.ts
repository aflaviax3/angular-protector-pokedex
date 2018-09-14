import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllPokemon } from '../../pokedex-home/models/all-pokemon.model';
import { Pokemon } from '../../models/pokemon.model';

@Injectable()

export class PokedexService {

  private pokemons: any[];
  private pokemonSpecies: any[];
  private pokemonEvolutions: any[];
  private pokemonTypes: any[];
  private pokemonAbilities: any[];

  private moves: any[];

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://pokeapi.co/api/v2';
  }

  getAllPokemon() {
      return this.http.get<AllPokemon>(this.baseUrl  + '/pokemon/?limit=1000');
  }

  getPokemon(pokemonName: string) {
      return this.http.get<Pokemon>(this.baseUrl  + '/pokemon/'+ pokemonName);
  }
}
