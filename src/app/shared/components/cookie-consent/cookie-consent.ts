import {Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.css',
})
export class CookieConsent implements OnInit {

  isVisible = false;
  private consentKey = 'fincrece_cookie_consent';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const consent = localStorage.getItem(this.consentKey);
      if (!consent) {
        setTimeout(() => {
          this.isVisible = true;
        }, 2000);
      }
    }
  }

  accept() {
    this.savePreference('accepted');
    this.setCookie('user_tracking', 'enabled', 365);
    this.closeBanner();
  }

  reject() {
    this.savePreference('rejected');
    this.setCookie('user_tracking', 'disabled', 365);
    this.closeBanner();
  }

  private savePreference(status: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.consentKey, status);
    }
  }

  private closeBanner() {
    this.isVisible = false;
  }

  /**
   * Helper para guardar una cookie real en el navegador
   */
  private setCookie(name: string, value: string, days: number) {
    if (isPlatformBrowser(this.platformId)) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
    }
  }
}
