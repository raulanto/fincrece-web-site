import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
type CategoryType = 'consumo' | 'empresarial';
@Component({
  selector: 'app-comsumo-empresarial',
  imports: [
    NgClass,
    NgOptimizedImage,
    NgForOf,
    NgIf
  ],
  templateUrl: './comsumo-empresarial.html',
  styleUrl: './comsumo-empresarial.css',
})
export class ComsumoEmpresarial {
  activeCategory: CategoryType = 'consumo';

  // DATOS: CRÉDITO DE CONSUMO (Basado en la presentación)
  consumoProducts = [
    {
      title: 'Crédito de Nómina',
      subtitle: 'Efectivo Inmediato',
      desc: 'Préstamos rápidos descontados vía nómina con tasas preferenciales.',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Money Icon
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Movilidad',
      subtitle: 'Autos y Motos',
      desc: 'Financiamiento para la adquisición de motocicletas y vehículos nuevos o seminuevos.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z', // Car/Speed icon placeholder
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Patrimonio',
      subtitle: 'Lotes y Vivienda',
      desc: 'Créditos para adquisición de lotes, construcción de pie de casa y mejoramiento de vivienda.',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', // Home Icon
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Sindicalizado',
      subtitle: 'Beneficios Exclusivos',
      desc: 'Planes diseñados específicamente para trabajadores agremiados con condiciones especiales.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', // Group Icon
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop'
    }
  ];

  // DATOS: EMPRESARIAL (Basado en los sectores del PPT)
  businessSectors = [
    {
      name: 'Sector Primario',
      highlight: 'Recursos Naturales',
      desc: 'Apoyo a actividades de agricultura, ganadería, pesca, silvicultura y minería.',
      details: ['Capital de trabajo', 'Avío', 'Refaccionario'],
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop' // Agriculture
    },
    {
      name: 'Sector Secundario',
      highlight: 'Transformación e Industria',
      desc: 'Financiamiento para construcción, industria manufacturera y proyectos de energía.',
      details: ['Maquinaria y Equipo', 'Infraestructura', 'Naves Industriales'],
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop' // Construction/Industry
    },
    {
      name: 'Sector Terciario',
      highlight: 'Servicios y Comercio',
      desc: 'Impulso para turismo, transporte, educación, sanidad y servicios financieros.',
      details: ['Expansión de negocio', 'Flotillas', 'Equipamiento'],
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop' // Services
    }
  ];

  setCategory(cat: CategoryType) {
    this.activeCategory = cat;
  }
}
