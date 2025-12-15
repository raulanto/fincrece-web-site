import {Component, OnInit} from '@angular/core';
import {QuoteState} from '../../home/services/quote-state';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


interface AmortizationRow {
  no: number;
  date: Date;
  payment: number;
  interest: number;
  capital: number;
  vat: number;
  balance: number;
}

@Component({
  selector: 'app-detail-quote',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './detail-quote.html',
  styleUrl: './detail-quote.css',
})
export class DetailQuote implements  OnInit {

  // --- DATOS DEL USUARIO ---
  monthlyIncome: number | null = null; // Nuevo campo
  amount: number = 10000;
  term: number = 24;

  // --- CONFIGURACIÓN FINANCIERA ---
  interestRateAnnual: number = 0.45;
  vatRate: number = 0.16;
  availableTerms = [12, 24, 36, 48, 72];

  // --- RESULTADOS ---
  paymentAmount: number = 0;
  totalPayment: number = 0; // Total a pagar al final
  startDate: Date = new Date();
  endDate: Date = new Date();
  schedule: AmortizationRow[] = [];

  showTable: boolean = false;

  constructor(private quoteState: QuoteState) {}

  ngOnInit() {
    this.quoteState.currentAmount$.subscribe(val => {
      if (val) this.amount = val;
      this.calculateLoan();
    });
  }

  calculateLoan() {

    if (!this.amount || this.amount < 1000) return;

    this.startDate = this.calculateFirstPaymentDate();

    const ratePerPeriod = this.interestRateAnnual / 24;


    const numerator = ratePerPeriod * Math.pow(1 + ratePerPeriod, this.term);
    const denominator = Math.pow(1 + ratePerPeriod, this.term) - 1;
    const basePayment = this.amount * (numerator / denominator);


    this.paymentAmount = basePayment * (1 + (this.vatRate * 0.5));


    this.totalPayment = this.paymentAmount * this.term;


    this.generateSchedule(ratePerPeriod, basePayment);
  }

  generateSchedule(ratePerPeriod: number, fixedPayment: number) {
    this.schedule = [];
    let currentBalance = this.amount;
    let currentDate = new Date(this.startDate);

    for (let i = 1; i <= this.term; i++) {
      const interest = currentBalance * ratePerPeriod;
      const vat = interest * this.vatRate;
      let capital = fixedPayment - interest;

      if (i === this.term || currentBalance < capital) {
        capital = currentBalance;
      }

      const totalPay = capital + interest + vat;
      currentBalance -= capital;

      this.schedule.push({
        no: i,
        date: new Date(currentDate),
        payment: totalPay,
        interest: interest,
        capital: capital,
        vat: vat,
        balance: currentBalance < 0 ? 0 : currentBalance
      });

      currentDate = this.getNextDate(currentDate);
    }
    this.endDate = this.schedule[this.schedule.length - 1].date;
  }


  calculateFirstPaymentDate(): Date {
    const today = new Date();
    const day = today.getDate();
    let nextDate = new Date(today);


    if (day < 10) {
      nextDate.setDate(15);
    } else if (day < 25) {
      nextDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    } else {
      nextDate = new Date(today.getFullYear(), today.getMonth() + 1, 15);
    }
    return nextDate;
  }

  getNextDate(date: Date): Date {
    const d = new Date(date);
    const day = d.getDate();

    if (day <= 15) {
      return new Date(d.getFullYear(), d.getMonth() + 1, 0);
    } else {
      return new Date(d.getFullYear(), d.getMonth() + 1, 15);
    }
  }

  getSliderPercentage(): number {
    return ((this.amount - 1000) / (150000 - 1000)) * 100;
  }
}
