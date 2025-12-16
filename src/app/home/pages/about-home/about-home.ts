import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

interface Value {
  title: string;
  description: string;
  svgPath: string;
}

@Component({
  selector: 'app-about-home',
  imports: [CommonModule],
  templateUrl: './about-home.html',
  standalone: true,

  styleUrl: './about-home.css',
})
export class AboutHome implements OnInit {
  isVisible = false;
  values: Value[] = [
    {
      title: 'Confidencialidad',
      description: 'Protegemos la información de nuestros clientes con los más altos estándares de seguridad y privacidad.',
      svgPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Servicio',
      description: 'Atención personalizada y cercana que supera las expectativas de nuestros clientes en cada interacción.',
      svgPath: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Compromiso',
      description: 'Dedicados al crecimiento y desarrollo sostenible de nuestras comunidades y clientes.',
      svgPath: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'
    },
    {
      title: 'Respeto',
      description: 'Valoramos la dignidad y los derechos de cada persona con la que interactuamos diariamente.',
      svgPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
    },
    {
      title: 'Dinamismo',
      description: 'Adaptamos nuestros servicios a las necesidades cambiantes del mercado y nuestros clientes.',
      svgPath: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Lealtad',
      description: 'Construimos relaciones duraderas basadas en la confianza mutua y el respeto recíproco.',
      svgPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Responsabilidad',
      description: 'Actuamos con integridad y asumimos las consecuencias de nuestras acciones y decisiones.',
      svgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: 'Honestidad',
      description: 'Transparencia y verdad en todas nuestras operaciones y comunicaciones con los clientes.',
      svgPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }
}
