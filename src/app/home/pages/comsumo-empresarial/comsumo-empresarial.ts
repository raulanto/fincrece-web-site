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
  activeCategory: CategoryType = 'empresarial'; // Empezamos con empresarial para lucir el efecto horizontal

  // Control de estado para saber qué item está expandido
  expandedSectorIndex: number = 0; // Para el acordeón horizontal (Empresas)
  expandedProductIndex: number | null = null; // Para las tarjetas verticales (Personas)

  // DATOS EMPRESARIALES (Más detallados)
  sectors = [
    {
      title: 'Sector Primario',
      subtitle: 'Agricultura y Ganadería',
      desc: 'Soluciones de fondeo para ciclos productivos, desde la siembra hasta la cosecha.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2000&auto=format&fit=crop',
      features: [
        'Crédito de Avío para insumos y semillas.',
        'Crédito Refaccionario para maquinaria.',
        'Plazos ajustados al ciclo de cosecha.',
        'Garantías prendarias sobre la producción.'
      ]
    },
    {
      title: 'Sector Secundario',
      subtitle: 'Industria y Construcción',
      desc: 'Capital para la transformación de materia prima y desarrollo de infraestructura.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop',
      features: [
        'Financiamiento de naves industriales.',
        'Adquisición de maquinaria pesada.',
        'Factoraje para liquidez inmediata.',
        'Crédito puente para constructores.'
      ]
    },
    {
      title: 'Sector Terciario',
      subtitle: 'Comercio y Servicios',
      desc: 'Impulso para empresas de servicios, turismo, transporte y tecnología.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
      features: [
        'Remodelación y equipamiento hotelero.',
        'Renovación de flotillas de transporte.',
        'Capital de trabajo revolvente.',
        'Arrendamiento puro de equipo tecnológico.'
      ]
    }
  ];

  // DATOS CONSUMO (Más detallados)
  products = [
    {
      title: 'Nómina',
      tag: 'Efectivo',
      shortDesc: 'Préstamo personal con descuento automático.',
      fullDesc: 'La forma más sencilla de obtener liquidez. Sin aval y con autorización en 24 horas para imprevistos o proyectos personales.',
      requirements: ['INE Vigente', 'Últimos 3 recibos de nómina', 'Comprobante de domicilio', 'Antigüedad laboral de 1 año'],
      benefits: ['Tasa fija anual', 'Sin comisión por apertura', 'Pagos quincenales fijos']
    },
    {
      title: 'Automotriz',
      tag: 'Movilidad',
      shortDesc: 'Estrena auto o moto nuevo o seminuevo.',
      fullDesc: 'Financiamiento flexible para que adquieras el vehículo que necesitas para tu familia o tu trabajo diario.',
      requirements: ['Enganche desde el 10%', 'Buen historial crediticio', 'Comprobante de ingresos'],
      benefits: ['Seguro de auto financiado', 'Plazos hasta 60 meses', 'Abonos a capital sin penalización']
    },
    {
      title: 'Vivienda',
      tag: 'Patrimonio',
      shortDesc: 'Construcción, compra o remodelación.',
      fullDesc: 'Tu hogar es tu mayor inversión. Te apoyamos para comprar terreno, construir en terreno propio o remodelar tu casa actual.',
      requirements: ['Escrituras del terreno (si aplica)', 'Proyecto de obra', 'Licencia de construcción'],
      benefits: ['Asesoría técnica gratuita', 'Ministraciones según avance de obra', 'Tasa preferencial']
    }
  ];

  setCategory(cat: CategoryType) {
    this.activeCategory = cat;
    this.expandedProductIndex = null; // Reset al cambiar
  }

  toggleProduct(index: number) {
    if (this.expandedProductIndex === index) {
      this.expandedProductIndex = null;
    } else {
      this.expandedProductIndex = index;
    }
  }

  setActiveSector(index: number) {
    this.expandedSectorIndex = index;
  }
}
