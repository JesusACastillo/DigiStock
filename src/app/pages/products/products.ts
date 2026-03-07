import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [MatIconModule, RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

}
