import { Component, OnInit, Input } from '@angular/core';
import { ListedPokemon } from '../../models/all-pokemon.model';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit{
  
  @Input()
  pokemonList: ListedPokemon[];

  public pokemonListPage: ListedPokemon[];
 
  ngOnInit(): void {
    this.pokemonListPage = this.pokemonList.slice(0, 10);
  }
 
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.pokemonListPage = this.pokemonList.slice(startItem, endItem);
  }

}
