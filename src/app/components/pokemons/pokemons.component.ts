import {Component, Inject, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon";
import {Category} from "../../models/enums/Category";
import {Type} from "../../models/enums/Type";
import {PokemonsService} from "../../services/pokemons.service";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {

  public pokemons: Pokemon[];

  constructor(@Inject(PokemonsService) private pokemonService: PokemonsService) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {
  }

}
