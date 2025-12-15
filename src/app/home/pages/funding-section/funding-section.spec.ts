import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingSection } from './funding-section';

describe('FundingSection', () => {
  let component: FundingSection;
  let fixture: ComponentFixture<FundingSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundingSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundingSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
