import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonImage'
})
export class PokemonImagePipe implements PipeTransform {

  transform(value: string, id: number): string {
    if(id == 1 || id == 4 || id == 7){
    	return 'assets/images/pokemons/' + id + '.png';
    }

    return value;
  }

}
