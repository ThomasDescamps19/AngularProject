import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
// import { POKEMONS } from '../mock-pokemons-list';
import { Router, RouterOutlet } from '@angular/router';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
// import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
  ],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  pokemonSelected: Pokemon | undefined;
  Message: string = '';

  constructor(private router: Router,
    private pokemonService: PokemonService) 
    { }

    ngOnInit(){
      this.pokemonList = this.pokemonService.getPokemonList();
    } 

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }

  selectPokemon(pokemon: Pokemon) {
    this.Message = `Vous avez cliqué sur le Pokémon ${pokemon.name}`;
  }
}
