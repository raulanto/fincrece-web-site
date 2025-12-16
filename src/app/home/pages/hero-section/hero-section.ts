import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavHero } from '../../components/nav-hero/nav-hero';

interface HeroImage {
  src: string;
  title: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, NavHero, NgOptimizedImage],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css'],
})
export class HeroSection {

// Imágenes para la columna IZQUIERDA
  leftImages = [
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop', title: 'Infraestructura' },
    { src: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop', title: 'Finanzas' },
    { src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2070&auto=format&fit=crop', title: 'Inversión' },
    { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', title: 'Corporativo' }
  ];

  // Imágenes para la columna DERECHA
  rightImages = [
    { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop', title: 'Contabilidad' },
    { src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop', title: 'Negocios' },
    { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop', title: 'Equipo' },
    { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop', title: 'Estrategia' }
  ];
}
