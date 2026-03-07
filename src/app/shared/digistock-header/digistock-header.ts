import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-digistock-header',
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './digistock-header.html',
  styleUrl: './digistock-header.scss',
})
export class DigistockHeader {

}
