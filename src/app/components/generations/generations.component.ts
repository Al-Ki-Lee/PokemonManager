import {Component, Inject, OnInit} from '@angular/core';
import {PokemonsService} from "../../services/pokemons.service";
import {Observable} from "rxjs";
import {RequestGeneration} from "../../models/RequestGeneration";

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.sass']
})
export class GenerationsComponent implements OnInit {
  public generations$: Observable<RequestGeneration> | undefined;

  constructor(@Inject(PokemonsService) private pokemonService: PokemonsService) {
  }

  ngOnInit(): void {
    this.generations$ = this.pokemonService.getGeneration();
  }

}
