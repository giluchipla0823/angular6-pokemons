import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-types',
  templateUrl: './pokemon-types.component.html',
  styles: []
})
export class PokemonTypesComponent {

  @Input('types') types: any;

  constructor() {}

}
