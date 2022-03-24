import { Injectable } from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {Category} from "../models/enums/Category";
import {Type} from "../models/enums/Type";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  public pokemons: Pokemon[];

  constructor() {
    this.pokemons = [
      new Pokemon(1, 'Bulbizarre', Category.graine, [Type.plante, Type.poisson], 0.7, 6.9, ''),
      new Pokemon(2, 'Herbizarre', Category.graine, [Type.plante, Type.poisson], 1, 13, ''),
    ];
  }
}
