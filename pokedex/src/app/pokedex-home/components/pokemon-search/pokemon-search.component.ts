import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  @Output() searchQuery = new EventEmitter();

  public query: string;

  constructor() { }

  ngOnInit() {
  }

  onKey(value: string) {
    this.query = value;
    this.searchQuery.emit(this.query);
    console.log('resposta', this.searchQuery.emit(this.query));
  }



}
