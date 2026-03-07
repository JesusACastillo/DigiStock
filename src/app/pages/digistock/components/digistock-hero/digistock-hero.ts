import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-digistock-hero',
  imports: [MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './digistock-hero.html',
  styleUrl: './digistock-hero.scss'
})
export class DigistockHero {
}
