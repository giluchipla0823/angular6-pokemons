import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {


  pokemon: any;

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) {
  	this.route.params.subscribe(params => {
  		console.log('routeParams', params);

    	this._pokemonService.getPokemonById(params['id'])
    		.subscribe( (pokemon: any) => {
    			const response = this._pokemonService.tranformaData(pokemon);

    			response.then( (data: any) => {
    			  console.log(data);	
	              this.pokemon = data;
	            });
    		});
    })

  }

  ngOnInit() {
  }

}
