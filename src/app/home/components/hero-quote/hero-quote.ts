import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {QuoteState} from '../../services/quote-state';

@Component({
  selector: 'app-hero-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-quote.html',
  styleUrl: './hero-quote.css',
})
export class HeroQuote {
  amount: number = 10000;

  constructor(private router: Router, private quoteState: QuoteState) {
  }


  getPercentage(): number {
    const min = 1000;
    const max = 150000;
    return ((this.amount - min) / (max - min)) * 100;
  }

  goToDetails() {
    this.quoteState.setAmount(this.amount);
    this.router.navigate(['/cotizar-detalle']);
  }
}
