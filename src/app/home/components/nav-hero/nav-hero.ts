import { Component, HostListener } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-nav-hero',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './nav-hero.html',
  styleUrl: './nav-hero.css',
  standalone: true,
})
export class NavHero {
  isMenuOpen = false;
  scrolled = false;
  logoPath: string = 'assets/logo.png';
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  getNavClasses(): string {
    const baseClasses = [];

    if (this.scrolled) {
      baseClasses.push('bg-onyx/90 backdrop-blur-md border-b border-neutral-500');
    } else if (!this.isMenuOpen) {
      baseClasses.push('bg-transparent');
    }

    if (this.isMenuOpen) {
      baseClasses.push('bg-onyx-500');
    }

    return baseClasses.join(' ');
  }
}
