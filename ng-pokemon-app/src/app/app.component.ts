import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons-list';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Utilisation de "styleUrls" au lieu de "styleUrl"
})
export class AppComponent implements OnInit {
  title = 'Listes de pokémons';
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;
  errorMessage: string = '';

  getTypeColor(pokemon: Pokemon): string {
    const types = pokemon.types;

    if (types) {
      if (types.includes('Plante') && types.includes('Poison')) {
        
        return '#809980';
      }
      if (types.includes('Normal') && types.includes('Vol')) {
        
        return '#7CB3EB';
      }

      // Ajoutez des conditions supplémentaires pour d'autres combinaisons de types si nécessaire...

      // Sinon, retournez la couleur du premier type
      if (types.length > 0) {
        const firstType = types[0].toLowerCase();
        switch (firstType) {
          case 'feu':
            return 'red';
          case 'plante':
            return 'green';
          case 'eau':
            return '#add8e6';
          case 'normal':
            return 'grey';
          case 'fée':
            return '#FD6C9E';
          case 'electrik':
            return 'yellow';
          case 'poison':
            return 'violet';
          // Ajoutez d'autres cas au besoin...
          default:
            return '#ccc'; // Couleur par défaut
        }
      }
    }

    return '#ccc'; // Aucune correspondance, couleur par défaut
  }

  ngOnInit() {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[5]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le Pokémon ${pokemon.name}`);
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
