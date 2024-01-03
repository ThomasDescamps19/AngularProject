import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
// import { POKEMONS } from '../mock-pokemons-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
  ],
  styleUrls: ['./detail-pokemon.component.css'],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {}

  ngOnInit() {
    
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
      // this.pokemonList.find(
      //   (pokemon) => pokemon.id == +pokemonId
      // );
    } else {
      this.pokemon = undefined;
    }
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }
}
