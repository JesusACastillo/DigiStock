import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatIconModule,
    MatListModule,
    FontAwesomeModule   
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  faXTwitter = faXTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram
  faLinkedin = faLinkedin;
}