import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { Start } from '../start/start';
import { Us } from '../us/us';

import { MissionVision } from '../mission-vision/mission-vision';
import { Values } from '../values/values';
import { Products } from '../products/products';

@Component({
  selector: 'app-layout',
  imports: [Header,Footer,Start,Us,MissionVision,Values,Products],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

}
