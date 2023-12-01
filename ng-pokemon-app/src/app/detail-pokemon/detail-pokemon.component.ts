import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { POKEMONS } from '../mock-pokemons-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DetailPokemonComponent],
  styleUrls: ['./detail-pokemon.component.css'],
  templateUrl: './detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;
  
  constructor(private route: ActivatedRoute) {}
    
  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
 
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    } else {
      this.pokemon = undefined;
    }
   
  }
}
