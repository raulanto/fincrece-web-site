import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroSection} from './home/hero-section/hero-section';
import {NavHero} from './home/components/nav-hero/nav-hero';
import {AboutHome} from './home/about-home/about-home';
import {NavInternal} from './home/components/nav-internal/nav-internal';
import {HeroPage} from './home/hero-page/hero-page';
import {PartnersFloat} from './home/partners-float/partners-float';
import {ScrollFeatures} from './home/scroll-features/scroll-features';
import {FundingSection} from './home/funding-section/funding-section';

@Component({
  selector: 'app-root',
  imports: [AboutHome, NavInternal, HeroPage, PartnersFloat, ScrollFeatures, FundingSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'fincrece-web-site';
}
