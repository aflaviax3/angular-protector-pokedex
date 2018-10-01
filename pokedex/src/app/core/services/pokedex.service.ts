import { PokemonFlavorTextLanguage, PokemonFlavorText } from './../../pokemon-detail/models/pokemon.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AllPokemon } from '../../pokedex-home/models/all-pokemon.model';
import { Pokemon, PokemonDescription } from '../../pokemon-detail/models/pokemon.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getPokemon(pokemonId: string):Observable<Pokemon> {
      return this.http.get<Pokemon>(this.baseUrl  + '/pokemon/'+ pokemonId);
    }
    
  getPokemonDescription(pokemonId: string):Observable<PokemonFlavorText>{
    return this.http.get<PokemonDescription>(this.baseUrl  + '/pokemon-species/'+ pokemonId)
    .pipe(
        map(res  => {
          return res.flavor_text_entries.filter(item => item.language.name === 'en')[0];
        })
    );
  }
}
