import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'header-container'
  }
})
export class Header {
  
}