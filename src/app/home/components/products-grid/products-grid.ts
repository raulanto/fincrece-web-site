import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  showDetails: boolean; // Controla la animación
  features: string[];
  description: string;
}
@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid {
  products: Product[] = [
    {
      id: 1,
      title: 'Crédito Infraestructura',
      category: 'Maquinaria y Equipo',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', // Maquinaria industrial
      showDetails: false,
      features: [
        'Financiamiento hasta el 80% (20% inicial)',
        'Montos desde $100,000 MXN',
        'Plazos de hasta 5 años',
        'Pagos adaptados al proyecto',
        'Comisión apertura 1.75% + IVA',
        'Adquisición o reposición de maquinaria',
        'Construcción de naves industriales',
        'Inversión en pie de cría (Agro)',
        'Tasa moratoria 2x ordinaria'
      ],
      description:'Crédito a largo plazo para crecer tu empresa y modernizarte sin frenar tu crecimiento.'
    },
    {
      id: 2,
      title: 'Arrendamiento Financiero',
      category: 'Vehículos y Activos',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop', // Flota de autos/Llaves
      showDetails: false,
      features: [
        'Financiamiento hasta 80% del valor',
        'Montos: $100k a $10M MXN',
        'Plazos hasta 4 años',
        'Opción de compra final (6% valor factura)',
        'Rentas en depósito (2 mensualidades)',
        'Seguro cobertura total financiable',
        'Rastreo vehicular obligatorio',
        'Deducción fiscal de rentas'
      ],
      description:'Financia vehículos nuevos para tu negocio sin comprometer tu capital de trabajo.'
    },
    {
      id: 3,
      title: 'Capital de Trabajo',
      category: 'Liquidez y Operación',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbold.com.ec%2Fwp-content%2Fuploads%2F2021%2F11%2FDestacada-PP-Capital-de-Trabajo.jpg&f=1&nofb=1&ipt=45443323b333adebe2d6c784a90d89664e09fed9f8958870d4bcfb56ab12f7d6', // Reunión de negocios/Almacén
      showDetails: false,
      features: [
        'Línea revolvente ($100k - $10M MXN)',
        'Financiamiento hasta 80%',
        'Plazos hasta 5 años',
        'Intereses solo sobre monto dispuesto',
        'Disponibilidad permanente',
        'Cubre costos y gastos operativos',
        'Garantías flexibles (Hipotecaria/Líquida)',
        'Tasa moratoria 2x ordinaria'
      ],
      description:'Crédito flexible que te da liquidez para cubrir gastos e imprevistos sin afectar tu capital'

    },
    {
      id: 4,
      title: 'Préstamos de Nómina',
      category: 'Beneficio Empleados',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop', // Personas felices oficina
      showDetails: false,
      features: [
        'Montos desde $1,000 hasta $150,000 MXN',
        'Descuento quincenal vía nómina',
        'Plazos según convenio',
        'Sin comisión por apertura',
        'Seguro de vida incluido',
        'Respuesta rápida',
        'Para base, confianza y eventuales',
        'Trámite simplificado'
      ],
      description:'Créditos personales con descuento vía nómina, rápidos y seguros para cubrir necesidades sin afectar tus finanzas.'
    }
  ];
  toggleDetails(index: number) {
    this.products[index].showDetails = !this.products[index].showDetails;
  }
}
