import { Component } from '@angular/core';
import {AboutHome} from "../pages/about-home/about-home";
import {ContactMap} from "../pages/contact-map/contact-map";
import {FooterExpand} from "../components/footer-expand/footer-expand";
import {FundingSection} from "../pages/funding-section/funding-section";
import {HeroPage} from "../hero-page/hero-page";
import {HeroQuote} from "../components/hero-quote/hero-quote";
import {NavInternal} from "../components/nav-internal/nav-internal";
import {PartnersFloat} from "../components/partners-float/partners-float";
import {ProductsGrid} from "../components/products-grid/products-grid";
import {ScrollFeatures} from "../components/scroll-features/scroll-features";
import {ComsumoEmpresarial} from '../pages/comsumo-empresarial/comsumo-empresarial';

@Component({
  selector: 'app-home-site',
  imports: [
    AboutHome,
    ContactMap,
    FooterExpand,
    FundingSection,
    HeroPage,
    NavInternal,
    PartnersFloat,
    ProductsGrid,
    ScrollFeatures,
    ComsumoEmpresarial
  ],
  templateUrl: './home-site.html',
  styleUrl: './home-site.css',
})
export class HomeSite {

}
