import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-digistock-pricing',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './digistock-pricing.html',
  styleUrl: './digistock-pricing.scss'
})
export class DigistockPricing {
}
