import { Routes } from '@angular/router';
import {DetailQuote} from './cotizacion/detail-quote/detail-quote';
import {HomeSite} from './home/home-site/home-site';


export const routes: Routes = [
  {
    path: '',
    component: HomeSite,
    title: 'Fincrece | Inicio' // Título que sale en la pestaña del navegador
  },
  {
    path: 'cotizar-detalle',
    component: DetailQuote,
    title: 'Cotiza tu Crédito'
  },
  {

    path: '**',
    redirectTo: ''
  }
];
