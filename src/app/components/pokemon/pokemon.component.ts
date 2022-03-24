import {Component, Inject, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../models/Pokemon";
import {PokemonsService} from "../../services/pokemons.service";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {

  @Input() public pokemon: Pokemon | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
