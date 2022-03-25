import {Injectable} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../models/enums/Category";
import {Type} from "../models/enums/Type";
import {RequestGeneration} from "../models/RequestGeneration";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private _pokemons: Pokemon[];

  constructor(private http: HttpClient) {
    this._pokemons = [
      new Pokemon(1, 'Bulbizarre', Category.graine, [Type.plante, Type.poisson], 0.7, 6.9, ''),
      new Pokemon(2, 'Herbizarre', Category.graine, [Type.plante, Type.poisson], 1, 13, ''),
    ];
  }

  public getGeneration() : Observable<RequestGeneration> {
    let request = this.http.get<RequestGeneration>('https://pokeapi.co/api/v2/generation');
    return request;
  }

  public nbPokemon() {
    this._pokemons.length;
  }

  public get pokemons(): Pokemon[] {
    return this._pokemons;
  }
}
