import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DigistockHeader } from '../../shared/digistock-header/digistock-header';
import { DigistockHero } from './components/digistock-hero/digistock-hero';
import { DigistockFeatures } from './components/digistock-features/digistock-features';
import { DigistockPricing } from './components/digistock-pricing/digistock-pricing';
import { DigistockFooter } from '../../shared/digistock-footer/digistock-footer';

@Component({
  selector: 'app-digistock',
  imports: [RouterModule, DigistockHeader, DigistockHero, DigistockFeatures, DigistockPricing, DigistockFooter],
  templateUrl: './digistock.html',
  styleUrl: './digistock.scss'
})
export class Digistock {

}
