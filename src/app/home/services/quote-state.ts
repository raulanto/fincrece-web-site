import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class QuoteState {
  private amountSource = new BehaviorSubject<number>(10000);
  currentAmount$ = this.amountSource.asObservable();

  constructor() { }

  setAmount(amount: number) {
    this.amountSource.next(amount);
  }
}
