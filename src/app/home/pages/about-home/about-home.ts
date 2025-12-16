import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Value} from '../../../shared/models/value.interface';



@Component({
  selector: 'app-about-home',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about-home.html',
  standalone: true,

  styleUrl: './about-home.css',
})
export class AboutHome implements OnInit {
  isVisible = false;
  values = [
    {
      title: 'Transparencia',
      description: 'Claridad absoluta. Sin letras chiquitas ni costos ocultos en tus contratos.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Innovación',
      description: 'Procesos ágiles y digitales para darte respuesta cuando más lo necesitas.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Empatía',
      description: 'Entendemos que detrás de cada solicitud hay una familia y un sueño.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      title: 'Seguridad',
      description: 'Tus datos y recursos protegidos con los más altos estándares bancarios.',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
    },
    {
      title: 'Pasión',
      description: 'Nos levantamos cada día con el objetivo de impulsar tu crecimiento.',
      icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Sostenibilidad',
      description: 'Fomentamos decisiones financieras que cuidan tu futuro a largo plazo.',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064'
    }
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 100);
  }
}
