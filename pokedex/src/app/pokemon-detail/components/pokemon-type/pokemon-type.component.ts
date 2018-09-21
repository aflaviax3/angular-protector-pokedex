import { Component, OnInit, Input } from '@angular/core';
import { PokemonTypes } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.css']
})
export class PokemonTypeComponent implements OnInit {

  @Input ()
  pokemonTypes: PokemonTypes[];

  constructor() { }

  ngOnInit() {
  }

}
