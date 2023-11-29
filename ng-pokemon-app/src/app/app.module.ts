// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BorderCardDirective } from './border-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule, // Import de CommonModule pour les directives et pipes communs
    RouterModule.forRoot([
      // Définir vos routes ici si vous utilisez le routage
    ]),
    // ... autres modules nécessaires
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
