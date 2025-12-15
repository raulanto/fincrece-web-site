import {
  Component,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-features.html',
  styleUrls: ['./scroll-features.css']
})
export class ScrollFeatures implements AfterViewInit, OnDestroy {

  @ViewChildren('textSection') textSections!: QueryList<ElementRef>;
  activeIndex = 0;
  private observer: IntersectionObserver | null = null;

  sections = [
    {
      id: '01',
      title: 'Sector Consumo (Nómina)',
      subtitle: 'Control total desde cualquier lugar',
      description: 'Soluciones financieras para empleados y nóminas.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '02',
      title: 'Sector Comercio',
      subtitle: 'Protección de nivel institucional',
      description: 'Créditos y asesoría para comercios.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop'
    },
    {
      id: '03',
      title: 'Sector Servicio',
      subtitle: 'El futuro de tus datos',
      description: 'Financiamiento para empresas de servicios.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '04',
      title: 'Actividad Agroindustrial',
      subtitle: 'Atención personalizada 24/7',
      description: 'Apoyo financiero para agroindustria.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '05',
      title: 'Sector Agropecuario',
      subtitle: 'Atención personalizada 24/7',
      description: 'Créditos y seguros para el campo.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '06',
      title: 'Sector Infraestructura',
      subtitle: 'Atención personalizada 24/7',
      description: 'Créditos y seguros para infraestructura.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver();
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupObserver() {
    const options = {
      root: null,

      threshold: 0.5
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = this.textSections.toArray().findIndex(el => el.nativeElement === entry.target);
          if (index !== -1) {
            this.activeIndex = index;
          }
        }
      });
    }, options);

    this.textSections.forEach(section => {
      this.observer?.observe(section.nativeElement);
    });
  }


  @HostListener('scroll', ['$event'])
  onMobileScroll(event: Event) {
    if (window.innerWidth >= 1024) return;

    const container = event.target as HTMLElement;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;

    const newIndex = Math.round(scrollLeft / width);
    if (newIndex !== this.activeIndex) {
      this.activeIndex = newIndex;
    }
  }

}
