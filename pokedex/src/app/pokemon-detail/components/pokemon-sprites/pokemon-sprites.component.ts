import { Component, OnInit, Input } from '@angular/core';
import { PokemonSprites } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-sprites',
  templateUrl: './pokemon-sprites.component.html',
  styleUrls: ['./pokemon-sprites.component.css']
})
export class PokemonSpritesComponent implements OnInit {

  @Input()
  pokemonSprites: PokemonSprites;

  ngOnInit() {
  }

  get spriteFront() {
    return this.pokemonSprites.front_default;
  }

  get spriteBack() {
    return this.pokemonSprites.back_default;
  }
}
