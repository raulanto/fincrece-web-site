import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-nav-internal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-internal.html',
  styleUrl: './nav-internal.css',
})
export class NavInternal {
  isMenuOpen = false;
  isVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {

      const threshold = window.innerHeight - 200;

      const newIsVisible = window.scrollY > threshold;

      if (this.isVisible !== newIsVisible) {
        this.isVisible = newIsVisible;
        if (!this.isVisible) this.isMenuOpen = false;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  getNavClasses(): string {

    const base = 'fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out border border-white/10 shadow-2xl backdrop-blur-md bg-dark-amethyst-500 rounded-full';

    const state = this.isVisible
      ? 'top-6 opacity-100 visible'
      : '-top-24 opacity-0 invisible';

    return `${base} ${state}`;
  }
}
