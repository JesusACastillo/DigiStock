import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-start',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './start.html',
  styleUrl: './start.scss',
})
export class Start {

}
