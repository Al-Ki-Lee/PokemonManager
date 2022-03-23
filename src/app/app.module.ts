import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { GenerationsComponent } from './components/generations/generations.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    GenerationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
