import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-digistock-footer',
  imports: [RouterModule, MatIconModule],
  templateUrl: './digistock-footer.html',
  styleUrl: './digistock-footer.scss'
})
export class DigistockFooter {
}
