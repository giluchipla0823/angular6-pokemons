import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // BASE_URL: string = 'http://pokeapi.co/api/v2/';
  BASE_URL: string = '/api/v2/';
  // URL_BASE: string = 'http://pokeapi.co/api/v2/pokemon/?limit=811';

  constructor(private http: Http) { }

  getPokemons() {
    const url = `${ this.BASE_URL }pokemon/?limit=10`;

    return this.http.get(url)
               .map( (response: any) =>  {
                  const json = response.json();
        
                  return json.results;
               });
  }


  private _transformUrl(url): string{
    return url.replace('http://pokeapi.co/api/v2/', this.BASE_URL);;
  }

  async collectionData(results) {
    const data: any[] = [];

    for(let item of results){
        let pokemon = await this.getPokemonInfoByUrl(item.url);


        // console.log('pokemon: ' + pokemon.name, pokemon);

        pokemon = await this.tranformaData(pokemon);

        // console.log('tranformaData: ' + pokemon.name, pokemon);

        data.push(pokemon);
    }

    return data;
  }

  async tranformaData(pokemon) {
    const specie = await this.getPokemonInfoByUrl(pokemon.species.url);
    const flavor_text_entries = specie.flavor_text_entries
    const descriptions = flavor_text_entries.filter( (item) => {
      return item.language.name === 'es';
    });

    pokemon.descriptions = descriptions;

    return pokemon;
  }

  async getPokemonInfoByUrl(url: string): Promise<any> {
    url = this._transformUrl(url);

    const response = await this.http.get(url).toPromise();

    return response.json();
  }

  getPokemonById(id: number){
    const url = `${ this.BASE_URL }pokemon/${ id }`;

    return this.http.get(url)
               .map(response => response.json());
  }
}
