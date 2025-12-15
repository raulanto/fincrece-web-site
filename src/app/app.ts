import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CookieConsent} from './shared/components/cookie-consent/cookie-consent';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CookieConsent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'fincrece-web-site';
}
