import { Component, OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemons-list';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PageNotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Utilisation de "styleUrls" au lieu de "styleUrl"
})
export class AppComponent {
  title = 'Pokémons';
}
