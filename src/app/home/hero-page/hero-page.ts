import { Component } from '@angular/core';
import {HeroSection} from '../hero-section/hero-section';

@Component({
  selector: 'app-hero-page',
  imports: [
    HeroSection,
  ],
  templateUrl: './hero-page.html',
})
export class HeroPage {

}
