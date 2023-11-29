import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Utilisation de "styleUrls" au lieu de "styleUrl"
})
export class AppComponent implements OnInit {
  title = 'Pokémons';
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  errorMessage: string = '';
  Message: string ='';

  

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[5]);
  }

  selectPokemon(pokemon: Pokemon) {
    this.Message = `Vous avez cliqué sur le Pokémon ${pokemon.name}`;
  }

  findPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (p) => p.id === +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
      this.errorMessage = ''; // Réinitialisez le message d'erreur
    } else {
      this.errorMessage = "Vous avez demandé un pokémon qui n'existe pas";
      this.pokemonSelected = pokemon; // Réinitialisez la valeur si le Pokémon n'est pas trouvé
    }
  }
}
