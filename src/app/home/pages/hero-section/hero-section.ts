import { Component } from '@angular/core';
import {NavHero} from '../../components/nav-hero/nav-hero';

@Component({
  selector: 'app-hero-section',
  imports: [
    NavHero
  ],
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

}
