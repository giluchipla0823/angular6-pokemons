import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(private _pokemonService: PokemonService) {
    this._pokemonService.getPokemons()
        .subscribe((data: any) => {
            const response = this._pokemonService.collectionData(data);

            response.then( (items: any) => {
              this.pokemons = items;
            });
        });
  }

  ngOnInit() {
  }

}
