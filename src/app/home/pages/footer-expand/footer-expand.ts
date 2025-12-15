import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer-expand',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-expand.html',
  styleUrl: './footer-expand.css',
})
export class FooterExpand {
  currentYear = new Date().getFullYear();


  socials = ['facebook', 'instagram', 'twitter', 'tiktok', 'youtube'];

  indices = [
    { name: 'Inicio', link: '/' },
    { name: 'Nosotros', link: '#nosotros' },
    { name: 'Productos', link: '#productos' },
    { name: 'Cotiza', link: '#cotiza' }
  ];

  legalLinks = [
    'Aviso de Privacidad',
    'Términos y Condiciones',
    'Reune'
  ];

  productLinks = [
    'Crédito Nómina',
    'Arrendamiento Financiero',
    'Crédito Infraestructura'
  ];

}
