import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Start } from '../start/start';
import { Us } from '../us/us';


@Component({
  selector: 'app-layout',
  imports: [Header,Footer,Start,Us],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
