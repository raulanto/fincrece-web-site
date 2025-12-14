import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersFloat } from './partners-float';

describe('PartnersFloat', () => {
  let component: PartnersFloat;
  let fixture: ComponentFixture<PartnersFloat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersFloat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnersFloat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
