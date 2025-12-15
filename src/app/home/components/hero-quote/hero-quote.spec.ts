import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroQuote } from './hero-quote';

describe('HeroQuote', () => {
  let component: HeroQuote;
  let fixture: ComponentFixture<HeroQuote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroQuote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroQuote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
