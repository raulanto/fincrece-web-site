import { TestBed } from '@angular/core/testing';

import { QuoteState } from './quote-state';

describe('QuoteState', () => {
  let service: QuoteState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
