import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})
export class PokemonFormComponent implements OnInit {

  types: string[];
  ngOnInit() {
    // PokemonTypeList
  }

  hasType() {

  }

  selectType() {

  }

  onSubmit() {

  }
}
